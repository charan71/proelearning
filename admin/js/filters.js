angular.module("filters", [])

.filter("genderFilter", function() {
	var genderFilter = function(input) {
		var output = "";
		if(input == "M") {
			output = "Male";
		} else if (input == "F") {
			output = "Female";
		} else if (input == "O") {
			output = "Others";
		} else {
			output = "-NA-";
		}
		return output;
	};
	return genderFilter;
})

;