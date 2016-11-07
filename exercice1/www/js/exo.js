var calculButton = document.getElementById("calcul");
  calculButton.onclick = function() { 
         console.log("hjkh");
    document.getElementById("result").innerHTML = analyser(document.getElementById("nom").value, document.getElementById("poids").value, document.getElementById("taille").value)
;
    



   }




   var analyser = function(nom, poids, taille){

   	var IMC = (poids/(taille*taille*Math.pow(10, -4))).toFixed(2);
   	console.log(IMC);

   	var interpretation ="";

   	if(IMC<16.5){
   		interpretation="dénutrition ou famine";
   	}else if(IMC<18.5){
		interpretation="maigreur";
   	}
   	else if(IMC<25){
   		interpretation="corpulence normale";
   	}
   	else if(IMC<30){
   		interpretation="surpoids";
   	}
   	else if(IMC<35){
   		interpretation="obésité modérée";
   	}else if(IMC<40){
   		interpretation="obésité sévère";
   	}
   	else{
		interpretation="obésité morbide ou massive";
   	}


   	var result= "<p>Nom:"+nom+" </p><p>Poids: "+poids+"</p><p>Taille: "+taille+"</p><p>IMC: "+IMC+"</p><p>"+interpretation+"</p>";

return result;
   }
