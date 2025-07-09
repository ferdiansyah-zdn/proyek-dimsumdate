alert("Dashboard Spotify 2023 Siap!");

const data = [
  {
    "track_name": "Seven (feat. Latto) (Explicit Ver.)",
    "artist": "Latto",
    "artists": "Latto, Jung Kook",
    "streams": 141381703,
    "danceability": 0.8,
    "energy": 0.83,
    "collab": true
  },
  {
    "track_name": "LALA",
    "artist": "Myke Towers",
    "artists": "Myke Towers",
    "streams": 133716286,
    "danceability": 0.71,
    "energy": 0.74,
    "collab": false
  },
  {
    "track_name": "vampire",
    "artist": "Olivia Rodrigo",
    "artists": "Olivia Rodrigo",
    "streams": 140003974,
    "danceability": 0.51,
    "energy": 0.53,
    "collab": false
  },
  {
    "track_name": "Cruel Summer",
    "artist": "Taylor Swift",
    "artists": "Taylor Swift",
    "streams": 800840817,
    "danceability": 0.55,
    "energy": 0.72,
    "collab": false
  },
  {
    "track_name": "WHERE SHE GOES",
    "artist": "Bad Bunny",
    "artists": "Bad Bunny",
    "streams": 303236322,
    "danceability": 0.65,
    "energy": 0.8,
    "collab": false
  },
  {
    "track_name": "Sprinter",
    "artist": "Dave",
    "artists": "Dave, Central Cee",
    "streams": 183706234,
    "danceability": 0.92,
    "energy": 0.58,
    "collab": true
  },
  {
    "track_name": "Ella Baila Sola",
    "artist": "Eslabon Armado",
    "artists": "Eslabon Armado, Peso Pluma",
    "streams": 725980112,
    "danceability": 0.67,
    "energy": 0.76,
    "collab": true
  },
  {
    "track_name": "Columbia",
    "artist": "Quevedo",
    "artists": "Quevedo",
    "streams": 58149378,
    "danceability": 0.67,
    "energy": 0.71,
    "collab": false
  },
  {
    "track_name": "fukumean",
    "artist": "Gunna",
    "artists": "Gunna",
    "streams": 95217315,
    "danceability": 0.85,
    "energy": 0.62,
    "collab": false
  },
  {
    "track_name": "La Bebe - Remix",
    "artist": "Peso Pluma",
    "artists": "Peso Pluma, Yng Lvcas",
    "streams": 553634067,
    "danceability": 0.81,
    "energy": 0.48,
    "collab": true
  },
  {
    "track_name": "un x100to",
    "artist": "Bad Bunny",
    "artists": "Bad Bunny, Grupo Frontera",
    "streams": 505671438,
    "danceability": 0.57,
    "energy": 0.72,
    "collab": true
  },
  {
    "track_name": "Super Shy",
    "artist": "NewJeans",
    "artists": "NewJeans",
    "streams": 58255150,
    "danceability": 0.78,
    "energy": 0.82,
    "collab": false
  },
  {
    "track_name": "Flowers",
    "artist": "Miley Cyrus",
    "artists": "Miley Cyrus",
    "streams": 1316855716,
    "danceability": 0.71,
    "energy": 0.68,
    "collab": false
  },
  {
    "track_name": "Daylight",
    "artist": "David Kushner",
    "artists": "David Kushner",
    "streams": 387570742,
    "danceability": 0.51,
    "energy": 0.43,
    "collab": false
  },
  {
    "track_name": "As It Was",
    "artist": "Harry Styles",
    "artists": "Harry Styles",
    "streams": 2513188493,
    "danceability": 0.52,
    "energy": 0.73,
    "collab": false
  },
  {
    "track_name": "Kill Bill",
    "artist": "SZA",
    "artists": "SZA",
    "streams": 1163093654,
    "danceability": 0.64,
    "energy": 0.73,
    "collab": false
  },
  {
    "track_name": "Cupid - Twin Ver.",
    "artist": "Fifty Fifty",
    "artists": "Fifty Fifty",
    "streams": 496795686,
    "danceability": 0.78,
    "energy": 0.59,
    "collab": false
  },
  {
    "track_name": "What Was I Made For? [From The Motion Picture \"Barbie\"]",
    "artist": "Billie Eilish",
    "artists": "Billie Eilish",
    "streams": 30546883,
    "danceability": 0.44,
    "energy": 0.09,
    "collab": false
  },
  {
    "track_name": "Classy 101",
    "artist": "Feid",
    "artists": "Feid, Young Miko",
    "streams": 335222234,
    "danceability": 0.86,
    "energy": 0.66,
    "collab": true
  },
  {
    "track_name": "Like Crazy",
    "artist": "Jimin",
    "artists": "Jimin",
    "streams": 363369738,
    "danceability": 0.63,
    "energy": 0.73,
    "collab": false
  },
  {
    "track_name": "LADY GAGA",
    "artist": "Gabito Ballesteros",
    "artists": "Gabito Ballesteros, Junior H, Peso Pluma",
    "streams": 86444842,
    "danceability": 0.65,
    "energy": 0.74,
    "collab": true
  },
  {
    "track_name": "I Can See You (Taylor\u00ef\u00bf\u00bd\u00ef\u00bf\u00bd\u00ef\u00bf\u00bds Version) (From The ",
    "artist": "Taylor Swift",
    "artists": "Taylor Swift",
    "streams": 52135248,
    "danceability": 0.69,
    "energy": 0.76,
    "collab": false
  },
  {
    "track_name": "I Wanna Be Yours",
    "artist": "Arctic Monkeys",
    "artists": "Arctic Monkeys",
    "streams": 1297026226,
    "danceability": 0.48,
    "energy": 0.42,
    "collab": false
  },
  {
    "track_name": "Peso Pluma: Bzrp Music Sessions, Vol. 55",
    "artist": "Bizarrap",
    "artists": "Bizarrap, Peso Pluma",
    "streams": 200647221,
    "danceability": 0.85,
    "energy": 0.67,
    "collab": true
  },
  {
    "track_name": "Popular (with Playboi Carti & Madonna) - The Idol Vol. 1 (Music from the HBO Original Series)",
    "artist": "The Weeknd",
    "artists": "The Weeknd, Madonna, Playboi Carti",
    "streams": 115364561,
    "danceability": 0.85,
    "energy": 0.68,
    "collab": true
  },
  {
    "track_name": "SABOR FRESA",
    "artist": "Fuerza Regida",
    "artists": "Fuerza Regida",
    "streams": 78300654,
    "danceability": 0.79,
    "energy": 0.86,
    "collab": false
  },
  {
    "track_name": "Calm Down (with Selena Gomez)",
    "artist": "R\u00ef\u00bf\u00bd\u00ef\u00bf\u00bdma",
    "artists": "R\u00ef\u00bf\u00bd\u00ef\u00bf\u00bdma, Selena G",
    "streams": 899183384,
    "danceability": 0.8,
    "energy": 0.8,
    "collab": true
  },
  {
    "track_name": "MOJABI GHOST",
    "artist": "Tainy",
    "artists": "Tainy, Bad Bunny",
    "streams": 61245289,
    "danceability": 0.81,
    "energy": 0.71,
    "collab": true
  },
  {
    "track_name": "Last Night",
    "artist": "Morgan Wallen",
    "artists": "Morgan Wallen",
    "streams": 429829812,
    "danceability": 0.52,
    "energy": 0.68,
    "collab": false
  },
  {
    "track_name": "Dance The Night (From Barbie The Album)",
    "artist": "Dua Lipa",
    "artists": "Dua Lipa",
    "streams": 127408954,
    "danceability": 0.67,
    "energy": 0.85,
    "collab": false
  },
  {
    "track_name": "Rush",
    "artist": "Troye Sivan",
    "artists": "Troye Sivan",
    "streams": 22581161,
    "danceability": 0.74,
    "energy": 0.84,
    "collab": false
  },
  {
    "track_name": "TULUM",
    "artist": "Peso Pluma",
    "artists": "Peso Pluma, Grupo Frontera",
    "streams": 52294266,
    "danceability": 0.56,
    "energy": 0.87,
    "collab": true
  },
  {
    "track_name": "Creepin'",
    "artist": "The Weeknd",
    "artists": "The Weeknd, 21 Savage, Metro Boomin",
    "streams": 843957510,
    "danceability": 0.71,
    "energy": 0.61,
    "collab": true
  },
  {
    "track_name": "Anti-Hero",
    "artist": "Taylor Swift",
    "artists": "Taylor Swift",
    "streams": 999748277,
    "danceability": 0.64,
    "energy": 0.63,
    "collab": false
  },
  {
    "track_name": "TQG",
    "artist": "Karol G",
    "artists": "Karol G, Shakira",
    "streams": 618990393,
    "danceability": 0.72,
    "energy": 0.63,
    "collab": true
  },
  {
    "track_name": "Los del Espacio",
    "artist": "Big One",
    "artists": "Big One, Duki, Lit Killah, Maria Becerra, FMK, Rusherking, Emilia, Tiago pzk",
    "streams": 123122413,
    "danceability": 0.81,
    "energy": 0.68,
    "collab": true
  },
  {
    "track_name": "Fr\u00ef\u00bf\u00bd\u00ef\u00bf\u00bdgil (feat. Grupo Front",
    "artist": "Yahritza Y Su Esencia",
    "artists": "Yahritza Y Su Esencia, Grupo Frontera",
    "streams": 188933502,
    "danceability": 0.61,
    "energy": 0.73,
    "collab": true
  },
  {
    "track_name": "Blank Space",
    "artist": "Taylor Swift",
    "artists": "Taylor Swift",
    "streams": 1355959075,
    "danceability": 0.75,
    "energy": 0.68,
    "collab": false
  },
  {
    "track_name": "Style",
    "artist": "Taylor Swift",
    "artists": "Taylor Swift",
    "streams": 786181836,
    "danceability": 0.6,
    "energy": 0.79,
    "collab": false
  },
  {
    "track_name": "TQM",
    "artist": "Fuerza Regida",
    "artists": "Fuerza Regida",
    "streams": 176553476,
    "danceability": 0.79,
    "energy": 0.85,
    "collab": false
  },
  {
    "track_name": "El Azul",
    "artist": "Junior H",
    "artists": "Junior H, Peso Pluma",
    "streams": 354495408,
    "danceability": 0.56,
    "energy": 0.65,
    "collab": true
  },
  {
    "track_name": "Sunflower - Spider-Man: Into the Spider-Verse",
    "artist": "Post Malone",
    "artists": "Post Malone, Swae Lee",
    "streams": 2808096550,
    "danceability": 0.76,
    "energy": 0.5,
    "collab": true
  },
  {
    "track_name": "I'm Good (Blue)",
    "artist": "Bebe Rexha",
    "artists": "Bebe Rexha, David Guetta",
    "streams": 1109433169,
    "danceability": 0.56,
    "energy": 0.97,
    "collab": true
  },
  {
    "track_name": "See You Again",
    "artist": "Tyler",
    "artists": "Tyler, The Creator, Kali Uchis",
    "streams": 1047101291,
    "danceability": 0.56,
    "energy": 0.56,
    "collab": true
  },
  {
    "track_name": "Barbie World (with Aqua) [From Barbie The Album]",
    "artist": "Nicki Minaj",
    "artists": "Nicki Minaj, Aqua, Ice Spice",
    "streams": 65156199,
    "danceability": 0.77,
    "energy": 0.58,
    "collab": true
  },
  {
    "track_name": "Angels Like You",
    "artist": "Miley Cyrus",
    "artists": "Miley Cyrus",
    "streams": 570515054,
    "danceability": 0.67,
    "energy": 0.64,
    "collab": false
  },
  {
    "track_name": "I Ain't Worried",
    "artist": "OneRepublic",
    "artists": "OneRepublic",
    "streams": 1085685420,
    "danceability": 0.71,
    "energy": 0.81,
    "collab": false
  },
  {
    "track_name": "Die For You",
    "artist": "The Weeknd",
    "artists": "The Weeknd",
    "streams": 1647990401,
    "danceability": 0.59,
    "energy": 0.52,
    "collab": false
  },
  {
    "track_name": "Starboy",
    "artist": "The Weeknd",
    "artists": "The Weeknd, Daft Punk",
    "streams": 2565529693,
    "danceability": 0.68,
    "energy": 0.59,
    "collab": true
  },
  {
    "track_name": "Die For You - Remix",
    "artist": "Ariana Grande",
    "artists": "Ariana Grande, The Weeknd",
    "streams": 518745108,
    "danceability": 0.53,
    "energy": 0.53,
    "collab": true
  },
  {
    "track_name": "El Cielo",
    "artist": "Feid",
    "artists": "Feid, Myke Towers, Sky Rompiendo",
    "streams": 107753850,
    "danceability": 0.72,
    "energy": 0.64,
    "collab": true
  },
  {
    "track_name": "Baby Don't Hurt Me",
    "artist": "David Guetta",
    "artists": "David Guetta, Anne-Marie, Coi Leray",
    "streams": 177740666,
    "danceability": 0.6,
    "energy": 0.91,
    "collab": true
  },
  {
    "track_name": "AMARGURA",
    "artist": "Karol G",
    "artists": "Karol G",
    "streams": 153372011,
    "danceability": 0.92,
    "energy": 0.7,
    "collab": false
  },
  {
    "track_name": "(It Goes Like) Nanana - Edit",
    "artist": "Peggy Gou",
    "artists": "Peggy Gou",
    "streams": 57876440,
    "danceability": 0.67,
    "energy": 0.88,
    "collab": false
  },
  {
    "track_name": "Another Love",
    "artist": "Tom Odell",
    "artists": "Tom Odell",
    "streams": 1813673666,
    "danceability": 0.45,
    "energy": 0.54,
    "collab": false
  },
  {
    "track_name": "Blinding Lights",
    "artist": "The Weeknd",
    "artists": "The Weeknd",
    "streams": 3703895074,
    "danceability": 0.5,
    "energy": 0.8,
    "collab": false
  },
  {
    "track_name": "Moonlight",
    "artist": "Kali Uchis",
    "artists": "Kali Uchis",
    "streams": 256483385,
    "danceability": 0.64,
    "energy": 0.72,
    "collab": false
  },
  {
    "track_name": "La Bachata",
    "artist": "Manuel Turizo",
    "artists": "Manuel Turizo",
    "streams": 1214083358,
    "danceability": 0.84,
    "energy": 0.68,
    "collab": false
  },
  {
    "track_name": "S91",
    "artist": "Karol G",
    "artists": "Karol G",
    "streams": 16011326,
    "danceability": 0.86,
    "energy": 0.72,
    "collab": false
  },
  {
    "track_name": "cardigan",
    "artist": "Taylor Swift",
    "artists": "Taylor Swift",
    "streams": 812019557,
    "danceability": 0.61,
    "energy": 0.58,
    "collab": false
  },
  {
    "track_name": "T\u00ef\u00bf\u00bd\u00ef\u00bf",
    "artist": "dennis",
    "artists": "dennis, MC Kevin o Chris",
    "streams": 111947664,
    "danceability": 0.86,
    "energy": 0.96,
    "collab": true
  },
  {
    "track_name": "Boy's a liar Pt. 2",
    "artist": "PinkPantheress",
    "artists": "PinkPantheress, Ice Spice",
    "streams": 156338624,
    "danceability": 0.7,
    "energy": 0.81,
    "collab": true
  },
  {
    "track_name": "Left and Right (Feat. Jung Kook of BTS)",
    "artist": "Charlie Puth",
    "artists": "Charlie Puth, BTS, Jung Kook",
    "streams": 720434240,
    "danceability": 0.88,
    "energy": 0.59,
    "collab": true
  },
  {
    "track_name": "BESO",
    "artist": "Rauw Alejandro",
    "artists": "Rauw Alejandro, ROSAL\u00ef\u00bf\u00bd",
    "streams": 357925728,
    "danceability": 0.77,
    "energy": 0.64,
    "collab": true
  },
  {
    "track_name": "Hey Mor",
    "artist": "Ozuna",
    "artists": "Ozuna, Feid",
    "streams": 674072710,
    "danceability": 0.9,
    "energy": 0.59,
    "collab": true
  },
  {
    "track_name": "Yellow",
    "artist": "Chris Molitor",
    "artists": "Chris Molitor",
    "streams": 1755214421,
    "danceability": 0.43,
    "energy": 0.66,
    "collab": false
  },
  {
    "track_name": "Karma",
    "artist": "Taylor Swift",
    "artists": "Taylor Swift",
    "streams": 404562836,
    "danceability": 0.64,
    "energy": 0.62,
    "collab": false
  },
  {
    "track_name": "People",
    "artist": "Libianca",
    "artists": "Libianca",
    "streams": 373199958,
    "danceability": 0.59,
    "energy": 0.42,
    "collab": false
  },
  {
    "track_name": "Overdrive",
    "artist": "Post Malone",
    "artists": "Post Malone",
    "streams": 14780425,
    "danceability": 0.56,
    "energy": 0.73,
    "collab": false
  },
  {
    "track_name": "Enchanted (Taylor's Version)",
    "artist": "Taylor Swift",
    "artists": "Taylor Swift",
    "streams": 39578178,
    "danceability": 0.51,
    "energy": 0.53,
    "collab": false
  },
  {
    "track_name": "BABY HELLO",
    "artist": "Rauw Alejandro",
    "artists": "Rauw Alejandro, Bizarrap",
    "streams": 54266102,
    "danceability": 0.77,
    "energy": 0.89,
    "collab": true
  },
  {
    "track_name": "Heat Waves",
    "artist": "Glass Animals",
    "artists": "Glass Animals",
    "streams": 2557975762,
    "danceability": 0.76,
    "energy": 0.53,
    "collab": false
  },
  {
    "track_name": "golden hour",
    "artist": "JVKE",
    "artists": "JVKE",
    "streams": 751134527,
    "danceability": 0.51,
    "energy": 0.59,
    "collab": false
  },
  {
    "track_name": "Sweater Weather",
    "artist": "The Neighbourhood",
    "artists": "The Neighbourhood",
    "streams": 2282771485,
    "danceability": 0.61,
    "energy": 0.81,
    "collab": false
  },
  {
    "track_name": "Quevedo: Bzrp Music Sessions, Vol. 52",
    "artist": "Bizarrap",
    "artists": "Bizarrap, Quevedo",
    "streams": 1356565093,
    "danceability": 0.62,
    "energy": 0.78,
    "collab": true
  },
  {
    "track_name": "Viva La Vida",
    "artist": "Coldplay",
    "artists": "Coldplay",
    "streams": 1592909789,
    "danceability": 0.49,
    "energy": 0.62,
    "collab": false
  },
  {
    "track_name": "Here With Me",
    "artist": "d4vd",
    "artists": "d4vd",
    "streams": 635412045,
    "danceability": 0.58,
    "energy": 0.48,
    "collab": false
  },
  {
    "track_name": "Unholy (feat. Kim Petras)",
    "artist": "Sam Smith",
    "artists": "Sam Smith, Kim Petras",
    "streams": 1230675890,
    "danceability": 0.71,
    "energy": 0.47,
    "collab": true
  },
  {
    "track_name": "Yandel 150",
    "artist": "Yandel",
    "artists": "Yandel, Feid",
    "streams": 585695368,
    "danceability": 0.78,
    "energy": 0.73,
    "collab": true
  },
  {
    "track_name": "CORAZ\u00ef\u00bf\u00bd\u00ef\u00bf\u00bdN VA",
    "artist": "Maria Becerra",
    "artists": "Maria Becerra",
    "streams": 43857627,
    "danceability": 0.68,
    "energy": 0.79,
    "collab": false
  },
  {
    "track_name": "Riptide",
    "artist": "Vance Joy",
    "artists": "Vance Joy",
    "streams": 2009094673,
    "danceability": 0.48,
    "energy": 0.73,
    "collab": false
  },
  {
    "track_name": "Until I Found You (with Em Beihold) - Em Beihold Version",
    "artist": "Em Beihold",
    "artists": "Em Beihold, Stephen Sanchez",
    "streams": 600976848,
    "danceability": 0.34,
    "energy": 0.57,
    "collab": true
  },
  {
    "track_name": "Novidade na \u00ef\u00bf\u00bd\u00ef\u00bf",
    "artist": "Mc Livinho",
    "artists": "Mc Livinho, DJ Matt D",
    "streams": 39709092,
    "danceability": 0.63,
    "energy": 0.34,
    "collab": true
  },
  {
    "track_name": "Back To December (Taylor's Version)",
    "artist": "Taylor Swift",
    "artists": "Taylor Swift",
    "streams": 39228929,
    "danceability": 0.5,
    "energy": 0.64,
    "collab": false
  },
  {
    "track_name": "STAY (with Justin Bieber)",
    "artist": "Justin Bieber",
    "artists": "Justin Bieber, The Kid Laroi",
    "streams": 2665343922,
    "danceability": 0.59,
    "energy": 0.76,
    "collab": true
  },
  {
    "track_name": "El Merengue",
    "artist": "Marshmello",
    "artists": "Marshmello, Manuel Turizo",
    "streams": 223633238,
    "danceability": 0.78,
    "energy": 0.68,
    "collab": true
  },
  {
    "track_name": "Someone You Loved",
    "artist": "Lewis Capaldi",
    "artists": "Lewis Capaldi",
    "streams": 2887241814,
    "danceability": 0.5,
    "energy": 0.41,
    "collab": false
  },
  {
    "track_name": "Me Porto Bonito",
    "artist": "Chencho Corleone",
    "artists": "Chencho Corleone, Bad Bunny",
    "streams": 1440757818,
    "danceability": 0.91,
    "energy": 0.71,
    "collab": true
  },
  {
    "track_name": "Makeba",
    "artist": "Jain",
    "artists": "Jain",
    "streams": 165484133,
    "danceability": 0.82,
    "energy": 0.66,
    "collab": false
  },
  {
    "track_name": "MONTAGEM - FR PUNK",
    "artist": "Ayparia",
    "artists": "Ayparia, unxbected",
    "streams": 58054811,
    "danceability": 0.63,
    "energy": 0.82,
    "collab": true
  },
  {
    "track_name": "Fast Car",
    "artist": "Luke Combs",
    "artists": "Luke Combs",
    "streams": 157058870,
    "danceability": 0.71,
    "energy": 0.6,
    "collab": false
  },
  {
    "track_name": "What It Is (Solo Version)",
    "artist": "Doechii",
    "artists": "Doechii",
    "streams": 95131998,
    "danceability": 0.74,
    "energy": 0.76,
    "collab": false
  },
  {
    "track_name": "Coco Chanel",
    "artist": "Bad Bunny",
    "artists": "Bad Bunny, Eladio Carrion",
    "streams": 250305248,
    "danceability": 0.68,
    "energy": 0.76,
    "collab": true
  },
  {
    "track_name": "Don\u00ef\u00bf\u00bd\u00ef\u00bf\u00bd\u00ef\u00bf\u00bdt Bl",
    "artist": "Taylor Swift",
    "artists": "Taylor Swift",
    "streams": 685032533,
    "danceability": 0.62,
    "energy": 0.53,
    "collab": false
  },
  {
    "track_name": "Still With You",
    "artist": "Jung Kook",
    "artists": "Jung Kook",
    "streams": 38411956,
    "danceability": 0.53,
    "energy": 0.47,
    "collab": false
  },
  {
    "track_name": "All My Life (feat. J. Cole)",
    "artist": "J. Cole",
    "artists": "J. Cole, Lil Durk",
    "streams": 144565150,
    "danceability": 0.83,
    "energy": 0.44,
    "collab": true
  },
  {
    "track_name": "Say Yes To Heaven",
    "artist": "Lana Del Rey",
    "artists": "Lana Del Rey",
    "streams": 127567540,
    "danceability": 0.49,
    "energy": 0.35,
    "collab": false
  },
  {
    "track_name": "Snooze",
    "artist": "SZA",
    "artists": "SZA",
    "streams": 399686758,
    "danceability": 0.56,
    "energy": 0.55,
    "collab": false
  },
  {
    "track_name": "Summertime Sadness",
    "artist": "Lana Del Rey",
    "artists": "Lana Del Rey",
    "streams": 983637508,
    "danceability": 0.56,
    "energy": 0.66,
    "collab": false
  },
  {
    "track_name": "Take Two",
    "artist": "BTS",
    "artists": "BTS",
    "streams": 118482347,
    "danceability": 0.62,
    "energy": 0.59,
    "collab": false
  }
];

