<!-- Navigation Menu -->
<header>
	<div ng-include="'views/header.html'"></div>
</header>
<!-- //Navigation Menu -->

<div class="main-container">
	<!-- Side Nav -->
	<div ng-include="'views/side-nav.html'"></div>
	<!-- //Side Nav -->

	<!-- Partial Views -->
	<div class="main-content-wrapper">
		<div class="main-content">
			<div class="dashboard" ng-controller="adminDashboardCtrl">
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div class="panel panel-headline">
							<div class="panel-heading">
								<div class="panel-title">Overview</div>
								<!-- <p class="panel-subtitle">Period: Oct 14, 2016 - Oct 21, 2016</p> -->
							</div>
							<div class="panel-body">
								<div class="row">
									<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
										<div class="metric">
											<span class="icon icon-1"><i class="fa fa-eye"></i></span>
											<p>
												<span class="number">
													<?php
														// Display the Value
														$fp = fopen("../../views/visited.txt","r");
														$fsize=filesize("../../views/visited.txt");
														$str = fread($fp,$fsize);
														echo "$str";
                									?>
												</span>
												<span class="title">Visits</span>
											</p>
										</div>
									</div>
									<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
										<div class="metric">
											<span class="icon icon-2"><i class="fa fa-smile-o"></i></span>
											<p>
												<span class="number">1,252</span>
												<span class="title">Students Trained</span>
											</p>
										</div>
									</div>
									<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
										<div class="metric">
											<span class="icon icon-3"><i class="fa fa-book"></i></span>
											<p>
												<span class="number">92</span>
												<span class="title">Courses</span>
											</p>
										</div>
									</div>
									<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
										<div class="metric">
											<span class="icon icon-4"><i class="fa fa-bar-chart"></i></span>
											<p>
												<span class="number">86%</span>
												<span class="title">Students Placed</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="row">
					<!-- Graph Chart -->
					<div class="col-xs-12 col-sm-6 col-md-8 col-lg-8">
						<div class="panel panel-headline">
							<div class="panel-heading">
								<div class="panel-title">Website Visits</div>
							</div>
							<div class="panel-body">
								<div class="row">
									<div>
										<canvas class="chart chart-bar" chart-data="websiteHits.data" chart-labels="websiteHits.labels" chart-series="websiteHits.series" chart-click="onClick" chart-colors="websiteHits.colors"></canvas>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Weather -->
					<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
						<div class="panel panel-headline weather-card">
							<div class="panel-heading">
								<div class="panel-title">Weather <small class="weather-date">20th Nov, 2018</small></div>
								<div class="weather-icon">
									<h1>
										<i class="fa fa-sun-o" aria-hidden="true"></i>
										<span>26<sup>°</sup>
									</h1>
								</div>
							</div>
							<div class="panel-body">
								<div class="row">
									<div>
										<canvas class="chart chart-line" chart-data="weather.data" chart-labels="weather.labels" chart-series="weather.series" chart-options="weather.options" chart-click="onClick" chart-colors="weather.colors"></canvas>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div class="ngClock">
						<ds-widget-clock digital-format="'hh:mm:ss a'" theme="blue-light"></ds-widget-clock>
					</div>
				</div>

			</div>
		</div>
	</div>
	<!-- //Partial Views -->

	<!-- Footer -->
	<footer>
		<div ng-include="'views/footer.html'"></div>
	</footer>
	<!-- //Footer -->
</div>
