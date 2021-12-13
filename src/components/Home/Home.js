import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import './home.css'

const Home = () => {
    const companies = useSelector((store)=> store.table.companies );
    console.log(companies)
    return (
        <div>
            <Link to='/addCompany'>Добавить свою компанию</Link>
            <div className='companies__row'>
                {companies.map((item)=>(
                    <Link key={item.companyName} to={`company/${item.companyName}`}>{item.companyName}</Link>
                ))}
            </div>
        </div>
    );
};

export default Home;