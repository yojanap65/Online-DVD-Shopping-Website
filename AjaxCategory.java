import java.io.IOException;
import java.io.PrintWriter;
import java.util.*;

import javax.servlet.*;
import javax.servlet.http.*;
import sdsu.*;

public class AjaxCategory extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException  {
	PrintWriter out = response.getWriter();
	
	String sku = request.getParameter("sku");
	
	String query = "SELECT categoryName FROM category;";
	
	Vector<String[]> v = DBHelper.runQuery(query);
	
	String answer = "";
	for(int i=0; i < v.size(); i++)  {
		String [] tmp = v.elementAt(i);
		
		for(int j=0; j < 1; j++)
		      answer += tmp[j]+"|";		
	}  
	answer = answer.substring(0,answer.length()-1);
	out.print(answer);						    
    }
}



