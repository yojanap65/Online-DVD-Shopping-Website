var proj3_data;
var toggle = 1;
var cartArray;
var cart;
var THANK_YOU_PAGE = "http://jadran.sdsu.edu/jadrn040/confirm.html";

function checkValidState(stateName) {
    var states = new Array("AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
        "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
        "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
        "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
        "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
        "AS", "DC", "FM", "GU", "MH", "MP", "PR", "PW", "VI");
    for (var i = 0; i < states.length; i++) {
        if (states[i] == $.trim(stateName))
            return true;
    }
    return false;
}

function isValidEmail(email) {
    var regex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return regex.test(email);
}


$(document).ready(function() {
	cartArray = new Array();

    function validateData() {
        var fname = $('#fname').val(),

            address = $('#address').val(),
            city = $('#city').val(),
            state = $('#state').val(),
            zipcode = $('#zipcode').val(),


            phoneb = $('#phoneb').val(),
            phones = $('#phones').val(),
            address1 = $('#address11').val(),
            city1 = $('#city1').val(),
            state1 = $('#state1').val(),
            zipcode1 = $('#zipcode1').val(),
            credit = $('#credit').val(),

            month = $('#CCExpiresMonth').val(),

            year = $('#CCExpiresYear').val(),

            phone = $('#phone').val(),
            email = $('#email').val(),
            paytype = $('#pay');


        var errorMessage = $('#error_message');
        if ($.trim(email).length == 0) {
            errorMessage.text("Please enter email ID");
            $('#email').focus();
            return false;
        } else if (!isValidEmail(email)) {
            errorMessage.text("Please enter valid email ID");
            $('#email').focus();
            return false;
        } else if ($.trim(fname).length == 0) {
            $('#error_message').text("Please enter first name");
            $('#fname').focus();
            return false;
        } else if ($.trim(lname).length == 0) {
            $('#error_message').text("Please enter last name");
            $('#lname').focus();
            return false;
        } else if ($.trim(address).length == 0) {
            errorMessage.text("Please enter address");
            $('#address').focus();
            return false;
        } else if ($.trim(city).length == 0) {
            errorMessage.text("Please enter city");
            $('#city').focus();
            return false;
        } else if ($.trim(state).length == 0) {
            errorMessage.text("Please enter state");
            $('#state').focus();
            return false;
        } else if (!checkValidState($('#state').val().toUpperCase())) {
            errorMessage.text("Please enter valid state");
            $('#state').focus();
            return false;
        } else if ($.trim(zipcode).length == 0) {
            errorMessage.text("Please enter zipcode");
            $('#zipcode').focus();
            return false;
        } else if (!$.isNumeric(zipcode)) {
            errorMessage.text("Zipcode should be numeric");
            $('#zipcode').focus();
            return false;
        } else if (zipcode.length != 5) {
            errorMessage.text("Please enter valid zipcode");
            $('#zipcode').focus();
            return false;
        } else if ($.trim(phoneb).length == 0) {
            errorMessage.text("Please enter billing phone number");
            $('#phoneb').focus();
            return false;
        } else if (!$.isNumeric(phoneb)) {
            errorMessage.text("Please enter numeric billing phone number");
            $('#phoneb').focus();
            return false;
        } else if (phoneb.length != 10) {
            errorMessage.text("Please enter 10 digit phone number");
            $('#phoneb').focus();
            return false;
        } else if ($.trim(fname1).length == 0) {
            $('#error_message').text("Please enter first name(Shipping)");
            $('#fname1').focus();
            return false;
        } else if ($.trim(lname1).length == 0) {
            $('#error_message').text("Please enter last name(Shipping)");
            $('#lname1').focus();
            return false;
        } else if ($.trim(address1).length == 0) {
            errorMessage.text("Please enter shipping address");
            $('#address1').focus();
            return false;
        } else if ($.trim(city1).length == 0) {
            errorMessage.text("Please enter shipping city");
            $('#city1').focus();
            return false;
        } else if ($.trim(state1).length == 0) {
            errorMessage.text("Please enter shipping state");
            $('#state1').focus();
            return false;
        } else if (!checkValidState($('#state1').val().toUpperCase())) {
            errorMessage.text("Please enter valid shipping state");
            $('#state1').focus();
            return false;
        } else if ($.trim(zipcode1).length == 0) {
            errorMessage.text("Please enter shipping zipcode");
            $('#zipcode1').focus();
            return false;
        } else if (!$.isNumeric(zipcode1)) {
            errorMessage.text("Shipping Zipcode should be numeric");
            $('#zipcode1').focus();
            return false;
        } else if (zipcode1.length != 5) {
            errorMessage.text("Please enter valid shipping zipcode");
            $('#zipcode1').focus();
            return false;
        } else if ($.trim(phones).length == 0) {
            errorMessage.text("Please enter shipping phone number");
            $('#phones').focus();
            return false;
        } else if (!$.isNumeric(phones)) {
            errorMessage.text("Please enter numeric shippingphone number");
            $('#phones').focus();
            return false;
        } else if (phones.length != 10) {
            errorMessage.text("Please enter 10 digit phone number");
            $('#phones').focus();
            return false;
        } else if (!$("input[name*='pay']:checked").val()) {
            errorMessage.text("Please select payment method");
            $('#pay').focus();
            return false;
        } else if ($.trim(credit).length == 0) {
            errorMessage.text("Please enter credit card number");
            $('#credit').focus();
            return false;
        } else if (!$.isNumeric(credit)) {
            errorMessage.text("Credit card number should be numeric");
            $('#credit').focus();
            return false;
        } else if ($.trim(month).length == 0) {
            errorMessage.text("Please select expiry month");
            $('#month').focus();
            return false;
        } else if ($.trim(year).length == 0) {
            errorMessage.text("Please select expiry year");
            $('#year').focus();
            return false;
        } else {
            return true;
        }
    }

    cart = new shopping_cart("jadrn040");



    proj3_data = new Array();

	
    $.get('/jadrn040/servlet/AjaxProductSKU', storeData);

    updateDisplay();



    function updateDisplay() {
        $('#ordernow').hide();
        cartArray = cart.getCartArray();
        if (cartArray.length == 0) {

            $('#cart').html("<h2>Your Cart is Empty. Please add some DVDs !</b><br /><br /></h2>");
            $('#checkout').hide();
            return;
        }
        var toWrite = "<h2>Shopping cart</h2><br />";
        toWrite += "<table>";

        toWrite += "<tr><th>Title</th><th>Quantity</th><th>Price/Unit</th><th>Price</th><th>Update cart</th></tr>";
        var totalPrice = 0;
        for (var i = 0; i < cartArray.length; i++) {
            toWrite += "<tr>";
			//"SELECT p.sku,v.vendorName, c.categoryName, p.vendorModel,p.description,p.features,p.image,p.cost,p.retail FROM product p, vendor v, category c where p.catId= c.categoryId and  p.venId = v.vendorId";
			
            for (var j = 0; j < proj3_data.length; j++) {
                if (cartArray[i][0] == proj3_data[j][0]) {
					//alert(proj3_data[j]);
                    toWrite += "<td><b>" + proj3_data[j][3] + "</b></br>";
                    toWrite += "<img src=\"/~jadrn040/proj1/images/" +
                        proj3_data[j][0] + "\" alt=\"" + proj3_data[j][3] + "\"" +
                        " width=\"100px\"  /></td>";
                    toWrite += "<td>" + cartArray[i][1] + "</td>";
                    totalPrice = parseFloat(totalPrice) + (parseFloat(proj3_data[j][8]) * parseInt(cartArray[i][1]));
                    toWrite += "<td>" + proj3_data[j][8] + "</td>";
                    toWrite += "<td>" + (parseFloat(proj3_data[j][8]) * parseInt(cartArray[i][1])).toFixed(2) + "</td>";
                    toWrite += "<td>" + " <input type='button' class='delProduct' id='" + cartArray[i][0] + "' value='Remove' />";
                    var qtyID = proj3_data[j][0] + "qty";

                    toWrite += "<br /><br /><input name='quantity' type='number' id='" + qtyID + "' value='1' min='1' max='"+ proj3_data[j][9] +"' size='3' />";
                    toWrite += "<input type='button' value='Update'" +
                        "class='updatebuy' id='" + proj3_data[j][0] + "' /> </td>";

                    toWrite += "</tr>";

                }
            }
        }
        toWrite += "</table>";
        var shipcharge = cartArray.length * 5;
        var ordertotal = parseInt(shipcharge) + parseFloat((totalPrice + (totalPrice * 0.08)));
        var tax = parseFloat(totalPrice * 0.08);
        toWrite += "<div class='cart1'><label class='carttotal'> Total Price : $ " + totalPrice.toFixed(2) + "</label><br/>";
        toWrite += "<label class='carttotal'> +Shipping charge($5 per new item) : $ " + shipcharge + "</label><br/>";
        toWrite += "<label class='carttotal'> +Tax(8%) : $ " + tax.toFixed(2) + "</label><br/>";
        toWrite += "<label class='carttotal1'> Order Total : $ " + ordertotal.toFixed(2) + "</label></div><br/>";
        $('#cart').html(toWrite);
        $('#count').text(cart.size());
        $('#ordernow').hide();

        $('.delProduct').on('click', function() {

            cart.delete(this.id);
            updateDisplay();

            $('#count').text(cart.size());
        });

    }

    $('#submit_data').on('click', function(e) {
        var isValid = validateData();
		e.preventDefault();
        if (isValid == false) {
            
        }else{
			for(var i=0; i<cartArray.length; i++){
				updateDB(cartArray[i][0], cartArray[i][1]);
		
			}
			
		}
    });
	
	function updateDB(sku, qty) {
	cart.delete(sku);
    var url = "http://jadran.sdsu.edu/jadrn040/servlet/MerchandiseOut";
    var param = "sku=" + sku;
    param = param + "&date=" + getDate();
    param = param + "&qty=" + qty;
    $.post(url, param, confirmationDB);
	}
	
	function confirmationDB(response) {
    //handle after trasaction done
    //alert("in confirm");

    var result = $.trim(response);
    //alert(result);

    if (result != null) {
        //alert("hi11111")
        var res_obj = response.split("|");

        //alert(res_obj[0] + "," + res_obj[1] + "," +res_obj[3]);

        if (res_obj[1] == 2) {
            $('#error_message2').text("Please enter lesser quantity! (In stock: " + quantity + ")");
        }
        //else
        else if (res_obj[0] == 1 && res_obj[1] == 1 && res_obj[2] == 1) {
           // var in_stock = quantity - $("#qty").val();
			window.location.replace(THANK_YOU_PAGE);
            //$('#error_message2').text($("#qty").val() + " Records deleted successfully! In stock:" + in_stock);
        } else
            $('#error_message2').text("Error in updation !");

    } else
        errorMsg2.text("Error in updation!");
	}
	
	function getDate(){
		var d = new Date().getDate();
		var m = new Date().getMonth();
		var y = new Date().getFullYear();
		return d+m+y;
	}

    $('#checkbox1').on('click', function(e) {
        PopulateBilling(this.checked);
    });

    //$('#ordernow').hide();
    $('#checkout').on('click', function() {
        if (toggle == 0) {
            $('#ordernow').hide();

            $('#cart').show();

            toggle = 1;


        } else {
            $('#cart').hide();

            $('#ordernow').show();
            toggle = 0;
        }
    });

    $('#cart').on('click', '.updatebuy', function() {
        var sku = this.id;

        var qtyid = sku + "qty";

        var qty = document.getElementById(qtyid).value;

        cart.delete(sku);
        cart.add(sku, parseInt(qty));
        updateDisplay();
        $(this).next().fadeIn(50).fadeOut(2000);
        //alert(parseInt(cart.size())+3);

        $('#count').text(cart.size());
    });

    function storeData(response) {
        var tmpArray = explodeArray(response, '|');
        for (var i = 0; i < tmpArray.length; i++) {
            var innerArray = explodeArray(tmpArray[i], ';');
            proj3_data[i] = innerArray;
        }
        updateDisplay();
    }

    function explodeArray(item, delimiter) {
        var tempArray = new Array(1);
        var Count = 0;
        var tempString = new String(item);

        while (tempString.indexOf(delimiter) > 0) {
            tempArray[Count] = tempString.substr(0, tempString.indexOf(delimiter));
            tempString = tempString.substr(tempString.indexOf(delimiter) + 1, tempString.length - tempString.indexOf(delimiter) + 1);
            Count = Count + 1
        }

        tempArray[Count] = tempString;
        return tempArray;
    }

    function PopulateBilling(checked) {
        if (checked) {
            $('#fname1').val($('#fname').val());
            $('#lname1').val($('#lname').val());
            $('#address11').val($('#address').val());
            $('#address12').val($('#address2').val());
            $('#city1').val($('#city').val());
            $('#state1').val($('#state').val());
            $('#zipcode1').val($('#zipcode').val());
            $('#phones').val($('#phoneb').val());
        } else {
            $('#fname1').val("");
            $('#lname1').val("");
            $('#address11').val("");
            $('#address12').val("");
            $('#city1').val("");
            $('#state1').val("");
            $('#zipcode1').val("");
            $('#phones').val("");
        }


    }
});