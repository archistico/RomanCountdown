// Copyright Countdown 2012 - Archistico di Emilie Rollandin

// Setta la data
let target_date_string = "25/11/2022"
let date_parts = target_date_string.split("/")
let target_date = new Date(date_parts[2], date_parts[1] - 1, date_parts[0])

// per il sito web così il countdown non è mai finito
if(target_date.getTime() < (new Date()).getTime()) {
	target_date = new Date((new Date()).getFullYear(), date_parts[1] - 1, date_parts[0])
}
// fine aggiornameto per sito web


let days, hours, minutes, seconds;
let giorni_html = document.getElementById("giorni")
let ore_html = document.getElementById("ore")
let minuti_html = document.getElementById("minuti")
let secondi_html = document.getElementById("secondi")

function converti(numeroArabo) {
	if (numeroArabo > 0 && numeroArabo < 3999) {
		let numeriArabi = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
		let numeriRomani = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
		let numeroRomano = ""
		let remainder = numeroArabo
		for (i = 0; i < numeriArabi.length; i++) {
			while (remainder >= numeriArabi[i]) {
				numeroRomano += numeriRomani[i]
				remainder -= numeriArabi[i]
			}
		}
		return numeroRomano
	} else if (numeroArabo == 0) {
		return "-"
	} else {
		return "-"
	}
}

setInterval(function () {
	let current_date = new Date().getTime()
	let seconds_left = (target_date - current_date) / 1000
	
	days = parseInt(seconds_left / 86400)
	seconds_left = seconds_left % 86400
	hours = parseInt(seconds_left / 3600)
	seconds_left = seconds_left % 3600
	minutes = parseInt(seconds_left / 60)
	seconds = parseInt(seconds_left % 60)
	
	giorni_html.innerHTML = converti(days)
	ore_html.innerHTML = converti(hours)
	minuti_html.innerHTML = converti(minutes)
	secondi_html.innerHTML = converti(seconds)
}, 1000)