import { FormControl, FormGroup, InputLabel, Input, Typography} from "@mui/material";
import { styled} from "@mui/material";
import { useState } from "react";
import {adduser} from '../service/api';
import { useNavigate } from "react-router-dom";

const Container=styled(FormGroup)
`
width:50%;
margin:5% auto  auto;
& > div{
    margin-top:20px
}
`

const initialvalue={
    name:'',
    username:'',
    email:'',
    phoe:''
}


const Addusers=()=>{

    const[user,setUser]=useState(initialvalue)
    const navigate=useNavigate();
    const onvaluechange=(e)=>{
        //console.log(e.target.name,e.target.value);
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user);
    }

    const adduserdetails=async ()=>{
       await adduser(user);
       navigate('/all');
    }
    return(
       <Container>
        <Typography variant="h4">Add User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=>onvaluechange(e) }name="name"/>
        </FormControl>
        <FormControl>
            <InputLabel>UserName</InputLabel>
            <Input onChange={(e)=>onvaluechange(e)} name="username"/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e)=>onvaluechange(e)} name="email"/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e)=>onvaluechange(e)} name="phone"/>
        </FormControl>
        <FormControl>
            <button onClick={()=>adduserdetails()} variant="contained">Add User</button>
        </FormControl>
       </Container>
    );
}

export default Addusers;