const Fish = require("../model/Fish");

// Create a new fish
const createFish = async (req, res) => {
    // const { name, price, description, image, category, quantity } = req.body;
    // try {
    //     const newFish = await Fish.create({
    //         name,
    //         price,
    //         description,
    //         image,
    //         category,
    //         quantity,
    //     });
    //     res.status(201).json(newFish);
    // } catch (error) {
    //     res.status(500).json({ error: error.message });
    // }
};

module.exports = {
    createFish,
};
