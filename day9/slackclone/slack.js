var express = require('express');
var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');

var filename = 'scratch.db';
var dbexists = false;
try {
    fs.accessSync(filename);
    dbexists = true;
} catch (ex) {
    dbexists = false;
}

var db = new sqlite3.Database('scratch.db');


if (!dbexists) {
    db.serialize(function() {
        var createUserTableSql = "CREATE TABLE IF NOT EXISTS USER " +
                       "(USERID         CHAR(25)    PRIMARY KEY     NOT NULL," +
                       " NAME           CHAR(50)                    NOT NULL, " + 
                       " PASSWORD       CHAR(50)                    NOT NULL)"; 

        var createMessageTableSql = "CREATE TABLE IF NOT EXISTS MESSAGE " +
                    "(MESSAGEID        CHAR(25)    NOT NULL," +
                    " MESSAGE          CHAR(1000)   NOT NULL, " + 
                    " DATE             TEXT        NOT NULL," +
					" CHANNELID        CHAR(25)    NOT NULL," +
					" USERID           CHAR(25)    NOT NULL)"; 

        var createTeamTableSql = "CREATE TABLE IF NOT EXISTS TEAM " +
                    "(TEAMID        CHAR(25)    NOT NULL," +
                    " TEAMNAME    CHAR(140)   NOT NULL)"; 
					
					
        var createChannelTableSql = "CREATE TABLE IF NOT EXISTS CHANNEL " +
                    "(CHANNELID        CHAR(25)    NOT NULL," +
                    " CHANNELNAME    CHAR(140)   NOT NULL, " +
					" DESCRIPTION    CHAR(140)   NOT NULL, " +
                    " TEAMID         CHAR(140)   NOT NULL)"; 

        db.run(createUserTableSql);
        db.run(createTweetTableSql);
        db.run(createFollowerTableSql);

        var insertUserSql = "INSERT INTO USER (USERID, NAME, PASSWORD) " +
            "VALUES ('shuvo',   'Shuvo Ahmed',      'shuvopassword')," +
                   "('abu',     'Abu Moinuddin',    'abupassword')," +
                   "('charles', 'Charles Walsek',   'charlespassword')," +
                   "('beiying', 'Beiying Chen',     'beiyingpassword')," +
                   "('swarup',  'Swarup Khatri',    'swarup');"; 
        
        var insertFollowerSql = "INSERT INTO FOLLOWER (USERID, FOLLOWERID) " +
           "VALUES ('shuvo', 'abu')," +
                  "('abu', 'swarup')," +
                  "('abu', 'charles')," +
                  "('beiying', 'shuvo');";
                

        var insertTweetSql = "INSERT INTO TWEET (USERID, TWEET, DATE) " +
             "VALUES ('shuvo',      'Welcome to Tweeter Clone',                     '2016-08-05 12:45:00'), " +
                    "('abu',        'Tweet by Abu',                                 '2016-08-05 12:46:00'), " +
                    "('abu',        'Lets do Node.js',                              '2016-08-08 12:46:00'), " +
                    "('abu',        'Lunch Time!',                                  '2016-08-08 12:30:00'), " +
                    "('abu',        'We are in 2-nd week of boot camp training!',   '2016-08-08 08:30:00'), " +
                    "('shuvo',      'SQLite is easy configuration!',                '2016-08-05 09:30:00'), " +
                    "('shuvo',      'Rio Olympic!',                                 '2016-08-05 09:30:00'), " +
                    "('shuvo',      'Welcome to 2nd week of boot camp...',          '2016-08-08 08:30:00'), " +
                    "('charles',    'SQLite is cool!',                              '2016-08-05 11:30:00'), " +
                    "('charles',    'Not bad for a Mainframe developer...',         '2016-08-08 09:30:00'), " +
                    "('charles',    'Having fun with HTML / CSS!',                  '2016-08-05 11:30:00'), " +
                    "('charles',    'Github!',                                      '2016-08-05 11:30:00'), " +
                    "('beiying',    'Twitter - Cloned!',                            '2016-08-08 13:30:00'), " +
                    "('swarup',     'Tweet, tweet!',                                '2016-08-05 11:30:00'), " +
                    "('shuvo',      'First week of boot camp complete!',            '2016-08-05 16:47:00');"; 
      
        db.run(insertFollowerSql);
        db.run(insertUserSql);
        db.run(insertTweetSql);

        db.each("SELECT * FROM TWEET", function(err, row) {
            console.log(row.USERID + ": " + row.TWEET);
        });
    });
}

 
 // function(err, jsonString) {}
function getFollowersJSON(userId, callBack) {
    var query = "SELECT USERID, FOLLOWERID FROM FOLLOWER "
         + "  WHERE USERID = '" + userId + "'";
    var followers = [];
    db.serialize(function() {
        db.each(
            query, 
            function(err, row) {
                followers.push(row.FOLLOWERID);
            },
            function (err) {
                callBack(err, JSON.stringify(followers));
            }
        );
    });
}

getFollowersJSON('abu', function (err, jsonString) {
    if (err) {

    }
    console.log(jsonString);
});

db.close();