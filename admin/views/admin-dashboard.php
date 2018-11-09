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
											<span class="icon"><i class="fa fa-eye"></i></span>
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
											<span class="icon"><i class="fa fa-users"></i></span>
											<p>
												<span class="number">1,252</span>
												<span class="title">Students Trained</span>
											</p>
										</div>
									</div>
									<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
										<div class="metric">
											<span class="icon"><i class="fa fa-book"></i></span>
											<p>
												<span class="number">92</span>
												<span class="title">Courses</span>
											</p>
										</div>
									</div>
									<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
										<div class="metric">
											<span class="icon"><i class="fa fa-bar-chart"></i></span>
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

				<div class="">
					<h3>Dashboard</h3>
                	<div style="width:300px;height:300;">
                	    <canvas class="chart chart-doughnut" chart-data="data" chart-labels="labels" chart-click="onClick" chart-colors="colors"></canvas>
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
