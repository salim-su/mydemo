/**
 * Created by kaka on 2016/12/24.
 */
window.onload = function () {
    function $(id){ return document.getElementById(id);}
    var js_wySilder = $("js_wySilder");
    var silder_main = $("silder_main_imgs");
    var imgs = silder_main.children;
    var silder_ctrl = $("silder_ctrl");
    var silder = $("silder");
    for (var i = 0; i < imgs.length; i++) {
        // console.log(i);
        var span = document.createElement("span");
        span.className = "silder-ctrl-con";
        span.innerHTML = imgs.length - i;
        silder_ctrl.insertBefore(span,silder_ctrl.children[1]);
    }
    var spanCurrent = silder_ctrl.children[1];
    spanCurrent.className = "silder-ctrl-con current";
    var offsetW = silder.offsetWidth;
    for (var i = 1; i < imgs.length; i++) {
        imgs[i].style.left = offsetW + "px";
    }
    var spans = silder_ctrl.children;
    var iNow = 0;
    for (var k in spans) {
        spans[k].onclick = function () {
            if (this.className == "silder-ctrl-prev") {
                // alert("弹出左侧按钮");
                animate(imgs[iNow],{left : offsetW});
                iNow--;
                if (iNow < 0) {
                    iNow = imgs.length - 1;
                }
                imgs[iNow].style.left = -offsetW + "px";
                animate(imgs[iNow],{left : 0});
                setSquare();
            }else if(this.className == "silder-ctrl-next"){
                // alert("弹出右侧按钮");
                animate(imgs[iNow],{left : -offsetW});
                iNow++;
                if (iNow > imgs.length -1) {
                    iNow = 0;
                }
                imgs[iNow].style.left = offsetW + "px";
                animate(imgs[iNow],{left : 0});
                setSquare();
            }else{
                // alert("弹出下边的按钮");
                var that = this.innerHTML -1 ;
                // console.log(that);
                // console.log(iNow);
                if (that > iNow) {
                    animate(imgs[iNow],{left : -offsetW});
                    // console.log(iNow);
                    imgs[that].style.left = offsetW + "px";
                    animate(imgs[that],{left : 0});
                }else if (that < iNow) {
                    animate(imgs[iNow],{left : offsetW})
                    imgs[that].style.left = -offsetW + "px";
                    animate(imgs[that],{left : 0});
                }
                iNow = that;
                setSquare();
            }
        }
    }
    function setSquare() {
        for (var i = 1; i < spans.length -1 ; i++) {
            spans[i].className = "silder-ctrl-con"
        }
        spans[iNow+1].className = "silder-ctrl-con current";
    }
    var timer = setInterval(autoPlay,1500);
    function autoPlay() {
        animate(imgs[iNow],{left : -offsetW});
        iNow++;
        if (iNow > imgs.length -1) {
            iNow = 0;
        }
        imgs[iNow].style.left = offsetW + "px";
        animate(imgs[iNow],{left : 0});
        setSquare();
    }
    js_wySilder.onmouseover = function () {
        clearInterval(timer);
    }
    js_wySilder.onmouseout = function () {
        clearInterval(timer);
        timer = clearInterval(autoPlay,1500);
    }

}