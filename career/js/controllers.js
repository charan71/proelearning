angular.module('controllers', ['ngRoute'])

// Candidate Login
.controller('careersLoginCtrl', function($scope, $http, $location, user) {
	$scope.candidateLogin = function() {
		var username = $scope.username;
        var password = $scope.password;
		$http({
			url: './php/careers-login.php',
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			data: 'email='+username+'&password='+password
		})
		.then(function(response) {
            if(response.data.status == 'loggedin') {
                user.saveData(response.data);
                $location.path('/candidate-dashboard');
            } else {
                $scope.errorMessage = "*Enter a valid Username or Password!";
            }
        })
	};
})

// Candidate Profile
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

// Left Side Navigation
.controller("navController", ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function(destination) {
        return destination === $location.path();
    };
}])

// Dashboard
.controller('candidateDashboardCtrl', function($scope, $http, $timeout, user) {
    $scope.data = user.getData();

    // Website Visits
    $scope.pageViewNumInc = 0;
    $http({
        url: "./php/website-visits.php",
        method: "POST",
        data: "",
        headers: {
            "Content-Type":"application/x-www-form-urlencoded"
        }
    })
    .then(function(response) {
        $scope.pageViewNumInc = response.data;
    })

})

// Header/Navbar
.controller('headerCtrl', function($scope, $http, user) {
	$scope.data = user.getData();
})

// Applied Jobs List
.controller("appliedJobsCtrl", ['$scope', '$http', 'user', function($scope, $http, user) {
    // Fetching Current User Information to pass email id
    $scope.data = user.getData();

    /*-- Fetching all applied jobs and display in table --*/
    $scope.asc = "";
    $scope.desc = false;
    $scope.searchAppliedJobs = { job_id:"", position:"" };

    $scope.appliedJobs = [];
    $http({
        url: "./php/job-applications-fetch.php",
        method: "POST",
        data: {'email':$scope.data.email},
        headers: {
            "Content-Type":"application/x-www-form-urlencoded"
        }
    })
    .then(function(response) {
        $scope.appliedJobs = response.data;
    });
}])

