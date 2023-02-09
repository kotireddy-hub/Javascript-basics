const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.send("Hello");
});

const USER_ENDPOINT = "/users";
const apiHandleForGet = (req, res) => {
    res.json({
        success: true,
        method: "get"
    });
};

app.get(USER_ENDPOINT, apiHandleForGet);

const apiHandlerForPost = (req, res) => {
    res.json({
        success: true,
        method: "post"
    })
};

app.post(USER_ENDPOINT, apiHandlerForPost);

app.put(`${USER_ENDPOINT}/:id`, function (req, res) {
    const userID = req.params.id;
    res.json({
        success: true,
        UserID: userID,
        method: "put"
    });
});

app.delete(`${USER_ENDPOINT}/:id`, (req, res) => {
    const userID = req.params.id;
    res.json({
        success: true,
        UserID: userID,
        method: "delete"
    });
})


const SERVER_PORT = 3000;

const onServerStart = () => {
    console.log(`Express Server Is Running... http://localhost:${SERVER_PORT}`);
}

app.listen(SERVER_PORT, onServerStart);