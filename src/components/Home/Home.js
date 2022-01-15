import React from "react";
import {Link} from "react-router-dom";
import { useSelector} from "react-redux";
import PlusLogo from "../../assets/plus-svgrepo-com.svg";
import "./home.css";



const Home = () => {

  const companies = useSelector((store) => store.table.companies);

    return (
        <div>
            <div className="companies__row row">
                {companies.map((item) => (
                    <div className="col s6 m3" key={item.id}>
                        <Link
                            key={item.companyName}
                            to={`company/${item.companyName}`}
                            className="card"
                        >
                            <div className="card-image">
                                <img src={item.companyLogo} alt="company logo"/>
                                <span className="card-title">{item.companyName}</span>
                            </div>
                        </Link>
                    </div>

                ))}
                <div className="addCompany-btn">
                    <p>Добавить свою компанию</p>
                    <Link to="/addCompany">
                        <img src={PlusLogo} alt="plusLogo"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
