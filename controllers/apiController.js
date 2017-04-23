var toDos = require('../models/todoModel');
var bodyParse = require('body-parser');

module.exports = function(app) {
    app.use(bodyParse.json());
    app.use(bodyParse.urlencoded({extended: true}));

    app.get('/api/todos/:uname', function(req, res) {
        toDos.find({ username: req.params.uname }, 
        function(err, todos) {
            if (err) throw err;
            res.send(todos);
        });

    });

    app.get('/api/todo/:id', function(req, res) {
        toDos.findById({ _id: req.params.id }, function(err, todo) {
            if (err) throw err;
            res.send(todo);
        });
    });

    app.post('/api/todo', function(req, res) {
        if (req.body.id) {
            toDos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            }, function(err, todos) {
                if (err) throw err;
                res.send('success');
            });
        } 
        else {
            var newTodo = toDos({
                username: 'test',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });

            newTodo.save(function(err) {
                req.send('Success');
            });
        }
        
    });

    app.delete('/api/todo', function(req, res) {
        toDos.findByIdAndRemove(req.body.id, function(err){
            if (err) throw err;
            res.send('Success');
        });
    });
}