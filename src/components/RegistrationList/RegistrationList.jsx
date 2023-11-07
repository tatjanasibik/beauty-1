import React from "react";
import styles from "./styles/registrationList.module.css";
import { Button } from "../Button/Button";

export const RegistrationList = () => {

    return (
        <div className={styles.listStyle}>
            <h4>Clients List</h4>
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
                    
                </tbody>
            </table>
        </div>
)};
