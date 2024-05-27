let obj1 = {
	name: "Person 1",
	age: 23,
	}
let obj2 = {
	age: 23,
	
}

// Define the function check
function check(obj1, obj2) {

	// Iterate the obj2 using for..in
	for (key in obj2) {

		// Check if both objects do 
		// not have the equal values
		// of same key
		if (obj1[key] !== obj2[key]) {
			return false;
		}
	}
	return true
}

// Call the function
console.log(check(obj1, obj2))
