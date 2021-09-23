  var pantalla=document.getElementById('display');
  var punto = document.getElementById('punto');
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



if (pantalla.innerHTML=="0"){
	cero.onclick = function(e){  	
  		// pantalla.innerHTML = pantalla.innerHTML  + "0";   
  	}
}else{
	cero.onclick = function(e){  	
  		 pantalla.innerHTML = pantalla.innerHTML  + "0";
       if(pantalla.innerHTML.length==8){
              alert("llevas 8 caracteres estoy en la funcion cero");
                cero.onclick = function(e){} 
                uno.onclick = function(e){} 
                dos.onclick = function(e){} 
                tres.onclick = function(e){} 
                cuatro.onclick = function(e){} 
                cinco.onclick = function(e){} 
                seis.onclick = function(e){} 
                siete.onclick = function(e){}
                ocho.onclick = function(e){}
                nueve.onclick = function(e){}
                signo.onclick = function(e){}
                punto.onclick = function(e){}  
            }   
  	}
}


	
// if(pantalla.innerHTML=="."){// no abia punto mostro mensaje entraste al else y luego coloco punto 

// 	punto.onclick = function(e){  	
//   		pantalla.innerHTML = pantalla.innerHTML  + "."; 
//       alert ("entraste al if");
//   	}
//   }else{
//       punto.onclick = function(e){    
//       pantalla.innerHTML = pantalla.innerHTML  + ".";       
//            alert ("entraste al else");
//     }

//   }
//   
//   
//   
 punto.onclick = function(e){    
     pantalla.innerHTML = pantalla.innerHTML  + "."; 
      alert ("primer punto");
     }  
