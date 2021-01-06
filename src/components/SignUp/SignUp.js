import React, {useState} from 'react';
import axios from 'axios';
import {Button, FormControl,TextField} from '@material-ui/core';
import { Link} from 'react-router-dom';
import Header from "../Header/Header";
import '../SignUp/SignUp.css'


function SignUp(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [message,setMessage] = useState('');
    const [msgColor, setMsgColor] = useState('#dc3545');

    const onClickHandler = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:5000/user/new',{
            name,email,password})
            .then(res=>{
                localStorage.setItem('id',res.data.id);
                setMessage(res.data.msg);
                if(res.data.isSuccessfull){
                    setMsgColor('#28a745');
                }else{
                    setMsgColor('#dc3545');
                }
            }).catch(err=>console.log(err));
        }

    return(
        <div>
            <Header />
            <div id="signUp">
            <div className="signUp">
                <p style={{color:msgColor}}>{message}</p>
                <form>
                    <FormControl>
                        <TextField onChange={e=>setName(e.target.value)} value={name} name="name" type="text" placeholder="name"/>

                        <TextField required onChange={e=>setEmail(e.target.value)} value={email} name="email" placeholder="email" type="email"/>

                        <TextField required onChange={e=>setPassword(e.target.value)} value={password} name="password" placeholder="password" type="password"/>

                        <Button type="submit" variant="contained" onClick={onClickHandler}color="primary">Register</Button>
                            <p>Do you already have an account?</p>

                            <Link to="/login">
                                <Button  type="submit" style={{alignSelf:"center"}}variant="contained"color="primary">Login</Button>
                            </Link>

                    </FormControl>
                </form>
            </div>
            </div>
        </div>
    )
}

export default SignUp;