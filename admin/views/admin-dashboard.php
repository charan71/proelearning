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
		<div class="dummy"></div>
		<div class="main-content">
			<div class="dashboard" ng-controller="adminDashboardCtrl">
				<h3>Dashboard</h3>
				
				<?php
					// Display the Value
					$fp = fopen("../../views/visited.txt","r");
					$fsize=filesize("../../views/visited.txt");
					$str = fread($fp,$fsize);
                ?>

				<div class="hits">
					<div class="card-title">Website Visits</div>
					<div class="count text-center">
						<?php
							echo "$str";
                        ?>
					</div>
				</div>

                <div style="width:300px;height:300;">
                    <canvas class="chart chart-doughnut" chart-data="data" chart-labels="labels" chart-click="onClick" chart-colors="colors"></canvas>
				</div>
				
				<div class="ngClock">
					<ds-widget-clock digital-format="'hh:mm:ss a'" theme="blue-light"></ds-widget-clock>
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
