const Ctrls = ['AuthCtrl','UserCtrl','ItemCtrl'];
const AuthCtrl = require('./controller/Authentication')
const UserCtrl = require('./controller/User')
const ItemCtrl = require('./controller/Item')
const config  = require('./config')

const _all = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With')
    if ('OPTIONS' === req.method) {
      return res.sendStatus(200)
    }
    next()
}


module.exports = (router)=>{
  
  router.all(config.data.api+'*', _all),
  //User
    router.post(config.data.api+'/user', UserCtrl.create),
    router.get(config.data.api+'/user', UserCtrl.read),
    router.put(config.data.api+'/user/:id', UserCtrl.update),
    router.delete(config.data.api+'/user/:id', UserCtrl.del),
    
  //Login
    router.post(config.data.api+'/login', AuthCtrl.login),
  
  //Item
    router.get(config.data.api+ '/item', ItemCtrl.read),
    router.get(config.data.api+ '/item/:id', ItemCtrl.readOne)
};
