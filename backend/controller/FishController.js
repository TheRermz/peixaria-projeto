const Fish = require("../model/Fish");

// Create a new fish
const createFish = async (req, res) => {
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
        res.status(500).json({ errors: error.message });
    }
};

// Get all fishes get"/"
const getAllFishes = async (req, res) => {
    try {
        const fishes = await Fish.find();

        res.status(200).json(fishes);
    } catch (error) {
        res.status(500).json({ errors: error.message });
    }
};

// Get a fish by id get"/:id"
const getFishById = async (req, res) => {
    const { id } = req.params;

    try {
        const fish = await Fish.findById(id);

        if (fish) {
            return res.status(200).json(fish);
        }

        res.status(404).json({ errors: ["Peixe não encontrado!"] });
    } catch (error) {
        res.status(500).json({ errors: ["Erro ao buscar o peixe"] });
    }
};

// Update a fish by id put"/:id"
const updateFishById = async (req, res) => {
    const { id } = req.params;
    const { name, price, description, image, category, quantity } = req.body;

    try {
        const fish = await Fish.findByIdAndUpdate(
            id,
            {
                name,
                price,
                description,
                image,
                category,
                quantity,
            },
            { new: true },
        );

        if (fish) {
            return res.status(200).json(fish);
        }

        res.status(404).json({ errors: ["Peixe não encontrado!"] });
    } catch (error) {
        res.status(500).json({ errors: ["Erro ao atualizar o peixe"] });
    }
};

//delete fish by ID delete "/:id"
const deleteFishById = async (req, res) => {
    const { id } = req.params;

    try {
        const fish = await Fish.findByIdAndDelete(id);

        if (fish) {
            return res.status(200).json({ message: "Peixe apagado!" });
        }

        res.status(404).json({ errors: ["Peixe não encontrado!"] });
    } catch (error) {
        res.status(500).json({ errors: ["Erro ao deletar o peixe"] });
    }
};

module.exports = {
    createFish,
    getAllFishes,
    getFishById,
    updateFishById,
    deleteFishById,
};
