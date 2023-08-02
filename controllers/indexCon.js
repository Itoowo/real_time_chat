const fs = require('fs');
const con = require('../config/db');

const index = (req, res)=>{
    res.render('/')
}

const homepage = (req, res) => {
    res.render('homepage', { title: 'Disnut - Welcome' });
}

const signup = (req, res) => {
    res.render('signup', { title: 'Disnut - Sign Up' })
}

const signup_post = (req, res) => {
    if (req.files) {
        let timestamp = Date.now();
        let file = req.files.file;
        let filename = timestamp + file.name;
        console.log(file)
        file.mv('./public/uploads/' + filename, (err) => {
            if (err) throw err;
        })
        img = filename;
    }
    let body = req.body;
    let first_name = body.firstname;
    let last_name = body.lastname;
    let fname = first_name + '' + last_name;
    let myArr = [fname, body.password, img];
    let sql = 'insert into `user` (`fname`, `password`, `img`) values(?,?,?)';
    con.query(sql, myArr, (err, result) => {
        if (err) throw err;
        else {
            res.redirect('/homepage')
        }
    })
}

const login = (req, res) => {
    res.render('login', { title: 'Disnut - Login' });
}

const login_post = (req, res)=>{
    console.log(req.body)
}

module.exports = {
    index,
    login,
    homepage,
    signup,
    signup_post,
    login_post
}