(function() {
"use strict";

angular.module('ProELearning.controllers', [])

/* Get Geo Location */
.controller('getGeoIPCtrl', ['$scope', '$http', '$rootScope',
 function($scope, $http, $rootScope) {
    if($rootScope.shortCountryCode == "IN") {
        $scope.fees = "₹25000";
    } else {
        $scope.fees = "$400";
    }
}])

/* Creating Controller for Main Carousel */
.controller('mainCarouselController', ['$scope', function($scope) {
    $(".carousel").carousel({
        interval: 3000
    });
    $scope.slide = function(dir) {
        $('#carousel-main-generic').carousel(dir);
    };
    $scope.slideTo = function(targ) {
        $('#carousel-main-generic').carousel(targ);
    };
    $scope.mainCarouselSlides = [
        {c_image:"e-education-book-tablet.jpg", c_imgAlt:"Learn-New-Skills-Online-Pro-eLearning", c_h1:"Flexible Timings &middot; Choice of Learning &middot; 24x7 Support", c_h4:"Never miss the chance", c_para:""},
        {c_image:"be-on-top-of-competition.jpg", c_imgAlt:"Be-on-Top-of-Competition-Pro-eLearning", c_h1:"Build skills &middot; Work smarter", c_h4:"Take your skills to the next level", c_para:""},
        {c_image:"back-to-e-school.jpg", c_imgAlt:"Back-To-E-School-Pro-eLearning", c_h1:"Prepare yourself for a never ending race", c_h4:"You are the mentor, the instructor and the path seeker of your career", c_para:""},
        {c_image:"e-education-board-book-c-f.jpg", c_imgAlt:"E-Class-Room-Pro-eLearning", c_h1:"Online &middot; On-Site &middot; On-Demand", c_h4:"Learn At Your Convenience", c_para:""},
    ];

}])

/* Testimonials Controller */
.controller("TestimonialsController", ['$scope', function($scope) {
    $(".carousel").carousel({
        interval: 3000
    });
    $scope.slideTo = function(targ) {
        $('#testimonials-slider').carousel(targ);
    };
    $scope.testimonials = [
        {t_image:"male-default-256x256.png", t_desc:"Hi, I took training from Pro-elearning for Big data & Advanced Analytics. Trainer covered almost every possible real-time scenarios and also provided bunch of materials. It was pretty much helpful for finding me a job in the same domain. Thanks to Pro-elearning for an extraordinary training service. I strongly recommend Pro-elearning for the most advanced course trainings.", t_name:"Aparajit", t_company:"Prodesign Technologies"},
        {t_image:"male-default-256x256.png", t_desc:"Iam very happy to work with your company.Thank you so much for providing this type of opportunity.I hope we will continue for ever.", t_name:"Sairam", t_company:"", t_role:"Trainer"},
        {t_image:"male-default-256x256.png", t_desc:"Online training makes learning eazy from anywhere. I personaly feel online training is very flexible that I can provide traing to yhe candidate without affecting my full-time job. But the main thing I felt the candidate should not lose interest on the training.", t_name:"Sudeep", t_company:"df3d", t_role:"Trainer"},
        {t_image:"female-default-256x256.png", t_desc:"Hi, HELLO DUSTBIN was a good idea and nice thinking. Spread this to all cities and it is useful for swachh bharat.", t_name:"Monika Mohapatra", t_company:"Google Inc."},
    ];
}])

/* Creating ScrollToTopController */
.controller("ScrollToTopController", ['$scope', function($scope) {
    $scope.scrollToTop = function() {
        $('html, body').animate({
            scrollTop: 0
        }, '2000');
    }
}])

/* Course Tabs */
.controller('CoursesController', ['$scope', function($scope) {

	$scope.open = function(Tab) {
		$scope.currentTAB = Tab;
	};
}])

/* Bootstrap Tabs Show In URL 
.controller("regController", ['$scope', function($scope) {
    $scope.url = document.URL;
    $scope.hash = $scope.url.substring($scope.url.indexOf("#"));
    
    $(".nav.nav-pills").find("li a").each(function(key, val) {
        if ($scope.hash == $(val).attr('data-target')) {
            $(val).click();
        }
        
        $(val).click(function(ky, vl) {
            location.$scope.hash = $(this).attr('data-target'); 
        });
    });
}])
*/

/* Student Registration Controller */
.controller("studentController", ['$scope', '$http', '$controller', '$timeout', function($scope, $http, $controller, $timeout) {
    $controller('QualificationListController', {$scope:$scope})

    var orig_name = $scope.sname;
    var orig_email = $scope.email;
    var orig_phone = $scope.phone;
    var orig_gender = $scope.gender;
    var orig_country = $scope.country;
    var orig_state = $scope.state;
    var orig_qualification = $scope.qualification;
    var orig_occupation = $scope.occupation;
    var orig_course = $scope.course;
    var orig_message = $scope.message;
    $scope.dt = Date();
    
    $scope.fn_insertStudent = function() {
        $http.post(
            "./php/student_reg.php",
            {'full_name': $scope.sname, 'email': $scope.email, 'phone': $scope.phone, 'gender': $scope.gender, 'country': $scope.country, 'state': $scope.state, 'qualification': $scope.qualification, 'occupation': $scope.occupation, 'course': $scope.course, 'message': $scope.message, 'date_time': $scope.dt}
        ).then(function(data){
                $scope.sname = angular.copy(orig_name);
                $scope.email = angular.copy(orig_email);
                $scope.phone = angular.copy(orig_phone);
                $scope.gender = angular.copy(orig_gender);
                $scope.country = angular.copy(orig_country);
                $scope.state = angular.copy(orig_state);
                $scope.qualification = angular.copy(orig_qualification);
                $scope.occupation = angular.copy(orig_occupation);
                $scope.course = angular.copy(orig_course);
                $scope.message = angular.copy(orig_message);
                $scope.studRegForm.$setUntouched();
                $scope.successMessage = "Your request for learning a course is successfully registered with us. Our technical team will reach you shortly. Thankyou!!";
                $timeout(function() {
                    $scope.successMessage = false;
                }, 5000);
            }, function(error) {
                $scope.errorMessage = "An error occurred. Please try again!";
        });
    };
    $scope.fn_reset = function() {
        $scope.sname = angular.copy(orig_name);
        $scope.email = angular.copy(orig_email);
        $scope.phone = angular.copy(orig_phone);
        $scope.gender = angular.copy(orig_gender);
        $scope.country = angular.copy(orig_country);
        $scope.state = angular.copy(orig_state);
        $scope.qualification = angular.copy(orig_qualification);
        $scope.occupation = angular.copy(orig_occupation);
        $scope.course = angular.copy(orig_course);
        $scope.message = angular.copy(orig_message);
        $scope.studRegForm.$setUntouched();
    };
}])

/* Trainer Registration Controller */
.controller("trainerController", ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
    
    var orig_name = $scope.tname;
    var orig_email = $scope.email;
    var orig_phone = $scope.phone;
    var orig_gender = $scope.gender;
    var orig_country = $scope.country;
    var orig_state = $scope.state;
    var orig_workExp = $scope.workExp;
    var orig_trainingExp = $scope.trainingExp;
    var orig_techExp = $scope.techExp;
    var orig_resume = $scope.files;
    var orig_message = $scope.message;
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
    
    $scope.fn_insertTrainer = function() {
        var formData = new FormData();
        var file = $scope.files[0];
        formData.append('full_name',$scope.tname);
        formData.append('email',$scope.email);
        formData.append('phone',$scope.phone);
        formData.append('gender',$scope.gender);
        formData.append('country',$scope.country);
        formData.append('state',$scope.state);
        formData.append('work_exp',$scope.workExp);
        formData.append('training_exp',$scope.trainingExp);
        formData.append('technology_exp',$scope.techExp);
        formData.append('file',file);
        formData.append('message',$scope.message);
        formData.append('date_time',$scope.dt);
        
        $http({
            method: 'POST',
            url: './php/trainer_reg.php',
            data: formData,
            processData: false,
            headers: {
                'Content-Type': undefined
            }
        }).then(function(response) {
            $scope.tname = angular.copy(orig_name);
            $scope.email = angular.copy(orig_email);
            $scope.phone = angular.copy(orig_phone);
            $scope.gender = angular.copy(orig_gender);
            $scope.country = angular.copy(orig_country);
            $scope.state = angular.copy(orig_state);
            $scope.workExp = angular.copy(orig_workExp);
            $scope.trainingExp = angular.copy(orig_trainingExp);
            $scope.techExp = angular.copy(orig_techExp);
            $scope.resume = angular.copy(orig_resume);
            $scope.message = angular.copy(orig_message);
            $scope.trainerRegForm.$setUntouched();
            $scope.successMessage = "Your request as a trainer is successfully registered with us. Our technical team will reach you shortly. Thankyou!!";
            $timeout(function() {
                $scope.successMessage = false;
            }, 5000);
        }, function(error) {
            $scope.errorMessage = "An error occurred. Please try again!";
        });
    };

    /*-- Reset all form fields and form to its initial state --*/
    $scope.fn_reset = function() {
        $scope.tname = angular.copy(orig_name);
        $scope.email = angular.copy(orig_email);
        $scope.phone = angular.copy(orig_phone);
        $scope.gender = angular.copy(orig_gender);
        $scope.country = angular.copy(orig_country);
        $scope.state = angular.copy(orig_state);
        $scope.workExp = angular.copy(orig_workExp);
        $scope.trainingExp = angular.copy(orig_trainingExp);
        $scope.techExp = angular.copy(orig_techExp);
        $scope.resume = angular.copy(orig_resume);
        $scope.message = angular.copy(orig_message);
        $scope.trainerRegForm.$setUntouched();
    };
}])

