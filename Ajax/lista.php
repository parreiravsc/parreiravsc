<?php

$usuarios  = Array [

    "Guilherme",
    "Maria",
    "Pedro",
    "Carlos"
];

header('Content-type: aplication/json');
echo json_encode($usuarios);

?>