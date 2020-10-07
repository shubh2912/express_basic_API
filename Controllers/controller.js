const user = require('../Models/user.json');

exports.getUser = (req, res) => {
    res.setHeader('status', 200);
    res.setHeader('Content-Type', 'application/json');
    res.json(user);
};

exports.getMsg = (req, res) => {
    res.setHeader('status', 200);
    res.setHeader('Content-Type', 'application/json');
    res.end('{ response: Default Resoponse }')
}