const width = 450, height = 450, radius = Math.min(width, height) / 2;
const color = d3.scaleOrdinal(["#1f77b4", "#ff7f0e"]);

// --- DONUT CHART: Rasio Solo vs Kolaborasi ---
const svgDonut = d3.select("#donutChart")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", `translate(${width / 2},${height / 2})`);

const solo = data.filter(d => !d.collab).length;
const collab = data.filter(d => d.collab).length;
const pieData = [{ label: "Solo", value: solo }, { label: "Kolaborasi", value: collab }];

const pie = d3.pie().value(d => d.value);
const arc = d3.arc().innerRadius(1).outerRadius(radius-50);

svgDonut.selectAll("path")
  .data(pie(pieData))
  .enter().append("path")
  .attr("d", arc)
  .attr("fill", d => color(d.data.label))
  .attr("stroke", "white")
  .style("stroke-width", "2px");

svgDonut.selectAll("text")
  .data(pie(pieData))
  .enter()
  .append("text")
  .text(d => {
    const percent = ((d.data.value / d3.sum(pieData, d => d.value)) * 100).toFixed(1);
    return `${d.data.label} (${percent}%)`;
  })
  .attr("transform", d => "translate(" + arc.centroid(d) + ")")
  .style("text-anchor", "middle")
  .style("fill", "white")
  .style("font-size", "14px");

