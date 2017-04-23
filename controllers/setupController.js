
var todoModel = require('../models/todoModel');



module.exports = function(app) {
    app.get('/api/setupTodos', function(req, res) {
        var setupTodos = [
            {
                username: 'test',
                todo: 'buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'learn node',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'date someone',
                isDone: false,
                hasAttachment: false
            }
        ];
        todoModel.create(setupTodos, function(err, results) {
            res.send(results);
        });
    });
};