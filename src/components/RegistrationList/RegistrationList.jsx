import React, { useState, useEffect } from "react";
import styles from "./styles/registrationList.module.css";
import { Button } from "../Button/Button";
import { BASE_URL } from "../../constants/api";

export const RegistrationList = () => {

    // const createNewClientFormElement = document.getElementById("create-client-form");//klaida
    // const clientListTableBody = document.querySelector("#client-list-container tbody");
    // const[data, setData] = useState('');
    const addClient = (event) => {
    
    const client = {
            clientName: event.target['clientName'].value,
            clientSurname: event.target['clientSurname'].value,
            clientEmail: event.target['clientEmail'].value,
            clientDate: event.target['registrationDate'].value,
            clientTime: event.target['registrationTime'].value,
        };
    
        console.log(client);
    
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
    
    // const updateClient = (clientId, clientData) => {
    //     fetch(`${BASE_URL}/clients/${clientId}`, {
    //         method: "PUT",
    //         headers: {
    //             'Content-type': 'application/json',
    //         },
    //         body: JSON.stringify(clientData),
    //     })
    //         .then((response) => response.json())
    //         .then((result) => alert(result.message))
    //         .catch((error) => console.error(error.message));
    // };
    
    // const deleteClient = async (clientId) => {
    //     await fetch(`${BASE_URL}/clients/${clientId}`, {
    //         method: "DELETE",
    //     })
    //         .then((response) => response.json())
    //         .then((result) => {
    //             alert(result.message);
    //             fetchClients();
    //         })
    //         .catch((error) => console.error(error.message));		
    //     };

    return (
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
                        <td>
                            <Button 
                                type="update"
                                text="Update"
                                id="update-button"
                            />
                        </td>
                        <td>
                            <Button 
                                type="delete"
                                text="Delete"
                                id="delete"
                            />
                        </td>
                        </tr>
                    </tbody>
                    )}
                </table>
            </div>    
        </div>
    );
};