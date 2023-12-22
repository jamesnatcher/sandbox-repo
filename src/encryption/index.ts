import * as bcrypt from 'bcrypt';
const saltRounds = 10;
const myPlaintextPassword = 'Mypassword2023!';
const someOtherPlaintextPassword = 'not_bacon';

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        console.log(hash);

        // Load hash from your password DB.
        bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
            console.log(myPlaintextPassword, result)
        });
        bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
            console.log(someOtherPlaintextPassword, result)
        });
    });
});

