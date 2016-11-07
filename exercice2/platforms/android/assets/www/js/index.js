/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

var euroClick = document.getElementById("euro");
var dollar = document.getElementById("dollar");
var yan = document.getElementById("yan");


var euroClicked = function(){
     dollar.value = 1.10559*euro.value;
    yan.value =7.49024417 *euro.value;
}

var dollarClicked = function(){
   
    euro.value = 0.904494433*dollar.value;
    yan.value = 6.77488415*dollar.value;
}


var yanClicked = function(){
   dollar.value = 0.00957*yan.value;
    euro.value =0.00865601172*yan.value;
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
