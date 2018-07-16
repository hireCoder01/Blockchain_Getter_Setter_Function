const eth = require('./blockchain');
const createRoute = async function (req, res){
    console.log(req.body)
    if(req.url == '/test/set'){
        let status = await eth.set(req.body);
        
        return {status:status};    
    }
    if(req.url == '/test/get'){
        let data = await eth.get();
        return {data:data};
    }
}
module.exports.createRoute = createRoute;