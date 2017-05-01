var proj4_data;
var url="http://jadran.sdsu.edu/jadrn040/servlet/AjaxProductVC?";
var venUrl;
var catUrl;

$(document).ready(function() {
    proj4_data = new Array();
    $.get('http://jadran.sdsu.edu/jadrn040/servlet/AjaxProductVC', storeData);
$.get('http://jadran.sdsu.edu/jadrn040/servlet/AjaxCategory', storeCategory);

$.get('http://jadran.sdsu.edu/jadrn040/servlet/AjaxVendor', storeVendor);

var totalArray ;

    var cart = new shopping_cart("jadrn040");
    $('#count').text(cart.size());
/*
+-------------+---------------+------+-----+---------+-------+
| Field       | Type          | Null | Key | Default | Extra |
+-------------+---------------+------+-----+---------+-------+
| sku         | char(7)       | NO   | PRI | NULL    |       |
| catId       | int(11)       | YES  | MUL | NULL    |       |
| venId       | int(11)       | YES  | MUL | NULL    |       |
| vendorModel | varchar(50)   | YES  |     | NULL    |       |
| description | varchar(1024) | YES  |     | NULL    |       |
| features    | varchar(1024) | YES  |     | NULL    |       |
| cost        | decimal(10,2) | YES  |     | NULL    |       |
| retail      | decimal(10,2) | YES  |     | NULL    |       |
| image       | varchar(1024) | YES  |     | NULL    |       |
+-------------+---------------+------+-----+---------+-------+

*/
//"SELECT sku 0, catId 1, vendorModel 2, description 3, features 4, cost 5, retail 6 FROM products order by category"

 

    $("#content").on('click', ".buy", function() {
        var sku = this.id;
        var qtyid = this.id + "qty";
        var qty = document.getElementById(qtyid).value;
        //alert(qty);
        cart.add(sku, parseInt(qty));

        $(this).next().fadeIn(50).fadeOut(2000);
        //alert(parseInt(cart.size())+3);

        $('#count').text(cart.size());
    });



    function storeData(response) {
       var handle = document.getElementById('content');

        if (response != null)
            handle.innerHTML = response;
        //displayProducts();
    }
	function storeVendor(response) {
		//alert(response);
		
		var vendorArray = response.split("|");
		//alert(vendorArray);
		
		for(var i=0;i<vendorArray.length;i++){
			$('#vendor').append("<option value= '"+vendorArray[i]+"'>" + vendorArray[i]+ "</option>");
			
		}
       
    }
	function storeCategory(response) {
      var categoryArray = response.split("|");
		
		for(var i=0;i<categoryArray.length;i++){
			$('#category').append("<option value= '"+categoryArray[i]+"'>" + categoryArray[i]+ "</option>");
			
		}

        
    }
	function storeAll(response) {
      totalArray = response.split("|");
		
		for(var i=0;i<totalArray.length;i++){
			$('#category').append("<option value= '"+totalArray[i]+"'>" + totalArray[i]+ "</option>");
			
		}

        
    }
	var venStr = $('#vendor').value;
	var catStr = $('#category').value;
	
	
	$('#vendor').on("change", function(){
		
		venUrl = this.value;
		
		$.get(getURL(), storeData);
	});
	
	$('#category').on("change", function(){
		catUrl = this.value;
		
		$.get(getURL(), storeData);
	});
	
	function getURL(){
		var cat1 = "";
		var ven1 = "";
		
		if(venUrl != "")
			if(venUrl != undefined)
				ven1 = "vendor=" +venUrl + "&";
		if(catUrl !="")
			if(catUrl != undefined)
				cat1 = "category=" +catUrl;
		
		return url + ven1 + cat1;
	}
	
	
	
});