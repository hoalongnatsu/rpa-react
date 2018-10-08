const express = require('express');

const app = express();

app.use(express.static('./public'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/images', (req, res) => {
   let images = [
      {id: 1, src: "http://localhost:3001/images/01.jpg", name: "APX"},
      {id: 2, src: "http://localhost:3001/images/02.jpg", name: "XYZ"},
      {id: 3, src: "http://localhost:3001/images/03.jpg", name: "TAP"},
      {id: 4, src: "http://localhost:3001/images/04.jpg", name: "LMX"},
      {id: 5, src: "http://localhost:3001/images/05.jpg", name: "NRT"},
      {id: 6, src: "http://localhost:3001/images/06.jpg", name: "YSD"},
   ]

    res.json(images);
});

app.listen(3001, () => {
   console.log(`Server started on 3001`);
});