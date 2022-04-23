import React  from "react";
import Noimage from "./noimage.jpg"
export default function NewsItem (props) {
  
    return (
      <>
        <div className="card">
          <img src={(props.imageUrl)? props.imageUrl:Noimage} className="card-img-top" style={{width:"100%",height:"150px"}}  alt="..."/>
          <div className="card-body">
            <h5 className="card-title" style = {{height:"100px"}}> {(props.title)?(props.title.slice(0,40)+"..."):("")} </h5>
            <p className="card-text" ><small>News By:-{(props.author)?(props.author):("Unknown")}</small> </p>
            <p className="card-text" ><small>Date:-{new Date(props.date).toGMTString()}</small> </p>
            <p className="card-text" ><small>Source:-{props.source}</small> </p>
            <p className="card-text" style = {{height:"80px"}}>{(props.description)?(props.description.slice(0,50))+"...":("")} </p>
            <a href={props.newsUrl} className="btn btn-primary w-100 ">
              Read Full News
            </a>
          </div>
        </div>
      </>
    )
  }

