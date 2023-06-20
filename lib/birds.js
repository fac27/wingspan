import db from "../database/db.js";

const get_all_birds = db.prepare(/*sql*/ `
    SELECT
        name,
        scientific_name,
        points,
        habitat,
        nest_type,
        wingspan,
        trivia,
        location,
        img_path
    FROM birds
`);

export function getAllBirds() {
  return get_all_birds.all();
}

// retrieve all bird names
const get_all_bird_ids = db.prepare(/*sql*/ `
  SELECT id FROM birds
`);

export function getAllBirdIds() {
  return get_all_bird_ids.all().map((id) => {
    const idString = String(id.id);
    return { params: { id: idString } };
  });
}

// retrieve a specific bird data
const get_bird_data = db.prepare(/*sql*/ `
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
    WHERE id = $id
`);

export function getBirdData(id) {
  return get_bird_data.get({ id });
}
