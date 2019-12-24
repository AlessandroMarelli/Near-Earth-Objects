const xmlhttp = new XMLHttpRequest()

const pointerDOM = {
	jsonDOC: document.getElementById("graphic")
}

// SET DYNAMIC API & DATE

var curr = new Date()
var dayNumber = curr.getDay()
var time = curr.getTime()

// Check if the current day is Sunday

if (dayNumber == 0) {
	var first = time - 86400000 * 6 // Subtract 6 to set Monday as the starting day
	var last = first + 86400000 * 6 // Add 6 to the first day to set Sunday as the last day

	var firstday = new Date(first).toISOString().slice(0, 10) //Set the start date of the week
	var lastday = new Date(last).toISOString().slice(0, 10) //Set the end date of the week
} else {
	var first = time - 86400000 * dayNumber + 86400000 //Set Monday as the starting day from the current day
	var last = first + 86400000 * 6 // Add 6 to the first day to set Sunday as the last day

	var firstday = new Date(first).toISOString().slice(0, 10) //Set the start date of the week
	var lastday = new Date(last).toISOString().slice(0, 10) //Set the end date of the week
}

// console.log(firstday)
// console.log(lastday)

xmlhttp.open(
	"GET",

	// Create a dynamic API
	"https://api.nasa.gov/neo/rest/v1/feed?start_date=" +
		firstday +
		"&end_date=" +
		lastday +
		"&api_key=LTybz0BMeo6Zgy1d0QQ9yZVMGMhYbOvBbMaVehGv",
	true
)
xmlhttp.send()
