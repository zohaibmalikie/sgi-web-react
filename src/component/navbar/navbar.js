import React from 'react'

import  '../../assets/css/navbar.css'
import Logo from '../../assets/image/logo.png'
import Message from '../../assets/image/icon-2.png'
import Contact from '../../assets/image/icon-01.png'
import Face from '../../assets/image/face-01.png'

// import  '../../assets/image/'
export default function navbar() {
    return (
     <React.Fragment>
 <div className="">
      <nav className="navbar navbar-expand-lg navbar-light pl-0 pr-0">
  <a className="navbar-brand col-md-2-change" href="#"><img  src={Logo} alt="..." className="h-54 img-fluid"></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <form className="form-inline my-2 my-lg-0 col-md-6 pr-0">
      <span><i className="fa fa-search search-icon pl-3" aria-hidden="true"></i></span>
      <input className="form-control mr-sm-2 w-100 pl-5 border-0" type="search" placeholder="Busca" aria-label="Search" />
    </form>
    {/* Empty Column */}
    <div className="col-md-2"></div>
    {/* Empty Column */}
    <ul className="navbar-nav  ml-1 col-md-3 col-sm-12">
      <li className="nav-item ml-3">
        <a className="nav-link z-button-white" href="#"><i className="fa fa-bell-o bell-icon" aria-hidden="true"></i>
        <span className="z-circle-yellow"></span>
        </a>
      </li>
      <li className="nav-item ml-3">
        <a className="nav-link  p-0 ml-2" href="#"><img src={Message} alt="" className=" w-35"></img></a>
      </li>
      <li className="nav-item ml-3">
        <a className="nav-link  p-0  ml-2" href="#"><img src={Contact} alt="" className=" w-35"></img></a>
      </li>
      <li className="nav-item ml-3">
        <a className="nav-link p-0 ml-2" href="#"><img src={Face} alt="" className=" w-35"></img></a>
      </li>
      <li className="nav-item dropdown p-0">
        <a className="nav-link dropdown-toggle font-weight-bolder p-1 ml-3" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       Galante &nbsp;
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
<div className="row pt-3 pb-3">
<div className="col-md-2 col-sm-6">
  <h4>Tarefas de hoje</h4>
</div>
<div className="col-md-1 col-sm-2">
<span className="circle-number">6</span>
</div>
<div className="col-md-1 col-sm-2 ml-auto pl-0 pr-0">
<a href="#">
<button type="button" className="btn btn-light border text-end"><i className="fa fa-backward" aria-hidden="true"></i>  Voltar</button>
  </a>
</div>

</div>

</div>  
     </React.Fragment>
    )
}
