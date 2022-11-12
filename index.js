const express = require('express');
const app = express();

app.get('/soma', function( req, res ){
    
    let soma = 100 + 1;

    res.json({ soma: soma });

})

app.listen(3000);