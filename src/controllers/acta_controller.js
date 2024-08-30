import Acta from '../models/Acta.js';

// Obtener todas las actas
const getAllActas = async (req, res) => {
    try {
        const actas = await Acta.find();
        res.json(actas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las actas' });
    }
};

// Obtener un acta por su ID
const getActaById = async (req, res) => {
    try {
        const acta = await Acta.findById(req.params.id);
        if (!acta) {
            return res.status(404).json({ error: 'Acta no encontrada' });
        }
        res.json(acta);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el acta' });
    }
};

// Crear un nuevo acta
const createActa = async (req, res) => {
    try {
        const acta = new Acta(req.body);
        await acta.save();
        res.status(201).json(acta);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el acta' });
    }
};

// Actualizar un acta existente
const updateActa = async (req, res) => {
    try {
        const acta = await Acta.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!acta) {
            return res.status(404).json({ error: 'Acta no encontrada' });
        }
        res.json(acta);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el acta' });
    }
};

// Eliminar un acta existente
const deleteActa = async (req, res) => {
    try {
        const acta = await Acta.findByIdAndDelete(req.params.id);
        if (!acta) {
            return res.status(404).json({ error: 'Acta no encontrada' });
        }
        res.json({ message: 'Acta eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el acta' });
    }
};

export {
    getAllActas,
    getActaById,
    createActa,
    updateActa,
    deleteActa,
};
