const homepage = (req, res)=>{
    res.render('homepage', {title: 'Disnut - Welcome'});
}

const signup = (req, res)=>{
    res.render('signup', {title: 'Disnut - Sign Up'})
}

const signup_post = (req, res)=>{
    let body = req.body;
    let first_name = body.firstname;
    let last_name = body.lastname;
    let fname = first_name + '' + last_name;
    let myArr = [fname, body.password];

}

const login = (req, res)=>{
    res.render('login', {title: 'Disnut - Login'});
}



module.exports = {
    login,
    homepage,
    signup,
    signup_post,
}