// --- BAR CHART: Top 10 Artis Berdasarkan Streams ---
const svgBar = d3.select("#barChart").append("svg")
  .attr("width", 600)
  .attr("height", 400);

const margin = { top: 30, right: 20, bottom: 50, left: 100 },
  chartWidth = 600 - margin.left - margin.right,
  chartHeight = 400 - margin.top - margin.bottom;

const chartGroup = svgBar.append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

const topArtists = d3.rollup(
  data,
  v => d3.sum(v, d => d.streams),
  d => d.artist
);

const sorted = Array.from(topArtists, ([artist, streams]) => ({ artist, streams }))
  .sort((a, b) => b.streams - a.streams)
  .slice(0, 10);

const x = d3.scaleLinear()
  .domain([0, d3.max(sorted, d => d.streams)])
  .range([0, chartWidth]);

const y = d3.scaleBand()
  .domain(sorted.map(d => d.artist))
  .range([0, chartHeight])
  .padding(0.1);

chartGroup.selectAll("rect")
  .data(sorted)
  .enter().append("rect")
  .attr("x", 0)
  .attr("y", d => y(d.artist))
  .attr("width", d => x(d.streams))
  .attr("height", y.bandwidth())
  .attr("fill", "#29b6f6");

chartGroup.selectAll("text")
  .data(sorted)
  .enter().append("text")
  .attr("x", d => x(d.streams) + 5)
  .attr("y", d => y(d.artist) + y.bandwidth() / 2)
  .attr("dy", "0.35em")
  .text(d => {
  const millions = d.streams / 1_000_000;
  return `${millions.toFixed(1)}M`;
})
  .attr("fill", "white");

