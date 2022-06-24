import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from "./App";
import Igra from "./Igra";
import Pravila from "./Pravila";

ReactDOM.render(<Router>
    <Route exact path="/">

        <App >
            <p>Dobrodošli!</p>
        </App>
    </Route>
    <Route path="/igra">
        <App >
            <Igra />
        </App>
    </Route>
    <Route path="/pravila">
        <App >
            <Pravila />
        </App>
    </Route>
</Router>, document.getElementById('root'));