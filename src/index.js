import React from "react";
import ReactDOM from "react-dom/client";
import Parent from "./Parent";
 import "./style.css"
 import one from "./assets/images/one.jpg"
 import two from "./assets/images/two.jpg"
 import three from "./assets/images/three.jpg"
 import four from "./assets/images/four.jpg"
 import five from "./assets/images/five.jpg"
 import six from "./assets/images/six.jpg"
// import name from "./data.js"

const root = ReactDOM.createRoot(document.getElementById("root"))

function Contact(props)
{
    return(
        <>
        
        <div className="contact">
            <div className="contactinfo">
                <div className="contactinfo_face">{props.face}</div>
          <div className="contactinfo_details">
             <h3>{props.contactname}</h3><br></br>
             <p>{props.status}</p>
           </div>
           <div className="contactinfo_time">
            <p>{props.time}</p><br></br>
            <p style={{color:"green", fontSize:"24px"}}>★</p>
           </div>
           </div>
        </div>
        </>
    )
}
//Search component
function Search()
{
    return(
    <div className="contact">
        <input type="search" placeholder="Search" style={{width:"100%"}}></input>
    </div>
    )
}
var contactInfo =[
    {
        face:<img src={one} alt="face"></img>,
        myname :"Jessica Koel",
        desc:"Hey, Joel, I here to help you out please...",
        time:"11.26"


    },
    {
        face:<img src={two} alt="face"></img>,
        myname :"Komieal Bolger",
        desc:"I will send you All documents as soon a..",
          time:"12.26"
    },
    {
        face:<img src={three} alt="face"></img>,
        myname :"Tamaara Suiale",
        desc:"Are you going to Business trip next week",
          time:"8.26"
    },
    {
        face:<img src={four} alt="face"></img>,
        myname :"Sam Nielson",
        desc:"I suggest to start new business soon",
          time:"7.16"
    },
    {
        face:<img src={five} alt="face"></img>,
        myname :"Caroline Nexon",
        desc:"We need to start new research center.",
          time:"9.26"
    },
    {
        face:<img src={six} alt="face"></img>,
        myname :"Patrick Koeler",
        desc:"May be yes",
          time:"3.26"
    }
]

root.render(
    <div>
         <Search></Search> 
        {
       contactInfo.map(function(item)
    {
        return <Contact face={item.face} contactname={item.myname} status={item.desc} time={item.time}></Contact>

    })
}
   
    </div>
)

