const moviesData = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        releaseDate: "1994-09-23",
        rating: 4.9,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },
    {
        id: 2,
        title: "The Godfather",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        releaseDate: "1972-03-24",
        rating: 4.9,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/sY1S34973zA"
    },
    {
        id: 3,
        title: "The Dark Knight",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        releaseDate: "2008-07-18",
        rating: 4.8,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/EXeTwQWrcwY"
    },
    {
        id: 4,
        title: "Pulp Fiction",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        releaseDate: "1994-10-14",
        rating: 4.8,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/s7EdQ4FqbhY"
    },
    {
        id: 5,
        title: "Fight Club",
        description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
        releaseDate: "1999-10-15",
        rating: 4.7,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/qtRKdVHc-cE"
    },
    {
        id: 6,
        title: "Inception",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        releaseDate: "2010-07-16",
        rating: 4.7,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
        id: 7,
        title: "The Matrix",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        releaseDate: "1999-03-31",
        rating: 4.7,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/vKQi3bBA1y8"
    },
    {
        id: 8,
        title: "Goodfellas",
        description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
        releaseDate: "1990-09-19",
        rating: 4.7,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/qo5jJpHtI1Y"
    },
    {
        id: 9,
        title: "The Silence of the Lambs",
        description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
        releaseDate: "1991-02-14",
        rating: 4.6,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/RuX2MQeb8UM"
    },
    {
        id: 10,
        title: "Interstellar",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        releaseDate: "2014-11-07",
        rating: 4.6,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
        id: 11,
        title: "Parasite",
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        releaseDate: "2019-05-21",
        rating: 4.6,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/5xH0HfJHsaY"
    },
    {
        id: 12,
        title: "The Green Mile",
        description: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
        releaseDate: "1999-12-10",
        rating: 4.6,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_FMjpg_UX1000_.jpg",
        trailer: "https://www.youtube.com/embed/Ki4haFuqVu4"
    },
    {
        id: 13,
        title: "Gladiator",
        description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
        releaseDate: "2000-05-05",
        rating: 4.5,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/owK1qxDselE"
    },
    {
        id: 14,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        releaseDate: "2001-12-19",
        rating: 4.5,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/V75dMMIW2B4"
    },
    {
        id: 15,
        title: "Forrest Gump",
        description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
        releaseDate: "1994-07-06",
        rating: 4.5,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/bLvqoHBptjg"
    },
    {
        id: 16,
        title: "The Lion King",
        description: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
        releaseDate: "1994-06-24",
        rating: 4.5,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/4sj1MT05lAA"
    },
    {
        id: 17,
        title: "Titanic",
        description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
        releaseDate: "1997-12-19",
        rating: 4.5,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/kVrqfYjkTdQ"
    },
    {
        id: 18,
        title: "Avengers: Endgame",
        description: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        releaseDate: "2019-04-26",
        rating: 4.5,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/TcMBFSGVi1c"
    },
    {
        id: 19,
        title: "The Social Network",
        description: "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.",
        releaseDate: "2010-10-01",
        rating: 4.4,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/lB95KLmpLR4"
    },
    {
        id: 20,
        title: "Whiplash",
        description: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
        releaseDate: "2014-10-10",
        rating: 4.4,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/7d_jQycdQGo"
    },
    {
        id: 21,
        title: "Joker",
        description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime.",
        releaseDate: "2019-10-04",
        rating: 4.4,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/zAGVQLHvwOY"
    },
    {
        id: 22,
        title: "The Grand Budapest Hotel",
        description: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
        releaseDate: "2014-03-28",
        rating: 4.4,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/1Fg5iWmQjwk"
    },
    {
        id: 23,
        title: "La La Land",
        description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
        releaseDate: "2016-12-09",
        rating: 4.3,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/0pdqf4P9MB8"
    },
    {
        id: 24,
        title: "The Revenant",
        description: "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
        releaseDate: "2016-01-08",
        rating: 4.3,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/LoebZZ8K5N0"
    },
    {
        id: 25,
        title: "Mad Max: Fury Road",
        description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        releaseDate: "2015-05-15",
        rating: 4.3,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/hEJnMQG9ev8"
    },
    {
        id: 26,
        title: "Django Unchained",
        description: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
        releaseDate: "2012-12-25",
        rating: 4.3,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/0fUCuvNlOCg"
    },
    {
        id: 27,
        title: "The Wolf of Wall Street",
        description: "Based on the true story of Jordan Belfort, from his rise to a wealthy stockbroker living the high life to his fall involving crime, corruption and the federal government.",
        releaseDate: "2013-12-25",
        rating: 4.3,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/iszwuX1AK6A"
    },
    {
        id: 28,
        title: "Gone Girl",
        description: "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
        releaseDate: "2014-10-03",
        rating: 4.2,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/2-_-1nJf8Vg"
    },
    {
        id: 29,
        title: "The Big Lebowski",
        description: "Jeff 'The Dude' Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.",
        releaseDate: "1998-03-06",
        rating: 4.2,
        imageUrl: "https://th.bing.com/th/id/OIP.RiG4_BAvvfqb1biF-9A3bgAAAA?w=127&h=171&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        trailer: "https://www.youtube.com/embed/cd-go0oBF4Y"
    },
    {
        id: 30,
        title: "Inglourious Basterds",
        description: "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
        releaseDate: "2009-08-21",
        rating: 4.2,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/KnrRy6kSFF0"
    }
];

export default moviesData;