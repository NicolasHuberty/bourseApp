
const access_key = '7ef92aa08e51a356542e47ed6db8118b';
const other_access_key = '7f4d01f6421c393e70ade28fa884e9cb';

export function get_value(){
    console.log("OK")
    const finnhub = require('finnhub');
    const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    api_key.apiKey = "bv4hdvf48v6qpatdl9tg" // Replace this
    const finnhubClient = new finnhub.DefaultApi()
    //Quote
    finnhubClient.country((error, data, response) => {
        console.log(data)
    });
}
