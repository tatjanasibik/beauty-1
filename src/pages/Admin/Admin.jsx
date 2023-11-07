import styles from "./styles/admin.module.css";
import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm";
import {RegistrationList} from "../../components/RegistrationList/RegistrationList";

export const Admin = () => {
    return (
    <div>
      <RegistrationForm  />
      <RegistrationList />
    </div>
    
    )
  };