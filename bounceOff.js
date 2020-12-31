function bounceOff(sd1,sd2){

    if (sd1.x - sd2.x < sd2.width/2 + sd1.width/2
      && sd2.x - sd1.x < sd2.width/2 + sd1.width/2
   ) {
    sd1.velocityX=sd1.velocityX*(-1);
    sd2.velocityX=sd2.velocityX*(-1);
  }
  if( sd1.y - sd2.y < sd2.height/2 + sd1.height/2
    && sd2.y - sd1.y < sd2.height/2 + sd1.height/2) {
    sd1.velocityY=sd1.velocityY*(-1);
   sd2.velocityY=sd2.velocityY*(-1);
  }
  
  }
  