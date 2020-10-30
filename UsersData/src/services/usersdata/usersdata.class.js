const { Service } = require('feathers-mongoose');

exports.Usersdata = class Usersdata extends Service {
       constructor(){
           this.Usersdata=[];
       }
       async get(){
           return this.Usersdata;
       }
       async create(data)
       {
           const user={
               name:this.Usersdata.name,
               role:this.Usersdata.role,
               company:this.Usersdata.company,
               age:this.Usersdata.age,
           }
           this.Usersdata.push(user);
           return "User Data Added Succesfully !!!";
       }
};
