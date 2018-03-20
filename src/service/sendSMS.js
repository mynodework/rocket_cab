import request from 'request';

let send = (mobileNumber, otp) => {
    console.log(mobileNumber, otp)
    return new Promise((resolve, reject) => {
        request.get(`https://2factor.in/API/V1/d18e6ac6-f07f-11e7-a328-0200cd936042/SMS/${mobileNumber}/${otp}`, function(err, response){
            resolve({status:1, data:"successfully send otp!"})
        })
    })
}

export default {
    send
}