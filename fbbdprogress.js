// Auto-scroll until all months are loaded
bdmocard=document.getElementById("birthdays_monthly_card");
var scrollInterval = setInterval(function() {
  console.log(bdmocard.children.length);
  console.log(bdmocard.children[bdmocard.children.length-1].id);
  window.scrollTo(0,document.body.scrollHeight);
  if(bdmocard.children[bdmocard.children.length-1].id=="") {
    console.log("Done");
    clearInterval(scrollInterval);
  }
}, 500);

// figure out (Sunday) - (Saturday) month and day - last div/child/[11]
var now=new Date();
var fullYear=now.getFullYear();
var dayOfWeek=now.getDay();
// getDay returns 0-6

// var Nd, Md, Td, Wd, Rd, Fd, Sd - all new Date()s
// string object {{"Sunday":nd},...}
var tomorrow=new Date();
tomorrow.setDate(now.getDate()+1);
// setDate takes care of month & year overflow

// splitting name and date/day
rstr.slice(0,-1);

// incorporate FBtoVCALENDAR.js
//   - see if EndDt is really necessary...


bdmocard=document.getElementById("birthdays_monthly_card");

console.log(bdmocard.children.length);
console.log(bdmocard.children[bdmocard.children.length-1].id);

/*
bdmocard=document.getElementById("birthdays_monthly_card");
var myElement = document.getElementById("birthdays_monthly_card");
myElement.addEventListener("DOMSubtreeModified", contentChanged, false);
function contentChanged() {
  console.log(bdmocard.children.length);
  console.log(bdmocard.children[bdmocard.children.length-1].id);
//  console.log("contentChanged");
}
*/

// event listeners, or, at least, a timer...
while(document.getElementById("birthdays_monthly_card").children[document.getElementById("birthdays_monthly_card").children.length-1].id!="") {
  // scroll to end
}

// 13 times(?) do:
window.scrollTo(0,document.body.scrollHeight);

var notChangedStepsCount = 0;
var scrollInterval = setInterval(function() {
    var element = document.querySelector(".element-selector");
    if (element) { 
        // element found
        clearInterval(scrollInterval);
        element.scrollIntoView();
    } else if((document.documentElement.scrollTop + window.innerHeight) != document.documentElement.scrollHeight) { 
        // no element -> scrolling
        notChangedStepsCount = 0;
        document.documentElement.scrollTop = document.documentElement.scrollHeight;
    } else if (notChangedStepsCount > 20) { 
        // no more space to scroll
        clearInterval(scrollInterval);
    } else {
        // waiting for possible extension (autoload) of the page
        notChangedStepsCount++;
    }
}, 50);

