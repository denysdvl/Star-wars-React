import { async } from "q";

export default class SwapiService {
    constructor() {
        const __apiBase = "https://swapi.co/api";

        async function getResource(url) {
            const res = await fetch(`${__apiBase}${url}`);
            if (!res.ok) {
                throw new Error(`Could not fetch ${__apiBase}${url}` +
                    ` received ${res.status}`);
            }
            return await res.json();
        }

        this.getAllPeople = async () => {
            const res = await getResource(`/people/`);
            return res.results.map(this._transformPerson);
        };
        this.getPerson = async (id) => {
            const person = await getResource(`/people/${id}`);
            return this._transformPlanet(person);
        };
        this.getAllPlanets = async () => {
            const res = await getResource(`/planets/`);
            return res.results.map(this._transformPlanet);
        };
        this.getPlanets = async (id) => {
            const planet = await getResource(`/planets/${id}`);
            return this._transformPlanet(planet);
        };
        this.getAllStarships = async () => {
            const res = await getResource(`/starships/`);
            return res.results;
        };
        this.getStarships = async (id) => {
            const starships = await getResource(`/starships/${id}`);
            return this._transformPlanet(starships);
        };

        this._extractId = (item) => {
            const idRegex = /\/([0-9]*)\/$/;
            return item.url.match(idRegex)[1];
        }

        this._transformPlanet = (planet) => {
            return {
                id: this._extractId(planet),
                name: planet.name,
                population: planet.population,
                rotationPeriod: planet.rotation_period,
                diameter: planet.diameter
            };
        };
        this._transformStarship = (starship)=> {
            return {
              id: this._extractId(starship),
              name: starship.name,
              model: starship.model,
              manufacturer: starship.manufacturer,
              costInCredits: starship.costInCredits,
              length: starship.length,
              crew: starship.crew,
              passengers: starship.passengers,
              cargoCapacity: starship.cargoCapacity
            };
          };
        
          this._transformPerson = (person) => {
            return {
              id: this._extractId(person),
              name: person.name,
              gender: person.gender,
              birthYear: person.birthYear,
              eyeColor: person.eyeColor
            };
          };
          
    }
}
// const swapi = new SwapiService();

// swapi.getAllPeople().then((people) => {
//     people.forEach(p => {
//         console.log(p.name);
//     });
// });
// swapi.getPerson(4).then((p) => {
//     console.log(p.name);
// });

// swapi.getAllPlanets().then((people) => {
//     people.forEach(p => {
//         console.log(p.name);
//     });
// });
// swapi.getPlanets(5).then((p) => {
//     console.log(p.name, "23");
// });

// swapi.getAllStarships().then((people) => {
//     people.forEach(p => {
//         console.log(p.name);
//     });
// });
// swapi.getStarships(5).then((p) => {
//     console.log(p.name, "23");
// });