function fun(){
	let input=document.getElementById("dateOfLaunch").value;
	 let todayDate=new Date().toISOString().slice(0, 10);
	    if(input < todayDate){
	        alert("The entered date is not valid");
	    }
	}
function add(){
	 document.getElementById("status").style.display='block';
	document.getElementById("status").innerHTML="Item removed from Cart Successfully";
	}

function add1(){
	 document.getElementById("status").style.display='block';
	document.getElementById("status").innerHTML="Item removed from Cart Successfully";
	
	 setTimeout(function(){
		 document.getElementById("status").style.display='none';
	 },1000);
	}

function add3(){
	 document.getElementById("status").style.display='block';
	document.getElementById("status").innerHTML="Item added to Cart Successfully";
	
	 setTimeout(function(){
		 document.getElementById("status").style.display='none';
	 },1000);
	}
	
function add4(){
	 document.getElementById("status").style.display='block';
	document.getElementById("status").innerHTML="Item added to Cart Successfully";
	}
