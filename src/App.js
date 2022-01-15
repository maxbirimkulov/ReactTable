import React, {useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import AddCompany from "./components/AddCompany/AddCompany";
import Company from "./components/Company/Company";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import {useDispatch} from "react-redux";
import {getCompanies} from "./Redux/Reducers/table";
import EditCompany from "./components/EditCompany/EditCompany";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCompanies())
    });
    const [employees, setEmployees] = useState([]);
    const addEmployee = (e) => {
        e.preventDefault();
        setEmployees([
            ...employees,
            {
                name: e.target[0].value,
                surname: e.target[1].value,
                age: e.target[2].value,
                checked: false,
                id: employees.length + 1,
            },
        ]);
        e.target.reset();
    };

    const deleteUser = (id) => {
        setEmployees(employees.filter((item) => {
            return item.id !== id
        }))
    };
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="addCompany" element={<AddCompany employees={employees} setEmployees={setEmployees} addEmployee={addEmployee} deleteUser={deleteUser}/>} />
          <Route path="company/:name" element={<Company />} />
          <Route path="company/:name/edit" element={<EditCompany employees={employees} setEmployees={setEmployees} addEmployee={addEmployee} deleteUser={deleteUser}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
