window.onload =function () {
            /*关闭广告*/
        var closebanner =document.getElementById('closebanner');
        var closebanner_a =document.getElementById('closebanner_a');
        closebanner_a.onclick = function (){
            closebanner.style.display = "none";
        }
            /*弹出关闭遮罩*/
        var lgin = document.getElementById('login');
        var mask = document.getElementById('mask');
        var pop = document.getElementById('pop');
        lgin.onclick = function  () {
            mask.style.display = "block";
            pop.style.display = "block";
        }
        var close_all = document.getElementById('close_all');
        close_all.onclick =function  () {
            mask.style.display = "none";
            pop.style.display = "none";
        }
    }
