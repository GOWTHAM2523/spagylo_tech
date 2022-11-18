import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './onlineshopping.css';
import {useEffect,useState} from "react";
import { Rating } from 'react-simple-star-rating';


export function Shopping(){
    
    const [Productlist,setProductlist]=useState([]);

    
    useEffect(
        function Products(){
          fetch('https://fakestoreapi.com/products?limit=20')
          .then((response)=> response.json())
          .then((productdetails)=>{
                //console.log(productdetails)
                setProductlist(productdetails)
          })
        },[]
    )
   

   return (
        
    <div className="row">   

        {Productlist.map((value,index)=>(

            <div className="col-lg-4" key={index}>

                <div className="card">

                    <div className="card-header col-lg-12 row">
                        <div className="col-lg-4"></div>
                        <img src={value.image} className="productimage col-lg-4"/>
                        <div className="col-lg-4"></div>
                    </div>

                    <div className="card-body p-5">
            
                        <h3>{value.title}</h3>
                        <h3>{value.price}</h3>
                        <p>{value.description}</p>
                        <h3>{value.category}</h3>
                        <Rating initialValue={value.rating.rate} />   
                        
                    </div>

                </div>

            </div>  

        ))}

    </div>

   );
   
}