/* Contact Form Controller */
.controller("contactController", ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
	var orig_name = $scope.name;
    var orig_email = $scope.email;
    var orig_phone = $scope.phone;
    var orig_category = $scope.category;
    var orig_message = $scope.message;
    $scope.dt = Date();
    $scope.fn_insertContact = function() {
        $http.post(
            "./php/contact-form.php",
                {'full_name': $scope.name, 'email': $scope.email, 'phone': $scope.phone, 'category': $scope.category, 'message': $scope.message, 'date_time': $scope.dt}
            ).then(function(data) {
                $scope.name = angular.copy(orig_name);
                $scope.email = angular.copy(orig_email);
                $scope.phone = angular.copy(orig_phone);
                $scope.category = angular.copy(orig_category);
                $scope.message = angular.copy(orig_message);
                $scope.contactForm.$setUntouched();
                $scope.successMessage = "Hello. We have successfully received your details. Our technical team will reach you shortly. Thankyou & Have a Great Day!!";
                $timeout(function() {
                    $scope.successMessage = false;
                }, 5000);
            }, function(error) {
                $scope.errorMessage = "An error occurred. Please try again!";
        });
    };
    $scope.fn_reset = function() {
        $scope.name = angular.copy(orig_name);
        $scope.email = angular.copy(orig_email);
        $scope.phone = angular.copy(orig_phone);
        $scope.category = angular.copy(orig_category);
        $scope.message = angular.copy(orig_message);
        $scope.contactForm.$setUntouched();
    };
}])

