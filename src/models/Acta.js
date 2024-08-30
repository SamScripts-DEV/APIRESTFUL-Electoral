import {Schema, model} from "mongoose";

const actaSchema = new Schema({
    numeroActa: {
        type: String,
        required: true
    },
    responsable: {
        type: String,
        required: true
    },
    cedula: {
        type: String,
        required: true
    },
    lista1: {
        type: Number,
        required: true
    },
    lista2: {
        type: Number,
        required: true
    },
    lista3: {
        type: Number,
        required: true
    },
    votosBlancos: {
        type: Number,
        required: true
    },
    votosNulos: {
        type: Number,
        required: true
    },
    totalVotos: {
        type: Number,
        required: true
    }
});

export default model('Acta', actaSchema);

