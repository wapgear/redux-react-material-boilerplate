import request from 'axios';
import config from '../../../package.json';

export function getUser(token, callback) {
    if (!token) {
        return callback(false);
    }
    request
        .get(`http://${config.apiHost}:${config.apiPort}/api/users/check?access_token=${token}`)
        .then(function(response) {
                if(response.status === 200) {
                    request
                        .get(`http://${config.apiHost}:${config.apiPort}/api/users/${response.data.valid.userId}?access_token=${token}`)
                        .then(function(response) {
                       //     console.log(response.data);
                            callback(response.data);
                        })
                        .catch(function(err){
                      //      console.log(err);
                            callback(false);
                        })
                }else{
                    callback(false);
                }
        })
        .catch(function(err){
        //   console.log(err);
            callback(false);
        });
}
