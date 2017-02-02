/**
 * Created by kaka on 2017/1/2.
 */
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