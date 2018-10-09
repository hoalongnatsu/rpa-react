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
      {id: 1, src: "http://localhost:3001/images/01.jpg", name: "saucepan"},
      {id: 2, src: "http://localhost:3001/images/02.jpg", name: "bowl"},
      {id: 3, src: "http://localhost:3001/images/03.jpg", name: "cooker"},
      {id: 4, src: "http://localhost:3001/images/04.jpg", name: "fork"},
      {id: 5, src: "http://localhost:3001/images/05.jpg", name: "pan"},
      {id: 6, src: "http://localhost:3001/images/06.jpg", name: "spoon"},
   ]

    res.json(images);
});

app.get('/api/detect/:name', function(req, res) {
   let name = req.params.name;

   let data = {
      saucepan: {
         "xmin": 50,
         "xmax": 165,
         "ymin": 32,
         "ymax": 160,
         "name": "Saucepan",
         "confidence": 0.9965482354164124
      },
      bowl: {
         "xmin": 50,
         "xmax": 700,
         "ymin": 270,
         "ymax": 670,
         "name": "Bowl",
         "confidence": 0.9965482354164124
      },
      cooker: {
         "xmin": 170,
         "xmax": 450,
         "ymin": 90,
         "ymax": 325,
         "name": "Cooker",
         "confidence": 0.9965482354164124
      },
      fork: {
         "xmin": 10,
         "xmax": 490,
         "ymin": 200,
         "ymax": 310,
         "name": "Fork",
         "confidence": 0.9965482354164124
      },
      pan: {
         "xmin": 160,
         "xmax": 640,
         "ymin": 210,
         "ymax": 430,
         "name": "Pan",
         "confidence": 0.9965482354164124
      },
      spoon: {
         "xmin": 150,
         "xmax": 650,
         "ymin": 320,
         "ymax": 480,
         "name": "Spoon",
         "confidence": 0.9965482354164124
      }
   };

   res.send({
      "processTime": 69.95677208900452,
      "data": [
         data[name]
      ]
   });
});

app.listen(3001, () => {
   console.log(`Server started on 3001`);
});