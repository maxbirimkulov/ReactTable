import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import './editCompany.css'

const EditCompany = ({employees, setEmployees, deleteUser, addEmployee}) => {
    const params = useParams();
    const [employeesBlock, setEmployeesBlock] = useState(false);
    const company  = useSelector((store)=> store.table.companies.filter((item)=> item.companyName === params.name)[0]);
    return (
        <div>
            {company ?
            <>
                <form method='POST' action={`/edit/${company.id}`} className="addCompany">
                    <div>
                        <label>
                            Название компании
                            <input
                                name='companyName'
                                required
                                type="text"
                                defaultValue={company.companyName}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Логотип
                            <input
                                name='companyLogo'
                                required
                                type="text"
                                defaultValue={company.companyLogo}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Описание
                            <textarea
                                name='description'
                                cols="30"
                                rows="10"
                                defaultValue={company.description}
                            />
                        </label>
                    </div>

                    <input type="hidden" name='employees' value={JSON.stringify(employees.length === 0 ? company.employees : employees)}/>
                    <input type="hidden" name='allCheck' value={company.allCheck}/>
                    <input type="hidden" name='id' value={company.id}/>
                    <button type="submit">
                        Сохранить
                    </button>
                </form>
                <br/>
                <button onClick={()=> {
                    setEmployees(company.employees);
                    setEmployeesBlock(!employeesBlock)
                }}>Сотрудники</button>
                <div className='employees__block' style={{display: `${employeesBlock ? 'block' : 'none'}`}}>
                    <ul>
                        {employees.map((item) => (
                            <li key={item.id} className='list-item'>
                                <span className='user'>{item.name} {item.surname} {item.age} {/\d*1\d$/.test(item.age) || /[05-9]$/.test(item.age) ? 'лет' : (/1$/.test(item.age) ? 'год' : 'года')}</span>
                                <span className='delete-user' onClick={() => deleteUser(item.id)}>X</span>
                            </li>
                        ))}
                    </ul>
                    <form onSubmit={addEmployee}>
                        <h5>Добавить сотрудников</h5>
                        <input required placeholder="name" type="text"/>
                        <input required placeholder="surname" type="text"/>
                        <input required placeholder="age" type="number"/>
                        <button type="submit">+</button>
                    </form>
                </div>

            </>
                : ''

            }

        </div>
    );
};

export default EditCompany;