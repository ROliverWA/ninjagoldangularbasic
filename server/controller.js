const Ninja = require('./models');

module.exports ={

    login: (req, res) => {
        console.log('made it to console');
        Manager.findOne({'name':'Manager'}, {users: {$elemMatch: {pin: req.params.pin}}})        
            .then(result => {
                if (result.users.length > 0) {
                    res.json({isValid: true, result: result});
                }
                else {
                    res.json({isValid: false, result: result});
                }
            })
            .catch(err=>console.log(err));
    },
    seed: (req, res) => {
        let ninja = new Ninja({name: 'Tbone', pin: 1020});
        ninja.save()
        .then(result => res.json(result))
        .catch(err => console.log(err));

    },

    display: (req, res) => {
        Manager.find()
        .then(results => res.json(results))
        .catch();
    }
};