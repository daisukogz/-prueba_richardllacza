class People {
    constructor({
                    name,
                    birth_year,
                    eye_color,
                    gender,
                    hair_color,
                    height,
                    mass,
                    skin_color,
                    homeworld,
                    films,
                    species,
                    starships,
                    vehicles,
                    url,
                    created,
                    edited,
                }) {
        this.name = name;
        this.birth_year = birth_year;
        this.eye_color = eye_color;
        this.gender = gender;
        this.hair_color = hair_color;
        this.height = height;
        this.mass = mass;
        this.skin_color = skin_color;
        this.homeworld = homeworld;
        this.films = films || [];
        this.species = species || [];
        this.starships = starships || [];
        this.vehicles = vehicles || [];
        this.url = url;
        this.created = created;
        this.edited = edited;
    }

    // Método para traducir los nombres de las propiedades al español
    traducirAlEspañol() {
        return {
            nombre: this.name,
            año_nacimiento: this.birth_year,
            color_de_ojos: this.eye_color,
            género: this.gender,
            color_de_cabello: this.hair_color,
            altura: this.height,
            masa: this.mass,
            color_de_piel: this.skin_color,
            planeta_natal: this.homeworld,
            películas: this.films,
            especies: this.species,
            naves_estelares: this.starships,
            vehículos: this.vehicles,
            url: this.url,
            creado: this.created,
            editado: this.edited,
        };
    }
}

module.exports = People;
