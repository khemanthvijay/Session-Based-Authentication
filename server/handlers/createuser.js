const users=[];

function CreateUserHandler(req, res) {
   const {newusername,newpassword,newemail,newfirstname,newlastname} = req.body;
   const existingUser = users.find(user => user.username === newusername);
   if (existingUser) {
     return res.status(409).json({'message':'Username already exists. Choose another username'});
   }
   const newUser = {
    username: newusername,
    password: newpassword,
    email: newemail,
    firstname: newfirstname,
    lastname: newlastname,
  };
  users.push(newUser);

  res.redirect('/login');
}

module.exports = {
    CreateUserHandler,
    users,
};
