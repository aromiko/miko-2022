import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContactPage, HomePage } from "pages";

import React from "react";
import { RouteNames } from "enums";
import styles from "./Router.module.scss";

export const Router: React.FC = () => {
    return (
        <div className={styles.router}>
            <BrowserRouter>
                <Routes>
                    <Route path={RouteNames.home} element={<HomePage />} />
                    <Route
                        path={RouteNames.contact}
                        element={<ContactPage />}
                    />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Router;
