class Starship {
    constructor({
                    name,
                    model,
                    starship_class,
                    manufacturer,
                    cost_in_credits,
                    length,
                    crew,
                    passengers,
                    max_atmosphering_speed,
                    hyperdrive_rating,
                    MGLT,
                    cargo_capacity,
                    consumables,
                    films,
                    pilots,
                    url,
                    created,
                    edited,
                }) {
        this.name = name;
        this.model = model;
        this.starship_class = starship_class;
        this.manufacturer = manufacturer;
        this.cost_in_credits = cost_in_credits;
        this.length = length;
        this.crew = crew;
        this.passengers = passengers;
        this.max_atmosphering_speed = max_atmosphering_speed;
        this.hyperdrive_rating = hyperdrive_rating;
        this.MGLT = MGLT;
        this.cargo_capacity = cargo_capacity;
        this.consumables = consumables;
        this.films = films || [];
        this.pilots = pilots || [];
        this.url = url;
        this.created = created;
        this.edited = edited;
    }

    // Método para traducir los nombres de las propiedades al español
    traducirAlEspañol() {
        return {
            nombre: this.name,
            modelo: this.model,
            clase_de_nave: this.starship_class,
            fabricante: this.manufacturer,
            costo_en_creditos: this.cost_in_credits,
            longitud: this.length,
            tripulación: this.crew,
            pasajeros: this.passengers,
            velocidad_max_atmosférica: this.max_atmosphering_speed,
            clasificación_del_motor_hiperespacial: this.hyperdrive_rating,
            MGLT: this.MGLT,
            capacidad_de_carga: this.cargo_capacity,
            consumibles: this.consumables,
            películas: this.films,
            pilotos: this.pilots,
            url: this.url,
            creado: this.created,
            editado: this.edited,
        };
    }
}

module.exports = Starship;
