BEGIN;

CREATE TABLE IF NOT EXISTS birds (
  name TEXT PRIMARY KEY,  --bird's common name
  scientific_name TEXT,    --scientific name
  points INTEGER,         --point value(0-9)
  habitat TEXT,        --habitat bird can be played(forest, grassland, and/or wetland)
  nest_type TEXT,         --nest type(platform, bowl, cavity, ground, or star)
  wingspan INTEGER,       --bird wingspan length in centimeters
  trivia TEXT,            --bird trivia fact
  location TEXT,          --continent bird lives in
  img_path TEXT
);

COMMIT;