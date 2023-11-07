import styles from "./styles/navigation.module.css";
import {NavLink} from "react-router-dom";
import { Button } from "../Button/Button";

export const Navigation = () => {
    return (
        <div className={styles.navContainer}>
        <nav className={styles.navStyles}>
            <ul className={styles.ulStyles}>
                <li>
                    <NavLink to="/">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/registration">Registration</NavLink>
                </li>
                <li>
                    <NavLink to="/admin">Admin</NavLink>
                </li>
                <li>
                    <Button text="Logout"></Button>
                </li>
            </ul>
        </nav>
    </div>    
    )
}