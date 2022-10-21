import { TableCell, TableHead, Table, TableBody, TableRow, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { getusers, deleteuser } from "../service/api";
import { Link } from "react-router-dom";
const Allusers=()=>{

    //setting the state
const [users,setUser]=useState([]);

//loading the data while component is going to be load
useEffect(()=>{
    getusersdetails();
},[])

//getting user details 
const getusersdetails=async()=>{
    let response=await getusers();
    console.log(response);
    setUser(response.data);
}

//delete api calling
const deleteuserData=async(id)=>{
await deleteuser(id);
getusersdetails();
}
    return(
       <Table>
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>User Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone No</TableCell>
                <TableCell>Actions</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
            users.map(user=>(
                <TableRow>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                    <Button variant="contained"onClick={()=>deleteuserData(user.id)} style={{marginRight:10}}>Delete</Button>
                    <Button variant="contained" component={Link} to={`/edit/${user.id}`} color="secondary">Edit</Button>
                    </TableCell>
                
                </TableRow>
            ))
            }
        </TableBody>
       </Table>
    );
}

export default Allusers;