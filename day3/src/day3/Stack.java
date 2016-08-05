package day3;


/**
 * @author admin
 *
 */
public class Stack {

	int stackSize = 10;
	int stackIncrement = 10;
	int[] stack = new int[stackSize];
	int[] tempStack = new int[0];
	
	int lastElement = 0;
	
	/**
	 * 
	 */
	public Stack() {
		// TODO Auto-generated constructor stub
	}
	
	public void push(int param1){
		if (stack.length == this.lastElement){ // need to increase stacksize
			this.tempStack = new int[stack.length + this.stackIncrement];
			for (int i=0; i < stack.length; i++ ){
				tempStack[i] = stack[i];
			}
		}
		for (int i = lastElement; i > 0; i--){
		   stack[i]=stack[i-1];
		}
		stack[0]=param1;
		lastElement++;
	}// end method push

	public int pop(){
//TODO:  do not pop if length is zero 0
		int popValue = 0;
		if (stack.length > 0){
			popValue = stack[0];
			for (int i = stack.length; i > 0; i--){
		       stack[0] = stack[0+1];
			} // end for loop
			System.out.println("Popped:  " + popValue);
			lastElement--;
		}
		else {
			System.out.println("Can't Pop from an empty stack");
		}
		return (popValue);
		
		
	}// end method pop
	
	public void printStack(){
		for (int i=0; i < this.stack.length; i++){
			System.out.println("stack[" + i + "]:  " +stack[i] );
		}
		
	} // end method printStack
	
	
	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Stack stack1 = new Stack();
		stack1.push(6);
		stack1.push(9);
		stack1.printStack();
		stack1.pop();
		stack1.pop();
		stack1.pop();
		stack1.printStack();

	}

}