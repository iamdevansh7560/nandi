var jsforce = require("jsforce");


const incomingHandler = async (req, res) => {
    var conn = new jsforce.Connection({
        sessionId:
            "00D0r0000000vz0EAA!ARsAQKmFOV0dHUeQkjQomCGiHImvu1n9SrsTHa7OKF01Py5H3to5nmNhram4PxcUQEGs6VGqBGKPupEEDUyCTpVSPHwGImPd",
        serverUrl: "https://cloudera--vikasdev.sandbox.my.salesforce.com",
    });


    let list = [];
    let i = 1
    let getData = [];

    // console.log('receiving data ...');
    console.log("body is ", req.body);
    console.log("body data is =====", req.body.data);
    console.log("body data is =====", req.body.orgId);
    getData = req.body;

    await Promise.all(
        getData.data.map(async (values) => {
            var data = await conn.apex.post(
                "/incomingHandler/",
                values,
                function (err, result) {
                    if (err) {
                        return console.error(err);
                    } else {
                        list.push(result);
                        console.log(i, "get----", result);
                        i += 1
                    }
                }
            );
        })
    );

}

module.exports = {
    incomingHandler
}