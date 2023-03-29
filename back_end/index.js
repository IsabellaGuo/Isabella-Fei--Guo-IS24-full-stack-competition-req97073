const express = require('express');
const server = express();
const fs = require('fs');

function jsonReader(filePath, cb) {
    fs.readFile(filePath, 'utf-8', (err, fileData) => {
        if (err) {
            return cb && cb(err)
        }
        try {
            const object = JSON.parse(fileData)
            return cb && cb(null, object)
        } catch (err) {
            return cb && cb(err)
        }
    });
} 

jsonReader('./products.json', (err, data) => {
        if (err) {
            console.log(err);
            
        } else {
            server.get("/api", (req, res) => {
            res.json({"products": data})
            });
        }
        
});






const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`**************Server started on port ${PORT}***********`));