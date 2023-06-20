BEGIN;

INSERT INTO BIRDS VALUES
    (1, 'Abbotts Booby', 'Papasula abbotti', 5,  'wetland', 'platform', 190,
    'Abbotts booby is the largest of all booby species, and is adapted to long-distance flight.', 'Australia'),

    (2, 'Acorn Woodpecker', 'Melanerpes formicivorus', 5, 'forest', 'cavity', 46,
    'In a single dead tree, these birds may drill as many as 50,000 holes for storing acorns.', 'North America, South America'),

    (3, 'American Avocet', 'Recurvirostra americana', 6, 'wetland', 'ground', 79,
    'American Avocets build their own nests, but also parasitize other birds nests.', 'North America'),

    (4, 'American Bittern', 'Botaurus lentiginosus', 7, 'wetland', 'platform', 107,
    'Bitterns hide in reeds and cattails, where they are well camouflaged.', 'North America'),

    (5, 'American Coot', 'Fulica americana', 3, 'wetland', 'platform', 61,
    'These omnivorous birds eat a lot of algae, but also seeds, fish, insects, and mollusks.',
    'North America, South America'),

    (6, 'American Crow', 'Corvus brachyrhynchos', 4, 'forest, grassland, wetland', 'platform', 99,
    'These intelligent birds steal eggs and food from other birds, and cache food for later.', 'North America'),

    (7, 'American Goldfinch', 'Spinus tristis', 3, 'grassland', 'bowl', 23,
    'Goldfinches breed late, after the milkweed and thistle have gone to seed.',
    'North America'),

    (8, 'American Kestrel', 'Falco sparverius', 5, 'grassland', 'cavity', 56,
    'Kestrels track rodents by their urine, and will cache surplus kills for later.',
    'North America ,South America')

ON CONFLICT (name) DO NOTHING;

COMMIT;