/* Creating QualificationListController */
.controller("QualificationListController", function($scope) {
    $scope.qualifications = [
        {qualif:"BE"},
        {qualif:"B.Technology"},
        {qualif:"MCA"},
        {qualif:"M.Tech"},
        {qualif:"MS"}
    ];
})

/* Course Gallery Controller */
.controller("CourseCardsController", ['$scope', '$http', '$rootScope', '$window', '$timeout', function($scope, $http, $rootScope, $window, $timeout) {
    $scope.ccTrendingCourses = [
        {ccTrendingCoursesURL:"big-data/scala", ccTrendingCoursesImage:"scala-thumbnail.jpg", ccTrendingCoursesAlt:"Scala-Training-Pro-elearning", ccTrendingCoursesTitle:"Scala", ccTrendingCoursesDesc:"Scala is a pure object-oriented language, in which conceptually every value is an object and every operation is a method-call."},
        {ccTrendingCoursesURL:"cloud-technologies/aws", ccTrendingCoursesImage:"aws.jpg", ccTrendingCoursesAlt:"Scala-Training-Pro-elearning", ccTrendingCoursesTitle:"AWS", ccTrendingCoursesDesc:"Amazon Web Services provides on-demand cloud computing platforms to individuals, companies and governments, on a paid subscription basis."},
        {ccTrendingCoursesURL:"big-data/spark", ccTrendingCoursesImage:"spark-thumbnail.jpg", ccTrendingCoursesAlt:"Spark-Training-Pro-elearning", ccTrendingCoursesTitle:"Spark", ccTrendingCoursesDesc:"Apache Spark is a general-purpose & lightning fast cluster computing system. It provides high-level API."},
        {ccTrendingCoursesURL:"information-technology/python", ccTrendingCoursesImage:"python.jpg", ccTrendingCoursesAlt:"Python-Training-Pro-elearning", ccTrendingCoursesTitle:"Python", ccTrendingCoursesDesc:"Python is an interpreted high-level programming language for general-purpose programming."},
        {ccTrendingCoursesURL:"big-data/kafka", ccTrendingCoursesImage:"kafka-thumbnail.jpg", ccTrendingCoursesAlt:"Kafka-Training-Pro-elearning", ccTrendingCoursesTitle:"Kafka", ccTrendingCoursesDesc:"Apache Kafka is a fast, scalable, durable, and fault-tolerant publish-subscribe messaging system."},
        {ccTrendingCoursesURL:"big-data/hadoop", ccTrendingCoursesImage:"hadoop.jpg", ccTrendingCoursesAlt:"Hadoop-Training-Pro-elearning", ccTrendingCoursesTitle:"Hadoop", ccTrendingCoursesDesc:"Hadoop is an open-source software framework provides massive storage for any kind of data."},
        {ccTrendingCoursesURL:"cloud-technologies/servicenow", ccTrendingCoursesImage:"servicenow.jpg", ccTrendingCoursesAlt: "ServiceNow-Pro-elearning", ccTrendingCoursesTitle:"ServiceNow", ccTrendingCoursesDesc:"ServiceNow's cloud platform streamlines how work gets done."},
        {ccTrendingCoursesURL:"big-data/hadoop-administrator", ccTrendingCoursesImage:"hadoop-admin.jpg", ccTrendingCoursesAlt:"Hadoop-Training-Pro-elearning", ccTrendingCoursesTitle:"Hadoop Administrator", ccTrendingCoursesDesc:"The role of a Hadoop Admin is mainly associated with tasks that involve installing and monitoring hadoop clusters."},
        {ccTrendingCoursesURL:"web-development/angular4", ccTrendingCoursesImage:"angular-4.jpg", ccTrendingCoursesAlt:"Angular-4-Training-Pro-elearning", ccTrendingCoursesTitle:"Angular", ccTrendingCoursesDesc:"Most popular client-side framework for website development from Google."},
        {ccTrendingCoursesURL:"web-development/ui-development", ccTrendingCoursesImage:"ui-development.jpg", ccTrendingCoursesAlt:"UI-Technologies-Training-Pro-elearning", ccTrendingCoursesTitle:"UI Development", ccTrendingCoursesDesc:"UI Development is the future of the web development with vast number of frameworks."},
    ];
    
    var coursePricesList = [
        {course:"java",IN:25000, others:400},
        {course:"python",IN:20000, others:350},
        {course:"dotnet",IN:15000, others:300}
    ];

    function getPrice(courseName) {
        var returnVal = 0;
        coursePricesList.forEach(obj => {
            if(obj.course == courseName) {
                if($window.sessionStorage.getItem('shortCountryCode') == "IN") {
                    returnVal = obj.IN;
                } else {
                    returnVal = obj.others;
                }
            }
        });
        return returnVal;
    };

    $scope.cc_info_tech = [
        {cc_info_tech_imageLink:"information-technology/java", cc_info_tech_image:"java.jpg", cc_info_tech_title:"Java", cc_info_tech_desc:"Java is a programming language and computing platform first released by Sun Microsystems.", cc_info_tech_readMoreLink:"information-technology/java", cc_info_tech_fees:getPrice("java")},
        {cc_info_tech_imageLink:"information-technology/dotnet", cc_info_tech_image:"dotnet.jpg", cc_info_tech_title:".Net", cc_info_tech_desc:"A developer platform for building all your apps. Build for web, mobile, gaming, IoT, desktop, cloud and microservices.", cc_info_tech_readMoreLink:"information-technology/dotnet", cc_info_tech_fees:getPrice("dotnet")},
        {cc_info_tech_imageLink:"information-technology/python", cc_info_tech_image:"python.jpg", cc_info_tech_title:"Python", cc_info_tech_desc:"Python is an interpreted high-level programming language for general-purpose programming.", cc_info_tech_readMoreLink:"information-technology/python", cc_info_tech_fees:getPrice("python")},
        {cc_info_tech_imageLink:"information-technology/embedded-systems", cc_info_tech_image:"embedded-systems.jpg", cc_info_tech_title:"Embedded Systems", cc_info_tech_desc:"An embedded system is a computer system with a dedicated function within a larger mechanical or electrical system, often with real-time computing constraints.", cc_info_tech_readMoreLink:"information-technology/embedded-systems", cc_info_tech_fees:"25000"},
        {cc_info_tech_imageLink:"information-technology/unix", cc_info_tech_image:"unix.jpg", cc_info_tech_title:"Unix", cc_info_tech_desc:"Unix is a family of multitasking, multiuser computer operating systems that derive from the original AT&T Unix.", cc_info_tech_readMoreLink:"information-technology/unix", cc_info_tech_fees:"25000"},
        {cc_info_tech_imageLink:"information-technology/linux", cc_info_tech_image:"linux.jpg", cc_info_tech_title:"Linux", cc_info_tech_desc:"Linux is a family of free and open-source software operating systems built around the Linux kernel.", cc_info_tech_readMoreLink:"information-technology/linux", cc_info_tech_fees:"25000"},
        {cc_info_tech_imageLink:"information-technology/build-and-deployment-engineer", cc_info_tech_image:"build-and-deployment-engineer.jpg", cc_info_tech_title:"Build and Deployment Engineer", cc_info_tech_desc:"Build and Deployment Engineer is responsible for owning the creation and implementation of a technology framework and lead the design, development, testing, and deployment of software projects.", cc_info_tech_readMoreLink:"information-technology/build-and-deployment-engineer", cc_info_tech_fees:"25000"},
        {cc_info_tech_imageLink:"information-technology/build-release-engineer", cc_info_tech_image:"build-release-engineer.jpg", cc_info_tech_title:"Build & Release Engineer", cc_info_tech_desc:"Release engineering, frequently abbreviated as RE or as the clipped compound Releng, is a sub-discipline in software engineering concerned with the compilation, assembly, and delivery of source code into finished products or other software components.", cc_info_tech_readMoreLink:"information-technology/build-release-engineer", cc_info_tech_fees:"25000"},
        {cc_info_tech_imageLink:"information-technology/ruby", cc_info_tech_image:"ruby.jpg", cc_info_tech_title:"Ruby", cc_info_tech_desc:"Ruby is a dynamic, interpreted, reflective, object-oriented, general-purpose programming language.", cc_info_tech_readMoreLink:"information-technology/ruby", cc_info_tech_fees:"25000"},
        {cc_info_tech_imageLink:"information-technology/sharepoint", cc_info_tech_image:"sharepoint.jpg", cc_info_tech_title:"SharePoint", cc_info_tech_desc:"SharePoint is a web-based collaborative platform that integrates with Microsoft Office.", cc_info_tech_readMoreLink:"information-technology/sharepoint", cc_info_tech_fees:"25000"},
        {cc_info_tech_imageLink:"information-technology/itil-v3-foundation", cc_info_tech_image:"itil-v3-foundation.jpg", cc_info_tech_title:"ITIL V3 Foundation", cc_info_tech_desc:"ITIL Foundation is an entry-level ITIL certification for IT professionals.", cc_info_tech_readMoreLink:"information-technology/itil-v3-foundation", cc_info_tech_fees:"25000"},
    ];
    
    $scope.cc_cloud_tech = [
        {cc_cloud_tech_imageLink:"cloud-technologies/salesforce-developer", cc_cloud_tech_image:"salesforce-developer.jpg", cc_cloud_tech_title:"Salesforce Developer", cc_cloud_tech_desc:"Salesforce is the number one destination for learning to build mobile & enterprise applications in the cloud.", cc_cloud_tech_readMoreLink:"cloud-technologies/salesforce-developer", cc_cloud_tech_price:"25000"},
        {cc_cloud_tech_imageLink:"cloud-technologies/salesforce-administrator", cc_cloud_tech_image:"salesforce-administrator.jpg", cc_cloud_tech_title:"Salesforce Administrator", cc_cloud_tech_desc:"A Salesforce Administrator is a business leader, deeply knowledgeable about how their company operates, intertwined in making all departments successful through process automations, and thus, integral to running a smooth & lean business.", cc_cloud_tech_readMoreLink:"cloud-technologies/salesforce-administrator", cc_cloud_tech_price:"25000"},
        {cc_cloud_tech_imageLink:"cloud-technologies/azure", cc_cloud_tech_image:"azure.jpg", cc_cloud_tech_title:"Azure", cc_cloud_tech_desc:"Microsoft Azure is an open, flexible, enterprise-grade cloud computing platform.", cc_cloud_tech_readMoreLink:"cloud-technologies/azure", cc_cloud_tech_price:"25000"},
        {cc_cloud_tech_imageLink:"cloud-technologies/aws", cc_cloud_tech_image:"aws.jpg", cc_cloud_tech_title:"AWS", cc_cloud_tech_desc:"Amazon Web Services provides on-demand cloud computing platforms to individuals, companies and governments, on a paid subscription basis.", cc_cloud_tech_readMoreLink:"cloud-technologies/aws", cc_cloud_tech_price:"25000"},
        {cc_cloud_tech_imageLink:"cloud-technologies/cloudera", cc_cloud_tech_image:"cloudera.jpg", cc_cloud_tech_title:"Cloudera", cc_cloud_tech_desc:"Cloudera offers all the required softwares in one package(CDH) for Apache Hadoop software which is used for big data analysis.", cc_cloud_tech_readMoreLink:"cloud-technologies/cloudera", cc_cloud_tech_price:"25000"},
        {cc_cloud_tech_imageLink:"cloud-technologies/servicenow", cc_cloud_tech_image:"servicenow.jpg", cc_cloud_tech_title:"ServiceNow", cc_cloud_tech_desc:"ServiceNow's cloud platform streamlines how work gets done.", cc_cloud_tech_readMoreLink:"cloud-technologies/servicenow", cc_cloud_tech_price:"25000"},
        {cc_cloud_tech_imageLink:"cloud-technologies/openstack", cc_cloud_tech_image:"openstack.jpg", cc_cloud_tech_title:"OpenStack", cc_cloud_tech_desc:"OpenStack is a free and open-source software platform for cloud computing, mostly deployed as infrastructure-as-a-service, whereby virtual servers and other resources are made available to customers.", cc_cloud_tech_readMoreLink:"cloud-technologies/openstack", cc_cloud_tech_price:"25000"},
    ];
    
    $scope.cc_erp = [
        {cc_erp_imageLink:"erp/people-soft-hrms", cc_erp_image:"people-soft-hrms.jpg", cc_erp_title:"PeopleSoft HRMS Functional", cc_erp_desc:"Peoplesoft HRMS manages the human resource covering many other HR aspects from application to retirement.", cc_erp_readMoreLink:"erp/people-soft-hrms", cc_erp_price:"25000"},
        {cc_erp_imageLink:"erp/salesforce-crm", cc_erp_image:"salesforce-crm.jpg", cc_erp_title:"Salesforce CRM", cc_erp_desc:"Salesforce is a (CRM) platform which provides cloud-based applications for sales, service, marketing, and more.", cc_erp_readMoreLink:"erp/salesforce-crm", cc_erp_price:"25000"},
        {cc_erp_imageLink:"erp/oracle-apps", cc_erp_image:"oracle-apps.jpg", cc_erp_title:"Oracle Apps", cc_erp_desc:"Oracle Applications is a software that helps to runs enterprise businesses such as Accounting, Humans Resource, or Financials.", cc_erp_readMoreLink:"erp/oracle-apps", cc_erp_price:"25000"},
        {cc_erp_imageLink:"erp/sap-bi", cc_erp_image:"sap-bi.jpg", cc_erp_title:"SAP BI", cc_erp_desc:"Business Intelligence is a SAP product which majorly focuses on providing its customers/organizations with a user friendly and very useful form of representing data that could be helpful for analyses purpose and making business decisions.", cc_erp_readMoreLink:"erp/sap-bi", cc_erp_price:"25000"},
        {cc_erp_imageLink:"erp/sap-bo", cc_erp_image:"sap-bo.jpg", cc_erp_title:"SAP BO", cc_erp_desc:"SAP BO is a reporting and analytics business intelligence (BI) platform aimed at business users.", cc_erp_readMoreLink:"erp/sap-bo", cc_erp_price:"25000"},
        {cc_erp_imageLink:"erp/sap-crm", cc_erp_image:"sap-crm.jpg", cc_erp_title:"SAP CRM", cc_erp_desc:"SAP CRM targets business software requirements of midsize and large organizations in all industries and sectors.", cc_erp_readMoreLink:"erp/sap-crm", cc_erp_price:"25000"},
        {cc_erp_imageLink:"erp/sap-fico", cc_erp_image:"sap-fico.jpg", cc_erp_title:"SAP FICO", cc_erp_desc:"SAP Finance and Controlling is the best design module for internal as well as external accounting processes.", cc_erp_readMoreLink:"erp/sap-fico", cc_erp_price:"25000"},
        {cc_erp_imageLink:"erp/sap-hana", cc_erp_image:"sap-hana.jpg", cc_erp_title:"SAP HANA", cc_erp_desc:"Using SAP HANA run a business data platform for the intelligent enterprise to deliver data-driven insights throughout your business and predict real-time outcomes.", cc_erp_readMoreLink:"erp/sap-hana", cc_erp_price:"25000"},
        {cc_erp_imageLink:"erp/sap-mm", cc_erp_image:"sap-mm.jpg", cc_erp_title:"SAP MM", cc_erp_desc:"Material Management handles the procurement to payment process, from inventory through final invoice receipt and verification.", cc_erp_readMoreLink:"erp/sap-mm", cc_erp_price:"25000"},
        {cc_erp_imageLink:"erp/sas", cc_erp_image:"sas.jpg", cc_erp_title:"SAS", cc_erp_desc:"SAS is a software suite developed by SAS Institute for advanced analytics, multivariate analyses, business intelligence, data management, and predictive analytics.", cc_erp_readMoreLink:"erp/sas", cc_erp_price:"25000"},
        {cc_erp_imageLink:"erp/sas-clinical-research", cc_erp_image:"sas-clinical-research.jpg", cc_erp_title:"SAS Clinical Research", cc_erp_desc:"SAS Clinical Research validates a candidates' ability to apply SAS programming skills to clinical trials data.", cc_erp_readMoreLink:"erp/sas-clinical-research", cc_erp_price:"25000"},
        {cc_erp_imageLink:"erp/sas-bi", cc_erp_image:"sas-bi.jpg", cc_erp_title:"SAS BI", cc_erp_desc:"SAS Business Intelligence software provides the most comprehensive, integrated and easy-to-use reporting and analytics features. In your office or on the go.", cc_erp_readMoreLink:"erp/sas-bi", cc_erp_price:"25000"},
    ];
    
    $scope.cc_buss_mgmt = [
        {cc_buss_mgmt_imageLink:"business-management/jbpm", cc_buss_mgmt_image:"jbpm.jpg", cc_buss_mgmt_title:"jBPM", cc_buss_mgmt_desc:"jBPM is an open-source workflow engine written in Java that is a flexible Business Process Management Suite.", cc_buss_mgmt_readMoreLink:"business-management/jbpm", cc_buss_mgmt_price:"25000"},
        {cc_buss_mgmt_imageLink:"business-management/pega-6.2", cc_buss_mgmt_image:"pega-6.2.jpg", cc_buss_mgmt_title:"Pega 6.2", cc_buss_mgmt_desc:"Explore business solutions from the leader in software for customer engagement and digital process automation, built on the unified Pega Platform.", cc_buss_mgmt_readMoreLink:"business-management/pega-6.2", cc_buss_mgmt_price:"25000"},
        {cc_buss_mgmt_imageLink:"business-management/pega-7", cc_buss_mgmt_image:"pega-7.jpg", cc_buss_mgmt_title:"Pega 7", cc_buss_mgmt_desc:"The latest Pega 7 will give you more features and flexibility in exploring your business solutions.", cc_buss_mgmt_readMoreLink:"business-management/pega-7", cc_buss_mgmt_price:"25000"},
        {cc_buss_mgmt_imageLink:"business-management/business-analyst", cc_buss_mgmt_image:"business-analyst.jpg", cc_buss_mgmt_title:"Business Analyst", cc_buss_mgmt_desc:"A business analyst (BA) is someone who analyzes an organization or business domain (real or hypothetical) and documents its business or processes or systems, assessing the business model or its integration with technology.", cc_buss_mgmt_readMoreLink:"business-management/business-analyst", cc_buss_mgmt_price:"25000"},
        {cc_buss_mgmt_imageLink:"business-management/ba-bfsi", cc_buss_mgmt_image:"ba-bfsi.jpg", cc_buss_mgmt_title:"BA - BFSI", cc_buss_mgmt_desc:"The BFSI Business Analyst communicates with the client and ensures that the business requirements are met.", cc_buss_mgmt_readMoreLink:"business-management/ba-bfsi", cc_buss_mgmt_price:"25000"},
        {cc_buss_mgmt_imageLink:"business-management/ba-health-care", cc_buss_mgmt_image:"ba-health-care.jpg", cc_buss_mgmt_title:"BA - Health Care", cc_buss_mgmt_desc:"Business Analysis with Healthcare domain bolster the efficiency and profit of medical facilities by evaluating their financial activity, data management and services.", cc_buss_mgmt_readMoreLink:"business-management/ba-health-care", cc_buss_mgmt_price:"25000"},
        {cc_buss_mgmt_imageLink:"business-management/ba-finance", cc_buss_mgmt_image:"ba-finance.jpg", cc_buss_mgmt_title:"BA Finance", cc_buss_mgmt_desc:"BA - Finance programme has a strong focus on employability and will equip you with the knowledge and skills needed to excel in business and finance.", cc_buss_mgmt_readMoreLink:"business-management/ba-finance", cc_buss_mgmt_price:"25000"},
        {cc_buss_mgmt_imageLink:"business-management/quickbooks", cc_buss_mgmt_image:"quickbooks.jpg", cc_buss_mgmt_title:"QuickBooks", cc_buss_mgmt_desc:"QuickBooks is an accounting software package developed and marketed by Intuit.", cc_buss_mgmt_readMoreLink:"business-management/quickbooks", cc_buss_mgmt_price:"25000"},
        {cc_buss_mgmt_imageLink:"business-management/technical-manager", cc_buss_mgmt_image:"technical-manager.jpg", cc_buss_mgmt_title:"Technical Manager", cc_buss_mgmt_desc:"The technical manager is a versatile position that requires sufficient managerial skills as well as sufficient technical skills.", cc_buss_mgmt_readMoreLink:"business-management/technical-manager", cc_buss_mgmt_price:"25000"},
    ];
    
    $scope.cc_oracle = [
        {cc_oracle_imageLink:"oracle/oracle-adf", cc_oracle_image:"oracle-adf.jpg", cc_oracle_title:"Oracle ADF", cc_oracle_desc:"Oracle ADF is an end-to-end Java EE framework that simplifies application development by providing out-of-the-box infrastructure services and a visual and declarative development experience.", cc_oracle_readMoreLink:"oracle/oracle-adf", cc_oracle_price:"25000"},
        {cc_oracle_imageLink:"oracle/oracle-dba", cc_oracle_image:"oracle-dba.jpg", cc_oracle_title:"Oracle DBA", cc_oracle_desc:"An Oracle DBA is a senior-level manager who has lots of responsibility, managing the mission-critical data for the whole company.", cc_oracle_readMoreLink:"oracle/oracle-dba", cc_oracle_price:"25000"},
        {cc_oracle_imageLink:"oracle/oracle-developer", cc_oracle_image:"oracle-developer.jpg", cc_oracle_title:"Oracle Developer", cc_oracle_desc:"Oracle SQL Developer is a free, integrated development environment that simplifies the development and management of Oracle Database in both traditional and Cloud deployments.", cc_oracle_readMoreLink:"oracle/oracle-developer", cc_oracle_price:"25000"},
        {cc_oracle_imageLink:"oracle/oracle-ebs", cc_oracle_image:"oracle-ebs.jpg", cc_oracle_title:"Oracle EBS", cc_oracle_desc:"The Oracle E-Business Suite Supply Chain Management family of applications integrates and automates all key supply chain processes, from design, planning and procurement to manufacturing and fulfillment, providing a complete solution set to enable companies to power information-driven value chains.", cc_oracle_readMoreLink:"oracle/oracle-ebs", cc_oracle_price:"25000"},
        {cc_oracle_imageLink:"oracle/oracle-golden-gate", cc_oracle_image:"oracle-golden-gate.jpg", cc_oracle_title:"Oracle Golden Gate", cc_oracle_desc:"Oracle GoldenGate 12c offers a real-time, log-based change data capture (CDC) and replication software. platform to meet the needs of today's transaction-driven applications.", cc_oracle_readMoreLink:"oracle/oracle-golden-gate", cc_oracle_price:"25000"},
        {cc_oracle_imageLink:"oracle/oracle-soa", cc_oracle_image:"oracle-soa.jpg", cc_oracle_title:"Oracle SOA", cc_oracle_desc:"Oracle SOA Suite provides a comprehensive suite of components for developing, securing, and monitoring service-oriented architecture (SOA).", cc_oracle_readMoreLink:"oracle/oracle-soa", cc_oracle_price:"25000"},
        {cc_oracle_imageLink:"oracle/weblogic", cc_oracle_image:"weblogic.jpg", cc_oracle_title:"WebLogic", cc_oracle_desc:"Oracle WebLogic Server is a Java EE application server currently developed by Oracle Corporation.", cc_oracle_readMoreLink:"oracle/weblogic", cc_oracle_price:"25000"},
        {cc_oracle_imageLink:"oracle/siebel-open-ui", cc_oracle_image:"siebel-open-ui.jpg", cc_oracle_title:"Siebel Open UI", cc_oracle_desc:"Siebel Open UI is an extension of the user interface (UI) for the Siebel application, utilising open web technologies (HTML, CSS, JavaScript, JQuery).", cc_oracle_readMoreLink:"oracle/siebel-open-ui", cc_oracle_price:"25000"},
        {cc_oracle_imageLink:"oracle/odi-12c", cc_oracle_image:"odi-12c.jpg", cc_oracle_title:"ODI 12C", cc_oracle_desc:"Oracle Data Integrator is a comprehensive data integration platform that covers all data integration requirements: from high-volume, high-performance batch loads, to event-driven, trickle-feed integration processes, to SOA-enabled data services.", cc_oracle_readMoreLink:"oracle/odi-12c", cc_oracle_price:"25000"},
    ];
    
}])

