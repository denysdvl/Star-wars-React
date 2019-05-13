class SwapiService {
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
            return res.results;
        };
        this.getPerson = (id) => {
            return getResource(`/people/${id}`);
        };
        this.getAllPlanets = async () => {
            const res = await getResource(`/planets/`);
            return res.results;
        };
        this.getPlanets = (id) => {
            return getResource(`/planets/${id}`);
        };
        this.getAllStarships = async () => {
            const res = await getResource(`/starships/`);
            return res.results;
        };
        this.getStarships = (id) => {
            return getResource(`/starships/${id}`);
        };

    }
}
const swapi = new SwapiService();

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

swapi.getAllStarships().then((people) => {
    people.forEach(p => {
        console.log(p.name);
    });
});
swapi.getStarships(5).then((p) => {
    console.log(p.name, "23");
});