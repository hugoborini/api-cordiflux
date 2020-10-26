const mysql = require('mysql');



const pool = mysql.createPool({
    connectionLimit: 10,
    password:'root',
    //password: '85f492cb',
    user:'root', 
    //user: 'b97f3258966740',
    database:'cordiflux', 
    //database: 'heroku_f34a090512b90f6',
    host:'localhost',
    //host: 'eu-cdbr-west-03.cleardb.net',
    port: 8889,
    //port: 3306

});


let coursedb = {};

coursedb.all = ()=>{
    return new Promise((resolve, reject) =>{
        pool.query('SELECT * FROM projet', (err, results) => {
            if (err){
                return reject(err);
            }
            return resolve (results);
        });
    });
};

coursedb.projet = (id)=>{
    return new Promise((resolve, reject) =>{
        pool.query('SELECT * FROM projet WHERE name = ?',[id], (err, results) => {
            if (err){
                return reject(err);
            }
            return resolve (results);
        });
    });
}




module.exports = coursedb;