import React from "react";
import styles from "./styles/registrationList.module.css";
import { Button } from "../Button/Button";
import { BASE_URL } from "../../constants/api";

export const RegistrationList = () => {

    // const createNewClientFormElement = document.getElementById("create-client-form");//klaida
    const clientListTableBody = document.querySelector("#client-list-container tbody");
    
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
    
    const fetchClients = () => {
        fetch(`${BASE_URL}/clients`)
        .then((response) => response.json())
        .then((clients) => {
            displayClients(clients);
        })
        .catch((err) => {
            console.error(err);
        });
    };
    
    fetchClients();
    
    const displayClients = (clients) => {
        const clientRows = clients.map(createClientRow);
    
        clientListTableBody.append(...clientRows);
    }
    
    const createClientRow = (client) => {
        const tr = document.createElement("tr");
        const clientNameCell = document.createElement("td");
        const clientSurnameCell = document.createElement("td");
        const clientEmailCell = document.createElement("td");
        const clientDateCell = document.createElement("td");
        const clientTimeCell = document.createElement("td");
        const updateCell = document.createElement("td");
        const deleteCell = document.createElement("td");
        const updateBtn = document.createElement("button");
        const deleteBtn = document.createElement("button");
    
        clientNameCell.setAttribute("contentEditable", "true");
        clientSurnameCell.setAttribute("contentEditable", "true");
        clientEmailCell.setAttribute("contentEditable", "true");
        clientDateCell.setAttribute("contentEditable", "true");
        clientTimeCell.setAttribute("contentEditable", "true");
    
        clientNameCell.textContent = client.clientName;
        clientSurnameCell.textContent = client.clientSurname
        clientEmailCell.textContent = client.clientEmail;
        clientDateCell.textContent = client.clientDate;
        clientTimeCell.textContent = client.clientTime;
        updateBtn.textContent = "Update";
        deleteBtn.textContent = "Delete";
    
        updateBtn.addEventListener("click", () => {
            console.log(client._id);
    
            const clientData = {
                clientName:  clientNameCell.textContent,
                clientSurname: clientSurnameCell.textContent,
                clientEmail: clientEmailCell.textContent,
                clientDate: clientDateCell.textContent,
                clientTime: clientTimeCell.textContent,
            };
            updateClient(client._id, clientData);
        });
    
        deleteBtn.addEventListener("click", async () => {
            console.log(client._id);
            await deleteClient(client._id);
            fetchClients();
        });
    
        updateCell.appendChild(updateBtn);
        deleteCell.appendChild( deleteBtn);
        tr.append(clientNameCell, clientSurnameCell, clientEmailCell, clientDateCell, clientTimeCell, updateCell, deleteCell);
    
        return tr;
    };
    
    const updateClient = (clientId, clientData) => {
        fetch(`${BASE_URL}/clients/${clientId}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(clientData),
        })
            .then((response) => response.json())
            .then((result) => alert(result.message))
            .catch((error) => console.error(error.message));
    };
    
    const deleteClient = async (clientId) => {
        await fetch(`${BASE_URL}/clients/${clientId}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((result) => {
                alert(result.message);
                fetchClients();
            })
            .catch((error) => console.error(error.message));		
        };
    
    
    // createNewClientFormElement.addEventListener("submit", addClient);
    
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
                    <tbody>
                        <tr>
                            <td contenteditable="true">Tatjana</td>
                            <td contenteditable="true">Sibik</td>
                            <td contenteditable="true">tatjana.sibik@gmail.com</td>
                            <td contenteditable="true">2023.12.01</td>
                            <td contenteditable="true">12.30</td>
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
                        <div id="create-client-form"></div>
                    </tbody>
                </table>
            </div>    
        </div>
)};
