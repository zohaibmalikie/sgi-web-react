import React from 'react'
// import Calender from '../calender/calender'
 import '../../assets/css/buttonsBelowNavbar.css'
export default function buttonsBelowNavbar() {
    return (

     

            <div className="col-md-9 bg-white pl-5 pt-4">
    
            <div className="row pt-4 ">
              <div className="col-md-3 col-lg-3 col-sm-12 pt-1">
                <h5 className="a-date  selected-change"></h5>
              </div>
            
              <div className="col-md-2 col-lg-2 col-sm-2 a-colorBlue-portal bg-white a-borderRadius-portal col-lg-portal text-center ml-auto p-0">
             <div className="top-heading-portal ">
              <h6 className="top-heading-padding-portal"><a className="text-decoration-none" href="#">Dia</a></h6>
             </div>
              </div>
              <div className="col-md-2 col-lg-2 col-sm-2 a-colorBlue-portal bg-white a-borderRadius-portal  col-lg-portal text-center p-0" >
               <div className="top-heading-portal  ">
                 <h6 className="top-heading-padding-portal"><a className="text-decoration-none" href="#">Semana</a></h6>
               </div>
               </div>
               <div className="col-md-2 col-lg-2 col-sm-2 a-colorBlue-portal bg-white a-borderRadius-portal col-lg-portal text-center p-0">
               <div className="top-heading-portal top-heading-bottom-border-portal"> <h6 className="top-heading-padding-portal"><a className="text-decoration-none font-weight-bold" href="#">Mês</a></h6></div>
               </div>
               <div className="col-md-2 col-lg-2 col-sm-2 a-colorBlue-portal bg-white a-borderRadius-portal    col-lg-portal text-center p-0">
                <div className="top-heading-portal"><h6 className="top-heading-padding-portal"><a className="text-decoration-none" href="#">Ano</a></h6></div>               </div>
            
            
            </div>

            </div>
     
    )
}