chartGroup.append("g")
  .call(d3.axisLeft(y).tickSize(0))
  .selectAll("text").attr("fill", "white");

// --- CHART: Artis Paling Sering Kolaborasi ---
const svgCollab = d3.select("#mostCollabChart").append("svg")
  .attr("width", 600)
  .attr("height", 400);

const collabMargin = { top: 30, right: 20, bottom: 50, left: 100 },
  collabWidth = 600 - collabMargin.left - collabMargin.right,
  collabHeight = 400 - collabMargin.top - collabMargin.bottom;

const collabGroup = svgCollab.append("g")
  .attr("transform", `translate(${collabMargin.left},${collabMargin.top})`);

const collabCounts = d3.rollup(
  data.filter(d => d.collab),
  v => v.length,
  d => d.artist
);

const collabSorted = Array.from(collabCounts, ([artist, count]) => ({ artist, count }))
  .sort((a, b) => b.count - a.count)
  .slice(0, 10);

const xCollab = d3.scaleLinear()
  .domain([0, d3.max(collabSorted, d => d.count)])
  .range([0, collabWidth]);

const yCollab = d3.scaleBand()
  .domain(collabSorted.map(d => d.artist))
  .range([0, collabHeight])
  .padding(0.1);

collabGroup.selectAll("rect")
  .data(collabSorted)
  .enter().append("rect")
  .attr("x", 0)
  .attr("y", d => yCollab(d.artist))
  .attr("width", d => xCollab(d.count))
  .attr("height", yCollab.bandwidth())
  .attr("fill", "#ff7f0e");

