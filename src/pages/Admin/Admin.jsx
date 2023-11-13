import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";
import InputField from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import styles from "./styles/admin.module.css";

export const Admin = () => {

  const addClient = (event) => {
    
    const client = {
            clientName: event.target['clientName'].value,
            clientSurname: event.target['clientSurname'].value,
            clientEmail: event.target['clientEmail'].value,
            clientDate: event.target['registrationDate'].value,
            clientTime: event.target['registrationTime'].value,
        };
    
        fetch(`${BASE_URL}/clients`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(client),
        })
        .then((response) => response.json())
        .then(fetchClients)
        .catch((error) => alert(error.message));
    };
    
    const[clientListData, setClients] = useState([])
    const fetchClients = () => {
        fetch(`${BASE_URL}/clients`)
        .then((response) => response.json())
        .then((clients) => {
            setClients(clients);
        })
        .catch((err) => {
            console.error(err);
        });
    };
    
    useEffect(() => {
        fetchClients()
    }, []);
    
    const updateClient = async (clientId, clientData) => {
      try {
        const response = await fetch(`${BASE_URL}/clients/${clientId}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(clientData),
        });
        if (!response.ok) {
          const data = await response.json();
          alert(data.message);
          return;
        }
    
        alert("Updated");
      } catch (error) {
        alert(error);
      }
    };
        
    const deleteClient = async (clientId) => {
      try {
        const response = await fetch(`${BASE_URL}/clients/${clientId}`, {
            method: "DELETE",
            headers: {
              'Content-type': 'application/json',
          },
        });
        if (!response.ok) {
          const data = await response.json();
          alert(data.message);
          return;
        }
    
        alert("Deleted");
        fetchClients();
      } catch (error) {
        alert(error);
      }
    };
        

    return (
    <div>
      <div className={styles.formStyle}>
            <form className={styles.formContainer} onSubmit={addClient}>
                <h4>Registration Form</h4>
                <label htmlFor="clientName">Client Name</label>
                <InputField type="text" name="clientName" id="clientName" />
                <label htmlFor="clientSurname">Client Surname</label>
                <InputField type="text" name="clientSurname" id="clientSurname"/>
                <label htmlFor="clientEmail">Client email</label>
                <InputField type="email" name="clientEmail" id="clientEmail"/>
                <label htmlFor="registrationDate">Registration date</label>
                <InputField  type="date" name="registrationDate" id="registrationDate"/>
                <label htmlFor="registrationTime">Registration time</label>
                <InputField  type="time" name="registrationTime" id="registrationTime"/>
                <Button type="submit" text="Confirm registration" id="confirm-button"
                />
            </form>
        </div>
      <div className={styles.listStyle}>
            <h4>Clients List</h4>
            <div id="client-list-container">
                <table>
                    <thead>
                        <tr>
                            <th>Client Name</th>
                            <th>Client surname</th>
                            <th>Client email</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {clientListData.map((client) => 
                      <tbody>
                          <tr>
                            <td contenteditable="true">{client.clientName}</td>
                            <td contenteditable="true">{client.clientSurname}</td>
                            <td contenteditable="true">{client.clientEmail}</td>
                            <td contenteditable="true">{client.clientDate}</td>
                            <td contenteditable="true">{client.clientTime}</td>
                            <td><Button type="update" text="Update" id="update-button" onClick = {()=>updateClient(client._id, client.clientData)}/></td>
                            <td><Button type="delete" text="Delete" id="delete" onClick={()=>deleteClient(client._id)}/></td>
                          </tr>
                      </tbody>
                    )}
                </table>
            </div>    
        </div>
    </div>   
  )
};