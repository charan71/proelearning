(function() {
    "use strict";

    angular.module('controllers', ['ngRoute'])

    // Admin Login
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

    // Admin User Profile
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
    .controller('adminDashboardCtrl', function($scope, $http, $timeout, user) {
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

        $scope.websiteHits = {
            colors: ["rgba(0,170,255,0.7)","rgba(255,0,0,0.5)","rgba(159,204,0,0.5)","rgba(250,109,33,0.7)","rgba(154,154,154,0.5)"],
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            series: ["2017", "2018"],
            data: [
                [6357, 4634, 5927, 3394, 7398, 6639, 7528]
            ]
        };

        $scope.weather = {
            type: 'line',
            colors: ["rgba(255,255,255,1)","rgba(90,193,70,0.5)","rgba(19,126,255,0.5)"],
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            series: ["Nov"],
            data: [
                [29, 30, 26, 29, 30, 32, 28]
            ],
            options: {
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            display: false
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            display: false
                        }
                    }]
                },
                elements: {
                    point: {
                        radius: 2
                    },
                    line: {
                        fill: false,
                        borderWidth: 2,
                        showLines: false
                    }
                }
            }
        };

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

    // Header/Navbar
    .controller('headerCtrl', ['$scope', '$location', 'user', function($scope, $location, user) {
        $scope.data = user.getData();

        $scope.isCollapsed = true;
        $scope.$on("$routeChangeSuccess", function() {
            $scope.isCollapsed = true;
        });

        $scope.getClass = function(path) {
            if(path === '/') {
                if($location.path() === '/') {
                    return "active";
                } else {
                    return "";
                }
            }
        
            if ($location.path().substr(0, path.length) === path) {
                return "active";
            } else {
                return "";
            }
        };
    }])

    // Applied Candidates List
    .controller("appliedCandidates", ['$scope', '$http', function($scope, $http) {
        $scope.asc = "";
        $scope.desc = false;
        $scope.searchAppliedCandidates = { job_id:"", position:"", email:"" };
        $scope.appliedCandidates = [];
        $http({
            url: "./php/applied-candidates.php",
            method: "POST",
            data: "",
            headers: {
                "Content-Type":"application/x-www-form-urlencoded"
            }
        })
        .then(function(response) {
            $scope.appliedCandidates = response.data;
        })
    }])

    // Registered Students List
    .controller("regStudents", ['$scope', '$http', function($scope, $http) {
        $scope.asc = "";
        $scope.desc = false;
        $scope.searchStudent = { full_name:"", email:"", phone:"", course:"" };
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

    // Registered Trainers List
    .controller("regTrainers", ['$scope', '$http', function($scope, $http) {
        $scope.asc = "";
        $scope.desc = false;
        $scope.searchTrainer = { full_name:"", email:"", phone:"", course_name:"", current_company:"" };
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

    // Contacts List
    .controller("contactsList", ['$scope', '$http', function($scope, $http) {
        $scope.asc = "";
        $scope.desc = false;
        $scope.searchContact = { full_name:"", email:"", phone:"", category:"" };
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

    // Course Suggestions List
    .controller("courseSuggestionList", ['$scope', '$http', function($scope, $http) {
        $scope.asc = "";
        $scope.desc = false;
        $scope.searchSuggestedCourses = { full_name:"", email:"", phone:"", course_name:"" };
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

    // Free Demo Requests List
    .controller("freeDemoRequestsList", ['$scope', '$http', function($scope, $http) {
        $scope.asc = "";
        $scope.desc = false;
        $scope.freeDemoCourse = { full_name:"", email:"", phone:"", course_name:"" };
        $scope.freeDemoCourses = [];
        $http({
            url: "./php/free-demos-request-list.php",
            method: "POST",
            data: "",
            headers: {
                "Content-Type":"application/x-www-form-urlencoded"
            }
        })
        .then(function(response) {
            $scope.freeDemoCourses = response.data;
        })
    }])

    // Subscribers List
    .controller("subscribersList", ['$scope', '$http', function($scope, $http) {
        $scope.asc = "";
        $scope.desc = false;
        $scope.subscriber = { email:"" };
        $scope.subscribers = [];
        $http({
            url: "./php/subscribers-list.php",
            method: "POST",
            data: "",
            headers: {
                "Content-Type":"application/x-www-form-urlencoded"
            }
        })
        .then(function(response) {
            $scope.subscribers = response.data;
        })
    }])

    // Free Demos List
    .controller("freeDemosList", ['$scope', '$http', '$timeout', '$filter', function($scope, $http, $timeout, $filter) {
        $scope.asc = "";
        $scope.desc = false;
        $scope.searchfreeDemos = { course_name:"", batch_type:"", training_type:"" };

        var orig_courseName = $scope.courseName;
        var orig_enrolled = $scope.enrolled;
        var orig_batchType = $scope.batchType;
        var orig_trainingType = $scope.trainingType;
        var orig_nextBatch = $scope.nextBatch;
        var orig_completionRate = $scope.completionRate;
        var orig_courseImage = $scope.files;
        $scope.dt = Date();
        $scope.btnName = "Post New Demo";

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

        /*-- Fetch all free demos and display in table --*/
        function displayFreeDemos() {
            $scope.freeDemos = [];
            $http({
                url: "./php/free-demos-fetch.php",
                method: "POST",
                data: "",
                headers: {
                    "Content-Type":"application/x-www-form-urlencoded"
                }
            })
            .then(function(response) {
                $scope.freeDemos = response.data;
            });
        }
        displayFreeDemos();

        /*-- Upload Free Demo --*/
        $scope.fn_freeDemo = function() {

            // Converting Date to Milliseconds
            var ms = new Date($scope.nextBatch).getTime();
        
            var formData = new FormData();
            var file = $scope.files[0];
            formData.append('id',$scope.id);
            formData.append('course_name',$scope.courseName);
            formData.append('enrolled',$scope.enrolled);
            formData.append('batch_type',$scope.batchType);
            formData.append('training_type',$scope.trainingType);
            formData.append('next_batch',ms);
            formData.append('completion_rate',$scope.completionRate);
            formData.append('file',file);
            formData.append('date_time',$scope.dt);
            formData.append('btnName',$scope.btnName);
            
            $http({
                method: 'POST',
                url: './php/free-demos-list.php',
                data: formData,
                processData: false,
                headers: {
                    'Content-Type': undefined
                }
            }).then(function(response) {
                $scope.courseName = angular.copy(orig_courseName);
                $scope.enrolled = angular.copy(orig_enrolled);
                $scope.batchType = angular.copy(orig_batchType);
                $scope.trainingType = angular.copy(orig_trainingType);
                $scope.nextBatch = angular.copy(orig_nextBatch);
                $scope.completionRate = angular.copy(orig_completionRate);
                $scope.files = angular.copy(orig_courseImage);
                $scope.freeDemosForm.$setUntouched();
                $scope.successMessage = "New course uploaded successfully!!";
                $timeout(function() {
                    $scope.successMessage = false;
                }, 5000);
                $scope.btnName = "Post New Demo";
                displayFreeDemos();
            }, function(error) {
                $scope.errorMessage = "Sorry. Please try again!!";
            });
        };

        /*-- Reset all form fields and form to its initial state --*/
        $scope.fn_reset = function() {
            $scope.courseName = angular.copy(orig_courseName);
            $scope.enrolled = angular.copy(orig_enrolled);
            $scope.batchType = angular.copy(orig_batchType);
            $scope.trainingType = angular.copy(orig_trainingType);
            $scope.nextBatch = angular.copy(orig_nextBatch);
            $scope.completionRate = angular.copy(orig_completionRate);
            $scope.files = angular.copy(orig_courseImage);
            $scope.freeDemosForm.$setUntouched();
            $scope.btnName = "Post New Demo";
        };

        /*-- Delete a free demo record --*/
        $scope.fn_deleteFreeDemo = function(id, file) {
            $http({
                url: "./php/delete-free-demo.php",
                method: "POST",
                data: {'id': id, 'file': file}
            })
            .then(function() {
                $scope.successMessage = "Record deleted successfully!";
                $timeout(function() {
                    $scope.successMessage = false;
                }, 5000);
                displayFreeDemos();
            }, function(error) {
                $scope.errorMessage = "Failed to delete record!";
            })
        };

        /*-- Edit Free Demo --*/
        $scope.fn_editFreeDemo = function(id, course_name, enrolled, batch_type, training_type, next_batch, completion_rate, file) {
            $scope.id = id;
            $scope.courseName = course_name;
            $scope.enrolled = enrolled;
            $scope.batchType = batch_type;
            $scope.trainingType = training_type;
            $scope.nextBatch = next_batch;
            // Convert milliseconds to DateTime Format
            $scope.msToDate = $filter('date')($scope.nextBatch, 'dd-MMM-yyyy h:mm a');
            // Converting Date String to Date Object
            $scope.dtStringToObj = new Date($scope.msToDate);
            $scope.nextBatch = $scope.dtStringToObj;
            $scope.completionRate = completion_rate;
            $scope.files = file;
            $scope.btnName = "Update";
        };
    }])

    // Course Upload List
    .controller("courseUploadCtrl", ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
        $scope.asc = "";
        $scope.desc = false;
        $scope.uploadCourse = { course_name:"", course_description:"", course_url:"", course_price:"" };

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

    // New Course Schedule
    .controller("newCourseScheduleCtrl", ['$scope', '$http', '$timeout', '$filter', function($scope, $http, $timeout, $filter) {
        // Applying Filters
        $scope.asc = "";
        $scope.desc = false;
        $scope.searchSchedule = { course_name:"", batch_type:"", training_type:"", trainer_name:"" };
        
        /*-- Fetching all scheduled courses and display in table --*/
        function displaySchedules() {
            $scope.courseSchedules = [];
            $http({
                url: "./php/course-schedules-fetch.php",
                method: "POST",
                data: "",
                headers: {
                    "Content-Type":"application/x-www-form-urlencoded"
                }
            })
            .then(function(response) {
                $scope.courseSchedules = response.data;
            });
        }
        displaySchedules();

        /*-- Insert New Course Schedule --*/
        var orig_courseName = $scope.course_name;
        var orig_courseScheduleDate = $scope.course_schedule_date;
        var orig_batchType = $scope.batch_type;
        var orig_trainingType = $scope.training_type;
        var orig_duration = $scope.duration;
        var orig_trainerName = $scope.trainer_name;
        $scope.dt = Date();
        $scope.btnName = "Insert";

        $scope.fn_insertNewSchedules = function() {
            $http.post(
                "./php/course-schedules.php",
                {'sno': $scope.sno, 'course_name': $scope.course_name, 'start_date': $scope.course_schedule_date, 'batch_type': $scope.batch_type, 'training_type': $scope.training_type, 'duration': $scope.duration, 'trainer_name': $scope.trainer_name, 'date_time': $scope.dt, 'btnName': $scope.btnName}
                )
                .then(function(response) {
                $scope.course_name = angular.copy(orig_courseName);
                $scope.course_schedule_date = angular.copy(orig_courseScheduleDate);
                $scope.batch_type = angular.copy(orig_batchType);
                $scope.training_type = angular.copy(orig_trainingType);
                $scope.duration = angular.copy(orig_duration);
                $scope.trainer_name = angular.copy(orig_trainerName);
                $scope.courseSchedulesForm.$setUntouched();
                $scope.successMessage = "Updated successfully!!";
                $timeout(function() {
                    $scope.successMessage = false;
                }, 5000);
                $scope.btnName = "Insert";
                displaySchedules();
            }, function(error) {
                $scope.errorMessage = "Sorry. Please try again!!";
            });
        };

        /*-- Reset all form fields and form to its initial state --*/
        $scope.fn_reset = function() {
            $scope.course_name = angular.copy(orig_courseName);
            $scope.course_schedule_date = angular.copy(orig_courseScheduleDate);
            $scope.batch_type = angular.copy(orig_batchType);
            $scope.training_type = angular.copy(orig_trainingType);
            $scope.duration = angular.copy(orig_duration);
            $scope.trainer_name = angular.copy(orig_trainerName);
            $scope.courseSchedulesForm.$setUntouched();
            $scope.btnName = "Insert";
        };

        /*-- Delete selected course schedule --*/
        $scope.fn_deleteSchedule = function(sno) {
            $http({
                url: "./php/delete-schedule.php",
                method: "POST",
                data: {'sno': sno}
            })
            .then(function() {
                $scope.successMessage = "Record deleted successfully!";
                $timeout(function() {
                    $scope.successMessage = false;
                }, 5000);
                displaySchedules();
            }, function(error) {
                $scope.errorMessage = "Failed to delete record!";
            })
        };

        /*-- Edit selected course schedule --*/
        $scope.fn_editSchedule = function(sno, course_name, start_date, batch_type, training_type, duration, trainer_name) {
            $scope.sno = sno;
            $scope.course_name = course_name;
            $scope.course_schedule_date = start_date;
            // Convert milliseconds to DateTime Format
            $scope.msToDate = $filter('date')($scope.course_schedule_date, 'dd-MMM-yyyy h:mm a');
            // Converting Date String to Date Object
            $scope.dtStringToObj = new Date($scope.msToDate);
            $scope.course_schedule_date = $scope.dtStringToObj;
            $scope.batch_type = batch_type;
            $scope.training_type = training_type;
            $scope.duration = duration;
            $scope.trainer_name = trainer_name;
            $scope.btnName = "Update";
        };
    }])

    // Job Postings
    .controller("jobPostingsUploadCtrl", ['$scope', '$http', '$timeout', '$filter', function($scope, $http, $timeout, $filter) {
        var orig_jobId = $scope.job_id;
        var orig_position = $scope.position;
        var orig_minExp = $scope.min_experience;
        var orig_maxExp = $scope.max_experience;
        var orig_jobPostingDate = $scope.job_posting_date;
        var orig_jobDesc = $scope.files;
        $scope.dt = Date();
        $scope.btnName = "Post New Job";

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
        
        /*-- Fetching all scheduled courses and display in table --*/
        $scope.asc = "";
        $scope.desc = false;
        $scope.searchJobPostings = { job_id:"", position:"", min_experience:"", max_experience:"" };

        function displayJobPostings() {
            $scope.jobPostings = [];
            $http({
                url: "./php/job-postings-fetch.php",
                method: "POST",
                data: "",
                headers: {
                    "Content-Type":"application/x-www-form-urlencoded"
                }
            })
            .then(function(response) {
                $scope.jobPostings = response.data;
            });
        }
        displayJobPostings();

        /*-- Insert New Course Schedule --*/
        $scope.fn_insertJobPostings = function() {
            
            // Converting Date to Milliseconds
            var ms = new Date($scope.job_posting_date).getTime();
        
            var formData = new FormData();
            var file = $scope.files[0];
            formData.append('sno',$scope.sno);
            formData.append('job_id',$scope.job_id);
            formData.append('position',$scope.position);
            formData.append('min_experience',$scope.min_experience);
            formData.append('max_experience',$scope.max_experience);
            formData.append('posting_date',ms);
            formData.append('file',file);
            formData.append('date_time',$scope.dt);
            formData.append('btnName',$scope.btnName);

            $http({
                method: 'POST',
                url: './php/job-postings.php',
                data: formData,
                processData: false,
                headers: {
                    'Content-Type': undefined
                }
            })
            .then(function(response) {
                $scope.job_id = angular.copy(orig_jobId);
                $scope.position = angular.copy(orig_position);
                $scope.min_experience = angular.copy(orig_minExp);
                $scope.max_experience = angular.copy(orig_maxExp);
                $scope.job_posting_date = angular.copy(orig_jobPostingDate);
                $scope.files = angular.copy(orig_jobDesc);
                $scope.jobPostingsForm.$setUntouched();
                $scope.successMessage = "Updated successfully!!";
                $timeout(function() {
                    $scope.successMessage = false;
                }, 5000);
                $scope.btnName = "Post New Job";
                displayJobPostings();
            }, function(error) {
                $scope.errorMessage = "Sorry. Please try again!!";
            });
        };

        /*-- Reset all form fields and take form to its initial state --*/
        $scope.fn_reset = function() {
            $scope.job_id = angular.copy(orig_jobId);
            $scope.position = angular.copy(orig_position);
            $scope.min_experience = angular.copy(orig_minExp);
            $scope.max_experience = angular.copy(orig_maxExp);
            $scope.job_posting_date = angular.copy(orig_jobPostingDate);
            $scope.files = angular.copy(orig_jobDesc);
            $scope.jobPostingsForm.$setUntouched();
            $scope.btnName = "Post New Job";
        };

        /*-- Delete selected Job Posting --*/
        $scope.fn_deleteJobPosting = function(sno, file) {
            $http({
                url: "./php/delete-job-posting.php",
                method: "POST",
                data: {'sno': sno, 'file': file}
            })
            .then(function() {
                $scope.successMessage = "Record deleted successfully!";
                $timeout(function() {
                    $scope.successMessage = false;
                }, 5000);
                displayJobPostings();
            }, function(error) {
                $scope.errorMessage = "Failed to delete record!";
            })
        };

        /*-- Edit selected Job Posting --*/
        $scope.fn_editJobPosting = function(sno, job_id, position, min_experience, max_experience, posting_date, file) {
            $scope.sno = sno;
            $scope.job_id = job_id;
            $scope.position = position;
            $scope.min_experience = min_experience;
            $scope.max_experience = max_experience;
            $scope.job_posting_date = posting_date;
            // Convert milliseconds to DateTime Format
            $scope.msToDate = $filter('date')($scope.job_posting_date, 'dd-MMM-yyyy h:mm a');
            // Converting Date String to Date Object
            $scope.dtStringToObj = new Date($scope.msToDate);
            $scope.job_posting_date = $scope.dtStringToObj;
            $scope.files = file;
            $scope.btnName = "Update";
        };
    }])

    // Certificate Controller
    .controller("createCertificateCtrl", ['$scope', '$http', '$timeout', '$filter', function($scope, $http, $timeout, $filter) {
        /*-- Fetching all certificates details and display in table --*/
        $scope.asc = "";
        $scope.desc = false;
        $scope.searchCertificate = { candidate_name:"", candidate_email:"", certificate_id:"", course_name:"" };

        $scope.certificateDetails = [];
        $http({
            url: "./php/generate-certificate-details-fetch.php",
            method: "POST",
            data: "",
            headers: {
                "Content-Type":"application/x-www-form-urlencoded"
            }
        })
        .then(function(response) {
            $scope.certificateDetails = response.data;
        });

        /*-- Generate And Insert New Certificate --*/
        var orig_candidateName = $scope.candidateName;
        var orig_candidateEmail = $scope.candidateEmail;
        var orig_courseName = $scope.courseName;
        $scope.btnName = "Generate";

        $scope.fn_insertNewSchedules = function() {
            // $scope.certificatePrefixCompany = "PL";     // Certificate ID Prefix Company Name
            // // $scope.certificatePrefixCourse = "Java";    // Certificate ID Prefix Course Name
            // $scope.trimStr = $scope.courseName.substring(0,2); // Trim Course Name Upto First Two Characters
            // $scope.trimStrUpper = $scope.trimStr.toUpperCase();     // Convert Trimmed Characters Into Uppercase
            // $scope.certificateIdPrefix = $scope.certificatePrefixCompany + $scope.trimStrUpper;   // Concatinating Both Prefixes

            $http.post(
                "./php/generate-certificate-details.php",
                {
                    'candidate_name': $scope.candidateName,
                    'candidate_email': $scope.candidateEmail,
                    'course_name': $scope.courseName,
                    // 'certificate_id_prefix': $scope.certificateIdPrefix,
                    'btnName': $scope.btnName
                })
                .then(function(response) {
                $scope.candidateName = angular.copy(orig_candidateName);
                $scope.candidateEmail = angular.copy(orig_candidateEmail);
                $scope.courseName = angular.copy(orig_courseName);
                $scope.generateCertificateForm.$setUntouched();
                $scope.successMessage = "Updated successfully!!";
                $timeout(function() {
                    $scope.successMessage = false;
                }, 5000);
                $scope.btnName = "Generate";
                // displaySchedules();
            }, function(error) {
                $scope.errorMessage = "Sorry. Please try again!!";
            });
        };

        /*-- Reset all form fields and form to its initial state --*/
        $scope.fn_reset = function() {
            $scope.candidateName = angular.copy(orig_candidateName);
            $scope.candidateEmail = angular.copy(orig_candidateEmail);
            $scope.courseName = angular.copy(orig_courseName);
            $scope.generateCertificateForm.$setUntouched();
            $scope.btnName = "Generate";
        };

    }])

    // Certificate Verify Controller
    .controller("certificateVerifyCtrl", ['$scope', '$http', '$timeout', '$filter', function($scope, $http, $timeout, $filter) {

        $scope.certificateDetails = [];
        $http({
            url: "./php/generate-certificate-details-fetch.php",
            method: "POST",
            data: "",
            headers: {
                "Content-Type":"application/x-www-form-urlencoded"
            }
        })
        .then(function(response) {
            $scope.certificateDetails = response.data;
        });

        /*-- Generate And Insert New Certificate --*/
        var orig_candidateName = $scope.candidateName;
        var orig_candidateEmail = $scope.candidateEmail;
        var orig_courseName = $scope.courseName;
        $scope.btnName = "Generate";

        $scope.fn_insertNewSchedules = function() {

            $http.post(
                "./php/generate-certificate-details.php",
                {
                    'candidate_name': $scope.candidateName,
                    'candidate_email': $scope.candidateEmail,
                    'course_name': $scope.courseName,
                    // 'certificate_id_prefix': $scope.certificateIdPrefix,
                    'btnName': $scope.btnName
                })
                .then(function(response) {
                $scope.candidateName = angular.copy(orig_candidateName);
                $scope.candidateEmail = angular.copy(orig_candidateEmail);
                $scope.courseName = angular.copy(orig_courseName);
                $scope.generateCertificateForm.$setUntouched();
                $scope.successMessage = "Updated successfully!!";
                $timeout(function() {
                    $scope.successMessage = false;
                }, 5000);
                $scope.btnName = "Generate";
                // displaySchedules();
            }, function(error) {
                $scope.errorMessage = "Sorry. Please try again!!";
            });
        };

        /*-- Reset all form fields and form to its initial state --*/
        $scope.fn_reset = function() {
            $scope.candidateName = angular.copy(orig_candidateName);
            $scope.candidateEmail = angular.copy(orig_candidateEmail);
            $scope.courseName = angular.copy(orig_courseName);
            $scope.generateCertificateForm.$setUntouched();
            $scope.btnName = "Generate";
        };

    }])

    .controller("footerController", ["$scope", function($scope) {
        // Copyright year
        $scope.fulldate = new Date();
        $scope.year = $scope.fulldate.getFullYear();
    }])

    ;
}(angular));
