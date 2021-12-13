import React from "react";
import Table from "./components/Table/Table";
import {Route, Routes} from 'react-router-dom'
import AddCompany from "./components/AddCompany/AddCompany";
import Company from "./components/Company/Company";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={ <Table/>}/>
            <Route path='addCompany' element={<AddCompany/>}/>
            <Route path='company/:name' element={<Company/>}/>
        </Routes>

    </div>
  );
}

export default App;
