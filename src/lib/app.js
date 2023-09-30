import express from 'express';

const app = express();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`Server running on ${PORT}`)
);

app.get('/fruits', (req, res) => {
    res.send("Mango and Banana")
});

app.get('/fruits-count', (req, res) => {
    res.send({
        apple: 4,
        banana:24
    })
});
