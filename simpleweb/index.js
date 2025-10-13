const expres = require('express');
const app = expres();

app.get('/', (req, res) => {
    res.send('Welcome to the Simple Web Server!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});