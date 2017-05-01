package sdsu;

public class ColorBean implements java.io.Serializable {

	private String color="red";	
        private String code="F00";
        
	public ColorBean() {}
        
	public ColorBean(String color, String code) {
            this.color = color;
            this.code = code;
            }
	
	
	public String getColor() {
		return color;
		}
		
	public String getCode() {
		return code;
		}
		
	public void setColor(String c) {
		color = c;
		}
		
	public void setCode(String c) {
		code = c;
		}
	}		
