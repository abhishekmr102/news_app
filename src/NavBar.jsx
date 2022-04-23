import React from "react";
import {Link} from "react-router-dom";
export default function  NavBar () {
  
    return (
      <div>
        <>
          <nav className=" navbar  navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/" style={{color:"red"}}>
                Mr. ABHISHEK
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent">

                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                   
                    
                    <li className="nav-item"><Link className="nav-link" to="/" onClick ={()=>{
                      var div=document.getElementsByClassName("nav-item")
                      for(let i=0; i<div.length;i++)
                      div[i].style.border="none"
                      document.getElementById("all").style.borderBottom="3px solid white"
                    }}>ALL</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/business" onClick ={()=>{
                      var div=document.getElementsByClassName("nav-item")
                      for(let i=0; i<div.length;i++)
                      div[i].style.border="none"
                      document.getElementById("business").style.borderBottom="3px solid white"
                    }}>BUSINESS</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/health" onClick ={()=>{
                      var div=document.getElementsByClassName("nav-item")
                      for(let i=0; i<div.length;i++)
                      div[i].style.border="none"
                      document.getElementById("health").style.borderBottom="3px solid white"
                    }}>HEALTH</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/sports" onClick ={()=>{
                      var div=document.getElementsByClassName("nav-item")
                      for(let i=0; i<div.length;i++)
                      div[i].style.border="none"
                      document.getElementById("sports").style.borderBottom="3px solid white"
                    }}>SPORTS</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/technology" onClick ={()=>{
                      var div=document.getElementsByClassName("nav-item")
                      for(let i=0; i<div.length;i++)
                      div[i].style.border="none"
                      document.getElementById("technology").style.borderBottom="3px solid white"
                    }}>TECHNOLOGY</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/entertainment" onClick ={()=>{
                      var div=document.getElementsByClassName("nav-item")
                      for(let i=0; i<div.length;i++)
                      div[i].style.border="none"
                      document.getElementById("entertainment").style.borderBottom="3px solid white"
                    }}>ENTERTAINMENT</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/science" onClick ={()=>{
                      var div=document.getElementsByClassName("nav-item")
                      for(let i=0; i<div.length;i++)
                      div[i].style.border="none"
                      document.getElementById("science").style.borderBottom="3px solid white"
                    }}>SCIENCE</Link></li>
                    

                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </>
      </div>
    );
  }