/* Course Suggestion Controller */
.controller("courseSuggestionController", ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
	var orig_name = $scope.name;
    var orig_email = $scope.email;
    var orig_phone = $scope.phone;
    var orig_courseName = $scope.courseName;
    var orig_message = $scope.message;
    $scope.dt = Date();
    $scope.fn_courseSuggestion = function() {
        $http.post(
            "./php/course-suggestion.php",
                {'full_name': $scope.name, 'email': $scope.email, 'phone': $scope.phone, 'course_name': $scope.courseName, 'message': $scope.message, 'date_time': $scope.dt}
            ).then(function(data) {
                $scope.name = angular.copy(orig_name);
                $scope.email = angular.copy(orig_email);
                $scope.phone = angular.copy(orig_phone);
                $scope.courseName = angular.copy(orig_courseName);
                $scope.message = angular.copy(orig_message);
                $scope.courseSuggestionForm.$setUntouched();
                $scope.successMessage = "Hoila! Your request for a new course is successfully registered with us. Your team will contact you within 24 hours. Have a nice day!!";
                $timeout(function() {
                    $scope.successMessage = false;
                }, 5000);
            }, function(error) {
                $scope.errorMessage = "An error occurred. Please try again!";
        });
    };
    $scope.fn_reset = function() {
        $scope.name = angular.copy(orig_name);
        $scope.email = angular.copy(orig_email);
        $scope.phone = angular.copy(orig_phone);
        $scope.courseName = angular.copy(orig_courseName);
        $scope.message = angular.copy(orig_message);
        $scope.courseSuggestionForm.$setUntouched();
    };
}])

