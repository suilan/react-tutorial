const mongoose = require('mongoose');
const Users = mongoose.model('Users');

module.exports = {
    async listAll(req, res){
        const page = req.query.page;
        const users = await Users.paginate({},{page,limit:3});
        res.json(users);
    },
    // async listAll(req, res){
    //     const users = await Users.find();
    //     res.json(users);
    // },
    async store(req,res)
    {
        const payload = await req.body;
        Users.create(payload);
        res.json(payload);
    },
    async listById(req,res){
        const { id } = req.params;

        const user = await Users.findById(id);
        res.json(user);
    },

    // listQuery(req,res){
    //     const { id } = req.query;

    //     res.json({"ID": id});
    // },
    // listHeaders(req,res){
    //     const { id } = req.headers;

    //     res.json({"ID": id});
    // }
}