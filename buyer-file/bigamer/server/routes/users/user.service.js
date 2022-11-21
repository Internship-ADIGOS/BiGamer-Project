const shortid = require('shortid');
const pool = require('../../config/sqldb')
const referral_code = require('referral-codes')

let invite_code = referral_code.generate({
    length: 6,
    count: 1
}
)

module.exports = {

    create: (data, callback) =>{
        pool.query(
            `insert into registeration(name, email, phone, password, wallet, invited_by, invite_code ,created_date, profile_pic)
            values(?,?,?,?,?,?,?,?,?)`,

            [
                data.name,
                data.email,
                data.phone,
                data.password,
                data.wallet,
                data.invited_by,
                data.invite_code,
                data.create_date,
                data.profile_pic 
            ],
            (error, result, fields)=>{
                if(error){
                    return callback(error);
                }
                return callback(null, result)
            }
        )
    },

    getUserById: (id, callback)=>{
        pool.query(
            `select id from registeration`,
            [id],
            (error, result, fields)=>{
                if(error){
                    return callback(error);
                }
                return callback(null, result[0])
            }
        )
    },
    getUserByPhone: (phone, callback)=>{
        pool.query(
            `select * from registeration where phone = ?`,
            [phone],
            (error, result, fields)=>{
                if(error){
                    return callback(error);
                }
                return callback(null, result[0])
            }
        )
    }
};
