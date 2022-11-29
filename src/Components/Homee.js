import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import homee from '../Assets/welcome.jpg';
import signimg from '../Assets/4957136.jpg'
import { NavLink, useNavigate } from "react-router-dom";

const Homee = () => {

    const history = useNavigate();

    const logout = () =>{
        localStorage.removeItem("user_login");
        history("/");
    }
    const [logindata, setlogindata] = useState([]);
    var namedis;
    console.log(logindata);
    const user = () => {
        const getuser = localStorage.getItem("user_login");

        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
            setlogindata(user);

            const name = logindata.map((ele, idx) => {
                namedis = ele.name;
                console.log(namedis);
            });

        }
    }

    useEffect(() => {
        user();
    }, [])

    return (
        <>
            {
                logindata.length === 0 ?
                    <>
                        <div className="sign_img">
                            <img src={signimg} style={{ width: 450, margin: '0px 5px 0 550px' }} alt="" />
                        </div>
                        <p className="mt-3" style={{ fontSize: "50px", color: "black", margin: '0px 0px 0 650px' }}>Please <span><NavLink to='/login'>SigIn</NavLink> </span></p>
                    </>
                    :
                    <>
                        <Button variant="contained" className="col-lg-1" onClick={logout} style={{ margin: '20px 0px 0 690px', background: "rgb(67,185,127)", color: "#fff" }}>Log Out </Button>
                        <p className="mt-3" style={{textAlign:"center", fontSize: "50px", color: "darkorange" }}>Hi!👋{logindata[0].name}</p>

                        <img src={homee} style={{ width: '55%', margin: '0 0 0 350px' }} alt="Welcome to Home Page" />
                    </>
            }

        </>
    )
}

export default Homee
