<%@ page import = "java.util.*,sdsu.*;" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
	<table>
		<tr>
			<th>sku</th>
			<th>category</th>
			<th>vendor</th>
			<th>model</th>
			<th>description</th>
			<th>features</th>
			<th>image</th>
			<th>cost</th>
			<th>retail</th>
		</tr>
	<c:forEach items="${p_beans}" var="item">
		<tr>
			<td>${item.sku}</td>
			<td>${item.category}</td>
			<td>${item.vendor}</td>
			<td>${item.model}</td>
			<td>${item.description}</td>
			<td>${item.features}</td>
			<td>${item.image}</td>
			<td>${item.cost}</td>
			<td>${item.retail}</td>
		</tr>
	</c:forEach>

        </table>
