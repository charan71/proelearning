(function() {
    "use strict";

/* Creating Module */
angular.module('ProELearning.routes', ['ngRoute', 'chart.js'])

/* Creating Route Configurations For Partial Views */
.config(['$routeProvider', '$locationProvider', 'ChartJsProvider',
    function ($routeProvider, $locationProvider, ChartJsProvider) {
        $routeProvider
            .when("/",
                    {
            title: "Pro-elearning | Best Software Training | Best Online Software Training Institute in Hyderabad",
            description: "Pro-elearning, Real-Time Software Training institute for IT Professionals And Freshers of Hyderabad, offers various software training to make our students Certified Professional.",
            keywords: "Software training institutes in Hyderabad, software training institutes in Hyderabad with placements, online software training institutes in Hyderabad, software coaching centers in Hyderabad, best software institute in Hyderabad, best software coaching centers in Hyderabad",
            templateUrl: "views/home.html",
            controller: "CourseCardsController",
            label: "Home"
        })
            .when("/search-results",
                    {
            title: "Search Results - Pro-elearning",
            templateUrl: "views/search-results.html",
            controller: "searchCoursesController",
            label: "Search Results"
        })
            .when("/course-schedules",
                {
            title: "Course Schedules - Pro-elearning | Best Software Training Company",
            description: "Pro-elearning courses live batches and new course batches.",
            keywords: "java course timings in hyderabad, java batches in hyderabad, full stack course batches in hyderabad, servicenow batches in hyderabad, service now batches",
            templateUrl: "views/course-schedules.html",
            controller: "",
            label: "Course Schedules"
        })
            .when("/aboutus",
                {
            title: "About Pro-elearning | Best Software Training Company",
            description: "",
            keywords: "",
            templateUrl: "views/about.html",
            controller: "",
            label: "About Us"
        })
            .when("/verify/certificate-verification",
                    {
            title: "Certificate Verification | Pro-elearning",
            description: "",
            keywords: "",
            templateUrl: "views/certificate-verification.html",
            controller: "verifyCertificateCtrl",
            label: "Certificate Verification"
        })
            .when("/information-technology",
                    {
            title: "IT Training Institute in Hyderabad | IT Courses in Hyderabad | Pro-elearning",
            description: "Pro-elearning, the best IT training institute in Hyderabad providing real-time training for Java, Python,.Net, UNIX, LINUX, RUBY, Sharepoint and ITL foundation. ✓100% placement assistance. ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "python training institutes in Hyderabad, best computer courses in Hyderabad, best it training institute in Hyderabad, Ruby Training institute in Hyderabad, Microsoft SharePoint Training institute in Hyderabad, ITIL V3 Training institute in Hyderabad, Build and Release Engineer Training institute in Hyderabad, Linux Training institute in Hyderabad, Linux online Training institute in Hyderabad, UNIX Training institute in Hyderabad, DotNet Training institute in Hyderabad, Java Training institute in Hyderabad, Java online Training institute in Hyderabad",
            templateUrl: "views/information-technology.html",
            controller: "CourseCardsController",
            label: "Information Technology"
        })
            .when("/information-technology/java",
                    {
            title: "Best Java Training institute in Hyderabad | Pro-elearning",
            description: "Pro-elearning offers the Best Java, Advanced Java, Spring, Struts, Hibernate training by certified java trainers in Hyderabad for fresher and IT Professionals.",
            keywords: "Java Training institute in Hyderabad, Java online Training institute in Hyderabad, Java Classroom Training institute in Hyderabad, Java course in Hyderabad, Java Training in Hyderabad, Java online Training in Hyderabad, Java classroom Training in Hyderabad",
            templateUrl: "views/java.html",
            controller: "",
            label: "Java"
        })
            .when("/information-technology/dotnet",
                    {
            title: "DotNet Training institute in Hyderabad | Pro-elearning",
            description: "Pro-elearning provides the Best and Real-time Dot.net Training in Hyderabad from Basic to Advanced Level. Enroll Today to Get Trained by IT industry Experts.",
            keywords: "DotNet Training institute in Hyderabad, DotNet online Training institute in Hyderabad, DotNet Classroom Training institute in Hyderabad, DotNet course in Hyderabad, DotNet Training in Hyderabad, DotNet online Training in Hyderabad, DotNet classroom Training in Hyderabad",
            templateUrl: "views/dotnet.html",
            controller: "",
            label: ".Net"
        })
            .when("/information-technology/python",
                    {
            title: "Python Training in Hyderabad | Expert Level Course | Pro-elearning",
            description: "Enroll Today and Get Hands-on Real-time training on Python by industrial Experts. Pro-elearning offers you one of the Best Python Training in Hyderabad.",
            keywords: "Python Training institute in Hyderabad, Python online Training institute in Hyderabad, Python Classroom Training institute in Hyderabad, Python course in Hyderabad, Python Training in Hyderabad, Python online Training in Hyderabad, Python classroom Training in Hyderabad",
            templateUrl: "views/python.html",
            controller: "",
            label: "Python"
        })
            .when("/information-technology/embedded-systems",
                    {
            title: "Embedded Systems Training institute in Hyderabad | Pro-elearning",
            description: "Pro-elearning is one of the Leading Embedded systems Training institutes in Hyderabad. We provide Quality Education in Embedded Systems. Join Today!",
            keywords: "Embedded systems Training institute in Hyderabad, Embedded systems online Training institute in Hyderabad, Embedded systems Classroom Training institute in Hyderabad, Embedded systems course in Hyderabad, Embedded systems Training in Hyderabad, Embedded systems online Training in Hyderabad, Embedded systems classroom Training in Hyderabad",
            templateUrl: "views/embedded-systems.html",
            controller: "",
            label: "Embedded Systems"
        })
            .when("/information-technology/unix",
                    {
            title: "UNIX Training institute in Hyderabad | Pro-elearning",
            description: "Get UNIX Shell Scripting Training in Hyderabad by IT industry Experts. Pro-elearning offers the Best in industry Training on UNIX. Enrol Today!",
            keywords: "UNIX Training institute in Hyderabad, UNIX online Training institute in Hyderabad, UNIX Classroom Training institute in Hyderabad, UNIX course in Hyderabad, UNIX Training in Hyderabad, UNIX online Training in Hyderabad, UNIX classroom Training in Hyderabad",
            templateUrl: "views/unix.html",
            controller: "",
            label: "Unix"
        })
            .when("/information-technology/linux",
                    {
            title: "Linux Online-Classroom Training in Hyderabad | Pro-elearning",
            description: "Enrol Today and Become an Expert in Linux Trained by IT Experts in Hyderabad. Pro-elearning Provides Best Online and Offline Linux training to Job Seekers and IT employees.",
            keywords: "Linux Training institute in Hyderabad, Linux online Training institute in Hyderabad, Linux Classroom Training institute in Hyderabad, Linux course in Hyderabad, Linux Training in Hyderabad, Linux online Training in Hyderabad, Linux classroom Training in Hyderabad",
            templateUrl: "views/linux.html",
            controller: "",
            label: "Linux"
        })
            .when("/information-technology/build-and-deployment-engineer",
                    {
            title: "Build and Deployment Engineer Course | Pro-elearning",
            description: "Get Build and Deployment Engineer Training online/Classroom by experts in IT industry. Enrol Today get Hands-on Training with Quality course Sessions from Pro-elearning.",
            keywords: "Build and Deployment Engineer Training institute in Hyderabad, Build and Deployment Engineer online Training institute in Hyderabad, Build and Deployment Engineer Classroom Training institute in Hyderabad, Build and Deployment Engineer course in Hyderabad, Build and Deployment Engineer Training in Hyderabad, Build and Deployment Engineer online Training in Hyderabad, Build and Deployment Engineer classroom Training in Hyderabad",
            templateUrl: "views/build-deploy-eng.html",
            controller: "",
            label: "Build & Deployment Engineer"
        })
            .when("/information-technology/build-release-engineer",
                    {
            title: "Build and Release Engineer Training | Pro-elearning",
            description: "Learn Build and Release Engineer Training in Hyderabad by real time experts, Software Build and Release Engineer from the Best institute Pro-elearning. Join Us Today and get online/classroom training.",
            keywords: "Build and Release Engineer Training institute in Hyderabad, Build and Release Engineer online Training institute in Hyderabad, Build and Release Engineer Classroom Training institute in Hyderabad, Build and Release Engineer course in Hyderabad, Build and Release Engineer Training in Hyderabad, Build and Release Engineer online Training in Hyderabad, Build and Release Engineer classroom Training in Hyderabad",
            templateUrl: "views/build-release.html",
            controller: "",
            label: "Build & Release Engineer"
        })
            .when("/information-technology/ruby",
                    {
            title: "Best Ruby on Rails Training in Hyderabad | Pro-elearning",
            description: "Enrol Today and Learn Ruby on Rails course with basic fundamentals to advanced concepts from experts with hands-on practical exposure from best institute Pro-elearning.",
            keywords: "Ruby Training institute in Hyderabad, Ruby online Training institute in Hyderabad, Ruby Classroom Training institute in Hyderabad, Ruby course in Hyderabad, Ruby Training in Hyderabad, Ruby online Training in Hyderabad, Ruby classroom Training in Hyderabad",
            templateUrl: "views/ruby.html",
            controller: "",
            label: "Ruby"
        })
            .when("/information-technology/sharepoint",
                    {
            title: "Microsoft SharePoint Online Training | SharePoint Course in Hyderabad | Pro-elearning",
            description: "Enroll for SharePoint Training - Get SharePoint certification Assistance Training in Hyderabad from Pro-elearning training institute, learn SharePoint course by industry Experts.",
            keywords: "Microsoft SharePoint Training institute in Hyderabad, Microsoft SharePoint online Training institute in Hyderabad, Microsoft SharePoint Classroom Training institute in Hyderabad, Microsoft SharePoint course in Hyderabad, Microsoft SharePoint Training in Hyderabad, Microsoft SharePoint online Training in Hyderabad, Microsoft SharePoint classroom Training in Hyderabad",
            templateUrl: "views/sharepoint.html",
            controller: "",
            label: "SharePoint"
        })
            .when("/information-technology/itil-v3-foundation",
                    {
            title: "ITIL V3 Online/Classroom Training in Hyderabad | Pro-elearning",
            description: "Pro-elearning provides the best ITIL V3 Foundation Training in Hyderabad. Attend ITIL Foundation certification training conducted by industry Experts.",
            keywords: "ITIL V3 Training institute in Hyderabad, ITIL V3 online Training institute in Hyderabad, ITIL V3 Classroom Training institute in Hyderabad, ITIL V3 course in Hyderabad, ITIL V3 Training in Hyderabad, ITIL V3 online Training in Hyderabad, ITIL V3 classroom Training in Hyderabad",
            templateUrl: "views/itil-v3-foundation.html",
            controller: "",
            label: "ITIL V3 Foundation"
        })
            .when("/web-development",
                    {
            title: "Web Development Training in Hyderabad | Software Courses | Pro-elearning",
            description: "Pro-elearning offers the best Web Development training in Hyderabad with placement oriented training & expert trainers. ✓100% placement assistance. ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "UI developer course in Hyderabad, UI development training in Hyderabad, php training in Hyderabad, Angular 4 Training institute in Hyderabad, PHP online Training institute in Hyderabad, Angular 4 online Training institute in Hyderabad",
            templateUrl: "views/web-development.html",
            controller: "",
            label: "Web Development"
        })
            .when("/web-development/ui-development",
                    {
            title: "Best UI Development Training in Hyderabad | Pro-elearning",
            description: "To Become Professional UI Developer Learn Ui-Development Training in Hyderabad. Now Pro-elearning offers Best UI-Development Classes in Online and Class Room also covering all the updated Frameworks.",
            keywords: "UI Development Training institute in Hyderabad, UI Development online Training institute in Hyderabad, UI Development Classroom Training institute in Hyderabad, UI Development course in Hyderabad, UI Development Training in Hyderabad, UI Development online Training in Hyderabad, UI Development classroom Training in Hyderabad",
            templateUrl: "views/ui-development.html",
            controller: "",
            label: "UI Development"
        })
            .when("/web-development/angular4",
                    {
            title: "Angular 4 Training in Hyderabad | Pro-elearning",
            description: "Master front-end web development with our Angular 4 Course in Hyderabad & learn Typescript, Bootstrap etc. Enrol in Angular 4 Training.",
            keywords: "Angular 4 Training institute in Hyderabad, Angular 4 online Training institute in Hyderabad, Angular 4 Classroom Training institute in Hyderabad, Angular 4 course in Hyderabad, Angular 4 Training in Hyderabad, Angular 4 online Training in Hyderabad, Angular 4 classroom Training in Hyderabad",
            templateUrl: "views/angular4.html",
            controller: "",
            label: "Angular 4"
        })
            .when("/web-development/php",
                    {
            title: "PHP Training in Hyderabad | Pro-elearning",
            description: "Enrol today with Pro-elearning for PHP with MySQL training in Hyderabad and get trained by experts. Best PHP course in Hyderabad.",
            keywords: "PHP Training institute in Hyderabad, PHP online Training institute in Hyderabad, PHP Classroom Training institute in Hyderabad, PHP course in Hyderabad, PHP Training in Hyderabad, PHP online Training in Hyderabad, PHP classroom Training in Hyderabad",
            templateUrl: "views/php.html",
            controller: "",
            label: "PHP"
        })
            .when("/web-development/mysql",
                    {
            title: "MySQL DBA Training in Hyderabad | MySQL DBA Online | Pro-elearning",
            description: "Pro-elearning offers the Best MySQL DBA training in Hyderabad with real-time projects and expert trainers. ✓Job Assistance ✓Live Projects and Material ✓Certification ✓Free Demo ☎ +91-7901401499",
            keywords: "MySQL DBA institutes in Hyderabad, MySQL course in Hyderabad, MySQL DBA course in Hyderabad, Institutes for MySQL DBA in Hyderabad, MySQL DBA online training in Hyderabad",
            templateUrl: "views/mysql.html",
            controller: "",
            label: "MySQL"
        })
            .when("/rpa",
                    {
            title: "Robotic Process Automation Training in Hyderabad | RPA Training | Pro-elearning",
            description: "Enroll for the best Robotic Process Automation (RPA) Training in Hyderabad with expert trainers & job oriented coaching in Blue Prism. ✓100% job assistance. ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Blue Prism training in Hyderabad, Robotic Process automation training in Hyderabad, RPA training in Hyderabad, Robotics training in Hyderabad",
            templateUrl: "views/rpa.html",
            controller: "",
            label: "RPA"
        })
            .when("/rpa/blueprism",
                    {
            title: "Blue Prism Training Institute | RPA Course in Hyderabad, India | Pro-elearning",
            description: "Get expert level certified RPA Blueprism Training with Real-Time scenarios And Live Projects Through Instructor-led Sessions In Hyderabad, India. Enroll Today, Join Course And Avail Discounts!",
            keywords: "Blueprism training in hyderabad, blueprism rpa training, rpa blueprism training in hyderabad, rpa blueprism training, blueprism training in hyderabad, best blueprism training in hyderabad, top blueprism training in hyderabad, rpa blue prism certification, blue prism rpa certification in hyderabad, expert level blue prism training, blue prism online training, blue prism online certification, blue prism online course, blue prism training institute in ameerpet,blue prism training institute in Hyderabad,blue prism training institute in India",
            templateUrl: "views/blueprism.html",
            controller: "",
            label: "Blue Prism"
        })
            .when("/rpa/artificial-intelligence",
                    {
            title: "Artificial Intelligence Training in Hyderabad | AI Course Online | Pro-elearning",
            description: "Enrich your career by learning in the Best Artificial Intelligence training institute in Hyderabad. ✓Job Assistance ✓Live Projects and Material ✓Certification ✓Free Demo ☎ +91-7901401499",
            keywords: "AI Training in Hyderabad, Artificial Intelligence training Institutes in Hyderabad, Artificial Course in Hyderabad, Artificial Intelligence Online Training in Hyderabad, Best Institute for Artificial Intelligence in Hyderabad, Artificial Intelligence institutes in Hyderabad",
            templateUrl: "views/artificial-intelligence.html",
            controller: "",
            label: "Artificial Intelligence"
        })
            .when("/rpa/automation-anywhere",
                    {
            title: "Automation Anywhere Training in Hyderabad | Automation Anywhere Online Training | Pro-elearning",
            description: "Pro-elearning provides best RPA Automation Anywhere Training in Hyderabad with expert trainers. ✓Job Assistance ✓Live Projects and Material ✓Certification ✓Free Demo ☎ +91-7901401499",
            keywords: "RPA Training in Hyderabad, Robotic Process Automation Training in Hyderabad, AA training in Hyderabad, Automation Anywhere Online Training in Hyderabad, RPA Blue Prism Training in Hyderabad, Automation Anywhere training institutes in Hyderabad, Best Institutes for Automation Anywhere in Hyderabad, Best Institutes for AA in Hyderabad, Best Institutes for RPA in Hyderabad",
            templateUrl: "views/automation-anywhere.html",
            controller: "",
            label: "Automation Anywhere"
        })
            .when("/rpa/iot",
                    {
            title: "Best IoT Training in Hyderabad | Internet of Things Training | Pro-elearning",
            description: "Enroll with the Best IoT Training Institute in Hyderabad and get trained with industry experts. ✓Job Assistance ✓Live Projects and Material ✓Certification ✓Free Demo ☎ +91-7901401499",
            keywords: "IoT certification in Hyderabad, IoT courses in Hyderabad, IoT Online training in Hyderabad, IoT institutes in Hyderabad, Best Institute for IoT training in Hyderabad, IoT training Institutes in Hyderabad, Internet of Things training in Hyderabad, Internet of Things training Institutes  in Hyderabad, Best Internet of Things institutes in Hyderabad, Internet of Things institutes in Hyderabad",
            templateUrl: "views/iot.html",
            controller: "",
            label: "IoT"
        })
            .when("/rpa/machine-learning",
                    {
            title: "Machine Learning Training in Hyderabad, Machine Learning Online Training | Pro-elearning",
            description: "Enroll for Machine Learning training in Hyderabad and get trained with expert trainers. ✓Job Assistance ✓Live Projects and Material ✓Certification ✓Free Demo ☎ +91-7901401499",
            keywords: "Machine Learning training, Machine Learning Course, Machine Learning Course in Hyderabad, Machine Learning Institutes in Hyderabad, Machine Learning Online Training, Machine Learning Online Training in Hyderabad",
            templateUrl: "views/machine-learning.html",
            controller: "",
            label: "Machine Learning"
        })
            .when("/rpa/data-science",
                    {
            title: "Best Institute for Data Science in Online Training | Pro-elearning | Data Science Training",
            description: "Pro-elearning is that the Best Institute for knowledge DATA SCIENCE in Hyderabad with knowledgeable trade professionals. ✓100% job help ✓FREE DEMO ☎ 7901401499.",
            keywords: "Data science, data science course, data analytics courses, data science tutorial, data science training in Hyderabad, analytics courses, masters in data science, online courses, free online courses, e learning websites, online website, data science course in India, free courses.",
            templateUrl: "views/data-science.html",
            controller: "",
            label: "Data Science"
        })
            .when("/rpa/uipath",
                    {
            title: "RPA UiPath Training in Hyderabad | UiPath Online Training | Pro-elearning",
            description: "Pro-elearning offers the Best RPA UiPath Training in Hyderabad with real-time training and advanced concepts. ✓Job Assistance ✓Live Projects and Material ✓Certification ✓Free Demo ☎ +91-7901401499",
            keywords: "UiPath training, UiPath Online Training, RPA UiPath Online Training in Hyderabad, RPA UiPath  course in Hyderabad, UiPath institutes in Hyderabad, RPA UiPath institutes in Hyderabad",
            templateUrl: "views/uipath.html",
            controller: "",
            label: "UiPath"
        })
            .when("/cloud-technologies",
                    {
            title: "Cloud Technologies Training in Hyderabad | Cloud Technologies | Pro-elearning",
            description: "Learn Cloud Technologies in Hyderabad @ Pro-elearning with expert trainers providing real-time coaching. ✓Salesforce ✓Azure ✓AWS ✓ServiceNow. 100% job assistance ✓FREE DEMO! +91-7901401499.",
            keywords: "Cloud Technologies courses in Hyderabad, Cloud Computing institutes in Hyderabad, Salesforce Developer Training institute in Hyderabad, Salesforce Administrator Training institute in Hyderabad, Microsoft Windows Azure Training institute in Hyderabad, Amazon Web Services Training institute in Hyderabad, Service Now Training institute in Hyderabad, OpenStack Training institute in Hyderabad",
            templateUrl: "views/cloud-technologies.html",
            controller: "",
            label: "Cloud Technologies"
        })
            .when("/cloud-technologies/salesforce-developer",
                    {
            title: "Salesforce Developer Training in Hyderabad | Pro-elearning",
            description: "Salesforce Developer training in Hyderabad provided by Pro-elearning experts and real-time working professional years of Experience in various projects.",
            keywords: "Salesforce Developer Training institute in Hyderabad, Salesforce Developer online Training institute in Hyderabad, Salesforce Developer Classroom Training institute in Hyderabad, Salesforce Developer course in Hyderabad, Salesforce Developer Training in Hyderabad, Salesforce Developer online Training in Hyderabad, Salesforce Developer classroom Training in Hyderabad",
            templateUrl: "views/salesforce-developer.html",
            controller: "",
            label: "Salesforce Developer"
        })
            .when("/cloud-technologies/salesforce-administrator",
                    {
            title: "Salesforce Administrator Training in Hyderabad | Pro-elearning",
            description: "Join our salesforce Administrator training program in Hyderabad to get the best salesforce training through online or offline classes. Enroll Today!",
            keywords: "Salesforce Administrator Training institute in Hyderabad, Salesforce Administrator online Training institute in Hyderabad, Salesforce Administrator Classroom Training institute in Hyderabad, Salesforce Administrator course in Hyderabad, Salesforce Administrator Training in Hyderabad, Salesforce Administrator online Training in Hyderabad, Salesforce Administrator classroom Training in Hyderabad",
            templateUrl: "views/salesforce-administrator.html",
            controller: "",
            label: "Salesforce Administrator"
        })
            .when("/cloud-technologies/azure",
                    {
            title: "Microsoft Windows Azure training in Hyderabad | Pro-elearning",
            description: "Pro-elearning Offers Microsoft Windows Azure online and Classroom Training in Hyderabad with Economical cost. Microsoft Azure Training will develop your skills that are required for your job and career.",
            keywords: "Microsoft Windows Azure Training institute in Hyderabad, Microsoft Windows Azure online Training institute in Hyderabad, Microsoft Windows Azure Classroom Training institute in Hyderabad, Microsoft Windows Azure course in Hyderabad, Microsoft Windows Azure Training in Hyderabad, Microsoft Windows Azure online Training in Hyderabad, Microsoft Windows Azure classroom Training in Hyderabad",
            templateUrl: "views/azure.html",
            controller: "",
            label: "Azure"
        })
            .when("/cloud-technologies/aws",
                    {
            title: "Amazon Web Services Training in Hyderabad | Pro-elearning",
            description: "Pro-elearning provides Best Amazon Web Services (AWS) Training in Hyderabad to desired aspirants with Real Time Scenarios as per current industry. Enroll Today!",
            keywords: "Amazon Web Services Training institute in Hyderabad, Amazon Web Services online Training institute in Hyderabad, Amazon Web Services Classroom Training institute in Hyderabad, Amazon Web Services course in Hyderabad, Amazon Web Services Training in Hyderabad, Amazon Web Services online Training in Hyderabad, Amazon Web Services classroom Training in Hyderabad",
            templateUrl: "views/aws.html",
            controller: "",
            label: "AWS"
        })
        .when("/cloud-technologies/aws-sysops",
                    {
            title: "AWS SysOps Virtual Training | AWS SysOps | Pro-elearning",
            description: "Pro-elearning offers Best AWS SysOps virtual training with certified trainers. In this virtual learning environment you will gain knowledge on how to setup and run Cloud Services in amazon web services (AWS). Call us to attend a FREE DEMO! ☎ 7901401499.",
            keywords: "Aws training, virtual training, online learning, virtual learning environment, elearning, training, aws solution architect, aws online training, aws architecture, amazon web services, aws solution architect, aws certified developer, aws architecture, aws certified solutions architect, amazon web services, aws, amazon web services tutorial, amazon aws,  acloudguru,  aws login, free courses.",
            templateUrl: "views/aws-sysops.html",
            controller: "",
            label: "AWS SysOps"
        })
            .when("/cloud-technologies/servicenow",
                    {
            title: "Service Now Training in Hyderabad | Pro-elearning",
            description: "Experience real-time implementation of ServiceNow platform by exploring Content and Configuration Management, User Licenses, cloud computing and exporting the data from ServiceNow. Enroll Today!",
            keywords: "Service Now Training institute in Hyderabad, Service Now online Training institute in Hyderabad, Service Now Classroom Training institute in Hyderabad, Service Now course in Hyderabad, Service Now Training in Hyderabad, Service Now online Training in Hyderabad, Service Now classroom Training in Hyderabad",
            templateUrl: "views/servicenow.html",
            controller: "",
            label: "Service Now"
        })
            .when("/cloud-technologies/openstack",
                    {
            title: "OpenStack Training in Hyderabad | Pro-elearning",
            description: "Register for OpenStack training in Hyderabad, led by experts of Pro-elearning. OpenStack course in Hyderabad from expert professionals in IT industry.",
            keywords: "OpenStack Training institute in Hyderabad, OpenStack online Training institute in Hyderabad, OpenStack Classroom Training institute in Hyderabad, OpenStack course in Hyderabad, OpenStack Training in Hyderabad, OpenStack online Training in Hyderabad, OpenStack classroom Training in Hyderabad",
            templateUrl: "views/openstack.html",
            controller: "",
            label: "OpenStack"
        })
            .when("/mobile-apps",
                    {
            title: "Mobile Application Development Training in Hyderabad | Pro-elearning",
            description: "Enroll for Mobile Application Development training in Hyderabad with expert trainers. ✓IOS ✓Android. ✓100% job assistance ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Mobile Application Institutes in Hyderabad, Android application development training, Android training in Hyderabad, IOS training institutes in Hyderabad, Android coaching in Hyderabad, IOS Coaching in Hyderabad, IOS Coaching centers in Hyderabad",
            templateUrl: "views/mobile-applications.html",
            controller: "",
            label: "Mobile Application Development"
        })
            .when("/mobile-apps/android",
                    {
            title: "Android Training | Android Course in Hyderabad | Pro-elearning",
            description: "Pro-elearning is one of the leading Android Training institute in Hyderabad. Having trainers with excellence and commitment, we provide high quality training. Enroll Today!",
            keywords: "Android application development training, best android training, android online training, android development training, android training institute, Android OS & apps Development training institutes Hyderabad, android app development training in Hyderabad, best android training in Hyderabad, best Android training centre in Hyderabad, Android certification training in Hyderabad",
            templateUrl: "views/android.html",
            controller: "",
            label: "Android"
        })
            .when("/mobile-apps/ios",
                    {
            title: "Iphone-IOS-IPad training in Hyderabad | Pro-elearning",
            description: "Pro-elearning provides excellent Classroom/Online training for Iphone IOS development classes. Iphone Apps Development Training by Real-time Experts. Join Today.",
            keywords: "Iphone online training, IOS Online training in Hyderabad, online Iphone training in India, best Iphone development centre in Hyderabad, Iphone training institute in Hyderabad, iOS development training, iOS development training in Hyderabad, iOS classes, android and Ios training in Hyderabad, best iOS training institutes in Hyderabad, iOS application development training in Hyderabad, Iphone application development training in Hyderabad, iOS training online, iOS training India",
            templateUrl: "views/ios.html",
            controller: "",
            label: "IOS"
        })
            .when("/network-security",
                    {
            title: "Network and Security Training in Hyderabad | Cyber Security Training | Pro-elearning",
            description: "Learn the best Network and Security Training in Hyderabad @ Pro-elearning with our certified experts. ✓CCNA ✓CNS (Cyber Network Security). ✓FREE DEMO! ✓+91-7901401499.",
            keywords: "Cyber Security training in Hyderabad, Cyber Security Course in Hyderabad, CCNA course in Hyderabad, Cyber security training institutes in Hyderabad, CCNA  course with placement in Hyderabad, CNS training in Hyderabad, Cyber Network Security training in Hyderabad",
            templateUrl: "views/network-security.html",
            controller: "",
            label: "Network & Security"
        })
        .when("/network-security/comptia-network-plus",
                    {
            title: "Virtual CompTIA Network+ Training in Hyderabad | Pro-elearning",
            description: "To become skilled CompTIA Network+ Learn CompTIA Network+ coaching in Hyderabad. Currently, Pro-elearning offers Best CompTIA Network+ on-line coaching for interested candidates.",
            keywords: "CompTIA Network+ Training institute in Hyderabad, CompTIA Network+ online Training institute in Hyderabad, CompTIA Network+ virtual Training institute in Hyderabad, CompTIA Network+ course in Hyderabad, CompTIA Network+ Training in Hyderabad, CompTIA Network+ online Training in Hyderabad, CompTIA Network+ best Online Training in Hyderabad",
            templateUrl: "views/comptia-network+.html",
            controller: "",
            label: "Comptia Network+"
        })
        .when("/network-security/comptia-security-plus",
                    {
            title: "Providing Online Training | CompTIA Security+ Best Training | Pro-elearning",
            description: "Join with Pro-elearning virtual Training to become a skilled in CompTIA Security+ coaching in Hyderabad and get trained by experts who has vast experience in Virtual Training. Best CompTIA Security+ course in Hyderabad.",
            keywords: "CompTIA, security, comptia security+, CompTIA Security+ Training institute in Hyderabad, CompTIA Security+ online Training institute in Hyderabad, CompTIA Security+ best Training institute in Hyderabad, CompTIA Security+ course in Hyderabad, CompTIA Security+ Training in Hyderabad, CompTIA Security+ online Training in Hyderabad, CompTIA Security+ best coaching in Hyderabad",
            templateUrl: "views/comptia-security+.html",
            controller: "",
            label: "Comptia Security+"
        })
        .when("/network-security/cisa",
                    {
            title: "CISA Coaching in Hyderabad | Virtual Coaching Course | Pro-elearning",
            description: "Enroll today and find active time period coaching on CISSP, CCSP & CISA by industrial consultants. Pro-elearning offers you one among the simplest CISSP, CCSP & CISA coaching in Hyderabad.",
            keywords: "CISSP, CCSP & CISA Training in Hyderabad, CISSP, CCSP & CISA online training, CISSP, CCSP & CISA virtual training in Hyderabad, CISSP, CCSP & CISA  course training in Hyderabad, Best online coaching for CISSP, CCSP & CISA in Hyderabad, CISSP, CCSP & CISA technical training in Hyderabad, CISSP, CCSP & CISA best online course in Hyderabad, CISSP CCSP & CISA training institutes in Hyderabad, Best CISSP, CCSP & CISA training online institutes in Hyderabad, CISSP, CCSP & CISA online training in Hyderabad.",
            templateUrl: "views/cisa.html",
            controller: "",
            label: "CISA"
        })
        .when("/network-security/ccsp",
                    {
            title: "CCSP coaching in Hyderabad |Virtual coaching Course | Pro-elearning",
            description: "Enroll today and find active time period coaching on CISSP, CCSP & CISA by industrial consultants. Pro-elearning offers you one among the simplest CISSP, CCSP & CISA coaching in Hyderabad.",
            keywords: "CISSP, CCSP & CISA Training in Hyderabad, CISSP, CCSP & CISA online training, CISSP, CCSP & CISA virtual training in Hyderabad, CISSP, CCSP & CISA  course training in Hyderabad, Best online coaching for CISSP, CCSP & CISA in Hyderabad, CISSP, CCSP & CISA technical training in Hyderabad, CISSP, CCSP & CISA best online course in Hyderabad, CISSP, CCSP & CISA training institutes in Hyderabad, Best CISSP, CCSP & CISA training online institutes in Hyderabad, CISSP, CCSP & CISA online training in Hyderabad.",
            templateUrl: "views/ccsp.html",
            controller: "",
            label: "CCSP"
        })
        .when("/network-security/cissp",
                    {
            title: "CISSP coaching in Hyderabad |Virtual coaching Course | Pro-elearning",
            description: "Enroll today and find active time period coaching on CISSP, CCSP & CISA by industrial consultants. Pro-elearning offers you one among the simplest CISSP, CCSP & CISA coaching in Hyderabad.",
            keywords: "CISSP, CCSP & CISA Training in Hyderabad, CISSP, CCSP & CISA online training, CISSP, CCSP & CISA virtual training in Hyderabad, CISSP, CCSP & CISA  course training in Hyderabad, Best online coaching for CISSP, CCSP & CISA in Hyderabad, CISSP, CCSP & CISA technical training in Hyderabad, CISSP, CCSP & CISA best online course in Hyderabad, CISSP, CCSP & CISA training institutes in Hyderabad, Best CISSP, CCSP & CISA training online institutes in Hyderabad, CISSP, CCSP & CISA online training in Hyderabad.",
            templateUrl: "views/cissp.html",
            controller: "",
            label: "CISSP"
        })
            .when("/network-security/ccna",
                    {
            title: "CCNA Training - Best Course in Hyderabad | Pro-elearning",
            description: "Pro-elearning is the best CCNA Training institute in Hyderabad. Enrol now to get trained in networking courses and get placement assistance.",
            keywords: "CCNA Training in Hyderabad, CCNA Course in Hyderabad, online ccna training, best ccna training in Hyderabad, best CCNA training centre in Hyderabad, ccna networking training Hyderabad, Cisco CCNA training and placement in Hyderabad",
            templateUrl: "views/ccna.html",
            controller: "",
            label: "CCNA"
        })
            .when("/network-security/cyber-network-security",
                    {
            title: "Cyber Network Security Training in Hyderabad | Pro-elearning",
            description: "Pro-elearning is one of the leading IT training institutes, offers Cyber Security training course in Hyderabad, India to help IT professionals get certified and step forward in their career. Enroll Now!",
            keywords: "Cyber Network Security Training institute in Hyderabad, Cyber Security online Training institute in Hyderabad, Cyber Network Security Classroom Training institute in Hyderabad, Cyber Security course in Hyderabad, Cyber Security Training in Hyderabad, Cyber Network Security online Training in Hyderabad, Cyber Security classroom Training in Hyderabad",
            templateUrl: "views/cyber-network-security.html",
            controller: "",
            label: "Cyber Network Security"
        })
            .when("/application-support",
                    {
            title: "Application Support Training in Hyderabad | Application Support Courses | Pro-elearning",
            description: "Enroll for Application Support Training in Hyderabad with certified trainers and 100% job assistance. ✓DevOps ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "DevOps training institutes in Hyderabad, DevOps Online training in Hyderabad, Application support courses in Hydrabad, best DevOps training in Hyderabad, DevOps institutes in Hyderabad, DevOps best institute in Hyderabad",
            templateUrl: "views/application-support.html",
            controller: "",
            label: "Application Support"
        })
            .when("/application-support/devops",
                    {
            title: "DevOps Training | DevOps Courses in Hyderabad | Pro-elearning",
            description: "Pro-elearning provides DevOps online training in Hyderabad. It is trusted institute for DevOps Online and Class Room training with Real-Time trainers.",
            keywords: "DevOps Training institute in Hyderabad, DevOps online Training institute in Hyderabad, DevOps Classroom Training institute in Hyderabad, DevOps course in Hyderabad, DevOps Training in Hyderabad, DevOps online Training in Hyderabad, DevOps classroom Training in Hyderabad",
            templateUrl: "views/devops.html",
            controller: "",
            label: "DevOps"
        })
            .when("/application-support/docker",
                    {
            title: "Docker Best Online Training | Classroom Docker Training |Pro-elearning",
            description: "Pro-elearning offers the Best Docker software training by certified Docker trainers in Hyderabad for fresher and IT Professionals. Training is going to be for online, classroom training still as on-demand training ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Docker Training institute in Hyderabad, Docker online Training institute in Hyderabad, Docker Classroom Training institute in Hyderabad, Docker course in Hyderabad, Docker Training in Hyderabad, Docker online Training in Hyderabad, Docker classroom Training in Hyderabad.",
            templateUrl: "views/docker.html",
            controller: "",
            label: "Docker"
        })
            .when("/application-support/kubernetes",
                    {
            title: "Kubernetes Training in Hyderabad |Expert Level Course | Pro-elearning",
            description: "Enroll Today and Get Hands-on Real-time training on Kubernetes by industrial Experts. Pro-elearning offers you one of the Best Kubernetes Training in Hyderabad ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Kubernetes Training institute in Hyderabad, Kubernetes online Training institute in Hyderabad, Kubernetes Classroom Training institute in Hyderabad, Kubernetes course in Hyderabad, Kubernetes Training in Hyderabad, Kubernetes online Training in Hyderabad, Kubernetes classroom Training in Hyderabad.",
            templateUrl: "views/kubernetes.html",
            controller: "",
            label: "Kubernetes"
        })
            .when("/big-data",
                    {
            title: "Big Data Courses Online Training in Hyderabad | Pro-elearning",
            description: "Best Data Management courses online training in Hyderabad is provided @ Pro-elearning. Courses offered: ✓Hadoop ✓Hadoop Admin ✓HP Vertica ✓Talend ✓Cloudera ✓FREE DEMO! ✓+91-7901401499.",
            keywords: "Data Management training in Hyderabad, Hadoop Online training in Hyderabad, Hadoop training institutes in Hyderabad, HP vertica Training institute in Hyderabad, HP vertica online Training institute in Hyderabad, talend training in Hyderabad, Cloudera Administrator Training institute in Hyderabad, Talend etl tool training in Hyderabad, Talend training in Madhapur",
            templateUrl: "views/big-data.html",
            controller: "",
            label: "Big Data"
        })
            .when("/big-data/hadoop",
                    {
            title: "Hadoop Training in Hyderabad | Pro-elearning",
            description: "Hadoop Course Pro-elearning is a brand and providing quality Online, Classroom, Corporate, Weekends and Fast track training on demand to the students in worldwide on Hadoop Training in Hyderabad.",
            keywords: "Best Hadoop Training institutes in Hyderabad, Big Data Hadoop training in Hyderabad, Hadoop institutes in Hyderabad, Hadoop Training, Hadoop Course, Hadoop training in Madhapur, Hadoop developer training, Hadoop live project in Hyderabad, Hadoop developer training in Hyderabad",
            templateUrl: "views/hadoop.html",
            controller: "",
            label: "Hadoop"
        })
            .when("/big-data/kafka",
                    {
            title: "Apache Kafka Training in Hyderabad | Kafka Online Training | Pro-elearning",
            description: "Pro-elearning offers the best Apache Kafka training in Hyderabad with expert trainers and job oriented coaching. ✓100% Job Assistance ✓FREE DEMO ☎ +91-7901401499.",
            keywords: "Hadoop training in Hyderabad, Big data training in Hyderabad, Kafka Online training, Apache Kafka training, Apache Kafka Online training in Hyderabad, best institute for Kafka in Hyderabad, Institute for Kafka in Hyderabad, Kafka institutes in Hyderabad",
            templateUrl: "views/kafka.html",
            controller: "",
            label: "Kafka"
        })
            .when("/big-data/scala",
                    {
            title: "Best Scala Training in Hyderabad | Big Data Hadoop Training | Pro-elearning",
            description: "Learn the best Scala and Spark Training in Hyderabad @ Pro-elearning with expert trainers and 100% job assistance. Enroll now for ✓FREE DEMO ☎ +91-7901401499.",
            keywords: "Apache Spark online training, Spark and Scala training in Hyderabad, Spark Institute Hyderabad, Hadoop training in Hyderabad, Big data training in Hyderabad, best training institute for spark in Hyderabad, Institute for Spark  in Hyderabad, Spark  institutes in Hyderabad",
            templateUrl: "views/scala.html",
            controller: "",
            label: "Scala"
        })
        .when("/big-data/spark",
        {
            title: "Apache Spark Training in Hyderabad | Big Data Hadoop Training | Pro-elearning",
            description: "Job oriented Apache Spark training in Hyderabad with 100% placement assistance and from industry experts. Enroll now for ✓FREE DEMO ☎ +91-7901401499.",
            keywords: "Spark and Scala training in Hyderabad, Hadoop training in Hyderabad, Big data training in Hyderabad, Scala Institute Hyderabad, best training institute for Scala in Hyderabad, Institute for Scala  in Hyderabad",
            templateUrl: "views/spark.html",
            controller: "",
            label: "Spark"
        })
            .when("/big-data/hadoop-administrator",
                    {
            title: "Hadoop Admin Training in Hyderabad | Pro-elearning",
            description: "Enroll in Hadoop Administration training course in Hyderabad to master configurations of Hadoop with an instructor-led training.",
            keywords: "Best Hadoop Admin Training institutes in Hyderabad, Big Data Hadoop Admin training in Hyderabad, Hadoop Admin institutes in Hyderabad, Hadoop Training, Hadoop Course, Hadoop training in Madhapur, Hadoop Admin developer training, Hadoop Admin developer training in Hyderabad",
            templateUrl: "views/hadoop-administrator.html",
            controller: "",
            label: "Hadoop Admin"
        })
            .when("/big-data/hp-vertica",
                    {
            title: "HP Vertica Training in Hyderabad | Pro-elearning",
            description: "Enroll today with Pro-elearning for Hp vertica training in Hyderabad and get trained by experts. Best Hp vertica course in Hyderabad.",
            keywords: "HP vertica training institute in Hyderabad, Hp vertica online Training institute in Hyderabad, Hp vertica Classroom Training institute in Hyderabad, Hp vertica course in Hyderabad, Hp vertica Training in Hyderabad, Hp vertica online Training in Hyderabad, Hp vertica classroom Training in Hyderabad",
            templateUrl: "views/hp-vertica.html",
            controller: "",
            label: "HP Vertica"
        })
            .when("/big-data/talend",
                    {
            title: "Talend Online-Classroom Training in Hyderabad | Pro-elearning",
            description: "Pro-elearning provide Talend Online and classroom Training with best practices, tuning tips, enterprise edition training, certification training, code review topics for leads and managers.",
            keywords: "talend training, talend online training, talend training in Hyderabad, talend online training in Hyderabad, talend etl tool training, talend etl tool training in Hyderabad, talend training in Madhapur, talend etl tool online training, talend data integration training in Hyderabad, best online training centre in Hyderabad",
            templateUrl: "views/talend.html",
            controller: "",
            label: "Talend"
        })
            .when("/big-data/cloudera",
                    {
            title: "Cloudera Administrator Training in Hyderabad | Pro-elearning",
            description: "Enroll in Hadoop Administration training course in Hyderabad to master configurations of Hadoop with an instructor-led training. Get Hadoop Admin certified now!",
            keywords: "Cloudera Administrator Training institute in Hyderabad, Cloudera Administrator online Training institute in Hyderabad, Cloudera Administrator Classroom Training institute in Hyderabad, Cloudera Administrator course in Hyderabad, Cloudera Administrator Training in Hyderabad, Cloudera Administrator online Training in Hyderabad, Cloudera Administrator classroom Training in Hyderabad",
            templateUrl: "views/cloudera.html",
            controller: "",
            label: "Cloudera"
        })
            .when("/business-intelligence",
                    {
            title: "Business Intelligence Course in Hyderabad | Pro-elearning",
            description: "Pro-elearning offers best Business Intelligence courses in Hyderabad such as MSBI, OBIEE, and Power BI with expert faculty. ✓100% job assistance ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Business Intelligence course in Hyderabad, Business Intelligence training institutes in Hyderabad, MSBI Institutes in Hyderabad, MSBI Online training Hyderabad, MSBI Training institutes in Hyderabad, OBIEE online training in Hyderabad, OBIEE 11g training in Hyderabad, OBIEE course in Hyderabad, Power BI training institutes in Hyderabad, Power BI institutes in Hyderabad",
            templateUrl: "views/business-intelligence.html",
            controller: "",
            label: "Business Intelligence"
        })
            .when("/business-intelligence/msbi",
                    {
            title: "Best MSBI Training Institute in Hyderabad | Pro-elearning",
            description: "Pro-elearning, being one of the Best MSBI Training institutes in Hyderabad provides a first-rate training that can serve the needful. Enroll Today!",
            keywords: "Business intelligence training institute in Hyderabad, Business intelligence training institutes in Hyderabad, Business intelligence training in Hyderabad, Business intelligence institutes in Hyderabad, Business intelligence training centres in Hyderabad, best Business intelligence training centres in Hyderabad, best Business intelligence training institutes in Hyderabad, Business intelligence courses in Hyderabad",
            templateUrl: "views/msbi.html",
            controller: "",
            label: "MSBI"
        })
            .when("/business-intelligence/obiee",
                    {
            title: "OBIEE Training in Hyderabad | Pro-elearning",
            description: "Pro-elearning provides real-time and placement focused OBIEE training in Hyderabad. Our oracle business intelligence (OBIEE) course includes basic to advanced level.",
            keywords: "obiee training in Hyderabad, oracle business intelligence (OBIEE) training institutes Hyderabad, best OBIEE training centre in Hyderabad, Oracle BI certification training Hyderabad, obiee training and placement in Hyderabad",
            templateUrl: "views/obiee.html",
            controller: "",
            label: "OBIEE"
        })
            .when("/business-intelligence/power-bi",
                    {
            title: "Power BI Course in Hyderabad | Power BI Training | Pro-elearning",
            description: "Enroll for Power BI course in Hyderabad with job oriented training and expert trainers in the industry. ✓100% job assistance. ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Power BI institutes in Hyderabad, Power BI Course in Hyderabad, Power BI training institutes in Hyderabad, Power BI Training in Hyderabad, Best Power BI training institutes in Hyderabad, Power BI Online training in Hyderabad",
            templateUrl: "views/power-bi.html",
            controller: "",
            label: "Power BI"
        })
            .when("/erp",
                    {
            title: "ERP Training Institute in Hyderabad | Enterprise Resource Planning | Pro-elearning",
            description: "Pro-elearning is the best Oracle and SAP ERP training in institute in Hyderabad with industry expert coaching. ✓100% job assistance ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Oracle HRMS training in Hyderabad, Oracle HRMS functional training in Hyderabad, PeopleSoft HRMS training institutes in Hyderabad, Best salesforce CRM training institutes in Hyderabad, Salesforce CRM institutes in Hyderabad, Oracle Apps training institutes in Hyderabad, SAP  BI training in Hyderabad, Best SAP BI training institutes in Hyderabad, SAS BI training institutes in Hyderabad",
            templateUrl: "views/erp.html",
            controller: "",
            label: "ERP"
        })
            .when("/erp/people-soft-hrms",
                    {
            title: "PeopleSoft HRMS Training in Hyderabad | Pro-elearning",
            description: "Pro-elearning is the best PeopleSoft HRMS Functional Training institute in Hyderabad and providing IT End-to-End training with real-time hands-on exposure through the IT Experts.",
            keywords: "People Soft HRMS training institutes in Hyderabad, best HRMS functional training in Hyderabad, HRMS training institutes in Hyderabad, PeopleSoft HRMS institutes in Hyderabad, People Soft HRMS online training Hyderabad",
            templateUrl: "views/people-soft-hrms.html",
            controller: "",
            label: "PeopleSoft HRMS"
        })
            .when("/erp/salesforce-crm",
                    {
            title: "Salesforce CRM Training in Hyderabad | SAP CRM | Pro-elearning",
            description: "Pro-elearning offers Best Salesforce CRM Training in Hyderabad with certified trainers providing both Online and Class room training. Call us to attend a FREE DEMO! ☎ +91-7901401499.",
            keywords: "Salesforce CRM Training in Hyderabad, Salesforce CRM online training, CRM training in Hyderabad, SAP CRM training in Hyderabad, Best institute for sap CRM in Hyderabad, SAP CRM technical training in Hyderabad, Salesforce CRM  institutes in Hyderabad, Salesforce CRM training institutes in Hyderabad, Best salesforce CRM training institutes in Hyderabad, SAP CRM online training in Hyderabad",
            templateUrl: "views/salesforce-crm.html",
            controller: "",
            label: "Salesforce CRM"
        })
            .when("/erp/oracle-apps",
                    {
            title: "Best Oracle Apps training Institute in Hyderabad | Pro-elearning",
            description: "Pro-elearning, One of the Best Institutes for Oracle Apps in Hyderabad providing Real-time training with trainers having 8+ years of Experience. Attend FREE DEMO! ☎ +91-7901401499.",
            keywords: "Oracle Apps training in Hyderabad, Oracle Apps institutes in Hyderabad, Oracle Apps real time training in Hyderabad, Oracle Apps training institutes in Hyderabad, Oracle Apps online training in Hyderabad, Oracle apps best institute in Hyderabad, Best Oracle apps training in Hyderabad, Oracle Apps training placement institutes Hyderabad",
            templateUrl: "views/oracle-apps.html",
            controller: "",
            label: "Oracle Apps"
        })
            .when("/erp/sap-bi",
                    {
            title: "SAP BI training in Hyderabad | Best SAP BI Institute | Pro-elearning",
            description: "Best SAP BI training in Hyderabad with expert trainers and 100% job assistance. Offers classroom and online training as well. ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "SAP BI training in Hyderabad, Best SAP BI training institutes in Hyderabad, SAP BI best institutes in Hyderabad, best SAP BI institutes in Hyderabad, SAP BI best training institute Hyderabad, SAP BI coaching Hyderabad, SAP BI training institutes in Hyderabad, best training institute for SAP BI in Hyderabad, best institute for SAP BI in Hyderabad",
            templateUrl: "views/sap-bi.html",
            controller: "",
            label: "SAP BI"
        })
            .when("/erp/sap-bo",
                    {
            title: "SAP BO Training in Hyderabad | SAP Business Objects | Pro-elearning",
            description: "Get trained in Hyderabad’s Best SAP BO training Institute and excel your career. Pro-elearning provides real-time coaching for SAP Business Objects. ✓FREE DEMO ✓100% job assistance. ☎ +91-7901401499.",
            keywords: "SAP BO training in Hyderabad, SAP BO online training in Hyderabad, best SAP BO institutes in Hyderabad, SAP BO training institutes in Hyderabad, best SAP BO training institute in Hyderabad, SAP BO institutes in Hyderabad, best institute for SAP BO in Hyderabad, SAP BO best institutes in Hyderabad, SAP BI BO training in Hyderabad, SAP BI BO institutes Hyderabad",
            templateUrl: "views/sap-bo.html",
            controller: "",
            label: "SAP BO"
        })
            .when("/erp/sap-crm",
                    {
            title: "SAP CRM Training in Hyderabad | Best SAP Institute | Pro-elearning",
            description: "Pro-elearning provides best SAP CRM functional/Technical Training in Hyderabad. Enroll now to get expert coaching with 100% job assistance. ✓FREE DEMO ☎ +91-7901401499.",
            keywords: "SAP CRM Training in Hyderabad, SAP CRM technical institutes Hyderabad, SAP CRM coaching centers in Hyderabad, SAP CRM functional training institutes in Hyderabad, SAP CRM training institutes in Hyderabad, SAP CRM technical training institutes in Hyderabad, best SAP CRM training institutes in Hyderabad",
            templateUrl: "views/sap-crm.html",
            controller: "",
            label: "SAP CRM"
        })
            .when("/erp/sap-fico",
                    {
            title: "Best Institute for SAP FICO in Hyderabad | Pro-elearning",
            description: "Pro-elearning is the Best Institute for SAP FICO in Hyderabad with expert industry professionals. ✓100% job assistance ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Best Institute for SAP FICO in Hyderabad, SAP FICO course in Hyderabad, SAP FICO online training in Hyderabad, best SAP FICO training institutes in Hyderabad, SAP FICO institutes in Hyderabad with placement, SAP FICO institutes in Hyderabad, SAP FICO training institutes in Hyderabad, SAP FICO coaching centers in Hyderabad",
            templateUrl: "views/sap-fico.html",
            controller: "",
            label: "SAP FICO"
        })
            .when("/erp/sap-hana",
                    {
            title: "Best Institute for SAP HANA in Hyderabad | SAP  HANA Training | Pro-elearning",
            description: "Pro-elearning is the Best Institute for SAP HANA in Hyderabad providing outstanding training with certified trainers and 100% job assistance. ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "SAP HANA institutes in Hyderabad, HANA training in Hyderabad, SAP HANA training and placement in Hyderabad, SAP HANA training institutes in Hyderabad, SAP HANA course in Hyderabad, best SAP HANA training institutes in Hyderabad, SAP HANA coaching centers in Hyderabad, SAP HANA training institute Hyderabad",
            templateUrl: "views/sap-hana.html",
            controller: "",
            label: "SAP HANA"
        })
            .when("/erp/sap-mm",
                    {
            title: "SAP MM Training in Hyderabad | SAP Material Management | Pro-elearning",
            description: "Get the best SAP MM training in Hyderabad with Certified trainers of 8+ years of experience and assured placement support. ✓FREE DEMO ☎ +91-7901401499.",
            keywords: "SAP MM institutes in Hyderabad, SAP MM online training in Hyderabad, SAP MM coaching centers in Hyderabad, best SAP MM training institutes in Hyderabad ,SAP MM training institutes in Hyderabad, best institute for SAP MM in Hyderabad, SAP MM best institute in Hyderabad",
            templateUrl: "views/sap-mm.html",
            controller: "",
            label: "SAP MM"
        })
            .when("/erp/sas",
                    {
            title: "Learn SAS Course @ Best SAS Training Institute in Hyderabad | Pro-elearning",
            description: "Pro-elearning will assist you to master SAS Course with expert trainers in the industry. It’s the best SAS training institute in Hyderabad with 100% job assistance and real-time projects. ✓FREE DEMO ☎ +91-7901401499.",
            keywords: "SAS institute in Hyderabad, SAS course in Hyderabad, institutes offering SAS course in Hyderabad, SAS best institute in Hyderabad, SAS training courses in Hyderabad, SAS certification institutes in Hyderabad, SAS training and placement in Hyderabad, SAS institutes in hyd",
            templateUrl: "views/sas.html",
            controller: "",
            label: "SAS"
        })
            .when("/erp/sas-clinical-research",
                    {
            title: "Clinical SAS Training in Hyderabad | Clinical SAS Training | Pro-elearning",
            description: "Pro-elearning is the leading institute for Clinical SAS Training in Hyderabad. We provide real-time training with 100% placement support. Enrol now to attend FREE DEMO ☎ +91-7901401499.",
            keywords: "clinical SAS training in Hyderabad, clinical SAS training institutes in Hyderabad, clinical SAS training Hyderabad, best clinical SAS training institutes in Hyderabad, clinical SAS training and placement in Hyderabad, clinical SAS institutes in Hyderabad, clinical SAS course in Hyderabad",
            templateUrl: "views/sas-clinical-research.html",
            controller: "",
            label: "Clinical SAS"
        })
            .when("/erp/sas-bi",
                    {
            title: "Best SAS BI Training in Hyderabad | SAS Business Intelligence | Pro-elearning",
            description: "Pro-elearning, best institute for SAS BI training in Hyderabad provides both online & classroom training with 100% job assistance. Enrol now to attend FREE DEMO! ☎ +91-7901401499.",
            keywords: "BI institutes in Hyderabad, SAS BI online training Hyderabad, SAS BI training institutes in Hyderabad",
            templateUrl: "views/sas-bi.html",
            controller: "",
            label: "SAS BI"
        })
            .when("/etl",
                    {
            title: "ETL Training in Hyderabad | Pro-elearning",
            description: "Enroll for the best ETL tools training in Hyderabad @ Pro-elearning with real-time coaching and 100% job assistance. ✓DataStage ✓Informatica ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "ETL tools training in Hyderabad, DataStage online training in Hyderabad, Informatica training institutes in Hyderabad, Informatica MDM training in Hyderabad, Informatica MDM training institutes in Hyderabad",
            templateUrl: "views/etl.html",
            controller: "",
            label: "ETL"
        })
            .when("/etl/datastage",
                    {
            title: "DataStage Training in Hyderabad | DataStage Course | Pro-elearning",
            description: "Pro-elearning provides best DataStage Training in Hyderabad with expert trainers in the industry. We provide 100% job assistance. Enrol now to attend FREE DEMO! ☎ +91-7901401499.",
            keywords: "DataStage online training in Hyderabad, DataStage training institutes in Hyderabad, DataStage course in Hyderabad, best DataStage training institute in Hyderabad, best training institute for DataStage in Hyderabad, best institute for DataStage in Hyderabad",
            templateUrl: "views/datastage.html",
            controller: "",
            label: "DataStage"
        })
            .when("/etl/informatica",
                    {
            title: "Informatica Training in Hyderabad | Informatica Online Training | Pro-elearning",
            description: "Pro-elearning, a specialized institute for Informatica Training in Hyderabad provides real-time placement focused coaching. ✓100% job assistance ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Informatica online training in Hyderabad, Informatica training institutes in Hyderabad, best institute for Informatica in Hyderabad, Informatica training and placement institutes in Hyderabad, best Informatica training institute in Hyderabad, Informatica coaching centers in Hyderabad, best training centre for Informatica in Hyderabad, best Informatica training in Hyderabad",
            templateUrl: "views/informatica.html",
            controller: "",
            label: "Informatica"
        })
            .when("/etl/informatica-mdm",
                    {
            title: "Best Informatica MDM training in Hyderabad | Pro-elearning",
            description: "Get the best Informatica MDM training in Hyderabad @ Pro-elearning with expert trainers both online and in classroom. ✓100% job assistance ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Informatica MDM training in Hyderabad, Informatica MDM training institutes in Hyderabad, Informatica MDM classroom training in Hyderabad, Informatica MDM online training in Hyderabad",
            templateUrl: "views/informatica-mdm.html",
            controller: "",
            label: "Informatica MDM"
        })
            .when("/business-management",
                    {
            title: "Business Management Courses in Hyderabad | Pro-elearning",
            description: "Enroll for the best Business management courses in Hyderabad with expert trainers and 100% job assistance. ✓JBPM ✓Pega 6.2 & 7 ✓Business Analyst ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "JBPM training institute in Hyderabad, Pega training in Hyderabad, Pega training institutes in Hyderabad, Business analyst course in Hyderabad, Business analyst online training in Hyderabad, Business analyst training and placement in Hyderabad, BA-BFSI Training in Hyderabad, best institute for BA-BFSI in Hyderabad, Business Analyst healthcare Hyderabad, BA Healthcare Training Institute in Hyderabad, Institute for BA healthcare in Hyderabad, BA FINANCE Training in Hyderabad, Business Analyst Finance training in Hyderabad, QuickBooks Training in Hyderabad, QuickBooks Training institutes in Hyderabad, Technical Manager Training in Hyderabad, best institute for Technical Manager Training in Hyderabad",
            templateUrl: "views/business-mgmt.html",
            controller: "",
            label: "Business Management"
        })
            .when("/business-management/jbpm",
                    {
            title: "JBPM Training in Hyderabad | Best Institute for JBPM | Pro-elearning",
            description: "Pro-elearning, top rated institution for JBPM Training in Hyderabad provides Both Online and classroom with expert trainers. ✓100% job assistance ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "JBPM training institute in Hyderabad, best institute for JBPM in Hyderabad, JBPM Coaching centre in Hyderabad, JBPM course in Hyderabad",
            templateUrl: "views/jbpm.html",
            controller: "",
            label: "JBPM"
        })
            .when("/business-management/pega-6.2",
                    {
            title: "Best PEGA 6.2 Training in Hyderabad | PEGA Course | Pro-elearning",
            description: "Pro-elearning is the best institute for PEGA 6.2 version training in Hyderabad with real-time coaching and industry expert trainers. ✓100% job assistance ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Pega training in Hyderabad, Pega training institutes in Hyderabad, pega institutes in Hyderabad, Pega coaching in Hyderabad, best Pega training institute in Hyderabad, best Pega training in Hyderabad, Pega real time training in Hyderabad, best institute for Pega in Hyderabad",
            templateUrl: "views/pega-6.2.html",
            controller: "",
            label: "PEGA 6.2"
        })
            .when("/business-management/pega-7",
                    {
            title: "Best PEGA 7 Training in Hyderabad | PEGA Course | Pro-elearning",
            description: "Pro-elearning offers best PEGA prpc 7 version training in Hyderabad with most experienced trainers in the industry. ✓100% job assistance ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Pega training in Hyderabad, Pega training institutes in Hyderabad, pega institutes in Hyderabad, Pega coaching in Hyderabad, best Pega training institute in Hyderabad, best Pega training in Hyderabad, Pega real time training in Hyderabad, best institute for Pega in Hyderabad",
            templateUrl: "views/pega-7.html",
            controller: "",
            label: "PEGA 7"
        })
            .when("/business-management/business-analyst",
                    {
            title: "Business Analyst Training in Hyderabad | Business Analyst Course | Pro-elearning",
            description: "Pro-elearning is the leading Business Analyst Training Institute in Hyderabad with top expert trainers in the industry. We provide 100% Placement support. ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Business analyst course in Hyderabad, Business analyst online training in Hyderabad, Business analyst training and placement in Hyderabad, Business analyst course in Hyderabad with placement, best Business analyst training in Hyderabad, Business analyst institute in Hyderabad, Business analyst training institutes in Hyderabad",
            templateUrl: "views/business-analyst.html",
            controller: "",
            label: "Business Analyst"
        })
            .when("/business-management/ba-bfsi",
                    {
            title: "BA-BFSI Training in Hyderabad | Business Analyst-BFSI Course | Pro-elearning",
            description: "Pro-elearning provides the best BA-BFSI Training in Hyderabad both online and classroom with industry expert trainers. Provides 100% job support. ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "BA-BFSI Training in Hyderabad, best institute for BA-BFSI in Hyderabad, training institute for BA-BFSI in Hyderabad",
            templateUrl: "views/ba-bfsi.html",
            controller: "",
            label: "BA-BFSI"
        })
            .when("/business-management/ba-health-care",
                    {
            title: "BA Healthcare Training in Hyderabad | Business Analyst Healthcare | Pro-elearning",
            description: "Get Business Analyst with Healthcare training in Hyderabad@ Pro-elearning with real-time coaching by industry expert trainers. ✓100% job assistance ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Business Analyst healthcare Hyderabad, BA Healthcare Training Institute in Hyderabad, Institute for BA healthcare in Hyderabad, best institute for BA Healthcare on Hyderabad",
            templateUrl: "views/ba-health-care.html",
            controller: "",
            label: "BA Healthcare"
        })
            .when("/business-management/ba-finance",
                    {
            title: "BA-Finance Training in Hyderabad | Business Analyst Finance | Pro-elearning",
            description: "Pro-elearning is the best institute to provide Business Analyst with finance domain training in Hyderabad with expert trainers and 100% job assistance. ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "BA Finance Training in Hyderabad, Business Analyst Finance training in Hyderabad, Institute for Business Analyst Finance in Hyerabad",
            templateUrl: "views/ba-finance.html",
            controller: "",
            label: "BA Finance"
        })
            .when("/business-management/quickbooks",
                    {
            title: "QuickBooks Training in Hyderabad | QuickBooks Online Training | Pro-elearning",
            description: "Learn QuickBooks Training in Hyderabad by expert trainers in the industry with 100% job assistance at Pro-elearning. ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "QuickBooks Training in Hyderabad, QuickBooks Training institutes in Hyderabad, QuickBooks coaching Hyderabad, QuickBooks institute Hyderabad, QuickBooks training centers in Hyderabad",
            templateUrl: "views/quickbooks.html",
            controller: "",
            label: "QuickBooks"
        })
            .when("/business-management/technical-manager",
                    {
            title: "Technical Manager Training in Hyderabad | Technical Manager Course | Pro-elearning",
            description: "Pro-elearning is the best institute for Technical Manager Training in Hyderabad. We provide real-time coaching by industry expert trainers. ✓100% job Assistance ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Technical Manager Training in Hyderabad, best institute for Technical Manager Training in Hyderabad, Technical Manager institutes in Hyderabad, Technical Manager coaching centres in Hyderabad",
            templateUrl: "views/technical-manager.html",
            controller: "",
            label: "Technical Manager"
        })
        .when("/business-management/togaf",
                    {
            title: "TOGAF Best on-line coaching | TOGAF Training | Pro-elearning",
            description: "Pro-elearning, a specialized institute for TOGAF coaching in Hyderabad provides time period placement targeted employment. ✓FREE DEMO! ☎ 7901401499",
            keywords: "Togaf, TOGAF Training institute in Hyderabad, TOGAF online Training institute in Hyderabad, TOGAF Classroom Training institute in Hyderabad, TOGAF course in Hyderabad, TOGAF Training in Hyderabad, TOGAF online Training in Hyderabad, TOGAF classroom Training in Hyderabad",
            templateUrl: "views/togaf.html",
            controller: "",
            label: "TOGAF"
        })
        .when("/business-management/pmp",
                    {
            title: "PMP Online-Classroom coaching in Hyderabad | PMP Virtual Training | Pro-elearning",
            description: "By this virtual training environment you will become a skilled in PMP Trained by IT consultants in Hyderabad. Pro-elearning provides Best online and Offline PMP coaching to Job Seekers and IT workers.",
            keywords: "PMP Training institute in Hyderabad, PMP online Training institute in Hyderabad, PMP Classroom Training institute in Hyderabad, Project Management Professional (PMP) course in Hyderabad, PMP Training in Hyderabad, PMP online Training in Hyderabad, PMP virtual Training in Hyderabad",
            templateUrl: "views/pmp.html",
            controller: "",
            label: "PMP"
        })
        .when("/business-management/six-sigma",
                    {
            title: "Best Online Training | Six Sigma Best Training | Six Sigma Virtual Training | Pro-elearning",
            description: "Learn Six Sigma course with basic fundamentals to advanced concepts from experts with hands-on practical exposure from best institute Pro-elearning. Enrol now to attend FREE DEMO! ☎ +91-7901401499.",
            keywords: "Six sigma, lean six sigma, 6 sigma, six sigma course, six sigma Training institute in Hyderabad, six sigma online Training institute in Hyderabad, six sigma Virtual Training institute in Hyderabad, six sigma course in Hyderabad, six sigma Training in Hyderabad, six sigma online Training in Hyderabad, six sigma best online coaching in Hyderabad",
            templateUrl: "views/six-sigma.html",
            controller: "",
            label: "Six Sigma"
        })
            .when("/analytical-tools",
                    {
            title: "Analytics Training Institute in Hyderabad | Analytical Courses | Pro-elearning",
            description: "Pro-elearning is the best Analytics Training Institute in Hyderabad with 100% job assistance and real-time coaching. ✓Tableau ✓Remedy Ticketing Tool ✓Qlikview ✓TIBCO Spotfire. FREE DEMO! ☎ +91-7901401499.",
            keywords: "Tableau online training in Hyderabad, Tableau course in Hyderabad, Tableau institutes in Hyderabad, Remedy Ticketing Tool Training in Hyderabad, BMC Remedy Training in Hyderabad, best BMC Remedy Training in Hyderabad, Qlikview training in Hyderabad, Qlikview online training in Hyderabad, Qlikview training institutes in Hyderabad, Tibco training in Hyderabad, Tibco Spotfire training institutes in Hyderabad, Tibco online training in Hyderabad",
            templateUrl: "views/analytical-tools.html",
            controller: "",
            label: "Analytical Tools"
        })
            .when("/analytical-tools/tableau",
                    {
            title: "Tableau Course in Hyderabad | Tableau Training | Pro-elearning",
            description: "Learn advanced Tableau Online & Classroom course by 8+ years experienced expert trainers with 100% job assistance. ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Tableau online training in Hyderabad, Tableau course in Hyderabad, Tableau institutes in Hyderabad, Tableau training institutes in Hyderabad, best institute for Tableau in Hyderabad, Tableau training and placement in Hyderabad, Tableau coaching in Hyderabad, best Tableau training institute in Hyderabad, Tableau coaching centers in Hyderabad",
            templateUrl: "views/tableau.html",
            controller: "",
            label: "Tableau"
        })
            .when("/analytical-tools/remedy-ticketing-tool",
                    {
            title: "Remedy Ticketing Tool Training in Hyderabad | BMC Remedy | Pro-elearning",
            description: "Get intense Remedy Ticketing Tool Training in Hyderabad at Pro-elearning institute with industry expert trainers. ✓100% job assistance. ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Remedy Ticketing Tool Training in Hyderabad, BMC Remedy Training in Hyderabad, best BMC Remedy Training in Hyderabad, Institute for BMC Remedy in Hyderabad, Remedy training in Hyderabad",
            templateUrl: "views/remedy-ticketing-tool.html",
            controller: "",
            label: "Remedy Ticketing Tool"
        })
            .when("/analytical-tools/qlikview",
                    {
            title: "Best Qlikview Training in Hyderabad | Qlikview Online Training | Pro-elearning",
            description: "Pro-elearning is the best Qlikview Training Institute in Hyderabad with 100% placement record and job oriented training by expert trainers. ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Qlikview training in Hyderabad, Qlikview online training in Hyderabad, Qlikview training institutes in Hyderabad, Qlikview institutes in Hyderabad, Qlikview training and placement in Hyderabad, best Qlikview training institutes in Hyderabad, Qlikview coaching in Hyderabad, best Qlikview training in Hyderabad",
            templateUrl: "views/qlikview.html",
            controller: "",
            label: "Qlikview"
        })
            .when("/analytical-tools/tibco-spotfire",
                    {
            title: "Best Tibco Spotfire Training in Hyderabad | Tibco Training | Pro-elearning",
            description: "Pro-elearning offers best Tibco Spotfire Training in Hyderabad with real-time and placement oriented training by certified experts. ✓100% job assistance. ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Tibco training in Hyderabad, Tibco Spotfire training institutes in Hyderabad, Tibco online training in Hyderabad, Tibco training institutes in Hyderabad, Tibco institutes in Hyderabad, Tibco coaching in Hyderabad",
            templateUrl: "views/tibco-spotfire.html",
            controller: "",
            label: "Tibco Spotfire"
        })
            .when("/software-testing",
                    {
            title: "Software Testing Course in Hyderabad | Testing Tools | Pro-elearning",
            description: "Pro-elearning offers the best Software testing course in Hyderabad with certified trainers and 100% job assistance. ✓Perfecto ✓Load Runner ✓Selenium ✓ETL Testing ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Testing tools training in Hyderabad, testing institutes in Hyderabad, Perfecto Training in Hyderabad, Mobile apps testing in Hyderabad, mobile apps testing institute in Hyderabad, best institute for LoadRunner in Hyderabad, best LoadRunner training in Hyderabad, selenium online training in Hyderabad, selenium training institutes in Hyderabad, ETL testing institutes in Hyderabad, ETL testing training institutes in Hyderabad, Penetration testing training in Hyderabad, Penetration testing Hyderabad",
            templateUrl: "views/software-testing.html",
            controller: "",
            label: "Software Testing"
        })
            .when("/software-testing/perfecto",
                    {
            title: "Perfecto Training in Hyderabad | Mobile Application Testing | Pro-elearning",
            description: "Pro-elearning is the best institute for Perfecto (Mobile Application Testing) Training in Hyderabad. Get trained with expert trainers. ✓100% job assistance ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Perfecto Training in Hyderabad, Mobile Application testing in Hyderabad, Mobile apps testing in Hyderabad, mobile apps testing institute in Hyderabad, Mobile application testing institute in Hyderabad",
            templateUrl: "views/perfecto.html",
            controller: "",
            label: "Perfecto"
        })
            .when("/software-testing/loadrunner",
                    {
            title: "Best Load Runner Training in Hyderabad | LoadRunner Testing | Pro-elearning",
            description: "Best LoadRunner training institute in Hyderabad with 100% placement record and real-time expert training. ✓100% job assistance ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "best institute for LoadRunner in Hyderabad, best LoadRunner training in Hyderabad, LoadRunner online training in Hyderabad, LoadRunner training institutes in Hyderabad",
            templateUrl: "views/loadrunner.html",
            controller: "",
            label: "Load Runner"
        })
            .when("/software-testing/selenium",
                    {
            title: "Selenium Training in Hyderabad | Selenium Testing Course | Pro-elearning",
            description: "Enroll today at Pro-elearning for the best Selenium Training in Hyderabad with placement oriented coaching and 10% job assistance. Call us to attend a FREE DEMO! ☎ +91-7901401499.",
            keywords: "best institute for selenium in Hyderabad, selenium online training in Hyderabad, selenium training institutes in Hyderabad, best selenium training in Hyderabad, selenium course in Hyderabad, selenium institutes in Hyderabad, selenium coaching in Hyderabad",
            templateUrl: "views/selenium.html",
            controller: "",
            label: "Selenium"
        })
            .when("/software-testing/etl-testing",
                    {
            title: "ETL Testing Training in Hyderabad | ETL Testing Course | Pro-elearning",
            description: "Join the best ETL Testing Training institute in Hyderabad with expert trainers of 8+ years experience and placement oriented coaching. ✓100% job assistance ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "ETL testing institutes in Hyderabad, ETL testing training institutes in Hyderabad, ETL testing course in Hyderabad, ETL testing Hyderabad, best institute ETL testing Hyderabad, best ETL testing institutes in Hyderabad, best ETL testing training institutes in Hyderabad, best institute for ETL testing in Hyderabad, ETL testing online training in Hyderabad",
            templateUrl: "views/etl-testing.html",
            controller: "",
            label: "ETL Testing"
        })
            .when("/software-testing/web-app-penetration-testing",
                    {
            title: "Web Application Penetration Testing Training in Hyderabad | Pro-elearning",
            description: "Enroll for the best Web Application Testing Training in Hyderabad with expert trainers in Web Application Security field. ✓100% job assistance ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Penetration testing training in Hyderabad, Penetration testing Hyderabad, Penetration testing training institutes in Hyderabad, Penetration testing institutes in Hyderabad",
            templateUrl: "views/web-app-pen-testing.html",
            controller: "",
            label: "Web Application Penetration Testing"
        })
            .when("/hyperion",
                    {
            title: "Oracle Hyperion Training in Hyderabad | Pro-elearning",
            description: "Enroll for Oracle Hyperion training in Hyderabad with expert trainers and 100% job assistance. ✓HPCM ✓EPM ✓ESSBASE ✓Financial Management. ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Hyperion training institutes in Hyderabad, Hyperion HPCM course in Hyderabad, Oracle Hyperion HPCM training in Hyderabad, Hyperion epm training in Hyderabad, Hyperion essbase training institute in Hyderabad, Oracle Hyperion Essbase institutes in Hyderabad, Oracle Hyperion training in Hyderabad, HFM training in Hyderabad, HFM institutes in Hyderabad, HFM training institutes in Hyderabad",
            templateUrl: "views/hyperion.html",
            controller: "",
            label: "Hyperion"
        })
            .when("/hyperion/hpcm",
                    {
            title: "Hyperion HPCM Training in Hyderabad | Profitability and Cost Management Course | Pro-elearning",
            description: "Get the best Oracle Hyperion Profitability and Cost Management (HPCM) training in Hyderabad @ Pro-elearning with industry experts. ✓100% job assistance ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Hyperion HPCM course in Hyderabad, Oracle Hyperion HPCM training in Hyderabad, Hyperion hpcm training institute in Hyderabad, Hyperion essbase training in Hyderabad, Hyperion institutes in Hyderabad, Hyperion training institutes in Hyderabad",
            templateUrl: "views/hpcm.html",
            controller: "",
            label: "Hyperion HPCM"
        })
            .when("/hyperion/hyperion-epm",
                    {
            title: "Best Oracle Hyperion EPM Training in Hyderabad | Pro-elearning",
            description: "Pro-elearning offers the best Oracle Hyperion Enterprise Performance Management (EPM) training in Hyderabad with real-time coaching and expert trainers. ✓100% job assistance ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Hyperion training in Hyderabad, best institute for Hyperion in Hyderabad, Hyperion epm training in Hyderabad, Oracle Hyperion training in Hyderabad, Oracle Hyperion course in Hyderabad",
            templateUrl: "views/hyperion-epm.html",
            controller: "",
            label: "Hyperion EPM"
        })
            .when("/hyperion/hyperion-essbase",
                    {
            title: "Oracle Hyperion Essbase Training in Hyderabad | Pro-elearning",
            description: "Pro-elearning offers finest Oracle Hyperion Essbase training in Hyderabad with certified industry experts. ✓100% job assistance ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Hyperion essbase training institute in Hyderabad, Oracle Hyperion Essbase institutes in Hyderabad, Oracle Hyperion training in Hyderabad, Hyperion institutes in Hyderabad, Hyperion Course in Hyderabad, essbase training institute in Hyderabad",
            templateUrl: "views/hyperion-essbase.html",
            controller: "",
            label: "Hyperion Essbase"
        })
            .when("/hyperion/hyperion-financial-management",
                    {
            title: "Best Hyperion Financial Management (HFM) Training in Hyderabad | Pro-elearning",
            description: "Enroll for Oracle HFM training in Hyderabad and get trained with expert trainers. We Provide 100% Job Assistance. ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "HFM training in Hyderabad, HFM institutes in Hyderabad, HFM training institutes in Hyderabad, Hyperion HFM training in Hyderabad, HFM course in Hyderabad",
            templateUrl: "views/hyperion-financial-management.html",
            controller: "",
            label: "Hyperion Financial Management"
        })
            .when("/ibm",
                    {
            title: "IBM Certification Courses in Hyderabad | Pro-elearning",
            description: "Enroll for IBM Certification Courses in Hyderabad with real-time coaching and 100% job assistance. ✓WebFocus ✓Websphere admin ✓Websphere Message Broker. FREE DEMO! ☎ +91-7901401499.",
            keywords: "Webfocus course in Hyderabad, Institutes for IBM Webfocus training in Hyderabad, best websphere training institute in Hyderabad, IBM websphere admin institutes in Hyderabad, websphere admin training institutes in Hyderabad, Message broker training Hyderabad, IBM message broker training in Hyderabad",
            templateUrl: "views/ibm.html",
            controller: "",
            label: "IBM"
        })
            .when("/ibm/webfocus",
                    {
            title: "IBM WebFocus Training in Hyderabad | WebFocus Online Course | Pro-elearning",
            description: "Pro-elearning provides the best IBM WebFocus training in Hyderabad with hands-on practical classes with certified professionals. ✓Placement assistance ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Webfocus course in Hyderabad, Institutes for IBM Webfocus training in Hyderabad, best institute for webfocus in Hyderabad, IBM Webfocus training institute in Hyderabad",
            templateUrl: "views/webfocus.html",
            controller: "",
            label: "Webfocus"
        })
            .when("/ibm/websphere-admin",
                    {
            title: "IBM  WebSphere Admin Training in Hyderabad | Pro-elearning",
            description: "Pro-elearning is the best institute for advanced  IBM Websphere admin training in Hyderabad providing quality and hands-on experience classes. ✓100% job support ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "best  websphere training institute in Hyderabad,  IBM websphere admin institutes in Hyderabad,  WebSphere course in Hyderabad, websphere admin training institutes in Hyderabad, IBM websphere institutes in Hyderabad",
            templateUrl: "views/websphere-admin.html",
            controller: "",
            label: "WebSphere Admin"
        })
            .when("/ibm/websphere-message-broker",
                    {
            title: "WebSphere Message Broker Training in Hyderabad | IBM Integration Bus 9.0 | Pro-elearning",
            description: "Enroll for the best IBM WebSphere message broker training in Hyderabad with expert coaching in Integration Bus version 9.0 and get hands-on experience on real time projects. ✓100% job support ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Message broker training Hyderabad, IBM message broker training in Hyderabad, IBM Integration Bus training in Hyderabad",
            templateUrl: "views/wmb.html",
            controller: "",
            label: "WebSphere Message Broker"
        })
            .when("/oracle",
                    {
            title: "Oracle Certification training in Hyderabad | Pro-elearning",
            description: "Pro-elearning provides best oracle certification training in Hyderabad with 100% job assistance. ✓DBA ✓ADF ✓Developer ✓Weblogic ✓SOA ✓Goldengate ✓EBS ✓12c. FREE DEMO! ☎ +91-7901401499.",
            keywords: "Oracle ADF online training in Hyderabad, Best institute for Oracle ADF in Hyderabad, Oracle DBA online training in Hyderabad, Oracle apps DBA training in Hyderabad, Oracle DBA course in Hyderabad, best Oracle DBA training institutes in Hyderabad, best institute for Oracle DBA in Hyderabad, best institute for Oracle developer in Hyderabad, Oracle EBS r12 training in Hyderabad, Oracle EBS r12 institutes in Hyderabad, Oracle SOA training in Hyderabad, Oracle SOA 11g institutes in Hyderabad, Oracle 12c training in Hyderabad, ODI 12c institutes in Hyderabad, Oracle Data Integrator training in Hyderabad, best institute for WebLogic administration in Hyderabad, WebLogic training institutes in Hyderabad, WebLogic administration training in Hyderabad, WebLogic online training in Hyderabad",
            templateUrl: "views/oracle.html",
            controller: "",
            label: "Oracle"
        })
            .when("/oracle/oracle-adf",
                    {
            title: "Best Oracle ADF Training in Hyderabad | Pro-elearning",
            description: "Pro-elearning provides classroom and online Oracle ADF (Application Development Framework)  training in Hyderabad with real-time projects by certified trainers. ✓100% job assistance ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Oracle ADF online training in Hyderabad, Best institute for Oracle ADF in Hyderabad, Oracle ADF training institutes in Hyderabad, Oracle ADF institutes in Hyderabad",
            templateUrl: "views/oracle-adf.html",
            controller: "",
            label: "Oracle ADF"
        })
            .when("/oracle/oracle-dba",
                    {
            title: "Oracle DBA Course in Hyderabad | Oracle DBA Training Online | Pro-elearning",
            description: "Our certified experts provide the best Oracle DBA(9i,10g,11g) training in Hyderabad. Enroll now for hands-on practical classes and real-time coaching. ✓100% job assistance ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Oracle DBA online training in Hyderabad, Oracle apps DBA training in Hyderabad, Oracle DBA course in Hyderabad, best Oracle DBA training institutes in Hyderabad, best institute for Oracle DBA in Hyderabad, Oracle DBA institutes in Hyderabad, Oracle DBA training institutes in Hyderabad, the best institute for Oracle DBA in Hyderabad",
            templateUrl: "views/oracle-dba.html",
            controller: "",
            label: "Oracle DBA"
        })
            .when("/oracle/oracle-developer",
                    {
            title: "Oracle Developer Training in Hyderabad | Oracle Course | Pro-elearning",
            description: "Enroll for Oracle Developer training in Hyderabad @ Pro-elearning. We provide job oriented coaching by industry experts with ✓100% job assistance. ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Oracle Course in Hyderabad, best institute for Oracle developer in Hyderabad, Oracle Developer training institute in Hyderabad, Oracle Developer institutes in Hyderabad",
            templateUrl: "views/oracle-developer.html",
            controller: "",
            label: "Oracle Developer"
        })
            .when("/oracle/oracle-ebs",
                    {
            title: "Oracle EBS Training in Hyderabad | Oracle EBS R12 in Hyderabad | Pro-elearning",
            description: "Pro-elearning offers the best Oracle EBS (E-Business suite) R12.1 Training in Hyderabad with expert trainers. We provide ✓100% placement assistance. ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Oracle EBS r12 training in Hyderabad, Oracle EBS online training in Hyderabad, Oracle EBS r12 institutes in Hyderabad, best Oracle EBS training institutes in Hyderabad, best institute for Oracle EBS in Hyderabad, Oracle EBS R12 course in Hyderabad",
            templateUrl: "views/oracle-ebs.html",
            controller: "",
            label: "Oracle EBS"
        })
            .when("/oracle/oracle-golden-gate",
                    {
            title: "Best Oracle GoldenGate Training in Hyderabad | GoldenGate Online Training | Pro-elearning",
            description: "Enroll for Oracle GoldenGate training in Hyderabad and get trained with experts having 8+ years of experience providing real-time coaching. ✓100% placement assistance ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Oracle GoldenGate training in Hyderabad, best Oracle goldengate institute in Hyderabad, GoldenGate course in Hyderabad, GoldenGate institutes in Hyderabad, Oracle GoldenGate training institutes in Hyderabad",
            templateUrl: "views/oracle-golden-gate.html",
            controller: "",
            label: "Oracle GoldenGate"
        })
            .when("/oracle/oracle-soa",
                    {
            title: "Oracle SOA Training in Hyderabad | Oracle SOA Suite 11g | Pro-elearning",
            description: "Best Oracle SOA suite 11g Training in Hyderabad is provided by Pro-elearning expert trainers with placement oriented approach. Enroll today to get trained to excel. ✓100% placement assistance ✓FREE DEMO! ☎ +91-7901401499.",
            keywords: "Oracle SOA training in Hyderabad, Oracle SOA 11g institutes in Hyderabad, best institute for SOA training in Hyderabad, Oracle SOA course in Hyderabad, Oracle SOA 11g coaching centres in Hyderabad, oracle soa suite 11g online training in Hyderabad",
            templateUrl: "views/oracle-soa.html",
            controller: "",
            label: "Oracle SOA"
        })
            .when("/oracle/weblogic",
                    {
            title: "WebLogic Training in Hyderabad | Oracle WebLogic Server 12c | Pro-elearning",
            description: "Best Real-time WebLogic 11g/12c training in Hyderabad @ Pro-elearning with 100% job assistance & best trainers in the industry. Enroll for a FREE DEMO now! ☎ +91-7901401499.",
            keywords: "best institute for WebLogic administration in Hyderabad, WebLogic training institutes in Hyderabad, WebLogic administration training in Hyderabad, WebLogic online training in Hyderabad, WebLogic institutes in Hyderabad, WebLogic course in Hyderabad, WebLogic admin training in Hyderabad, WebLogic server training institutes in Hyderabad, WebLogic server administration training in Hyderabad, WebLogic administration training institutes in Hyderabad, WebLogic administration course Hyderabad",
            templateUrl: "views/weblogic.html",
            controller: "",
            label: "WebLogic"
        })
            .when("/oracle/siebel-open-ui",
                    {
            title: "Best Siebel Open UI Online Training in Hyderabad | Pro-elearning",
            description: "Best institute for Siebel Open UI training in Hyderabad with expert trainers & 100% Job Assistance. Book for a FREE DEMO now! ☎ +91-7901401499.",
            keywords: "Siebel Open UI Online Training in Hyderabad, Best Siebel Open UI Training in Hyderabad, Siebel Open UI training in Hyderabad, Siebel Open UI institutes in Hyderabad, Siebel Open UI training institutes in Hyderabad",
            templateUrl: "views/siebel-open-ui.html",
            controller: "",
            label: "Siebel Open UI"
        })
            .when("/oracle/odi-12c",
                    {
            title: "Oracle 12c Training in Hyderabad | Oracle Data Integrator 12c | Pro-elearning",
            description: "Pro-elearning, the best institute for Oracle Data Integrator(ODI) 11g/12c course Training in Hyderabad providing 100% Job assistance. Book for a FREE DEMO now! ☎ +91-7901401499.",
            keywords: "Oracle 12c training in Hyderabad, ODI 12c institutes in Hyderabad, Oracle Data Integrator training in Hyderabad, Oracle Data Integrator institutes in Hyderabad, Oracle 12c training institutes in Hyderabad",
            templateUrl: "views/odi-12c.html",
            controller: "",
            label: "Oracle 12c"
        })
            .when("/registration",
                    {
            title: "Registration - Pro-elearning",
            templateUrl: "views/registration.html",
            controller: "",
            label: "Registration"
        })
            .when("/contact",
                    {
            title: "Contact Us - Pro-elearning",
            templateUrl: "views/contact.html",
            controller: "contactController",
            label: "Contact Us"
        })
            .when("/careers",
                    {
            title: "Careers - Pro-elearning",
            templateUrl: "views/careers.html",
            controller: "careersController",
            label: "Careers"
        })
            .when("/free-demos",
                    {
            title: "Trail Our Pro-elearning Modules | Online Training | Pro-elearning",
            description: "Pro-elearning has Online Training courses and modules in our prospectus. We offer high-quality e-learning content that’s relevant to a variety of sectors.",
            keywords: "Pro-elearning Training, Free Demos on Technologies, Latest online courses, IT Technologies, Software Courses by virtual  Training",
            templateUrl: "views/free-demos.html",
            controller: "freeDemosController",
            label: "Free Demos"
        })
            .when("/sitemap",
                    {
            title: "Sitemap - Pro-elearning",
            templateUrl: "views/sitemap.html",
            controller: "",
            label: "Sitemap"
        })
            /* Default Path To Load */
            .otherwise(
                {
            title: "404 Page Not Found - Pro-elearning",
            redirectTo: "/404",
            templateUrl: "views/404.html",
            controller: "pageNotFoundCtrl"
        })
        
        /* Configure HTML5 To Get Links Working */
        $locationProvider.html5Mode(true).hashPrefix('!');

        /* Charts.js Defining Deffault Settings */
        ChartJsProvider.setOptions({
            chartColors: [ '#FF5252', '#FF8A80' ],
            responsive: true
        });
                        
}])

;
}(angular));