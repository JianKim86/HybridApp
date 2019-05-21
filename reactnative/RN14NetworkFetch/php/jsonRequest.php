<?php

    header('Content-Type:application/json; charset=utf-8');

    // 슈퍼전역변수 $_POST배열에는 json문자열이 파싱되어 들어오지 못하므로..
    //클라이언트로부터 json으로 요청된 body데이터를 읽어오기
    $jsonData= file_get_contents('php://input');
    // 읽어온 json문자열을 echo하기
    echo $jsonData;

    //보통은 곧바로 json를 리턴하지 않고 객체나 배열로 만들어서 DB같은 곳에 저장
    echo "\n\n";

    $obj= json_decode( $jsonData ); //json문자열 -> 객체로 변환
    echo "$obj->name , $obj->msg , $obj->age";

    echo "\n\n";

    $arr =json_decode( $jsonData, true); //json문자열 -> 연관배열로 변환
    echo $arr['name'] . " , " . $arr['msg'] . " , " . $arr['age'];

    // DB에서 읽어들인 데이터배열로 반대로 json문자열로 변환하여 클라이언트에게 응답(response)하는 경우가 많음.

    $json = json_encode( $arr );// 배열->json
    echo "$json";




?>