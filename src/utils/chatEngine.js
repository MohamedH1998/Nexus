const  axios = require('axios');
export const chatEngineData = (userName, secret, email) => {
    return ({
	"username": {userName},
	"secret": {secret},
	"email": email,
        }
    )};

var config = {
	method: 'post',
	url: 'https://api.chatengine.io/users/',
	headers: {
		'PRIVATE-KEY': process.env.REACT_APP_CHAT_ENGINE_KEY
	},
	data : chatEngineData
};

axios(config)
.then(function (response) {
	console.log(JSON.stringify(response.chatEngineData));
})
.catch(function (error) {
	console.log(error);
});