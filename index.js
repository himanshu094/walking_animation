'use strict'
let intervalId;
let i=0;
 function animate(){
      let pic="frame_"+i+"_delay-0.2s.png";
      walk.src=pic;
      walk.width="300";
      i++;
      if(i==6) i=0;
 }
 function call()
 {  if(btn.value=="start"){
    intervalId=setInterval(animate,200);
    btn.value="pause"
    mark.start()
    }else{
        clearInterval(intervalId)
    btn.value="start"
    mark.stop()
    }
 }