collabGroup.selectAll("text")
  .data(collabSorted)
  .enter().append("text")
  .attr("x", d => xCollab(d.count) + 5)
  .attr("y", d => yCollab(d.artist) + yCollab.bandwidth() / 2)
  .attr("dy", "0.35em")
  .text(d => `${d.count} kolaborasi`)
  .attr("fill", "white");

collabGroup.append("g")
  .call(d3.axisLeft(yCollab).tickSize(0))
  .selectAll("text").attr("fill", "white");

// --- DROPDOWN FILTER: Telusuri DNA Artis ---
const artistSet = Array.from(new Set(data.map(d => d.artist))).sort();
d3.select("#artistFilter")
  .selectAll("option")
  .data(artistSet)
  .enter()
  .append("option")
  .text(d => d)
  .attr("value", d => d);

d3.select("#artistFilter").on("change", function () {
  const selected = this.value;
  const songs = data.filter(d => d.artist === selected);

  // Hitung ulang data visualisasi
  const solo = songs.filter(d => !d.collab).length;
  const collab = songs.filter(d => d.collab).length;
  const pieData = [{ label: "Solo", value: solo }, { label: "Kolaborasi", value: collab }];

  // Update Donut Chart
  const pieUpdate = d3.pie().value(d => d.value);
  const arcUpdate = d3.arc().innerRadius(1).outerRadius(radius - 50);

  // Remove yang lama
  svgDonut.selectAll("path").remove();
  svgDonut.selectAll("text").remove();

  // Tambah ulang berdasarkan artis terpilih
  svgDonut.selectAll("path")
    .data(pieUpdate(pieData))
    .enter().append("path")
    .attr("d", arcUpdate)
    .attr("fill", d => color(d.data.label))
    .attr("stroke", "white")
    .style("stroke-width", "2px");

  svgDonut.selectAll("text")
    .data(pieUpdate(pieData))
    .enter()
    .append("text")
    .text(d => {
      const percent = ((d.data.value / d3.sum(pieData, d => d.value)) * 100).toFixed(1);
      return `${d.data.label} (${percent}%)`;
    })
    .attr("transform", d => "translate(" + arcUpdate.centroid(d) + ")")
    .style("text-anchor", "middle")
    .style("fill", "white")
    .style("font-size", "14px");

  // Update teks info artis
  const avgDance = d3.mean(songs, d => d.danceability).toFixed(2);
  const avgEnergy = d3.mean(songs, d => d.energy).toFixed(2);

  d3.select("#artistStats").html(
    `<h3>DNA Musikal: ${selected}</h3>
    <p><strong>Danceability:</strong> ${avgDance}</p>
    <p><strong>Energy:</strong> ${avgEnergy}</p>
    <h4>Top Lagu</h4>
    <ul>${songs.slice(0, 5).map(d => `<li>${d.track_name} (${d.streams.toLocaleString()} streams)</li>`).join("")}</ul>`
  );

  // Update daftar kolaborasi sukses
  const topCollabs = songs.filter(d => d.collab)
    .sort((a, b) => b.streams - a.streams)
    .slice(0, 5);

  d3.select("#collabTable").html(
    `<h3>Kolaborasi Tersukses</h3>
    <ol>${topCollabs.map(d => `<li>${d.track_name} (${d.streams.toLocaleString()} streams)</li>`).join("")}</ol>`
  );
});
