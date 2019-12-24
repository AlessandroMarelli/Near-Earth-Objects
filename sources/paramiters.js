{
	// CREATE DAYS ARRAY
	var days = [] // set an empty array
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			// JSON TO OBJECT
			var myObj = JSON.parse(this.responseText)
			week = myObj.near_earth_objects

			// find the date of all the week's day

			for (i = first; i <= last; i += 86400000) {
				var current = new Date(i).toISOString().slice(0, 10)
				console.log(current)
				days.push(week[current]) // Push all the element inside the array
			}
			setInfo()
			setActive()
		} else if (this.readyState == 4 && this.readyState != 200) {
			console.log("Error")
		}
	}

	// SET FUNCTION ON THE BUTTON
	var info = [] // Set an empty array

	function setMonday() {
		info = [] // Clear info array

		var nearObjs = days[0]
		nearObjs.forEach(function(element) {
			// Create an object with the required parameters
			var paramiters = {
				name: element.name,
				diameter:
					(element.estimated_diameter.kilometers.estimated_diameter_max +
						element.estimated_diameter.kilometers.estimated_diameter_min) /
					2,
				magnitude: element.absolute_magnitude_h,
				velocity: element.close_approach_data[0].relative_velocity.kilometers_per_second,
				distance: element.close_approach_data[0].miss_distance.astronomical
			}
			info.push(paramiters) // Push the paramiters in the Info Array
		})
		deleteBubble()
		createBubbles()
		// console.log(info)
	}

	function setTuesday() {
		info = [] // Clear the info

		var nearObjs = days[1]
		nearObjs.forEach(function(element) {
			// Create an object with the required parameters
			var paramiters = {
				name: element.name,
				diameter:
					(element.estimated_diameter.kilometers.estimated_diameter_max +
						element.estimated_diameter.kilometers.estimated_diameter_min) /
					2,
				magnitude: element.absolute_magnitude_h,
				velocity: element.close_approach_data[0].relative_velocity.kilometers_per_second,
				distance: element.close_approach_data[0].miss_distance.astronomical
			}
			info.push(paramiters) // Push the paramiters in the Info Array
		})
		deleteBubble()
		createBubbles()
		// console.log(info)
	}

	function setWednesday() {
		info = [] // Clear the info

		var nearObjs = days[2]
		nearObjs.forEach(function(element) {
			// Create an object with the required parameters
			var paramiters = {
				name: element.name,
				diameter:
					(element.estimated_diameter.kilometers.estimated_diameter_max +
						element.estimated_diameter.kilometers.estimated_diameter_min) /
					2,
				magnitude: element.absolute_magnitude_h,
				velocity: element.close_approach_data[0].relative_velocity.kilometers_per_second,
				distance: element.close_approach_data[0].miss_distance.astronomical
			}
			info.push(paramiters) // Push the paramiters in the Info Array
		})
		deleteBubble()
		createBubbles()
		// console.log(info)
	}

	function setThursday() {
		info = [] // Clear the info

		var nearObjs = days[3]
		nearObjs.forEach(function(element) {
			// Create an object with the required parameters
			var paramiters = {
				name: element.name,
				diameter:
					(element.estimated_diameter.kilometers.estimated_diameter_max +
						element.estimated_diameter.kilometers.estimated_diameter_min) /
					2,
				magnitude: element.absolute_magnitude_h,
				velocity: element.close_approach_data[0].relative_velocity.kilometers_per_second,
				distance: element.close_approach_data[0].miss_distance.astronomical
			}
			info.push(paramiters) // Push the paramiters in the Info Array
		})
		deleteBubble()
		createBubbles()
		// console.log(info)
	}

	function setFriday() {
		info = [] // Clear the info

		var nearObjs = days[4]
		nearObjs.forEach(function(element) {
			// Create an object with the required parameters
			var paramiters = {
				name: element.name,
				diameter:
					(element.estimated_diameter.kilometers.estimated_diameter_max +
						element.estimated_diameter.kilometers.estimated_diameter_min) /
					2,
				magnitude: element.absolute_magnitude_h,
				velocity: element.close_approach_data[0].relative_velocity.kilometers_per_second,
				distance: element.close_approach_data[0].miss_distance.astronomical
			}
			info.push(paramiters) // Push the paramiters in the Info Array
		})
		deleteBubble()
		createBubbles()
		// console.log(info)
	}

	function setSaturday() {
		info = [] // Clear the info

		var nearObjs = days[5]
		nearObjs.forEach(function(element) {
			// Create an object with the required parameters
			var paramiters = {
				name: element.name,
				diameter:
					(element.estimated_diameter.kilometers.estimated_diameter_max +
						element.estimated_diameter.kilometers.estimated_diameter_min) /
					2,
				magnitude: element.absolute_magnitude_h,
				velocity: element.close_approach_data[0].relative_velocity.kilometers_per_second,
				distance: element.close_approach_data[0].miss_distance.astronomical
			}
			info.push(paramiters) // Push the paramiters in the Info Array
		})
		deleteBubble()
		createBubbles()
		// console.log(info)
	}

	function setSunday() {
		info = [] // Clear the info

		var nearObjs = days[6]
		nearObjs.forEach(function(element) {
			// Create an object with the required parameters
			var paramiters = {
				name: element.name,
				diameter:
					(element.estimated_diameter.kilometers.estimated_diameter_max +
						element.estimated_diameter.kilometers.estimated_diameter_min) /
					2,
				magnitude: element.absolute_magnitude_h,
				velocity: element.close_approach_data[0].relative_velocity.kilometers_per_second,
				distance: element.close_approach_data[0].miss_distance.astronomical
			}
			info.push(paramiters) // Push the paramiters in the Info Array
		})
		deleteBubble()
		createBubbles()
		// console.log(info)
	}

	// ADD/REMOVE THE ACTIVE CLASS FROM THE BUTTONS
	var btnContainer = document.getElementById("day")
	var btns = btnContainer.getElementsByClassName("btn")
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function() {
			var current = document.getElementsByClassName("active")
			current[0].className = current[0].className.replace(" active", "")
			this.className += " active"
		})
	}

	// SET BUTTON CLASS ACTIVE ON-LOAD
	function setActive() {
		var d = new Date()
		var weekday = new Array(7)
		weekday[1] = document.getElementById("mon")
		weekday[2] = document.getElementById("tue")
		weekday[3] = document.getElementById("wed")
		weekday[4] = document.getElementById("thur")
		weekday[5] = document.getElementById("fri")
		weekday[6] = document.getElementById("sat")
		weekday[0] = document.getElementById("sun")

		var n = weekday[d.getDay()]

		n.classList.add("active")

		// Set the parameters on-load
		if (n.id == "mon" && n.className == "btn active") {
			var nearObjs = days[0]
			setMonday()
		} else if (n.id == "tue" && n.className == "btn active") {
			setTuesday()
		} else if (n.id == "wed" && n.className == "btn active") {
			setWednesday()
		} else if (n.id == "thur" && n.className == "btn active") {
			var nearObjs = days[0]
			setThursday()
		} else if (n.id == "fri" && n.className == "btn active") {
			setFriday()
		} else if (n.id == "sat" && n.className == "btn active") {
			setSaturday()
		} else if (n.id == "sun" && n.className == "btn active") {
			setSunday()
		} else {
			console.log(error)
		}
	}

	// BRIGHTEST INFO ON-LOAD
	function setInfo() {
		var info2 = [] // Set an empty array

		for (let i = 0; i < days.length; i++) {
			var nearObjs2 = days[i]
			// Create an array with the info of the elements of the whole week
			nearObjs2.forEach(function(element) {
				var paramiters = {
					name: element.name,
					diameter:
						(element.estimated_diameter.kilometers.estimated_diameter_max +
							element.estimated_diameter.kilometers.estimated_diameter_min) /
						2,
					magnitude: element.absolute_magnitude_h,
					velocity: element.close_approach_data[0].relative_velocity.kilometers_per_second,
					distance: element.close_approach_data[0].miss_distance.astronomical
				}
				info2.push(paramiters)
			})

			// ORDER INFO2 BY MAGNITUDE
			info2.sort(function(a, b) {
				if (a.magnitude > b.magnitude) {
					return -1
				} else if (a.magnitude < b.magnitude) {
					return 1
				} else {
					return 0
				}
			})
		}

		// SET BRIGHTEST OBJECT
		document.getElementsByClassName("name1")[0].innerHTML = "Name: " + info2[0].name
		document.getElementsByClassName("diameter1")[0].innerHTML =
			"Diameter: " + info2[0].diameter.toFixed(3) + " Km"
		document.getElementsByClassName("magnitude1")[0].innerHTML =
			"Magnitude: " + info2[0].magnitude + " h"

		// SET THE 2nd OBJECT
		document.getElementsByClassName("name2")[0].innerHTML = "Name: " + info2[0].name
		document.getElementsByClassName("diameter2")[0].innerHTML =
			"Diameter: " + info2[Math.round(info2.length / 4)].diameter.toFixed(3) + " Km"
		document.getElementsByClassName("magnitude2")[0].innerHTML =
			"Magnitude: " + info2[Math.round(info2.length / 4)].magnitude + " h"

		// SET THE MIDDLE OBJECT
		document.getElementsByClassName("name3")[0].innerHTML =
			"Name: " + info2[Math.round(info2.length / 2)].name
		document.getElementsByClassName("diameter3")[0].innerHTML =
			"Diameter: " + info2[Math.round(info2.length / 2)].diameter.toFixed(3) + " Km"
		document.getElementsByClassName("magnitude3")[0].innerHTML =
			"Magnitude: " + info2[Math.round(info2.length / 2)].magnitude + " h"

		// SET THE 4th OBJECT
		document.getElementsByClassName("name4")[0].innerHTML =
			"Name: " + info2[Math.round((info2.length / 4) * 3)].name
		document.getElementsByClassName("diameter4")[0].innerHTML =
			"Diameter: " + info2[Math.round((info2.length / 4) * 3)].diameter.toFixed(3) + " Km"
		document.getElementsByClassName("magnitude4")[0].innerHTML =
			"Magnitude: " + info2[Math.round((info2.length / 4) * 3)].magnitude + " h"

		// SET LESS BRIGHT OBJECT
		document.getElementsByClassName("name5")[0].innerHTML = "Name: " + info2[info2.length - 1].name
		document.getElementsByClassName("diameter5")[0].innerHTML =
			"Diameter: " + info2[info2.length - 1].diameter.toFixed(3) + " Km"
		document.getElementsByClassName("magnitude5")[0].innerHTML =
			"Magnitude: " + info2[info2.length - 1].magnitude + " h"
	}

	// CREATE BUBBLES and INFO POP-UP
	function createBubbles() {
		var graphic = document.getElementById("graphic")
		// Order all the Elements by the diameter
		info.sort(function(a, b) {
			if (a.diameter > b.diameter) {
				return -1
			} else if (a.diameter < b.diameter) {
				return 1
			} else {
				return 0
			}
		})

		info.forEach(function(element) {
			// Create bubbles based on diameter

			var diameter = element.diameter * 80000
			var velocity = element.velocity * 2.5
			var distance = element.distance * 180
			var name = element.name
			var magnitude = element.magnitude
			var divOut = document.createElement("div")
			var divIn = document.createElement("div")

			// Add style and class to the div and append them
			divOut.style.transition = "2s"
			divOut.appendChild(divIn)
			graphic.appendChild(divOut)
			divIn.className = "bubble"
			divOut.className = "bubbleCenter"

			//	Create bubbles by diameter and position them in the chart
			divIn.style.height = diameter + "%"
			divIn.style.width = diameter + "%"
			divOut.style.bottom = distance + "%"
			divOut.style.left = velocity + "%"

			// Add the "mouseover" action to the Bubbles and Create dynamically the Info Tooltip
			divIn.addEventListener("mouseover", function() {
				var allInfo = document.createElement("div")
				var information = document.createElement("div")
				var pInfo1 = document.createElement("p")
				var pInfo2 = document.createElement("p")
				var pInfo3 = document.createElement("p")
				var pInfo4 = document.createElement("p")
				var pInfo5 = document.createElement("p")
				allInfo.className = "allInfo"
				information.className = "information"
				pInfo1.innerHTML = "Name: " + name
				pInfo2.innerHTML = "Diameter: " + (diameter / 80000).toFixed(3) + " Km"
				pInfo3.innerHTML = "Magnitude: " + magnitude.toFixed(3) + " h"
				pInfo4.innerHTML = "Distance: " + (distance / 180).toFixed(3) + " au"
				pInfo5.innerHTML = "Velocity: " + (velocity / 2.5).toFixed(3) + " Km/s"
				information.appendChild(pInfo1)
				information.appendChild(pInfo2)
				information.appendChild(pInfo3)
				information.appendChild(pInfo4)
				information.appendChild(pInfo5)
				allInfo.appendChild(information)
				divOut.appendChild(allInfo)
			})

			// Add the "mouseleave" action to the Bubbles
			divIn.addEventListener("mouseleave", function() {
				var allInfo = document.getElementsByClassName("allInfo")
				if (allInfo) {
					allInfo[0].remove(allInfo[0])
				}
			})
		})
	}

	// Delete the bubbles at the change of day
	function deleteBubble() {
		var divOut = document.getElementsByClassName("bubbleCenter")
		var divIn = document.getElementsByClassName("bubble")
		if (divOut && divIn) {
			for (var i = divOut.length - 1; 0 <= i; i--) {
				divIn[i].remove(divIn[i])
				divOut[i].remove(divOut[i])
			}
		}
	}
}
