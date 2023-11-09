import React from "react";
import styles from "./styles/registrationForm.module.css";
import InputField from "../Input/Input";
import { Button } from "../Button/Button";
import {RegistrationList}  from "../RegistrationList/RegistrationList";

export const RegistrationForm = () => {

    return (
        <div className={styles.formStyle}>
            <form className={styles.formContainer} onSubmit={addClient}>
                <h4>Registration Form</h4>
                <label htmlFor="clientName">Client Name</label>
                <InputField 
                    type="text" 
                    name="clientName" 
                    id="clientName" />
                <label htmlFor="clientSurname">Client Surname</label>
                <InputField 
                    type="text" 
                    name="clientSurname" 
                    id="clientSurname"/>
                <label htmlFor="clientEmail">Client email</label>
                <InputField 
                    type="email" 
                    name="clientEmail" 
                    id="clientEmail"/>
                <label htmlFor="registrationDate">Registration date</label>
                <InputField  
                    type="date" 
                    name="registrationDate" 
                    id="registrationDate"/>
                <label htmlFor="registrationTime">Registration time</label>
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
            <RegistrationList></RegistrationList>
        </div>
)};