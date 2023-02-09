const express = require("express");
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const userList = [{
    name: "kotireddy",
    email: "kotireddy@gmail.com",
    phone: "976653354",
    id: 1
},
{
    name: "Syed",
    email: "syed@gmail.com",
    phone: "976653354",
    id: 2
},
{
    name: "seshi",
    email: "seshi@gmail.com",
    phone: "976653354",
    id: 3
}];

const USER_ENDPOINT = "/users";

app.get(USER_ENDPOINT, function (req, res) {
    res.json({
        success: true,
        method: "GET",
        data: userList
    })
});

app.post(USER_ENDPOINT, (req, res) => {
    const responseData = req.body;
    const { name, email, phone } = responseData;
    const errors = [];

    if (!name) {
        errors.push(`Name is required`);
    }
    if (!email) {
        errors.push(`Email is required`);
    }
    if (!phone) {
        errors.push(`Phone is required`);
    }

    if (errors.length > 0) {
        return res.json({
            success: false,
            errors: errors
        })
    }

    const newUser = {
        name: name,
        email: email,
        phone: phone,
        id: userList.length + 1
    }
    userList.push(newUser);

    res.json({
        success: true,
        method: "POST",
        data: newUser
    })

});

app.put(`${USER_ENDPOINT}/:id`, (req, res) => {
    const userId = req.params.id;
    res.json({
        success: true,
        method: "PUT",
        data: userList,
        id: userId
    })
});

app.delete(`${USER_ENDPOINT}/:id`, (req, res) => {
    const userID = req.params.id;
    const user = userList.find(user => user.id === +userID);
    if (!user) {
        return res.json({
            success: false,
            message: `User Not Found ${userID}`
        })
    }

    const userIndex = userList.findIndex(user => user.id === +userID);
    userList.splice(userIndex, 1);
    res.json({
        success: true,
        method: "DELETE",
        data: user,
        id: userID,
        index: userIndex
    })
})

const SERVER_PORT = 300;

app.listen(SERVER_PORT, () => {
    console.log(`Express is runining  http://localhost:${SERVER_PORT}`);
})

