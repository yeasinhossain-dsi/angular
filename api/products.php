<?php

$data = array(
	array(
		'id'=> 1,
		'product_name' => 'Product 1',
		'price' => '12.50'
	),
	array(
		'id'=> 2,
		'product_name' => 'Product 2',
		'price' => '8.50'
	),
);


header('content-type: application/json');
echo json_encode( $data );
