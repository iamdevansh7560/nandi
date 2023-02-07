

// function sentSms(){
//     client.messages
//     .create({
//         body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//         from: '+16513723314',
//         to: '9796617824'
//     })
//     .then(message => console.log(message))
//     .catch(error=>console.log(error))
// }

const sendMessage = async (req, res) => {

    try {
        const accountSid = ''; 
        const authToken = ''; 
        const client = require('twilio')(accountSid, authToken); 
        
         
        client.messages 
              .create({ 
                 body: 'Hello! This is an editable text message. You are free to change it and write whatever you like.', 
                 from: ',       
                 to: '4' 
               }) 
              .then(message => res.json("ok")) 
              .done();

    } catch (error) {
        console.log(`Error at sendMessage -->${error}`);
    }
};

module.exports = { sendMessage };
