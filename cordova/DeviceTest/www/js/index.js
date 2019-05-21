// 디바이스에 대한 정보를 얻어오는 코드 작성

// index.html문서의 load가 완료되었는지 콜백함수 지정
$(document).ready( function(){

    // html문서의 로드와는 별개로 디바이스의 준비콜백처리
    // 마치, 안드로이드의 onResume()같은 콜백 메소드
    // onDeviceReady함수 이벤츠 처리(JS코드)
    document.addEventListener('deviceready', onDeviceReady, true);//마지막 true : 이벤트전달방식이 capturing- 부모부터 차례로 이벤트가 전달되는 방식


    // 디바이스 인포버튼에 클릭이벤트 처리
    $('#btn_device_info').click( function(){
        showDeviceInfo();//함수호출        
    });

} );

//디바이스의 준비가 끝나면 자동으로 실행되는 콜백함수
function onDeviceReady(){
    //alert("디바이스 연결 완료!!");

    // 위 alert()함수는 WebView의 경고창 다이얼로그임
    // 디바이스만의 고유한 alert 다이얼로그를 보여주기!!
    // 디바이스 고유의 기능을 사용하려면 plug-in 해야함
    // 디바이스고유 다이얼로그의 plugin의 명칭( cordova-plugin-device )으로 플러그인을 추가
    // 플러그인 추가는 npm사이트에 설명되어 있음.
    navigator.notification.alert('Device Ready', null, 'Alert Dialog', 'OK');
}


// 디바이스의 정보를 출력하는 코드를 가진 함수
function showDeviceInfo(){

    //디바이스의 정보 얻어오기 : plugin필요 [ cordova-plugin-device ]
    var device_info= "";
    device_info += "<p>Platform : " + device.platform + "</p>";
    device_info += "<p>Version : " + device.version +"</p>";
    device_info += "<p>model : " + device.model +"</p>";

    device_info += "<p>screen width : " + screen.width +"</p>";
    device_info += "<p>screen height : " + screen.height +"</p>";

    $('#infoArea').html( device_info );
}




// 두번재 페이지 : Device Control Page 스크립트
$(document).ready( function(){

    //각 버튼들에 클릭이벤트 처리
    $('#btn_vibrate').click( function(){
        //플러그인 : cordova-plugin-vibration
        navigator.vibrate(3000); //3초간 진동
    });

    $('#btn_battery').click( function(){
        //플러그인 : cordova-plugin-battery-status
        window.addEventListener('batterystatus', function( status ){
            $('#resultArea').html("<p>Battery Level : "+ status.level +"%</p>");
        }, false);


    });

    $('#btn_network').click( function(){
        //플러그인 : cordova-plugin-network-information
        var status= navigator.connection.type;
        $('#resultArea').html("<p>Network Status : "+ status +"</p>");

    });

    $('#btn_location').click( function(){
        //플러그인 : cordova-plugin-geolocation
        navigator.geolocation.getCurrentPosition( function(geo){
            $('#resultArea').html("<p>Latitude : " + geo.coords.latitude +"</p>" + "<p>Longitude : "+ geo.coords.longitude+"</p>");

        } , function(error){
            $('#resultArea').html("<p>Geolocation Error : " + error.message +"</p>");
        } , {maximumAge:3000, timeout:50000, enableHighAccuracy:true} );

    });



});