/* Free Demo Controller */
.controller("freeDemoController", ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
	var orig_name = $scope.name;
    var orig_email = $scope.email;
    var orig_phone = $scope.phone;
    var orig_courseName = $scope.courseName;
    var orig_message = $scope.message;
    $scope.dt = Date();
    $scope.fn_freeDemo = function() {
        $http.post(
            "./php/free-demo.php",
                {'full_name': $scope.name, 'email': $scope.email, 'phone': $scope.phone, 'course_name': $scope.courseName, 'message': $scope.message, 'date_time': $scope.dt}
            ).then(function(data) {
                $scope.name = angular.copy(orig_name);
                $scope.email = angular.copy(orig_email);
                $scope.phone = angular.copy(orig_phone);
                $scope.courseName = angular.copy(orig_courseName);
                $scope.message = angular.copy(orig_message);
                $scope.freeDemoForm.$setUntouched();
                $scope.successMessage = "Hoila! Your request for a free demo is successfully registered with us. Your team will contact you within 24 hours. Have a nice day!!";
                $timeout(function() {
                    $scope.successMessage = false;
                }, 5000);
            }, function(error) {
                $scope.errorMessage = "An error occurred. Please try again!";
        });
    };
    $scope.fn_reset = function() {
        $scope.name = angular.copy(orig_name);
        $scope.email = angular.copy(orig_email);
        $scope.phone = angular.copy(orig_phone);
        $scope.courseName = angular.copy(orig_courseName);
        $scope.message = angular.copy(orig_message);
        $scope.freeDemoForm.$setUntouched();
    };
}])

/* Admin Login Controller */
/*
.controller('adminLoginCtrl', function Controller(ModalService) {
    var vm = this;
    vm.openModal = openModal;
    function openModal(id){
        ModalService.Open(id);
    }
})
*/

/* Search Courses Controller */
// .controller("searchCoursesController", ['$scope', '$http', '$location', function($scope, $http, $location) {
//     $scope.search = function() {
        
//         $location.path("/search-results");
        
//         if($scope.keywords == '') {
//             $scope.res = "Please enter a keyword to search";
//         } else {
        
//         $http({
//             url: "./php/search.php",
//             method: "POST",
//             data: {"data": $scope.keywords},
//             headers: {
//                 "Content-Type":"application/json"
//             }
            
//         }).then(function(response) {
//             $scope.results = response.data;
//             $scope.keywords = "";
//         }, function(error) {
//             $scope.errMsg = error.data || "Request failed!";
//         });
            
//         }
//     };
// }])

;
}(angular));