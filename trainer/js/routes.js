angular.module("routes", ["ngRoute"])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
	.when("/login", {
		templateUrl: "views/login.html",
		controller: "loginCtrl"
	})
	.when("/logout", {
		resolve: {
			deadResolve: function($location, user) {
				user.clearData();
				$location.path('/login');
			}
		}
	})
	.when("/", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/login');
				}
			},
		},
        title: "Trainer Dashboard - Pro-elearning",
		templateUrl: "views/trainer-dashboard.php",
		controller: "trainerDashboardCtrl"
	})
	.when("/trainer-dashboard", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/login');
				}
			},
		},
        title: "Trainer Dashboard - Pro-elearning",
		templateUrl: "views/trainer-dashboard.php",
		controller: "trainerDashboardCtrl"
	})
	.when("/profile", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/login');
				}
			},
		},
        title: "Trainer Profile - Pro-elearning",
		templateUrl: "views/profile.html",
		controller: "profileCtrl"
	})
    .when("/registered-students", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/login');
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
					$location.path('/login');
				}
			},
		},
        title: "Registered Trainers - Pro-elearning",
        templateUrl: "views/reg-trainers.html",
        controller: "regTrainers"
    })
    .when("/contacts-list", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/login');
				}
			},
		},
        title: "Contacts List - Pro-elearning",
        templateUrl: "views/contacts-list.html",
        controller: "contactsList"
    })
    .otherwise({
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/login');
				}
			},
		},
        title: "404 - Page Not Found - Pro-elearning",
        redirectTo: "/404",
        templateUrl: "views/404.html"
    });
    
    /* Configure HTML5 To Get Links Working */
    $locationProvider.html5Mode(true).hashPrefix('!');
}])

;
