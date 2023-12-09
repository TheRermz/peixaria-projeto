const mongoose = require("mongoose");

const dbUser = process.env.DB_USER;
const dbPwd = process.env.DB_PASS;

//connection to mongodb

const con = async () => {
    try {
        const dbConn = await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPwd}@peixaria-cluster.ruvf6fu.mongodb.net/`,
        );

        console.log("MongoDB connected");

        return dbConn;
    } catch (error) {
        console.log(error);
    }
};

con();

module.exports = con;
