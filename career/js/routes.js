angular.module("routes", ['ngRoute', 'chart.js'])

.config(['$routeProvider', '$locationProvider', 'ChartJsProvider', function($routeProvider, $locationProvider, ChartJsProvider) {
    $routeProvider
	.when("/careers-login", {
		templateUrl: "views/careers-login.html",
		controller: "careersLoginCtrl"
	})
	.when("/logout", {
		resolve: {
			deadResolve: function($location, user) {
				user.clearData();
				$location.path('/careers-login');
			}
		}
	})
	.when("/career-registration", {
		// resolve: {
		// 	check: function($location, user) {
		// 		if(!user.isUserLoggedIn()) {
		// 			$location.path('/careers-login');
		// 		}
		// 	},
		// },
        title: "Career Registration - Pro-elearning Careers",
		templateUrl: "views/career-registration.html",
		controller: "careerRegistrationCtrl"
	})
	.when("/", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/careers-login');
				}
			},
		},
        title: "Candidate Dashboard - Pro-elearning Careers",
		templateUrl: "views/candidate-dashboard.php",
		controller: "candidateDashboardCtrl"
	})
	.when("/candidate-dashboard", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/careers-login');
				}
			},
		},
        title: "Candidate Dashboard - Pro-elearning Careers",
		templateUrl: "views/candidate-dashboard.php",
		controller: "candidateDashboardCtrl"
	})
	.when("/profile", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/admin-login');
				}
			},
		},
		title: "Profile - Pro-elearning Administrator",
		templateUrl: "views/profile.html",
		controller: "profileCtrl"
	})
    .when("/registered-students", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/admin-login');
				}
			},
		},
        title: "Registered Students - Pro-elearning Administrator",
        templateUrl: "views/reg-students.html",
        controller: "regStudents"
    })
    .when("/registered-trainers", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/admin-login');
				}
			},
		},
        title: "Registered Trainers - Pro-elearning Administrator",
        templateUrl: "views/reg-trainers.html",
        controller: "regTrainers"
    })
    .when("/contact-us-list", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/admin-login');
				}
			},
		},
        title: "Contacts List - Pro-elearning Administrator",
        templateUrl: "views/contacts-us-list.html",
        controller: "contactsList"
    })
    .when("/course-suggestion-list", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/admin-login');
				}
			},
		},
        title: "Course Suggestion List - Pro-elearning Administrator",
        templateUrl: "views/course-suggestion-list.html",
        controller: "courseSuggestionList"
    })
    .when("/free-demos-list", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/admin-login');
				}
			},
		},
        title: "Free Demos List - Pro-elearning Administrator",
        templateUrl: "views/free-demos-list.html",
        controller: "freeDemosList"
    })
    .when("/subscribers-list", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/admin-login');
				}
			},
		},
        title: "Subscribers List - Pro-elearning Administrator",
        templateUrl: "views/subscribers-list.html",
        controller: "subscribersList"
    })
    .when("/job-postings", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/admin-login');
				}
			},
		},
        title: "Job Postings - Pro-elearning Administrator",
        templateUrl: "views/job-postings.html",
        controller: "jobPostingsUploadCtrl"
    })
    .when("/course-upload", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/admin-login');
				}
			},
		},
        title: "Course Upload - Pro-elearning Administrator",
        templateUrl: "views/course-upload.html",
        controller: "courseUploadCtrl"
    })
    .when("/new-course-schedule", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/admin-login');
				}
			},
		},
        title: "New Course Schedule - Pro-elearning Administrator",
        templateUrl: "views/new-course-schedule.html",
        controller: "newCourseScheduleCtrl"
    })
    .otherwise({
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/admin-login');
				}
			},
		},
        title: "404 - Page Not Found - Pro-elearning",
        redirectTo: "/404",
        templateUrl: "views/404.html"
    });
    
    /* Configure HTML5 To Get Links Working */
	$locationProvider.html5Mode(true).hashPrefix('!');
	
    /* Charts.js Defining Deffault Settings */
    ChartJsProvider.setOptions({
        chartColors: [ '#FF5252', '#FF8A80' ],
        responsive: true
    });
}])

;
