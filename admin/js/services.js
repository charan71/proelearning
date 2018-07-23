angular.module('services', [])

.service('user', function() {
    var username;
    var loggedin = false;
    var id;
    
    this.getName = function() {
        return username;
    };
    
    this.setID = function(userID) {
        id = userID;
    };
    this.getID = function() {
        return id;
    };
    
    this.isUserLoggedIn = function() {
        if(!!localStorage.getItem('admin-login')) {
		loggedin = true;
		var data = JSON.parse(localStorage.getItem('admin-login'));
		username = data.username;
		id = data.id;
	}
	return loggedin;
    };
    
    this.saveData = function(data) {
        username = data.user;
        id = data.id;
        loggedin = true;
        localStorage.setItem('admin-login', JSON.stringify({
            username: username,
            id: id
        }));
    };
				
    this.clearData = function() {
		localStorage.removeItem('admin-login');
		username = "";
		id = "";
		loggedin = false;
	};
})

;
