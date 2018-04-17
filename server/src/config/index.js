let _data = {
    port: 3412,
    api : '/api',
    authentication:{
        jwtSecret : process.env.JWT_SECRET || 'secret'
    }
}
module.exports = {data : _data}