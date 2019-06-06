//Copyright Countdown 2012 - Architistico di Emilie Rollandin
//Setta le varibili
function converti(numeroArabo) {
	if(numeroArabo > 0 && numeroArabo < 3999) {
		var numeriArabi=[1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
		var numeriRomani=["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
		var numeroRomano="";
		var remainder=numeroArabo;
		for (i=0; i<numeriArabi.length; i++) {
			while(remainder >= numeriArabi[i]) {
				numeroRomano += numeriRomani[i];
				remainder -= numeriArabi[i];
			}
		}
		return numeroRomano;
	} else if(numeroArabo == 0) { 
		return "-";
	} else {
		return "-";
	}
}

//Setta la data
var target_date = new Date("Nov 25, 2020").getTime();

var days, hours, minutes, seconds;
var giorni = document.getElementById("giorni");
var ore = document.getElementById("ore");
var minuti = document.getElementById("minuti");
var secondi = document.getElementById("secondi");
setInterval(function () { 
				var current_date = new Date().getTime(); 
				var seconds_left = (target_date - current_date) / 1000; 
				days = parseInt(seconds_left / 86400); 
				seconds_left = seconds_left % 86400; 
				hours = parseInt(seconds_left / 3600); 
				seconds_left = seconds_left % 3600; 
				minutes = parseInt(seconds_left / 60); 
				seconds = parseInt(seconds_left % 60); 
				giorni.innerHTML = converti(days); 
				ore.innerHTML = converti(hours);	
				minuti.innerHTML = converti(minutes); 
				secondi.innerHTML = converti(seconds); 
			}, 1000);