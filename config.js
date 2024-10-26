const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'GZtnRJzT#gGM56-BJHVG6Za6lIGYw4IiXlM2zQW4zAX-JVrFPJu8', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb+srv://hasiyamno:20020421@cluster0.7xoks.mongodb.net/',// Enter Your MongoDB URL
    Owner: process.env.OwnerNumber || '94754625969',    // Enter Your Owner Number
};
