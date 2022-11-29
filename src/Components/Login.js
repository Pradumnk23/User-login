import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import signimg from '../Assets/4957136.jpg'
import synopsys from '../Assets/synopsys.png'
import login from '../Assets/login.png'
import { json, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Login = () => {

    const history = useNavigate();

    const [inval, setInval] = useState({
        email: "",
        password: ""
    })
    const [data, setData] = useState([]);
    // console.log(inval);

    const getdata = (e) => {
        // console.log(e.target,value);

        const { value, name } = e.target;
        console.log(value, name);

        setInval(() => {
            return {
                ...inval,
                [name]: value
            }
        })
    }

    const addData = (e) => {

        e.preventDefault();
        // console.log(inval);

        const getuserArr = localStorage.getItem("userMe");
        console.log(getuserArr);

        const { email, password } = inval;


        if (email === "" || !email.includes("@")) {
            alert("Enter Valid Email");
        }
        else if (password.length < 5 || password === "") {
            alert("Enter Valid Password of more than 4 Character");
        }
        else {
            if (getuserArr && getuserArr.length) {

                const userdata = JSON.parse(getuserArr);

                // console.log(userdata);

                const userlogin = userdata.filter((ele, idx) => {
                    return ele.email === email && ele.password === password
                });

                if (userlogin.length === 0) {
                    alert("Invlaid Credentials");
                }
                else {
                    localStorage.setItem("user_login", JSON.stringify(userlogin));
                    history("/home");
                }

            }
            else {
                alert("Please SignUp First")
            }
        }
    }

    return (
        <>

            <div className="container mt-5">
                <section className='d-flex justify-content-between'>

                    <div className="left mt-5 p-3" style={{ width: "100%" }}>
                        <img src={synopsys} className="mb-3" style={{ maxWidth: 220, margin: '0 10px 0 110px' }} />
                        <h2 className="text-center col-lg-6 mb-4" style={{ color: "red" }}>Sign In</h2>
                        <Form style={{ textDecorationColor: "white" }}>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Enter Password" />
                            </Form.Group>

                            <Button variant="contained" className="col-lg-6" onClick={addData} style={{ background: "rgb(67,185,127)", color: "#fff" }} type="submit">
                                Login
                            </Button>
                            <p className="mt-3">Not Signed Up Yet ⛔ <span><NavLink to='/'>SigUp</NavLink> </span></p>
                        </Form>

                        <img src={login} style={{ width: 400, margin: '25px 0 0 0' }} alt="" />
                    </div>


                    <div className="right" >
                        <div className="sign_img">
                            <img src={signimg} style={{ width: 500, margin: '25px 5px 0 0' }} alt="" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Login