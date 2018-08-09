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

.controller("courseSuggestionList", ['$scope', '$http', function($scope, $http) {
    $scope.suggestedCourses = [];
    $http({
        url: "./php/course-suggestion-list.php",
        method: "POST",
        data: "",
        headers: {
            "Content-Type":"application/x-www-form-urlencoded"
        }
    })
    .then(function(response) {
        $scope.suggestedCourses = response.data;
    })
}])

.controller("courseUploadCtrl", ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
    var orig_courseName = $scope.courseName;
    var orig_courseDesc = $scope.courseDesc;
    var orig_courseUrl = $scope.courseUrl;
    var orig_courseImage = $scope.files;
    var orig_coursePrice = $scope.coursePrice;
    $scope.dt = Date();

    $scope.uploadedFile = function(element) {
        $scope.$apply(function($scope) {
            $scope.files = element.files;
        });
    };
    $scope.imageUpload = function(event){
	    var files = event.target.files; //FileList object
	    var file = files[files.length-1];
	    $scope.file = file;
	    var reader = new FileReader();
	    reader.onload = $scope.imageIsLoaded;
	    reader.readAsDataURL(file);
	};
	$scope.imageIsLoaded = function(e){
	    $scope.$apply(function() {
	    	$scope.step = e.target.result;
	    });
    };
    
    /*-- Upload Course Form --*/
    $scope.fn_uploadCourse = function() {
        var formData = new FormData();
        var file = $scope.files[0];
        formData.append('course_name',$scope.courseName);
        formData.append('course_description',$scope.courseDesc);
        formData.append('course_url',$scope.courseUrl);
        formData.append('file',file);
        formData.append('course_price',$scope.coursePrice);
        formData.append('date_time',$scope.dt);
        
        $http({
            method: 'POST',
            url: './php/course-upload.php',
            data: formData,
            processData: false,
            headers: {
                'Content-Type': undefined
            }
        }).then(function(response) {
            $scope.courseName = angular.copy(orig_courseName);
            $scope.courseDesc = angular.copy(orig_courseDesc);
            $scope.courseUrl = angular.copy(orig_courseUrl);
            $scope.files = angular.copy(orig_courseImage);
            $scope.coursePrice = angular.copy(orig_coursePrice);
            $scope.courseUploadForm.$setUntouched();
            $scope.successMessage = "New course uploaded successfully!!";
            $timeout(function() {
                $scope.successMessage = false;
            }, 5000);
        }, function(error) {
            $scope.errorMessage = "Sorry. Please try again!!";
            $timeout(function() {
                $scope.errorMessage = false;
            }, 5000);
        });
    };

    /*-- Reset all form fields and form to its initial state --*/
    $scope.fn_reset = function() {
    $scope.courseName = angular.copy(orig_courseName);
    $scope.courseDesc = angular.copy(orig_courseDesc);
    $scope.courseUrl = angular.copy(orig_courseUrl);
    $scope.files = angular.copy(orig_courseImage);
    $scope.coursePrice = angular.copy(orig_coursePrice);
    $scope.courseUploadForm.$setUntouched();
    };

    /*-- Fetch all uploaded courses and display in table --*/
    $scope.newCourses = [];
    $http({
        url: "./php/courses-fetch.php",
        method: "POST",
        data: "",
        headers: {
            "Content-Type":"application/x-www-form-urlencoded"
        }
    })
    .then(function(response) {
        $scope.newCourses = response.data;
    });
}])

;