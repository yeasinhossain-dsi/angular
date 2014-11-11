<?php

$categories = array(
	array('id' => 1, 'name' => 'House Holds'),
	array('id' => 2, 'name' => 'Kitchen Items'),
	array('id' => 3, 'name' => 'Luxury Items'),
);

header('content-type: application/json');
echo json_encode( $categories );