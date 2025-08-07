const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'VISPER-MD&alZkFA7A#rMT3l-jMjHxopKsujkLTvgajb1nT-DQvZ4ssU2EJX-w' : process.env.SESSION_ID, 
PORT: process.env.PORT === undefined ? '8000' : process.AKDprDI9AtIY38bJhNcDRF6A4zQVO43cQmcJ: process.env.SESSION_NAME === undefined ? 'nimanthikumari07-design' : process.env.SESSION_NAME,  

};
