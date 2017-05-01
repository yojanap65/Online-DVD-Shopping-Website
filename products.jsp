<%@ page import = "java.util.*,sdsu.*;" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

	
	<c:forEach items="${p_beans}" var="item">

		
		<div id="block" >
		<br />
			<img src="http://jadran.sdsu.edu/~jadrn040/proj1/images/${item.image}" /> <br />
			<b>Title:   </b>${item.description}<br /><br/>
			<b>Vendor:  </b>${item.vendor}	<br />		
			<b>Category:</b>${item.category}<br />
			<b>Features:</b>${item.features}<br /><br/>
			<b>Cost:    </b>${item.cost}<br />
			
			<c:if test="${item.stock == '0.0'}">
			<b>Item availability:</b><i class="spanred">Out of Stock</i></br>
			<input class='prodQty' name='quantity' type='number' id="${item.sku}qty" value='1' size='3' min='1' max='${item.stock}' disabled />
            <input type='button' value='Add To Cart' class='buy' id="${item.sku}" disabled />
			</c:if>
			
			<c:if test="${item.stock == '-1.0'}">
			<b>Item availability:</b><i class="spanblue">Coming Soon</i></br>
			<input class='prodQty' name='quantity' type='number' id="${item.sku}qty" value='1' size='3' min='1' max='${item.stock}' disabled />
            <input type='button' value='Add To Cart' class='buy' id="${item.sku}"disabled />
			</c:if>
			
			<c:if test="${item.stock > '0.0'}">
			<c:set var="stock" value="${item.stock}" />
			<b>Item availability:</b><i class="spangreen">${fn:substringBefore(stock,".")}</i></br>
			<input class='prodQty' name='quantity' type='number' id="${item.sku}qty" value='1' size='3' min='1' max='${item.stock}' />
            <input type='button' value='Add To Cart' class='buy' id="${item.sku}" />
			</c:if>
			
			
			<span class="spangreen">Added to Cart</span><br />  <div class='clear_it'></div>
			<br />
			<hr />
		</div>
	</c:forEach>

   


