import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import { Card } from "../component/card.js";
import { Button } from "../component/button.js";
import { Link } from "react-router-dom";


export const Home = () => {

  const { actions, store } = useContext(Context)
  return (


    <div>
      <div>
        <Button />
      </div>,
      <div>
        {
          store.contacts.map((item, index) => {
            return <Card 
            key={index} 
            id = {item.id}
            name={item.name}
            phone={item.phone} 
            address={item.address} 
            email={item.email} 
            />
          })
        }
      </div>
    </div>
  )
};