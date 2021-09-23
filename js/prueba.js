  var pantalla=document.getElementById('display');
  var punto = document.getElementById('.');
  var signo = document.getElementById('sign');
  var reset = document.getElementById('on');
  var suma = document.getElementById('mas');
  var resta = document.getElementById('menos');
  var multiplicacion = document.getElementById('por');
  var division = document.getElementById('dividido');
  var igual = document.getElementById('igual');
  var uno = document.getElementById('1');
  var dos = document.getElementById('2');
  var tres = document.getElementById('3');
  var cuatro = document.getElementById('4');
  var cinco = document.getElementById('5');
  var seis = document.getElementById('6');
  var siete = document.getElementById('7');
  var ocho = document.getElementById('8');
  var nueve = document.getElementById('9');
  var cero = document.getElementById('0');


var operandoa;
var operandob;
var operacion;




cero.addEventListener("click",function(event){   
    calculo0();       
});


uno.addEventListener("click",function(event){
    calculo1();
});

 dos.addEventListener("click",function(event){
    calculo2();  
});

tres.addEventListener("click",function(event){
  calculo3(); 
});
cuatro.addEventListener("click",function(event){
  calculo4(); 
});
cinco.addEventListener("click",function(event){
  calculo5(); 
});
seis.addEventListener("click",function(event){
  calculo6(); 
});
siete.addEventListener("click",function(event){
  calculo7(); 
});
ocho.addEventListener("click",function(event){
  calculo8(); 
});
nueve.addEventListener("click",function(event){
  calculo9(); 
});



punto.addEventListener("click",function(event){
 alert("punto1");
  pantalla.innerHTML += ".";

//evitar q ponga mas de 1 punto
 // if(pantalla.innerHTML == "."){
 //  alert("1")
 //        pantalla.innerHTML = "";
 //      }
  
});

signo.addEventListener("click",function(event){
  pantalla.innerHTML += "-";
  
});




   reset.addEventListener("click",function(event){
      resetear();
        });

  suma.addEventListener("click",function(event){
      operandoa = pantalla.innerHTML;
      operacion = "+";
      limpiar();
  });
  resta.addEventListener("click",function(event){
      operandoa = pantalla.innerHTML;
      operacion = "-";
      limpiar();
  });
  multiplicacion.addEventListener("click",function(event){
      operandoa = pantalla.innerHTML;
      operacion = "*";
      limpiar();
  });
  division.addEventListener("click",function(event){
      operandoa = pantalla.innerHTML;
      operacion = "/";
      limpiar();
  });
  igual.addEventListener("click",function(event){
      operandob = pantalla.innerHTML;
      resolver();
  });

   function limpiar(){
  pantalla.innerHTML = "";
}
  function resetear(){
  pantalla.innerHTML = 0;
  operandoa = 0;
  operandob = 0;
  operacion = "";
}

function resolver(){
  var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;
    case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;
    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }
  resetear();
  pantalla.innerHTML = res;
}
// esta bien solo faltan las condiciones de la hoja de la nota amarilla



//funciones para botones

function calculo0 (){    
 if(pantalla.innerHTML == "0"){
        pantalla.innerHTML = "";
      }
      if(pantalla.innerHTML.length >= 8){
        // alert("si ay mas de 8 caracteres");
      }else{
        // alert("no ay mas de 8 caracteres");
      pantalla.innerHTML += "0";
      } 
}



function calculo1 (){   
 if(pantalla.innerHTML == "0"){
        pantalla.innerHTML = "";
      }
      if(pantalla.innerHTML.length >= 8){
        // alert("si ay mas de 8 caracteres");
      }else{
        // alert("no ay mas de 8 caracteres");
      pantalla.innerHTML += "1";
      } 
}

function calculo2 (){  
  
 if(pantalla.innerHTML == "0"){
        pantalla.innerHTML = "";
      }
      if(pantalla.innerHTML.length >= 8){
        // alert("si ay mas de 8 caracteres");
      }else{
        // alert("no ay mas de 8 caracteres");
      pantalla.innerHTML += "2";
      } 
}


function calculo3 (){  
 
 if(pantalla.innerHTML == "0"){
        pantalla.innerHTML = "";
      }
      if(pantalla.innerHTML.length >= 8){
        // alert("si ay mas de 8 caracteres");
      }else{
        // alert("no ay mas de 8 caracteres");
      pantalla.innerHTML += "3";
      } 
}


function calculo4 (){  
 
 if(pantalla.innerHTML == "0"){
        pantalla.innerHTML = "";
      }
      if(pantalla.innerHTML.length >= 8){
        // alert("si ay mas de 8 caracteres");
      }else{
        // alert("no ay mas de 8 caracteres");
      pantalla.innerHTML += "4";
      } 
}

function calculo5 (){  
 
 if(pantalla.innerHTML == "0"){
        pantalla.innerHTML = "";
      }
      if(pantalla.innerHTML.length >= 8){
        // alert("si ay mas de 8 caracteres");
      }else{
        // alert("no ay mas de 8 caracteres");
      pantalla.innerHTML += "5";
      } 
}

function calculo6 (){  
  
 if(pantalla.innerHTML == "0"){
        pantalla.innerHTML = "";
      }
      if(pantalla.innerHTML.length >= 8){
        // alert("si ay mas de 8 caracteres");
      }else{
        // alert("no ay mas de 8 caracteres");
      pantalla.innerHTML += "6";
      } 
}

function calculo7 (){  
  
 if(pantalla.innerHTML == "0"){
        pantalla.innerHTML = "";
      }
      if(pantalla.innerHTML.length >= 8){
        // alert("si ay mas de 8 caracteres");
      }else{
        // alert("no ay mas de 8 caracteres");
      pantalla.innerHTML += "7";
      } 
}

function calculo8 (){  
  
 if(pantalla.innerHTML == "0"){
        pantalla.innerHTML = "";
      }
      if(pantalla.innerHTML.length >= 8){
        // alert("si ay mas de 8 caracteres");
      }else{
        // alert("no ay mas de 8 caracteres");
      pantalla.innerHTML += "8";
      } 
}

function calculo9 (){  
  
 if(pantalla.innerHTML == "0"){
        pantalla.innerHTML = "";
      }
      if(pantalla.innerHTML.length >= 8){
        // alert("si ay mas de 8 caracteres");
      }else{
        // alert("no ay mas de 8 caracteres");
      pantalla.innerHTML += "9";
      } 
}

function punto (){  
  alert("punto2");
 if(pantalla.innerHTML == "0"){
        pantalla.innerHTML += ".";
      }else{
        
      pantalla.innerHTML += "";
      } 
}