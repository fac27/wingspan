import { db } from "../database/db.js";

const get_all_birds = db.prepare(/*sql*/ `
    SELECT
        name,
        scientific_name,
        points,
        habitat,
        nest_type,
        wingspan,
        trivia,
        location
    FROM birds
`);

export default function getAllBirds() {
  return get_all_birds.all();
}
