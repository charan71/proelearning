angular.module('services', [])

.service('user', function() {
    var username;
    var password;
    var loggedin = false;
    var id;
    
    this.getName = function() {
        return username;
    };
    
    this.getPwd = function() {
        return password;
    };
    
    this.setID = function(userID) {
        id = userID;
    };
    this.getID = function() {
        return id;
    };
    
    this.isUserLoggedIn = function() {
        if(!!localStorage.getItem('login')) {
		loggedin = true;
		var data = JSON.parse(localStorage.getItem('login'));
		username = data.username;
		password = data.password;
		id = data.id;
	}
	return loggedin;
    };
    
    this.saveData = function(data) {
        username = data.user;
        password = data.pwd;
        id = data.id;
        loggedin = true;
        localStorage.setItem('login', JSON.stringify({
            username: username,
            password: password,
            id: id
        }));
    };
				
    this.clearData = function() {
		localStorage.removeItem('login');
		username = "";
		id = "";
		loggedin = false;
	};
})

;
