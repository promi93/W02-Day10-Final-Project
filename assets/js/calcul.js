
var reset;

 function n(dato){ 
     if (reset==true) {
        document.getElementById("operazioni").value = "";
        reset = false;
        document.getElementById("operazioni").value += dato;
     } else {
        document.getElementById("operazioni").value += dato;
     } 
  }
 
 function operazione() { 
 document.getElementById("operazioni").value = eval(document.getElementById("operazioni").value); 
 reset = true
 }
 
 function cancella() { 
  document.getElementById("operazioni").value = ""; 
 }
 
 

// ------------------------------

