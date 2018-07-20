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
			<div ng-controller="dashboardCtrl">
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
				<div>{{loginMessage}}</div>
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
