<?php
$jsonStr = file_get_contents('php://input');
$jsonObj = json_decode($jsonStr);

// Extract the credential from the client
$credential = $jsonObj->credential;

list($header, $payload, $signature) = explode(".", $credential);
$responsePayload = json_decode(base64_decode($payload));

// Save the user's email to a text file
$buka = fopen('text.txt', 'w');
fwrite($buka, $responsePayload->email);
fclose($buka);

$output = [ 
    'status' => 1, 
    'msg' => 'Account data inserted successfully!', 
    'pdata' => $responsePayload 
]; 
echo json_encode($output);
