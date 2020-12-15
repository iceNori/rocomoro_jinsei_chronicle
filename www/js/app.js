document.addEventListener('deviceready', onDeviceReady, false);    
function onDeviceReady() {

        cordova.plugins.backgroundMode.enable();

        // 2) Now the app runs ins background but stays awake
        cordova.plugins.backgroundMode.on('enable', function () {
            var num = 0;
            var tgt = 10000;
            var speed = 10;
            setInterval(function(){
            if(num <= tgt){
              document.getElementById("cup").innerText = num;
              num++;
            }
            },speed);
        });
}