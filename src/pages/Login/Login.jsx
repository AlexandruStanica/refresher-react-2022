import React, { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import styles from "./Login.module.css";

function Login() {
    const { login } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        login();
    };

    return (
        <div className={styles.login}>
            <div className={styles.loginContainer}>
                <h2 className={styles.loginTitle}>Welcome back!</h2>
                <input
                    className={styles.loginInput}
                    type="text"
                    value={username}
                    placeholder="Username"
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    className={styles.loginInput}
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                />
                <button className={styles.loginButton} onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;
