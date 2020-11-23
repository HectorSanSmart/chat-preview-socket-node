let arr = [];

class Usuarios {
    constructor() {
            this.personas = [];
        }
        //id y nombre vienen del socket
    agregarPersona(id, nombre, sala) {
        let persona = {
            id,
            nombre,
            sala
        };
        this.personas.push(persona);
        return this.personas;
    }

    //obteniendo info de la pesona conectada
    getPersona(id) {
        let persona = this.personas.filter(cliente => {
            //comparamos los id y regresamos la primera similitud que encuentre
            return cliente.id === id;
        })[0];
        //el 0 es porque es un unico registro

        return persona;
    }

    //obteniendo todas las personas
    getPersonas() {
        return this.personas;
    }

    getPersonasPorSala(sala) {
        let personasEnSala = this.personas.filter(persona => {
            return persona.sala === sala;
        })
        return personasEnSala;
    }

    //cuando el ususario se desconecte o algo por el estilo
    borrarPersona(id) {

        let personaBorrada = this.getPersona(id);
        this.personas = this.personas.filter(persona => {
            return persona.id != id
        });

        return personaBorrada;

    }


}

module.exports = {
    Usuarios
}