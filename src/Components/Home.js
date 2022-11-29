import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import signimg from '../Assets/Data_security_05.jpg'
import synopsys from '../Assets/synopsys.png'
import social from '../Assets/social.png'
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {

    const history = useNavigate();

    const [inval, setInval] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [data, setData] = useState([]);
    // console.log(inval);

    const getdata = (e) => {
        // console.log(e.target,value);

        const { value, name } = e.target;
        //console.log(value,name);

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

        const { name, email, password } = inval;

        if (name === "") {
            alert("Please Enter Name");
        }
        else if (!email.includes("@")) {
            alert("Enter Valid Email");
        }
        else if (password.length < 5 || password === "") {
            alert("Enter Valid Password of more than 4 Character");
        }
        else {
            localStorage.setItem("userMe", JSON.stringify([...data, inval]));   // ...data -> initial no data, after enter data stroed in form of string
            // console.log("Data added");
            history("/login");
        }
    }

    return (
        <>

            <div className="container mt-5">
                <section className='d-flex justify-content-between'>

                    <div className="left mt-1 ml-5 p-3" style={{ width: "100%" }}>
                        <img src={synopsys} className="mb-3" style={{ maxWidth: 220, margin: '0 10px 0 110px' }} />
                        <h2 className="text-center col-lg-6 mb-4">Sign Up</h2>
                        <Form style={{ textDecorationColor: "white" }}>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Enter Password" />
                            </Form.Group>

                            <Button variant="contained" className="col-lg-6" onClick={addData} style={{ background: "rgb(67,185,127)", color: "#fff" }} type="submit">
                                Submit
                            </Button>

                        </Form>
                        <p className="mt-3">Already Have an Account 😎 <span><NavLink to='/login'>SigIn</NavLink> </span></p>
                        <span><img src={social} style={{ width: 400, margin: '5px 10px 0 0' }} alt="" /></span>
                    </div>


                    <div className="right" >
                        <div className="sign_img">
                                <img src={signimg} style={{ width: 450, margin: '25px 5px 0 0' }} alt="" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home