import React from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {changeAll, changeChecked} from "../../Redux/Reducers/table";

const Company = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const company  = useSelector((store)=> store.table.companies.filter((item)=> item.companyName === params.name)[0]);

    return (
        <div>
            Одна компания
            <h1>{company.companyName}</h1>
            <img src={company.logo} alt="logo"/>
            <p>Description: {company.description}</p>
            <table>
                <thead>
                <tr>
                    <th colSpan='4'>{company.companyName}</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <input type="checkbox" checked={company.allCheck} onChange={()=> dispatch(changeAll(company.id))}/>
                    </td>
                    <td>Name</td>
                    <td>UserName</td>
                    <td>Age</td>
                </tr>
                {company.employees.map(item=>(
                    <tr key={item.id}>
                        <td>
                            <input type="checkbox" checked={item.checked} onChange={()=> dispatch(changeChecked(company.id, item.id)) }/>
                        </td>
                        <td>{item.name}</td>
                        <td>{item.surname}</td>
                        <td>{item.age}</td>
                    </tr>
                ))}
                </tbody>
                <tfoot>
                <tr>
                    <td className='employees' colSpan='4'>
                        Сотрудники : {company.employees.filter((item)=> item.checked).map(item => item.name).join(', ')}
                    </td>
                </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Company;