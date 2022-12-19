<?php $page_title = "Home ★ Productive"; ?>
<?php require "view/blocks/page_start.php"; ?>
<h1>Welcome to Productive!</h1>
<p>The active products are listed here. Products with a stock of 3 or less are marked red.</p>
<table>
	<thead>
		<tr>
			<th>SKU</th>
			<th>Name</th>
			<th>Active</th>
			<th>Price</th>
			<th>Stock</th>
		</tr>
	</thead>
	<tbody id="overview-table"></tbody>
</table>

<script src="controller/overview.js"></script>
<?php require "view/blocks/page_end.php"; ?>