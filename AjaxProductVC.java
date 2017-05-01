import java.io.IOException;
import java.io.PrintWriter;
import java.util.*;

import javax.servlet.*;
import javax.servlet.http.*;
import sdsu.*;

public class AjaxProductVC extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException  {
	PrintWriter out = response.getWriter();
	
	
	String vendor = request.getParameter("vendor");
	String category = request.getParameter("category");
	 //String quantity = request.getParameter("quantity");
        // String option = request.getParameter("option");
		 String query = "SELECT p.sku,v.vendorName, c.categoryName, p.vendorModel,p.description,p.features,p.image,p.cost,p.retail FROM product p, vendor v, category c where p.catId= c.categoryId and  p.venId = v.vendorId";
		 
		 
	
	
	if(vendor != null){
		query += " and v.vendorName = '" + vendor + "'";
	}
	if(category != null){
		query += " and c.categoryName = '" + category + "'";
	}
	query += ";";
	
	Vector<String[]> v = DBHelper.runQuery(query);
	
	/* String answer = "";
	for(int i=0; i < v.size(); i++)  {
		String [] tmp = v.elementAt(i);
		for(int j=0; j < 8; j++)
		      answer += tmp[j]+"|";
		answer += "|";
		}  
	answer = answer.substring(0,answer.length()-2);
	out.print(answer);	 */

ProductBean [] beans = new ProductBean[v.size()];
	for(int i=0; i < v.size(); i++)  {
		
		String [] tmp = v.elementAt(i);
		String query1 = "select on_hand_quantity from on_hand where sku='" + tmp[0] + "';";
		
		System.out.println("VC: " + query1);
		int qty;
		try{
		qty = DBHelper.getValue1(query1, "on_hand_quantity");
		}catch(Exception e){
			qty = -1;
		}
		/*
		public ProductBean(String sku, String category, String vendor,
		String model, String description, String features,
		String image, float cost, float retail) {
		this.sku = sku;
		this.category = category;
		this.vendor = vendor;
		this.model = model;
		this.description = description;
		this.features = features;
		this.image = image;
		this.cost = cost;
		this.retail = retail;
		this.stock = stock;
		}
		*/
		
		 
		 
		 
		beans[i] = new ProductBean(tmp[0],tmp[2],tmp[1],tmp[3],tmp[4],
			tmp[5], tmp[6], Float.parseFloat(tmp[7]),Float.parseFloat(tmp[8]),qty);
			
		
		}
	request.setAttribute("p_beans",beans);
	String toDo = "/products.jsp";
        RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher(toDo); 
        dispatcher.forward(request, response);  	
    }
}



