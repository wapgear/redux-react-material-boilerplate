import request from 'axios';
import config from '../../../package.json';


export function getUser(token, callback) {
    if (!token) {
        return callback(false);
    }
    request
        .get(`http://${config.apiHost}:${config.apiPort}/api/users/check?access_token=${token}`)
        .then(function (response) {
            if (response.status === 200) {
                request
                    .get(`http://${config.apiHost}:${config.apiPort}/api/users/${response.data.valid.userId}?access_token=${token}`)
                    .then(function (response) {
                        //     console.log(response.data);
                        callback(response.data);
                    })
                    .catch(function (err) {
                        //      console.log(err);
                        callback(false);
                    })
            } else {
                callback(false);
            }
        })
        .catch(function (err) {
            //   console.log(err);
            callback(false);
        });
}
//  return callback(false);
//request()
// Rather than immediately returning, we delay our code with a timeout to simulate asynchronous behavior
// setTimeout(() => {
//   callback({
//     name : 'John Smith',
//     dept : 'Web Team',
//     lastLogin : new Date(),
//     email : 'john@smith.com',
//     id : 'abcde1234'
//   });
// }, 500);

// In the case of a real world API call, you'll normally run into a Promise like this:
// API.getUser().then(user => callback(user));