const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/css'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/upload', upload.single('file'), (req, res) => {
    return res.json(req.file);
});


app.listen(port); console.log(`Server running on port ${port}`);