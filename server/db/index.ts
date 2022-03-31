import * as mysql from 'mysql'

import blogs from './blogs'

export const Connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'blog',
    password: '12345',
    database: 'blog'
})

export const Query = (query, values?) =>{
    return new Promise((resolve, reject)=>{
        Connection.query(query, values,(err, results) => {
            if (err) return reject(err);
            return resolve(results)
        })
    })
}

export default {
 blogs
}