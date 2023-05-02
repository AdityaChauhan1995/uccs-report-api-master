var User = require('../model/user');

module.exports = function (req, res, next) {
  let url = req.originalUrl;
  if (url === '/v1/user/login' || url === '/v1/user/register' || url === '/v1/test') {
    // nothing to validate
    next()
  } else if(url.startsWith('/v1'))
  {
    // need to be valid user
    // validate session
    let sessionId = req.query.sessionId;
    if (sessionId == null)
      res.status(400).json({ code: -1, message: 'invalid request' });
    else
    {
        User.getUserBySessionId(sessionId, function (data) {
          if (data.code === 0) {
            req.query.user = { _id: data._id, name: data.name, email: data.email };
            next();
          } else {
            res.status(401).json({ code: -1, message: 'Un-Authorized User' });
          }
        });
    }
  }
  else {
    next()
  }
} 