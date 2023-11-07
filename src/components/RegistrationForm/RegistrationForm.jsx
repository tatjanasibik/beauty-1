import React from "react";
import styles from "./styles/registrationForm.module.css";
import InputField from "../Input/Input";
import { Button } from "../Button/Button";

export const RegistrationForm = () => {

    return (
        <div className={styles.formStyle}>
            <form className={styles.formContainer}>
                <h4>Registration Form</h4>
                <label for="clientName">Client Name</label>
                <InputField 
                    type="text" 
                    name="clientName" 
                    id="clientName" />
                <label for="clientSurname">Client Surame</label>
                <InputField 
                    type="text" 
                    name="clientSurname" 
                    id="clientSurname"/>
                <label for="clientEmail">Client email</label>
                <InputField 
                    type="email" 
                    name="clientEmail" 
                    id="clientEmail"/>
                <label for="registrationDate">Registration date</label>
                <InputField  
                    type="date" 
                    name="registrationDate" 
                    id="registrationDate"/>
                <InputField  
                    type="time" 
                    name="registrationTime" 
                    id="registrationTime"/>
                <Button 
                    type="submit"
                    text="Confirm registration"
                    id="confirm-button"
                />
            </form>
        </div>
)};