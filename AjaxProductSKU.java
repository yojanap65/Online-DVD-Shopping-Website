import java.io.IOException;
import java.io.PrintWriter;
import java.util.*;

import javax.servlet.*;
import javax.servlet.http.*;
import sdsu.*;

public class AjaxProductSKU extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException  {
	PrintWriter out = response.getWriter();
	
	String sku = request.getParameter("sku");
	
	String query = "SELECT p.sku,v.vendorName, c.categoryName, p.vendorModel,p.description,p.features,p.image,p.cost,p.retail FROM product p, vendor v, category c where p.catId= c.categoryId and  p.venId = v.vendorId";
		 
	if(sku != null){
		query += " and p.sku = '" + sku + "'";
	}

	query += ";";
	
	
	Vector<String[]> v = DBHelper.runQuery(query);
	
	String answer = "";
	for(int i=0; i < v.size(); i++)  {
		String [] tmp = v.elementAt(i);
		String query1 = "select on_hand_quantity from on_hand where sku='" + tmp[0] + "';";
		
		int qty;
		try{
		qty = DBHelper.getValue1(query1, "on_hand_quantity");
		}catch(Exception e){
			qty = -1;
		}
		for(int j=0; j < 9; j++)
		      answer += tmp[j]+";";
		answer += qty + ";";
		answer += "|";
		
	}  
	answer = answer.substring(0,answer.length()-2);
	out.print(answer);						    
    }
}



