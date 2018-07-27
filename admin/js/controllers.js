angular.module('controllers', ['ngRoute'])

.controller('adminLoginCtrl', function($scope, $http, $location, user) {
	$scope.adminLogin = function() {
		var username = $scope.username;
		var password = $scope.password;
		$http({
			url: './php/admin-login.php',
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			data: 'admin_email='+username+'&password='+password
		})
		.then(function(response) {
            if(response.data.status == 'loggedin') {
                user.saveData(response.data);
                $location.path('/admin-dashboard');
            } else {
                $scope.errorMessage = "*Enter a valid Username or Password!";
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

.controller('adminDashboardCtrl', function($scope, $http, $timeout, user) {
    $scope.data = user.getData();

    // $scope.colors = ["rgba(255,0,0,0.5)","rgba(159,204,0,0.5)","rgba(250,109,33,0.7)","rgba(154,154,154,0.5)"];
          $scope.labels = ["Red", "Green", "Orange", "Grey"];
          $scope.data = [900, 300, 500, 100];

    // $scope.colors = [
    //     {
    //       backgroundColor: "rgba(159,204,0, 0.2)",
    //       pointBackgroundColor: "rgba(159,204,0, 1)",
    //       pointHoverBackgroundColor: "rgba(159,204,0, 0.8)",
    //       borderColor: "rgba(159,204,0, 1)",
    //       pointBorderColor: '#fff',
    //       pointHoverBorderColor: "rgba(159,204,0, 1)"
    //     },"rgba(250,109,33,0.5)","#9a9a9a","rgb(233,177,69)"
    //   ];
    //   $scope.labels = ["Green", "Peach", "Grey", "Orange"];
    //   $scope.data = [300, 500, 100, 150];

    // Simulate async data update
    // $timeout(function () {
    //     $scope.data = [
    //         [28, 72]
    //     ];
    // }, 3000);
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

.controller("courseUpload", ['$scope', function($scope) {
    $scope.uploadCourse = function() {
        $http({
            url: './php/course-upload.php',
            method: 'POST',
            data: '',
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            }
        }).then(function(response) {
            $scope.msg = $scope.response;
        });
    }
}])

;