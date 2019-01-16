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
		templateUrl: "views/candidate-dashboard.html",
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
		templateUrl: "views/candidate-dashboard.html",
		controller: "candidateDashboardCtrl"
	})
	.when("/profile", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/careers-login');
				}
			},
		},
		title: "Profile - Pro-elearning",
		templateUrl: "views/profile.html",
		controller: "profileCtrl"
	})
    .when("/jobs-applied", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/careers-login');
				}
			},
		},
        title: "Applied Jobs - Pro-elearning",
        templateUrl: "views/jobs-applied.html",
        controller: "appliedJobsCtrl"
    })
    .when("/apply-for-job", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/careers-login');
				}
			},
		},
        title: "Apply for Job - Pro-elearning",
        templateUrl: "views/apply-for-job.html",
        controller: "applyForJobCtrl"
    })
    .when("/registered-students", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/careers-login');
				}
			},
		},
        title: "Registered Students - Pro-elearning",
        templateUrl: "views/reg-students.html",
        controller: "regStudents"
    })
    .when("/registered-trainers", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/careers-login');
				}
			},
		},
        title: "Registered Trainers - Pro-elearning",
        templateUrl: "views/reg-trainers.html",
        controller: "regTrainers"
    })
    .when("/contact-us-list", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/careers-login');
				}
			},
		},
        title: "Contacts List - Pro-elearning",
        templateUrl: "views/contacts-us-list.html",
        controller: "contactsList"
    })
    .when("/course-suggestion-list", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/careers-login');
				}
			},
		},
        title: "Course Suggestion List - Pro-elearning",
        templateUrl: "views/course-suggestion-list.html",
        controller: "courseSuggestionList"
    })
    .when("/free-demos-list", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/careers-login');
				}
			},
		},
        title: "Free Demos List - Pro-elearning",
        templateUrl: "views/free-demos-list.html",
        controller: "freeDemosList"
    })
    .when("/subscribers-list", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/careers-login');
				}
			},
		},
        title: "Subscribers List - Pro-elearning",
        templateUrl: "views/subscribers-list.html",
        controller: "subscribersList"
    })
    .when("/job-postings", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/careers-login');
				}
			},
		},
        title: "Job Postings - Pro-elearning",
        templateUrl: "views/job-postings.html",
        controller: "jobPostingsUploadCtrl"
    })
    .when("/course-upload", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/careers-login');
				}
			},
		},
        title: "Course Upload - Pro-elearning",
        templateUrl: "views/course-upload.html",
        controller: "courseUploadCtrl"
    })
    .when("/new-course-schedule", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/careers-login');
				}
			},
		},
        title: "New Course Schedule - Pro-elearning",
        templateUrl: "views/new-course-schedule.html",
        controller: "newCourseScheduleCtrl"
    })
    .otherwise({
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/careers-login');
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
