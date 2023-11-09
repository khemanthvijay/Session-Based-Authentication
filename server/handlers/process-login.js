const { users } = require('./createuser');

module.exports = function ProcessLoginHandler(req, res) {
    // if(req.body.username!=='user1' && req.body.password!=='admin'){ //validate for simple user uncommit for checking
    //     return res.json({'message':'Incorect details'});
    // }
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.status(401).json({'message':'Invalid username or password'});
    }
    req.session.userid = req.body.username;
    res.redirect('/dashboard');
}