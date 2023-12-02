const express = require("express");
const {sequelize, User, Post,Comment} = require("./models");

const app = express();
app.use(express.json());

app.post('/users', async (req, res) => {
    const {name, email, role} = req.body;

    console.log("POST /users");

    try {
        const user = await User.create({name, email, role});
        return res.json(user);
    } catch (e) {
        console.log(e);
        return res.status(500).json({"message": "Something went wrong"});
    }
});
app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        return res.json(users);
    } catch (e) {
        console.log(e);
        return res.status(500).json({error: 'Something went wrong'});
    }
});
app.get('/users/:uuid', async (req, res) => {
    const uuid = req.params.uuid;
    try {
        const user = await User.findOne({
            where: {uuid},
            include: ['posts'],
        });
        return res.json(user);
    } catch (e) {
        console.log(e);
        return res.status(500).json({error: 'Something went wrong'});
    }
});

app.delete('/users/:uuid', async (req, res) => {
    const uuid = req.params.uuid;
    try {
        const user = await User.findOne({
            where: {uuid},
        });
        await user.destroy();
        return res.json({message: "User Deleted!"});
    } catch (e) {
        console.log(e);
        return res.status(500).json({error: 'Something went wrong'});
    }
});
app.put('/users/:uuid', async (req, res) => {
    const uuid = req.params.uuid;
    const {name, email, role} = req.body;
    try {
        const user = await User.findOne({
            where: {uuid},
        });
        user.name = name;
        user.email = email;
        user.role = role;
        await user.save();

        return res.json(user);
    } catch (e) {
        console.log(e);
        return res.status(500).json({error: 'Something went wrong'});
    }
});

app.post('/posts', async (req, res) => {
    const {userId, body} = req.body;

    try {
        const user = await User.findOne({where: {id: userId}});
        const post = await Post.create({body, userId: user.id});
        return res.json(post);
    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
});
app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: [
                {model: User, as: 'user'},
                {model: Comment, as: 'comments', include: ['user']}
            ],
        });
        return res.json(posts);
    } catch (e) {
        console.log(e);
        return res.status(500).json({error: e});
    }
});


app.post('/posts/:id/comment', async (req, res) => {
    const {body,userId} = req.body;
    const {id} = req.params;
    try {
        const post = await Post.findOne({where: {id: id}});
        const comment = await Comment.create({body, postId: post.id,userId:userId});
        return res.json(comment);
    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
});

app.listen({port: 5001}, async () => {
    console.log('Server Listening on 5000');
    await sequelize.authenticate();
    //{force:true}
});