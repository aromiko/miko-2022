import React from "react";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <p>Header</p>
        </header>
    );
};

export default Header;
