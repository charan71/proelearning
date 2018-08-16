angular.module("routes", ['ngRoute', 'chart.js'])

.config(['$routeProvider', '$locationProvider', 'ChartJsProvider', function($routeProvider, $locationProvider, ChartJsProvider) {
    $routeProvider
	.when("/admin-login", {
		templateUrl: "views/admin-login.html",
		controller: "adminLoginCtrl"
	})
	.when("/logout", {
		resolve: {
			deadResolve: function($location, user) {
				user.clearData();
				$location.path('/admin-login');
			}
		}
	})
	.when("/", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/admin-login');
				}
			},
		},
        title: "Admin Dashboard - Pro-elearning",
		templateUrl: "views/admin-dashboard.php",
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
        title: "Admin Dashboard - Pro-elearning",
		templateUrl: "views/admin-dashboard.php",
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
        title: "Registered Students - Pro-elearning",
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
        title: "Registered Trainers - Pro-elearning",
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
        title: "Contacts List - Pro-elearning",
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
        title: "Course Suggestion List - Pro-elearning",
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
        title: "Free Demos List - Pro-elearning",
        templateUrl: "views/free-demos-list.html",
        controller: "freeDemosList"
    })
    .when("/course-upload", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/admin-login');
				}
			},
		},
        title: "Course Upload - Pro-elearning",
        templateUrl: "views/course-upload.html",
        controller: "courseUploadCtrl"
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
