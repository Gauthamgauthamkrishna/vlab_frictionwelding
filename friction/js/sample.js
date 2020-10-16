function animatearrow()
{
     if (document.getElementById('arrow1').style.visibility=="hidden")
         document.getElementById('arrow1').style.visibility="visible";
     else
         document.getElementById('arrow1').style.visibility="hidden";
}




//animate arrow at position
function animateArrowATPosition(left,top,degg)
{
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:"+left+"px; top: "+top+"px; height: 30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate("+degg+"deg)";
	 // Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate("+degg+"deg)";
	 // Standard syntax
	document.getElementById("arrow1").style.transform = "rotate("+degg+"deg)";
}

//stop blinking arrow
function myStopFunction()
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}


//function to move to next canvas
function navNext()
{
	for(temp=0;temp<=7;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();
}

//magic function for animation in each canvas
function magic() {
  if(simsubscreennum == 1) {
    //Write code for canvas 1 animations

    myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
    animateArrowATPosition(600,380,-90);//specify the left top and deg of arrow
    document.getElementById("grinder").onclick = function() {
        document.getElementById("grinder").onclick = " "//To stop further click on pattern
        myStopFunction();//stops blinking arrow
        document.getElementById("grinder").style.animation = "movePattern 4.2s ease-out forwards ";//Since it runs for 1.2s
        setTimeout(function() {
            document.getElementById("nextButton").style.visibility = "visible";
        },4550);

  }

}  else if(simsubscreennum == 2) {

 myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
 animateArrowATPosition(600,120,-90);//specify the left top and deg of arrow
 document.getElementById("w2").onclick = function() {
   document.getElementById("w2").onclick =" "
   myStopFunction();
   document.getElementById("w1").style.animation = "movew1 3.2s ease-out forwards";
   document.getElementById("w2").style.animation = "movew2 3.2s   ease-out forwards";

         setTimeout(function() {
          document.getElementById("nextButton").style.visibility = "visible";
         },1250);

    }
  }else if(simsubscreennum == 3) {


      myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
      animateArrowATPosition(185,155,-90);//specify the left top and deg of arrow
      document.getElementById("3m").onclick = function() {
      document.getElementById("3m").onclick = " "
      myStopFunction();
      document.getElementById("sd").style.visibility = "visible";
      document.getElementById("sdd").style.visibility = "visible";
      setTimeout(function() {
              document.getElementById("sdd").style.animation = "movesdd 1.9s  forwards";
              document.getElementById("ff").style.animation = "moveff 1.9s  forwards";

              setTimeout(function() {
                document.getElementById("sd").style.visibility = "hidden";
                document.getElementById("sdd").style.visibility = "hidden";
                setTimeout(function() {
                     document.getElementById("nextButton").style.visibility = "visible";
                 },1000);

           },1950);

       },500);

   }

} else if(simsubscreennum == 4) {



        myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
        animateArrowATPosition(120,155,-90);//specify the left top and deg of arrow
        document.getElementById("off1").onclick = function() {
           document.getElementById("off1").onclick = " "
           myStopFunction();
           document.getElementById("off").style.visibility = "visible";
           setTimeout(function() {
               document.getElementById("off").style.visibility = "hidden";
               document.getElementById("on").style.visibility = "visible";
               document.getElementById("off1").style.visibility = "hidden";
               document.getElementById("on1").style.visibility = "visible";
               setTimeout(function() {
                    document.getElementById("on").style.visibility = "hidden";
                    myInt1 = setInterval(function(){ animatel1(); }, 300);
                    document.getElementById("press").style.animation = "movepress 2.2s ease-out forwards";
                    setTimeout(function() {
                         myInt2 = setInterval(function(){ animatel2(); }, 300);
                         setTimeout(function() {
                              myInt3 = setInterval(function(){ animatel3(); }, 300);
                              setTimeout(function() {
                                  document.getElementById("weld").style.visibility = "visible";
                                  setTimeout(function() {
                                       myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
                                       animateArrowATPosition(120,155,-90);//specify the left top and deg of arrow
                                       document.getElementById("on1").onclick = function() {
                                       document.getElementById("on1").onclick = " "

                                       myStopFunction();
                                       Stopl1();
                                       Stopl2();
                                       Stopl3();

                                      document.getElementById("on").style.visibility = "visible";
                                      setTimeout(function() {
                                           document.getElementById("on").style.visibility = "hidden";
                                           document.getElementById("off").style.visibility = "visible";
                                           document.getElementById("on1").style.visibility = "hidden";
                                           document.getElementById("off1").style.visibility = "visible";
                                           setTimeout(function() {
                                                document.getElementById("off").style.visibility = "hidden";
                                                setTimeout(function() {
                                                     document.getElementById("nextButton").style.visibility = "visible";
                                                },1250);

                                           },500);

                                      },500);

                                 }

                            },1900);

                       },3300);

                 },200);

            },100);

        },500);

     },500);

  }

}if(simsubscreennum == 5) {

        document.getElementById("weld").style.visibility = "hidden";
        myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
        animateArrowATPosition(50,260,180);//specify the left top and deg of arrow
        document.getElementById("machine0").onclick = function() {
            document.getElementById("machine0").onclick =" "
            myStopFunction();
            document.getElementById("press2").style.animation = "movepress1 2.2s ease-out forwards";
            document.getElementById("press3").style.animation = "movepress1 2.2s ease-out forwards";
            setTimeout(function() {
                 document.getElementById("nextButton").style.visibility = "visible";
              },2450);

        }

}else if(simsubscreennum == 6) {

        myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
        animateArrowATPosition(500,230,-90);//specify the left top and deg of arrow
        document.getElementById("machine2").onclick = function() {
        document.getElementById("machine2").onclick = " "
        myStopFunction();
        document.getElementById("final").style.visibility = "visible";
        document.getElementById("press4").style.visibility = "hidden";
            setTimeout(function() {
                document.getElementById("nextButton").style.visibility = "visible";
             },1250);

   }

}else if(simsubscreennum == 7) {

 document.getElementById("off1").style.visibility = "hidden";
  document.getElementById("final").style.visibility = "hidden";
myInt = setInterval(function(){ animatearrow(); }, 500);//calls blinking arrow function
animateArrowATPosition(610,140,-90);//specify the left top and deg of arrow
document.getElementById("hammer").onclick = function() {
document.getElementById("hammer").onclick = " "
myStopFunction();
document.getElementById("hammer").style.animation = "movehammer 5.3s linear forwards";
setTimeout(function() {
document.getElementById("dust").style.visibility = "visible";
setTimeout(function() {
document.getElementById("brush1").style.animation = "movebrush1 5.3s linear forwards";
setTimeout(function() {
    document.getElementById("dust").style.visibility = "hidden";
    setTimeout(function() {
         document.getElementById("reButton").style.visibility = "visible";
      },1500);

   },3500);

},3800);

},2300);

    }

 }

}


function animatel1()
{
     if (document.getElementById('l1').style.visibility=="hidden")
         document.getElementById('l1').style.visibility="visible";
     else
         document.getElementById('l1').style.visibility="hidden";
}

function animatel2()
{
     if (document.getElementById('l2').style.visibility=="hidden")
         document.getElementById('l2').style.visibility="visible";
     else
         document.getElementById('l2').style.visibility="hidden";
}

function animatel3()
{
     if (document.getElementById('l3').style.visibility=="hidden")
         document.getElementById('l3').style.visibility="visible";
     else
         document.getElementById('l3').style.visibility="hidden";
}

function Stopl1()
{
     clearInterval(myInt1);
     document.getElementById('l1').style.visibility="hidden";
}

function Stopl2()
{
     clearInterval(myInt2);
     document.getElementById('l2').style.visibility="hidden";
}
function Stopl3()
{
     clearInterval(myInt3);
     document.getElementById('l3').style.visibility="hidden";
}
