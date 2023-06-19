BEGIN;

INSERT INTO BIRDS VALUES (
    'Abbott’s Booby', 'Papasula abbotti', 5, '{"fish","fish"}', '{"wetland"}', 'platform', 1, 190, 'bonus cards',
    'white', 'Draw 3 bonus cards, then discard 2. You may discard bonus cards you did not draw this turn.', 
    null, '{"Australia"}', 'Oceania'),

    ('Acorn Woodpecker', 'Melanerpes formicivorus', 5, '{"seed","seed","seed"}', '{"forest"}', 'cavity', 1,
    46, null, 'brown', 'Gain 1 seed from the birdfeeder (if available). You may cache it on this card.',
    'In a single dead tree, these birds may drill as many as 50,000 holes for storing acorns.', 
    '{"North America","South America"}', 'Core'),
    
    ('American Avocet', 'Recurvirostra americana', 6, '{"invertebrate","invertebrate","seed"}', '{"wetland"}',
    'ground', 2, 79, null, 'pink', 
    'When another player takes the `"lay eggs`" action, this bird lays 1 egg on another bird with a ground nest.',
    'American Avocets build their own nests, but also parasitize other birds'' nests.', '{"North America"}', 'Core'),

    ('American Bittern', 'Botaurus lentiginosus', 7, '{"invertebrate","fish","rodent"}', '{"wetland"}', 'platform',
    2, 107, null, 'brown', 'Player(s) with the fewest wetland birds: draw 1 card.', 
    'Bitterns hide in reeds and cattails, where they are well camouflaged.', '{"North America"}', 'Core'),

    ('American Coot', 'Fulica americana', 3, '{"seed","wild"}', '{"wetland"}', 'platform', 5, 61, 'flocking',
    'brown', 'Tuck a card from your hand behind this bird. If you do, draw 1 card.', 
    'These omnivorous birds eat a lot of algae, but also seeds, fish, insects, and mollusks.', 
    '{"North America","South America"}', 'Core'),

    ('American Crow', 'Corvus brachyrhynchos', 4, '{"wild"}', '{"forest","grassland","wetland"}', 'platform', 2, 
    99, null, 'brown', 'Discard 1 egg from any of your other birds to gain 1 food token from the supply.',
    'These intelligent birds steal eggs and food from other birds, and cache food for later.', '{"North America"}',
    'Core'),

    ('American Goldfinch', 'Spinus tristis', 3, '{"seed","seed"}', '{"grassland"}', 'bowl', 3, 23, null, 'white',
    'Gain 3 seed from the supply.', 'Goldfinches breed late, after the milkweed and thistle have gone to seed.',
    '{"North America"}', 'Core'),

    ('American Kestrel', 'Falco sparverius', 5, '{"invertebrate","rodent"}', '{"grassland"}', 'cavity', 3, 56,
    'predator', 'brown', 'Roll all dice not in birdfeeder. If any are rodent, gain 1 rodent and cache it on this card.',
    'Kestrels track rodents by their urine, and will cache surplus kills for later.', 
    '{"North America","South America"}', 'Core')

ON CONFLICT(name) DO NOTHING;

COMMIT;