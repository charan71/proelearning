angular.module("routes", ["ngRoute"])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
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
        title: "Dashboard - Pro E-Learning",
		templateUrl: "views/dashboard.php",
		controller: "dashboardCtrl"
	})
	.when("/dashboard", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/admin-login');
				}
			},
		},
        title: "Dashboard - Pro E-Learning",
		templateUrl: "views/dashboard.php",
		controller: "dashboardCtrl"
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
        title: "Registered Students - Pro E-Learning",
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
        title: "Registered Trainers - Pro E-Learning",
        templateUrl: "views/reg-trainers.html",
        controller: "regTrainers"
    })
    .when("/contacts-list", {
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/admin-login');
				}
			},
		},
        title: "Contacts List - Pro E-Learning",
        templateUrl: "views/contacts-list.html",
        controller: "contactsList"
    })
    .otherwise({
		resolve: {
			check: function($location, user) {
				if(!user.isUserLoggedIn()) {
					$location.path('/admin-login');
				}
			},
		},
        title: "404 - Page Not Found - Pro E-Learning",
        redirectTo: "/404",
        templateUrl: "views/404.html"
    });
    
    /* Configure HTML5 To Get Links Working */
    $locationProvider.html5Mode(true).hashPrefix('!');
}])

;
