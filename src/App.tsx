import { Footer, Header } from "components/global";

import React from "react";
import { Router } from "utils";

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Router />
            <Footer />
        </>
    );
};

export default App;
