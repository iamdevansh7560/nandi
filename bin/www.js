const app = require('../app');
// Sets the port for the server to run at
const PORT = 3000;

// LISTENING TO PORT 
app.listen(PORT, () => {
    console.log(`listening to port : http://localhost:${PORT}/`)
})

module.exports = app  

