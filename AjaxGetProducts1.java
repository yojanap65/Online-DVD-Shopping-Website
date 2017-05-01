import java.io.IOException;
import java.io.PrintWriter;
import java.util.*;

import javax.servlet.*;
import javax.servlet.http.*;
import sdsu.*;

public class AjaxGetProducts1 extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException  {
	PrintWriter out = response.getWriter();
	Vector<String[]> v = DBHelper.runQuery("SELECT * FROM product;");
	String answer = "";
	for(int i=0; i < v.size(); i++)  {
		String [] tmp = v.elementAt(i);
		for(int j=0; j < 9; j++)
		      answer += tmp[j]+"|";
		answer += "|";
		}  
	answer = answer.substring(0,answer.length()-2);
	out.print(answer);						    
    }
}



