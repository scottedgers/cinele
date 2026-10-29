// Curated + Wikidata Public Domain (CC0) Movie Catalog for CINELE
// Total Movies: 605 (510 Mystery Targets)
// License: CC0 1.0 Public Domain (100% Free for Commercial & Personal Use)

const MOVIES_DB = [
  {
    "id": 1,
    "title": "Inception",
    "year": 2010,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Sci-Fi",
      "Action"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt"
    ],
    "director": "Christopher Nolan",
    "tagline": "Your mind is the scene of the crime.",
    "isTarget": true
  },
  {
    "id": 2,
    "title": "Interstellar",
    "year": 2014,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Sci-Fi",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Matthew McConaughey",
      "Anne Hathaway"
    ],
    "director": "Christopher Nolan",
    "tagline": "Mankind was born on Earth. It was never meant to die here.",
    "isTarget": true
  },
  {
    "id": 3,
    "title": "The Dark Knight",
    "year": 2008,
    "composers": [
      "Hans Zimmer",
      "James Newton Howard"
    ],
    "genres": [
      "Action",
      "Crime"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Christian Bale",
      "Heath Ledger"
    ],
    "director": "Christopher Nolan",
    "tagline": "Why so serious?",
    "isTarget": true
  },
  {
    "id": 4,
    "title": "Batman Begins",
    "year": 2005,
    "composers": [
      "Hans Zimmer",
      "James Newton Howard"
    ],
    "genres": [
      "Action",
      "Crime"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Christian Bale",
      "Michael Caine"
    ],
    "director": "Christopher Nolan",
    "tagline": "Evil fears the knight.",
    "isTarget": true
  },
  {
    "id": 5,
    "title": "The Dark Knight Rises",
    "year": 2012,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Action",
      "Thriller"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Christian Bale",
      "Tom Hardy"
    ],
    "director": "Christopher Nolan",
    "tagline": "The legend ends.",
    "isTarget": true
  },
  {
    "id": 6,
    "title": "Gladiator",
    "year": 2000,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Action",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Russell Crowe",
      "Joaquin Phoenix"
    ],
    "director": "Ridley Scott",
    "tagline": "What we do in life echoes in eternity.",
    "isTarget": true
  },
  {
    "id": 7,
    "title": "The Lion King",
    "year": 1994,
    "composers": [
      "Hans Zimmer",
      "Elton John"
    ],
    "genres": [
      "Animation",
      "Adventure"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Matthew Broderick",
      "Jeremy Irons"
    ],
    "director": "Roger Allers & Rob Minkoff",
    "tagline": "Life's greatest adventure is finding your place in the Circle of Life.",
    "isTarget": true
  },
  {
    "id": 8,
    "title": "Dune: Part One",
    "year": 2021,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Sci-Fi",
      "Adventure"
    ],
    "source": "Novel / Book",
    "actors": [
      "Timothée Chalamet",
      "Rebecca Ferguson"
    ],
    "director": "Denis Villeneuve",
    "tagline": "Beyond fear, destiny awaits.",
    "isTarget": true
  },
  {
    "id": 9,
    "title": "Dune: Part Two",
    "year": 2024,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Sci-Fi",
      "Adventure"
    ],
    "source": "Novel / Book",
    "actors": [
      "Timothée Chalamet",
      "Zendaya"
    ],
    "director": "Denis Villeneuve",
    "tagline": "Long live the fighters.",
    "isTarget": true
  },
  {
    "id": 10,
    "title": "Dunkirk",
    "year": 2017,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "War",
      "History"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Fionn Whitehead",
      "Tom Hardy"
    ],
    "director": "Christopher Nolan",
    "tagline": "When 400,000 men couldn't get home, home came for them.",
    "isTarget": true
  },
  {
    "id": 11,
    "title": "Blade Runner 2049",
    "year": 2017,
    "composers": [
      "Hans Zimmer",
      "Benjamin Wallfisch"
    ],
    "genres": [
      "Sci-Fi",
      "Mystery"
    ],
    "source": "Novel / Book",
    "actors": [
      "Ryan Gosling",
      "Harrison Ford"
    ],
    "director": "Denis Villeneuve",
    "tagline": "The key to the future is finally unearthed.",
    "isTarget": true
  },
  {
    "id": 12,
    "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
    "year": 2003,
    "composers": [
      "Klaus Badelt",
      "Hans Zimmer"
    ],
    "genres": [
      "Adventure",
      "Fantasy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Johnny Depp",
      "Orlando Bloom"
    ],
    "director": "Gore Verbinski",
    "tagline": "Prepare to be blown out of the water.",
    "isTarget": true
  },
  {
    "id": 13,
    "title": "Rain Man",
    "year": 1988,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Drama",
      "Comedy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Dustin Hoffman",
      "Tom Cruise"
    ],
    "director": "Barry Levinson",
    "tagline": "A journey through understanding and fellowship.",
    "isTarget": true
  },
  {
    "id": 14,
    "title": "Sherlock Holmes",
    "year": 2009,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Action",
      "Mystery"
    ],
    "source": "Novel / Book",
    "actors": [
      "Robert Downey Jr.",
      "Jude Law"
    ],
    "director": "Guy Ritchie",
    "tagline": "Nothing escapes him.",
    "isTarget": true
  },
  {
    "id": 15,
    "title": "Jaws",
    "year": 1975,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "Thriller",
      "Adventure"
    ],
    "source": "Novel / Book",
    "actors": [
      "Roy Scheider",
      "Richard Dreyfuss"
    ],
    "director": "Steven Spielberg",
    "tagline": "You'll never go in the water again.",
    "isTarget": true
  },
  {
    "id": 16,
    "title": "Star Wars: Episode IV - A New Hope",
    "year": 1977,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "Sci-Fi",
      "Adventure"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Mark Hamill",
      "Harrison Ford"
    ],
    "director": "George Lucas",
    "tagline": "A long time ago in a galaxy far, far away...",
    "isTarget": true
  },
  {
    "id": 17,
    "title": "Star Wars: Episode V - The Empire Strikes Back",
    "year": 1980,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "Sci-Fi",
      "Adventure"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Mark Hamill",
      "Harrison Ford"
    ],
    "director": "Irvin Kershner",
    "tagline": "The Adventure Continues...",
    "isTarget": true
  },
  {
    "id": 18,
    "title": "Raiders of the Lost Ark",
    "year": 1981,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "Action",
      "Adventure"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Harrison Ford",
      "Karen Allen"
    ],
    "director": "Steven Spielberg",
    "tagline": "If adventure has a name... it must be Indiana Jones.",
    "isTarget": true
  },
  {
    "id": 19,
    "title": "Indiana Jones and the Last Crusade",
    "year": 1989,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "Action",
      "Adventure"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Harrison Ford",
      "Sean Connery"
    ],
    "director": "Steven Spielberg",
    "tagline": "The man with the hat is back. And this time, he's bringing his Dad.",
    "isTarget": true
  },
  {
    "id": 20,
    "title": "E.T. the Extra-Terrestrial",
    "year": 1982,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "Sci-Fi",
      "Family"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Henry Thomas",
      "Drew Barrymore"
    ],
    "director": "Steven Spielberg",
    "tagline": "He is afraid. He is alone. He is three million light years from home.",
    "isTarget": true
  },
  {
    "id": 21,
    "title": "Jurassic Park",
    "year": 1993,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "Sci-Fi",
      "Adventure"
    ],
    "source": "Novel / Book",
    "actors": [
      "Sam Neill",
      "Laura Dern"
    ],
    "director": "Steven Spielberg",
    "tagline": "An adventure 65 million years in the making.",
    "isTarget": true
  },
  {
    "id": 22,
    "title": "Schindler's List",
    "year": 1993,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "Biography",
      "History"
    ],
    "source": "Novel / Book",
    "actors": [
      "Liam Neeson",
      "Ben Kingsley"
    ],
    "director": "Steven Spielberg",
    "tagline": "Whoever saves one life, saves the world entire.",
    "isTarget": true
  },
  {
    "id": 23,
    "title": "Saving Private Ryan",
    "year": 1998,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "War",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Tom Hanks",
      "Matt Damon"
    ],
    "director": "Steven Spielberg",
    "tagline": "The mission is a man.",
    "isTarget": true
  },
  {
    "id": 24,
    "title": "Home Alone",
    "year": 1990,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "Comedy",
      "Family"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Macaulay Culkin",
      "Joe Pesci"
    ],
    "director": "Chris Columbus",
    "tagline": "A family comedy without the family.",
    "isTarget": true
  },
  {
    "id": 25,
    "title": "Harry Potter and the Sorcerer's Stone",
    "year": 2001,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "Fantasy",
      "Adventure"
    ],
    "source": "Novel / Book",
    "actors": [
      "Daniel Radcliffe",
      "Emma Watson"
    ],
    "director": "Chris Columbus",
    "tagline": "Let the magic begin.",
    "isTarget": true
  },
  {
    "id": 26,
    "title": "Harry Potter and the Prisoner of Azkaban",
    "year": 2004,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "Fantasy",
      "Adventure"
    ],
    "source": "Novel / Book",
    "actors": [
      "Daniel Radcliffe",
      "Emma Watson"
    ],
    "director": "Alfonso Cuarón",
    "tagline": "Everything will change.",
    "isTarget": true
  },
  {
    "id": 27,
    "title": "Catch Me If You Can",
    "year": 2002,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "Biography",
      "Crime"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Leonardo DiCaprio",
      "Tom Hanks"
    ],
    "director": "Steven Spielberg",
    "tagline": "The true story of a real fake.",
    "isTarget": true
  },
  {
    "id": 28,
    "title": "Superman",
    "year": 1978,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Christopher Reeve",
      "Gene Hackman"
    ],
    "director": "Richard Donner",
    "tagline": "You'll believe a man can fly.",
    "isTarget": true
  },
  {
    "id": 29,
    "title": "Close Encounters of the Third Kind",
    "year": 1977,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "Sci-Fi",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Richard Dreyfuss",
      "Teri Garr"
    ],
    "director": "Steven Spielberg",
    "tagline": "We are not alone.",
    "isTarget": true
  },
  {
    "id": 30,
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "year": 2001,
    "composers": [
      "Howard Shore"
    ],
    "genres": [
      "Fantasy",
      "Adventure"
    ],
    "source": "Novel / Book",
    "actors": [
      "Elijah Wood",
      "Ian McKellen"
    ],
    "director": "Peter Jackson",
    "tagline": "One Ring to rule them all.",
    "isTarget": true
  },
  {
    "id": 31,
    "title": "The Lord of the Rings: The Two Towers",
    "year": 2002,
    "composers": [
      "Howard Shore"
    ],
    "genres": [
      "Fantasy",
      "Adventure"
    ],
    "source": "Novel / Book",
    "actors": [
      "Elijah Wood",
      "Viggo Mortensen"
    ],
    "director": "Peter Jackson",
    "tagline": "A new power is rising.",
    "isTarget": true
  },
  {
    "id": 32,
    "title": "The Lord of the Rings: The Return of the King",
    "year": 2003,
    "composers": [
      "Howard Shore"
    ],
    "genres": [
      "Fantasy",
      "Adventure"
    ],
    "source": "Novel / Book",
    "actors": [
      "Elijah Wood",
      "Viggo Mortensen"
    ],
    "director": "Peter Jackson",
    "tagline": "There can be no triumph without loss.",
    "isTarget": true
  },
  {
    "id": 33,
    "title": "The Silence of the Lambs",
    "year": 1991,
    "composers": [
      "Howard Shore"
    ],
    "genres": [
      "Thriller",
      "Crime"
    ],
    "source": "Novel / Book",
    "actors": [
      "Jodie Foster",
      "Anthony Hopkins"
    ],
    "director": "Jonathan Demme",
    "tagline": "To enter the mind of a killer she must challenge the mind of a madman.",
    "isTarget": true
  },
  {
    "id": 34,
    "title": "Se7en",
    "year": 1995,
    "composers": [
      "Howard Shore"
    ],
    "genres": [
      "Crime",
      "Mystery"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Brad Pitt",
      "Morgan Freeman"
    ],
    "director": "David Fincher",
    "tagline": "Seven deadly sins. Seven ways to die.",
    "isTarget": true
  },
  {
    "id": 35,
    "title": "The Departed",
    "year": 2006,
    "composers": [
      "Howard Shore"
    ],
    "genres": [
      "Crime",
      "Thriller"
    ],
    "source": "Remake / Reboot",
    "actors": [
      "Leonardo DiCaprio",
      "Matt Damon"
    ],
    "director": "Martin Scorsese",
    "tagline": "Cops or criminals. When you're facing a loaded gun, what's the difference?",
    "isTarget": true
  },
  {
    "id": 36,
    "title": "Spotlight",
    "year": 2015,
    "composers": [
      "Howard Shore"
    ],
    "genres": [
      "Biography",
      "Drama"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Mark Ruffalo",
      "Michael Keaton"
    ],
    "director": "Tom McCarthy",
    "tagline": "Break the story. Break the silence.",
    "isTarget": true
  },
  {
    "id": 37,
    "title": "The Good, the Bad and the Ugly",
    "year": 1966,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Western",
      "Adventure"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Clint Eastwood",
      "Eli Wallach"
    ],
    "director": "Sergio Leone",
    "tagline": "For three men the Civil War wasn't hell. It was practice!",
    "isTarget": true
  },
  {
    "id": 38,
    "title": "Once Upon a Time in the West",
    "year": 1968,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Western",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Henry Fonda",
      "Charles Bronson"
    ],
    "director": "Sergio Leone",
    "tagline": "There were three men in her life. One to take her... one to love her... and one to kill her.",
    "isTarget": true
  },
  {
    "id": 39,
    "title": "The Thing",
    "year": 1982,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "source": "Short Story / Novella",
    "actors": [
      "Kurt Russell",
      "Keith David"
    ],
    "director": "John Carpenter",
    "tagline": "Man is the warmest place to hide.",
    "isTarget": true
  },
  {
    "id": 40,
    "title": "Cinema Paradiso",
    "year": 1988,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Drama",
      "Romance"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Philippe Noiret",
      "Salvatore Cascio"
    ],
    "director": "Giuseppe Tornatore",
    "tagline": "A celebration of youth, friendship, and the everlasting magic of the movies.",
    "isTarget": true
  },
  {
    "id": 41,
    "title": "The Untouchables",
    "year": 1987,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Crime",
      "Drama"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Kevin Costner",
      "Sean Connery"
    ],
    "director": "Brian De Palma",
    "tagline": "What are you prepared to do?",
    "isTarget": true
  },
  {
    "id": 42,
    "title": "The Hateful Eight",
    "year": 2015,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Western",
      "Mystery"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Samuel L. Jackson",
      "Kurt Russell"
    ],
    "director": "Quentin Tarantino",
    "tagline": "No one comes up here without a damn good reason.",
    "isTarget": true
  },
  {
    "id": 43,
    "title": "Batman",
    "year": 1989,
    "composers": [
      "Danny Elfman"
    ],
    "genres": [
      "Action",
      "Crime"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Michael Keaton",
      "Jack Nicholson"
    ],
    "director": "Tim Burton",
    "tagline": "Have you ever danced with the devil in the pale moonlight?",
    "isTarget": true
  },
  {
    "id": 44,
    "title": "Edward Scissorhands",
    "year": 1990,
    "composers": [
      "Danny Elfman"
    ],
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Johnny Depp",
      "Winona Ryder"
    ],
    "director": "Tim Burton",
    "tagline": "His story will touch you, even though he can't.",
    "isTarget": true
  },
  {
    "id": 45,
    "title": "The Nightmare Before Christmas",
    "year": 1993,
    "composers": [
      "Danny Elfman"
    ],
    "genres": [
      "Animation",
      "Musical"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Chris Sarandon",
      "Catherine O'Hara"
    ],
    "director": "Henry Selick",
    "tagline": "A ghoulish tale with wicked humor & stunning animation.",
    "isTarget": true
  },
  {
    "id": 46,
    "title": "Spider-Man",
    "year": 2002,
    "composers": [
      "Danny Elfman"
    ],
    "genres": [
      "Action",
      "Adventure"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Tobey Maguire",
      "Willem Dafoe"
    ],
    "director": "Sam Raimi",
    "tagline": "With great power comes great responsibility.",
    "isTarget": true
  },
  {
    "id": 47,
    "title": "Good Will Hunting",
    "year": 1997,
    "composers": [
      "Danny Elfman"
    ],
    "genres": [
      "Drama",
      "Romance"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Matt Damon",
      "Robin Williams"
    ],
    "director": "Gus Van Sant",
    "tagline": "Some people can never believe in themselves, until someone believes in them.",
    "isTarget": true
  },
  {
    "id": 48,
    "title": "Men in Black",
    "year": 1997,
    "composers": [
      "Danny Elfman"
    ],
    "genres": [
      "Sci-Fi",
      "Comedy"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Tommy Lee Jones",
      "Will Smith"
    ],
    "director": "Barry Sonnenfeld",
    "tagline": "Protecting the Earth from the scum of the universe.",
    "isTarget": true
  },
  {
    "id": 49,
    "title": "Beetlejuice",
    "year": 1988,
    "composers": [
      "Danny Elfman"
    ],
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Michael Keaton",
      "Winona Ryder"
    ],
    "director": "Tim Burton",
    "tagline": "He's guaranteed to put some life in your afterlife.",
    "isTarget": true
  },
  {
    "id": 50,
    "title": "The Incredibles",
    "year": 2004,
    "composers": [
      "Michael Giacchino"
    ],
    "genres": [
      "Animation",
      "Action"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Craig T. Nelson",
      "Holly Hunter"
    ],
    "director": "Brad Bird",
    "tagline": "No gut, no glory.",
    "isTarget": true
  },
  {
    "id": 51,
    "title": "Ratatouille",
    "year": 2007,
    "composers": [
      "Michael Giacchino"
    ],
    "genres": [
      "Animation",
      "Comedy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Patton Oswalt",
      "Ian Holm"
    ],
    "director": "Brad Bird",
    "tagline": "Anyone can cook.",
    "isTarget": true
  },
  {
    "id": 52,
    "title": "Up",
    "year": 2009,
    "composers": [
      "Michael Giacchino"
    ],
    "genres": [
      "Animation",
      "Adventure"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Ed Asner",
      "Christopher Plummer"
    ],
    "director": "Pete Docter",
    "tagline": "Adventure is out there!",
    "isTarget": true
  },
  {
    "id": 53,
    "title": "Inside Out",
    "year": 2015,
    "composers": [
      "Michael Giacchino"
    ],
    "genres": [
      "Animation",
      "Family"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Amy Poehler",
      "Phyllis Smith"
    ],
    "director": "Pete Docter",
    "tagline": "Meet the little voices inside your head.",
    "isTarget": true
  },
  {
    "id": 54,
    "title": "Coco",
    "year": 2017,
    "composers": [
      "Michael Giacchino"
    ],
    "genres": [
      "Animation",
      "Family"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Anthony Gonzalez",
      "Gael García Bernal"
    ],
    "director": "Lee Unkrich",
    "tagline": "The celebration of a lifetime.",
    "isTarget": true
  },
  {
    "id": 55,
    "title": "The Batman",
    "year": 2022,
    "composers": [
      "Michael Giacchino"
    ],
    "genres": [
      "Crime",
      "Mystery"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Robert Pattinson",
      "Zoë Kravitz"
    ],
    "director": "Matt Reeves",
    "tagline": "Unmask the truth.",
    "isTarget": true
  },
  {
    "id": 56,
    "title": "Rogue One: A Star Wars Story",
    "year": 2016,
    "composers": [
      "Michael Giacchino"
    ],
    "genres": [
      "Sci-Fi",
      "Action"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Felicity Jones",
      "Diego Luna"
    ],
    "director": "Gareth Edwards",
    "tagline": "Rebellions are built on hope.",
    "isTarget": true
  },
  {
    "id": 57,
    "title": "Jojo Rabbit",
    "year": 2019,
    "composers": [
      "Michael Giacchino"
    ],
    "genres": [
      "Comedy",
      "War"
    ],
    "source": "Novel / Book",
    "actors": [
      "Roman Griffin Davis",
      "Scarlett Johansson"
    ],
    "director": "Taika Waititi",
    "tagline": "An anti-hate satire.",
    "isTarget": true
  },
  {
    "id": 58,
    "title": "Back to the Future",
    "year": 1985,
    "composers": [
      "Alan Silvestri"
    ],
    "genres": [
      "Sci-Fi",
      "Comedy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Michael J. Fox",
      "Christopher Lloyd"
    ],
    "director": "Robert Zemeckis",
    "tagline": "He's the only kid ever to get into trouble before he was born.",
    "isTarget": true
  },
  {
    "id": 59,
    "title": "Forrest Gump",
    "year": 1994,
    "composers": [
      "Alan Silvestri"
    ],
    "genres": [
      "Drama",
      "Romance"
    ],
    "source": "Novel / Book",
    "actors": [
      "Tom Hanks",
      "Robin Wright"
    ],
    "director": "Robert Zemeckis",
    "tagline": "Life is like a box of chocolates... you never know what you're gonna get.",
    "isTarget": true
  },
  {
    "id": 60,
    "title": "Cast Away",
    "year": 2000,
    "composers": [
      "Alan Silvestri"
    ],
    "genres": [
      "Drama",
      "Adventure"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Tom Hanks",
      "Helen Hunt"
    ],
    "director": "Robert Zemeckis",
    "tagline": "At the edge of the world, his journey begins.",
    "isTarget": true
  },
  {
    "id": 61,
    "title": "The Avengers",
    "year": 2012,
    "composers": [
      "Alan Silvestri"
    ],
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Robert Downey Jr.",
      "Chris Evans"
    ],
    "director": "Joss Whedon",
    "tagline": "Some assembly required.",
    "isTarget": true
  },
  {
    "id": 62,
    "title": "Avengers: Endgame",
    "year": 2019,
    "composers": [
      "Alan Silvestri"
    ],
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Robert Downey Jr.",
      "Chris Evans"
    ],
    "director": "Anthony & Joe Russo",
    "tagline": "Avenge the fallen.",
    "isTarget": true
  },
  {
    "id": 63,
    "title": "Predator",
    "year": 1987,
    "composers": [
      "Alan Silvestri"
    ],
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Arnold Schwarzenegger",
      "Carl Weathers"
    ],
    "director": "John McTiernan",
    "tagline": "If it bleeds, we can kill it.",
    "isTarget": true
  },
  {
    "id": 64,
    "title": "Titanic",
    "year": 1997,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Romance",
      "Drama"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Leonardo DiCaprio",
      "Kate Winslet"
    ],
    "director": "James Cameron",
    "tagline": "Nothing on Earth could come between them.",
    "isTarget": true
  },
  {
    "id": 65,
    "title": "Avatar",
    "year": 2009,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Sci-Fi",
      "Adventure"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Sam Worthington",
      "Zoe Saldana"
    ],
    "director": "James Cameron",
    "tagline": "Enter the world.",
    "isTarget": true
  },
  {
    "id": 66,
    "title": "Braveheart",
    "year": 1995,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "War",
      "History"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Mel Gibson",
      "Sophie Marceau"
    ],
    "director": "Mel Gibson",
    "tagline": "Every man dies. Not every man really lives.",
    "isTarget": true
  },
  {
    "id": 67,
    "title": "Aliens",
    "year": 1986,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Sci-Fi",
      "Action"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Sigourney Weaver",
      "Michael Biehn"
    ],
    "director": "James Cameron",
    "tagline": "This time it's war.",
    "isTarget": true
  },
  {
    "id": 68,
    "title": "Apollo 13",
    "year": 1995,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "History",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Tom Hanks",
      "Kevin Bacon"
    ],
    "director": "Ron Howard",
    "tagline": "Houston, we have a problem.",
    "isTarget": true
  },
  {
    "id": 69,
    "title": "A Beautiful Mind",
    "year": 2001,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Biography",
      "Drama"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Russell Crowe",
      "Jennifer Connelly"
    ],
    "director": "Ron Howard",
    "tagline": "He saw the world in a way no one could have imagined.",
    "isTarget": true
  },
  {
    "id": 70,
    "title": "The Shawshank Redemption",
    "year": 1994,
    "composers": [
      "Thomas Newman"
    ],
    "genres": [
      "Drama",
      "Crime"
    ],
    "source": "Short Story / Novella",
    "actors": [
      "Tim Robbins",
      "Morgan Freeman"
    ],
    "director": "Frank Darabont",
    "tagline": "Fear can hold you prisoner. Hope can set you free.",
    "isTarget": true
  },
  {
    "id": 71,
    "title": "The Green Mile",
    "year": 1999,
    "composers": [
      "Thomas Newman"
    ],
    "genres": [
      "Drama",
      "Fantasy"
    ],
    "source": "Novel / Book",
    "actors": [
      "Tom Hanks",
      "Michael Clarke Duncan"
    ],
    "director": "Frank Darabont",
    "tagline": "Miracles do happen.",
    "isTarget": true
  },
  {
    "id": 72,
    "title": "American Beauty",
    "year": 1999,
    "composers": [
      "Thomas Newman"
    ],
    "genres": [
      "Drama",
      "Romance"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Kevin Spacey",
      "Annette Bening"
    ],
    "director": "Sam Mendes",
    "tagline": "Look closer.",
    "isTarget": true
  },
  {
    "id": 73,
    "title": "Finding Nemo",
    "year": 2003,
    "composers": [
      "Thomas Newman"
    ],
    "genres": [
      "Animation",
      "Adventure"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Albert Brooks",
      "Ellen DeGeneres"
    ],
    "director": "Andrew Stanton",
    "tagline": "There are 3.7 trillion fish in the ocean. They're looking for one.",
    "isTarget": true
  },
  {
    "id": 74,
    "title": "WALL-E",
    "year": 2008,
    "composers": [
      "Thomas Newman"
    ],
    "genres": [
      "Animation",
      "Sci-Fi"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Ben Burtt",
      "Elissa Knight"
    ],
    "director": "Andrew Stanton",
    "tagline": "After 700 years of doing what he was built for, he'll discover what he was meant for.",
    "isTarget": true
  },
  {
    "id": 75,
    "title": "Skyfall",
    "year": 2012,
    "composers": [
      "Thomas Newman"
    ],
    "genres": [
      "Action",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Daniel Craig",
      "Javier Bardem"
    ],
    "director": "Sam Mendes",
    "tagline": "Think on your sins.",
    "isTarget": true
  },
  {
    "id": 76,
    "title": "1917",
    "year": 2019,
    "composers": [
      "Thomas Newman"
    ],
    "genres": [
      "War",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "George MacKay",
      "Dean-Charles Chapman"
    ],
    "director": "Sam Mendes",
    "tagline": "Time is the enemy.",
    "isTarget": true
  },
  {
    "id": 77,
    "title": "The Grand Budapest Hotel",
    "year": 2014,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Comedy",
      "Adventure"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Ralph Fiennes",
      "Tony Revolori"
    ],
    "director": "Wes Anderson",
    "tagline": "A murder case of utmost importance.",
    "isTarget": true
  },
  {
    "id": 78,
    "title": "The Shape of Water",
    "year": 2017,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Sally Hawkins",
      "Michael Shannon"
    ],
    "director": "Guillermo del Toro",
    "tagline": "A Fairy Tale for Troubled Times.",
    "isTarget": true
  },
  {
    "id": 79,
    "title": "The Imitation Game",
    "year": 2014,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Biography",
      "History"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Benedict Cumberbatch",
      "Keira Knightley"
    ],
    "director": "Morten Tyldum",
    "tagline": "The true enigma was the man who cracked the code.",
    "isTarget": true
  },
  {
    "id": 80,
    "title": "The King's Speech",
    "year": 2010,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Biography",
      "History"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Colin Firth",
      "Geoffrey Rush"
    ],
    "director": "Tom Hooper",
    "tagline": "Find your voice.",
    "isTarget": true
  },
  {
    "id": 81,
    "title": "Little Women",
    "year": 2019,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Drama",
      "Romance"
    ],
    "source": "Novel / Book",
    "actors": [
      "Saoirse Ronan",
      "Florence Pugh"
    ],
    "director": "Greta Gerwig",
    "tagline": "Own your story.",
    "isTarget": true
  },
  {
    "id": 82,
    "title": "The Curious Case of Benjamin Button",
    "year": 2008,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Drama",
      "Fantasy"
    ],
    "source": "Short Story / Novella",
    "actors": [
      "Brad Pitt",
      "Cate Blanchett"
    ],
    "director": "David Fincher",
    "tagline": "Life isn't measured in minutes, but in moments.",
    "isTarget": true
  },
  {
    "id": 83,
    "title": "The Social Network",
    "year": 2010,
    "composers": [
      "Trent Reznor",
      "Atticus Ross"
    ],
    "genres": [
      "Biography",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Jesse Eisenberg",
      "Andrew Garfield"
    ],
    "director": "David Fincher",
    "tagline": "You don't get to 500 million friends without making a few enemies.",
    "isTarget": true
  },
  {
    "id": 84,
    "title": "Gone Girl",
    "year": 2014,
    "composers": [
      "Trent Reznor",
      "Atticus Ross"
    ],
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Ben Affleck",
      "Rosamund Pike"
    ],
    "director": "David Fincher",
    "tagline": "You don't know what you've got 'til it's...",
    "isTarget": true
  },
  {
    "id": 85,
    "title": "Soul",
    "year": 2020,
    "composers": [
      "Trent Reznor",
      "Atticus Ross"
    ],
    "genres": [
      "Animation",
      "Family"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Jamie Foxx",
      "Tina Fey"
    ],
    "director": "Pete Docter",
    "tagline": "Is all this living really worth dying for?",
    "isTarget": true
  },
  {
    "id": 86,
    "title": "Challengers",
    "year": 2024,
    "composers": [
      "Trent Reznor",
      "Atticus Ross"
    ],
    "genres": [
      "Drama",
      "Romance"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Zendaya",
      "Josh O'Connor"
    ],
    "director": "Luca Guadagnino",
    "tagline": "Her game. Her rules.",
    "isTarget": true
  },
  {
    "id": 87,
    "title": "Oppenheimer",
    "year": 2023,
    "composers": [
      "Ludwig Göransson"
    ],
    "genres": [
      "Biography",
      "History"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Cillian Murphy",
      "Robert Downey Jr."
    ],
    "director": "Christopher Nolan",
    "tagline": "The world forever changes.",
    "isTarget": true
  },
  {
    "id": 88,
    "title": "Black Panther",
    "year": 2018,
    "composers": [
      "Ludwig Göransson"
    ],
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Chadwick Boseman",
      "Michael B. Jordan"
    ],
    "director": "Ryan Coogler",
    "tagline": "Long live the king.",
    "isTarget": true
  },
  {
    "id": 89,
    "title": "Tenet",
    "year": 2020,
    "composers": [
      "Ludwig Göransson"
    ],
    "genres": [
      "Sci-Fi",
      "Action"
    ],
    "source": "Original Screenplay",
    "actors": [
      "John David Washington",
      "Robert Pattinson"
    ],
    "director": "Christopher Nolan",
    "tagline": "Time runs out.",
    "isTarget": true
  },
  {
    "id": 90,
    "title": "Creed",
    "year": 2015,
    "composers": [
      "Ludwig Göransson"
    ],
    "genres": [
      "Drama",
      "Action"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Michael B. Jordan",
      "Sylvester Stallone"
    ],
    "director": "Ryan Coogler",
    "tagline": "Your legacy is more than a name.",
    "isTarget": true
  },
  {
    "id": 91,
    "title": "Whiplash",
    "year": 2014,
    "composers": [
      "Justin Hurwitz"
    ],
    "genres": [
      "Drama",
      "Musical"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Miles Teller",
      "J.K. Simmons"
    ],
    "director": "Damien Chazelle",
    "tagline": "The road to greatness can take you to the edge.",
    "isTarget": true
  },
  {
    "id": 92,
    "title": "La La Land",
    "year": 2016,
    "composers": [
      "Justin Hurwitz"
    ],
    "genres": [
      "Musical",
      "Romance"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Ryan Gosling",
      "Emma Stone"
    ],
    "director": "Damien Chazelle",
    "tagline": "Here's to the fools who dream.",
    "isTarget": true
  },
  {
    "id": 93,
    "title": "First Man",
    "year": 2018,
    "composers": [
      "Justin Hurwitz"
    ],
    "genres": [
      "Biography",
      "History"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Ryan Gosling",
      "Claire Foy"
    ],
    "director": "Damien Chazelle",
    "tagline": "Theatrical mission to the moon.",
    "isTarget": true
  },
  {
    "id": 94,
    "title": "Babylon",
    "year": 2022,
    "composers": [
      "Justin Hurwitz"
    ],
    "genres": [
      "Drama",
      "Comedy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Brad Pitt",
      "Margot Robbie"
    ],
    "director": "Damien Chazelle",
    "tagline": "Always make a scene.",
    "isTarget": true
  },
  {
    "id": 95,
    "title": "Psycho",
    "year": 1960,
    "composers": [
      "Bernard Herrmann"
    ],
    "genres": [
      "Horror",
      "Mystery"
    ],
    "source": "Novel / Book",
    "actors": [
      "Anthony Perkins",
      "Janet Leigh"
    ],
    "director": "Alfred Hitchcock",
    "tagline": "A new—and altogether different—screen excitement!",
    "isTarget": true
  },
  {
    "id": 96,
    "title": "Vertigo",
    "year": 1958,
    "composers": [
      "Bernard Herrmann"
    ],
    "genres": [
      "Mystery",
      "Romance"
    ],
    "source": "Novel / Book",
    "actors": [
      "James Stewart",
      "Kim Novak"
    ],
    "director": "Alfred Hitchcock",
    "tagline": "A Hitchcock thriller Digits of suspense!",
    "isTarget": true
  },
  {
    "id": 97,
    "title": "Taxi Driver",
    "year": 1976,
    "composers": [
      "Bernard Herrmann"
    ],
    "genres": [
      "Crime",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Robert De Niro",
      "Jodie Foster"
    ],
    "director": "Martin Scorsese",
    "tagline": "On every street in every city, there's a nobody who dreams of being a somebody.",
    "isTarget": true
  },
  {
    "id": 98,
    "title": "Citizen Kane",
    "year": 1941,
    "composers": [
      "Bernard Herrmann"
    ],
    "genres": [
      "Drama",
      "Mystery"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Orson Welles",
      "Joseph Cotten"
    ],
    "director": "Orson Welles",
    "tagline": "It's terrific!",
    "isTarget": true
  },
  {
    "id": 99,
    "title": "North by Northwest",
    "year": 1959,
    "composers": [
      "Bernard Herrmann"
    ],
    "genres": [
      "Thriller",
      "Adventure"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Cary Grant",
      "Eva Marie Saint"
    ],
    "director": "Alfred Hitchcock",
    "tagline": "A 3,000-mile chase across America!",
    "isTarget": true
  },
  {
    "id": 100,
    "title": "The Godfather",
    "year": 1972,
    "composers": [
      "Nino Rota"
    ],
    "genres": [
      "Crime",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Marlon Brando",
      "Al Pacino"
    ],
    "director": "Francis Ford Coppola",
    "tagline": "An offer you can't refuse.",
    "isTarget": true
  },
  {
    "id": 101,
    "title": "The Godfather Part II",
    "year": 1974,
    "composers": [
      "Nino Rota",
      "Carmine Coppola"
    ],
    "genres": [
      "Crime",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Al Pacino",
      "Robert De Niro"
    ],
    "director": "Francis Ford Coppola",
    "tagline": "All the power on earth can't change destiny.",
    "isTarget": true
  },
  {
    "id": 102,
    "title": "Apocalypse Now",
    "year": 1979,
    "composers": [
      "Carmine Coppola"
    ],
    "genres": [
      "War",
      "Drama"
    ],
    "source": "Short Story / Novella",
    "actors": [
      "Martin Sheen",
      "Marlon Brando"
    ],
    "director": "Francis Ford Coppola",
    "tagline": "The horror... the horror...",
    "isTarget": true
  },
  {
    "id": 103,
    "title": "Spirited Away",
    "year": 2001,
    "composers": [
      "Joe Hisaishi"
    ],
    "genres": [
      "Animation",
      "Fantasy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Rumi Hiiragi",
      "Miyu Irino"
    ],
    "director": "Hayao Miyazaki",
    "tagline": "Tunnel through to a world of spirits.",
    "isTarget": true
  },
  {
    "id": 104,
    "title": "Princess Mononoke",
    "year": 1997,
    "composers": [
      "Joe Hisaishi"
    ],
    "genres": [
      "Animation",
      "Fantasy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Yōji Matsuda",
      "Yuriko Ishida"
    ],
    "director": "Hayao Miyazaki",
    "tagline": "The fate of the world rests on the courage of one warrior.",
    "isTarget": true
  },
  {
    "id": 105,
    "title": "Howl's Moving Castle",
    "year": 2004,
    "composers": [
      "Joe Hisaishi"
    ],
    "genres": [
      "Animation",
      "Fantasy"
    ],
    "source": "Novel / Book",
    "actors": [
      "Chieko Baishō",
      "Takuya Kimura"
    ],
    "director": "Hayao Miyazaki",
    "tagline": "The two lived there.",
    "isTarget": true
  },
  {
    "id": 106,
    "title": "My Neighbor Totoro",
    "year": 1988,
    "composers": [
      "Joe Hisaishi"
    ],
    "genres": [
      "Animation",
      "Family"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Noriko Hidaka",
      "Chika Sakamoto"
    ],
    "director": "Hayao Miyazaki",
    "tagline": "These strange creatures still exist in Japan.",
    "isTarget": true
  },
  {
    "id": 107,
    "title": "Fargo",
    "year": 1996,
    "composers": [
      "Carter Burwell"
    ],
    "genres": [
      "Crime",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Frances McDormand",
      "William H. Macy"
    ],
    "director": "Joel & Ethan Coen",
    "tagline": "A homespun murder story.",
    "isTarget": true
  },
  {
    "id": 108,
    "title": "No Country for Old Men",
    "year": 2007,
    "composers": [
      "Carter Burwell"
    ],
    "genres": [
      "Crime",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Tommy Lee Jones",
      "Javier Bardem"
    ],
    "director": "Joel & Ethan Coen",
    "tagline": "There are no clean getaways.",
    "isTarget": true
  },
  {
    "id": 109,
    "title": "The Big Lebowski",
    "year": 1998,
    "composers": [
      "Carter Burwell"
    ],
    "genres": [
      "Comedy",
      "Crime"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Jeff Bridges",
      "John Goodman"
    ],
    "director": "Joel & Ethan Coen",
    "tagline": "The Dude abides.",
    "isTarget": true
  },
  {
    "id": 110,
    "title": "In Bruges",
    "year": 2008,
    "composers": [
      "Carter Burwell"
    ],
    "genres": [
      "Comedy",
      "Crime"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Colin Farrell",
      "Brendan Gleeson"
    ],
    "director": "Martin McDonagh",
    "tagline": "Shoot first. Sightsee later.",
    "isTarget": true
  },
  {
    "id": 111,
    "title": "Three Billboards Outside Ebbing, Missouri",
    "year": 2017,
    "composers": [
      "Carter Burwell"
    ],
    "genres": [
      "Crime",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Frances McDormand",
      "Woody Harrelson"
    ],
    "director": "Martin McDonagh",
    "tagline": "3 billboards. 2 sides. 1 truth.",
    "isTarget": true
  },
  {
    "id": 112,
    "title": "The Banshees of Inisherin",
    "year": 2022,
    "composers": [
      "Carter Burwell"
    ],
    "genres": [
      "Drama",
      "Comedy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Colin Farrell",
      "Brendan Gleeson"
    ],
    "director": "Martin McDonagh",
    "tagline": "Everything was fine yesterday.",
    "isTarget": true
  },
  {
    "id": 113,
    "title": "Alien",
    "year": 1979,
    "composers": [
      "Jerry Goldsmith"
    ],
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Sigourney Weaver",
      "Tom Skerritt"
    ],
    "director": "Ridley Scott",
    "tagline": "In space no one can hear you scream.",
    "isTarget": true
  },
  {
    "id": 114,
    "title": "Chinatown",
    "year": 1974,
    "composers": [
      "Jerry Goldsmith"
    ],
    "genres": [
      "Mystery",
      "Crime"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Jack Nicholson",
      "Faye Dunaway"
    ],
    "director": "Roman Polanski",
    "tagline": "Forget it, Jake. It's Chinatown.",
    "isTarget": true
  },
  {
    "id": 115,
    "title": "Planet of the Apes",
    "year": 1968,
    "composers": [
      "Jerry Goldsmith"
    ],
    "genres": [
      "Sci-Fi",
      "Adventure"
    ],
    "source": "Novel / Book",
    "actors": [
      "Charlton Heston",
      "Roddy McDowall"
    ],
    "director": "Franklin J. Schaffner",
    "tagline": "Somewhere in the Universe, there must be something better than man!",
    "isTarget": true
  },
  {
    "id": 116,
    "title": "L.A. Confidential",
    "year": 1997,
    "composers": [
      "Jerry Goldsmith"
    ],
    "genres": [
      "Crime",
      "Mystery"
    ],
    "source": "Novel / Book",
    "actors": [
      "Kevin Spacey",
      "Russell Crowe"
    ],
    "director": "Curtis Hanson",
    "tagline": "Off the record, on the QT, and very hush-hush.",
    "isTarget": true
  },
  {
    "id": 117,
    "title": "The Mummy",
    "year": 1999,
    "composers": [
      "Jerry Goldsmith"
    ],
    "genres": [
      "Adventure",
      "Action"
    ],
    "source": "Remake / Reboot",
    "actors": [
      "Brendan Fraser",
      "Rachel Weisz"
    ],
    "director": "Stephen Sommers",
    "tagline": "Adventure is reborn.",
    "isTarget": true
  },
  {
    "id": 118,
    "title": "There Will Be Blood",
    "year": 2007,
    "composers": [
      "Jonny Greenwood"
    ],
    "genres": [
      "Drama",
      "History"
    ],
    "source": "Novel / Book",
    "actors": [
      "Daniel Day-Lewis",
      "Paul Dano"
    ],
    "director": "Paul Thomas Anderson",
    "tagline": "There will be greed. There will be vengeance.",
    "isTarget": true
  },
  {
    "id": 119,
    "title": "Phantom Thread",
    "year": 2017,
    "composers": [
      "Jonny Greenwood"
    ],
    "genres": [
      "Drama",
      "Romance"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Daniel Day-Lewis",
      "Vicky Krieps"
    ],
    "director": "Paul Thomas Anderson",
    "tagline": "To be in love with the cursed.",
    "isTarget": true
  },
  {
    "id": 120,
    "title": "The Power of the Dog",
    "year": 2021,
    "composers": [
      "Jonny Greenwood"
    ],
    "genres": [
      "Drama",
      "Western"
    ],
    "source": "Novel / Book",
    "actors": [
      "Benedict Cumberbatch",
      "Kirsten Dunst"
    ],
    "director": "Jane Campion",
    "tagline": "Deliver us from evil.",
    "isTarget": true
  },
  {
    "id": 121,
    "title": "Blade Runner",
    "year": 1982,
    "composers": [
      "Vangelis"
    ],
    "genres": [
      "Sci-Fi",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Harrison Ford",
      "Rutger Hauer"
    ],
    "director": "Ridley Scott",
    "tagline": "Man has made his match... now it's his problem.",
    "isTarget": true
  },
  {
    "id": 122,
    "title": "Chariots of Fire",
    "year": 1981,
    "composers": [
      "Vangelis"
    ],
    "genres": [
      "Biography",
      "History"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Ben Cross",
      "Ian Charleson"
    ],
    "director": "Hugh Hudson",
    "tagline": "With wings on their heels and hope in their hearts.",
    "isTarget": true
  },
  {
    "id": 123,
    "title": "The Terminator",
    "year": 1984,
    "composers": [
      "Brad Fiedel"
    ],
    "genres": [
      "Sci-Fi",
      "Action"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Arnold Schwarzenegger",
      "Linda Hamilton"
    ],
    "director": "James Cameron",
    "tagline": "I'll be back.",
    "isTarget": true
  },
  {
    "id": 124,
    "title": "Terminator 2: Judgment Day",
    "year": 1991,
    "composers": [
      "Brad Fiedel"
    ],
    "genres": [
      "Sci-Fi",
      "Action"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Arnold Schwarzenegger",
      "Linda Hamilton"
    ],
    "director": "James Cameron",
    "tagline": "It's nothing personal.",
    "isTarget": true
  },
  {
    "id": 125,
    "title": "The Matrix",
    "year": 1999,
    "composers": [
      "Don Davis"
    ],
    "genres": [
      "Sci-Fi",
      "Action"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Keanu Reeves",
      "Laurence Fishburne"
    ],
    "director": "Lana & Lilly Wachowski",
    "tagline": "Welcome to the Real World.",
    "isTarget": true
  },
  {
    "id": 126,
    "title": "Toy Story",
    "year": 1995,
    "composers": [
      "Randy Newman"
    ],
    "genres": [
      "Animation",
      "Comedy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Tom Hanks",
      "Tim Allen"
    ],
    "director": "John Lasseter",
    "tagline": "To infinity and beyond!",
    "isTarget": true
  },
  {
    "id": 127,
    "title": "Monsters, Inc.",
    "year": 2001,
    "composers": [
      "Randy Newman"
    ],
    "genres": [
      "Animation",
      "Comedy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "John Goodman",
      "Billy Crystal"
    ],
    "director": "Pete Docter",
    "tagline": "We scare because we care.",
    "isTarget": true
  },
  {
    "id": 128,
    "title": "Marriage Story",
    "year": 2019,
    "composers": [
      "Randy Newman"
    ],
    "genres": [
      "Drama",
      "Romance"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Adam Driver",
      "Scarlett Johansson"
    ],
    "director": "Noah Baumbach",
    "tagline": "Where there's a love, there's a way.",
    "isTarget": true
  },
  {
    "id": 129,
    "title": "Beauty and the Beast",
    "year": 1991,
    "composers": [
      "Alan Menken"
    ],
    "genres": [
      "Animation",
      "Musical"
    ],
    "source": "Fairy Tale / Folklore",
    "actors": [
      "Paige O'Hara",
      "Robby Benson"
    ],
    "director": "Gary Trousdale & Kirk Wise",
    "tagline": "The most beautiful love story ever told.",
    "isTarget": true
  },
  {
    "id": 130,
    "title": "Aladdin",
    "year": 1992,
    "composers": [
      "Alan Menken"
    ],
    "genres": [
      "Animation",
      "Adventure"
    ],
    "source": "Fairy Tale / Folklore",
    "actors": [
      "Scott Weinger",
      "Robin Williams"
    ],
    "director": "Ron Clements & John Musker",
    "tagline": "Imagine if you had three wishes...",
    "isTarget": true
  },
  {
    "id": 131,
    "title": "The Little Mermaid",
    "year": 1989,
    "composers": [
      "Alan Menken"
    ],
    "genres": [
      "Animation",
      "Musical"
    ],
    "source": "Fairy Tale / Folklore",
    "actors": [
      "Jodi Benson",
      "Samuel E. Wright"
    ],
    "director": "Ron Clements & John Musker",
    "tagline": "Somewhere under the sea and beyond your imagination.",
    "isTarget": true
  },
  {
    "id": 132,
    "title": "Moonlight",
    "year": 2016,
    "composers": [
      "Nicholas Britell"
    ],
    "genres": [
      "Drama",
      "Romance"
    ],
    "source": "Stage Play / Musical",
    "actors": [
      "Trevante Rhodes",
      "Mahershala Ali"
    ],
    "director": "Barry Jenkins",
    "tagline": "This is the story of a lifetime.",
    "isTarget": true
  },
  {
    "id": 133,
    "title": "Cruella",
    "year": 2021,
    "composers": [
      "Nicholas Britell"
    ],
    "genres": [
      "Crime",
      "Comedy"
    ],
    "source": "Novel / Book",
    "actors": [
      "Emma Stone",
      "Emma Thompson"
    ],
    "director": "Craig Gillespie",
    "tagline": "Hello, Cruel World.",
    "isTarget": true
  },
  {
    "id": 134,
    "title": "Joker",
    "year": 2019,
    "composers": [
      "Hildur Guðnadóttir"
    ],
    "genres": [
      "Crime",
      "Drama"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Joaquin Phoenix",
      "Robert De Niro"
    ],
    "director": "Todd Phillips",
    "tagline": "Put on a happy face.",
    "isTarget": true
  },
  {
    "id": 135,
    "title": "Tár",
    "year": 2022,
    "composers": [
      "Hildur Guðnadóttir"
    ],
    "genres": [
      "Drama",
      "Musical"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Cate Blanchett",
      "Noémie Merlant"
    ],
    "director": "Todd Field",
    "tagline": "Time is the essential piece of interpretation.",
    "isTarget": true
  },
  {
    "id": 136,
    "title": "Arrival",
    "year": 2016,
    "composers": [
      "Jóhann Jóhannsson"
    ],
    "genres": [
      "Sci-Fi",
      "Drama"
    ],
    "source": "Short Story / Novella",
    "actors": [
      "Amy Adams",
      "Jeremy Renner"
    ],
    "director": "Denis Villeneuve",
    "tagline": "Why are they here?",
    "isTarget": true
  },
  {
    "id": 137,
    "title": "Sicario",
    "year": 2015,
    "composers": [
      "Jóhann Jóhannsson"
    ],
    "genres": [
      "Action",
      "Crime"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Emily Blunt",
      "Benicio del Toro"
    ],
    "director": "Denis Villeneuve",
    "tagline": "The border is just another line to cross.",
    "isTarget": true
  },
  {
    "id": 138,
    "title": "The Theory of Everything",
    "year": 2014,
    "composers": [
      "Jóhann Jóhannsson"
    ],
    "genres": [
      "Biography",
      "Romance"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Eddie Redmayne",
      "Felicity Jones"
    ],
    "director": "James Marsh",
    "tagline": "His mind Changed our world. Her love Changed his.",
    "isTarget": true
  },
  {
    "id": 139,
    "title": "Requiem for a Dream",
    "year": 2000,
    "composers": [
      "Clint Mansell"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Ellen Burstyn",
      "Jared Leto"
    ],
    "director": "Darren Aronofsky",
    "tagline": "What makes life worth living?",
    "isTarget": true
  },
  {
    "id": 140,
    "title": "Black Swan",
    "year": 2010,
    "composers": [
      "Clint Mansell"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Natalie Portman",
      "Mila Kunis"
    ],
    "director": "Darren Aronofsky",
    "tagline": "I want to be perfect.",
    "isTarget": true
  },
  {
    "id": 141,
    "title": "Pride & Prejudice",
    "year": 2005,
    "composers": [
      "Dario Marianelli"
    ],
    "genres": [
      "Romance",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Keira Knightley",
      "Matthew Macfadyen"
    ],
    "director": "Joe Wright",
    "tagline": "Sometimes the last person on earth you want to be with is the one person you can't be without.",
    "isTarget": true
  },
  {
    "id": 142,
    "title": "Atonement",
    "year": 2007,
    "composers": [
      "Dario Marianelli"
    ],
    "genres": [
      "Drama",
      "Romance"
    ],
    "source": "Novel / Book",
    "actors": [
      "James McAvoy",
      "Keira Knightley"
    ],
    "director": "Joe Wright",
    "tagline": "Torn apart by betrayal. Separated by war. Bound by love.",
    "isTarget": true
  },
  {
    "id": 143,
    "title": "V for Vendetta",
    "year": 2005,
    "composers": [
      "Dario Marianelli"
    ],
    "genres": [
      "Action",
      "Thriller"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Natalie Portman",
      "Hugo Weaving"
    ],
    "director": "James McTeigue",
    "tagline": "Remember, remember the 5th of November.",
    "isTarget": true
  },
  {
    "id": 144,
    "title": "Brokeback Mountain",
    "year": 2005,
    "composers": [
      "Gustavo Santaolalla"
    ],
    "genres": [
      "Romance",
      "Drama"
    ],
    "source": "Short Story / Novella",
    "actors": [
      "Heath Ledger",
      "Jake Gyllenhaal"
    ],
    "director": "Ang Lee",
    "tagline": "Love is a force of nature.",
    "isTarget": true
  },
  {
    "id": 145,
    "title": "Pulp Fiction",
    "year": 1994,
    "composers": [
      "Various Artists"
    ],
    "genres": [
      "Crime",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "John Travolta",
      "Samuel L. Jackson"
    ],
    "director": "Quentin Tarantino",
    "tagline": "You won't know the facts until you've seen the fiction.",
    "isTarget": true
  },
  {
    "id": 146,
    "title": "Reservoir Dogs",
    "year": 1992,
    "composers": [
      "Various Artists"
    ],
    "genres": [
      "Crime",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Harvey Keitel",
      "Tim Roth"
    ],
    "director": "Quentin Tarantino",
    "tagline": "Every dog has his day.",
    "isTarget": true
  },
  {
    "id": 147,
    "title": "Inglourious Basterds",
    "year": 2009,
    "composers": [
      "Various Artists"
    ],
    "genres": [
      "War",
      "Adventure"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Brad Pitt",
      "Christoph Waltz"
    ],
    "director": "Quentin Tarantino",
    "tagline": "Once upon a time in Nazi occupied France...",
    "isTarget": true
  },
  {
    "id": 148,
    "title": "Django Unchained",
    "year": 2012,
    "composers": [
      "Various Artists"
    ],
    "genres": [
      "Western",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Jamie Foxx",
      "Christoph Waltz"
    ],
    "director": "Quentin Tarantino",
    "tagline": "Life, liberty and the pursuit of vengeance.",
    "isTarget": true
  },
  {
    "id": 149,
    "title": "Goodfellas",
    "year": 1990,
    "composers": [
      "Various Artists"
    ],
    "genres": [
      "Crime",
      "Biography"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Ray Liotta",
      "Robert De Niro"
    ],
    "director": "Martin Scorsese",
    "tagline": "As far back as I can remember, I always wanted to be a gangster.",
    "isTarget": true
  },
  {
    "id": 150,
    "title": "The Wolf of Wall Street",
    "year": 2013,
    "composers": [
      "Various Artists"
    ],
    "genres": [
      "Biography",
      "Comedy"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Leonardo DiCaprio",
      "Jonah Hill"
    ],
    "director": "Martin Scorsese",
    "tagline": "Earn. Spend. Party.",
    "isTarget": true
  },
  {
    "id": 151,
    "title": "2001: A Space Odyssey",
    "year": 1968,
    "composers": [
      "Various Artists"
    ],
    "genres": [
      "Sci-Fi",
      "Adventure"
    ],
    "source": "Short Story / Novella",
    "actors": [
      "Keir Dullea",
      "Gary Lockwood"
    ],
    "director": "Stanley Kubrick",
    "tagline": "An epic drama of adventure and exploration.",
    "isTarget": true
  },
  {
    "id": 152,
    "title": "Fight Club",
    "year": 1999,
    "composers": [
      "The Dust Brothers"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Brad Pitt",
      "Edward Norton"
    ],
    "director": "David Fincher",
    "tagline": "Mischief. Mayhem. Soap.",
    "isTarget": true
  },
  {
    "id": 153,
    "title": "Parasite",
    "year": 2019,
    "composers": [
      "Jung Jae-il"
    ],
    "genres": [
      "Thriller",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Song Kang-ho",
      "Lee Sun-kyun"
    ],
    "director": "Bong Joon-ho",
    "tagline": "Act like you own the place.",
    "isTarget": true
  },
  {
    "id": 154,
    "title": "Mad Max: Fury Road",
    "year": 2015,
    "composers": [
      "Junkie XL"
    ],
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Tom Hardy",
      "Charlize Theron"
    ],
    "director": "George Miller",
    "tagline": "What a lovely day.",
    "isTarget": true
  },
  {
    "id": 155,
    "title": "Eternal Sunshine of the Spotless Mind",
    "year": 2004,
    "composers": [
      "Jon Brion"
    ],
    "genres": [
      "Romance",
      "Sci-Fi"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Jim Carrey",
      "Kate Winslet"
    ],
    "director": "Michel Gondry",
    "tagline": "You can erase someone from your mind. Getting them out of your heart is another story.",
    "isTarget": true
  },
  {
    "id": 156,
    "title": "Lady Bird",
    "year": 2017,
    "composers": [
      "Jon Brion"
    ],
    "genres": [
      "Comedy",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Saoirse Ronan",
      "Laurie Metcalf"
    ],
    "director": "Greta Gerwig",
    "tagline": "Fly away home.",
    "isTarget": true
  },
  {
    "id": 157,
    "title": "Everything Everywhere All at Once",
    "year": 2022,
    "composers": [
      "Son Lux"
    ],
    "genres": [
      "Sci-Fi",
      "Action"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Michelle Yeoh",
      "Ke Huy Quan"
    ],
    "director": "Daniel Kwan & Daniel Scheinert",
    "tagline": "The universe is so much bigger than you realize.",
    "isTarget": true
  },
  {
    "id": 158,
    "title": "Get Out",
    "year": 2017,
    "composers": [
      "Michael Abels"
    ],
    "genres": [
      "Horror",
      "Mystery"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Daniel Kaluuya",
      "Allison Williams"
    ],
    "director": "Jordan Peele",
    "tagline": "Just because you're invited, doesn't mean you're welcome.",
    "isTarget": true
  },
  {
    "id": 159,
    "title": "Nope",
    "year": 2022,
    "composers": [
      "Michael Abels"
    ],
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Daniel Kaluuya",
      "Keke Palmer"
    ],
    "director": "Jordan Peele",
    "tagline": "What's a bad miracle?",
    "isTarget": true
  },
  {
    "id": 160,
    "title": "Poor Things",
    "year": 2023,
    "composers": [
      "Jerskin Fendrix"
    ],
    "genres": [
      "Comedy",
      "Sci-Fi"
    ],
    "source": "Novel / Book",
    "actors": [
      "Emma Stone",
      "Mark Ruffalo"
    ],
    "director": "Yorgos Lanthimos",
    "tagline": "She's like nothing you've ever seen.",
    "isTarget": true
  },
  {
    "id": 161,
    "title": "Spider-Man: Into the Spider-Verse",
    "year": 2018,
    "composers": [
      "Daniel Pemberton"
    ],
    "genres": [
      "Animation",
      "Action"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Shameik Moore",
      "Jake Johnson"
    ],
    "director": "Bob Persichetti, Peter Ramsey & Rodney Rothman",
    "tagline": "More than one wears the mask.",
    "isTarget": true
  },
  {
    "id": 162,
    "title": "Knives Out",
    "year": 2019,
    "composers": [
      "Nathan Johnson"
    ],
    "genres": [
      "Mystery",
      "Comedy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Daniel Craig",
      "Ana de Armas"
    ],
    "director": "Rian Johnson",
    "tagline": "Everyone has a motive. No one has a clue.",
    "isTarget": true
  },
  {
    "id": 163,
    "title": "Casablanca",
    "year": 1942,
    "composers": [
      "Max Steiner"
    ],
    "genres": [
      "Romance",
      "War"
    ],
    "source": "Stage Play / Musical",
    "actors": [
      "Humphrey Bogart",
      "Ingrid Bergman"
    ],
    "director": "Michael Curtiz",
    "tagline": "Here's looking at you, kid.",
    "isTarget": true
  },
  {
    "id": 164,
    "title": "The Sound of Music",
    "year": 1965,
    "composers": [
      "Richard Rodgers"
    ],
    "genres": [
      "Musical",
      "Family"
    ],
    "source": "Stage Play / Musical",
    "actors": [
      "Julie Andrews",
      "Christopher Plummer"
    ],
    "director": "Robert Wise",
    "tagline": "The happiest sound in all the world!",
    "isTarget": true
  },
  {
    "id": 165,
    "title": "Chicago",
    "year": 2002,
    "composers": [
      "John Kander",
      "Danny Elfman"
    ],
    "genres": [
      "Musical",
      "Crime"
    ],
    "source": "Stage Play / Musical",
    "actors": [
      "Renée Zellweger",
      "Catherine Zeta-Jones"
    ],
    "director": "Rob Marshall",
    "tagline": "If you can't be famous, be infamous.",
    "isTarget": true
  },
  {
    "id": 166,
    "title": "Man of Steel",
    "year": 2013,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Henry Cavill",
      "Amy Adams"
    ],
    "director": "Zack Snyder",
    "tagline": "You will believe a man can fly.",
    "isTarget": true
  },
  {
    "id": 167,
    "title": "Batman v Superman: Dawn of Justice",
    "year": 2016,
    "composers": [
      "Hans Zimmer",
      "Junkie XL"
    ],
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Ben Affleck",
      "Henry Cavill"
    ],
    "director": "Zack Snyder",
    "tagline": "Who will win?",
    "isTarget": true
  },
  {
    "id": 168,
    "title": "Wonder Woman 1984",
    "year": 2020,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Action",
      "Fantasy"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Gal Gadot",
      "Chris Pine"
    ],
    "director": "Patty Jenkins",
    "tagline": "A new era of wonder begins.",
    "isTarget": true
  },
  {
    "id": 169,
    "title": "No Time to Die",
    "year": 2021,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Action",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Daniel Craig",
      "Rami Malek"
    ],
    "director": "Cary Joji Fukunaga",
    "tagline": "The mission that changes everything begins.",
    "isTarget": true
  },
  {
    "id": 170,
    "title": "Top Gun: Maverick",
    "year": 2022,
    "composers": [
      "Hans Zimmer",
      "Harold Faltermeyer"
    ],
    "genres": [
      "Action",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Tom Cruise",
      "Miles Teller"
    ],
    "director": "Joseph Kosinski",
    "tagline": "Feel the need... The need for speed.",
    "isTarget": true
  },
  {
    "id": 171,
    "title": "12 Years a Slave",
    "year": 2013,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Biography",
      "History"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Chiwetel Ejiofor",
      "Michael Fassbender"
    ],
    "director": "Steve McQueen",
    "tagline": "The extraordinary true story of Solomon Northup.",
    "isTarget": true
  },
  {
    "id": 172,
    "title": "Rush",
    "year": 2013,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Biography",
      "Action"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Chris Hemsworth",
      "Daniel Brühl"
    ],
    "director": "Ron Howard",
    "tagline": "Everyone's driven by something.",
    "isTarget": true
  },
  {
    "id": 173,
    "title": "The Da Vinci Code",
    "year": 2006,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Tom Hanks",
      "Audrey Tautou"
    ],
    "director": "Ron Howard",
    "tagline": "Seek the truth.",
    "isTarget": true
  },
  {
    "id": 174,
    "title": "Angels & Demons",
    "year": 2009,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Tom Hanks",
      "Ewan McGregor"
    ],
    "director": "Ron Howard",
    "tagline": "The holiest event in human history is about to become the most dangerous.",
    "isTarget": true
  },
  {
    "id": 175,
    "title": "The Last Samurai",
    "year": 2003,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Action",
      "History"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Tom Cruise",
      "Ken Watanabe"
    ],
    "director": "Edward Zwick",
    "tagline": "In the face of an enemy, in the heart of one man, lies the soul of a warrior.",
    "isTarget": true
  },
  {
    "id": 176,
    "title": "Black Hawk Down",
    "year": 2001,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "War",
      "History"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Josh Hartnett",
      "Ewan McGregor"
    ],
    "director": "Ridley Scott",
    "tagline": "Leave no man behind.",
    "isTarget": true
  },
  {
    "id": 177,
    "title": "Hannibal",
    "year": 2001,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Thriller",
      "Crime"
    ],
    "source": "Novel / Book",
    "actors": [
      "Anthony Hopkins",
      "Julianne Moore"
    ],
    "director": "Ridley Scott",
    "tagline": "Break the silence.",
    "isTarget": true
  },
  {
    "id": 178,
    "title": "Thelma & Louise",
    "year": 1991,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Crime",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Susan Sarandon",
      "Geena Davis"
    ],
    "director": "Ridley Scott",
    "tagline": "Somebody said get a life... so they did.",
    "isTarget": true
  },
  {
    "id": 179,
    "title": "Matchstick Men",
    "year": 2003,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Crime",
      "Comedy"
    ],
    "source": "Novel / Book",
    "actors": [
      "Nicolas Cage",
      "Sam Rockwell"
    ],
    "director": "Ridley Scott",
    "tagline": "Con. Artist.",
    "isTarget": true
  },
  {
    "id": 180,
    "title": "True Romance",
    "year": 1993,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Crime",
      "Romance"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Christian Slater",
      "Patricia Arquette"
    ],
    "director": "Tony Scott",
    "tagline": "Stealing, cheating, killing. Who said romance is dead?",
    "isTarget": true
  },
  {
    "id": 181,
    "title": "Crimson Tide",
    "year": 1995,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Thriller",
      "War"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Denzel Washington",
      "Gene Hackman"
    ],
    "director": "Tony Scott",
    "tagline": "In theampung depths of the Pacific, two men hold the fate of the world.",
    "isTarget": true
  },
  {
    "id": 182,
    "title": "The Rock",
    "year": 1996,
    "composers": [
      "Hans Zimmer",
      "Nick Glennie-Smith"
    ],
    "genres": [
      "Action",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Sean Connery",
      "Nicolas Cage"
    ],
    "director": "Michael Bay",
    "tagline": "Alcatraz. Only one man has ever broken out. Now five million lives depend on two men breaking in.",
    "isTarget": true
  },
  {
    "id": 183,
    "title": "Pearl Harbor",
    "year": 2001,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "War",
      "Romance"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Ben Affleck",
      "Josh Hartnett"
    ],
    "director": "Michael Bay",
    "tagline": "December 7, 1941 — A day that shall live in infamy.",
    "isTarget": true
  },
  {
    "id": 184,
    "title": "The Thin Red Line",
    "year": 1998,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "War",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Sean Penn",
      "Jim Caviezel"
    ],
    "director": "Terrence Malick",
    "tagline": "Every man fights his own war.",
    "isTarget": true
  },
  {
    "id": 185,
    "title": "As Good as It Gets",
    "year": 1997,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Comedy",
      "Romance"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Jack Nicholson",
      "Helen Hunt"
    ],
    "director": "James L. Brooks",
    "tagline": "A comedy from the heart that goes for the throat.",
    "isTarget": true
  },
  {
    "id": 186,
    "title": "Driving Miss Daisy",
    "year": 1989,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Drama",
      "Comedy"
    ],
    "source": "Stage Play / Musical",
    "actors": [
      "Morgan Freeman",
      "Jessica Tandy"
    ],
    "director": "Bruce Beresford",
    "tagline": "The story of a great friendship.",
    "isTarget": true
  },
  {
    "id": 187,
    "title": "A League of Their Own",
    "year": 1992,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Comedy",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Tom Hanks",
      "Geena Davis"
    ],
    "director": "Penny Marshall",
    "tagline": "There's no crying in baseball!",
    "isTarget": true
  },
  {
    "id": 188,
    "title": "Kung Fu Panda",
    "year": 2008,
    "composers": [
      "Hans Zimmer",
      "John Powell"
    ],
    "genres": [
      "Animation",
      "Action"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Jack Black",
      "Dustin Hoffman"
    ],
    "director": "Mark Osborne & John Stevenson",
    "tagline": "Prepare for awesomeness.",
    "isTarget": true
  },
  {
    "id": 189,
    "title": "Madagascar",
    "year": 2005,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Animation",
      "Comedy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Ben Stiller",
      "Chris Rock"
    ],
    "director": "Eric Darnell & Tom McGrath",
    "tagline": "Someone's got a zoo loose.",
    "isTarget": true
  },
  {
    "id": 190,
    "title": "Rango",
    "year": 2011,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Animation",
      "Western"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Johnny Depp",
      "Isla Fisher"
    ],
    "director": "Gore Verbinski",
    "tagline": "Heroes come in all different shades.",
    "isTarget": true
  },
  {
    "id": 191,
    "title": "The Ring",
    "year": 2002,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Horror",
      "Mystery"
    ],
    "source": "Remake / Reboot",
    "actors": [
      "Naomi Watts",
      "Martin Henderson"
    ],
    "director": "Gore Verbinski",
    "tagline": "Before you die, you see the ring.",
    "isTarget": true
  },
  {
    "id": 192,
    "title": "Pirates of the Caribbean: Dead Man's Chest",
    "year": 2006,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Adventure",
      "Fantasy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Johnny Depp",
      "Orlando Bloom"
    ],
    "director": "Gore Verbinski",
    "tagline": "Captain Jack is back.",
    "isTarget": true
  },
  {
    "id": 193,
    "title": "Pirates of the Caribbean: At World's End",
    "year": 2007,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Adventure",
      "Fantasy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Johnny Depp",
      "Keira Knightley"
    ],
    "director": "Gore Verbinski",
    "tagline": "At the end of the world, the adventure begins.",
    "isTarget": true
  },
  {
    "id": 194,
    "title": "Sherlock Holmes: A Game of Shadows",
    "year": 2011,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Action",
      "Mystery"
    ],
    "source": "Novel / Book",
    "actors": [
      "Robert Downey Jr.",
      "Jude Law"
    ],
    "director": "Guy Ritchie",
    "tagline": "The game is afoot.",
    "isTarget": true
  },
  {
    "id": 195,
    "title": "Hidden Figures",
    "year": 2016,
    "composers": [
      "Hans Zimmer",
      "Pharrell Williams"
    ],
    "genres": [
      "Biography",
      "History"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Taraji P. Henson",
      "Octavia Spencer"
    ],
    "director": "Theodore Melfi",
    "tagline": "Genius has no race. Strength has no gender.",
    "isTarget": true
  },
  {
    "id": 196,
    "title": "Widows",
    "year": 2018,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Crime",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Viola Davis",
      "Michelle Rodriguez"
    ],
    "director": "Steve McQueen",
    "tagline": "They have nothing in common except a debt left behind.",
    "isTarget": true
  },
  {
    "id": 197,
    "title": "The Prince of Egypt",
    "year": 1998,
    "composers": [
      "Hans Zimmer"
    ],
    "genres": [
      "Animation",
      "Musical"
    ],
    "source": "Fairy Tale / Folklore",
    "actors": [
      "Val Kilmer",
      "Ralph Fiennes"
    ],
    "director": "Brenda Chapman & Simon Wells",
    "tagline": "The motion picture event of a lifetime.",
    "isTarget": true
  },
  {
    "id": 198,
    "title": "Star Wars: Episode VI - Return of the Jedi",
    "year": 1983,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "Sci-Fi",
      "Adventure"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Mark Hamill",
      "Harrison Ford"
    ],
    "director": "Richard Marquand",
    "tagline": "The Empire falls...",
    "isTarget": true
  },
  {
    "id": 199,
    "title": "Star Wars: Episode I - The Phantom Menace",
    "year": 1999,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "Sci-Fi",
      "Adventure"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Liam Neeson",
      "Ewan McGregor"
    ],
    "director": "George Lucas",
    "tagline": "Every generation has a legend.",
    "isTarget": true
  },
  {
    "id": 200,
    "title": "Star Wars: Episode III - Revenge of the Sith",
    "year": 2005,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "Sci-Fi",
      "Action"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Ewan McGregor",
      "Hayden Christensen"
    ],
    "director": "George Lucas",
    "tagline": "The saga is complete.",
    "isTarget": true
  },
  {
    "id": 201,
    "title": "Star Wars: The Force Awakens",
    "year": 2015,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "Sci-Fi",
      "Adventure"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Daisy Ridley",
      "John Boyega"
    ],
    "director": "J.J. Abrams",
    "tagline": "Every generation has a story.",
    "isTarget": true
  },
  {
    "id": 202,
    "title": "Indiana Jones and the Temple of Doom",
    "year": 1984,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "Action",
      "Adventure"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Harrison Ford",
      "Kate Capshaw"
    ],
    "director": "Steven Spielberg",
    "tagline": "If adventure has a name... it must be Indiana Jones.",
    "isTarget": true
  },
  {
    "id": 203,
    "title": "Hook",
    "year": 1991,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "Adventure",
      "Fantasy"
    ],
    "source": "Stage Play / Musical",
    "actors": [
      "Robin Williams",
      "Dustin Hoffman"
    ],
    "director": "Steven Spielberg",
    "tagline": "What if Peter Pan grew up?",
    "isTarget": true
  },
  {
    "id": 204,
    "title": "A.I. Artificial Intelligence",
    "year": 2001,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "Sci-Fi",
      "Drama"
    ],
    "source": "Short Story / Novella",
    "actors": [
      "Haley Joel Osment",
      "Jude Law"
    ],
    "director": "Steven Spielberg",
    "tagline": "His love is real. But he is not.",
    "isTarget": true
  },
  {
    "id": 205,
    "title": "Minority Report",
    "year": 2002,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "Sci-Fi",
      "Action"
    ],
    "source": "Short Story / Novella",
    "actors": [
      "Tom Cruise",
      "Colin Farrell"
    ],
    "director": "Steven Spielberg",
    "tagline": "Everybody runs.",
    "isTarget": true
  },
  {
    "id": 206,
    "title": "The Terminal",
    "year": 2004,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "Comedy",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Tom Hanks",
      "Catherine Zeta-Jones"
    ],
    "director": "Steven Spielberg",
    "tagline": "Life is waiting.",
    "isTarget": true
  },
  {
    "id": 207,
    "title": "Munich",
    "year": 2005,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "History",
      "Thriller"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Eric Bana",
      "Daniel Craig"
    ],
    "director": "Steven Spielberg",
    "tagline": "The world was watching in 1972.",
    "isTarget": true
  },
  {
    "id": 208,
    "title": "War of the Worlds",
    "year": 2005,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "Sci-Fi",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Tom Cruise",
      "Dakota Fanning"
    ],
    "director": "Steven Spielberg",
    "tagline": "They're already here.",
    "isTarget": true
  },
  {
    "id": 209,
    "title": "Lincoln",
    "year": 2012,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "Biography",
      "History"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Daniel Day-Lewis",
      "Sally Field"
    ],
    "director": "Steven Spielberg",
    "tagline": "With malice toward none; with charity for all.",
    "isTarget": true
  },
  {
    "id": 210,
    "title": "The Post",
    "year": 2017,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "Biography",
      "History"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Meryl Streep",
      "Tom Hanks"
    ],
    "director": "Steven Spielberg",
    "tagline": "Truth be told.",
    "isTarget": true
  },
  {
    "id": 211,
    "title": "The Fabelmans",
    "year": 2022,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "Drama",
      "Biography"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Michelle Williams",
      "Paul Dano"
    ],
    "director": "Steven Spielberg",
    "tagline": "Capture every moment.",
    "isTarget": true
  },
  {
    "id": 212,
    "title": "Home Alone 2: Lost in New York",
    "year": 1992,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "Comedy",
      "Family"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Macaulay Culkin",
      "Joe Pesci"
    ],
    "director": "Chris Columbus",
    "tagline": "He's up past his bedtime in the city that never sleeps.",
    "isTarget": true
  },
  {
    "id": 213,
    "title": "Harry Potter and the Chamber of Secrets",
    "year": 2002,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "Fantasy",
      "Adventure"
    ],
    "source": "Novel / Book",
    "actors": [
      "Daniel Radcliffe",
      "Emma Watson"
    ],
    "director": "Chris Columbus",
    "tagline": "Something evil has returned to Hogwarts!",
    "isTarget": true
  },
  {
    "id": 214,
    "title": "JFK",
    "year": 1991,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "History",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Kevin Costner",
      "Gary Oldman"
    ],
    "director": "Oliver Stone",
    "tagline": "The story that won't go away.",
    "isTarget": true
  },
  {
    "id": 215,
    "title": "Born on the Fourth of July",
    "year": 1989,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "Biography",
      "War"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Tom Cruise",
      "Willem Dafoe"
    ],
    "director": "Oliver Stone",
    "tagline": "A story of innocence lost and courage found.",
    "isTarget": true
  },
  {
    "id": 216,
    "title": "Memoirs of a Geisha",
    "year": 2005,
    "composers": [
      "John Williams"
    ],
    "genres": [
      "Drama",
      "Romance"
    ],
    "source": "Novel / Book",
    "actors": [
      "Zhang Ziyi",
      "Ken Watanabe"
    ],
    "director": "Rob Marshall",
    "tagline": "My world is as forbidden as it is fragile.",
    "isTarget": true
  },
  {
    "id": 217,
    "title": "Avatar: The Way of Water",
    "year": 2022,
    "composers": [
      "Simon Franglen"
    ],
    "genres": [
      "Sci-Fi",
      "Adventure"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Sam Worthington",
      "Zoe Saldana"
    ],
    "director": "James Cameron",
    "tagline": "Return to Pandora.",
    "isTarget": true
  },
  {
    "id": 218,
    "title": "The Amazing Spider-Man",
    "year": 2012,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Action",
      "Adventure"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Andrew Garfield",
      "Emma Stone"
    ],
    "director": "Marc Webb",
    "tagline": "The untold story begins.",
    "isTarget": true
  },
  {
    "id": 219,
    "title": "Troy",
    "year": 2004,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Action",
      "History"
    ],
    "source": "Fairy Tale / Folklore",
    "actors": [
      "Brad Pitt",
      "Eric Bana"
    ],
    "director": "Wolfgang Petersen",
    "tagline": "For passion. For honor. For destiny.",
    "isTarget": true
  },
  {
    "id": 220,
    "title": "The Perfect Storm",
    "year": 2000,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Adventure",
      "Drama"
    ],
    "source": "True Story / Biography",
    "actors": [
      "George Clooney",
      "Mark Wahlberg"
    ],
    "director": "Wolfgang Petersen",
    "tagline": "Dispatches from the edge of the world.",
    "isTarget": true
  },
  {
    "id": 221,
    "title": "Jumanji",
    "year": 1995,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Adventure",
      "Fantasy"
    ],
    "source": "Novel / Book",
    "actors": [
      "Robin Williams",
      "Kirsten Dunst"
    ],
    "director": "Joe Johnston",
    "tagline": "Roll the dice and unleash the excitement!",
    "isTarget": true
  },
  {
    "id": 222,
    "title": "Field of Dreams",
    "year": 1989,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Drama",
      "Fantasy"
    ],
    "source": "Novel / Book",
    "actors": [
      "Kevin Costner",
      "James Earl Jones"
    ],
    "director": "Phil Alden Robinson",
    "tagline": "If you build it, he will come.",
    "isTarget": true
  },
  {
    "id": 223,
    "title": "Glory",
    "year": 1989,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "War",
      "History"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Matthew Broderick",
      "Denzel Washington"
    ],
    "director": "Edward Zwick",
    "tagline": "Their innocence. Their heritage. Their lives.",
    "isTarget": true
  },
  {
    "id": 224,
    "title": "Legends of the Fall",
    "year": 1994,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Drama",
      "Romance"
    ],
    "source": "Short Story / Novella",
    "actors": [
      "Brad Pitt",
      "Anthony Hopkins"
    ],
    "director": "Edward Zwick",
    "tagline": "After the fall from innocence the legend begins.",
    "isTarget": true
  },
  {
    "id": 225,
    "title": "Star Trek II: The Wrath of Khan",
    "year": 1982,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Sci-Fi",
      "Action"
    ],
    "source": "Original Screenplay",
    "actors": [
      "William Shatner",
      "Leonard Nimoy"
    ],
    "director": "Nicholas Meyer",
    "tagline": "At the end of the universe lies the beginning of vengeance.",
    "isTarget": true
  },
  {
    "id": 226,
    "title": "Back to the Future Part II",
    "year": 1989,
    "composers": [
      "Alan Silvestri"
    ],
    "genres": [
      "Sci-Fi",
      "Adventure"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Michael J. Fox",
      "Christopher Lloyd"
    ],
    "director": "Robert Zemeckis",
    "tagline": "Getting back was only the beginning.",
    "isTarget": true
  },
  {
    "id": 227,
    "title": "Back to the Future Part III",
    "year": 1990,
    "composers": [
      "Alan Silvestri"
    ],
    "genres": [
      "Sci-Fi",
      "Western"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Michael J. Fox",
      "Christopher Lloyd"
    ],
    "director": "Robert Zemeckis",
    "tagline": "They've saved the best trip for last.",
    "isTarget": true
  },
  {
    "id": 228,
    "title": "Who Framed Roger Rabbit",
    "year": 1988,
    "composers": [
      "Alan Silvestri"
    ],
    "genres": [
      "Animation",
      "Comedy"
    ],
    "source": "Novel / Book",
    "actors": [
      "Bob Hoskins",
      "Christopher Lloyd"
    ],
    "director": "Robert Zemeckis",
    "tagline": "It's the story of a man, a woman, and a rabbit in a triangle of trouble.",
    "isTarget": true
  },
  {
    "id": 229,
    "title": "Contact",
    "year": 1997,
    "composers": [
      "Alan Silvestri"
    ],
    "genres": [
      "Sci-Fi",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Jodie Foster",
      "Matthew McConaughey"
    ],
    "director": "Robert Zemeckis",
    "tagline": "If it's just us, it seems like an awful waste of space.",
    "isTarget": true
  },
  {
    "id": 230,
    "title": "The Polar Express",
    "year": 2004,
    "composers": [
      "Alan Silvestri"
    ],
    "genres": [
      "Animation",
      "Family"
    ],
    "source": "Novel / Book",
    "actors": [
      "Tom Hanks",
      "Eddie Deezen"
    ],
    "director": "Robert Zemeckis",
    "tagline": "Seeing is believing.",
    "isTarget": true
  },
  {
    "id": 231,
    "title": "Captain America: The First Avenger",
    "year": 2011,
    "composers": [
      "Alan Silvestri"
    ],
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Chris Evans",
      "Hugo Weaving"
    ],
    "director": "Joe Johnston",
    "tagline": "When patriots become heroes.",
    "isTarget": true
  },
  {
    "id": 232,
    "title": "Avengers: Infinity War",
    "year": 2018,
    "composers": [
      "Alan Silvestri"
    ],
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Robert Downey Jr.",
      "Chris Hemsworth"
    ],
    "director": "Anthony & Joe Russo",
    "tagline": "An entire universe. Once and for all.",
    "isTarget": true
  },
  {
    "id": 233,
    "title": "Ready Player One",
    "year": 2018,
    "composers": [
      "Alan Silvestri"
    ],
    "genres": [
      "Sci-Fi",
      "Adventure"
    ],
    "source": "Novel / Book",
    "actors": [
      "Tye Sheridan",
      "Olivia Cooke"
    ],
    "director": "Steven Spielberg",
    "tagline": "A better reality awaits.",
    "isTarget": true
  },
  {
    "id": 234,
    "title": "The Bodyguard",
    "year": 1992,
    "composers": [
      "Alan Silvestri"
    ],
    "genres": [
      "Romance",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Kevin Costner",
      "Whitney Houston"
    ],
    "director": "Mick Jackson",
    "tagline": "Never let her out of your sight.",
    "isTarget": true
  },
  {
    "id": 235,
    "title": "Night at the Museum",
    "year": 2006,
    "composers": [
      "Alan Silvestri"
    ],
    "genres": [
      "Comedy",
      "Family"
    ],
    "source": "Novel / Book",
    "actors": [
      "Ben Stiller",
      "Robin Williams"
    ],
    "director": "Shawn Levy",
    "tagline": "Where history comes to life.",
    "isTarget": true
  },
  {
    "id": 236,
    "title": "Scent of a Woman",
    "year": 1992,
    "composers": [
      "Thomas Newman"
    ],
    "genres": [
      "Drama",
      "Comedy"
    ],
    "source": "Remake / Reboot",
    "actors": [
      "Al Pacino",
      "Chris O'Donnell"
    ],
    "director": "Martin Brest",
    "tagline": "Col. Frank Slade has a very special plan for the weekend.",
    "isTarget": true
  },
  {
    "id": 237,
    "title": "Erin Brockovich",
    "year": 2000,
    "composers": [
      "Thomas Newman"
    ],
    "genres": [
      "Biography",
      "Drama"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Julia Roberts",
      "Albert Finney"
    ],
    "director": "Steven Soderbergh",
    "tagline": "She brought a small town to its feet and a huge corporation to its knees.",
    "isTarget": true
  },
  {
    "id": 238,
    "title": "Road to Perdition",
    "year": 2002,
    "composers": [
      "Thomas Newman"
    ],
    "genres": [
      "Crime",
      "Drama"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Tom Hanks",
      "Paul Newman"
    ],
    "director": "Sam Mendes",
    "tagline": "Pray for Michael Sullivan.",
    "isTarget": true
  },
  {
    "id": 239,
    "title": "Bridge of Spies",
    "year": 2015,
    "composers": [
      "Thomas Newman"
    ],
    "genres": [
      "History",
      "Thriller"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Tom Hanks",
      "Mark Rylance"
    ],
    "director": "Steven Spielberg",
    "tagline": "In the shadow of war, one man showed the world what we stand for.",
    "isTarget": true
  },
  {
    "id": 240,
    "title": "Finding Dory",
    "year": 2016,
    "composers": [
      "Thomas Newman"
    ],
    "genres": [
      "Animation",
      "Adventure"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Ellen DeGeneres",
      "Albert Brooks"
    ],
    "director": "Andrew Stanton",
    "tagline": "An unforgettable journey she probably won't remember.",
    "isTarget": true
  },
  {
    "id": 241,
    "title": "Spectre",
    "year": 2015,
    "composers": [
      "Thomas Newman"
    ],
    "genres": [
      "Action",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Daniel Craig",
      "Christoph Waltz"
    ],
    "director": "Sam Mendes",
    "tagline": "A cryptic message from Bond's past.",
    "isTarget": true
  },
  {
    "id": 242,
    "title": "Passengers",
    "year": 2016,
    "composers": [
      "Thomas Newman"
    ],
    "genres": [
      "Sci-Fi",
      "Romance"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Jennifer Lawrence",
      "Chris Pratt"
    ],
    "director": "Morten Tyldum",
    "tagline": "There is a reason they woke up.",
    "isTarget": true
  },
  {
    "id": 243,
    "title": "The Sixth Sense",
    "year": 1999,
    "composers": [
      "James Newton Howard"
    ],
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Bruce Willis",
      "Haley Joel Osment"
    ],
    "director": "M. Night Shyamalan",
    "tagline": "I see dead people.",
    "isTarget": true
  },
  {
    "id": 244,
    "title": "Unbreakable",
    "year": 2000,
    "composers": [
      "James Newton Howard"
    ],
    "genres": [
      "Thriller",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Bruce Willis",
      "Samuel L. Jackson"
    ],
    "director": "M. Night Shyamalan",
    "tagline": "Believing is seeing.",
    "isTarget": true
  },
  {
    "id": 245,
    "title": "Signs",
    "year": 2002,
    "composers": [
      "James Newton Howard"
    ],
    "genres": [
      "Sci-Fi",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Mel Gibson",
      "Joaquin Phoenix"
    ],
    "director": "M. Night Shyamalan",
    "tagline": "It's not like they didn't warn us.",
    "isTarget": true
  },
  {
    "id": 246,
    "title": "The Fugitive",
    "year": 1993,
    "composers": [
      "James Newton Howard"
    ],
    "genres": [
      "Action",
      "Thriller"
    ],
    "source": "Remake / Reboot",
    "actors": [
      "Harrison Ford",
      "Tommy Lee Jones"
    ],
    "director": "Andrew Davis",
    "tagline": "A murdered wife. A one-armed man. An obsessed detective.",
    "isTarget": true
  },
  {
    "id": 247,
    "title": "Pretty Woman",
    "year": 1990,
    "composers": [
      "James Newton Howard"
    ],
    "genres": [
      "Romance",
      "Comedy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Richard Gere",
      "Julia Roberts"
    ],
    "director": "Garry Marshall",
    "tagline": "She walked off the street, into his life and stole his heart.",
    "isTarget": true
  },
  {
    "id": 248,
    "title": "King Kong",
    "year": 2005,
    "composers": [
      "James Newton Howard"
    ],
    "genres": [
      "Adventure",
      "Action"
    ],
    "source": "Remake / Reboot",
    "actors": [
      "Naomi Watts",
      "Jack Black"
    ],
    "director": "Peter Jackson",
    "tagline": "The eighth wonder of the world.",
    "isTarget": true
  },
  {
    "id": 249,
    "title": "Blood Diamond",
    "year": 2006,
    "composers": [
      "James Newton Howard"
    ],
    "genres": [
      "Adventure",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Leonardo DiCaprio",
      "Djimon Hounsou"
    ],
    "director": "Edward Zwick",
    "tagline": "It will cost you everything.",
    "isTarget": true
  },
  {
    "id": 250,
    "title": "Michael Clayton",
    "year": 2007,
    "composers": [
      "James Newton Howard"
    ],
    "genres": [
      "Thriller",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "George Clooney",
      "Tilda Swinton"
    ],
    "director": "Tony Gilroy",
    "tagline": "The truth can be adjusted.",
    "isTarget": true
  },
  {
    "id": 251,
    "title": "I Am Legend",
    "year": 2007,
    "composers": [
      "James Newton Howard"
    ],
    "genres": [
      "Sci-Fi",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Will Smith",
      "Alice Braga"
    ],
    "director": "Francis Lawrence",
    "tagline": "The last man on Earth is not alone.",
    "isTarget": true
  },
  {
    "id": 252,
    "title": "The Hunger Games",
    "year": 2012,
    "composers": [
      "James Newton Howard"
    ],
    "genres": [
      "Sci-Fi",
      "Action"
    ],
    "source": "Novel / Book",
    "actors": [
      "Jennifer Lawrence",
      "Josh Hutcherson"
    ],
    "director": "Gary Ross",
    "tagline": "May the odds be ever in your favor.",
    "isTarget": true
  },
  {
    "id": 253,
    "title": "Nightcrawler",
    "year": 2014,
    "composers": [
      "James Newton Howard"
    ],
    "genres": [
      "Crime",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Jake Gyllenhaal",
      "Rene Russo"
    ],
    "director": "Dan Gilroy",
    "tagline": "The city shines brightest at night.",
    "isTarget": true
  },
  {
    "id": 254,
    "title": "The Fly",
    "year": 1986,
    "composers": [
      "Howard Shore"
    ],
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "source": "Short Story / Novella",
    "actors": [
      "Jeff Goldblum",
      "Geena Davis"
    ],
    "director": "David Cronenberg",
    "tagline": "Be afraid. Be very afraid.",
    "isTarget": true
  },
  {
    "id": 255,
    "title": "Big",
    "year": 1988,
    "composers": [
      "Howard Shore"
    ],
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Tom Hanks",
      "Elizabeth Perkins"
    ],
    "director": "Penny Marshall",
    "tagline": "Have you ever had a really big secret?",
    "isTarget": true
  },
  {
    "id": 256,
    "title": "Mrs. Doubtfire",
    "year": 1993,
    "composers": [
      "Howard Shore"
    ],
    "genres": [
      "Comedy",
      "Family"
    ],
    "source": "Novel / Book",
    "actors": [
      "Robin Williams",
      "Sally Field"
    ],
    "director": "Chris Columbus",
    "tagline": "She makes dinner. She does windows. She reads bedtime stories.",
    "isTarget": true
  },
  {
    "id": 257,
    "title": "Philadelphia",
    "year": 1993,
    "composers": [
      "Howard Shore"
    ],
    "genres": [
      "Drama",
      "Biography"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Tom Hanks",
      "Denzel Washington"
    ],
    "director": "Jonathan Demme",
    "tagline": "No one would take on his case... until one man was willing to take on the system.",
    "isTarget": true
  },
  {
    "id": 258,
    "title": "Ed Wood",
    "year": 1994,
    "composers": [
      "Howard Shore"
    ],
    "genres": [
      "Biography",
      "Comedy"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Johnny Depp",
      "Martin Landau"
    ],
    "director": "Tim Burton",
    "tagline": "When it came to making bad movies, Ed Wood was the best.",
    "isTarget": true
  },
  {
    "id": 259,
    "title": "The Game",
    "year": 1997,
    "composers": [
      "Howard Shore"
    ],
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Michael Douglas",
      "Sean Penn"
    ],
    "director": "David Fincher",
    "tagline": "There are no rules.",
    "isTarget": true
  },
  {
    "id": 260,
    "title": "Panic Room",
    "year": 2002,
    "composers": [
      "Howard Shore"
    ],
    "genres": [
      "Thriller",
      "Crime"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Jodie Foster",
      "Forest Whitaker"
    ],
    "director": "David Fincher",
    "tagline": "It was supposed to be the safest room in the house.",
    "isTarget": true
  },
  {
    "id": 261,
    "title": "Gangs of New York",
    "year": 2002,
    "composers": [
      "Howard Shore"
    ],
    "genres": [
      "Crime",
      "History"
    ],
    "source": "Novel / Book",
    "actors": [
      "Leonardo DiCaprio",
      "Daniel Day-Lewis"
    ],
    "director": "Martin Scorsese",
    "tagline": "America was born in the streets.",
    "isTarget": true
  },
  {
    "id": 262,
    "title": "The Aviator",
    "year": 2004,
    "composers": [
      "Howard Shore"
    ],
    "genres": [
      "Biography",
      "Drama"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Leonardo DiCaprio",
      "Cate Blanchett"
    ],
    "director": "Martin Scorsese",
    "tagline": "Some men dream the future. He built it.",
    "isTarget": true
  },
  {
    "id": 263,
    "title": "Hugo",
    "year": 2011,
    "composers": [
      "Howard Shore"
    ],
    "genres": [
      "Adventure",
      "Family"
    ],
    "source": "Novel / Book",
    "actors": [
      "Asa Butterfield",
      "Chloë Grace Moretz"
    ],
    "director": "Martin Scorsese",
    "tagline": "One of the most legendary directors of our time takes you on an extraordinary adventure.",
    "isTarget": true
  },
  {
    "id": 264,
    "title": "Eastern Promises",
    "year": 2007,
    "composers": [
      "Howard Shore"
    ],
    "genres": [
      "Crime",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Viggo Mortensen",
      "Naomi Watts"
    ],
    "director": "David Cronenberg",
    "tagline": "Every sin leaves a mark.",
    "isTarget": true
  },
  {
    "id": 265,
    "title": "The Hobbit: An Unexpected Journey",
    "year": 2012,
    "composers": [
      "Howard Shore"
    ],
    "genres": [
      "Fantasy",
      "Adventure"
    ],
    "source": "Novel / Book",
    "actors": [
      "Martin Freeman",
      "Ian McKellen"
    ],
    "director": "Peter Jackson",
    "tagline": "From the smallest beginnings come the greatest legends.",
    "isTarget": true
  },
  {
    "id": 266,
    "title": "Batman Returns",
    "year": 1992,
    "composers": [
      "Danny Elfman"
    ],
    "genres": [
      "Action",
      "Crime"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Michael Keaton",
      "Michelle Pfeiffer"
    ],
    "director": "Tim Burton",
    "tagline": "The Bat, the Cat, the Penguin.",
    "isTarget": true
  },
  {
    "id": 267,
    "title": "Sleepy Hollow",
    "year": 1999,
    "composers": [
      "Danny Elfman"
    ],
    "genres": [
      "Horror",
      "Mystery"
    ],
    "source": "Short Story / Novella",
    "actors": [
      "Johnny Depp",
      "Christina Ricci"
    ],
    "director": "Tim Burton",
    "tagline": "Heads will roll.",
    "isTarget": true
  },
  {
    "id": 268,
    "title": "Big Fish",
    "year": 2003,
    "composers": [
      "Danny Elfman"
    ],
    "genres": [
      "Fantasy",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Ewan McGregor",
      "Albert Finney"
    ],
    "director": "Tim Burton",
    "tagline": "An adventure as big as life itself.",
    "isTarget": true
  },
  {
    "id": 269,
    "title": "Charlie and the Chocolate Factory",
    "year": 2005,
    "composers": [
      "Danny Elfman"
    ],
    "genres": [
      "Fantasy",
      "Family"
    ],
    "source": "Novel / Book",
    "actors": [
      "Johnny Depp",
      "Freddie Highmore"
    ],
    "director": "Tim Burton",
    "tagline": "Willy Wonka is semi-sweet and nuts.",
    "isTarget": true
  },
  {
    "id": 270,
    "title": "Corpse Bride",
    "year": 2005,
    "composers": [
      "Danny Elfman"
    ],
    "genres": [
      "Animation",
      "Fantasy"
    ],
    "source": "Fairy Tale / Folklore",
    "actors": [
      "Johnny Depp",
      "Helena Bonham Carter"
    ],
    "director": "Tim Burton & Mike Johnson",
    "tagline": "There's been a grave misunderstanding.",
    "isTarget": true
  },
  {
    "id": 271,
    "title": "Alice in Wonderland",
    "year": 2010,
    "composers": [
      "Danny Elfman"
    ],
    "genres": [
      "Fantasy",
      "Adventure"
    ],
    "source": "Novel / Book",
    "actors": [
      "Johnny Depp",
      "Mia Wasikowska"
    ],
    "director": "Tim Burton",
    "tagline": "You're entirely bonkers. But I'll tell you a secret. All the best people are.",
    "isTarget": true
  },
  {
    "id": 272,
    "title": "Spider-Man 2",
    "year": 2004,
    "composers": [
      "Danny Elfman"
    ],
    "genres": [
      "Action",
      "Adventure"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Tobey Maguire",
      "Kirsten Dunst"
    ],
    "director": "Sam Raimi",
    "tagline": "There's a hero in all of us.",
    "isTarget": true
  },
  {
    "id": 273,
    "title": "Mission: Impossible",
    "year": 1996,
    "composers": [
      "Danny Elfman"
    ],
    "genres": [
      "Action",
      "Thriller"
    ],
    "source": "Remake / Reboot",
    "actors": [
      "Tom Cruise",
      "Jon Voight"
    ],
    "director": "Brian De Palma",
    "tagline": "Expect the impossible.",
    "isTarget": true
  },
  {
    "id": 274,
    "title": "Milk",
    "year": 2008,
    "composers": [
      "Danny Elfman"
    ],
    "genres": [
      "Biography",
      "History"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Sean Penn",
      "Josh Brolin"
    ],
    "director": "Gus Van Sant",
    "tagline": "Never blend in.",
    "isTarget": true
  },
  {
    "id": 275,
    "title": "Silver Linings Playbook",
    "year": 2012,
    "composers": [
      "Danny Elfman"
    ],
    "genres": [
      "Comedy",
      "Romance"
    ],
    "source": "Novel / Book",
    "actors": [
      "Bradley Cooper",
      "Jennifer Lawrence"
    ],
    "director": "David O. Russell",
    "tagline": "Watch for the signs.",
    "isTarget": true
  },
  {
    "id": 276,
    "title": "American Hustle",
    "year": 2013,
    "composers": [
      "Danny Elfman"
    ],
    "genres": [
      "Crime",
      "Comedy"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Christian Bale",
      "Amy Adams"
    ],
    "director": "David O. Russell",
    "tagline": "Everyone hustles to survive.",
    "isTarget": true
  },
  {
    "id": 277,
    "title": "Star Trek",
    "year": 2009,
    "composers": [
      "Michael Giacchino"
    ],
    "genres": [
      "Sci-Fi",
      "Action"
    ],
    "source": "Remake / Reboot",
    "actors": [
      "Chris Pine",
      "Zachary Quinto"
    ],
    "director": "J.J. Abrams",
    "tagline": "The future begins.",
    "isTarget": true
  },
  {
    "id": 278,
    "title": "Super 8",
    "year": 2011,
    "composers": [
      "Michael Giacchino"
    ],
    "genres": [
      "Sci-Fi",
      "Mystery"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Joel Courtney",
      "Elle Fanning"
    ],
    "director": "J.J. Abrams",
    "tagline": "It arrives.",
    "isTarget": true
  },
  {
    "id": 279,
    "title": "Mission: Impossible - Ghost Protocol",
    "year": 2011,
    "composers": [
      "Michael Giacchino"
    ],
    "genres": [
      "Action",
      "Thriller"
    ],
    "source": "Remake / Reboot",
    "actors": [
      "Tom Cruise",
      "Jeremy Renner"
    ],
    "director": "Brad Bird",
    "tagline": "No plan. No backup. No choice.",
    "isTarget": true
  },
  {
    "id": 280,
    "title": "Dawn of the Planet of the Apes",
    "year": 2014,
    "composers": [
      "Michael Giacchino"
    ],
    "genres": [
      "Sci-Fi",
      "Action"
    ],
    "source": "Novel / Book",
    "actors": [
      "Andy Serkis",
      "Jason Clarke"
    ],
    "director": "Matt Reeves",
    "tagline": "One last chance for peace.",
    "isTarget": true
  },
  {
    "id": 281,
    "title": "Zootopia",
    "year": 2016,
    "composers": [
      "Michael Giacchino"
    ],
    "genres": [
      "Animation",
      "Comedy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Ginnifer Goodwin",
      "Jason Bateman"
    ],
    "director": "Byron Howard & Rich Moore",
    "tagline": "Welcome to the urban jungle.",
    "isTarget": true
  },
  {
    "id": 282,
    "title": "Doctor Strange",
    "year": 2016,
    "composers": [
      "Michael Giacchino"
    ],
    "genres": [
      "Action",
      "Fantasy"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Benedict Cumberbatch",
      "Chiwetel Ejiofor"
    ],
    "director": "Scott Derrickson",
    "tagline": "The impossibilities are endless.",
    "isTarget": true
  },
  {
    "id": 283,
    "title": "Spider-Man: Homecoming",
    "year": 2017,
    "composers": [
      "Michael Giacchino"
    ],
    "genres": [
      "Action",
      "Adventure"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Tom Holland",
      "Michael Keaton"
    ],
    "director": "Jon Watts",
    "tagline": "Homework can wait. The city can't.",
    "isTarget": true
  },
  {
    "id": 284,
    "title": "Spider-Man: No Way Home",
    "year": 2021,
    "composers": [
      "Michael Giacchino"
    ],
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Tom Holland",
      "Zendaya"
    ],
    "director": "Jon Watts",
    "tagline": "The Multiverse unleashed.",
    "isTarget": true
  },
  {
    "id": 285,
    "title": "Jurassic World",
    "year": 2015,
    "composers": [
      "Michael Giacchino"
    ],
    "genres": [
      "Sci-Fi",
      "Action"
    ],
    "source": "Novel / Book",
    "actors": [
      "Chris Pratt",
      "Bryce Dallas Howard"
    ],
    "director": "Colin Trevorrow",
    "tagline": "The park is open.",
    "isTarget": true
  },
  {
    "id": 286,
    "title": "The Bourne Identity",
    "year": 2002,
    "composers": [
      "John Powell"
    ],
    "genres": [
      "Action",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Matt Damon",
      "Franka Potente"
    ],
    "director": "Doug Liman",
    "tagline": "He was the perfect weapon until he became the target.",
    "isTarget": true
  },
  {
    "id": 287,
    "title": "The Bourne Supremacy",
    "year": 2004,
    "composers": [
      "John Powell"
    ],
    "genres": [
      "Action",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Matt Damon",
      "Joan Allen"
    ],
    "director": "Paul Greengrass",
    "tagline": "They should have left him alone.",
    "isTarget": true
  },
  {
    "id": 288,
    "title": "The Bourne Ultimatum",
    "year": 2007,
    "composers": [
      "John Powell"
    ],
    "genres": [
      "Action",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Matt Damon",
      "Julia Stiles"
    ],
    "director": "Paul Greengrass",
    "tagline": "Remember everything. Forgive nothing.",
    "isTarget": true
  },
  {
    "id": 289,
    "title": "How to Train Your Dragon",
    "year": 2010,
    "composers": [
      "John Powell"
    ],
    "genres": [
      "Animation",
      "Adventure"
    ],
    "source": "Novel / Book",
    "actors": [
      "Jay Baruchel",
      "Gerard Butler"
    ],
    "director": "Dean DeBlois & Chris Sanders",
    "tagline": "One adventure will change two worlds.",
    "isTarget": true
  },
  {
    "id": 290,
    "title": "Shrek",
    "year": 2001,
    "composers": [
      "Harry Gregson-Williams",
      "John Powell"
    ],
    "genres": [
      "Animation",
      "Comedy"
    ],
    "source": "Novel / Book",
    "actors": [
      "Mike Myers",
      "Eddie Murphy"
    ],
    "director": "Andrew Adamson & Vicky Jenson",
    "tagline": "The greatest fairy tale never told.",
    "isTarget": true
  },
  {
    "id": 291,
    "title": "Shrek 2",
    "year": 2004,
    "composers": [
      "Harry Gregson-Williams"
    ],
    "genres": [
      "Animation",
      "Comedy"
    ],
    "source": "Novel / Book",
    "actors": [
      "Mike Myers",
      "Eddie Murphy"
    ],
    "director": "Andrew Adamson",
    "tagline": "Once upon a time is not enough.",
    "isTarget": true
  },
  {
    "id": 292,
    "title": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    "year": 2005,
    "composers": [
      "Harry Gregson-Williams"
    ],
    "genres": [
      "Fantasy",
      "Adventure"
    ],
    "source": "Novel / Book",
    "actors": [
      "Georgie Henley",
      "Tilda Swinton"
    ],
    "director": "Andrew Adamson",
    "tagline": "Evil Has Reigned For 100 Years...",
    "isTarget": true
  },
  {
    "id": 293,
    "title": "Kingdom of Heaven",
    "year": 2005,
    "composers": [
      "Harry Gregson-Williams"
    ],
    "genres": [
      "History",
      "War"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Orlando Bloom",
      "Eva Green"
    ],
    "director": "Ridley Scott",
    "tagline": "Be without fear in the face of your enemies.",
    "isTarget": true
  },
  {
    "id": 294,
    "title": "The Martian",
    "year": 2015,
    "composers": [
      "Harry Gregson-Williams"
    ],
    "genres": [
      "Sci-Fi",
      "Adventure"
    ],
    "source": "Novel / Book",
    "actors": [
      "Matt Damon",
      "Jessica Chastain"
    ],
    "director": "Ridley Scott",
    "tagline": "Bring Him Home.",
    "isTarget": true
  },
  {
    "id": 295,
    "title": "Man on Fire",
    "year": 2004,
    "composers": [
      "Harry Gregson-Williams"
    ],
    "genres": [
      "Action",
      "Crime"
    ],
    "source": "Novel / Book",
    "actors": [
      "Denzel Washington",
      "Dakota Fanning"
    ],
    "director": "Tony Scott",
    "tagline": "Creasy's art is death, and he's about to paint his masterpiece.",
    "isTarget": true
  },
  {
    "id": 296,
    "title": "Gone Baby Gone",
    "year": 2007,
    "composers": [
      "Harry Gregson-Williams"
    ],
    "genres": [
      "Crime",
      "Mystery"
    ],
    "source": "Novel / Book",
    "actors": [
      "Casey Affleck",
      "Michelle Monaghan"
    ],
    "director": "Ben Affleck",
    "tagline": "Everyone wants the truth... until they find it.",
    "isTarget": true
  },
  {
    "id": 297,
    "title": "The Town",
    "year": 2010,
    "composers": [
      "Harry Gregson-Williams"
    ],
    "genres": [
      "Crime",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Ben Affleck",
      "Jeremy Renner"
    ],
    "director": "Ben Affleck",
    "tagline": "Welcome to the bank robbery capital of America.",
    "isTarget": true
  },
  {
    "id": 298,
    "title": "Scream",
    "year": 1996,
    "composers": [
      "Marco Beltrami"
    ],
    "genres": [
      "Horror",
      "Mystery"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Neve Campbell",
      "Courteney Cox"
    ],
    "director": "Wes Craven",
    "tagline": "Someone has taken their love of scary movies one step too far.",
    "isTarget": true
  },
  {
    "id": 299,
    "title": "3:10 to Yuma",
    "year": 2007,
    "composers": [
      "Marco Beltrami"
    ],
    "genres": [
      "Western",
      "Action"
    ],
    "source": "Short Story / Novella",
    "actors": [
      "Russell Crowe",
      "Christian Bale"
    ],
    "director": "James Mangold",
    "tagline": "Time waits for one man.",
    "isTarget": true
  },
  {
    "id": 300,
    "title": "The Hurt Locker",
    "year": 2008,
    "composers": [
      "Marco Beltrami"
    ],
    "genres": [
      "War",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Jeremy Renner",
      "Anthony Mackie"
    ],
    "director": "Kathryn Bigelow",
    "tagline": "War is a drug.",
    "isTarget": true
  },
  {
    "id": 301,
    "title": "World War Z",
    "year": 2013,
    "composers": [
      "Marco Beltrami"
    ],
    "genres": [
      "Horror",
      "Action"
    ],
    "source": "Novel / Book",
    "actors": [
      "Brad Pitt",
      "Mireille Enos"
    ],
    "director": "Marc Forster",
    "tagline": "Remember Philly.",
    "isTarget": true
  },
  {
    "id": 302,
    "title": "Snowpiercer",
    "year": 2013,
    "composers": [
      "Marco Beltrami"
    ],
    "genres": [
      "Sci-Fi",
      "Action"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Chris Evans",
      "Song Kang-ho"
    ],
    "director": "Bong Joon-ho",
    "tagline": "1001 cars long. No engine. No stopping.",
    "isTarget": true
  },
  {
    "id": 303,
    "title": "Logan",
    "year": 2017,
    "composers": [
      "Marco Beltrami"
    ],
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Hugh Jackman",
      "Patrick Stewart"
    ],
    "director": "James Mangold",
    "tagline": "His time has come.",
    "isTarget": true
  },
  {
    "id": 304,
    "title": "A Quiet Place",
    "year": 2018,
    "composers": [
      "Marco Beltrami"
    ],
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Emily Blunt",
      "John Krasinski"
    ],
    "director": "John Krasinski",
    "tagline": "If they hear you, they hunt you.",
    "isTarget": true
  },
  {
    "id": 305,
    "title": "Ford v Ferrari",
    "year": 2019,
    "composers": [
      "Marco Beltrami"
    ],
    "genres": [
      "Biography",
      "Action"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Matt Damon",
      "Christian Bale"
    ],
    "director": "James Mangold",
    "tagline": "They took the American dream for a ride.",
    "isTarget": true
  },
  {
    "id": 306,
    "title": "Guardians of the Galaxy",
    "year": 2014,
    "composers": [
      "Tyler Bates"
    ],
    "genres": [
      "Sci-Fi",
      "Action"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Chris Pratt",
      "Zoe Saldana"
    ],
    "director": "James Gunn",
    "tagline": "You're welcome.",
    "isTarget": true
  },
  {
    "id": 307,
    "title": "300",
    "year": 2006,
    "composers": [
      "Tyler Bates"
    ],
    "genres": [
      "Action",
      "War"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Gerard Butler",
      "Lena Headey"
    ],
    "director": "Zack Snyder",
    "tagline": "Prepare for glory!",
    "isTarget": true
  },
  {
    "id": 308,
    "title": "Watchmen",
    "year": 2009,
    "composers": [
      "Tyler Bates"
    ],
    "genres": [
      "Action",
      "Mystery"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Jackie Earle Haley",
      "Patrick Wilson"
    ],
    "director": "Zack Snyder",
    "tagline": "Who watches the Watchmen?",
    "isTarget": true
  },
  {
    "id": 309,
    "title": "John Wick",
    "year": 2014,
    "composers": [
      "Tyler Bates"
    ],
    "genres": [
      "Action",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Keanu Reeves",
      "Michael Nyqvist"
    ],
    "director": "Chad Stahelski",
    "tagline": "Don't set him off.",
    "isTarget": true
  },
  {
    "id": 310,
    "title": "Deadpool 2",
    "year": 2018,
    "composers": [
      "Tyler Bates"
    ],
    "genres": [
      "Action",
      "Comedy"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Ryan Reynolds",
      "Josh Brolin"
    ],
    "director": "David Leitch",
    "tagline": "Prepare for the Second Coming.",
    "isTarget": true
  },
  {
    "id": 311,
    "title": "Iron Man",
    "year": 2008,
    "composers": [
      "Ramin Djawadi"
    ],
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Robert Downey Jr.",
      "Gwyneth Paltrow"
    ],
    "director": "Jon Favreau",
    "tagline": "Heroes aren't born. They're built.",
    "isTarget": true
  },
  {
    "id": 312,
    "title": "Pacific Rim",
    "year": 2013,
    "composers": [
      "Ramin Djawadi"
    ],
    "genres": [
      "Sci-Fi",
      "Action"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Charlie Hunnam",
      "Idris Elba"
    ],
    "director": "Guillermo del Toro",
    "tagline": "To fight monsters, we created monsters.",
    "isTarget": true
  },
  {
    "id": 313,
    "title": "Iron Man 3",
    "year": 2013,
    "composers": [
      "Brian Tyler"
    ],
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Robert Downey Jr.",
      "Guy Pearce"
    ],
    "director": "Shane Black",
    "tagline": "Unleash the power behind the armor.",
    "isTarget": true
  },
  {
    "id": 314,
    "title": "Crazy Rich Asians",
    "year": 2018,
    "composers": [
      "Brian Tyler"
    ],
    "genres": [
      "Romance",
      "Comedy"
    ],
    "source": "Novel / Book",
    "actors": [
      "Constance Wu",
      "Henry Golding"
    ],
    "director": "Jon M. Chu",
    "tagline": "The only thing crazier than love is family.",
    "isTarget": true
  },
  {
    "id": 315,
    "title": "Fantastic Mr. Fox",
    "year": 2009,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Animation",
      "Comedy"
    ],
    "source": "Novel / Book",
    "actors": [
      "George Clooney",
      "Meryl Streep"
    ],
    "director": "Wes Anderson",
    "tagline": "Dig the life fantastic.",
    "isTarget": true
  },
  {
    "id": 316,
    "title": "Moonrise Kingdom",
    "year": 2012,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Comedy",
      "Romance"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Jared Gilman",
      "Kara Hayward"
    ],
    "director": "Wes Anderson",
    "tagline": "A tormenting romance in the heart of New England.",
    "isTarget": true
  },
  {
    "id": 317,
    "title": "Isle of Dogs",
    "year": 2018,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Animation",
      "Adventure"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Bryan Cranston",
      "Edward Norton"
    ],
    "director": "Wes Anderson",
    "tagline": "I bit a boy.",
    "isTarget": true
  },
  {
    "id": 318,
    "title": "Harry Potter and the Deathly Hallows – Part 1",
    "year": 2010,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Fantasy",
      "Adventure"
    ],
    "source": "Novel / Book",
    "actors": [
      "Daniel Radcliffe",
      "Emma Watson"
    ],
    "director": "David Yates",
    "tagline": "Nowhere is safe.",
    "isTarget": true
  },
  {
    "id": 319,
    "title": "Harry Potter and the Deathly Hallows – Part 2",
    "year": 2011,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Fantasy",
      "Adventure"
    ],
    "source": "Novel / Book",
    "actors": [
      "Daniel Radcliffe",
      "Emma Watson"
    ],
    "director": "David Yates",
    "tagline": "It all ends.",
    "isTarget": true
  },
  {
    "id": 320,
    "title": "Argo",
    "year": 2012,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Biography",
      "Thriller"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Ben Affleck",
      "Bryan Cranston"
    ],
    "director": "Ben Affleck",
    "tagline": "The movie was fake. The mission was real.",
    "isTarget": true
  },
  {
    "id": 321,
    "title": "Zero Dark Thirty",
    "year": 2012,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "History",
      "Thriller"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Jessica Chastain",
      "Jason Clarke"
    ],
    "director": "Kathryn Bigelow",
    "tagline": "The greatest manhunt in history.",
    "isTarget": true
  },
  {
    "id": 322,
    "title": "The Tree of Life",
    "year": 2011,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Drama",
      "Fantasy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Brad Pitt",
      "Jessica Chastain"
    ],
    "director": "Terrence Malick",
    "tagline": "Nothing is ever lost.",
    "isTarget": true
  },
  {
    "id": 323,
    "title": "Godzilla",
    "year": 2014,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Sci-Fi",
      "Action"
    ],
    "source": "Remake / Reboot",
    "actors": [
      "Aaron Taylor-Johnson",
      "Bryan Cranston"
    ],
    "director": "Gareth Edwards",
    "tagline": "A king's arrival is never silent.",
    "isTarget": true
  },
  {
    "id": 324,
    "title": "The Truman Show",
    "year": 1998,
    "composers": [
      "Burkhard Dallwitz",
      "Philip Glass"
    ],
    "genres": [
      "Drama",
      "Sci-Fi"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Jim Carrey",
      "Ed Harris"
    ],
    "director": "Peter Weir",
    "tagline": "On the air. Unaware.",
    "isTarget": true
  },
  {
    "id": 325,
    "title": "The Hours",
    "year": 2002,
    "composers": [
      "Philip Glass"
    ],
    "genres": [
      "Drama",
      "Romance"
    ],
    "source": "Novel / Book",
    "actors": [
      "Meryl Streep",
      "Julianne Moore"
    ],
    "director": "Stephen Daldry",
    "tagline": "The time to hide is over.",
    "isTarget": true
  },
  {
    "id": 326,
    "title": "Candyman",
    "year": 1992,
    "composers": [
      "Philip Glass"
    ],
    "genres": [
      "Horror",
      "Thriller"
    ],
    "source": "Short Story / Novella",
    "actors": [
      "Virginia Madsen",
      "Tony Todd"
    ],
    "director": "Bernard Rose",
    "tagline": "We dare you to say his name five times.",
    "isTarget": true
  },
  {
    "id": 327,
    "title": "A Fistful of Dollars",
    "year": 1964,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Western",
      "Action"
    ],
    "source": "Remake / Reboot",
    "actors": [
      "Clint Eastwood",
      "Gian Maria Volonté"
    ],
    "director": "Sergio Leone",
    "tagline": "In his own way he is the most dangerous man who ever lived!",
    "isTarget": true
  },
  {
    "id": 328,
    "title": "For a Few Dollars More",
    "year": 1965,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Western",
      "Action"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Clint Eastwood",
      "Lee Van Cleef"
    ],
    "director": "Sergio Leone",
    "tagline": "Where life had no value, death, sometimes, had its price.",
    "isTarget": true
  },
  {
    "id": 329,
    "title": "Once Upon a Time in America",
    "year": 1984,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Crime",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Robert De Niro",
      "James Woods"
    ],
    "director": "Sergio Leone",
    "tagline": "As boys, they made a pact to share their fortunes.",
    "isTarget": true
  },
  {
    "id": 330,
    "title": "The Mission",
    "year": 1986,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "History",
      "Drama"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Robert De Niro",
      "Jeremy Irons"
    ],
    "director": "Roland Joffé",
    "tagline": "Their world is a paradise on Earth.",
    "isTarget": true
  },
  {
    "id": 331,
    "title": "Days of Heaven",
    "year": 1978,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Drama",
      "Romance"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Richard Gere",
      "Brooke Adams"
    ],
    "director": "Terrence Malick",
    "tagline": "Theyase across the wheat fields.",
    "isTarget": true
  },
  {
    "id": 332,
    "title": "The Omen",
    "year": 1976,
    "composers": [
      "Jerry Goldsmith"
    ],
    "genres": [
      "Horror",
      "Mystery"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Gregory Peck",
      "Lee Remick"
    ],
    "director": "Richard Donner",
    "tagline": "It is the greatest mystery of all because no human being will ever solve it.",
    "isTarget": true
  },
  {
    "id": 333,
    "title": "Poltergeist",
    "year": 1982,
    "composers": [
      "Jerry Goldsmith"
    ],
    "genres": [
      "Horror",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Craig T. Nelson",
      "JoBeth Williams"
    ],
    "director": "Tobe Hooper",
    "tagline": "They're here.",
    "isTarget": true
  },
  {
    "id": 334,
    "title": "First Blood",
    "year": 1982,
    "composers": [
      "Jerry Goldsmith"
    ],
    "genres": [
      "Action",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Sylvester Stallone",
      "Richard Crenna"
    ],
    "director": "Ted Kotcheff",
    "tagline": "This time he's fighting for his life.",
    "isTarget": true
  },
  {
    "id": 335,
    "title": "Gremlins",
    "year": 1984,
    "composers": [
      "Jerry Goldsmith"
    ],
    "genres": [
      "Comedy",
      "Horror"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Zach Galligan",
      "Phoebe Cates"
    ],
    "director": "Joe Dante",
    "tagline": "Cute. Clever. Mischievous. Intelligent. Dangerous.",
    "isTarget": true
  },
  {
    "id": 336,
    "title": "Total Recall",
    "year": 1990,
    "composers": [
      "Jerry Goldsmith"
    ],
    "genres": [
      "Sci-Fi",
      "Action"
    ],
    "source": "Short Story / Novella",
    "actors": [
      "Arnold Schwarzenegger",
      "Sharon Stone"
    ],
    "director": "Paul Verhoeven",
    "tagline": "Get ready for the ride of your life.",
    "isTarget": true
  },
  {
    "id": 337,
    "title": "Basic Instinct",
    "year": 1992,
    "composers": [
      "Jerry Goldsmith"
    ],
    "genres": [
      "Thriller",
      "Mystery"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Michael Douglas",
      "Sharon Stone"
    ],
    "director": "Paul Verhoeven",
    "tagline": "A brutal murder. A brilliant killer.",
    "isTarget": true
  },
  {
    "id": 338,
    "title": "Mulan",
    "year": 1998,
    "composers": [
      "Jerry Goldsmith"
    ],
    "genres": [
      "Animation",
      "Adventure"
    ],
    "source": "Fairy Tale / Folklore",
    "actors": [
      "Ming-Na Wen",
      "Eddie Murphy"
    ],
    "director": "Tony Bancroft & Barry Cook",
    "tagline": "The flower that blooms in adversity is the most rare and beautiful of all.",
    "isTarget": true
  },
  {
    "id": 339,
    "title": "Die Hard",
    "year": 1988,
    "composers": [
      "Michael Kamen"
    ],
    "genres": [
      "Action",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Bruce Willis",
      "Alan Rickman"
    ],
    "director": "John McTiernan",
    "tagline": "40 stories of sheer adventure!",
    "isTarget": true
  },
  {
    "id": 340,
    "title": "Lethal Weapon",
    "year": 1987,
    "composers": [
      "Michael Kamen",
      "Eric Clapton"
    ],
    "genres": [
      "Action",
      "Crime"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Mel Gibson",
      "Danny Glover"
    ],
    "director": "Richard Donner",
    "tagline": "If these two can learn to stand each other... the bad guys don't stand a chance.",
    "isTarget": true
  },
  {
    "id": 341,
    "title": "The Iron Giant",
    "year": 1999,
    "composers": [
      "Michael Kamen"
    ],
    "genres": [
      "Animation",
      "Sci-Fi"
    ],
    "source": "Novel / Book",
    "actors": [
      "Eli Marienthal",
      "Vin Diesel"
    ],
    "director": "Brad Bird",
    "tagline": "Some secrets are too huge to hide.",
    "isTarget": true
  },
  {
    "id": 342,
    "title": "Brazil",
    "year": 1985,
    "composers": [
      "Michael Kamen"
    ],
    "genres": [
      "Sci-Fi",
      "Comedy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Jonathan Pryce",
      "Robert De Niro"
    ],
    "director": "Terry Gilliam",
    "tagline": "It's all about bureaucracy.",
    "isTarget": true
  },
  {
    "id": 343,
    "title": "The Hunt for Red October",
    "year": 1990,
    "composers": [
      "Basil Poledouris"
    ],
    "genres": [
      "Thriller",
      "Action"
    ],
    "source": "Novel / Book",
    "actors": [
      "Sean Connery",
      "Alec Baldwin"
    ],
    "director": "John McTiernan",
    "tagline": "Invisible. Silent. Stolen.",
    "isTarget": true
  },
  {
    "id": 344,
    "title": "RoboCop",
    "year": 1987,
    "composers": [
      "Basil Poledouris"
    ],
    "genres": [
      "Sci-Fi",
      "Action"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Peter Weller",
      "Nancy Allen"
    ],
    "director": "Paul Verhoeven",
    "tagline": "Part man. Part machine. All cop.",
    "isTarget": true
  },
  {
    "id": 345,
    "title": "Starship Troopers",
    "year": 1997,
    "composers": [
      "Basil Poledouris"
    ],
    "genres": [
      "Sci-Fi",
      "Action"
    ],
    "source": "Novel / Book",
    "actors": [
      "Casper Van Dien",
      "Denise Richards"
    ],
    "director": "Paul Verhoeven",
    "tagline": "The only good bug is a dead bug.",
    "isTarget": true
  },
  {
    "id": 346,
    "title": "Conan the Barbarian",
    "year": 1982,
    "composers": [
      "Basil Poledouris"
    ],
    "genres": [
      "Fantasy",
      "Action"
    ],
    "source": "Short Story / Novella",
    "actors": [
      "Arnold Schwarzenegger",
      "James Earl Jones"
    ],
    "director": "John Milius",
    "tagline": "He conquered an empire with his sword.",
    "isTarget": true
  },
  {
    "id": 347,
    "title": "Speed",
    "year": 1994,
    "composers": [
      "Mark Mancina"
    ],
    "genres": [
      "Action",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Keanu Reeves",
      "Sandra Bullock"
    ],
    "director": "Jan de Bont",
    "tagline": "Get ready for rush hour.",
    "isTarget": true
  },
  {
    "id": 348,
    "title": "Twister",
    "year": 1996,
    "composers": [
      "Mark Mancina"
    ],
    "genres": [
      "Action",
      "Adventure"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Helen Hunt",
      "Bill Paxton"
    ],
    "director": "Jan de Bont",
    "tagline": "The dark side of nature.",
    "isTarget": true
  },
  {
    "id": 349,
    "title": "Training Day",
    "year": 2001,
    "composers": [
      "Mark Mancina"
    ],
    "genres": [
      "Crime",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Denzel Washington",
      "Ethan Hawke"
    ],
    "director": "Antoine Fuqua",
    "tagline": "The only thing more dangerous than the line being crossed, is the cop who will cross it.",
    "isTarget": true
  },
  {
    "id": 350,
    "title": "Moana",
    "year": 2016,
    "composers": [
      "Mark Mancina",
      "Lin-Manuel Miranda"
    ],
    "genres": [
      "Animation",
      "Adventure"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Auli'i Cravalho",
      "Dwayne Johnson"
    ],
    "director": "Ron Clements & John Musker",
    "tagline": "The ocean is calling.",
    "isTarget": true
  },
  {
    "id": 351,
    "title": "Encanto",
    "year": 2021,
    "composers": [
      "Germaine Franco",
      "Lin-Manuel Miranda"
    ],
    "genres": [
      "Animation",
      "Musical"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Stephanie Beatriz",
      "María Cecilia Botero"
    ],
    "director": "Jared Bush & Byron Howard",
    "tagline": "There's a little magic in all of us.",
    "isTarget": true
  },
  {
    "id": 352,
    "title": "Frozen",
    "year": 2013,
    "composers": [
      "Christophe Beck",
      "Robert Lopez"
    ],
    "genres": [
      "Animation",
      "Musical"
    ],
    "source": "Fairy Tale / Folklore",
    "actors": [
      "Kristen Bell",
      "Idina Menzel"
    ],
    "director": "Chris Buck & Jennifer Lee",
    "tagline": "Only the act of true love will thaw a frozen heart.",
    "isTarget": true
  },
  {
    "id": 353,
    "title": "The Hangover",
    "year": 2009,
    "composers": [
      "Christophe Beck"
    ],
    "genres": [
      "Comedy",
      "Mystery"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Bradley Cooper",
      "Ed Helms"
    ],
    "director": "Todd Phillips",
    "tagline": "Some guys just can't handle Vegas.",
    "isTarget": true
  },
  {
    "id": 354,
    "title": "Edge of Tomorrow",
    "year": 2014,
    "composers": [
      "Christophe Beck"
    ],
    "genres": [
      "Sci-Fi",
      "Action"
    ],
    "source": "Novel / Book",
    "actors": [
      "Tom Cruise",
      "Emily Blunt"
    ],
    "director": "Doug Liman",
    "tagline": "Live. Die. Repeat.",
    "isTarget": true
  },
  {
    "id": 355,
    "title": "Ant-Man",
    "year": 2015,
    "composers": [
      "Christophe Beck"
    ],
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Paul Rudd",
      "Michael Douglas"
    ],
    "director": "Peyton Reed",
    "tagline": "Heroes don't get any bigger.",
    "isTarget": true
  },
  {
    "id": 356,
    "title": "Rocky",
    "year": 1976,
    "composers": [
      "Bill Conti"
    ],
    "genres": [
      "Drama",
      "Romance"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Sylvester Stallone",
      "Talia Shire"
    ],
    "director": "John G. Avildsen",
    "tagline": "His whole life was a million-to-one shot.",
    "isTarget": true
  },
  {
    "id": 357,
    "title": "The Karate Kid",
    "year": 1984,
    "composers": [
      "Bill Conti"
    ],
    "genres": [
      "Drama",
      "Family"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Ralph Macchio",
      "Pat Morita"
    ],
    "director": "John G. Avildsen",
    "tagline": "First learn stand, then learn fly.",
    "isTarget": true
  },
  {
    "id": 358,
    "title": "The Right Stuff",
    "year": 1983,
    "composers": [
      "Bill Conti"
    ],
    "genres": [
      "History",
      "Adventure"
    ],
    "source": "Novel / Book",
    "actors": [
      "Sam Shepard",
      "Dennis Quaid"
    ],
    "director": "Philip Kaufman",
    "tagline": "How the future began.",
    "isTarget": true
  },
  {
    "id": 359,
    "title": "Halloween",
    "year": 1978,
    "composers": [
      "John Carpenter"
    ],
    "genres": [
      "Horror",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Donald Pleasence",
      "Jamie Lee Curtis"
    ],
    "director": "John Carpenter",
    "tagline": "The night HE came home!",
    "isTarget": true
  },
  {
    "id": 360,
    "title": "Escape from New York",
    "year": 1981,
    "composers": [
      "John Carpenter"
    ],
    "genres": [
      "Sci-Fi",
      "Action"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Kurt Russell",
      "Lee Van Cleef"
    ],
    "director": "John Carpenter",
    "tagline": "1997. New York City is now a maximum security prison.",
    "isTarget": true
  },
  {
    "id": 361,
    "title": "Big Trouble in Little China",
    "year": 1986,
    "composers": [
      "John Carpenter"
    ],
    "genres": [
      "Action",
      "Comedy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Kurt Russell",
      "Kim Cattrall"
    ],
    "director": "John Carpenter",
    "tagline": "Adventure doesn't come any bigger!",
    "isTarget": true
  },
  {
    "id": 362,
    "title": "The Exorcist",
    "year": 1973,
    "composers": [
      "Various Artists"
    ],
    "genres": [
      "Horror",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Ellen Burstyn",
      "Max von Sydow"
    ],
    "director": "William Friedkin",
    "tagline": "Somewhere between science and superstition, there is another world.",
    "isTarget": true
  },
  {
    "id": 363,
    "title": "The Shining",
    "year": 1980,
    "composers": [
      "Wendy Carlos"
    ],
    "genres": [
      "Horror",
      "Mystery"
    ],
    "source": "Novel / Book",
    "actors": [
      "Jack Nicholson",
      "Shelley Duvall"
    ],
    "director": "Stanley Kubrick",
    "tagline": "A masterpiece of modern horror.",
    "isTarget": true
  },
  {
    "id": 364,
    "title": "A Clockwork Orange",
    "year": 1971,
    "composers": [
      "Wendy Carlos"
    ],
    "genres": [
      "Crime",
      "Sci-Fi"
    ],
    "source": "Novel / Book",
    "actors": [
      "Malcolm McDowell",
      "Patrick Magee"
    ],
    "director": "Stanley Kubrick",
    "tagline": "Being the adventures of a young man whose principal interests are ultra-violence and Beethoven.",
    "isTarget": true
  },
  {
    "id": 365,
    "title": "Full Metal Jacket",
    "year": 1987,
    "composers": [
      "Abigail Mead"
    ],
    "genres": [
      "War",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Matthew Modine",
      "Vincent D'Onofrio"
    ],
    "director": "Stanley Kubrick",
    "tagline": "In Vietnam the wind doesn't blow, it sucks.",
    "isTarget": true
  },
  {
    "id": 366,
    "title": "Dr. Strangelove",
    "year": 1964,
    "composers": [
      "Laurie Johnson"
    ],
    "genres": [
      "Comedy",
      "War"
    ],
    "source": "Novel / Book",
    "actors": [
      "Peter Sellers",
      "George C. Scott"
    ],
    "director": "Stanley Kubrick",
    "tagline": "How I Learned to Stop Worrying and Love the Bomb.",
    "isTarget": true
  },
  {
    "id": 367,
    "title": "Eyes Wide Shut",
    "year": 1999,
    "composers": [
      "Jocelyn Pook"
    ],
    "genres": [
      "Mystery",
      "Drama"
    ],
    "source": "Short Story / Novella",
    "actors": [
      "Tom Cruise",
      "Nicole Kidman"
    ],
    "director": "Stanley Kubrick",
    "tagline": "Cruise. Kidman. Kubrick.",
    "isTarget": true
  },
  {
    "id": 368,
    "title": "Rear Window",
    "year": 1954,
    "composers": [
      "Franz Waxman"
    ],
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "source": "Short Story / Novella",
    "actors": [
      "James Stewart",
      "Grace Kelly"
    ],
    "director": "Alfred Hitchcock",
    "tagline": "See it! If your nerves can stand it!",
    "isTarget": true
  },
  {
    "id": 369,
    "title": "Sunset Boulevard",
    "year": 1950,
    "composers": [
      "Franz Waxman"
    ],
    "genres": [
      "Drama",
      "Crime"
    ],
    "source": "Original Screenplay",
    "actors": [
      "William Holden",
      "Gloria Swanson"
    ],
    "director": "Billy Wilder",
    "tagline": "A Hollywood Story.",
    "isTarget": true
  },
  {
    "id": 370,
    "title": "Some Like It Hot",
    "year": 1959,
    "composers": [
      "Adolph Deutsch"
    ],
    "genres": [
      "Comedy",
      "Romance"
    ],
    "source": "Remake / Reboot",
    "actors": [
      "Marilyn Monroe",
      "Tony Curtis"
    ],
    "director": "Billy Wilder",
    "tagline": "The movie too hot for words!",
    "isTarget": true
  },
  {
    "id": 371,
    "title": "The Apartment",
    "year": 1960,
    "composers": [
      "Adolph Deutsch"
    ],
    "genres": [
      "Comedy",
      "Romance"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Jack Lemmon",
      "Shirley MacLaine"
    ],
    "director": "Billy Wilder",
    "tagline": "Movie-wise, there has never been anything like it!",
    "isTarget": true
  },
  {
    "id": 372,
    "title": "Double Indemnity",
    "year": 1944,
    "composers": [
      "Miklós Rózsa"
    ],
    "genres": [
      "Crime",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Fred MacMurray",
      "Barbara Stanwyck"
    ],
    "director": "Billy Wilder",
    "tagline": "From the moment they met it was murder!",
    "isTarget": true
  },
  {
    "id": 373,
    "title": "Ben-Hur",
    "year": 1959,
    "composers": [
      "Miklós Rózsa"
    ],
    "genres": [
      "History",
      "Adventure"
    ],
    "source": "Novel / Book",
    "actors": [
      "Charlton Heston",
      "Stephen Boyd"
    ],
    "director": "William Wyler",
    "tagline": "A Tale of the Christ.",
    "isTarget": true
  },
  {
    "id": 374,
    "title": "The Wizard of Oz",
    "year": 1939,
    "composers": [
      "Herbert Stothart",
      "Harold Arlen"
    ],
    "genres": [
      "Fantasy",
      "Musical"
    ],
    "source": "Novel / Book",
    "actors": [
      "Judy Garland",
      "Ray Bolger"
    ],
    "director": "Victor Fleming",
    "tagline": "We're off to see the Wizard!",
    "isTarget": true
  },
  {
    "id": 375,
    "title": "Gone with the Wind",
    "year": 1939,
    "composers": [
      "Max Steiner"
    ],
    "genres": [
      "Drama",
      "Romance"
    ],
    "source": "Novel / Book",
    "actors": [
      "Clark Gable",
      "Vivien Leigh"
    ],
    "director": "Victor Fleming",
    "tagline": "The most magnificent picture ever!",
    "isTarget": true
  },
  {
    "id": 376,
    "title": "Singin' in the Rain",
    "year": 1952,
    "composers": [
      "Lennie Hayton"
    ],
    "genres": [
      "Musical",
      "Comedy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Gene Kelly",
      "Debbie Reynolds"
    ],
    "director": "Stanley Donen & Gene Kelly",
    "tagline": "What a glorious feeling!",
    "isTarget": true
  },
  {
    "id": 377,
    "title": "12 Angry Men",
    "year": 1957,
    "composers": [
      "Kenyon Hopkins"
    ],
    "genres": [
      "Drama",
      "Crime"
    ],
    "source": "Stage Play / Musical",
    "actors": [
      "Henry Fonda",
      "Lee J. Cobb"
    ],
    "director": "Sidney Lumet",
    "tagline": "Life is in their hands. Death is on their minds.",
    "isTarget": true
  },
  {
    "id": 378,
    "title": "Dog Day Afternoon",
    "year": 1975,
    "composers": [
      "Various Artists"
    ],
    "genres": [
      "Crime",
      "Biography"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Al Pacino",
      "John Cazale"
    ],
    "director": "Sidney Lumet",
    "tagline": "The robbery was supposed to take 10 minutes.",
    "isTarget": true
  },
  {
    "id": 379,
    "title": "Network",
    "year": 1976,
    "composers": [
      "Elliot Lawrence"
    ],
    "genres": [
      "Drama",
      "Comedy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Faye Dunaway",
      "William Holden"
    ],
    "director": "Sidney Lumet",
    "tagline": "I'm mad as hell, and I'm not going to take this anymore!",
    "isTarget": true
  },
  {
    "id": 380,
    "title": "Lawrence of Arabia",
    "year": 1962,
    "composers": [
      "Maurice Jarre"
    ],
    "genres": [
      "Biography",
      "Adventure"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Peter O'Toole",
      "Alec Guinness"
    ],
    "director": "David Lean",
    "tagline": "He was a poet, a scholar and a mighty warrior.",
    "isTarget": true
  },
  {
    "id": 381,
    "title": "Doctor Zhivago",
    "year": 1965,
    "composers": [
      "Maurice Jarre"
    ],
    "genres": [
      "Drama",
      "Romance"
    ],
    "source": "Novel / Book",
    "actors": [
      "Omar Sharif",
      "Julie Christie"
    ],
    "director": "David Lean",
    "tagline": "A turbulent land... an unforgettable love.",
    "isTarget": true
  },
  {
    "id": 382,
    "title": "Dead Poets Society",
    "year": 1989,
    "composers": [
      "Maurice Jarre"
    ],
    "genres": [
      "Drama",
      "Comedy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Robin Williams",
      "Ethan Hawke"
    ],
    "director": "Peter Weir",
    "tagline": "Carpe Diem. Seize the day, boys.",
    "isTarget": true
  },
  {
    "id": 383,
    "title": "Ghost",
    "year": 1990,
    "composers": [
      "Maurice Jarre"
    ],
    "genres": [
      "Romance",
      "Fantasy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Patrick Swayze",
      "Demi Moore"
    ],
    "director": "Jerry Zucker",
    "tagline": "Before Sam was murdered, he told Molly he'd love and protect her forever.",
    "isTarget": true
  },
  {
    "id": 384,
    "title": "Witness",
    "year": 1985,
    "composers": [
      "Maurice Jarre"
    ],
    "genres": [
      "Thriller",
      "Romance"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Harrison Ford",
      "Kelly McGillis"
    ],
    "director": "Peter Weir",
    "tagline": "A big city cop. A small country boy. They have nothing in common... but a murder.",
    "isTarget": true
  },
  {
    "id": 385,
    "title": "To Kill a Mockingbird",
    "year": 1962,
    "composers": [
      "Elmer Bernstein"
    ],
    "genres": [
      "Drama",
      "Crime"
    ],
    "source": "Novel / Book",
    "actors": [
      "Gregory Peck",
      "Mary Badham"
    ],
    "director": "Robert Mulligan",
    "tagline": "The most beloved Pulitzer Prize book now comes vividly alive on the screen!",
    "isTarget": true
  },
  {
    "id": 386,
    "title": "The Magnificent Seven",
    "year": 1960,
    "composers": [
      "Elmer Bernstein"
    ],
    "genres": [
      "Western",
      "Action"
    ],
    "source": "Remake / Reboot",
    "actors": [
      "Yul Brynner",
      "Steve McQueen"
    ],
    "director": "John Sturges",
    "tagline": "They were seven... and they fought like seven hundred!",
    "isTarget": true
  },
  {
    "id": 387,
    "title": "The Great Escape",
    "year": 1963,
    "composers": [
      "Elmer Bernstein"
    ],
    "genres": [
      "War",
      "Adventure"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Steve McQueen",
      "James Garner"
    ],
    "director": "John Sturges",
    "tagline": "Put a fence in front of these men... and they'll climb it!",
    "isTarget": true
  },
  {
    "id": 388,
    "title": "Airplane!",
    "year": 1980,
    "composers": [
      "Elmer Bernstein"
    ],
    "genres": [
      "Comedy",
      "Action"
    ],
    "source": "Remake / Reboot",
    "actors": [
      "Robert Hays",
      "Julie Hagerty"
    ],
    "director": "Jim Abrahams & David Zucker",
    "tagline": "Thank God it's only a motion picture!",
    "isTarget": true
  },
  {
    "id": 389,
    "title": "Ghostbusters",
    "year": 1984,
    "composers": [
      "Elmer Bernstein"
    ],
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Bill Murray",
      "Dan Aykroyd"
    ],
    "director": "Ivan Reitman",
    "tagline": "Who ya gonna call?",
    "isTarget": true
  },
  {
    "id": 390,
    "title": "My Left Foot",
    "year": 1989,
    "composers": [
      "Elmer Bernstein"
    ],
    "genres": [
      "Biography",
      "Drama"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Daniel Day-Lewis",
      "Brenda Fricker"
    ],
    "director": "Jim Sheridan",
    "tagline": "Christy Brown was born with cerebral palsy.",
    "isTarget": true
  },
  {
    "id": 391,
    "title": "The Age of Innocence",
    "year": 1993,
    "composers": [
      "Elmer Bernstein"
    ],
    "genres": [
      "Romance",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Daniel Day-Lewis",
      "Michelle Pfeiffer"
    ],
    "director": "Martin Scorsese",
    "tagline": "In a world of tradition, in an age of innocence, they dared to break the rules.",
    "isTarget": true
  },
  {
    "id": 392,
    "title": "Cape Fear",
    "year": 1991,
    "composers": [
      "Bernard Herrmann",
      "Elmer Bernstein"
    ],
    "genres": [
      "Thriller",
      "Crime"
    ],
    "source": "Remake / Reboot",
    "actors": [
      "Robert De Niro",
      "Nick Nolte"
    ],
    "director": "Martin Scorsese",
    "tagline": "Max Cady is back.",
    "isTarget": true
  },
  {
    "id": 393,
    "title": "Breakfast at Tiffany's",
    "year": 1961,
    "composers": [
      "Henry Mancini"
    ],
    "genres": [
      "Romance",
      "Comedy"
    ],
    "source": "Short Story / Novella",
    "actors": [
      "Audrey Hepburn",
      "George Peppard"
    ],
    "director": "Blake Edwards",
    "tagline": "Audrey Hepburn plays that daring, darling Holly Golightly!",
    "isTarget": true
  },
  {
    "id": 394,
    "title": "Charade",
    "year": 1963,
    "composers": [
      "Henry Mancini"
    ],
    "genres": [
      "Mystery",
      "Romance"
    ],
    "source": "Short Story / Novella",
    "actors": [
      "Cary Grant",
      "Audrey Hepburn"
    ],
    "director": "Stanley Donen",
    "tagline": "Expect the unexpected!",
    "isTarget": true
  },
  {
    "id": 395,
    "title": "The Pink Panther",
    "year": 1963,
    "composers": [
      "Henry Mancini"
    ],
    "genres": [
      "Comedy",
      "Crime"
    ],
    "source": "Original Screenplay",
    "actors": [
      "David Niven",
      "Peter Sellers"
    ],
    "director": "Blake Edwards",
    "tagline": "It's the greatest parlor game in the world!",
    "isTarget": true
  },
  {
    "id": 396,
    "title": "Butch Cassidy and the Sundance Kid",
    "year": 1969,
    "composers": [
      "Burt Bacharach"
    ],
    "genres": [
      "Western",
      "Biography"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Paul Newman",
      "Robert Redford"
    ],
    "director": "George Roy Hill",
    "tagline": "Not that it matters, but most of it is true.",
    "isTarget": true
  },
  {
    "id": 397,
    "title": "The Sting",
    "year": 1973,
    "composers": [
      "Marvin Hamlisch"
    ],
    "genres": [
      "Crime",
      "Comedy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Paul Newman",
      "Robert Redford"
    ],
    "director": "George Roy Hill",
    "tagline": "...all it takes is a little Confidence.",
    "isTarget": true
  },
  {
    "id": 398,
    "title": "The Graduate",
    "year": 1967,
    "composers": [
      "Dave Grusin",
      "Paul Simon"
    ],
    "genres": [
      "Comedy",
      "Romance"
    ],
    "source": "Novel / Book",
    "actors": [
      "Dustin Hoffman",
      "Anne Bancroft"
    ],
    "director": "Mike Nichols",
    "tagline": "This is Benjamin. He's a little worried about his future.",
    "isTarget": true
  },
  {
    "id": 399,
    "title": "One Flew Over the Cuckoo's Nest",
    "year": 1975,
    "composers": [
      "Jack Nitzsche"
    ],
    "genres": [
      "Drama",
      "Comedy"
    ],
    "source": "Novel / Book",
    "actors": [
      "Jack Nicholson",
      "Louise Fletcher"
    ],
    "director": "Miloš Forman",
    "tagline": "If he's crazy, what does that make you?",
    "isTarget": true
  },
  {
    "id": 400,
    "title": "Amadeus",
    "year": 1984,
    "composers": [
      "Various Artists"
    ],
    "genres": [
      "Biography",
      "History"
    ],
    "source": "Stage Play / Musical",
    "actors": [
      "F. Murray Abraham",
      "Tom Hulce"
    ],
    "director": "Miloš Forman",
    "tagline": "Everything you've heard is true.",
    "isTarget": true
  },
  {
    "id": 401,
    "title": "The Deer Hunter",
    "year": 1978,
    "composers": [
      "Stanley Myers"
    ],
    "genres": [
      "War",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Robert De Niro",
      "Christopher Walken"
    ],
    "director": "Michael Cimino",
    "tagline": "One of the most important motion pictures of our time.",
    "isTarget": true
  },
  {
    "id": 402,
    "title": "Platoon",
    "year": 1986,
    "composers": [
      "Georges Delerue"
    ],
    "genres": [
      "War",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Charlie Sheen",
      "Tom Berenger"
    ],
    "director": "Oliver Stone",
    "tagline": "The first casualty of war is innocence.",
    "isTarget": true
  },
  {
    "id": 403,
    "title": "Raging Bull",
    "year": 1980,
    "composers": [
      "Various Artists"
    ],
    "genres": [
      "Biography",
      "Drama"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Robert De Niro",
      "Cathy Moriarty"
    ],
    "director": "Martin Scorsese",
    "tagline": "In the ring he was a champ. Outside he was just another contender.",
    "isTarget": true
  },
  {
    "id": 404,
    "title": "Casino",
    "year": 1995,
    "composers": [
      "Various Artists"
    ],
    "genres": [
      "Crime",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Robert De Niro",
      "Sharon Stone"
    ],
    "director": "Martin Scorsese",
    "tagline": "No one stays at the top forever.",
    "isTarget": true
  },
  {
    "id": 405,
    "title": "Shutter Island",
    "year": 2010,
    "composers": [
      "Various Artists"
    ],
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Leonardo DiCaprio",
      "Mark Ruffalo"
    ],
    "director": "Martin Scorsese",
    "tagline": "Some places never let you go.",
    "isTarget": true
  },
  {
    "id": 406,
    "title": "Killers of the Flower Moon",
    "year": 2023,
    "composers": [
      "Robbie Robertson"
    ],
    "genres": [
      "Crime",
      "History"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Leonardo DiCaprio",
      "Robert De Niro"
    ],
    "director": "Martin Scorsese",
    "tagline": "Greed is an animal that hungers for blood.",
    "isTarget": true
  },
  {
    "id": 407,
    "title": "The Irishman",
    "year": 2019,
    "composers": [
      "Robbie Robertson"
    ],
    "genres": [
      "Crime",
      "Biography"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Robert De Niro",
      "Al Pacino"
    ],
    "director": "Martin Scorsese",
    "tagline": "I heard you paint houses.",
    "isTarget": true
  },
  {
    "id": 408,
    "title": "Scarface",
    "year": 1983,
    "composers": [
      "Giorgio Moroder"
    ],
    "genres": [
      "Crime",
      "Drama"
    ],
    "source": "Remake / Reboot",
    "actors": [
      "Al Pacino",
      "Michelle Pfeiffer"
    ],
    "director": "Brian De Palma",
    "tagline": "The world is yours.",
    "isTarget": true
  },
  {
    "id": 409,
    "title": "Heat",
    "year": 1995,
    "composers": [
      "Elliot Goldenthal"
    ],
    "genres": [
      "Crime",
      "Thriller"
    ],
    "source": "Remake / Reboot",
    "actors": [
      "Al Pacino",
      "Robert De Niro"
    ],
    "director": "Michael Mann",
    "tagline": "A Los Angeles crime saga.",
    "isTarget": true
  },
  {
    "id": 410,
    "title": "Interview with the Vampire",
    "year": 1994,
    "composers": [
      "Elliot Goldenthal"
    ],
    "genres": [
      "Horror",
      "Fantasy"
    ],
    "source": "Novel / Book",
    "actors": [
      "Tom Cruise",
      "Brad Pitt"
    ],
    "director": "Neil Jordan",
    "tagline": "Drink from me and live forever.",
    "isTarget": true
  },
  {
    "id": 411,
    "title": "Frida",
    "year": 2002,
    "composers": [
      "Elliot Goldenthal"
    ],
    "genres": [
      "Biography",
      "Romance"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Salma Hayek",
      "Alfred Molina"
    ],
    "director": "Julie Taymor",
    "tagline": "Prepare to be seduced.",
    "isTarget": true
  },
  {
    "id": 412,
    "title": "The Last of the Mohicans",
    "year": 1992,
    "composers": [
      "Trevor Jones",
      "Randy Edelman"
    ],
    "genres": [
      "Adventure",
      "History"
    ],
    "source": "Novel / Book",
    "actors": [
      "Daniel Day-Lewis",
      "Madeleine Stowe"
    ],
    "director": "Michael Mann",
    "tagline": "The first American hero.",
    "isTarget": true
  },
  {
    "id": 413,
    "title": "Collateral",
    "year": 2004,
    "composers": [
      "James Newton Howard"
    ],
    "genres": [
      "Crime",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Tom Cruise",
      "Jamie Foxx"
    ],
    "director": "Michael Mann",
    "tagline": "It started like any other night.",
    "isTarget": true
  },
  {
    "id": 414,
    "title": "The Usual Suspects",
    "year": 1995,
    "composers": [
      "John Ottman"
    ],
    "genres": [
      "Crime",
      "Mystery"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Kevin Spacey",
      "Gabriel Byrne"
    ],
    "director": "Bryan Singer",
    "tagline": "Five Criminals. One Line Up. No Coincidence.",
    "isTarget": true
  },
  {
    "id": 415,
    "title": "Bohemian Rhapsody",
    "year": 2018,
    "composers": [
      "John Ottman"
    ],
    "genres": [
      "Biography",
      "Musical"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Rami Malek",
      "Lucy Boynton"
    ],
    "director": "Bryan Singer",
    "tagline": "Fearless lives forever.",
    "isTarget": true
  },
  {
    "id": 416,
    "title": "X2: X-Men United",
    "year": 2003,
    "composers": [
      "John Ottman"
    ],
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Hugh Jackman",
      "Patrick Stewart"
    ],
    "director": "Bryan Singer",
    "tagline": "The time has come for those who are different to stand united.",
    "isTarget": true
  },
  {
    "id": 417,
    "title": "Memento",
    "year": 2000,
    "composers": [
      "David Julyan"
    ],
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "source": "Short Story / Novella",
    "actors": [
      "Guy Pearce",
      "Carrie-Anne Moss"
    ],
    "director": "Christopher Nolan",
    "tagline": "Some memories are best forgotten.",
    "isTarget": true
  },
  {
    "id": 418,
    "title": "The Prestige",
    "year": 2006,
    "composers": [
      "David Julyan"
    ],
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Hugh Jackman",
      "Christian Bale"
    ],
    "director": "Christopher Nolan",
    "tagline": "Are you watching closely?",
    "isTarget": true
  },
  {
    "id": 419,
    "title": "Insomnia",
    "year": 2002,
    "composers": [
      "David Julyan"
    ],
    "genres": [
      "Crime",
      "Mystery"
    ],
    "source": "Remake / Reboot",
    "actors": [
      "Al Pacino",
      "Robin Williams"
    ],
    "director": "Christopher Nolan",
    "tagline": "A tough cop. A brilliant killer. An unspeakable crime.",
    "isTarget": true
  },
  {
    "id": 420,
    "title": "Donnie Darko",
    "year": 2001,
    "composers": [
      "Michael Andrews"
    ],
    "genres": [
      "Sci-Fi",
      "Mystery"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Jake Gyllenhaal",
      "Jena Malone"
    ],
    "director": "Richard Kelly",
    "tagline": "28 days, 6 hours, 42 minutes, 12 seconds. That is when the world will end.",
    "isTarget": true
  },
  {
    "id": 421,
    "title": "Drive",
    "year": 2011,
    "composers": [
      "Cliff Martinez"
    ],
    "genres": [
      "Crime",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Ryan Gosling",
      "Carey Mulligan"
    ],
    "director": "Nicolas Winding Refn",
    "tagline": "There are no clean getaways.",
    "isTarget": true
  },
  {
    "id": 422,
    "title": "Traffic",
    "year": 2000,
    "composers": [
      "Cliff Martinez"
    ],
    "genres": [
      "Crime",
      "Drama"
    ],
    "source": "Remake / Reboot",
    "actors": [
      "Michael Douglas",
      "Benicio del Toro"
    ],
    "director": "Steven Soderbergh",
    "tagline": "No one gets away clean.",
    "isTarget": true
  },
  {
    "id": 423,
    "title": "Ocean's Eleven",
    "year": 2001,
    "composers": [
      "David Holmes"
    ],
    "genres": [
      "Crime",
      "Comedy"
    ],
    "source": "Remake / Reboot",
    "actors": [
      "George Clooney",
      "Brad Pitt"
    ],
    "director": "Steven Soderbergh",
    "tagline": "Are you in or out?",
    "isTarget": true
  },
  {
    "id": 424,
    "title": "Snatch",
    "year": 2000,
    "composers": [
      "John Murphy"
    ],
    "genres": [
      "Crime",
      "Comedy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Jason Statham",
      "Brad Pitt"
    ],
    "director": "Guy Ritchie",
    "tagline": "Stealin' stones and breakin' bones.",
    "isTarget": true
  },
  {
    "id": 425,
    "title": "28 Days Later",
    "year": 2002,
    "composers": [
      "John Murphy"
    ],
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Cillian Murphy",
      "Naomie Harris"
    ],
    "director": "Danny Boyle",
    "tagline": "His fear began when he woke up alone.",
    "isTarget": true
  },
  {
    "id": 426,
    "title": "Sunshine",
    "year": 2007,
    "composers": [
      "John Murphy"
    ],
    "genres": [
      "Sci-Fi",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Cillian Murphy",
      "Chris Evans"
    ],
    "director": "Danny Boyle",
    "tagline": "If the sun dies, so do we.",
    "isTarget": true
  },
  {
    "id": 427,
    "title": "Slumdog Millionaire",
    "year": 2008,
    "composers": [
      "A. R. Rahman"
    ],
    "genres": [
      "Drama",
      "Romance"
    ],
    "source": "Novel / Book",
    "actors": [
      "Dev Patel",
      "Freida Pinto"
    ],
    "director": "Danny Boyle",
    "tagline": "What does it take to find a lost love?",
    "isTarget": true
  },
  {
    "id": 428,
    "title": "127 Hours",
    "year": 2010,
    "composers": [
      "A. R. Rahman"
    ],
    "genres": [
      "Biography",
      "Adventure"
    ],
    "source": "True Story / Biography",
    "actors": [
      "James Franco",
      "Kate Mara"
    ],
    "director": "Danny Boyle",
    "tagline": "There is no force more powerful than the will to live.",
    "isTarget": true
  },
  {
    "id": 429,
    "title": "Trainspotting",
    "year": 1996,
    "composers": [
      "Various Artists"
    ],
    "genres": [
      "Drama",
      "Comedy"
    ],
    "source": "Novel / Book",
    "actors": [
      "Ewan McGregor",
      "Robert Carlyle"
    ],
    "director": "Danny Boyle",
    "tagline": "Choose life.",
    "isTarget": true
  },
  {
    "id": 430,
    "title": "Amélie",
    "year": 2001,
    "composers": [
      "Yann Tiersen"
    ],
    "genres": [
      "Romance",
      "Comedy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Audrey Tautou",
      "Mathieu Kassovitz"
    ],
    "director": "Jean-Pierre Jeunet",
    "tagline": "She'll change your life.",
    "isTarget": true
  },
  {
    "id": 431,
    "title": "Pan's Labyrinth",
    "year": 2006,
    "composers": [
      "Javier Navarrete"
    ],
    "genres": [
      "Fantasy",
      "War"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Ivana Baquero",
      "Sergi López"
    ],
    "director": "Guillermo del Toro",
    "tagline": "Innocence has a power evil cannot imagine.",
    "isTarget": true
  },
  {
    "id": 432,
    "title": "Crouching Tiger, Hidden Dragon",
    "year": 2000,
    "composers": [
      "Tan Dun"
    ],
    "genres": [
      "Action",
      "Romance"
    ],
    "source": "Novel / Book",
    "actors": [
      "Chow Yun-fat",
      "Michelle Yeoh"
    ],
    "director": "Ang Lee",
    "tagline": "A timeless story of strength, secrets and two warriors.",
    "isTarget": true
  },
  {
    "id": 433,
    "title": "Life of Pi",
    "year": 2012,
    "composers": [
      "Mychael Danna"
    ],
    "genres": [
      "Adventure",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Suraj Sharma",
      "Irrfan Khan"
    ],
    "director": "Ang Lee",
    "tagline": "Believe the unbelievable.",
    "isTarget": true
  },
  {
    "id": 434,
    "title": "Little Miss Sunshine",
    "year": 2006,
    "composers": [
      "Mychael Danna",
      "DeVotchKa"
    ],
    "genres": [
      "Comedy",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Steve Carell",
      "Toni Collette"
    ],
    "director": "Jonathan Dayton & Valerie Faris",
    "tagline": "A family on the verge of a breakdown.",
    "isTarget": true
  },
  {
    "id": 435,
    "title": "Moneyball",
    "year": 2011,
    "composers": [
      "Mychael Danna"
    ],
    "genres": [
      "Biography",
      "Drama"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Brad Pitt",
      "Jonah Hill"
    ],
    "director": "Bennett Miller",
    "tagline": "What are you really worth?",
    "isTarget": true
  },
  {
    "id": 436,
    "title": "The Lord of the Rings",
    "year": 1978,
    "composers": [
      "Leonard Rosenman"
    ],
    "genres": [
      "Animation",
      "Fantasy"
    ],
    "source": "Novel / Book",
    "actors": [
      "Christopher Guard",
      "William Squire"
    ],
    "director": "Ralph Bakshi",
    "tagline": "Fantasy... beyond your imagination.",
    "isTarget": true
  },
  {
    "id": 437,
    "title": "Her",
    "year": 2013,
    "composers": [
      "Arcade Fire",
      "Owen Pallett"
    ],
    "genres": [
      "Romance",
      "Sci-Fi"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Joaquin Phoenix",
      "Scarlett Johansson"
    ],
    "director": "Spike Jonze",
    "tagline": "A Spike Jonze love story.",
    "isTarget": true
  },
  {
    "id": 438,
    "title": "Being John Malkovich",
    "year": 1999,
    "composers": [
      "Carter Burwell"
    ],
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "John Cusack",
      "Cameron Diaz"
    ],
    "director": "Spike Jonze",
    "tagline": "Ever wanted to be someone else?",
    "isTarget": true
  },
  {
    "id": 439,
    "title": "Adaptation",
    "year": 2002,
    "composers": [
      "Carter Burwell"
    ],
    "genres": [
      "Comedy",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Nicolas Cage",
      "Meryl Streep"
    ],
    "director": "Spike Jonze",
    "tagline": "Charlie Kaufman writes the way he lives... with great difficulty.",
    "isTarget": true
  },
  {
    "id": 440,
    "title": "True Grit",
    "year": 2010,
    "composers": [
      "Carter Burwell"
    ],
    "genres": [
      "Western",
      "Adventure"
    ],
    "source": "Novel / Book",
    "actors": [
      "Jeff Bridges",
      "Hailee Steinfeld"
    ],
    "director": "Joel & Ethan Coen",
    "tagline": "Punishment comes one way or another.",
    "isTarget": true
  },
  {
    "id": 441,
    "title": "Burn After Reading",
    "year": 2008,
    "composers": [
      "Carter Burwell"
    ],
    "genres": [
      "Comedy",
      "Crime"
    ],
    "source": "Original Screenplay",
    "actors": [
      "George Clooney",
      "Frances McDormand"
    ],
    "director": "Joel & Ethan Coen",
    "tagline": "Intelligence is relative.",
    "isTarget": true
  },
  {
    "id": 442,
    "title": "Carol",
    "year": 2015,
    "composers": [
      "Carter Burwell"
    ],
    "genres": [
      "Romance",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Cate Blanchett",
      "Rooney Mara"
    ],
    "director": "Todd Haynes",
    "tagline": "Some people change your life forever.",
    "isTarget": true
  },
  {
    "id": 443,
    "title": "Twilight",
    "year": 2008,
    "composers": [
      "Carter Burwell"
    ],
    "genres": [
      "Romance",
      "Fantasy"
    ],
    "source": "Novel / Book",
    "actors": [
      "Kristen Stewart",
      "Robert Pattinson"
    ],
    "director": "Catherine Hardwicke",
    "tagline": "When you can live forever, what do you live for?",
    "isTarget": true
  },
  {
    "id": 444,
    "title": "O Brother, Where Art Thou?",
    "year": 2000,
    "composers": [
      "T Bone Burnett"
    ],
    "genres": [
      "Comedy",
      "Adventure"
    ],
    "source": "Fairy Tale / Folklore",
    "actors": [
      "George Clooney",
      "John Turturro"
    ],
    "director": "Joel & Ethan Coen",
    "tagline": "They have a plan...",
    "isTarget": true
  },
  {
    "id": 445,
    "title": "Inside Llewyn Davis",
    "year": 2013,
    "composers": [
      "T Bone Burnett"
    ],
    "genres": [
      "Drama",
      "Musical"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Oscar Isaac",
      "Carey Mulligan"
    ],
    "director": "Joel & Ethan Coen",
    "tagline": "If it was never new, and it never gets old, then it's a folk song.",
    "isTarget": true
  },
  {
    "id": 446,
    "title": "Walk the Line",
    "year": 2005,
    "composers": [
      "T Bone Burnett"
    ],
    "genres": [
      "Biography",
      "Musical"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Joaquin Phoenix",
      "Reese Witherspoon"
    ],
    "director": "James Mangold",
    "tagline": "Love is a burning thing.",
    "isTarget": true
  },
  {
    "id": 447,
    "title": "The English Patient",
    "year": 1996,
    "composers": [
      "Gabriel Yared"
    ],
    "genres": [
      "Romance",
      "War"
    ],
    "source": "Novel / Book",
    "actors": [
      "Ralph Fiennes",
      "Juliette Binoche"
    ],
    "director": "Anthony Minghella",
    "tagline": "In memory, love lives forever.",
    "isTarget": true
  },
  {
    "id": 448,
    "title": "The Talented Mr. Ripley",
    "year": 1999,
    "composers": [
      "Gabriel Yared"
    ],
    "genres": [
      "Thriller",
      "Crime"
    ],
    "source": "Novel / Book",
    "actors": [
      "Matt Damon",
      "Jude Law"
    ],
    "director": "Anthony Minghella",
    "tagline": "How far would you go to become someone else?",
    "isTarget": true
  },
  {
    "id": 449,
    "title": "Cold Mountain",
    "year": 2003,
    "composers": [
      "Gabriel Yared"
    ],
    "genres": [
      "War",
      "Romance"
    ],
    "source": "Novel / Book",
    "actors": [
      "Jude Law",
      "Nicole Kidman"
    ],
    "director": "Anthony Minghella",
    "tagline": "Find the strength to come home.",
    "isTarget": true
  },
  {
    "id": 450,
    "title": "The Piano",
    "year": 1993,
    "composers": [
      "Michael Nyman"
    ],
    "genres": [
      "Romance",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Holly Hunter",
      "Harvey Keitel"
    ],
    "director": "Jane Campion",
    "tagline": "Music is her voice.",
    "isTarget": true
  },
  {
    "id": 451,
    "title": "Gattaca",
    "year": 1997,
    "composers": [
      "Michael Nyman"
    ],
    "genres": [
      "Sci-Fi",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Ethan Hawke",
      "Uma Thurman"
    ],
    "director": "Andrew Niccol",
    "tagline": "There is no gene for the human spirit.",
    "isTarget": true
  },
  {
    "id": 452,
    "title": "Ex Machina",
    "year": 2014,
    "composers": [
      "Ben Salisbury",
      "Geoff Barrow"
    ],
    "genres": [
      "Sci-Fi",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Domhnall Gleeson",
      "Alicia Vikander"
    ],
    "director": "Alex Garland",
    "tagline": "There is nothing more human than the will to survive.",
    "isTarget": true
  },
  {
    "id": 453,
    "title": "Annihilation",
    "year": 2018,
    "composers": [
      "Ben Salisbury",
      "Geoff Barrow"
    ],
    "genres": [
      "Sci-Fi",
      "Horror"
    ],
    "source": "Novel / Book",
    "actors": [
      "Natalie Portman",
      "Jennifer Jason Leigh"
    ],
    "director": "Alex Garland",
    "tagline": "Fear what's inside.",
    "isTarget": true
  },
  {
    "id": 454,
    "title": "Hereditary",
    "year": 2018,
    "composers": [
      "Colin Stetson"
    ],
    "genres": [
      "Horror",
      "Mystery"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Toni Collette",
      "Alex Wolff"
    ],
    "director": "Ari Aster",
    "tagline": "Every family tree hides a secret.",
    "isTarget": true
  },
  {
    "id": 455,
    "title": "Midsommar",
    "year": 2019,
    "composers": [
      "The Haxan Cloak"
    ],
    "genres": [
      "Horror",
      "Mystery"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Florence Pugh",
      "Jack Reynor"
    ],
    "director": "Ari Aster",
    "tagline": "Let the festivities begin.",
    "isTarget": true
  },
  {
    "id": 456,
    "title": "The Witch",
    "year": 2015,
    "composers": [
      "Mark Korven"
    ],
    "genres": [
      "Horror",
      "Mystery"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Anya Taylor-Joy",
      "Ralph Ineson"
    ],
    "director": "Robert Eggers",
    "tagline": "A New-England Folktale.",
    "isTarget": true
  },
  {
    "id": 457,
    "title": "The Lighthouse",
    "year": 2019,
    "composers": [
      "Mark Korven"
    ],
    "genres": [
      "Horror",
      "Fantasy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Robert Pattinson",
      "Willem Dafoe"
    ],
    "director": "Robert Eggers",
    "tagline": "There is enchantment in the light.",
    "isTarget": true
  },
  {
    "id": 458,
    "title": "It Follows",
    "year": 2014,
    "composers": [
      "Disasterpeace"
    ],
    "genres": [
      "Horror",
      "Mystery"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Maika Monroe",
      "Keir Gilchrist"
    ],
    "director": "David Robert Mitchell",
    "tagline": "It doesn't think. It doesn't feel. It doesn't give up.",
    "isTarget": true
  },
  {
    "id": 459,
    "title": "Uncut Gems",
    "year": 2019,
    "composers": [
      "Daniel Lopatin"
    ],
    "genres": [
      "Crime",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Adam Sandler",
      "Julia Fox"
    ],
    "director": "Josh & Benny Safdie",
    "tagline": "This is how I win.",
    "isTarget": true
  },
  {
    "id": 460,
    "title": "Good Time",
    "year": 2017,
    "composers": [
      "Daniel Lopatin"
    ],
    "genres": [
      "Crime",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Robert Pattinson",
      "Benny Safdie"
    ],
    "director": "Josh & Benny Safdie",
    "tagline": "Are you ready for a good time?",
    "isTarget": true
  },
  {
    "id": 461,
    "title": "Under the Skin",
    "year": 2013,
    "composers": [
      "Mica Levi"
    ],
    "genres": [
      "Sci-Fi",
      "Horror"
    ],
    "source": "Novel / Book",
    "actors": [
      "Scarlett Johansson",
      "Jeremy McWilliams"
    ],
    "director": "Jonathan Glazer",
    "tagline": "Look deeper.",
    "isTarget": true
  },
  {
    "id": 462,
    "title": "Jackie",
    "year": 2016,
    "composers": [
      "Mica Levi"
    ],
    "genres": [
      "Biography",
      "History"
    ],
    "source": "True Story / Biography",
    "actors": [
      "Natalie Portman",
      "Peter Sarsgaard"
    ],
    "director": "Pablo Larraín",
    "tagline": "Forever becomes a myth.",
    "isTarget": true
  },
  {
    "id": 463,
    "title": "The Zone of Interest",
    "year": 2023,
    "composers": [
      "Mica Levi"
    ],
    "genres": [
      "History",
      "War"
    ],
    "source": "Novel / Book",
    "actors": [
      "Christian Friedel",
      "Sandra Hüller"
    ],
    "director": "Jonathan Glazer",
    "tagline": "Look closely.",
    "isTarget": true
  },
  {
    "id": 464,
    "title": "Anatomy of a Fall",
    "year": 2023,
    "composers": [
      "Various Artists"
    ],
    "genres": [
      "Mystery",
      "Crime"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Sandra Hüller",
      "Swann Arlaud"
    ],
    "director": "Justine Triet",
    "tagline": "Did she do it?",
    "isTarget": true
  },
  {
    "id": 465,
    "title": "Past Lives",
    "year": 2023,
    "composers": [
      "Christopher Bear",
      "Daniel Rossen"
    ],
    "genres": [
      "Romance",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Greta Lee",
      "Teo Yoo"
    ],
    "director": "Celine Song",
    "tagline": "Destiny. Love. Everything in between.",
    "isTarget": true
  },
  {
    "id": 466,
    "title": "The Holdovers",
    "year": 2023,
    "composers": [
      "Mark Orton"
    ],
    "genres": [
      "Comedy",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Paul Giamatti",
      "Da'Vine Joy Randolph"
    ],
    "director": "Alexander Payne",
    "tagline": "Discomfort and joy.",
    "isTarget": true
  },
  {
    "id": 467,
    "title": "Sideways",
    "year": 2004,
    "composers": [
      "Rolfe Kent"
    ],
    "genres": [
      "Comedy",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Paul Giamatti",
      "Thomas Haden Church"
    ],
    "director": "Alexander Payne",
    "tagline": "In search of wine. In search of women.",
    "isTarget": true
  },
  {
    "id": 468,
    "title": "Election",
    "year": 1999,
    "composers": [
      "Rolfe Kent"
    ],
    "genres": [
      "Comedy",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Matthew Broderick",
      "Reese Witherspoon"
    ],
    "director": "Alexander Payne",
    "tagline": "Some people will do anything to win.",
    "isTarget": true
  },
  {
    "id": 469,
    "title": "Mean Girls",
    "year": 2004,
    "composers": [
      "Rolfe Kent"
    ],
    "genres": [
      "Comedy",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Lindsay Lohan",
      "Rachel McAdams"
    ],
    "director": "Mark Waters",
    "tagline": "Watch your back.",
    "isTarget": true
  },
  {
    "id": 470,
    "title": "Legally Blonde",
    "year": 2001,
    "composers": [
      "Rolfe Kent"
    ],
    "genres": [
      "Comedy",
      "Romance"
    ],
    "source": "Novel / Book",
    "actors": [
      "Reese Witherspoon",
      "Luke Wilson"
    ],
    "director": "Robert Luketic",
    "tagline": " Blonde Ambition.",
    "isTarget": true
  },
  {
    "id": 471,
    "title": "The Devil Wears Prada",
    "year": 2006,
    "composers": [
      "Theodore Shapiro"
    ],
    "genres": [
      "Comedy",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Meryl Streep",
      "Anne Hathaway"
    ],
    "director": "David Frankel",
    "tagline": "Hell on heels.",
    "isTarget": true
  },
  {
    "id": 472,
    "title": "Tropic Thunder",
    "year": 2008,
    "composers": [
      "Theodore Shapiro"
    ],
    "genres": [
      "Comedy",
      "Action"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Ben Stiller",
      "Robert Downey Jr."
    ],
    "director": "Ben Stiller",
    "tagline": "The movie they think they're making... isn't a movie anymore.",
    "isTarget": true
  },
  {
    "id": 473,
    "title": "Groundhog Day",
    "year": 1993,
    "composers": [
      "George Fenton"
    ],
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Bill Murray",
      "Andie MacDowell"
    ],
    "director": "Harold Ramis",
    "tagline": "He's having the worst day of his life... over, and over...",
    "isTarget": true
  },
  {
    "id": 474,
    "title": "Ferris Bueller's Day Off",
    "year": 1986,
    "composers": [
      "Ira Newborn"
    ],
    "genres": [
      "Comedy",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Matthew Broderick",
      "Alan Ruck"
    ],
    "director": "John Hughes",
    "tagline": "One man's struggle to take it easy.",
    "isTarget": true
  },
  {
    "id": 475,
    "title": "The Breakfast Club",
    "year": 1985,
    "composers": [
      "Keith Forsey"
    ],
    "genres": [
      "Comedy",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Emilio Estevez",
      "Molly Ringwald"
    ],
    "director": "John Hughes",
    "tagline": "They only met once, but it changed their lives forever.",
    "isTarget": true
  },
  {
    "id": 476,
    "title": "Clueless",
    "year": 1995,
    "composers": [
      "David Kitay"
    ],
    "genres": [
      "Comedy",
      "Romance"
    ],
    "source": "Novel / Book",
    "actors": [
      "Alicia Silverstone",
      "Paul Rudd"
    ],
    "director": "Amy Heckerling",
    "tagline": "Sex. Clothes. Popularity. Is there a problem here?",
    "isTarget": true
  },
  {
    "id": 477,
    "title": "10 Things I Hate About You",
    "year": 1999,
    "composers": [
      "Richard Gibbs"
    ],
    "genres": [
      "Comedy",
      "Romance"
    ],
    "source": "Stage Play / Musical",
    "actors": [
      "Heath Ledger",
      "Julia Stiles"
    ],
    "director": "Gil Junger",
    "tagline": "How do I loathe thee? Let me count the ways.",
    "isTarget": true
  },
  {
    "id": 478,
    "title": "The Princess Bride",
    "year": 1987,
    "composers": [
      "Mark Knopfler"
    ],
    "genres": [
      "Adventure",
      "Romance"
    ],
    "source": "Novel / Book",
    "actors": [
      "Cary Elwes",
      "Robin Wright"
    ],
    "director": "Rob Reiner",
    "tagline": "She's been kidnapped. He's come to save her.",
    "isTarget": true
  },
  {
    "id": 479,
    "title": "Stand by Me",
    "year": 1986,
    "composers": [
      "Jack Nitzsche"
    ],
    "genres": [
      "Drama",
      "Adventure"
    ],
    "source": "Short Story / Novella",
    "actors": [
      "Wil Wheaton",
      "River Phoenix"
    ],
    "director": "Rob Reiner",
    "tagline": "For some, it's the last real taste of innocence.",
    "isTarget": true
  },
  {
    "id": 480,
    "title": "When Harry Met Sally...",
    "year": 1989,
    "composers": [
      "Marc Shaiman"
    ],
    "genres": [
      "Comedy",
      "Romance"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Billy Crystal",
      "Meg Ryan"
    ],
    "director": "Rob Reiner",
    "tagline": "Can two friends sleep together and still love each other in the morning?",
    "isTarget": true
  },
  {
    "id": 481,
    "title": "Misery",
    "year": 1990,
    "composers": [
      "Marc Shaiman"
    ],
    "genres": [
      "Thriller",
      "Horror"
    ],
    "source": "Novel / Book",
    "actors": [
      "James Caan",
      "Kathy Bates"
    ],
    "director": "Rob Reiner",
    "tagline": "Paul Sheldon used to write for a living. Now, he's writing to stay alive.",
    "isTarget": true
  },
  {
    "id": 482,
    "title": "A Few Good Men",
    "year": 1992,
    "composers": [
      "Marc Shaiman"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Stage Play / Musical",
    "actors": [
      "Tom Cruise",
      "Jack Nicholson"
    ],
    "director": "Rob Reiner",
    "tagline": "You can't handle the truth!",
    "isTarget": true
  },
  {
    "id": 483,
    "title": "Sleepless in Seattle",
    "year": 1993,
    "composers": [
      "Marc Shaiman"
    ],
    "genres": [
      "Romance",
      "Comedy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Tom Hanks",
      "Meg Ryan"
    ],
    "director": "Nora Ephron",
    "tagline": "What if someone you never met, someone you never saw, was the only someone for you?",
    "isTarget": true
  },
  {
    "id": 484,
    "title": "Notting Hill",
    "year": 1999,
    "composers": [
      "Trevor Jones"
    ],
    "genres": [
      "Romance",
      "Comedy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Julia Roberts",
      "Hugh Grant"
    ],
    "director": "Roger Michell",
    "tagline": "Can the most famous film star in the world fall for the man on the street?",
    "isTarget": true
  },
  {
    "id": 485,
    "title": "Love Actually",
    "year": 2003,
    "composers": [
      "Craig Armstrong"
    ],
    "genres": [
      "Romance",
      "Comedy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Hugh Grant",
      "Liam Neeson"
    ],
    "director": "Richard Curtis",
    "tagline": "The ultimate romantic comedy.",
    "isTarget": true
  },
  {
    "id": 486,
    "title": "Moulin Rouge!",
    "year": 2001,
    "composers": [
      "Craig Armstrong"
    ],
    "genres": [
      "Musical",
      "Romance"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Nicole Kidman",
      "Ewan McGregor"
    ],
    "director": "Baz Luhrmann",
    "tagline": "Truth. Beauty. Freedom. Love.",
    "isTarget": true
  },
  {
    "id": 487,
    "title": "Romeo + Juliet",
    "year": 1996,
    "composers": [
      "Nellee Hooper",
      "Craig Armstrong"
    ],
    "genres": [
      "Romance",
      "Drama"
    ],
    "source": "Stage Play / Musical",
    "actors": [
      "Leonardo DiCaprio",
      "Claire Danes"
    ],
    "director": "Baz Luhrmann",
    "tagline": "My only love sprung from my only hate.",
    "isTarget": true
  },
  {
    "id": 488,
    "title": "The Great Gatsby",
    "year": 2013,
    "composers": [
      "Craig Armstrong"
    ],
    "genres": [
      "Drama",
      "Romance"
    ],
    "source": "Novel / Book",
    "actors": [
      "Leonardo DiCaprio",
      "Tobey Maguire"
    ],
    "director": "Baz Luhrmann",
    "tagline": "Can't repeat the past? Why of course you can!",
    "isTarget": true
  },
  {
    "id": 489,
    "title": "Lost in Translation",
    "year": 2003,
    "composers": [
      "Kevin Shields"
    ],
    "genres": [
      "Drama",
      "Romance"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Bill Murray",
      "Scarlett Johansson"
    ],
    "director": "Sofia Coppola",
    "tagline": "Everyone wants to be found.",
    "isTarget": true
  },
  {
    "id": 490,
    "title": "Before Sunrise",
    "year": 1995,
    "composers": [
      "Fred Frith"
    ],
    "genres": [
      "Romance",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Ethan Hawke",
      "Julie Delpy"
    ],
    "director": "Richard Linklater",
    "tagline": "Can the greatest romance of your life last only one night?",
    "isTarget": true
  },
  {
    "id": 491,
    "title": "Boyhood",
    "year": 2014,
    "composers": [
      "Various Artists"
    ],
    "genres": [
      "Drama",
      "Family"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Ellar Coltrane",
      "Patricia Arquette"
    ],
    "director": "Richard Linklater",
    "tagline": "12 years in the making.",
    "isTarget": true
  },
  {
    "id": 492,
    "title": "School of Rock",
    "year": 2003,
    "composers": [
      "Craig Wedren"
    ],
    "genres": [
      "Comedy",
      "Musical"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Jack Black",
      "Joan Cusack"
    ],
    "director": "Richard Linklater",
    "tagline": "Stick it to the man.",
    "isTarget": true
  },
  {
    "id": 493,
    "title": "Shaun of the Dead",
    "year": 2004,
    "composers": [
      "Pete Woodhead"
    ],
    "genres": [
      "Comedy",
      "Horror"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Simon Pegg",
      "Nick Frost"
    ],
    "director": "Edgar Wright",
    "tagline": "A romantic comedy. With zombies.",
    "isTarget": true
  },
  {
    "id": 494,
    "title": "Hot Fuzz",
    "year": 2007,
    "composers": [
      "David Arnold"
    ],
    "genres": [
      "Comedy",
      "Action"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Simon Pegg",
      "Nick Frost"
    ],
    "director": "Edgar Wright",
    "tagline": "Big cops. Small town. Moderate violence.",
    "isTarget": true
  },
  {
    "id": 495,
    "title": "Baby Driver",
    "year": 2017,
    "composers": [
      "Steven Price"
    ],
    "genres": [
      "Action",
      "Crime"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Ansel Elgort",
      "Kevin Spacey"
    ],
    "director": "Edgar Wright",
    "tagline": "All you need is one killer track.",
    "isTarget": true
  },
  {
    "id": 496,
    "title": "Gravity",
    "year": 2013,
    "composers": [
      "Steven Price"
    ],
    "genres": [
      "Sci-Fi",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Sandra Bullock",
      "George Clooney"
    ],
    "director": "Alfonso Cuarón",
    "tagline": "Don't Let Go.",
    "isTarget": true
  },
  {
    "id": 497,
    "title": "Children of Men",
    "year": 2006,
    "composers": [
      "John Tavener"
    ],
    "genres": [
      "Sci-Fi",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Clive Owen",
      "Julianne Moore"
    ],
    "director": "Alfonso Cuarón",
    "tagline": "No children. No future. No hope.",
    "isTarget": true
  },
  {
    "id": 498,
    "title": "Roma",
    "year": 2018,
    "composers": [
      "Various Artists"
    ],
    "genres": [
      "Drama",
      "History"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Yalitza Aparicio",
      "Marina de Tavira"
    ],
    "director": "Alfonso Cuarón",
    "tagline": "There are periods in history that scar societies.",
    "isTarget": true
  },
  {
    "id": 499,
    "title": "Birdman",
    "year": 2014,
    "composers": [
      "Antonio Sánchez"
    ],
    "genres": [
      "Comedy",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Michael Keaton",
      "Edward Norton"
    ],
    "director": "Alejandro G. Iñárritu",
    "tagline": "or (The Unexpected Virtue of Ignorance)",
    "isTarget": true
  },
  {
    "id": 500,
    "title": "The Revenant",
    "year": 2015,
    "composers": [
      "Ryuichi Sakamoto",
      "Alva Noto"
    ],
    "genres": [
      "Adventure",
      "Western"
    ],
    "source": "Novel / Book",
    "actors": [
      "Leonardo DiCaprio",
      "Tom Hardy"
    ],
    "director": "Alejandro G. Iñárritu",
    "tagline": "Blood lost. Life found.",
    "isTarget": true
  },
  {
    "id": 501,
    "title": "Casino Royale",
    "year": 2006,
    "composers": [
      "David Arnold"
    ],
    "genres": [
      "Action",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Daniel Craig",
      "Eva Green"
    ],
    "director": "Martin Campbell",
    "tagline": "Everyone has a past. Every legend has a beginning.",
    "isTarget": true
  },
  {
    "id": 502,
    "title": "Independence Day",
    "year": 1996,
    "composers": [
      "David Arnold"
    ],
    "genres": [
      "Sci-Fi",
      "Action"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Will Smith",
      "Jeff Goldblum"
    ],
    "director": "Roland Emmerich",
    "tagline": "Earth. Take a good look. It might be your last.",
    "isTarget": true
  },
  {
    "id": 503,
    "title": "Oldboy",
    "year": 2003,
    "composers": [
      "Jo Yeong-wook"
    ],
    "genres": [
      "Thriller",
      "Mystery"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Choi Min-sik",
      "Yoo Ji-tae"
    ],
    "director": "Park Chan-wook",
    "tagline": "15 years of imprisonment, five days of vengeance.",
    "isTarget": true
  },
  {
    "id": 504,
    "title": "The Handmaiden",
    "year": 2016,
    "composers": [
      "Jo Yeong-wook"
    ],
    "genres": [
      "Thriller",
      "Romance"
    ],
    "source": "Novel / Book",
    "actors": [
      "Kim Min-hee",
      "Kim Tae-ri"
    ],
    "director": "Park Chan-wook",
    "tagline": "Never did they expect to get into a controversial relationship.",
    "isTarget": true
  },
  {
    "id": 505,
    "title": "Memories of Murder",
    "year": 2003,
    "composers": [
      "Taro Iwashiro"
    ],
    "genres": [
      "Crime",
      "Mystery"
    ],
    "source": "Stage Play / Musical",
    "actors": [
      "Song Kang-ho",
      "Kim Sang-kyung"
    ],
    "director": "Bong Joon-ho",
    "tagline": "Based on the true story of Korea's first serial murders.",
    "isTarget": true
  },
  {
    "id": 506,
    "title": "Minari",
    "year": 2020,
    "composers": [
      "Emile Mosseri"
    ],
    "genres": [
      "Drama",
      "Family"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Steven Yeun",
      "Yeri Han"
    ],
    "director": "Lee Isaac Chung",
    "tagline": "They're planting roots in a new land.",
    "isTarget": true
  },
  {
    "id": 507,
    "title": "Portrait of a Lady on Fire",
    "year": 2019,
    "composers": [
      "Various Artists"
    ],
    "genres": [
      "Romance",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Noémie Merlant",
      "Adèle Haenel"
    ],
    "director": "Céline Sciamma",
    "tagline": "Do not regret. Remember.",
    "isTarget": true
  },
  {
    "id": 508,
    "title": "The Worst Person in the World",
    "year": 2021,
    "composers": [
      "Ola Fløttum"
    ],
    "genres": [
      "Romance",
      "Comedy"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Renate Reinsve",
      "Anders Danielsen Lie"
    ],
    "director": "Joachim Trier",
    "tagline": "Love is hard when you don't know what you want.",
    "isTarget": true
  },
  {
    "id": 509,
    "title": "Conclave",
    "year": 2024,
    "composers": [
      "Volker Bertelmann"
    ],
    "genres": [
      "Thriller",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Ralph Fiennes",
      "Stanley Tucci"
    ],
    "director": "Edward Berger",
    "tagline": "What happens behind these walls will change everything.",
    "isTarget": true
  },
  {
    "id": 510,
    "title": "All Quiet on the Western Front",
    "year": 2022,
    "composers": [
      "Volker Bertelmann"
    ],
    "genres": [
      "War",
      "History"
    ],
    "source": "Novel / Book",
    "actors": [
      "Felix Kammerer",
      "Albrecht Schuch"
    ],
    "director": "Edward Berger",
    "tagline": "No war is glorious.",
    "isTarget": true
  },
  {
    "id": 511,
    "title": "Red Sonja",
    "year": 1985,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Action",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Tad Horino",
      "Tutte Lemkow"
    ],
    "director": "Richard Fleischer",
    "tagline": "Released in 1985, directed by Richard Fleischer.",
    "isTarget": false
  },
  {
    "id": 512,
    "title": "1900",
    "year": 1976,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Romance",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Anna Henkel",
      "Winni Riva"
    ],
    "director": "Bernardo Bertolucci",
    "tagline": "Released in 1976, directed by Bernardo Bertolucci.",
    "isTarget": false
  },
  {
    "id": 513,
    "title": "Exorcist II: The Heretic",
    "year": 1977,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Horror",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Paul Henreid",
      "Richard Paul"
    ],
    "director": "Rospo Pallenberg",
    "tagline": "Released in 1977, directed by Rospo Pallenberg.",
    "isTarget": false
  },
  {
    "id": 514,
    "title": "Wolf",
    "year": 1994,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "James Spader",
      "Thomas F. Duffy"
    ],
    "director": "Mike Nichols",
    "tagline": "Released in 1994, directed by Mike Nichols.",
    "isTarget": false
  },
  {
    "id": 515,
    "title": "Two Mules for Sister Sara",
    "year": 1970,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Comedy",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Clint Eastwood",
      "Shirley MacLaine"
    ],
    "director": "Don Siegel",
    "tagline": "Released in 1970, directed by Don Siegel.",
    "isTarget": false
  },
  {
    "id": 516,
    "title": "The Legend of 1900",
    "year": 1998,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Anita Zagaria",
      "Tim Roth"
    ],
    "director": "Giuseppe Tornatore",
    "tagline": "Released in 1998, directed by Giuseppe Tornatore.",
    "isTarget": false
  },
  {
    "id": 517,
    "title": "My Name is Nobody",
    "year": 1973,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Comedy",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Henry Fonda",
      "Terence Hill"
    ],
    "director": "Tonino Valerii",
    "tagline": "Released in 1973, directed by Tonino Valerii.",
    "isTarget": false
  },
  {
    "id": 518,
    "title": "Mission to Mars",
    "year": 2000,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Adventure",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Lynda Boyd",
      "Tim Robbins"
    ],
    "director": "Brian De Palma",
    "tagline": "Released in 2000, directed by Brian De Palma.",
    "isTarget": false
  },
  {
    "id": 519,
    "title": "Casualties of War",
    "year": 1989,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "John Leguizamo",
      "Wendell Pierce"
    ],
    "director": "Brian De Palma",
    "tagline": "Released in 1989, directed by Brian De Palma.",
    "isTarget": false
  },
  {
    "id": 520,
    "title": "Frantic",
    "year": 1988,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Action",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Dominique Pinon",
      "Yves Rénier"
    ],
    "director": "Roman Polanski",
    "tagline": "Released in 1988, directed by Roman Polanski.",
    "isTarget": false
  },
  {
    "id": 521,
    "title": "Teorema",
    "year": 1968,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Laura Betti",
      "Terence Stamp"
    ],
    "director": "Pier Paolo Pasolini",
    "tagline": "Released in 1968, directed by Pier Paolo Pasolini.",
    "isTarget": false
  },
  {
    "id": 522,
    "title": "Investigation of a Citizen Above Suspicion",
    "year": 1970,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Florinda Bolkan",
      "Vittorio Duse"
    ],
    "director": "Elio Petri",
    "tagline": "Released in 1970, directed by Elio Petri.",
    "isTarget": false
  },
  {
    "id": 523,
    "title": "The Best Offer",
    "year": 2013,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Donald Sutherland",
      "Vernon Dobtcheff"
    ],
    "director": "Giuseppe Tornatore",
    "tagline": "Released in 2013, directed by Giuseppe Tornatore.",
    "isTarget": false
  },
  {
    "id": 524,
    "title": "The Professional",
    "year": 1981,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Thriller",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Marie-Christine Descouard",
      "Élisabeth Margoni"
    ],
    "director": "Georges Lautner",
    "tagline": "Released in 1981, directed by Georges Lautner.",
    "isTarget": false
  },
  {
    "id": 525,
    "title": "Lolita",
    "year": 1997,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Crime",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Ed Grady",
      "Suzanne Shepherd"
    ],
    "director": "Adrian Lyne",
    "tagline": "Released in 1997, directed by Adrian Lyne.",
    "isTarget": false
  },
  {
    "id": 526,
    "title": "Tie Me Up! Tie Me Down!",
    "year": 1989,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Antonio Banderas",
      "Victoria Abril"
    ],
    "director": "Pedro Almodóvar",
    "tagline": "Released in 1989, directed by Pedro Almodóvar.",
    "isTarget": false
  },
  {
    "id": 527,
    "title": "Duck, You Sucker!",
    "year": 1971,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Western",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "James Coburn",
      "Vivienne Chandler"
    ],
    "director": "Sergio Leone",
    "tagline": "Released in 1971, directed by Sergio Leone.",
    "isTarget": false
  },
  {
    "id": 528,
    "title": "The Battle of Algiers",
    "year": 1966,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Saadi Yacef"
    ],
    "director": "Gillo Pontecorvo",
    "tagline": "Released in 1966, directed by Gillo Pontecorvo.",
    "isTarget": false
  },
  {
    "id": 529,
    "title": "In the Line of Fire",
    "year": 1993,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Thriller",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "John Mahoney",
      "Tobin Bell"
    ],
    "director": "Wolfgang Petersen",
    "tagline": "Released in 1993, directed by Wolfgang Petersen.",
    "isTarget": false
  },
  {
    "id": 530,
    "title": "La Cage aux Folles",
    "year": 1978,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Comedy",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Margherita Horowitz",
      "Vittorio Bodini"
    ],
    "director": "Édouard Molinaro",
    "tagline": "Released in 1978, directed by Édouard Molinaro.",
    "isTarget": false
  },
  {
    "id": 531,
    "title": "The Heiress",
    "year": 1949,
    "composers": [
      "Aaron Copland"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Vanessa Brown"
    ],
    "director": "William Wyler",
    "tagline": "Released in 1949, directed by William Wyler.",
    "isTarget": false
  },
  {
    "id": 532,
    "title": "Malèna",
    "year": 2000,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Romance",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Conchita Puglisi",
      "Vanni Bramati"
    ],
    "director": "Giuseppe Tornatore",
    "tagline": "Released in 2000, directed by Giuseppe Tornatore.",
    "isTarget": false
  },
  {
    "id": 533,
    "title": "Disclosure",
    "year": 1994,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Demi Moore",
      "Wayne Duvall"
    ],
    "director": "Barry Levinson",
    "tagline": "Released in 1994, directed by Barry Levinson.",
    "isTarget": false
  },
  {
    "id": 534,
    "title": "Arabian Nights",
    "year": 1974,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Franco Merli",
      "Ninetto Davoli"
    ],
    "director": "Pier Paolo Pasolini",
    "tagline": "Released in 1974, directed by Pier Paolo Pasolini.",
    "isTarget": false
  },
  {
    "id": 535,
    "title": "Salò, or the 120 Days of Sodom",
    "year": 1975,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Hélène Surgère",
      "Uberto Paolo Quintavalle"
    ],
    "director": "Pier Paolo Pasolini",
    "tagline": "Released in 1975, directed by Pier Paolo Pasolini.",
    "isTarget": false
  },
  {
    "id": 536,
    "title": "Hamlet",
    "year": 1990,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Mel Gibson",
      "Vernon Dobtcheff"
    ],
    "director": "Franco Zeffirelli",
    "tagline": "Released in 1990, directed by Franco Zeffirelli.",
    "isTarget": false
  },
  {
    "id": 537,
    "title": "The Decameron",
    "year": 1971,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Pier Paolo Pasolini",
      "Vincenzo Amato"
    ],
    "director": "Pier Paolo Pasolini",
    "tagline": "Released in 1971, directed by Pier Paolo Pasolini.",
    "isTarget": false
  },
  {
    "id": 538,
    "title": "Bugsy",
    "year": 1991,
    "composers": [
      "Ennio Morricone"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Warren Beatty",
      "Wendy Phillips"
    ],
    "director": "Barry Levinson",
    "tagline": "Released in 1991, directed by Barry Levinson.",
    "isTarget": false
  },
  {
    "id": 539,
    "title": "Asteroid City",
    "year": 2023,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Tom Hanks",
      "Óscar Mínguez García Patrón"
    ],
    "director": "Wes Anderson",
    "tagline": "Released in 2023, directed by Wes Anderson.",
    "isTarget": false
  },
  {
    "id": 540,
    "title": "Dr. Seuss' How the Grinch Stole Christmas",
    "year": 2000,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Fantasy",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Taylor Momsen",
      "Verne Troyer"
    ],
    "director": "Ron Howard",
    "tagline": "Released in 2000, directed by Ron Howard.",
    "isTarget": false
  },
  {
    "id": 541,
    "title": "Bicentennial Man",
    "year": 1999,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Family",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "George D. Wallace",
      "Wendy Crewson"
    ],
    "director": "Chris Columbus",
    "tagline": "Released in 1999, directed by Chris Columbus.",
    "isTarget": false
  },
  {
    "id": 542,
    "title": "The Name of the Rose",
    "year": 1986,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Crime",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "William Hickey"
    ],
    "director": "Jean-Jacques Annaud",
    "tagline": "Released in 1986, directed by Jean-Jacques Annaud.",
    "isTarget": false
  },
  {
    "id": 543,
    "title": "The Twilight Saga: New Moon",
    "year": 2009,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Fantasy",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Charlie Bewley",
      "Tyson Houseman"
    ],
    "director": "Chris Weitz",
    "tagline": "Released in 2009, directed by Chris Weitz.",
    "isTarget": false
  },
  {
    "id": 544,
    "title": "Deep Impact",
    "year": 1998,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Sci-Fi",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Charles Martin Smith",
      "W. Earl Brown"
    ],
    "director": "Mimi Leder",
    "tagline": "Released in 1998, directed by Mimi Leder.",
    "isTarget": false
  },
  {
    "id": 545,
    "title": "The New World",
    "year": 2006,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Michael Greyeyes",
      "Yorick van Wageningen"
    ],
    "director": "Terrence Malick",
    "tagline": "Released in 2006, directed by Terrence Malick.",
    "isTarget": false
  },
  {
    "id": 546,
    "title": "The Boy in the Striped Pajamas",
    "year": 2008,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Richard Johnson",
      "Vera Farmiga"
    ],
    "director": "Mark Herman",
    "tagline": "Released in 2008, directed by Mark Herman.",
    "isTarget": false
  },
  {
    "id": 547,
    "title": "Enemy at the Gates",
    "year": 2001,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Dan van Husen",
      "Werner Daehn"
    ],
    "director": "Jean-Jacques Annaud",
    "tagline": "Released in 2001, directed by Jean-Jacques Annaud.",
    "isTarget": false
  },
  {
    "id": 548,
    "title": "The Queen",
    "year": 2006,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Wolfgang Pissors"
    ],
    "director": "Stephen Frears",
    "tagline": "Released in 2006, directed by Stephen Frears.",
    "isTarget": false
  },
  {
    "id": 549,
    "title": "Jurassic World Rebirth",
    "year": 2025,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Scarlett Johansson"
    ],
    "director": "Gareth Edwards",
    "tagline": "Released in 2025, directed by Gareth Edwards.",
    "isTarget": false
  },
  {
    "id": 550,
    "title": "The Mask of Zorro",
    "year": 1998,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Western",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Antonio Banderas",
      "Victor Rivers"
    ],
    "director": "Martin Campbell",
    "tagline": "Released in 1998, directed by Martin Campbell.",
    "isTarget": false
  },
  {
    "id": 551,
    "title": "Rust and Bone",
    "year": 2012,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Romance",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Yannick Choirat"
    ],
    "director": "Jacques Audiard",
    "tagline": "Released in 2012, directed by Jacques Audiard.",
    "isTarget": false
  },
  {
    "id": 552,
    "title": "Mr. Magorium's Wonder Emporium",
    "year": 2007,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Fantasy",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Kiele Sanchez",
      "Zach Mills"
    ],
    "director": "Zach Helm",
    "tagline": "Released in 2007, directed by Zach Helm.",
    "isTarget": false
  },
  {
    "id": 553,
    "title": "Flightplan",
    "year": 2005,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Thriller",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "David Farkas",
      "Stephanie Faracy"
    ],
    "director": "Robert Schwentke",
    "tagline": "Released in 2005, directed by Robert Schwentke.",
    "isTarget": false
  },
  {
    "id": 554,
    "title": "Another 48 Hrs.",
    "year": 1990,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Comedy",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Eddie Murphy",
      "Tisha Campbell"
    ],
    "director": "Walter Hill",
    "tagline": "Released in 1990, directed by Walter Hill.",
    "isTarget": false
  },
  {
    "id": 555,
    "title": "The Spiderwick Chronicles",
    "year": 2008,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Tyler Patrick Jones"
    ],
    "director": "Mark Waters",
    "tagline": "Released in 2008, directed by Mark Waters.",
    "isTarget": false
  },
  {
    "id": 556,
    "title": "Casper",
    "year": 1995,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Terry Murphy"
    ],
    "director": "Brad Silberling",
    "tagline": "Released in 1995, directed by Brad Silberling.",
    "isTarget": false
  },
  {
    "id": 557,
    "title": "Southpaw",
    "year": 2015,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Action",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Rachel McAdams",
      "Victor Ortiz"
    ],
    "director": "Antoine Fuqua",
    "tagline": "Released in 2015, directed by Antoine Fuqua.",
    "isTarget": false
  },
  {
    "id": 558,
    "title": "The Painted Veil",
    "year": 2006,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Edward Norton",
      "Xia Yu"
    ],
    "director": "John Curran",
    "tagline": "Released in 2006, directed by John Curran.",
    "isTarget": false
  },
  {
    "id": 559,
    "title": "Star Trek III: The Search for Spock",
    "year": 1984,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Action",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "James Sikking",
      "William Shatner"
    ],
    "director": "Leonard Nimoy",
    "tagline": "Released in 1984, directed by Leonard Nimoy.",
    "isTarget": false
  },
  {
    "id": 560,
    "title": "The Forgotten",
    "year": 2004,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Sci-Fi",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Dominic West",
      "Tim Kang"
    ],
    "director": "Joseph Ruben",
    "tagline": "Released in 2004, directed by Joseph Ruben.",
    "isTarget": false
  },
  {
    "id": 561,
    "title": "The Ghost Writer",
    "year": 2010,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Pierce Brosnan",
      "Tom Wilkinson"
    ],
    "director": "Roman Polanski",
    "tagline": "Released in 2010, directed by Roman Polanski.",
    "isTarget": false
  },
  {
    "id": 562,
    "title": "Apocalypto",
    "year": 2006,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Rudy Youngblood"
    ],
    "director": "Mel Gibson",
    "tagline": "Released in 2006, directed by Mel Gibson.",
    "isTarget": false
  },
  {
    "id": 563,
    "title": "Cocoon",
    "year": 1985,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Jessica Tandy",
      "Wilford Brimley"
    ],
    "director": "Ron Howard",
    "tagline": "Released in 1985, directed by Ron Howard.",
    "isTarget": false
  },
  {
    "id": 564,
    "title": "Sneakers",
    "year": 1992,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Robert Redford",
      "Timothy Busfield"
    ],
    "director": "Phil Alden Robinson",
    "tagline": "Released in 1992, directed by Phil Alden Robinson.",
    "isTarget": false
  },
  {
    "id": 565,
    "title": "Carnage",
    "year": 2011,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Tanya Lopert"
    ],
    "director": "Roman Polanski",
    "tagline": "Released in 2011, directed by Roman Polanski.",
    "isTarget": false
  },
  {
    "id": 566,
    "title": "The Pelican Brief",
    "year": 1993,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Action",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Cynthia Nixon",
      "William Atherton"
    ],
    "director": "Alan J. Pakula",
    "tagline": "Released in 1993, directed by Alan J. Pakula.",
    "isTarget": false
  },
  {
    "id": 567,
    "title": "House of Sand and Fog",
    "year": 2003,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Jennifer Connelly",
      "Shohreh Aghdashloo"
    ],
    "director": "Vadim Perelman",
    "tagline": "Released in 2003, directed by Vadim Perelman.",
    "isTarget": false
  },
  {
    "id": 568,
    "title": "Red Heat",
    "year": 1988,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Action",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Arnold Schwarzenegger",
      "William Ostrander"
    ],
    "director": "Walter Hill",
    "tagline": "Released in 1988, directed by Walter Hill.",
    "isTarget": false
  },
  {
    "id": 569,
    "title": "Willow",
    "year": 1988,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Fantasy",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Warwick Davis",
      "Winter Williams"
    ],
    "director": "Ron Howard",
    "tagline": "Released in 1988, directed by Ron Howard.",
    "isTarget": false
  },
  {
    "id": 570,
    "title": "The Woman in Red",
    "year": 1984,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Romance",
      "Comedy"
    ],
    "source": "Novel / Book",
    "actors": [
      "Gene Wilder",
      "Kelly Le Brock"
    ],
    "director": "Gene Wilder",
    "tagline": "Released in 1984, directed by Gene Wilder.",
    "isTarget": false
  },
  {
    "id": 571,
    "title": "The Devil's Own",
    "year": 1997,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Crime",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Paul Ronan",
      "Victor Slezak"
    ],
    "director": "Alan J. Pakula",
    "tagline": "Released in 1997, directed by Alan J. Pakula.",
    "isTarget": false
  },
  {
    "id": 572,
    "title": "Girl with a Pearl Earring",
    "year": 2003,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Romance",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Scarlett Johansson",
      "Tom Wilkinson"
    ],
    "director": "Peter Webber",
    "tagline": "Released in 2003, directed by Peter Webber.",
    "isTarget": false
  },
  {
    "id": 573,
    "title": "The Rocketeer",
    "year": 1991,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Action",
      "Drama"
    ],
    "source": "Comic / Graphic Novel",
    "actors": [
      "Jim Franklin",
      "William Sanderson"
    ],
    "director": "Joe Johnston",
    "tagline": "Released in 1991, directed by Joe Johnston.",
    "isTarget": false
  },
  {
    "id": 574,
    "title": "Mighty Joe Young",
    "year": 1998,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Dina Merrill",
      "Vicki Davis"
    ],
    "director": "Ron Underwood",
    "tagline": "Released in 1998, directed by Ron Underwood.",
    "isTarget": false
  },
  {
    "id": 575,
    "title": "Windtalkers",
    "year": 2002,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Mark Ruffalo",
      "Peter Stormare"
    ],
    "director": "John Woo",
    "tagline": "Released in 2002, directed by John Woo.",
    "isTarget": false
  },
  {
    "id": 576,
    "title": "Monuments Men",
    "year": 2014,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "George Clooney",
      "Zahari Baharov"
    ],
    "director": "George Clooney",
    "tagline": "Released in 2014, directed by George Clooney.",
    "isTarget": false
  },
  {
    "id": 577,
    "title": "Coco Before Chanel",
    "year": 2009,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Romance",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Franck Monsigny",
      "Émilie Gavois-Kahn"
    ],
    "director": "Anne Fontaine",
    "tagline": "Released in 2009, directed by Anne Fontaine.",
    "isTarget": false
  },
  {
    "id": 578,
    "title": "Philomena",
    "year": 2013,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Judi Dench",
      "Steve Coogan"
    ],
    "director": "Stephen Frears",
    "tagline": "Released in 2013, directed by Stephen Frears.",
    "isTarget": false
  },
  {
    "id": 579,
    "title": "48 Hrs.",
    "year": 1982,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Thriller",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "R. D. Call",
      "Sonny Landham"
    ],
    "director": "Walter Hill",
    "tagline": "Released in 1982, directed by Walter Hill.",
    "isTarget": false
  },
  {
    "id": 580,
    "title": "Ransom",
    "year": 1996,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Action",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Rene Russo"
    ],
    "director": "Ron Howard",
    "tagline": "Released in 1996, directed by Ron Howard.",
    "isTarget": false
  },
  {
    "id": 581,
    "title": "Commando",
    "year": 1985,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Action",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Dan Hedaya",
      "Vernon Wells"
    ],
    "director": "Mark L. Lester",
    "tagline": "Released in 1985, directed by Mark L. Lester.",
    "isTarget": false
  },
  {
    "id": 582,
    "title": "Valérian and the City of a Thousand Planets",
    "year": 2017,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Adventure",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Clive Owen",
      "Sam Spruell"
    ],
    "director": "Luc Besson",
    "tagline": "Released in 2017, directed by Luc Besson.",
    "isTarget": false
  },
  {
    "id": 583,
    "title": "Patriot Games",
    "year": 1992,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Thriller",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Jeff Gardner",
      "Thora Birch"
    ],
    "director": "Phillip Noyce",
    "tagline": "Released in 1992, directed by Phillip Noyce.",
    "isTarget": false
  },
  {
    "id": 584,
    "title": "The French Dispatch",
    "year": 2021,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Comedy",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Wallace Wolodarsky",
      "Willem Dafoe"
    ],
    "director": "Wes Anderson",
    "tagline": "Released in 2021, directed by Wes Anderson.",
    "isTarget": false
  },
  {
    "id": 585,
    "title": "The Danish Girl",
    "year": 2015,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Eddie Redmayne",
      "Sophie Kennedy Clark"
    ],
    "director": "Tom Hooper",
    "tagline": "Released in 2015, directed by Tom Hooper.",
    "isTarget": false
  },
  {
    "id": 586,
    "title": "Suburbicon",
    "year": 2017,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Julianne Moore",
      "Oscar Isaac"
    ],
    "director": "George Clooney",
    "tagline": "Released in 2017, directed by George Clooney.",
    "isTarget": false
  },
  {
    "id": 587,
    "title": "The Pagemaster",
    "year": 1994,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Fantasy",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Patrick Stewart",
      "Whoopi Goldberg"
    ],
    "director": "Joe Johnston",
    "tagline": "Released in 1994, directed by Joe Johnston.",
    "isTarget": false
  },
  {
    "id": 588,
    "title": "Nightmare Alley",
    "year": 2021,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Ron Perlman",
      "Willem Dafoe"
    ],
    "director": "Guillermo del Toro",
    "tagline": "Released in 2021, directed by Guillermo del Toro.",
    "isTarget": false
  },
  {
    "id": 589,
    "title": "The Secret Life of Pets 2",
    "year": 2019,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Comedy",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Patton Oswalt",
      "Tiffany Haddish"
    ],
    "director": "Chris Renaud",
    "tagline": "Released in 2019, directed by Chris Renaud.",
    "isTarget": false
  },
  {
    "id": 590,
    "title": "Courage Under Fire",
    "year": 1996,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Action",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Armand Darrius",
      "Željko Ivanek"
    ],
    "director": "Edward Zwick",
    "tagline": "Released in 1996, directed by Edward Zwick.",
    "isTarget": false
  },
  {
    "id": 591,
    "title": "The Legend of Zorro",
    "year": 2005,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Action",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Tony Amendola"
    ],
    "director": "Martin Campbell",
    "tagline": "Released in 2005, directed by Martin Campbell.",
    "isTarget": false
  },
  {
    "id": 592,
    "title": "Firewall",
    "year": 2006,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Jimmy Bennett",
      "Virginia Madsen"
    ],
    "director": "Richard Loncraine",
    "tagline": "Released in 2006, directed by Richard Loncraine.",
    "isTarget": false
  },
  {
    "id": 593,
    "title": "All the King's Men",
    "year": 2006,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Mark Ruffalo",
      "Tom McCarthy"
    ],
    "director": "Steven Zaillian",
    "tagline": "Released in 2006, directed by Steven Zaillian.",
    "isTarget": false
  },
  {
    "id": 594,
    "title": "The Midnight Sky",
    "year": 2020,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Sci-Fi",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "George Clooney",
      "Tim Russ"
    ],
    "director": "George Clooney",
    "tagline": "Released in 2020, directed by George Clooney.",
    "isTarget": false
  },
  {
    "id": 595,
    "title": "Clear and Present Danger",
    "year": 1994,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Thriller",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Chris Conrad",
      "Willem Dafoe"
    ],
    "director": "Phillip Noyce",
    "tagline": "Released in 1994, directed by Phillip Noyce.",
    "isTarget": false
  },
  {
    "id": 596,
    "title": "The Butler",
    "year": 2013,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Barack Obama",
      "Yaya DaCosta"
    ],
    "director": "Lee Daniels",
    "tagline": "Released in 2013, directed by Lee Daniels.",
    "isTarget": false
  },
  {
    "id": 597,
    "title": "The Ides of March",
    "year": 2011,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Thriller",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Michael Mantell",
      "Yuri Sardarov"
    ],
    "director": "George Clooney",
    "tagline": "Released in 2011, directed by George Clooney.",
    "isTarget": false
  },
  {
    "id": 598,
    "title": "My Week with Marilyn",
    "year": 2011,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Original Screenplay",
    "actors": [
      "David Rintoul",
      "Zoë Wanamaker"
    ],
    "director": "Simon Curtis",
    "tagline": "Released in 2011, directed by Simon Curtis.",
    "isTarget": false
  },
  {
    "id": 599,
    "title": "Syriana",
    "year": 2005,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Tom McCarthy",
      "William Hurt"
    ],
    "director": "Stephen Gaghan",
    "tagline": "Released in 2005, directed by Stephen Gaghan.",
    "isTarget": false
  },
  {
    "id": 600,
    "title": "The Golden Compass",
    "year": 2007,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Fantasy",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Daniel Craig",
      "Tom Courtenay"
    ],
    "director": "Chris Weitz",
    "tagline": "Released in 2007, directed by Chris Weitz.",
    "isTarget": false
  },
  {
    "id": 601,
    "title": "Lust, Caution",
    "year": 2007,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Drama",
      "Thriller"
    ],
    "source": "Novel / Book",
    "actors": [
      "Akiko Takeshita",
      "Zhu Zhi-Ying"
    ],
    "director": "Ang Lee",
    "tagline": "Released in 2007, directed by Ang Lee.",
    "isTarget": false
  },
  {
    "id": 602,
    "title": "Honey, I Shrunk the Kids",
    "year": 1989,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Comedy",
      "Drama"
    ],
    "source": "Original Screenplay",
    "actors": [
      "Kristine Sutherland",
      "Thomas Wilson Brown"
    ],
    "director": "Joe Johnston",
    "tagline": "Released in 1989, directed by Joe Johnston.",
    "isTarget": false
  },
  {
    "id": 603,
    "title": "Extremely Loud and Incredibly Close",
    "year": 2011,
    "composers": [
      "Alexandre Desplat"
    ],
    "genres": [
      "Comedy",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Jeffrey Wright",
      "Zoe Caldwell"
    ],
    "director": "Stephen Daldry",
    "tagline": "Released in 2011, directed by Stephen Daldry.",
    "isTarget": false
  },
  {
    "id": 604,
    "title": "Iris",
    "year": 2001,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Romance",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Hugh Bonneville",
      "Samuel West"
    ],
    "director": "Richard Eyre",
    "tagline": "Released in 2001, directed by Richard Eyre.",
    "isTarget": false
  },
  {
    "id": 605,
    "title": "The Missing",
    "year": 2003,
    "composers": [
      "James Horner"
    ],
    "genres": [
      "Action",
      "Drama"
    ],
    "source": "Novel / Book",
    "actors": [
      "Rance Howard",
      "Val Kilmer"
    ],
    "director": "Ron Howard",
    "tagline": "Released in 2003, directed by Ron Howard.",
    "isTarget": false
  }
];
