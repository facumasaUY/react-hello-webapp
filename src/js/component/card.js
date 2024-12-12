import React, { useActionState } from "react";
import { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";




export const Card = (props) => {

    const {actions, store} = useContext(Context);
    
    const navigate = useNavigate();

    const handleDelete = async () => {
        console.log("Contact ID:", props.id);
        await actions.deleteContacto(props.id);
        navigate("/");
      };
    
	return (
        <div className="d-flex justify-content-center align-items-center border border-primary" style={{margin:"50px"}}> 

            <div className="card-body text-center">
                <img src={"https://i.pravatar.cc/150" + "?u=" + props.name } alt="avatar"
                    className="rounded-circle img-fluid" style={{ width: "150px" }} />
                <h5 className="my-3">{props.name}</h5>
                <p className="text-muted mb-4">{props.address}</p>
                <div className="">
                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary"><i className="fa-solid fa-pencil"></i> Edit</button>
                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary ms-1" onClick={handleDelete
            }><i className="fa-solid fa-trash-can"></i> Delete</button>
                </div>
           </div>

            <div className="card-body text-center">   
                <div className="row">
                    <div className="">
                        <p className="mb-0">Full Name</p>
                    </div>
                    <div className="">
                        <p className="text-muted mb-0">{props.name}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="">
                        <p className="mb-0">Email</p>
                    </div>
                    <div className="">
                        <p className="text-muted mb-0"><i class="fa-solid fa-envelope"></i> {props.email}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="">
                        <p className="mb-0">Phone</p>
                    </div>
                    <div className="">
                        <p className="text-muted mb-0"><i class="fa-solid fa-phone"></i> {props.phone}</p>
                    </div>
                </div>


                <div className="row">
                    <div className="">
                        <p className="mb-0">Address</p>
                    </div>
                    <div className="">
                        <p className="text-muted mb-0"><i class="fa-solid fa-location-dot"></i> {props.address}</p>
                        
                    </div>
                </div>
            </div>    
        </div>
    );
};

