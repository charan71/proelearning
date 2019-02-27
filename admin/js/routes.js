angular.module("routes", ['ngRoute', 'chart.js'])

.config(['$routeProvider', '$locationProvider', 'ChartJsProvider', function($routeProvider, $locationProvider, ChartJsProvider) {
    $routeProvider
	.when("/admin-login", {
		title: "Login to Admin Dashboard - Pro-elearning",
		templateUrl: "views/admin-login.html",
		controller: "adminLoginCtrl",
	})
	.when("/logout", {
		resolve: {
			deadResolve: function($location, user) {
				user.clearData();
				$location.path('/admin-login');
			}
		},
	})
	.when("/", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/admin-login');
				}
			},
		},
        title: "Admin Dashboard - Pro-elearning Administrator",
		templateUrl: "views/admin-dashboard.html",
		controller: "adminDashboardCtrl"
	})
	.when("/admin-dashboard", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/admin-login');
				}
			},
		},
        title: "Admin Dashboard - Pro-elearning Administrator",
		templateUrl: "views/admin-dashboard.html",
		controller: "adminDashboardCtrl"
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
    .when("/career-registrations", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/admin-login');
				}
			},
		},
        title: "Career Registrations - Pro-elearning Administrator",
        templateUrl: "views/career-registrations.html",
        controller: "careerRegistrations"
    })
    .when("/applied-candidates", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/admin-login');
				}
			},
		},
        title: "Applied Candidates - Pro-elearning Administrator",
        templateUrl: "views/applied-candidates.html",
        controller: "appliedCandidates"
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
    .when("/free-demo-requests", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/admin-login');
				}
			},
		},
        title: "Free Demo Requests List - Pro-elearning Administrator",
        templateUrl: "views/free-demos-requests-list.html",
        controller: "freeDemoRequestsList"
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
    .when("/certificate", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/admin-login');
				}
			},
		},
        title: "Certificate - Pro-elearning Administrator",
        templateUrl: "views/create-certificate.html",
        controller: "createCertificateCtrl"
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
