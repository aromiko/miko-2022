import React from "react";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <h4>miko aro</h4>
        </header>
    );
};

export default Header;
