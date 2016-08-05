package day4;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;

public class RwSortUpcase {

	public RwSortUpcase() {
		// TODO Auto-generated constructor stub
	}


			public static void readSortWrite(String path, Writer w) {

				BufferedReader br = null;
				ArrayList al = new ArrayList();

				try {

					String sCurrentLine;

					br = new BufferedReader(new FileReader("C:\\Users\\admin\\GitTest\\ssa4week\\day4\\src\\day4\\readme.txt"));

					while ((sCurrentLine = br.readLine()) != null) {
						//System.out.println(sCurrentLine);
						al.add(sCurrentLine);
					}

				} catch (IOException e) {
					e.printStackTrace();
				} finally {
					try {
						if (br != null)br.close();
					} catch (IOException ex) {
						ex.printStackTrace();
					}
				}
	            Collections.sort(al);
	            
	            
		        try {

		            FileWriter fw = new FileWriter("C:\\Users\\admin\\GitTest\\ssa4week\\day4\\src\\day4\\readmeSorted.txt",true);
	 //               BufferedWriter bfw = new BufferedWriter(fw);
		            fw.write(System.lineSeparator());


	            
	            for (int i = 1; i < al.size(); i++){
	            	
	            	fw.write(System.lineSeparator());
      	
//	            	fw.write((String)al.get(i));
	               fw.write(w.write((String)al.get(i)));
	            }
				
	            fw.close();
	        } catch (IOException ex) {
	            System.err.println("Couldn't log this: ");
	        }
				
			}

	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		RwSortUpcase rsuc = new RwSortUpcase();
		UpperWriter uw = new UpperWriter("C:\\Users\\admin\\GitTest\\ssa4week\\day4\\src\\day4\\readmeSorted.txt");
		rsuc.readSortWrite("C:\\Users\\admin\\GitTest\\ssa4week\\day4\\src\\day4\\readmeSorted.txt",uw);

	}

}

interface Writer{
	String write(String s) throws IOException;
    void close() throws IOException;
} // end interface 


class UpperWriter implements Writer {
    private String path;
    private FileWriter file;
    
    public UpperWriter(String path) {
        this.path = path;
        // open file
    }
    
    public String write(String s) throws IOException {
    	s = s.toUpperCase();
        return s;
    }
    
    public void close() throws IOException {
        
    }
}