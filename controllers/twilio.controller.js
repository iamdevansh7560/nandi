

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
        const client = require('twilio')('ACf90d13540049e308163357c6ba5490d6', '27c7c52d8878df3af81645af85654d6f', {
            lazyLoading: true
        });
        console.log(req.body);
        
        
        // let message = req.Body.body;
        // let senderID = req.body.From;
        // console.log(message);
        // console.log(senderID);


        await client.messages
            .create({
                body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
                from: '+16513723314',
                to: '+919796617824'
            })
            .then(res.send("ok"))


    } catch (error) {
        console.log(`Error at sendMessage -->${error}`);
    }
};

module.exports = { sendMessage };
