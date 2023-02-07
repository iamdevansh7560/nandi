

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
        const accountSid = 'AC4d5b0283e73f2592e338161d305cefd7'; 
        const authToken = '7a3f8e80bac8b24190859471d9c1a2d7'; 
        const client = require('twilio')(accountSid, authToken); 
        
         
        client.messages 
              .create({ 
                 body: 'Hello! This is an editable text message. You are free to change it and write whatever you like.', 
                 from: 'whatsapp:+14155238886',       
                 to: 'whatsapp:+919796617824' 
               }) 
              .then(message => res.json("ok")) 
              .done();

    } catch (error) {
        console.log(`Error at sendMessage -->${error}`);
    }
};

module.exports = { sendMessage };
