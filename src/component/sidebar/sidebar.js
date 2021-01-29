import React from 'react'
import Mycalendar from '../calender/calender'
import  '../../assets/css/sidebar.css'
import Dashboard from '../../assets/image/dashboard.png'
import Categorias from '../../assets/image/calender.png'
import Professero from '../../assets/image/people.png'
import Alunos from '../../assets/image/cap.png'
import Message from '../../assets/image/message.png'
export default function sidebar(){

    const showOrHideDiv=()=> {
        var v = document.getElementById("show");
        var icon = document.getElementById("icon1");
        if (v.style.display === "none") {
          v.style.display = "block";
          icon.style.transform = "rotate(0deg)";
        } 
        else {
          v.style.display = "none";
          icon.style.transform = "rotate(180deg)";
        }
      }
    return (
   <div >
    <div className="col-md-3 p-0 bg-white rounded">
{/*Calender Code start*/}

<Mycalendar/>
{/*Calender Code end*/}
<br/>

          <hr/>
          <div className="pt-4 pl-3">
              <img src={Dashboard} alt="..." className="img-fluid w-22"></img>
              <span>&nbsp; &nbsp; &nbsp;Dashboard</span>
          </div>
          <div className="pt-4 pl-3 d-flex ">
              <img src={Categorias} alt="..." className="img-fluid w-22 h-22"></img>
              <span>&nbsp; &nbsp; &nbsp;Categorias</span>
              <div className="ml-auto pr-5"><i className="fa fa-angle-down h4 text-primary p-0" aria-hidden="true" id="icon1" onClick={showOrHideDiv}></i></div>
          </div>
        <div id="show">
        <div className="pt-2 pl-3">
              <img src={Professero} alt="..." className="img-fluid w-22"></img>
              <span>&nbsp; &nbsp; &nbsp;Professero</span>
          </div>
        <div className="pt-4 pl-3">
              <img src={Alunos} alt="..." className="img-fluid w-22"></img>
              <span>&nbsp; &nbsp; &nbsp;Alunos</span>
          </div>
        <div className="pt-4 pl-3">
              <img src={Message} alt="..." className="img-fluid w-22"></img>
              <span>&nbsp; &nbsp; &nbsp;Responsável Financeiro</span>
          </div>
        </div>
    </div>
   </div>
    )
}

