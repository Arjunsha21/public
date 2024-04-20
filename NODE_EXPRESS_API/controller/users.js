import { v4 as uuidv4 } from 'uuid';

let users = [];

export const  createuser = (req,res) => {
     
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`user with name ${user.firstname} added to database`);

};

export const getuser = (req,res) => {

    res.send(users);
};

export const getusersid = (req,res) => {
    const {id} = req.params;
    const founduser = users.find((user) => user.id=id);
    res.send(founduser);
};

export const deleteuser = (req,res)=> {
    const {id} =req.params;

    users = users.filter((user) => user.id =! id);

    res.send(`user with ${id} deleted from database`);

};

export const userupdate = (req,res) => {
    const {id} = req.params;
    const user = users.find((user)=> user.id =id);
    const{ firstname,lastname,age } = req.body;
    if(firstname){
        user.firstname = firstname;
    }
    if(lastname){
        user.lastname = lastname;
    }
    if(age){
        user.age = age;
    }

    res.send(`user with id ${id}has been updated`);

};