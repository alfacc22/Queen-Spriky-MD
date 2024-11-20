const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'ujZhCL4C#sgYQSiNGn_Yw9jgaGHD2lnyMg4i9M831-xQwTv-RseI', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb+srv://hasiyamno:20020421@cluster0.7xoks.mongodb.net/',// Enter Your MongoDB URL
    OWNER_NUMBER: process.env.OWNER_NUMBER || '94763118285',    // Enter Your Owner Number
};
