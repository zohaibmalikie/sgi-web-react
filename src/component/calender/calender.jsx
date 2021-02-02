import React,{useState, useEffect}from 'react'

import '../../assets/css/calender.css'


export default function Calender() {
    const [monthTOChnage,setMonthChanged]=useState('')
    const [monthNumber, setMonthNumber] = useState('')
   
useEffect(() => {
    let dd = (new Date().getMonth()+1 )
   setMonthNumber(dd)
// alert('ddd')
}, [])
console.log((new Date().getMonth()));

    var dt = new Date()
    // date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


    //   Last Month Days
    var prevDay = dt.getDay()-1;
    var nextDay = dt.getDay();

    //   console.log(prevDay);
     
     
     //  Current Month Days
     var endDate = new Date(dt.getFullYear(), dt.getMonth()+1, 0 ).getDate();
     var prev_Date = new Date(dt.getFullYear(),dt.getMonth(),0).getDate();
    //  console.log(prev_Date)
     var today =new Date().getDate();
    //  console.log(today);
    
        
    

// Year Code
    let years = dt.getFullYear()
  const [year,setYear]=useState(years)

// Months Code
//   let monthNumber = (new Date().getMonth());
    //   monthNumber = monthNumber++;
    
    // setMonthNumber(monthNumber + 1)

let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthName = monthNames[monthNumber];
useEffect(() => {
    setMonthChanged(monthName)
}, [])

// Days Code

// Previous Month days


let lastMonthDay = (endDate)=> {
    let monthDays = [];
    for(let i=0; i<prevDay; i++){
       monthDays.push(prev_Date-i);
    }
   return monthDays.reverse().map((lastDay)=> {
        return (<div className="prev-date">{lastDay}</div>) 

    })
}
// Current Month days
let currentDays = (endDate)=> {
    let monthDays = [];
    for(let i=1; i<=endDate; i++){
        
       monthDays.push(i);
    }
   return monthDays.map((singleDay)=> {
       if(singleDay==today){
           return (<div className="today">{singleDay}</div>) 
       }else{
           return (<div>{singleDay}</div>) 
       }
    })
}

// Next days


let nextMonthDay = (endDate)=> {
    let monthDays = [];
    for(let i=1; i<=nextDay; i++){
       monthDays.push(i);
    }
   return monthDays.map((nextDay)=> {
        return (<div className="prev-date">{nextDay}</div>) 

    })
}

// Change Month on trigger
const changeMonth=(value)=>{
//previous Month
if (value=='prev'){
    // monthNumber= --monthNumber;
    setMonthNumber(monthNumber - 1)

    if( monthNumber<0){
        // monthNumber=11
        setMonthNumber(11)
    }
    let monthNamePrev = monthNames[monthNumber];
    // console.log(monthNamePrev);
    setMonthChanged(monthNamePrev);
    
}
//next Month
else if (value=='next'){
    // monthNumber++;
    setMonthNumber(monthNumber + 1)

    if(monthNumber>11 ){
        // monthNumber=0
        setMonthNumber(0)
    }
    // dt.setMonth(dt.getMonth()+1);
    let monthNameNext = monthNames[monthNumber]; 
    
    setMonthChanged(monthNameNext);
    
}
else{
    console.log('condition false');

}

}
// console.log(changeMonth);

return (
<div className="wrapper container-fluid pt-4">
    <div className="calendar">
        <div className="month">
            <div>
                <p className="year-month pt-3">
                    <span id="months">{monthTOChnage}</span>
                    <span className="lightgray" id="year">/ {year}</span>
                </p>
            </div>
           
            <div className="triggers lightgray">
                <span className="fa fa-chevron-left prev" onClick={(e)=>changeMonth('prev')}></span>
                &nbsp; &nbsp;
                <span className="fa fa-chevron-right next" onClick={(e)=>changeMonth('next')}></span>
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
          {nextMonthDay(endDate)}
        </div>
    </div>

</div>
    )

}
