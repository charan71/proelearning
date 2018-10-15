        <div class="container-fluid">
        
			<div class="row">
				<!-- Carousel Starts Here -->
				<div ng-controller="mainCarouselController" id="carousel-main-generic" class="carousel slide" data-ride="carousel">
					<!-- Indicators -->
					<ol class="carousel-indicators hidden-xs">
					    <li ng-click="slideTo($index)" data-slide-to="$index" ng-class="{active:!$index}" ng-repeat="item in mainCarouselSlides" class="transition"></li>
					</ol>
					
					<!-- Wrapper for slides -->
					<!-- Maintain Carousel Images Sizes as 1920x640 -->
					<div class="carousel-inner" role="listbox">
						<div class="item" ng-class="{active:!$index}" ng-repeat="item in mainCarouselSlides">
							<img ng-src="images/carousel-images/{{item.c_image}}" alt="{{item.c_imgAlt}}">
							<div class="carousel-caption">
								<h1 ng-bind-html="item.c_h1"></h1>
								<h4 class="hidden-xs">{{item.c_h4}}</h4>
                                <p class="hidden-xs">{{item.c_para}}</p>
							</div>
						</div>
					</div>
					
					<!-- Carousel Controls Starts Here -->
                    <a class="left carousel-control" ng-click="slide('prev')" role="button" data-slide="prev">
                        <i class="fa fa-angle-left" aria-labelled="true"></i>
						<span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" ng-click="slide('next')" role="button" data-slide="next">
                        <i class="fa fa-angle-right" aria-labelled="true"></i>
						<span class="sr-only">Next</span>
                    </a>
				</div>
				<!-- Carousel Ends Here -->
			</div>
		
			<div class="row pt-50 pb-50">
				<div class="container-fluid">
                    <div class="content">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="container text-center">
                                <h1 class="row-gap-small">Real-Time Training for IT Professionals &#x0026; Freshers</h1>
                                <p class="para-desc mb-20">Pro-elearning focuses on filling the niche in the labour market through personnel training and development. It is one of the most trusted and the largest provider of hands-on online training, classroom training, on-demand trainings and multi-course training events. The qualified trainers with market expertise and the enclosed IT Security Training Roadmap aid trainees in successful career planning.</p>
                                <a href="aboutus" class="btn-custom btn-custom-lg transition" role="button">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Overview of Training -->
            <div class="row training-overview pt-50 pb-50">
                <div class="container">
                    <h1 class="text-center">Choose your right choice</h1>
                </div>
                <div class="tree-container hidden-xs hidden-sm">
                    <div class="overview-tree-1"></div>
                    <div class="overview-tree-2"></div>
                </div>
                <div class="clearfix"></div>
                <div class="col-lg-4 col-md-4">
                    <div class="overview-grid">
                        <div class="overview-icon">
                            <img class="img-responsive center-block" src="./images/content-images/online-training.png">
                        </div>
                        <div class="overview-content text-center">
                            <h3 class="overview-title">Online Training</h3>
                            <p>Offering online live interactive training programs to the professionals and freshers across the globe.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4">
                    <div class="overview-grid">
                        <div class="overview-icon">
                            <img class="img-responsive center-block" src="./images/content-images/classroom-training.png">
                        </div>
                        <div class="overview-content text-center">
                            <h3 class="overview-title">On-Site Training</h3>
                            <p>Building proficient teams for multi national companies with corporate trainings.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4">
                    <div class="overview-grid">
                        <div class="overview-icon">
                            <img class="img-responsive center-block" src="./images/content-images/ondemand-training.png">
                        </div>
                        <div class="overview-content text-center">
                            <h3 class="overview-title">On-Demand Training</h3>
                            <p>Select your flexible timings at your convenience for one-to-one training.</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- //Overview of Training -->
			
            <!-- Course Cards List -->
			<div class="row pt-50 pb-50">
                <div class="home-courses container-fluid" ng-controller="CourseCardsController">
                    <div class="text-center space-bottom-20">
                        <h1>We provide courses on different domains</h1>
                        <p class="para-desc">Now learn your favourite course from our real-time experts</p>
                    </div>
                    
                    <!-- Trending Courses -->
                    <div class="space-bottom-20 course-category">
                        <div class="row space-bottom-10 course-title">
                            <h3 class="text-center">Trending Courses</h3>
                        </div>
                        <data-owl-carousel id="latestTechnologies" class="owl-carousel owl-theme" style="margin-left: auto; margin-right: auto;">
                            <div class="item slide" ng-repeat="course in ccTrendingCourses">
                                <a ng-href="{{course.ccTrendingCoursesURL}}">
                                    <div class="course-thumbnail">
                                        <img class="center-block img-responsive" ng-src="./images/course-thumbnails/{{course.ccTrendingCoursesImage}}" alt="{{course.ccTrendingCoursesAlt}}">
                                        <div class="course-caption">
                                            <h4>{{course.ccTrendingCoursesTitle}}</h4>
                                            <p clamp="2">{{ course.ccTrendingCoursesDesc }}</p>
                                            <p class="price-slider">{{ course.ccTrendingCoursePrice | currency : currencySymbol : 0 }}</p>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </data-owl-carousel>
                        <div class="clearfix"></div>
                    </div>
                    
                    <!-- More Categories -->
                    <div class="space-bottom-20 course-category">
                        <div class="row space-bottom-10 course-title">
                            <h4 class="text-center">For more courses click <b>Courses</b> on top</h4>
                        </div>
                    </div>
                    
                    <!-- Schedules, Demos, Discounts Section -->
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 mt-40 mb-40">
                                <div class="text-center demos transition">
                                    <a ng-href="course-schedules">
                                        <h4><i class="fa fa-calendar" aria-labelled="true"></i> Course Schedules</h4>
                                    </a>
                                    
                                </div>
                            </div>
                            <div class="col-md-4 mt-40 mb-40">
                                <div class="text-center demos transition">
                                    <a href="#">
                                        <h4><i class="fa fa-laptop" aria-labelled="true"></i> Upcoming Demos</h4>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-4 mt-40 mb-40">
                                <div class="text-center demos transition">
                                    <a href="#">
                                        <h4><i class="fa fa-percent" aria-labelled="true"></i> Special Discounts</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- //Schedules, Demos, Discounts Section -->
                    
                </div>
			</div>
            
            <!-- Statistics -->
            <div class="row text-center r-stats pt-50 pb-50">
                <div class="container stats">
                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <div class="stats-studs-trained">
                            <h4 class="stats-title">Website Hits</h4>
                            <div class="stats-num">
                                <span animate-numbers>
                                    <!-- Website Hits Counter -->
                                    <?php
                                    // Not to display php errors in browser
                                    error_reporting(0);
                                    session_start();
                                    
                                    // Read the Value in txt file
                                    $fp1 = fopen('visited.txt', "r");
                                    $fsize = filesize('visited.txt');
                                    $value = fread($fp1, $fsize);
                                    
                                    // Increment the value 
                                    if(!isset($_SESSION['hasVisited'])) {
                                    	$_SESSION['hasVisited'] = "yes";
                                    	$v = $value + 1;
                                    	$fp2 = fopen('visited.txt', "w");
                                    	fwrite($fp2, $v);
                                    }
                                    // Display the Value
                                    $fp = fopen("./visited.txt","r");
                                    $fsize=filesize("./visited.txt");
                                    $str = fread($fp,$fsize);
                                    echo "$str";
                                    ?>
                                    <!-- //Website Hits Counter -->
                                </span>+
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <div class="stats-studs-trained">
                            <h4 class="stats-title">Students Trained</h4>
                            <div class="stats-num">
                                <span animate-numbers>1252</span>+
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <div class="stats-studs-trained">
                            <h4 class="stats-title">Courses</h4>
                            <div class="stats-num">
                                <span animate-numbers>90</span>+
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <div class="stats-studs-trained">
                            <h4 class="stats-title">Students Placed</h4>
                            <div class="stats-num">
                                <span animate-numbers>800</span>+
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- //Statistics -->
            
            <!-- Subscribe -->
            <div class="row pt-50 pb-50">
                <div class="container">
                    <div class="subscribe-wrapper" ng-controller="subscribeCtrl">
                        <div class="subscribe-title col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <h2 class="text-center mt-10">Subscribe</h2>
                        </div>
                        <div class="subscribe-form col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <form novalidate name="subscribeForm" method="POST" enctype="application/x-www-form-urlencoded" id="subscribe" class="form form-horizontal" autocomplete="on">
                                <fieldset>
                                        <div class="input-group">
                                            <input type="email" name="email" ng-model="email" ng-pattern="/^[a-zA-Z0-9._]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/" placeholder="Enter your email here..." ng-required="true" />
	        								<!-- <span class="validation_styles" ng-show="subscribeForm.email.$error.required && subscribeForm.email.$touched">* Email is required</span>
    		    							<span class="validation_styles" ng-show="subscribeForm.email.$error.pattern && subscribeForm.email.$touched">* Please enter a valid email</span> -->
                                            <span class="input-group-btn">
                                                <button class="btn btn-subscribe transition" type="button" ng-disabled="subscribeForm.$invalid" ng-click="fn_subscribe()">Subscribe</button>
                                            </span>
                                        </div>
                                </fieldset>
                            </form>
                        </div>
                        <div class="alert alert-success alert-dismissible" role="alert" ng-if="successMessage">
                            <i class="fa fa-check" aria-labelled="true"></i> <span ng-bind="successMessage"></span>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div class="alert alert-danger alert-dismissible" role="alert" ng-if="errorMessage">
                            <i class="fa fa-times" aria-labelled="true"></i> <span ng-bind="errorMessage"></span>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Register Grid -->
			<div class="row">
                <div id="home_st_tr_bg" class="home-reg bgStyles">
                    <div class="text-center home-reg-panel">
				        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 vline grid1">
                            <div class="home-reg-panel-content">
                                <h2>Be a Student</h2>
                                <p>Learn what you love. Make your favorite technology as your profession.</p>
                                <a ng-href="registration" class="btn btn-empty btn-lg" role="button">Start Learning</a>
                            </div>
                        </div>
				        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 grid2">
                            <div class="home-reg-panel-content">
                                <h2>Be a Trainer</h2>
                                <p>Teach what you love. Pro-elearning gives you an opportunity to spread your knowledge.</p>
                                <a ng-href="registration" class="btn btn-empty btn-lg" role="button">Start Teaching</a>
                            </div>
                        </div>
                    </div>
                </div>
			</div>            
            
            
            <!-- Testimonials Slider -->
            <div class="row testimonials pt-50 pb-50">
                <div ng-controller="TestimonialsController" id="testimonials-slider" class="carousel slide" data-ride="carousel">
                    <div class="container">
                        <div class="testimonials-title">
                            <h1 class="mt-0">Listen to our customers</h1>
                            <p class="para-desc">Take a look at what people are saying about us</p>
                        </div>
			    		<!-- Indicators -->
		    			<ol class="carousel-indicators">
                            <li ng-click="slideTo($index)" data-slide-to="$index" ng-class="{active:!$index}" ng-repeat="item in testimonials" class="transition"></li>
    					</ol>
                        
                        <!-- Wrapper for slides -->
                        <div class="carousel-inner" role="listbox">
                            <div class="item" ng-class="{active:!$index}" ng-repeat="item in testimonials">
                                <div class="row">
                                    <img ng-src="./images/testimonials-person/{{item.t_image}}">
                                    <p class="testimonial-quote">{{item.t_desc}}</p>
                                    <p class="testimonial-person">&#x2015; <span class="testimonial-name">{{item.t_name}}</span>, <span class="testimonial-company">{{item.t_company}}</span>, <span class="testimonial-company">{{item.t_role}}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- //Testimonials Slider -->
            
            <!-- Home Contact Link -->
            <div class="row suggestion">
                <div class="container">
                    <div class="contact-link">
                        <div class="contact-link-text col-xs-12 col-sm-12 col-md-9 col-lg-9">
                            <h1>Course Not Found?</h1>
                            <p>Don't worry ... Let us know and we will get back to you</p>
                            <img class="paper-pl-fly img-responsive hidden-xs hidden-sm" src="./images/content-images/arrow-flying-400.png">
                        </div>
                        <div class="contact-link-btn  col-xs-12 col-sm-12 col-md-3 col-lg-3">
                            <!-- <a href="contact" class="btn-custom btn-custom-lg transition" role="button">Line Up</a> -->
                            <button type="button" class="btn-custom btn-custom-lg transition" data-toggle="modal" data-target="#courseSuggestion">Suggest Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- //Home Contact Link -->
		</div>