if(pantalla.innerHTML!="."){// no abia punto mostro mensaje entraste al else y luego coloco punto 

  punto.onclick = function(e){    
      pantalla.innerHTML = pantalla.innerHTML  + ".";       
           alert ("segundo punto"+pantalla.innerHTML.length); // creo q mi pantalla debe ser un arreglo q no acepte mas de 8 caracteres ni doble punto
           if(pantalla.innerHTML.length==8){
              alert("llevas 8 caracteres estoy en la funcion punto");
                cero.onclick = function(e){}
                uno.onclick = function(e){} 
                dos.onclick = function(e){} 
                tres.onclick = function(e){} 
                cuatro.onclick = function(e){} 
                cinco.onclick = function(e){} 
                seis.onclick = function(e){} 
                siete.onclick = function(e){}
                ocho.onclick = function(e){}
                nueve.onclick = function(e){}
                signo.onclick = function(e){}
                punto.onclick = function(e){}  
            }
  }
}      





	
  	signo.onclick = function(e){  	
  		pantalla.innerHTML = pantalla.innerHTML  + "-"; 
       if(pantalla.innerHTML.length==8){
         alert("llevas 8 caracteres estoy en la funcion signo");
        cero.onclick = function(e){}
        uno.onclick = function(e){} 
        dos.onclick = function(e){} 
        tres.onclick = function(e){} 
        cuatro.onclick = function(e){} 
        cinco.onclick = function(e){} 
        seis.onclick = function(e){} 
        siete.onclick = function(e){}
        ocho.onclick = function(e){}
        nueve.onclick = function(e){}
        signo.onclick = function(e){}
        punto.onclick = function(e){}  
        }  
  	}
  	
  	

	
  



	uno.onclick = function(e){        	
    pantalla.innerHTML = pantalla.innerHTML  + "1";    
      if(pantalla.innerHTML.length==8){
        alert("llevas 8 caracteres estoy en la funcion uno");
        cero.onclick = function(e){}
        uno.onclick = function(e){} 
        dos.onclick = function(e){} 
        tres.onclick = function(e){} 
        cuatro.onclick = function(e){} 
        cinco.onclick = function(e){} 
        seis.onclick = function(e){} 
        siete.onclick = function(e){}
        ocho.onclick = function(e){}
        nueve.onclick = function(e){}
        signo.onclick = function(e){}
        punto.onclick = function(e){}

      }  
  }



  dos.onclick = function(e){
     pantalla.innerHTML = pantalla.innerHTML  + "2";
      if(pantalla.innerHTML.length==8){
        alert("llevas 8 caracteres estoy en la funcion dos");
        cero.onclick = function(e){}
        uno.onclick = function(e){} 
        dos.onclick = function(e){} 
        tres.onclick = function(e){} 
        cuatro.onclick = function(e){} 
        cinco.onclick = function(e){} 
        seis.onclick = function(e){} 
        siete.onclick = function(e){}
        ocho.onclick = function(e){}
        nueve.onclick = function(e){}
        signo.onclick = function(e){}
        punto.onclick = function(e){}  
      }
  }
  tres.onclick = function(e){
     pantalla.innerHTML = pantalla.innerHTML  + "3";
      if(pantalla.innerHTML.length==8){
        alert("llevas 8 caracteres estoy en la funcion tres");
        cero.onclick = function(e){}
        uno.onclick = function(e){} 
        dos.onclick = function(e){} 
        tres.onclick = function(e){} 
        cuatro.onclick = function(e){} 
        cinco.onclick = function(e){} 
        seis.onclick = function(e){} 
        siete.onclick = function(e){}
        ocho.onclick = function(e){}
        nueve.onclick = function(e){}
        signo.onclick = function(e){}
        punto.onclick = function(e){}  
      }
  }
  cuatro.onclick = function(e){
    pantalla.innerHTML = pantalla.innerHTML + "4";
     if(pantalla.innerHTML.length==8){
        alert("llevas 8 caracteres estoy en la funcion cuatro");
        cero.onclick = function(e){}
        uno.onclick = function(e){} 
        dos.onclick = function(e){} 
        tres.onclick = function(e){} 
        cuatro.onclick = function(e){} 
        cinco.onclick = function(e){} 
        seis.onclick = function(e){} 
        siete.onclick = function(e){}
        ocho.onclick = function(e){}
        nueve.onclick = function(e){}
        signo.onclick = function(e){}
        punto.onclick = function(e){}  
      }
  }


  


  cinco.onclick = function(e){
     pantalla.innerHTML = pantalla.innerHTML  + "5";
     if(pantalla.innerHTML.length==8){
        alert("llevas 8 caracteres estoy en la funcion cinco");
        cero.onclick = function(e){}
        uno.onclick = function(e){} 
        dos.onclick = function(e){} 
        tres.onclick = function(e){} 
        cuatro.onclick = function(e){} 
        cinco.onclick = function(e){} 
        seis.onclick = function(e){} 
        siete.onclick = function(e){}
        ocho.onclick = function(e){}
        nueve.onclick = function(e){}
        signo.onclick = function(e){}
        punto.onclick = function(e){}
      }  

  }





  seis.onclick = function(e){
     pantalla.innerHTML = pantalla.innerHTML + "6";
      if(pantalla.innerHTML.length==8){
        alert("llevas 8 caracteres estoy en la funcion seis");
        cero.onclick = function(e){}
        uno.onclick = function(e){} 
        dos.onclick = function(e){} 
        tres.onclick = function(e){} 
        cuatro.onclick = function(e){} 
        cinco.onclick = function(e){} 
        seis.onclick = function(e){} 
        siete.onclick = function(e){}
        ocho.onclick = function(e){}
        nueve.onclick = function(e){}
        signo.onclick = function(e){}
        punto.onclick = function(e){}
      }
  }



  siete.onclick = function(e){
     pantalla.innerHTML = pantalla.innerHTML + "7";
      if(pantalla.innerHTML.length==8){
        alert("llevas 8 caracteres estoy en la funcion siete");
        cero.onclick = function(e){}
        uno.onclick = function(e){} 
        dos.onclick = function(e){} 
        tres.onclick = function(e){} 
        cuatro.onclick = function(e){} 
        cinco.onclick = function(e){} 
        seis.onclick = function(e){} 
        siete.onclick = function(e){}
        ocho.onclick = function(e){}
        nueve.onclick = function(e){}
        signo.onclick = function(e){}
        punto.onclick = function(e){}  
      }
  }
  ocho.onclick = function(e){
     pantalla.innerHTML = pantalla.innerHTML  + "8";
      if(pantalla.innerHTML.length==8){
        alert("llevas 8 caracteres estoy en la funcion ocho");
        cero.onclick = function(e){}
        uno.onclick = function(e){} 
        dos.onclick = function(e){} 
        tres.onclick = function(e){} 
        cuatro.onclick = function(e){} 
        cinco.onclick = function(e){} 
        seis.onclick = function(e){} 
        siete.onclick = function(e){}
        ocho.onclick = function(e){}
        nueve.onclick = function(e){}
        signo.onclick = function(e){}
        punto.onclick = function(e){}  
      }
  }
  nueve.onclick = function(e){
     pantalla.innerHTML = pantalla.innerHTML  + "9";
      if(pantalla.innerHTML.length==8){
        alert("llevas 8 caracteres estoy en la funcion nueve");
        cero.onclick = function(e){}
        uno.onclick = function(e){} 
        dos.onclick = function(e){} 
        tres.onclick = function(e){} 
        cuatro.onclick = function(e){} 
        cinco.onclick = function(e){} 
        seis.onclick = function(e){} 
        siete.onclick = function(e){}
        ocho.onclick = function(e){}
        nueve.onclick = function(e){}
        signo.onclick = function(e){}
        punto.onclick = function(e){} 
      }
      
  }
   reset.onclick = function(e){
      resetear();
      function foo(ocho){
      ocho();
     }

  }
  suma.onclick = function(e){
      operandoa = pantalla.innerHTML;
      operacion = "+";
      limpiar();
  }
  resta.onclick = function(e){
      operandoa = pantalla.innerHTML;
      operacion = "-";
      limpiar();
  }
  multiplicacion.onclick = function(e){
      operandoa = pantalla.innerHTML;
      operacion = "*";
      limpiar();
  }
  division.onclick = function(e){
      operandoa = pantalla.innerHTML;
      operacion = "/";
      limpiar();
  }
  igual.onclick = function(e){
      operandob = pantalla.innerHTML;
      resolver();
  }


  function limpiar(){
  pantalla.innerHTML = "";
}
  function resetear(){
  pantalla.innerHTML = 0;
  cero.onclick = function(e){
    pantalla.innerHTML = pantalla.innerHTML  + "0";
    if(pantalla.innerHTML.length==8){
        alert("llevas 8 caracteres estoy en la funcion reset");
        cero.onclick = function(e){}
        uno.onclick = function(e){} 
        dos.onclick = function(e){} 
        tres.onclick = function(e){} 
        cuatro.onclick = function(e){} 
        cinco.onclick = function(e){} 
        seis.onclick = function(e){} 
        siete.onclick = function(e){}
        ocho.onclick = function(e){}
        nueve.onclick = function(e){}
        signo.onclick = function(e){}
        punto.onclick = function(e){} 
      }
  }
  uno.onclick = function(e){          
  pantalla.innerHTML = pantalla.innerHTML  + "1"; 
  if(pantalla.innerHTML.length==8){
        alert("llevas 8 caracteres estoy en la funcion reset");
        cero.onclick = function(e){}
        uno.onclick = function(e){} 
        dos.onclick = function(e){} 
        tres.onclick = function(e){} 
        cuatro.onclick = function(e){} 
        cinco.onclick = function(e){} 
        seis.onclick = function(e){} 
        siete.onclick = function(e){}
        ocho.onclick = function(e){}
        nueve.onclick = function(e){}
        signo.onclick = function(e){}
        punto.onclick = function(e){} 
      }   
  }  
        dos.onclick = function(e){
          pantalla.innerHTML = pantalla.innerHTML  + "2";
          if(pantalla.innerHTML.length==8){
        alert("llevas 8 caracteres estoy en la funcion reset");
        cero.onclick = function(e){}
        uno.onclick = function(e){} 
        dos.onclick = function(e){} 
        tres.onclick = function(e){} 
        cuatro.onclick = function(e){} 
        cinco.onclick = function(e){} 
        seis.onclick = function(e){} 
        siete.onclick = function(e){}
        ocho.onclick = function(e){}
        nueve.onclick = function(e){}
        signo.onclick = function(e){}
        punto.onclick = function(e){} 
      }
        } 
        tres.onclick = function(e){
          pantalla.innerHTML = pantalla.innerHTML  + "3";
          if(pantalla.innerHTML.length==8){
        alert("llevas 8 caracteres estoy en la funcion reset");
        cero.onclick = function(e){}
        uno.onclick = function(e){} 
        dos.onclick = function(e){} 
        tres.onclick = function(e){} 
        cuatro.onclick = function(e){} 
        cinco.onclick = function(e){} 
        seis.onclick = function(e){} 
        siete.onclick = function(e){}
        ocho.onclick = function(e){}
        nueve.onclick = function(e){}
        signo.onclick = function(e){}
        punto.onclick = function(e){} 
      }
        } 
        cuatro.onclick = function(e){
          pantalla.innerHTML = pantalla.innerHTML  + "4";
          if(pantalla.innerHTML.length==8){
        alert("llevas 8 caracteres estoy en la funcion reset");
        cero.onclick = function(e){}
        uno.onclick = function(e){} 
        dos.onclick = function(e){} 
        tres.onclick = function(e){} 
        cuatro.onclick = function(e){} 
        cinco.onclick = function(e){} 
        seis.onclick = function(e){} 
        siete.onclick = function(e){}
        ocho.onclick = function(e){}
        nueve.onclick = function(e){}
        signo.onclick = function(e){}
        punto.onclick = function(e){} 
      }
        } 
        cinco.onclick = function(e){
          pantalla.innerHTML = pantalla.innerHTML  + "5";
          if(pantalla.innerHTML.length==8){
        alert("llevas 8 caracteres estoy en la funcion reset");
        cero.onclick = function(e){}
        uno.onclick = function(e){} 
        dos.onclick = function(e){} 
        tres.onclick = function(e){} 
        cuatro.onclick = function(e){} 
        cinco.onclick = function(e){} 
        seis.onclick = function(e){} 
        siete.onclick = function(e){}
        ocho.onclick = function(e){}
        nueve.onclick = function(e){}
        signo.onclick = function(e){}
        punto.onclick = function(e){} 
      }
        } 
        seis.onclick = function(e){
          pantalla.innerHTML = pantalla.innerHTML  + "6";
          if(pantalla.innerHTML.length==8){
        alert("llevas 8 caracteres estoy en la funcion reset");
        cero.onclick = function(e){}
        uno.onclick = function(e){} 
        dos.onclick = function(e){} 
        tres.onclick = function(e){} 
        cuatro.onclick = function(e){} 
        cinco.onclick = function(e){} 
        seis.onclick = function(e){} 
        siete.onclick = function(e){}
        ocho.onclick = function(e){}
        nueve.onclick = function(e){}
        signo.onclick = function(e){}
        punto.onclick = function(e){} 
      }
        } 
        siete.onclick = function(e){
          pantalla.innerHTML = pantalla.innerHTML  + "7";
          if(pantalla.innerHTML.length==8){
        alert("llevas 8 caracteres estoy en la funcion reset");
        cero.onclick = function(e){}
        uno.onclick = function(e){} 
        dos.onclick = function(e){} 
        tres.onclick = function(e){} 
        cuatro.onclick = function(e){} 
        cinco.onclick = function(e){} 
        seis.onclick = function(e){} 
        siete.onclick = function(e){}
        ocho.onclick = function(e){}
        nueve.onclick = function(e){}
        signo.onclick = function(e){}
        punto.onclick = function(e){} 
      }
        }
        ocho.onclick = function(e){
          pantalla.innerHTML = pantalla.innerHTML  + "8";
          if(pantalla.innerHTML.length==8){
        alert("llevas 8 caracteres estoy en la funcion reset");
        cero.onclick = function(e){}
        uno.onclick = function(e){} 
        dos.onclick = function(e){} 
        tres.onclick = function(e){} 
        cuatro.onclick = function(e){} 
        cinco.onclick = function(e){} 
        seis.onclick = function(e){} 
        siete.onclick = function(e){}
        ocho.onclick = function(e){}
        nueve.onclick = function(e){}
        signo.onclick = function(e){}
        punto.onclick = function(e){} 
      }
        }
        nueve.onclick = function(e){
          pantalla.innerHTML = pantalla.innerHTML  + "9";
          if(pantalla.innerHTML.length==8){
        alert("llevas 8 caracteres estoy en la funcion reset");
        cero.onclick = function(e){}
        uno.onclick = function(e){} 
        dos.onclick = function(e){} 
        tres.onclick = function(e){} 
        cuatro.onclick = function(e){} 
        cinco.onclick = function(e){} 
        seis.onclick = function(e){} 
        siete.onclick = function(e){}
        ocho.onclick = function(e){}
        nueve.onclick = function(e){}
        signo.onclick = function(e){}
        punto.onclick = function(e){} 
      }
        }
        signo.onclick = function(e){
          pantalla.innerHTML = pantalla.innerHTML  + "-";
          if(pantalla.innerHTML.length==8){
        alert("llevas 8 caracteres estoy en la funcion reset");
        cero.onclick = function(e){}
        uno.onclick = function(e){} 
        dos.onclick = function(e){} 
        tres.onclick = function(e){} 
        cuatro.onclick = function(e){} 
        cinco.onclick = function(e){} 
        seis.onclick = function(e){} 
        siete.onclick = function(e){}
        ocho.onclick = function(e){}
        nueve.onclick = function(e){}
        signo.onclick = function(e){}
        punto.onclick = function(e){} 
      }
        }
        punto.onclick = function(e){
          pantalla.innerHTML = pantalla.innerHTML  + ".";
          if(pantalla.innerHTML.length==8){
        alert("llevas 8 caracteres estoy en la funcion reset");
        cero.onclick = function(e){}
        uno.onclick = function(e){} 
        dos.onclick = function(e){} 
        tres.onclick = function(e){} 
        cuatro.onclick = function(e){} 
        cinco.onclick = function(e){} 
        seis.onclick = function(e){} 
        siete.onclick = function(e){}
        ocho.onclick = function(e){}
        nueve.onclick = function(e){}
        signo.onclick = function(e){}
        punto.onclick = function(e){} 
      }
        }

   
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
