(function() {
"use strict";

angular.module('ProELearning.controllers', [])

/* Breadcrumbs Controller */
.controller('mainCtrl', ['$scope', 'breadcrumbs', function($scope, breadcrumbs) {
    $scope.breadcrumbs = breadcrumbs;
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
        {c_image:"e-education-book-tablet.jpg", c_imgAlt:"Learn-New-Skills-Online-Pro-eLearning", c_h1:"Flexible Timings &middot; Choice of Learning &middot; 24x7 Support", c_h4:"Never Miss The Chance", c_para:""},
        {c_image:"be-on-top-of-competition.jpg", c_imgAlt:"Be-on-Top-of-Competition-Pro-eLearning", c_h1:"Build Skills &middot; Work Smarter", c_h4:"Take Your Skills To The Next Level", c_para:""},
        {c_image:"back-to-e-school.jpg", c_imgAlt:"Back-To-E-School-Pro-eLearning", c_h1:"Prepare Yourself For A Never Ending Race", c_h4:"You Are The Mentor, The Instructor and The Path Seeker of Your Career", c_para:""},
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
        {t_image:"male-default-256x256.png", t_desc:"I am very happy to work with Pro-elearning. Thank you so much for providing me this opportunity. Working with Pro-elearning is a great experience and I am happy to share my knowledge which helps in boosting my confidence. I hope we will continue this relationship forever.", t_name:"Sairam", t_company:"", t_role:"Trainer"},
        {t_image:"male-default-256x256.png", t_desc:"Online training makes learning eazy from anywhere. I personally feel online training is very flexible that I can provide training to the candidate without affecting my full-time job. But the main thing I felt the candidate should not lose interest on the training.", t_name:"Sudeep", t_company:"df3d", t_role:"Trainer"},
        {t_image:"female-default-256x256.png", t_desc:"I have taken on-site training with Pro-elearning as a Java Full Stack. Training is provided by very efficient trainers who have 10+ years of real-time experience in the technology, that helped me a lot in understanding the subject. Keep it up Pro-elearning.", t_name:"Angela Bensam", t_role:"Student"},
    ];
}])

/* Creating ScrollToTopController */
.controller("ScrollToTopController", ['$scope', function($scope) {
    $scope.scrollToTop = function() {
        $('html, body').animate({
            scrollTop: 0
        }, '2000', "swing");
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
    $controller('professionListController', {$scope:$scope})

    var orig_name = $scope.sname;
    var orig_email = $scope.email;
    var orig_phone = $scope.phone;
    var orig_gender = $scope.gender;
    var orig_country = $scope.country;
    var orig_state = $scope.state;
    var orig_qualification = $scope.qualification;
    var orig_profession = $scope.profession;
    var orig_course = $scope.course;
    var orig_message = $scope.message;
    $scope.dt = Date();
    
    $scope.fn_insertStudent = function() {
        $http.post(
            "./php/student_reg.php",
            {'full_name': $scope.sname, 'email': $scope.email, 'phone': $scope.phone, 'gender': $scope.gender, 'country': $scope.country, 'state': $scope.state, 'qualification': $scope.qualification, 'profession': $scope.profession, 'course': $scope.course, 'message': $scope.message, 'date_time': $scope.dt}
        ).then(function(data){
                $scope.sname = angular.copy(orig_name);
                $scope.email = angular.copy(orig_email);
                $scope.phone = angular.copy(orig_phone);
                $scope.gender = angular.copy(orig_gender);
                $scope.country = angular.copy(orig_country);
                $scope.state = angular.copy(orig_state);
                $scope.qualification = angular.copy(orig_qualification);
                $scope.profession = angular.copy(orig_profession);
                $scope.course = angular.copy(orig_course);
                $scope.message = angular.copy(orig_message);
                $scope.studRegForm.$setUntouched();
                $("#successMessageModalStud").modal("show");
                $scope.successMessage = "<b>Thankyou!</b><br>We have successfully received your details. Our technical team will reach you shortly. Have a Nice Day!!";
                $timeout(function() {
                    $("#successMessageModalStud").modal("hide");
                }, 5000);
            }, function(error) {
                $("#errorMessageModalStud").modal("show");
                $scope.errorMessage = "An error occurred. Please try again!";
        });
    };

    /*-- Reset all form fields and form to its initial state --*/
    $scope.fn_reset = function() {
        $scope.sname = angular.copy(orig_name);
        $scope.email = angular.copy(orig_email);
        $scope.phone = angular.copy(orig_phone);
        $scope.gender = angular.copy(orig_gender);
        $scope.country = angular.copy(orig_country);
        $scope.state = angular.copy(orig_state);
        $scope.qualification = angular.copy(orig_qualification);
        $scope.profession = angular.copy(orig_profession);
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
    var orig_currentCompany = $scope.currentCompany;
    var orig_workExp = $scope.workExp;
    var orig_trainingExp = $scope.trainingExp;
    var orig_techExp = $scope.techExp;
    var orig_courseName = $scope.courseName;
    var orig_resume = $scope.files;
    var orig_message = $scope.message;
    $scope.dt = Date();
    
    /*-- File Upload --*/
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
        formData.append('current_company',$scope.currentCompany);
        formData.append('work_exp',$scope.workExp);
        formData.append('training_exp',$scope.trainingExp);
        formData.append('technology_exp',$scope.techExp);
        formData.append('course_name',$scope.courseName);
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
            $scope.currentCompany = angular.copy(orig_currentCompany);
            $scope.workExp = angular.copy(orig_workExp);
            $scope.trainingExp = angular.copy(orig_trainingExp);
            $scope.techExp = angular.copy(orig_techExp);
            $scope.courseName = angular.copy(orig_courseName);
            $scope.resume = angular.copy(orig_resume);
            $scope.message = angular.copy(orig_message);
            $scope.trainerRegForm.$setUntouched();
            $("#successMessageModalTrainer").modal("show");
            $scope.successMessage = "<b>Thankyou!</b><br>We have successfully received your details. Our technical team will reach you shortly. Have a Nice Day!!";
            $timeout(function() {
                $("#successMessageModalTrainer").modal("hide");
            }, 5000);
        }, function(error) {
            $("#errorMessageModalTrainer").modal("show");
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
        $scope.currentCompany = angular.copy(orig_currentCompany);
        $scope.workExp = angular.copy(orig_workExp);
        $scope.trainingExp = angular.copy(orig_trainingExp);
        $scope.techExp = angular.copy(orig_techExp);
        $scope.courseName = angular.copy(orig_courseName);
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
                $("#successMessageModal").modal("show");
                $scope.successMessage = "<b>Thankyou!</b><br>We have successfully received your message. Our technical team will reach you shortly. Have a Nice Day!!";
                $timeout(function() {
                    $("#successMessageModal").modal("hide");
                }, 5000);
            }, function(error) {
                $("#errorMessageModal").modal("show");
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
        { qualification: "B.A" },
        { qualification: "B.Arch" },
        { qualification: "BCA" },
        { qualification: "B.B.A /  B.M.S" },
        { qualification: "B.Com" },
        { qualification: "B.Ed" },
        { qualification: "BDS" },
        { qualification: "BHM" },
        { qualification: "B.Pharma" },
        { qualification: "B.Sc" },
        { qualification: "B.Tech / B.E." },
        { qualification: "LLB" },
        { qualification: "MBBS" },
        { qualification: "Diploma" },
        { qualification: "BVSC" },
        { qualification: "BAMS" },
        { qualification: "BHMS" },
        { qualification: "B.El.Ed" },
        { qualification: "B.P.Ed" },
        { qualification: "B.Des." },
        { qualification: "BFA" },
        { qualification: "B.U.M.S" },
        { qualification: "CA" },
        { qualification: "CS" },
        { qualification: "ICWA (CMA)" },
        { qualification: "Integrated PG" },
        { qualification: "LLM" },
        { qualification: "M.A" },
        { qualification: "M.Arch" },
        { qualification: "M.Com" },
        { qualification: "M.Ed" },
        { qualification: "M.Pharma" },
        { qualification: "MS / M.Sc(Science)" },
        { qualification: "M.Tech" },
        { qualification: "MBA / PGDM" },
        { qualification: "MCA" },
        { qualification: "Medical-MS / MD" },
        { qualification: "PG Diploma" },
        { qualification: "MVSC" },
        { qualification: "MCM" },
        { qualification: "MDS" },
        { qualification: "MFA" },
        { qualification: "M.Des." },
        { qualification: "DM" },
        { qualification: "M.Ch" },
        { qualification: "Other" },
    ];
})

/* Creating professionListController */
.controller("professionListController", function($scope) {
    $scope.professions = [
        {profession: "Fresher"},
        {profession: "Working Professional"},
    ];
})

/* Course Gallery Controller */
.controller("CourseCardsController", ['$scope', '$http', '$rootScope', '$window', '$timeout', function($scope, $http, $rootScope, $window, $timeout) {
    $scope.coursePricesList = [];

    $http.get("http://ipinfo.io/json")
    .then(function(response) {
        console.log("in controller success response");
      
        $rootScope.shortCountryCode = response.data.country;
        console.log($rootScope.shortCountryCode);
        
        $window.sessionStorage.setItem('shortCountryCode', response.data.country);
        $http.get("./json/fees.json")
        .then(function(response) {
            $scope.coursePricesList = response.data;
            $scope.ccTrendingCourses = [
                {ccTrendingCoursesURL:"rpa/iot", ccTrendingCoursesImage:"iot.jpg", ccTrendingCoursesAlt: "IoT-Training-Pro-elearning", ccTrendingCoursesTitle:"IoT", ccTrendingCoursesDesc:"The internet of things, or IoT, is a system of interrelated computing devices, mechanical and digital machines, objects, animals or people that are provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.", ccTrendingCoursePrice: getPrice("iot")},
                {ccTrendingCoursesURL:"big-data/scala", ccTrendingCoursesImage:"scala-thumbnail.jpg", ccTrendingCoursesAlt:"Scala-Training-Pro-elearning", ccTrendingCoursesTitle:"Scala", ccTrendingCoursesDesc:"Scala is a pure object-oriented language, in which conceptually every value is an object and every operation is a method-call.", ccTrendingCoursePrice: getPrice("scala")},
                {ccTrendingCoursesURL:"rpa/artificial-intelligence", ccTrendingCoursesImage:"artificial-intelligence.jpg", ccTrendingCoursesAlt: "Artificial-Intelligence-Training-Pro-elearning", ccTrendingCoursesTitle:"Artificial Intelligence", ccTrendingCoursesDesc:"Artificial intelligence (AI) is an area of computer science that emphasizes the creation of intelligentmachines that work and react like humans. Some of the activities computers with artificial intelligenceare designed for include: Speech recognition. Learning.", ccTrendingCoursePrice: getPrice("ai")},
                {ccTrendingCoursesURL:"cloud-technologies/aws", ccTrendingCoursesImage:"aws.jpg", ccTrendingCoursesAlt:"Scala-Training-Pro-elearning", ccTrendingCoursesTitle:"AWS", ccTrendingCoursesDesc:"Amazon Web Services provides on-demand cloud computing platforms to individuals, companies and governments, on a paid subscription basis.", ccTrendingCoursePrice: getPrice("aws")},
                {ccTrendingCoursesURL:"big-data/spark", ccTrendingCoursesImage:"spark-thumbnail.jpg", ccTrendingCoursesAlt:"Spark-Training-Pro-elearning", ccTrendingCoursesTitle:"Spark", ccTrendingCoursesDesc:"Apache Spark is a general-purpose & lightning fast cluster computing system. It provides high-level API.", ccTrendingCoursePrice: getPrice("spark")},
                {ccTrendingCoursesURL:"rpa/machine-learning", ccTrendingCoursesImage:"machine-learning.jpg", ccTrendingCoursesAlt: "Machine-Learning-Training-Pro-elearning", ccTrendingCoursesTitle:"Machine Learning", ccTrendingCoursesDesc:"Machine learning is a field of computer science that uses statistical techniques to give computer systems the ability to 'learn' with data, without being explicitly programmed.", ccTrendingCoursePrice: getPrice("machine-learning")},
                {ccTrendingCoursesURL:"information-technology/python", ccTrendingCoursesImage:"python.jpg", ccTrendingCoursesAlt:"Python-Training-Pro-elearning", ccTrendingCoursesTitle:"Python", ccTrendingCoursesDesc:"Python is an interpreted high-level programming language for general-purpose programming.", ccTrendingCoursePrice: getPrice("python")},
                {ccTrendingCoursesURL:"big-data/kafka", ccTrendingCoursesImage:"kafka-thumbnail.jpg", ccTrendingCoursesAlt:"Kafka-Training-Pro-elearning", ccTrendingCoursesTitle:"Kafka", ccTrendingCoursesDesc:"Apache Kafka is a fast, scalable, durable, and fault-tolerant publish-subscribe messaging system.", ccTrendingCoursePrice: getPrice("kafka")},
                {ccTrendingCoursesURL:"rpa/uipath", ccTrendingCoursesImage:"uipath.jpg", ccTrendingCoursesAlt: "UiPath-Training-Pro-elearning", ccTrendingCoursesTitle:"UiPath", ccTrendingCoursesDesc:"UiPath is an Enterprise Robotic Process Automation (RPA) Software designed to empower companies to automate repetitive, manual, rules-based business processes.", ccTrendingCoursePrice: getPrice("uipath")},
                {ccTrendingCoursesURL:"big-data/hadoop", ccTrendingCoursesImage:"hadoop.jpg", ccTrendingCoursesAlt:"Hadoop-Training-Pro-elearning", ccTrendingCoursesTitle:"Hadoop", ccTrendingCoursesDesc:"Hadoop is an open-source software framework provides massive storage for any kind of data.", ccTrendingCoursePrice: getPrice("hadoop")},
                {ccTrendingCoursesURL:"cloud-technologies/servicenow", ccTrendingCoursesImage:"servicenow.jpg", ccTrendingCoursesAlt: "ServiceNow-Pro-elearning", ccTrendingCoursesTitle:"ServiceNow", ccTrendingCoursesDesc:"ServiceNow's cloud platform streamlines how work gets done.", ccTrendingCoursePrice: getPrice("servicenow")},
                {ccTrendingCoursesURL:"big-data/hadoop-administrator", ccTrendingCoursesImage:"hadoop-admin.jpg", ccTrendingCoursesAlt:"Hadoop-Training-Pro-elearning", ccTrendingCoursesTitle:"Hadoop Administrator", ccTrendingCoursesDesc:"The role of a Hadoop Admin is mainly associated with tasks that involve installing and monitoring hadoop clusters.", ccTrendingCoursePrice: getPrice("hadoop-administrator")},
                {ccTrendingCoursesURL:"rpa/automation-anywhere", ccTrendingCoursesImage:"automation-anywhere.jpg", ccTrendingCoursesAlt: "Automation-Anywhere-Training-Pro-elearning", ccTrendingCoursesTitle:"Automation Anywhere", ccTrendingCoursesDesc:"Automation Anywhere Enterprise is robotic process automation software designed to automate any process end-to-end with cognitive software robots.", ccTrendingCoursePrice: getPrice("aa")},
                {ccTrendingCoursesURL:"web-development/ui-development", ccTrendingCoursesImage:"ui-development.jpg", ccTrendingCoursesAlt:"UI-Technologies-Training-Pro-elearning", ccTrendingCoursesTitle:"UI Development", ccTrendingCoursesDesc:"UI Development is the future of the web development with vast number of frameworks.", ccTrendingCoursePrice: getPrice("ui-development")},
                {ccTrendingCoursesURL:"rpa/blueprism", ccTrendingCoursesImage:"blueprism.jpg", ccTrendingCoursesAlt:"Blue-Prism-Training-Pro-elearning", ccTrendingCoursesTitle:"Blueprism", ccTrendingCoursesDesc:"Blue Prism Doing more with software is the essence of digital transformation. An important part of this transformation is automating business processes.", ccTrendingCoursePrice: getPrice("blueprism")},
                {ccTrendingCoursesURL:"web-development/angular4", ccTrendingCoursesImage:"angular-4.jpg", ccTrendingCoursesAlt:"Angular-4-Training-Pro-elearning", ccTrendingCoursesTitle:"Angular", ccTrendingCoursesDesc:"Most popular client-side framework for website development from Google.", ccTrendingCoursePrice: getPrice("angular4")},
            ];

            $scope.ccBigData = [
                {ccBigDataURL:"big-data/kafka", ccBigDataImage:"kafka-thumbnail.jpg", ccBigDataAlt:"Kafka-Training-Pro-elearning", ccBigDataTitle:"Kafka", ccBigDataDesc:"Apache Kafka is a fast, scalable, durable, and fault-tolerant publish-subscribe messaging system.", ccBigDataDuration:"45", ccBigDataPrice: getPrice("kafka")},
                {ccBigDataURL:"big-data/scala", ccBigDataImage:"scala-thumbnail.jpg", ccBigDataAlt:"Scala-Training-Pro-elearning", ccBigDataTitle:"Scala", ccBigDataDesc:"Scala is a pure object-oriented language, in which conceptually every value is an object and every operation is a method-call.", ccBigDataDuration:"45", ccBigDataPrice: getPrice("scala")},
                {ccBigDataURL:"big-data/spark", ccBigDataImage:"spark-thumbnail.jpg", ccBigDataAlt:"Spark-Training-Pro-elearning", ccBigDataTitle:"Spark", ccBigDataDesc:"Apache Spark is a general-purpose & lightning fast cluster computing system. It provides high-level API.", ccBigDataDuration:"45", ccBigDataPrice: getPrice("spark")},
                {ccBigDataURL:"big-data/hadoop", ccBigDataImage:"hadoop.jpg", ccBigDataAlt:"Hadoop-Training-Pro-elearning", ccBigDataTitle:"Hadoop", ccBigDataDesc:"Hadoop is an open-source software framework provides massive storage for any kind of data.", ccBigDataDuration:"45", ccBigDataPrice: getPrice("hadoop")},
                {ccBigDataURL:"big-data/hadoop-administrator", ccBigDataImage:"hadoop-admin.jpg", ccBigDataAlt:"Hadoop-Administrator-Training-Pro-elearning", ccBigDataTitle:"Hadoop Administrator", ccBigDataDesc:"The role of a Hadoop Admin is mainly associated with tasks that involve installing and monitoring hadoop clusters.", ccBigDataDuration:"45", ccBigDataPrice: getPrice("hadoop-administrator")},
                {ccBigDataURL:"big-data/hp-vertica", ccBigDataImage:"hp-vertica.jpg", ccBigDataAlt:"HP-Vertica-Training-Pro-elearning", ccBigDataTitle:"HP Vertica", ccBigDataDesc:"HP Vertica is an analytic database management software company. It will  improves query performance over traditional database relational database systems.", ccBigDataDuration:"45", ccBigDataPrice: getPrice("hp-vertica")},
                {ccBigDataURL:"big-data/talend", ccBigDataImage:"talend.jpg", ccBigDataAlt:"Talend-Training-Pro-elearning", ccBigDataTitle:"Talend", ccBigDataDesc:"Talend Open Studio for Data Integration, which you can download and use at no cost. Powerful, easy-to-use features.", ccBigDataDuration:"45", ccBigDataPrice: getPrice("talend")},
                {ccBigDataURL:"big-data/cloudera", ccBigDataImage:"cloudera.jpg", ccBigDataAlt:"Cloudera-Training-Pro-elearning", ccBigDataTitle:"Cloudera", ccBigDataDesc:"Cloudera offers all the required softwares in one package(CDH) for Apache Hadoop software which is used for big data analysis.", ccBigDataDuration: "45", ccBigDataPrice:getPrice("cloudera")},
            ];
        
            $scope.ccCloudTech = [
                {ccCloudTechURL:"cloud-technologies/salesforce-developer", ccCloudTechImage:"salesforce-developer.jpg", ccCloudTechAlt:"Salesforce-Developer-Training-Pro-elearning", ccCloudTechTitle:"Salesforce Developer", ccCloudTechDesc:"Salesforce is the number one destination for learning to build mobile & enterprise applications in the cloud.", ccCloudTechDuration: "45", ccCloudTechPrice:getPrice("salesforce-developer")},
                {ccCloudTechURL:"cloud-technologies/salesforce-administrator", ccCloudTechImage:"salesforce-administrator.jpg", ccCloudTechAlt:"Salesforce-Administrator-Training-Pro-elearning", ccCloudTechTitle:"Salesforce Administrator", ccCloudTechDesc:"A Salesforce Administrator is a business leader, deeply knowledgeable about how their company operates, intertwined in making all departments successful through process automations, and thus, integral to running a smooth & lean business.", ccCloudTechDuration: "45", ccCloudTechPrice:getPrice("salesforce-administrator")},
                {ccCloudTechURL:"cloud-technologies/azure", ccCloudTechImage:"azure.jpg", ccCloudTechAlt:"Azure-Training-Pro-elearning", ccCloudTechTitle:"Azure", ccCloudTechDesc:"Microsoft Azure is an open, flexible, enterprise-grade cloud computing platform.", ccCloudTechDuration: "45", ccCloudTechPrice:getPrice("azure")},
                {ccCloudTechURL:"cloud-technologies/aws", ccCloudTechImage:"aws.jpg", ccCloudTechAlt:"AWS-Training-Pro-elearning", ccCloudTechTitle:"AWS", ccCloudTechDesc:"Amazon Web Services provides on-demand cloud computing platforms to individuals, companies and governments, on a paid subscription basis.", ccCloudTechDuration: "45", ccCloudTechPrice:getPrice("aws")},
                {ccCloudTechURL:"cloud-technologies/aws-sysops", ccCloudTechImage:"aws-sysops.jpg", ccCloudTechAlt:"AWS-SysOps-Training-Pro-elearning", ccCloudTechTitle:"AWS SysOps", ccCloudTechDesc:"AWS SysOps training program is designed to provide you hands-on exposure to the highly scalable Amazon Web Services (AWS) cloud platform, giving you technical expertise in deploying, managing and operating fault-tolerant system on AWS.", ccCloudTechDuration: "45", ccCloudTechPrice:getPrice("aws-sysops")},
                {ccCloudTechURL:"cloud-technologies/servicenow", ccCloudTechImage:"servicenow.jpg", ccCloudTechAlt:"ServiceNow-Training-Pro-elearning", ccCloudTechTitle:"ServiceNow", ccCloudTechDesc:"ServiceNow's cloud platform streamlines how work gets done.", ccCloudTechDuration: "45", ccCloudTechPrice:getPrice("servicenow")},
                {ccCloudTechURL:"cloud-technologies/openstack", ccCloudTechImage:"openstack.jpg", ccCloudTechAlt:"OpenStack-Training-Pro-elearning", ccCloudTechTitle:"OpenStack", ccCloudTechDesc:"OpenStack is a free and open-source software platform for cloud computing, mostly deployed as infrastructure-as-a-service, whereby virtual servers and other resources are made available to customers.", ccCloudTechDuration: "45", ccCloudTechPrice:getPrice("openstack")},
            ];
        
            $scope.ccInfoTech = [
                {ccInfoTechURL:"information-technology/java", ccInfoTechImage:"java.jpg", ccInfoTechAlt: "Java-Training-Pro-elearning", ccInfoTechTitle:"Java", ccInfoTechDesc:"Java is a programming language and computing platform first released by Sun Microsystems.", ccInfoTechDuration: "45", ccInfoTechPrice: getPrice("java")},
                {ccInfoTechURL:"information-technology/dotnet", ccInfoTechImage:"dotnet.jpg", ccInfoTechAlt: ".Net-Training-Pro-elearning", ccInfoTechTitle:".Net", ccInfoTechDesc:"A developer platform for building all your apps. Build for web, mobile, gaming, IoT, desktop, cloud and microservices.", ccInfoTechDuration: "45", ccInfoTechPrice: getPrice("dotnet")},
                {ccInfoTechURL:"information-technology/python", ccInfoTechImage:"python.jpg", ccInfoTechAlt: "", ccInfoTechTitle:"Python", ccInfoTechDesc:"Python is an interpreted high-level programming language for general-purpose programming.", ccInfoTechDuration: "45", ccInfoTechPrice: getPrice("python")},
                {ccInfoTechURL:"information-technology/embedded-systems", ccInfoTechImage:"embedded-systems.jpg", ccInfoTechAlt: "Embeddded-Systems-Training-Pro-elearning", ccInfoTechTitle:"Embedded Systems", ccInfoTechDesc:"An embedded system is a computer system with a dedicated function within a larger mechanical or electrical system, often with real-time computing constraints.", ccInfoTechDuration: "45", ccInfoTechPrice: getPrice("embedded-systems")},
                {ccInfoTechURL:"information-technology/unix", ccInfoTechImage:"unix.jpg", ccInfoTechAlt: "Unix-Training-Pro-elearning", ccInfoTechTitle:"Unix", ccInfoTechDesc:"Unix is a family of multitasking, multiuser computer operating systems that derive from the original AT&T Unix.", ccInfoTechDuration: "45", ccInfoTechPrice: getPrice("unix")},
                {ccInfoTechURL:"information-technology/linux", ccInfoTechImage:"linux.jpg", ccInfoTechAlt: "Linux-Training-Pro-elearning", ccInfoTechTitle:"Linux", ccInfoTechDesc:"Linux is a family of free and open-source software operating systems built around the Linux kernel.", ccInfoTechDuration: "45", ccInfoTechPrice: getPrice("linux")},
                {ccInfoTechURL:"information-technology/build-and-deployment-engineer", ccInfoTechImage:"build-and-deployment-engineer.jpg", ccInfoTechAlt: "Build-and-Deployment-Engineer-Training-Pro-elearning", ccInfoTechTitle:"Build and Deployment Engineer", ccInfoTechDesc:"Build and Deployment Engineer is responsible for owning the creation and implementation of a technology framework and lead the design, development, testing, and deployment of software projects.", ccInfoTechDuration: "45", ccInfoTechPrice: getPrice("build-deploy-engg")},
                {ccInfoTechURL:"information-technology/build-release-engineer", ccInfoTechImage:"build-release-engineer.jpg", ccInfoTechAlt: "Build-and-Release-Engineer-Training-Pro-elearning", ccInfoTechTitle:"Build & Release Engineer", ccInfoTechDesc:"Release engineering, frequently abbreviated as RE or as the clipped compound Releng, is a sub-discipline in software engineering concerned with the compilation, assembly, and delivery of source code into finished products or other software components.", ccInfoTechDuration: "45", ccInfoTechPrice: getPrice("build-release-engg")},
                {ccInfoTechURL:"information-technology/ruby", ccInfoTechImage:"ruby.jpg", ccInfoTechAlt: "Ruby", ccInfoTechTitle:"Ruby", ccInfoTechDesc:"Ruby is a dynamic, interpreted, reflective, object-oriented, general-purpose programming language.", ccInfoTechDuration: "45", ccInfoTechPrice: getPrice("ruby")},
                {ccInfoTechURL:"information-technology/sharepoint", ccInfoTechImage:"sharepoint.jpg", ccInfoTechAlt: "SharePoint-Training-Pro-elearning", ccInfoTechTitle:"SharePoint", ccInfoTechDesc:"SharePoint is a web-based collaborative platform that integrates with Microsoft Office.", ccInfoTechDuration: "45", ccInfoTechPrice: getPrice("sharepoint")},
                {ccInfoTechURL:"information-technology/itil-v3-foundation", ccInfoTechImage:"itil-v3-foundation.jpg", ccInfoTechAlt: "ITIL-V3-Foundation-Training-Pro-elearning", ccInfoTechTitle:"ITIL V3 Foundation", ccInfoTechDesc:"ITIL Foundation is an entry-level ITIL certification for IT professionals.", ccInfoTechDuration: "45", ccInfoTechPrice: getPrice("itilv3")},
            ];
        
            $scope.ccWebDev = [
                {ccWebDevURL:"web-development/ui-development", ccWebDevImage:"ui-development.jpg", ccWebDevAlt: "UI-Development-Training-Pro-elearning", ccWebDevTitle:"UI Development", ccWebDevDesc:"UI Development is the future of the web development with vast number of frameworks.", ccWebDevDuration: "45", ccWebDevPrice: getPrice("ui-development")},
                {ccWebDevURL:"web-development/angular4", ccWebDevImage:"angular-4.jpg", ccWebDevAlt: "Angular-4-Training-Pro-elearning", ccWebDevTitle:"Angular 4", ccWebDevDesc:"Most popular client-side framework for website development from Google.", ccWebDevDuration: "45", ccWebDevPrice: getPrice("angular4")},
                {ccWebDevURL:"web-development/php", ccWebDevImage:"php.jpg", ccWebDevAlt: "PHP-Training-Pro-elearning", ccWebDevTitle:"PHP", ccWebDevDesc:"PHP is a light weight backend language.", ccWebDevDuration: "45", ccWebDevPrice: getPrice("php")},
                {ccWebDevURL:"web-development/mysql", ccWebDevImage:"mysql-dba.jpg", ccWebDevAlt: "MySQL-Training-Pro-elearning", ccWebDevTitle:"MySQL", ccWebDevDesc:"MySQL is the most popular Open Source Relational SQL Database Management System. MySQL is one of the best RDBMS being used for developing various web-based software applications.", ccWebDevDuration: "45", ccWebDevPrice: getPrice("mysql")},
            ];
        
            $scope.ccRpa = [
                {ccRpaURL:"rpa/blueprism", ccRpaImage:"blueprism.jpg", ccRpaAlt: "Blue-Prism-Training-Pro-elearning", ccRpaTitle:"Blue Prism", ccRpaDesc:"Blue Prism Doing more with software is the essence of digital transformation. An important part of this transformation is automating business processes.", ccRpaDuration: "45", ccRpaPrice: getPrice("blueprism")},
                {ccRpaURL:"rpa/artificial-intelligence", ccRpaImage:"artificial-intelligence.jpg", ccRpaAlt: "Artificial-Intelligence-Training-Pro-elearning", ccRpaTitle:"Artificial Intelligence", ccRpaDesc:"Artificial intelligence (AI) is an area of computer science that emphasizes the creation of intelligentmachines that work and react like humans. Some of the activities computers with artificial intelligenceare designed for include: Speech recognition. Learning.", ccRpaDuration: "45", ccRpaPrice: getPrice("ai")},
                {ccRpaURL:"rpa/automation-anywhere", ccRpaImage:"automation-anywhere.jpg", ccRpaAlt: "Automation-Anywhere-Training-Pro-elearning", ccRpaTitle:"Automation Anywhere", ccRpaDesc:"Automation Anywhere Enterprise is robotic process automation software designed to automate any process end-to-end with cognitive software robots.", ccRpaDuration: "45", ccRpaPrice: getPrice("aa")},
                {ccRpaURL:"rpa/iot", ccRpaImage:"iot.jpg", ccRpaAlt: "IoT-Training-Pro-elearning", ccRpaTitle:"IoT", ccRpaDesc:"The internet of things, or IoT, is a system of interrelated computing devices, mechanical and digital machines, objects, animals or people that are provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.", ccRpaDuration: "45", ccRpaPrice: getPrice("iot")},
                {ccRpaURL:"rpa/machine-learning", ccRpaImage:"machine-learning.jpg", ccRpaAlt: "Machine-Learning-Training-Pro-elearning", ccRpaTitle:"Machine Learning", ccRpaDesc:"Machine learning is a field of computer science that uses statistical techniques to give computer systems the ability to 'learn' with data, without being explicitly programmed.", ccRpaDuration: "45", ccRpaPrice: getPrice("machine-learning")},
                {ccRpaURL:"rpa/data-science", ccRpaImage:"data-science.jpg", ccRpaAlt: "Data-Science-Training-Pro-elearning", ccRpaTitle:"Data Science", ccRpaDesc:"As the world entered the era of big data, the need for its storage also grew.", ccRpaDuration: "45", ccRpaPrice: getPrice("data-science")},
                {ccRpaURL:"rpa/uipath", ccRpaImage:"uipath.jpg", ccRpaAlt: "UiPath-Training-Pro-elearning", ccRpaTitle:"UiPath", ccRpaDesc:"UiPath is an Enterprise Robotic Process Automation (RPA) Software designed to empower companies to automate repetitive, manual, rules-based business processes.", ccRpaDuration: "45", ccRpaPrice: getPrice("uipath")},
            ];
        
            $scope.ccMobileApps = [
                {ccMobileAppsURL:"mobile-apps/android", ccMobileAppsImage:"android.jpg", ccMobileAppsAlt: "Android-Training-Pro-elearning", ccMobileAppsTitle:"Android", ccMobileAppsDesc:"Android is a software package and linux based operating system for mobile devices such as tablet computers and smartphones.", ccMobileAppsDuration: "45", ccMobileAppsPrice: getPrice("android")},
                {ccMobileAppsURL:"mobile-apps/ios", ccMobileAppsImage:"ios.jpg", ccMobileAppsAlt: "iOS-Training-Pro-elearning", ccMobileAppsTitle:"iOS", ccMobileAppsDesc:"iOS is designed to be simple and easy to use, it does not include several features found in a traditional operating system.", ccMobileAppsDuration: "45", ccMobileAppsPrice: getPrice("ios")},
            ];
        
            $scope.ccNetworkSecurity = [
                {ccNetworkSecurityURL:"network-security/ccna", ccNetworkSecurityImage:"ccna.jpg", ccNetworkSecurityAlt: "CCNA-Training-Pro-elearning", ccNetworkSecurityTitle:"CCNA", ccNetworkSecurityDesc:"CCNA is the  knowledge and skills required to install, operate, and troubleshoot a small to medium size enterprise branch network.", ccNetworkSecurityDuration: "45", ccNetworkSecurityPrice: getPrice("ccna")},
                {ccNetworkSecurityURL:"network-security/cyber-network-security", ccNetworkSecurityImage:"cns.jpg", ccNetworkSecurityAlt: "CNS-Training-Pro-elearning", ccNetworkSecurityTitle:"CNS", ccNetworkSecurityDesc:"The Computer & Network Security program provides a firm foundation in cybersecurity while also providing the flexibility for students.", ccNetworkSecurityDuration: "45", ccNetworkSecurityPrice: getPrice("cns")},
                {ccNetworkSecurityURL:"network-security/comptia-network-plus", ccNetworkSecurityImage:"comptia-network+.jpg", ccNetworkSecurityAlt: "CompTIA-Network+-Training-Pro-elearning", ccNetworkSecurityTitle:"CompTIA Network+", ccNetworkSecurityDesc:"CompTIA Network+ course is one of the best and the most popular network courses in the world.", ccNetworkSecurityDuration: "45", ccNetworkSecurityPrice: getPrice("comptia-network-plus")},
                {ccNetworkSecurityURL:"network-security/comptia-security-plus", ccNetworkSecurityImage:"comptia-security+.jpg", ccNetworkSecurityAlt: "CompTIA-Security+-Training-Pro-elearning", ccNetworkSecurityTitle:"CompTIA Security+", ccNetworkSecurityDesc:"CompTIA Security+ course is one of the best and the most popular security courses in the world.", ccNetworkSecurityDuration: "45", ccNetworkSecurityPrice: getPrice("comptia-security-plus")},
                {ccNetworkSecurityURL:"network-security/cisa", ccNetworkSecurityImage:"CISA.jpg", ccNetworkSecurityAlt: "CISA-Training-Pro-elearning", ccNetworkSecurityTitle:"CISA", ccNetworkSecurityDesc:"CISA course is best suitable for them who are interested in Information Systems auditing, control and security.", ccNetworkSecurityDuration: "45", ccNetworkSecurityPrice: getPrice("cisa")},
                {ccNetworkSecurityURL:"network-security/ccsp", ccNetworkSecurityImage:"ccsp.jpg", ccNetworkSecurityAlt: "CCSP-Training-Pro-elearning", ccNetworkSecurityTitle:"CCSP", ccNetworkSecurityDesc:"CCSP course helps you advance your technical skills and knowledge in designing, managing and securing the data over cloud and make you an expert.", ccNetworkSecurityDuration: "45", ccNetworkSecurityPrice: getPrice("ccsp")},
                {ccNetworkSecurityURL:"network-security/cissp", ccNetworkSecurityImage:"cissp.jpg", ccNetworkSecurityAlt: "CISSP-Training-Pro-elearning", ccNetworkSecurityTitle:"CISSP", ccNetworkSecurityDesc:"CISSP course helps you advance your technical skills and knowledge in designing, managing and securing the data over cloud and make you an expert.", ccNetworkSecurityDuration: "45", ccNetworkSecurityPrice: getPrice("cissp")},
            ];

            $scope.ccAppSupport = [
                {ccAppSupportURL:"application-support/devops", ccAppSupportImage:"devops.jpg", ccAppSupportAlt: "DevOps-Training-Pro-elearning", ccAppSupportTitle:"DevOps", ccAppSupportDesc:"DevOps is a Application Support technology.", ccAppSupportDuration: "45", ccAppSupportPrice: getPrice("devops")},
            ];
        
            $scope.ccBI = [
                {ccBIURL:"business-intelligence/msbi", ccBIImage:"msbi.jpg", ccBIAlt: "MSBI-Training-Pro-elearning", ccBITitle:"MSBI", ccBIDesc:"MSBI is nothing but its process of converting data into information.", ccBIDuration: "45", ccBIPrice: getPrice("msbi")},
                {ccBIURL:"business-intelligence/obiee", ccBIImage:"obiee.jpg", ccBIAlt: "OBIEE-Training-Pro-elearning", ccBITitle:"OBIEE", ccBIDesc:"Oracle Business Intelligence Enterprise Edition Plus, also termed as theOBI EE Plus, is Oracle Corporation's set of business intelligence tools consisting of former Siebel Systems business intelligence and Hyperion Solutions business intelligence offerings.", ccBIDuration: "45", ccBIPrice: getPrice("obiee")},
                {ccBIURL:"business-intelligence/power-bi", ccBIImage:"power-bi.jpg", ccBIAlt: "Power-BI-Training-Pro-elearning", ccBITitle:"Power BI", ccBIDesc:"Power BI is a suite of business analytics tools that deliver insights throughout your organization.", ccBIDuration: "45", ccBIPrice: getPrice("powerbi")},
            ];
        
            $scope.ccErp = [
                {ccErpURL:"erp/people-soft-hrms", ccErpImage:"people-soft-hrms.jpg", ccErpAlt: "PeopleSoft-HRMS-Functional-Training-Pro-elearning", ccErpTitle:"PeopleSoft HRMS Functional", ccErpDesc:"Peoplesoft HRMS manages the human resource covering many other HR aspects from application to retirement.", ccErpDuration: "45", ccErpPrice:getPrice("peoplesoft-hrms")},
                {ccErpURL:"erp/salesforce-crm", ccErpImage:"salesforce-crm.jpg", ccErpAlt: "Salesforce-CRM-Training-Pro-elearning", ccErpTitle:"Salesforce CRM", ccErpDesc:"Salesforce is a (CRM) platform which provides cloud-based applications for sales, service, marketing, and more.", ccErpDuration: "45", ccErpPrice:getPrice("salesforce-crm")},
                {ccErpURL:"erp/oracle-apps", ccErpImage:"oracle-apps.jpg", ccErpAlt: "Oracle-Apps-Training-Pro-elearning", ccErpTitle:"Oracle Apps", ccErpDesc:"Oracle Applications is a software that helps to runs enterprise businesses such as Accounting, Humans Resource, or Financials.", ccErpDuration: "45", ccErpPrice:getPrice("oracle-apps")},
                {ccErpURL:"erp/sap-bi", ccErpImage:"sap-bi.jpg", ccErpAlt: "SAP-BI-Training-Pro-elearning", ccErpTitle:"SAP BI", ccErpDesc:"Business Intelligence is a SAP product which majorly focuses on providing its customers/organizations with a user friendly and very useful form of representing data that could be helpful for analyses purpose and making business decisions.", ccErpDuration: "45", ccErpPrice:getPrice("sap-bi")},
                {ccErpURL:"erp/sap-bo", ccErpImage:"sap-bo.jpg", ccErpAlt: "SAP-BO-Training-Pro-elearning", ccErpTitle:"SAP BO", ccErpDesc:"SAP BO is a reporting and analytics business intelligence (BI) platform aimed at business users.", ccErpDuration: "45", ccErpPrice:getPrice("sap-bo")},
                {ccErpURL:"erp/sap-crm", ccErpImage:"sap-crm.jpg", ccErpAlt: "SAP-CRM-Training-Pro-elearning", ccErpTitle:"SAP CRM", ccErpDesc:"SAP CRM targets business software requirements of midsize and large organizations in all industries and sectors.", ccErpDuration: "45", ccErpPrice:getPrice("sap-crm")},
                {ccErpURL:"erp/sap-fico", ccErpImage:"sap-fico.jpg", ccErpAlt: "SAP-FICO-Training-Pro-elearning", ccErpTitle:"SAP FICO", ccErpDesc:"SAP Finance and Controlling is the best design module for internal as well as external accounting processes.", ccErpDuration: "45", ccErpPrice:getPrice("sap-fico")},
                {ccErpURL:"erp/sap-hana", ccErpImage:"sap-hana.jpg", ccErpAlt: "SAP-HANA-Training-Pro-elearning", ccErpTitle:"SAP HANA", ccErpDesc:"Using SAP HANA run a business data platform for the intelligent enterprise to deliver data-driven insights throughout your business and predict real-time outcomes.", ccErpDuration: "45", ccErpPrice:getPrice("sap-hana")},
                {ccErpURL:"erp/sap-mm", ccErpImage:"sap-mm.jpg", ccErpAlt: "SAP-MM-Training-Pro-elearning", ccErpTitle:"SAP MM", ccErpDesc:"Material Management handles the procurement to payment process, from inventory through final invoice receipt and verification.", ccErpDuration: "45", ccErpPrice:getPrice("sap-mm")},
                {ccErpURL:"erp/sas", ccErpImage:"sas.jpg", ccErpAlt: "SAS-Training-Pro-elearning", ccErpTitle:"SAS", ccErpDesc:"SAS is a software suite developed by SAS Institute for advanced analytics, multivariate analyses, business intelligence, data management, and predictive analytics.", ccErpDuration: "45", ccErpPrice:getPrice("sas")},
                {ccErpURL:"erp/sas-clinical-research", ccErpImage:"sas-clinical-research.jpg", ccErpAlt: "SAS-Clinical-Research-Training-Pro-elearning", ccErpTitle:"SAS Clinical Research", ccErpDesc:"SAS Clinical Research validates a candidates' ability to apply SAS programming skills to clinical trials data.", ccErpDuration: "45", ccErpPrice:getPrice("sas-clinical")},
                {ccErpURL:"erp/sas-bi", ccErpImage:"sas-bi.jpg", ccErpAlt: "SAS-BI-Training-Pro-elearning", ccErpTitle:"SAS BI", ccErpDesc:"SAS Business Intelligence software provides the most comprehensive, integrated and easy-to-use reporting and analytics features. In your office or on the go.", ccErpDuration: "45", ccErpPrice:getPrice("sas-bi")},
            ];
        
            $scope.ccEtl = [
                {ccEtlURL:"etl/datastage", ccEtlImage:"datastage.jpg", ccEtlAlt: "DataStage-Training-Pro-elearning", ccEtlTitle:"DataStage", ccEtlDesc:"DataStage is an IBM ETL tool.", ccEtlDuration: "45", ccEtlPrice: getPrice("datastage")},
                {ccEtlURL:"etl/informatica", ccEtlImage:"informatica.jpg", ccEtlAlt: "Informatica-Training-Pro-elearning", ccEtlTitle:"Informatica", ccEtlDesc:"Informatica is a Cloud based ETL tool.", ccEtlDuration: "45", ccEtlPrice: getPrice("informatica")},
                {ccEtlURL:"etl/informatica-mdm", ccEtlImage:"informatica-mdm.jpg", ccEtlAlt: "Informatica-MDM-Training-Pro-elearning", ccEtlTitle:"Informatica MDM", ccEtlDesc:"Informatica MDM is a Cloud based ETL tool.", ccEtlDuration: "45", ccEtlPrice: getPrice("informatica-mdm")},
            ];
        
            $scope.ccBussMgmt = [
                {ccBussMgmtURL:"business-management/jbpm", ccBussMgmtImage:"jbpm.jpg", ccBussMgmtAlt: "jBPM-Training-Pro-elearning", ccBussMgmtTitle:"jBPM", ccBussMgmtDesc:"jBPM is an open-source workflow engine written in Java that is a flexible Business Process Management Suite.", ccBussMgmtDuration: "45", ccBussMgmtPrice: getPrice("jbpm")},
                {ccBussMgmtURL:"business-management/pega-6.2", ccBussMgmtImage:"pega-6.2.jpg", ccBussMgmtAlt: "Pega-6.2-Training-Pro-elearning", ccBussMgmtTitle:"Pega 6.2", ccBussMgmtDesc:"Explore business solutions from the leader in software for customer engagement and digital process automation, built on the unified Pega Platform.", ccBussMgmtDuration: "45", ccBussMgmtPrice: getPrice("pega6")},
                {ccBussMgmtURL:"business-management/pega-7", ccBussMgmtImage:"pega-7.jpg", ccBussMgmtAlt: "Pega-7-Training-Pro-elearning", ccBussMgmtTitle:"Pega 7", ccBussMgmtDesc:"The latest Pega 7 will give you more features and flexibility in exploring your business solutions.", ccBussMgmtDuration: "45", ccBussMgmtPrice: getPrice("pega7")},
                {ccBussMgmtURL:"business-management/business-analyst", ccBussMgmtImage:"business-analyst.jpg", ccBussMgmtAlt: "Business-Analyst-Training-Pro-elearning", ccBussMgmtTitle:"Business Analyst", ccBussMgmtDesc:"A business analyst (BA) is someone who analyzes an organization or business domain (real or hypothetical) and documents its business or processes or systems, assessing the business model or its integration with technology.", ccBussMgmtDuration: "45", ccBussMgmtPrice: getPrice("business-analyst")},
                {ccBussMgmtURL:"business-management/ba-bfsi", ccBussMgmtImage:"ba-bfsi.jpg", ccBussMgmtAlt: "BA-BFSI-Training-Pro-elearning", ccBussMgmtTitle:"BA - BFSI", ccBussMgmtDesc:"The BFSI Business Analyst communicates with the client and ensures that the business requirements are met.", ccBussMgmtDuration: "45", ccBussMgmtPrice: getPrice("ba-bfsi")},
                {ccBussMgmtURL:"business-management/ba-health-care", ccBussMgmtImage:"ba-health-care.jpg", ccBussMgmtAlt: "BA-Health-Care-Training-Pro-elearning", ccBussMgmtTitle:"BA - Health Care", ccBussMgmtDesc:"Business Analysis with Healthcare domain bolster the efficiency and profit of medical facilities by evaluating their financial activity, data management and services.", ccBussMgmtDuration: "45", ccBussMgmtPrice: getPrice("ba-health")},
                {ccBussMgmtURL:"business-management/ba-finance", ccBussMgmtImage:"ba-finance.jpg", ccBussMgmtAlt: "BA-Finance-Training-Pro-elearning", ccBussMgmtTitle:"BA Finance", ccBussMgmtDesc:"BA - Finance programme has a strong focus on employability and will equip you with the knowledge and skills needed to excel in business and finance.", ccBussMgmtDuration: "45", ccBussMgmtPrice: getPrice("ba-finance")},
                {ccBussMgmtURL:"business-management/quickbooks", ccBussMgmtImage:"quickbooks.jpg", ccBussMgmtAlt: "QuickBooks-Training-Pro-elearning", ccBussMgmtTitle:"QuickBooks", ccBussMgmtDesc:"QuickBooks is an accounting software package developed and marketed by Intuit.", ccBussMgmtDuration: "45", ccBussMgmtPrice: getPrice("quickbooks")},
                {ccBussMgmtURL:"business-management/technical-manager", ccBussMgmtImage:"technical-manager.jpg", ccBussMgmtAlt: "Technical-Manager-Training-Pro-elearning", ccBussMgmtTitle:"Technical Manager", ccBussMgmtDesc:"The technical manager is a versatile position that requires sufficient managerial skills as well as sufficient technical skills.", ccBussMgmtDuration: "45", ccBussMgmtPrice: getPrice("tech-manager")},
                {ccBussMgmtURL:"business-management/togaf", ccBussMgmtImage:"togaf.jpg", ccBussMgmtAlt: "TOGAF-Training-Pro-elearning", ccBussMgmtTitle:"TOGAF", ccBussMgmtDesc:"TOGAF training provides a clear path for professional development and credibility to employers. The TOGAF Standard, which is an open Enterprise Architecture standard, is used by world's leading organizations to improve business efficiency.", ccBussMgmtDuration: "45", ccBussMgmtPrice: getPrice("togaf")},
                {ccBussMgmtURL:"business-management/pmp", ccBussMgmtImage:"pmp.jpg", ccBussMgmtAlt: "PMP-Training-Pro-elearning", ccBussMgmtTitle:"PMP", ccBussMgmtDesc:"Project Management Professional (PMP) course is used to validate a professional's educationa and experience in project management.", ccBussMgmtDuration: "45", ccBussMgmtPrice: getPrice("pmp")},
                {ccBussMgmtURL:"business-management/six-sigma", ccBussMgmtImage:"six-sigma.jpg", ccBussMgmtAlt: "Six-Sigma-Training-Pro-elearning", ccBussMgmtTitle:"Six Sigma", ccBussMgmtDesc:"Six Sigma is a disciplined, statistical-based, data-driven approach and continuous improvement methodology for eliminating defects in a product, process or service.", ccBussMgmtDuration: "45", ccBussMgmtPrice: getPrice("six-sigma")},
            ];
        
            $scope.ccAnalyticalTools = [
                {ccAnalyticalToolsURL:"analytical-tools/tableau", ccAnalyticalToolsImage:"tableau.jpg", ccAnalyticalToolsAlt: "Tableau-Training-Pro-elearning", ccAnalyticalToolsTitle:"Tableau", ccAnalyticalToolsDesc:"Tableau is a leading analytical tool.", ccAnalyticalToolsDuration: "45", ccAnalyticalToolsPrice: getPrice("tableau")},
                {ccAnalyticalToolsURL:"analytical-tools/remedy-ticketing-tool", ccAnalyticalToolsImage:"remedy-ticketing-tool.jpg", ccAnalyticalToolsAlt: "Remedy-Ticketing-Tool-Training-Pro-elearning", ccAnalyticalToolsTitle:"Remedy Ticketing Tool", ccAnalyticalToolsDesc:"Remedy Ticketing Tool is a hot cake in present market.", ccAnalyticalToolsDuration: "45", ccAnalyticalToolsPrice: getPrice("remedy-tkt")},
                {ccAnalyticalToolsURL:"analytical-tools/qlikview", ccAnalyticalToolsImage:"qlikview.jpg", ccAnalyticalToolsAlt: "QlikView-Training-Pro-elearning", ccAnalyticalToolsTitle:"QlikView", ccAnalyticalToolsDesc:"QlikView is a Cloud and Integration Tool.", ccAnalyticalToolsDuration: "45", ccAnalyticalToolsPrice: getPrice("qlikview")},
                {ccAnalyticalToolsURL:"analytical-tools/tibco-spotfire", ccAnalyticalToolsImage:"tibco-spotfire.jpg", ccAnalyticalToolsAlt: "Tibco-Spotfire-Training-Pro-elearning", ccAnalyticalToolsTitle:"Tibco Spotfire", ccAnalyticalToolsDesc:"Tibco Spotfire is a smart, secure, governed, enterprise-class analytics platform with built-in data wrangling that delivers AI-driven, visual, geo, and streaming analytics.", ccAnalyticalToolsDuration: "45", ccAnalyticalToolsPrice: getPrice("tibco-spotfire")},
            ];

            $scope.ccSoftTesting = [
                {ccSoftTestingURL:"software-testing/perfecto", ccSoftTestingImage:"perfecto.jpg", ccSoftTestingAlt:"Perfecto-Training-Pro-elearning", ccSoftTestingTitle:"Perfecto", ccSoftTestingDesc:"Perfecto is used as a mobile testing tool.", ccSoftTestingDuration: "45", ccSoftTestingPrice: getPrice("perfecto")},
                {ccSoftTestingURL:"software-testing/loadrunner", ccSoftTestingImage:"loadrunner.jpg", ccSoftTestingAlt:"LoadRunner-Training-Pro-elearning", ccSoftTestingTitle:"LoadRunner", ccSoftTestingDesc:"LoadRunner is a performance testing tool which is leading in the market.", ccSoftTestingDuration: "45", ccSoftTestingPrice: getPrice("loadrunner")},
                {ccSoftTestingURL:"software-testing/selenium", ccSoftTestingImage:"selenium.jpg", ccSoftTestingAlt:"Selenium-Training-Pro-elearning", ccSoftTestingTitle:"Selenium", ccSoftTestingDesc:"Selenium is a functional testing framework which is a free-ware licensed by Apache.", ccSoftTestingDuration: "45", ccSoftTestingPrice: getPrice("selenium")},
                {ccSoftTestingURL:"software-testing/etl-testing", ccSoftTestingImage:"etl-testing.jpg", ccSoftTestingAlt:"ETL-Testing-Training-Pro-elearning", ccSoftTestingTitle:"ETL Testing", ccSoftTestingDesc:"ETL Testing is a process of how data is loaded from the source system to the data warehouse.", ccSoftTestingDuration: "45", ccSoftTestingPrice: getPrice("etl-testing")},
                {ccSoftTestingURL:"software-testing/web-app-penetration-testing", ccSoftTestingImage:"web-app-penetration-testing.jpg", ccSoftTestingAlt:"Web-Application-Penetration-Testing-Training-Pro-elearning", ccSoftTestingTitle:"Web Application Penetration Testing", ccSoftTestingDesc:"Checking for vulnerabilities when accessing the websites using Web Application Penetration Testing.", ccSoftTestingDuration: "45", ccSoftTestingPrice: getPrice("wapt")},
            ];

            $scope.ccHyperion = [
                {ccHyperionURL:"hyperion/hpcm", ccHyperionImage:"hpcm.jpg", ccHyperionAlt:"HPCM-Training-Pro-elearning", ccHyperionTitle:"HPCM", ccHyperionDesc:"HPCM is a Profitability and Cost Management software.", ccHyperionDuration: "45", ccHyperionPrice: getPrice("hpcm")},
                {ccHyperionURL:"hyperion/hyperion-epm", ccHyperionImage:"hyperion-epm.jpg", ccHyperionAlt:"Hyperion-EPM-Training-Pro-elearning", ccHyperionTitle:"Hyperion EPM", ccHyperionDesc:"Hyperion EPM is a Enterprise Performance Management software.", ccHyperionDuration: "45", ccHyperionPrice: getPrice("hepm")},
                {ccHyperionURL:"hyperion/hyperion-essbase", ccHyperionImage:"hyperion-essbase.jpg", ccHyperionAlt:"Hyperion-Essbase-Training-Pro-elearning", ccHyperionTitle:"Hyperion Essbase", ccHyperionDesc:"Hyperion Essbase is a multi-dimensional database management system which provides a multi-dimensional database platform upon which to build analytic applications.", ccHyperionDuration: "45", ccHyperionPrice: getPrice("h-essbase")},
                {ccHyperionURL:"hyperion/hyperion-financial-management", ccHyperionImage:"hyperion-financial-management.jpg", ccHyperionAlt:"Hyperion-Financial-Management-Training-Pro-elearning", ccHyperionTitle:"Hyperion Financial Management", ccHyperionDesc:"Hyperion Financial Management is a comprehensive, Web-based application that delivers global financial consolidation, reporting and analysis in a single, highly scalable software solution.", ccHyperionDuration: "45", ccHyperionPrice: getPrice("hfm")},
            ];

            $scope.ccIbm = [
                {ccIbmURL:"ibm/webfocus", ccIbmImage:"webfocus.jpg", ccIbmAlt:"WebFocus-Training-Pro-elearning", ccIbmTitle:"WebFocus", ccIbmDesc:"The WebFocus business intelligence (BI) and analytics platform helps companies use data more strategically across and beyond the enterprise.", ccIbmDuration: "45", ccIbmPrice: getPrice("webfocus")},
                {ccIbmURL:"ibm/websphere-admin", ccIbmImage:"websphere-admin.jpg", ccIbmAlt:"WebSphere-Admin-Training-Pro-elearning", ccIbmTitle:"WebSphere Admin", ccIbmDesc:"WebSphere Admin is an IBM Data Integration Tool.", ccIbmDuration: "45", ccIbmPrice: getPrice("websphere-admin")},
                {ccIbmURL:"ibm/websphere-message-broker", ccIbmImage:"websphere-message-broker.jpg", ccIbmAlt:"WebSphere-Message-Broker-Training-Pro-elearning", ccIbmTitle:"WebSphere Message Broker", ccIbmDesc:"WebSphere Message Broker is an enterprise service bus (ESB) providing connectivity and universal data transformation for service-oriented architecture (SOA) and non-SOA environments.", ccIbmDuration: "45", ccIbmPrice: getPrice("wmb")},
            ];
        
            $scope.ccOracle = [
                {ccOracleURL:"oracle/oracle-adf", ccOracleImage:"oracle-adf.jpg", ccOracleAlt: "Oracle-ADF-Training-Pro-elearning", ccOracleTitle:"Oracle ADF", ccOracleDesc:"Oracle ADF is an end-to-end Java EE framework that simplifies application development by providing out-of-the-box infrastructure services and a visual and declarative development experience.", ccOracleDuration: "45", ccOraclePrice: getPrice("oracle-adf")},
                {ccOracleURL:"oracle/oracle-dba", ccOracleImage:"oracle-dba.jpg", ccOracleAlt: "Oracle-DBA-Training-Pro-elearning", ccOracleTitle:"Oracle DBA", ccOracleDesc:"An Oracle DBA is a senior-level manager who has lots of responsibility, managing the mission-critical data for the whole company.", ccOracleDuration: "45", ccOraclePrice: getPrice("oracle-dba")},
                {ccOracleURL:"oracle/oracle-developer", ccOracleImage:"oracle-developer.jpg", ccOracleAlt: "Oracle-Developer-Training-Pro-elearning", ccOracleTitle:"Oracle Developer", ccOracleDesc:"Oracle SQL Developer is a free, integrated development environment that simplifies the development and management of Oracle Database in both traditional and Cloud deployments.", ccOracleDuration: "45", ccOraclePrice: getPrice("oracle-developer")},
                {ccOracleURL:"oracle/oracle-ebs", ccOracleImage:"oracle-ebs.jpg", ccOracleAlt: "Oracle-EBS-Training-Pro-elearning", ccOracleTitle:"Oracle EBS", ccOracleDesc:"The Oracle E-Business Suite Supply Chain Management family of applications integrates and automates all key supply chain processes, from design, planning and procurement to manufacturing and fulfillment, providing a complete solution set to enable companies to power information-driven value chains.", ccOracleDuration: "45", ccOraclePrice: getPrice("oracle-ebs")},
                {ccOracleURL:"oracle/oracle-golden-gate", ccOracleImage:"oracle-golden-gate.jpg", ccOracleAlt: "Oracle-Golden-Gate-Training-Pro-elearning", ccOracleTitle:"Oracle Golden Gate", ccOracleDesc:"Oracle GoldenGate 12c offers a real-time, log-based change data capture (CDC) and replication software. platform to meet the needs of today's transaction-driven applications.", ccOracleDuration: "45", ccOraclePrice: getPrice("oracle-golden-gate")},
                {ccOracleURL:"oracle/oracle-soa", ccOracleImage:"oracle-soa.jpg", ccOracleAlt: "Oracle-SOA-Training-Pro-elearning", ccOracleTitle:"Oracle SOA", ccOracleDesc:"Oracle SOA Suite provides a comprehensive suite of components for developing, securing, and monitoring service-oriented architecture (SOA).", ccOracleDuration: "45", ccOraclePrice: getPrice("oracle-soa")},
                {ccOracleURL:"oracle/weblogic", ccOracleImage:"weblogic.jpg", ccOracleAlt: "WebLogic-Training-Pro-elearning", ccOracleTitle:"WebLogic", ccOracleDesc:"Oracle WebLogic Server is a Java EE application server currently developed by Oracle Corporation.", ccOracleDuration: "45", ccOraclePrice: getPrice("weblogic")},
                {ccOracleURL:"oracle/siebel-open-ui", ccOracleImage:"siebel-open-ui.jpg", ccOracleAlt: "Siebel-Open-UI-Training-Pro-elearning", ccOracleTitle:"Siebel Open UI", ccOracleDesc:"Siebel Open UI is an extension of the user interface (UI) for the Siebel application, utilising open web technologies (HTML, CSS, JavaScript, JQuery).", ccOracleDuration: "45", ccOraclePrice: getPrice("siebel-open-ui")},
                {ccOracleURL:"oracle/odi-12c", ccOracleImage:"odi-12c.jpg", ccOracleAlt: "ODI-12C-Training-Pro-elearning", ccOracleTitle:"ODI 12C", ccOracleDesc:"Oracle Data Integrator is a comprehensive data integration platform that covers all data integration requirements: from high-volume, high-performance batch loads, to event-driven, trickle-feed integration processes, to SOA-enabled data services.", ccOracleDuration: "45", ccOraclePrice: getPrice("odi-12c")},
            ];
    
        }, function(error) {
            $scope.coursePricesList = "Error occurred while fetching the Fees Data!";
        });
    }, function(error) {
        // console.log("in controller error");
        $scope.shortCountryCode = "Error occurred while fetching the Geo Location";
    });

    function getPrice(courseName) {
        var returnVal = 0;
        // $scope.coursePricesList.forEach(obj => {
        //     if(obj.course == courseName) {
        //         if($window.sessionStorage.getItem('shortCountryCode') == "IN") {
        //             // $scope.currencySymbol = "₹";
        //             returnVal = obj.IN;
        //         } else {
        //             // $scope.currencySymbol = "$";
        //             returnVal = obj.others;
        //         }
        //     }
        // });
        for(var i=0; i<$scope.coursePricesList.length; i++) {
            var obj = $scope.coursePricesList[i];
            if(obj.course == courseName) {
                if($window.sessionStorage.getItem('shortCountryCode') == "IN") {
                    // $scope.currencySymbol = "₹";
                    returnVal = obj.IN;
                } else {
                    // $scope.currencySymbol = "$";
                    returnVal = obj.others;
                }
            }
        };
        return returnVal;
    };

    // Dynamic Currency Symbol
    $scope.currencySymbol;
    if($window.sessionStorage.getItem('shortCountryCode') == "IN") {
        $scope.currencySymbol = "₹";
    } else {
        $scope.currencySymbol = "$";
    }

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

/* Subscribe Controller */
.controller("subscribeCtrl", ['$scope', '$http', '$timeout', '$location', function($scope, $http, $timeout, $location) {
    // Trigger Modal only on home page
    if($location.path() == "/") {
        $("#subscribeModal").modal("show");
    }

    // Table Name
    $scope.table_name = "subscribers";
    // Email Existence Check
    $scope.checkEmail = function() {
        $http.post(
            './php/email-existence-check.php',
            {'email': $scope.email, 'table_name': $scope.table_name}
        ).then(function successCallback(response) {
            $scope.emailStatus = response.data;
            if($scope.emailStatus == "You have already subscribed with us!") {
                $scope.subscribeForm.email.$setValidity("size", false);
            }
    
        });
    };
    
    // Set Class
    $scope.addClass = function(emailStatus) {
        if(emailStatus == "You have already subscribed with us!") {
            return 'response exists';
        } else {
            return 'hide';
        }
    };
    
    var orig_email = $scope.email;
    $scope.dt = Date();
    $scope.fn_subscribe = function() {
        $http.post(
            "./php/subscribe.php",
            {'email': $scope.email, 'date_time': $scope.dt, 'table_name': $scope.table_name}
        ).then(function(data) {
            $scope.email = angular.copy(orig_email);
            $scope.subscribeForm.$setUntouched();
            $scope.successMessage = "Thanks for subscribing! We have sent our Corporate Training Brochure to your email.";
            $timeout(function() {
                $scope.successMessage = false;
            }, 5000);
        }, function(error) {
            $scope.errorMessage = "An error occurred. Please try again!";
        });
    };
    $scope.fn_reset = function() {
        $scope.email = angular.copy(orig_email);
        $scope.subscribeForm.$setUntouched();
    };
}])

/* Admin Login Controller */
// .controller('modalCtrl', function Controller(ModalService) {
//     var vm = this;
//     vm.openModal = openModal;
//     function openModal(id){
//         ModalService.Open(id);
//     }
// })

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

/*-- Google Maps --*/
.controller('mapCtrl', ['$scope', function ($scope) {
    var cities = [
        {
            city : 'Pennsylvania',
            desc : '<b>Astral Technologies Inc.</b><br>1704 St. John\'s court,<br>Bensalem, PA 19020<br><i class="fa fa-phone" aria-hidden="true"></i> +1 (267) 436-7840',
            lat : 40.092983,
            long : -74.932957
        },
        {
            city : 'Texas',
            desc : '20731 Norwich Gulch Ln,<br>Richmond, TX 77407,<br><i class="fa fa-phone" aria-hidden="true"></i> +1 (713) 623-1945',
            lat : 29.6870396,
            long : -95.7423876
        },
        {
            city : 'Australia',
            desc : 'Unit 402, 39 Cooper Street,<br>Strathfield, NSW - 2135,<br><i class="fa fa-phone" aria-hidden="true"></i> +61 404335048',
            lat : -33.8661879,
            long : 151.0899069
        },
        {
            city : 'India',
            desc : '<b>Prodesign Technologies Pvt. Ltd.</b><br>501-A, Sai Rasik Building,<br>Vittal Rao Nagar, Madhapur,<br>Hyderabad, TG - 500081.<br><i  class="fa fa-phone" aria-hidden="true"></i> +91-7901401499',
            lat : 17.442006,
            long : 78.3845023
        }
    ];

    var mapOptions = {
        center: new google.maps.LatLng(40.092983, -74.932957),
        zoom: 4
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];
    
    var infoWindow = new google.maps.InfoWindow();
    
    var createMarker = function (info) {
        
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.city
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
        
        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
            $scope.map.setCenter(marker.position);
        });
        
        $scope.markers.push(marker);
        
    }  
    
    for (var i = 0; i < cities.length; i++){
        createMarker(cities[i]);
    }

    $scope.openInfoWindow = function(e, selectedMarker) {
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    };
}])
/*-- //Google Maps --*/

// Ratings
.controller("ratingController", [ "$scope", function($scope) {
    $scope.rating = 4.3;
    $scope.options = {
        values              : [ 1, 2, 3, 4, 5 ],
        valueInitial        : null,
        cssBase             : "rating-star fa",
        cssBaseSelected     : "fa-star",
        cssBaseUnselected   : "fa-star-o",
        cssHover            : "rating-star-hover-gold",
        cssFractional       : "rating-star-fractional",
        targetSelector      : null,
        htmlBase            : "<i></i>",
        htmlEvent           : "click",
        applyHoverCss       : true,
        readonly            : true,
        allowFractional     : true,
        eventName           : "rated"
    };
}])

// Navbar Controller
.controller("navController", ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function(destination) {
        return destination === $location.path();
    };
}])

// Course Schedules Controller
.controller("courseSchedules", ['$scope', function($scope) {
    $scope.asc = "courseName";
    $scope.desc = false;
    $scope.searchCourse = { courseName:"", batchType: "", tainingType: "", trainerName: "" };
    $scope.courseSchedules = [
        { courseName: "IOS", date: "10 July 2018", time: "9:30 PM", batchType: "Regular", tainingType: "Online", duration: "30", trainerName: "Praveen" },
        { courseName: "FullStack", date: "26 July 2018", time: "9:30 PM", batchType: "Regular", tainingType: "Online", duration: "45", trainerName: "Vasu" },
        { courseName: "WebFocus", date: "28 July 2018", time: "7:30 AM", batchType: "Regular", tainingType: "Online", duration: "45", trainerName: "Praneeth" },
    ];
}])

// New Course Schedule
.controller("courseSchedules", ['$scope', '$http', '$timeout', '$filter', function($scope, $http, $timeout, $filter) {
    $scope.asc = "";
    $scope.desc = false;
    $scope.searchSchedule = { course_name:"", batch_type:"", training_type:"", trainer_name:"" };
    $scope.courseSchedules = [];
    $http({
        url: "./admin/php/course-schedules-fetch.php",
        method: "POST",
        data: "",
        headers: {
            "Content-Type":"application/x-www-form-urlencoded"
        }
    })
    .then(function(response) {
        $scope.courseSchedules = response.data;
    });
}])

// Careers
.controller("careersController", ['$scope', '$http', '$timeout', '$filter', function($scope, $http, $timeout, $filter) {
    $scope.asc = "";
    $scope.desc = false;
    $scope.searchSchedule = { course_name:"", batch_type:"", training_type:"", trainer_name:"" };
    $scope.jobPostings = [];
    $http({
        url: "./admin/php/job-postings-fetch.php",
        method: "POST",
        data: "",
        headers: {
            "Content-Type":"application/x-www-form-urlencoded"
        }
    })
    .then(function(response) {
        $scope.jobPostings = response.data;
    });
}])

;
}(angular));