import React from "react";
import styles from "./styles/registrationForm.module.css";
import InputField from "../Input/Input";
import { Button } from "../Button/Button";

export const RegistrationForm = () => {

    return (
        <div className={styles.formStyle}>
            <form className={styles.formContainer}>Registration Form
                <InputField 
                    type="text" 
                    name="clientName" 
                    id="clientName" 
                    label="Client name" />
                <InputField 
                    type="text" 
                    name="clientSurname" 
                    id="clientSurname"
                    label="Client surname" />
                <InputField 
                    type="email" 
                    name="clientEmail" 
                    id="clientEmail"
                    label="Client email" />
                <InputField  
                    type="date" 
                    name="registrationDate" 
                    id="registrationDate"
                    label="Registration date" />
                <Button 
                    type="submit"
                    text="Confirm registration"
                />
            </form>
        </div>
)};