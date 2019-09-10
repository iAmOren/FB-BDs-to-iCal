// https://www.facebook.com/events/birthdays/
// Manually scroll to end of page = adding months until 12 = end

// Manually fix *** dates

bdli=document.getElementsByClassName("_43q7");

okToProcess=false;
monthToStart="09";
count=0;

bdtext="BEGIN:VCALENDAR"+"\r\n";
for(i=0;i<bdli.length;i++) {
  nameAndDateArray=bdli[i].firstElementChild.dataset.tooltipContent.split(")")[0].split(" (");
  name=nameAndDateArray[0];
  desc=bdli[i].firstElementChild.href;
  
  if(nameAndDateArray[1].indexOf("/")<0) {
    month="***";
    day="***";
    dayEnd="***";
  } else {
    monthAndDayArray=nameAndDateArray[1].split("/");
    day=monthAndDayArray[1];
    dayEnd=""+(Number(day)+1);
    if(day.length<2) day="0"+day;
    if(dayEnd.length<2) dayEnd="0"+dayEnd;
    month=monthAndDayArray[0];
    if(month.length<2) month="0"+month;
  }
  dateStart="2019"+month+day;
  dateEnd="2019"+month+dayEnd;
  
  if(!okToProcess)
    if(month==monthToStart)
      okToProcess=true;
  
  if(okToProcess) {
    count++;
    bdtext+="BEGIN:VEVENT"+"\r\n";
    bdtext+="DTSTART;VALUE=DATE:"+dateStart+"\r\n";
    bdtext+="DTEND;VALUE=DATE:"+dateEnd+"\r\n";
    bdtext+="RRULE:FREQ=YEARLY"+"\r\n";
    bdtext+="SUMMARY:"+name+"\r\n";
    bdtext+="DESCRIPTION:"+desc+"\r\n";
    bdtext+="END:VEVENT"+"\r\n";
  }

}

bdtext+="END:VCALENDAR"+"\r\n";
console.log("count="+count);
