const Fish = require("../model/Fish");

// Create a new fish
const createFish = async (req, res) => {
    //request jwt token

    const { name, price, description, image, category, quantity } = req.body;
    try {
        const newFish = await Fish.create({
            name,
            price,
            description,
            image,
            category,
            quantity,
        });
        res.status(201).json(newFish);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all fishes
const getAllFishes = async (req, res) => {
    res.send("getAll");
    // try {
    //     const fishes = await Fish.find();

    //     res.status(200).json(fishes);
    // } catch (error) {
    //     res.status(500).json({ error: error.message });
    // }
};

// Get a fish by id
const getFishById = async (req, res) => {
    res.send("getById");
    // const { id } = req.params;

    // try {
    //     const fish = await Fish.findById(id);

    //     if (fish) {
    //         return res.status(200).json(fish);
    //     }

    //     res.status(404).json({ message: "Fish not found!" });
    // } catch (error) {
    //     res.status(500).json({ error: error.message });
    // }
};

// Update a fish by id

const updateFishById = async (req, res) => {
    res.send("update");
};

module.exports = {
    createFish,
};
