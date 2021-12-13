import React from 'react';
import './table.css'
import {useDispatch, useSelector} from "react-redux";
import {changeAll, changeChecked} from "../../Redux/Reducers/table";
import Home from "../Home/Home";

const Table = () => {
    const dispatch = useDispatch();
    const companyName = useSelector((store)=> store.table.companyName);
    const employees = useSelector((store)=> store.table.employees);
    const allCheck = useSelector((store)=> store.table.allCheck);
    return (
        <>
            <Home/>
            {/*<table>*/}
            {/*    <thead>*/}
            {/*    <tr>*/}
            {/*        <th colSpan='4'>{companyName}</th>*/}
            {/*    </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*    <tr>*/}
            {/*        <td>*/}
            {/*            <input type="checkbox" checked={allCheck} onChange={()=> dispatch(changeAll())}/>*/}
            {/*        </td>*/}
            {/*        <td>Name</td>*/}
            {/*        <td>UserName</td>*/}
            {/*        <td>Age</td>*/}
            {/*    </tr>*/}
            {/*    {employees.map(item=>(*/}
            {/*        <tr key={item.id} className={`${item.checked ? 'active': ''}`}>*/}
            {/*            <td>*/}
            {/*                <input type="checkbox" />*/}
            {/*            </td>*/}
            {/*            <td>{item.name}</td>*/}
            {/*            <td>{item.surname}</td>*/}
            {/*            <td>{item.age}</td>*/}
            {/*        </tr>*/}
            {/*    ))}*/}
            {/*    </tbody>*/}
            {/*    <tfoot>*/}
            {/*    <tr>*/}
            {/*        <td className='employees' colSpan='4'>*/}
            {/*            Сотрудники : {employees.filter((item)=> item.checked).map(item => item.name).join(', ')}*/}
            {/*        </td>*/}
            {/*    </tr>*/}
            {/*    </tfoot>*/}
            {/*</table>*/}
            </>

    );
};

export default Table;