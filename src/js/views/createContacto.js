import React, { useActionState } from "react";
import { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const CreateContacto = () => {

  const { actions, store } = useContext(Context);

  const navigate = useNavigate()

  const [newContact, setNewContact] = useState({});

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="imputFullName" className="form-label fw-bold">Full Name</label>
          <input onChange={(evento) => setNewContact({ ...newContact, name: evento.target.value })} value={newContact.name || ''} type="text" className="form-control" id="inputFullName" placeholder="Enter full name" />
        </div>
        <div className="mb-3">
          <label htmlFor="imputEmail" className="form-label fw-bold">Email</label>
          <input onChange={(evento) => setNewContact({ ...newContact, email: evento.target.value })} value={newContact.email || ''} type="email" className="form-control" id="inputEmail" placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPhone" className="form-label fw-bold">Phone</label>
          <input onChange={(evento) => setNewContact({ ...newContact, phone: evento.target.value })} value={newContact.phone || ''} type="text" className="form-control" id="inputPhone" placeholder="Enter phone" />
        </div>
        <div className="mb-3">
          <label htmlFor="inputAddress" className="form-label fw-bold">Address</label>
          <input onChange={(evento) => setNewContact({ ...newContact, address: evento.target.value })} value={newContact.address || ''} type="text" className="form-control" id="inputAddress" placeholder="Enter address" />
        </div>
        <div className="mb-3 d-flex justify-content-between">
          <button onClick={async () => {
            await actions.createContacto(newContact)
            navigate("/")
          }} type="submit" className="btn btn-primary">Create New Contact</button>
          <Link to="/">
            <button type="submit" className="btn btn-primary">Back to Home</button>
          </Link>
        </div>
      </div>
    </>
  )
}