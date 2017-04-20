var configValue = require('./config');

module.exports = {
    dbConnectString : function() {
        return 'mongodb://' + configValue.uname + ':' + 
        configValue.upass + '@ds111851.mlab.com:11851/nodetodosample';
    }
}