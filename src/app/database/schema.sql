BEGIN;

CREATE TABLE IF NOT EXISTS birds (
  name TEXT PRIMARY KEY,  --bird's common name
  scientific_name TEXT,    --scientific name
  points INTEGER,         --point value(0-9)
  food_cost TEXT[],       --food cost to play bird(invertebrate, seed, fish, fruit, rodent, wild, and/or nectar)
  habitat TEXT[],        --habitat bird can be played(forest, grassland, and/or wetland)
  nest_type TEXT,         --nest type(platform, bowl, cavity, ground, or star)
  egg_limit INTEGER,      --bird egg limit
  wingspan INTEGER,       --bird wingspan length in centimeters
  power_type TEXT,        --power type(predator, flocking, bonus cards or null)
  power_color TEXT,       --color of power(brown(when activated), pink(once between turns), 
                          -- white(when played), teal(round end), yellow(game end), or null)
  power TEXT,             --bird power description
  trivia TEXT,            --bird trivia fact
  location TEXT[],          --continent bird lives in
  expansion TEXT          --main game/expansion pack(Core, European, or Oceania)
);

COMMIT;