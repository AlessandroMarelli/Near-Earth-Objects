const xmlhttp = new XMLHttpRequest()

const pointerDOM = {
	jsonDOC: document.getElementById("graphic")
}

// SET DYNAMIC API & DATE

var curr = new Date()
var month = curr.getMonth() + 1
var year = curr.getFullYear()
var dayNumber = curr.getDay()
var day = curr.getDate()
var time = curr.getTime()
if (dayNumber == 0) {
	var first = time - 86400000 * 6
	var last = first + 86400000 * 6

	var firstday = new Date(first).toISOString().slice(0, 10)
	var lastday = new Date(last).toISOString().slice(0, 10)
} else {
	var first = time - 86400000 * dayNumber + 86400000
	var last = first + 86400000 * 6

	var firstday = new Date(first).toISOString().slice(0, 10)
	var lastday = new Date(last).toISOString().slice(0, 10)
}

// console.log(firstday)
// console.log(lastday)

xmlhttp.open(
	"GET",

	"https://api.nasa.gov/neo/rest/v1/feed?start_date=" +
	firstday +
	"&end_date=" +
	lastday +
	"&api_key=LTybz0BMeo6Zgy1d0QQ9yZVMGMhYbOvBbMaVehGv",
	true
)
xmlhttp.send()
