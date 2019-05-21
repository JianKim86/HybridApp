// 문서의 load가 준비되었을 때 실행되는 콜백이벤트 처리
$(document).ready( function(){

    // 문서로드와 별개로 디바이스와의 연결준비가 되었는지 콜백이벤트 처리
    document.addEventListener( 'deviceready', function(){
        alert("device ready!");
    } , true);

    //각 버튼의 클릭되었을때 이벤트 처리
    $('#btn_gallery').click( function(){ 
        getPic();
    });

    $('#btn_camera').click( function(){
        takePic();
    });

} );

// 사진열기 or 카메라같은 디바이스의 고유기능을 사용하려면
// 추가 프로그램이 필요함[일종의 라이브러리] - 플러그인

// 플러그인 :  cordova-plugin-camera

// 사진 열기!
function getPic(){

    navigator.camera.getPicture( 
        function( imgData ){
            // imgData는 선택된 파일의 URI
            var img= document.getElementById('img_pic');
            img.src= imgData;

            $('h3').replaceWith('<h3>Loaded Picture</h3>');
        },
        function( errorMessage ){
            alert( errorMessage );
        },
        {
            quality:20,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY
        }
    );

}

// 카메라 열기!
function takePic(){

    navigator.camera.getPicture( 
        function( imgData ){
            // imgData는 선택된 파일의 URI
            var img= document.getElementById('img_pic');
            img.src= imgData;

            $('h3').replaceWith('<h3>Taken Picture</h3>');
        },
        function( errorMessage ){
            alert( errorMessage );
        },
        {
            quality:20,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
            saveToPhotoAlbum:true
        }
    );

}