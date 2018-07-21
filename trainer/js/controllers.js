angular.module('controllers', ['ngRoute'])

.controller('loginCtrl', function($scope, $http, $location, user) {
	$scope.login = function() {
        var username = $scope.username;
		var password = $scope.password;
		$http({
			url: './php/login.php',
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			data: 'trainer_email='+username+'&password='+password
		})
		.then(function(response) {
            if(response.data.status == 'loggedin') {
                user.saveData(response.data);
                $location.path('/trainer-dashboard');
                console.log($scope.username);
                console.log($scope.password);
            } else {
                $scope.errorMessage = "*Enter a valid Username or Password!";
                console.log($scope.username);
                console.log($scope.password);
            }
        })
	};
})

.controller('profileCtrl', function($scope, $http, $timeout, user) {
    $scope.data = user.getData();
	$scope.newPass = function() {
		var password = $scope.newpassword;
		$http({
			url: './php/profile.php',
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			data: 'newPass='+password+'&id='+user.getID()
		})
		.then(function(response) {
			if(response.data.status == 'done') {
                $scope.successMessage = "Password updated successfully!";
                $timeout(function() {
                    $scope.successMessage = false;
                }, 5000);
                $scope.newpassword = '';
			} else {
                $scope.errorMessage = "Error updating password!";
                $timeout(function() {
                    $scope.errorMessage = false;
                }, 5000);
			}
			
		})
	};
})

.controller('sideNavCtrl', ['$scope', function($scope) {
	
}])

.controller('trainerDashboardCtrl', function($scope, $http, user) {
	$scope.user = user.getName();
})

.controller('headerCtrl', function($scope, $http, user) {
    $scope.data = user.getData();
})

.controller("regStudents", ['$scope', '$http', function($scope, $http) {
    $scope.students = [];
    $http({
        url: "./php/reg-students.php",
        method: "POST",
        data: "",
        headers: {
            "Content-Type":"application/x-www-form-urlencoded"
        }
    })
    .then(function(response) {
        $scope.students = response.data;
    })
}])

.controller("regTrainers", ['$scope', '$http', function($scope, $http) {
    $scope.trainers = [];
    $http({
        url: "./php/reg-trainers.php",
        method: "POST",
        data: "",
        headers: {
            "Content-Type":"application/x-www-form-urlencoded"
        }
    })
    .then(function(response) {
        $scope.trainers = response.data;
    })
}])

.controller("contactsList", ['$scope', '$http', function($scope, $http) {
    $scope.contacts = [];
    $http({
        url: "./php/contacts-list.php",
        method: "POST",
        data: "",
        headers: {
            "Content-Type":"application/x-www-form-urlencoded"
        }
    })
    .then(function(response) {
        $scope.contacts = response.data;
    })
}])

;