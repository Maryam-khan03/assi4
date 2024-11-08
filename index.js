const express = require('express');
const {error} = require('console');
const fs = require('fs');

const app = express();
app.use(express.json());

// app.post('/book', (req, res) =>
// {
//     const book = req.body
//     fs.writeFile('file.json', JSON.stringify(book),(err)=>
//     {
//         if(err)
//         {
//             console.error(error)
//             res.status(500).send("Error writing to file")
//         }
//         else{
//             res.status(201).send("Book added successfully")
//         }
//     })
// })
// app.get('/book',(req, res) =>
// {
//     const book = req.body
//     fs.readFile("file.json", (err, data) =>
//     {
//         if(err)
//             {
//                 console.error(error)
//                 res.status(500).send("Error writing to file")
//             }
//             else{
//                 res.status(201).send({data:JSON.parse(data)});
//                 console.log(JSON.parse(data)) ;
//             }

//     })
// })

app.put('/book', (req, res) => {
    const newContent = req.body; // New content for the file

    fs.writeFile("file.json", JSON.stringify(newContent, null, 2), (err) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error updating the file");
        } else {
            res.status(200).send("File has been updated successfully");
            console.log("File updated with new content:", newContent);
        }
    });
});

app.delete('/book', (req, res) => {
    fs.unlink("file.json", (err) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error deleting the file");
        } else {
            res.status(200).send("File has been deleted successfully");
            console.log("file.json deleted");
        }
    });
});

app.listen(3000,() => {
    console.log("Server listening on port 3000")
})