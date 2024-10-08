import { Schema, model } from "mongoose";

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
        
        default: 0
    },
    papeletasEntregadas: {
        type: Number,
        required: true
    },
    papeletasDevueltas: {
        type: Number,
        required: true
    },
    totalEmpadronados: {
        type: Number,
        required: true
    },
    totalElectores: {
        type: Number,
        required: true
    }
});

// Método para calcular el total de votos
actaSchema.methods.calculateTotalVotos = function() {
    this.totalVotos = this.lista1 + this.lista2 + this.lista3 + this.votosBlancos + this.votosNulos;
};

// Hook pre-save para calcular totalVotos antes de guardar
actaSchema.pre('save', function(next) {
    this.calculateTotalVotos();
    next();
});

const Acta = model('Acta', actaSchema);

export default Acta;
