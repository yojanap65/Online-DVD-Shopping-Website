package sdsu;

public class PersonBean implements java.io.Serializable {

	private String name="John";
	private String address="123 Main St";	
	public PersonBean() {}
	
			
	public String getName() {
		return name;
		}
		
	public String getAddress() {
		return address;
		}		
				
	public void setName(String n) {
		name = n;
		}
		
	public void setAddress(String a) {
		address = a;
		}		
	}		
