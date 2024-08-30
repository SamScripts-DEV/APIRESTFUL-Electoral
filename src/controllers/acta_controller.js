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
        const acta = new Acta(req.body);  // `req.body` debe contener todos los campos necesarios
        await acta.save();  // `totalVotos` se calcula automáticamente aquí
        res.status(201).json(acta);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el acta' });
    }
};

// Actualizar un acta existente
const updateActa = async (req, res) => {
    try {
        const acta = await Acta.findById(req.params.id);
        if (!acta) {
            return res.status(404).json({ error: 'Acta no encontrada' });
        }
        Object.assign(acta, req.body);  // Actualiza el acta con los datos del request
        await acta.save();  // `totalVotos` se recalcula automáticamente aquí
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
