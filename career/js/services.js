angular.module('services', [])

.service('user', function() {
    var email;
    var loggedin = false;
    var id;
    var d;
    
    this.getName = function() {
        return email;
    };
    
    this.setID = function(userID) {
        id = userID;
    };
    this.getID = function() {
        return id;
    };
    
    this.getData = function() {
        return d;
    }
    
    this.isUserLoggedIn = function() {
        if(!!localStorage.getItem('careers-login')) {
            loggedin = true;
            var data = JSON.parse(localStorage.getItem('careers-login'));
            email = data.email;
            id = data.id;
            d = data;
        }
        return loggedin;
    };
    
    this.saveData = function(data) {
        email = data.email;
        id = data.id;
        d = data;
        loggedin = true;
        localStorage.setItem('careers-login', JSON.stringify({
            email: email,
            id: id,
            d: data
        }));
    };
				
    this.clearData = function() {
		localStorage.removeItem('careers-login');
		email = "";
		id = "";
		loggedin = false;
	};
})

;
