import { Footer, Header } from "components/global";

import HomePage from "pages/HomePage";
import React from "react";

const App: React.FC = () => {
    return (
        <>
            <Header />
            <HomePage />
            <Footer />
        </>
    );
};

export default App;
