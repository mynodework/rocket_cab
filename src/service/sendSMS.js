let send = (mobileNumber, otp) => {
    console.log(mobileNumber, otp)
    return new Promise((resolve, reject) => {
        resolve({ status: 1, message: 'response', data: [] })
        // twilo.send(message, function(err, response) {
        //     if (err) {
        //         resolve({ error: 1, message: err, data: [] })
        //     } else {
        //         resolve({ error: 0, message: response, data: [] })
        //     }
        // });
    })
}

export default {
    send
}