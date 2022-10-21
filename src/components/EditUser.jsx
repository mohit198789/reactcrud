import { FormControl, FormGroup, InputLabel, Input, Typography} from "@mui/material";
import { styled} from "@mui/material";
import { useState,useEffect } from "react";
import {getuser,edituser} from '../service/api';
import { useNavigate,useParams } from "react-router-dom";

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


const EditUser=()=>{

    const[user,setUser]=useState(initialvalue);
    const navigate=useNavigate();
    const {id}=useParams();

    useEffect(()=>{
        getUserData();
    },[])

    //this is for searching the data with id
    const getUserData=async()=>{
        let response=await getuser(id);
       setUser(response.data);
    }
    const onvaluechange=(e)=>{
        //console.log(e.target.name,e.target.value);
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user);
    }
//update the data to api
    const adduserdetails=async ()=>{
     await edituser(user,id);
      navigate('/all');
 }
    return(
       <Container>
        <Typography variant="h4">Edit User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=>onvaluechange(e) }name="name" value={user.name}/>
        </FormControl>
        <FormControl>
            <InputLabel>UserName</InputLabel>
            <Input onChange={(e)=>onvaluechange(e)} name="username" value={user.username}/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e)=>onvaluechange(e)} name="email" value={user.email}/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e)=>onvaluechange(e)} name="phone" value={user.phone}/>
        </FormControl>
        <FormControl>
            <button onClick={()=>adduserdetails()} variant="contained">Edit User</button>
        </FormControl>
       </Container>
    );
}

export default EditUser;