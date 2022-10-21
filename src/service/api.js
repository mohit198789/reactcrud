import axios from 'axios';

const API_URL='http://localhost:3002/users';

export const  adduser=async(data)=>{
    try
    {
       return await axios.post(API_URL,data);
    }
   catch(error)
   {
    console.log('Error while calling adduser api',error.message);
   }
}

//all users
export const getusers=async()=>{
   try
   {
return await axios.get(API_URL);
   }
   catch(error)
   {
      console.log('Error in fetching data from api',error.message);
   }
}

//single user
export const getuser=async(data)=>{
   try
   {
return await axios.get(`${API_URL}/${data}`);
   }
   catch(error)
   {
      console.log('Error in fetching data from api',error.message);
   }
}

export const edituser=async(data,id)=>{
try
{
return await axios.put(`${API_URL}/${id}`,data);
}
catch(error)
{
   console.log('error while calling edit api',error.message);
}
}


export const deleteuser=async(id)=>{
   try{
      return await axios.delete(`${API_URL}/${id}`);
   }
   catch(error)
   {
      console.log('Error while deleting',error.message);
   }

}