// Apply for Job
.controller("applyForJobCtrl", ['$scope', '$http', '$timeout', '$filter', 'user', function($scope, $http, $timeout, $filter, user) {
    // Fetching Current User Information to pass email id
    $scope.data = user.getData();

    var orig_jobId = $scope.job_id;
    var orig_totExp = $scope.tot_experience;
    var orig_domainExp = $scope.domain_experience;
    var orig_updatedcv = $scope.files;
    $scope.dt = Date();

    /*-- File Upload --*/
    $scope.uploadedFile = function(element) {
        $scope.$apply(function($scope) {
            $scope.files = element.files;
        });
    };
    $scope.imageUpload = function(event){
	    var files = event.target.files; // FileList object
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
    
    /*-- Fetching all applied jobs and display in table --*/
    $scope.asc = "";
    $scope.desc = false;
    $scope.searchAppliedJobs = { job_id:"", position:"" };

    function displayAppliedJobs() {
        $scope.appliedJobs = [];
        $http({
            url: "./php/job-applications-fetch.php",
            method: "POST",
            data: {'email':$scope.data.email, 'first_name':$scope.data.first_name, 'middle_name':$scope.data.middle_name, 'last_name':$scope.data.last_name, 'phone':$scope.data.phone},
            headers: {
                "Content-Type":"application/x-www-form-urlencoded"
            }
        })
        .then(function(response) {
            $scope.appliedJobs = response.data;
        });
    }
    displayAppliedJobs();

    /*-- Apply for New Job --*/
    $scope.fn_applyForJob = function() {
        
        var formData = new FormData();
        var file = $scope.files[0];
        formData.append('job_id',$scope.job_id);
        formData.append('tot_experience',$scope.tot_experience);
        formData.append('domain_experience',$scope.domain_experience);
        formData.append('file',file);
        formData.append('date_time',$scope.dt);
        formData.append('email',$scope.data.email);
        formData.append('first_name',$scope.data.d.first_name);
        formData.append('middle_name',$scope.data.d.middle_name);
        formData.append('last_name',$scope.data.d.last_name);
        formData.append('phone',$scope.data.d.phone);

        $http({
            method: 'POST',
            url: './php/job-applications.php',
            data: formData,
            processData: false,
            headers: {
                'Content-Type': undefined
            }
        })
        .then(function(response) {
            $scope.job_id = angular.copy(orig_jobId);
            $scope.tot_experience = angular.copy(orig_totExp);
            $scope.domain_experience = angular.copy(orig_domainExp);
            $scope.files = angular.copy(orig_updatedcv);
            $scope.jobApplyForm .$setUntouched();
            $scope.successMessage = "Applied Successfully!!";
            $timeout(function() {
                $scope.successMessage = false;
            }, 5000);
            displayAppliedJobs();
        }, function(error) {
            $scope.errorMessage = "Sorry. Please try again!!";
        });
    };

    /*-- Reset all form fields and take form to its initial state --*/
    $scope.fn_reset = function() {
        $scope.job_id = angular.copy(orig_jobId);
        $scope.tot_experience = angular.copy(orig_totExp);
        $scope.domain_experience = angular.copy(orig_domainExp);
        $scope.files = angular.copy(orig_updatedcv);
        $scope.jobApplyForm .$setUntouched();
        $scope.btnName = "Apply";
    };

}])

// Career Registration
.controller("careerRegistrationCtrl", ['$scope', '$http', '$timeout', '$filter', function($scope, $http, $timeout, $filter) {
    $scope.formParams = {};
    $scope.stage = "";
    $scope.formValidation = false;
    $scope.toggleJSONView = false;
    $scope.toggleFormErrorsView = false;

    // Navigation functions
    $scope.next = function (stage) {
        //$scope.direction = 1;
        //$scope.stage = stage;
        $scope.formValidation = true;
        
        if ($scope.careerRegistration.$valid) {
            $scope.direction = 1;
            $scope.stage = stage;
            $scope.formValidation = false;
        }
    };

    $scope.back = function (stage) {
        $scope.direction = 0;
        $scope.stage = stage;
    };

    $scope.reset = function() {
        // Clean up scope before destorying
        $scope.formParams = {};
        $scope.stage = "";
    }

    // Year of Pass out
    $scope.fulldate = new Date();
    $scope.year = $scope.fulldate.getFullYear();

    /*-- File Upload --*/
    $scope.uploadedFile = function(element) {
        $scope.$apply(function($scope) {
            $scope.files = element.files;
        });
    };
    $scope.imageUpload = function(event){
	    var files = event.target.files; // FileList object
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
    
    // Table Name
    $scope.table_name = "careers_registration";
    // Email Existence Check
    $scope.checkEmail = function() {
        $http.post(
            './php/email-existence-check.php',
            {'email': $scope.formParams.email, 'table_name': $scope.table_name}
        ).then(function successCallback(response) {
            $scope.emailStatus = response.data;
            if($scope.emailStatus == "You have already registered with us!") {
                $scope.careerRegistration.email.$setValidity("minlength", false);
            }
    
        });
    };
        
    // Set Class
    $scope.addClass = function(emailStatus) {
        if(emailStatus == "You have already registered with us!") {
            return 'response exists';
        } else {
            return 'hide';
        }
    };

    // Check form validity and Insert data using $http
    $scope.fn_registerCandidate = function() {
        if($scope.careerRegistration.$valid) {
            $scope.formValidation = false;
            var formData = new FormData();
            var file = $scope.formParams.resume[0];
            formData.append('first_name',$scope.formParams.first_name);
            formData.append('middle_name',$scope.formParams.middle_name);
            formData.append('last_name',$scope.formParams.last_name);
            formData.append('email',$scope.formParams.email);
            formData.append('password',$scope.formParams.password);
            formData.append('phone',$scope.formParams.phone);
            formData.append('job_title',$scope.formParams.job_title);
            formData.append('tot_exp',$scope.formParams.tot_exp);
            formData.append('current_company',$scope.formParams.current_company);
            formData.append('skills',$scope.formParams.skills);
            formData.append('university',$scope.formParams.university);
            formData.append('degree',$scope.formParams.degree);
            formData.append('specialization',$scope.formParams.specialization);
            formData.append('year_of_graduation',$scope.formParams.year_of_graduation);
            formData.append('grade',$scope.formParams.grade);
            formData.append('resume',file);

            $http({
                url: "./php/career-registrations.php",
                method: "POST",
                data: formData,
                headers: {
                    "Content-Type": undefined
                }
            })
            .then(function successCallback(response) {
                if (response
                    && response.data
                    && response.data.status
                    && response.data.status === 'success') {
                    $scope.stage = "success";
                } else {
                    if (response
                      && response.data
                      && response.data.status
                      && response.data.status === 'error') {
                      $scope.stage = "error";
                    }
                }
            }, function errorCallback(response) {
                $scope.stage = "error";
            });
        };
    };
}])

;