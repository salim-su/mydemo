/**
 * Created by Administrator on 2016/12/30.
 */
function animate(obj,target){
    clearInterval(obj.timer);  // 先清除定时器
    var speed = obj.offsetLeft < target ? 5 : -5;  // 用来判断 应该 +  还是 -
    obj.timer = setInterval(function() {
        var result = target - obj.offsetLeft; // 因为他们的差值不会超过5
        obj.style.left = obj.offsetLeft + speed + "px";
        if(Math.abs(result)<=5)  // 如果差值不小于 5 说明到位置了
        {
            clearInterval(obj.timer);
            obj.style.left = target + "px";  // 有5像素差距   我们直接跳转目标位置
        }
    },30)
}
function uniformMove(obj,json,iSpeed,fn){
    var timer=null;
    var num=-iSpeed;
    var iCur=0;
    var iTarget=0;
    var onoff=true;//判断每个属性是否到达目标
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        for(var attr in json){
            iTarget=json[attr];
            iCur=getStyle(obj,attr);
            if(iCur<iTarget){
                if(Math.abs(iCur-iTarget)<iSpeed){
                    iSpeed=Math.abs(iCur-iTarget);
                }
            }else{
                if(Math.abs(iCur-iTarget)<Math.abs(iSpeed)){
                    iSpeed=-Math.abs(iCur-iTarget);
                }else{
                    iSpeed=num;
                }
            }
            if(iCur==iTarget){
                clearInterval(obj.timer);
                if(fn){
                    fn();
                }
            }
            else{
                obj.style[attr]=iCur+iSpeed+"px";
            }
        }
    },15);
}
function getStyle(obj,attr){
    return parseFloat(getComputedStyle(obj,null)[attr]);//要用parseFloat
}