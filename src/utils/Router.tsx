import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContactPage, HomePage } from "pages";

import React from "react";
import { RouteNames } from "enums";

export const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={RouteNames.home} element={<HomePage />} />
                <Route path={RouteNames.contact} element={<ContactPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
