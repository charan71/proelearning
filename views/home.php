        <div class="container-fluid">
        
			<div class="row">
				<!-- Carousel Starts Here -->
				<div ng-controller="mainCarouselController" id="carousel-main-generic" class="carousel slide" data-ride="carousel">
					<!-- Indicators -->
					<ol class="carousel-indicators hidden-xs">
					    <li ng-click="slideTo($index)" data-slide-to="$index" ng-class="{active:!$index}" ng-repeat="item in mainCarouselSlides"></li>
					</ol>
					
					<!-- Wrapper for slides -->
					<!-- Maintain Carousel Images Sizes as 1920x640 -->
					<div class="carousel-inner" role="listbox">
						<div class="item" ng-class="{active:!$index}" ng-repeat="item in mainCarouselSlides">
							<img ng-src="images/carousel-images/{{item.c_image}}" alt="{{item.c_imgAlt}}">
							<div class="carousel-caption">
								<h1>{{item.c_h1}}</h1>
								<h4 class="hidden-xs">{{item.c_h4}}</h4>
                                <p class="hidden-xs">{{item.c_para}}</p>
							</div>
						</div>
					</div>
					
					<!-- Carousel Controls Starts Here -->
                    <a class="left carousel-control" ng-click="slide('prev')" role="button" data-slide="prev">
    					<i class="fa fa-angle-left" aria-hidden="true"></i>
						<span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" ng-click="slide('next')" role="button" data-slide="next">
    					<i class="fa fa-angle-right" aria-hidden="true"></i>
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
                <div class="tree-container">
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
                            <h3 class="overview-title">On-site Training</h3>
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
                            <p>Select your flexible timings at your convenience that suit your needs.</p>
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
                    
                    <!-- Information Technology -->
                    <div class="space-bottom-20 course-category">
                        <div class="row space-bottom-10 course-title">
                            <h3 class="text-center">Trending Courses in &#x201C;Information Technology&#x201D;</h3>
                        </div>
                        <data-owl-carousel class="owl-carousel owl-theme" style="margin-left: auto; margin-right: auto;">
                            <div class="owl-item slide" ng-repeat="items in cc_info_tech">
                                <a ng-href="{{items.cc_info_tech_imageLink}}">
                                    <div class="course-thumbnail">
                                        <img class="center-block" ng-src="./images/course-thumbnails/{{items.cc_info_tech_image}}" alt="228x116">
                                        <div class="course-caption">
                                            <h4>{{items.cc_info_tech_title}}</h4>
                                            <p clamp="2">{{items.cc_info_tech_desc}}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </data-owl-carousel>
                        
                        <div class="clearfix"></div>
                        <!--
                        <div class="row course-readmore">
                            <a href="">Click here for more courses on Information Technology &#x003E;&#x003E;</a>
                        </div>
                        -->
                    </div>
                    
                    <!-- Cloud Technologies -->
                    <div class="space-bottom-20 course-category">
                        <div class="row space-bottom-10 course-title">
                            <h3 class="text-center">Trending Courses in &#x201C;Cloud Technologies&#x201D;</h3>
                        </div>
                        <data-owl-carousel class="owl-carousel owl-theme" style="margin-left: auto; margin-right: auto;">
                            <div class="owl-item slide" ng-repeat="items in cc_cloud_tech">
                                <a ng-href="{{items.cc_cloud_tech_imageLink}}">
                                    <div class="course-thumbnail">
                                        <img class="center-block" ng-src="./images/course-thumbnails/{{items.cc_cloud_tech_image}}" alt="228x116">
                                        <div class="course-caption">
                                            <h4>{{items.cc_cloud_tech_title}}</h4>
                                            <p clamp="2">{{items.cc_cloud_tech_desc}}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </data-owl-carousel>
                        
                        <div class="clearfix"></div>
                        <!--
                        <div class="row course-readmore">
                            <a href="">Click here for more courses on Information Technology &#x003E;&#x003E;</a>
                        </div>
                        -->
                    </div>
                    
                    <!-- ERP -->
                    <div class="space-bottom-20 course-category">
                        <div class="row space-bottom-10 course-title">
                            <h3 class="text-center">Trending Courses in &#x201C;ERP&#x201D;</h3>
                        </div>
                        <data-owl-carousel class="owl-carousel owl-theme" style="margin-left: auto; margin-right: auto;">
                            <div class="owl-item" ng-repeat="items in cc_erp">
                                <a href="{{items.cc_erp_imageLink}}">
                                    <div class="course-thumbnail">
                                        <img class="center-block" ng-src="./images/course-thumbnails/{{items.cc_erp_image}}" alt="228x116">
                                        <div class="course-caption">
                                            <h4>{{items.cc_erp_title}}</h4>
                                            <p clamp="2">{{items.cc_erp_desc}}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </data-owl-carousel>
                        
                        <div class="clearfix"></div>
                        <!--
                        <div class="row course-readmore">
                            <a href="">Click here for more courses on ERP &#x003E;&#x003E;</a>
                        </div>
                        -->
                    </div>
                    
                    <!-- Business Management -->
                    <div class="space-bottom-20 course-category">
                        <div class="row space-bottom-10 course-title">
                            <h3 class="text-center">Trending Courses in &#x201C;Business Management&#x201D;</h3>
                        </div>
                        <data-owl-carousel class="owl-carousel owl-theme" style="margin-left: auto; margin-right: auto;">
                            <div class="owl-item" ng-repeat="items in cc_buss_mgmt">
                                <a href="{{items.cc_buss_mgmt_imageLink}}">
                                    <div class="course-thumbnail">
                                        <img class="center-block" ng-src="./images/course-thumbnails/{{items.cc_buss_mgmt_image}}" alt="228x116">
                                        <div class="course-caption">
                                            <h4>{{items.cc_buss_mgmt_title}}</h4>
                                            <p clamp="2">{{items.cc_buss_mgmt_desc}}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </data-owl-carousel>
                        
                        <div class="clearfix"></div>
                        <!--
                        <div class="row course-readmore">
                            <a href="">Click here for more courses on Business Management &#x003E;&#x003E;</a>
                        </div>
                        -->
                    </div>
                    
                    <!-- Oracle -->
                    <div class="space-bottom-20 course-category">
                        <div class="row space-bottom-10 course-title">
                            <h3 class="text-center">Trending Courses in &#x201C;Oracle&#x201D;</h3>
                        </div>
                        <data-owl-carousel class="owl-carousel owl-theme" style="margin-left: auto; margin-right: auto;">
                            <div class="owl-item" ng-repeat="items in cc_oracle">
                                <a href="{{items.cc_oracle_imageLink}}">
                                    <div class="course-thumbnail">
                                        <img class="center-block" ng-src="./images/course-thumbnails/{{items.cc_oracle_image}}" alt="228x116">
                                        <div class="course-caption">
                                            <h4>{{items.cc_oracle_title}}</h4>
                                            <p clamp="2">{{items.cc_oracle_desc}}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </data-owl-carousel>
                        
                        <div class="clearfix"></div>
                        <!--
                        <div class="row course-readmore">
                            <a href="">Click here for more courses on Business Intelligence &#x003E;&#x003E;</a>
                        </div>
                        -->
                    </div>
                    
                    <!-- More Categories -->
                    <div class="space-bottom-20 course-category">
                        <div class="row space-bottom-10 course-title">
                            <h4 class="text-center">For more courses click on &#x201C;Categories&#x201D;</h4>
                        </div>
                    </div>
                    
                    <!-- New Demos Section -->
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 mt-40 mb-40">
                                <div class="text-center demos" id="demos1">
                                    <a ng-href="course-schedules">
                                        <h4>Course Schedules</h4>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-4 mt-40 mb-40">
                                <div class="text-center demos" id="demos2">
                                    <a href="#">
                                        <h4>New Demos</h4>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-4 mt-40 mb-40">
                                <div class="text-center demos" id="demos3">
                                    <a href="#">
                                        <h4>Special Discounts</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- //New Demos Section -->
                    
                </div>
			</div>
            
            <!-- Statistics -->
            <div class="row text-center r-stats pt-50 pb-50">
                <div class="container stats">
                    <h1 class="mt-0 mb-30">So Far Sooo Good</h1>
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
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
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <div class="stats-studs-trained">
                            <h4 class="stats-title">Students Trained</h4>
                            <div class="stats-num">
                                <span animate-numbers>1000</span>+
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <div class="stats-studs-trained">
                            <h4 class="stats-title">No.of Courses</h4>
                            <div class="stats-num">
                                <span animate-numbers>80</span>+
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
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
                            <li ng-click="slideTo($index)" data-slide-to="$index" ng-class="{active:!$index}" ng-repeat="item in testimonials"></li>
    					</ol>
                        
                        <!-- Wrapper for slides -->
                        <div class="carousel-inner" role="listbox">
                            <div class="item" ng-class="{active:!$index}" ng-repeat="item in testimonials">
                                <div class="row">
                                    <img ng-src="./images/testimonials-person/{{item.t_image}}">
                                    <p class="testimonial-quote">{{item.t_desc}}</p>
                                    <p class="testimonial-person">&#x2015; <span class="testimonial-name">{{item.t_name}}</span>, <span class="testimonial-company">{{item.t_company}}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- //Testimonials Slider -->
            
            <!-- Home Contact Link -->
            <div class="row">
                <div class="container">
                    <div class="contact-link">
                        <div class="contact-link-text col-xs-9 col-sm-9 col-md-9 col-lg-9">
                            <h1>Need to request a demo?</h1>
                            <p>Then hit the button</p>
                            <img class="paper-pl-fly img-responsive hidden-xs hidden-sm" src="./images/content-images/arrow-flying-400.png">
                        </div>
                        <div class="contact-link-btn  col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <a href="contact" class="btn-custom btn-custom-lg transition" role="button">Line Up</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- //Home Contact Link -->
		</div>

