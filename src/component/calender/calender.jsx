import React,{useState}from 'react'

import '../../assets/css/calender.css'


export default function Calender() {
    var dt = new Date()
    // date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


    //   Last Month Days
    var prevDay = dt.getDay()-1;
      console.log(prevDay);
     
     
     //  Current Month Days
     var endDate = new Date(
         dt.getFullYear(),
         dt.getMonth()+1,
         0
         ).getDate();
    
        
    

// Year Code
    let years = dt.getFullYear()
  const [year,setYear]=useState(years)

// Months Code
  let monthNumber = (new Date().getMonth());
   monthNumber = monthNumber++;
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthName = monthNames[monthNumber];

// Days Code
// Previous Month days
var prev_Date = new Date(dt.getFullYear(),dt.getMonth(),0).getDate();
console.log(prev_Date)

let lastMonthDay = (endDate)=> {
    let monthDays = [];
    for(let i=0; i<prevDay; i--){
       monthDays.push(prev_Date-i);
    }
//    return monthDays.map((lastDay)=> {
//         return (<div>{prev_Date}</div>) 

//     })
}
// Current Month days
let currentDays = (endDate)=> {
    let monthDays = [];
    for(let i=1; i<=endDate; i++){
       monthDays.push(i);
    }
   return monthDays.map((singleDay)=> {
        return (<div>{singleDay}</div>) 

    })
}



    return (
<div className="wrapper container-fluid pt-4">
    <div className="calendar">
        <div className="month">
            <div>
                <p className="year-month pt-3">
                    <span id="months">{monthName} </span>
                    <span className="lightgray" id="year">/ {year}</span>
                </p>
            </div>
           
            <div className="triggers lightgray">
                <span className="fa fa-chevron-left prev"></span>
                &nbsp; &nbsp;
                <span className="fa fa-chevron-right next"></span>
            </div>
        </div>
        <div className="weekend pt-3">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tus</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
        </div>
        <div className="days">
         
          {lastMonthDay(endDate)}
          {/* Map for Days */}
          {currentDays(endDate)}
        </div>
    </div>

</div>
    )

}
