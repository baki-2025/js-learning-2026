let movies = [
    {tittle: "Inception" , year:2010, rating: 8.8 , genre: "Sci-Fi" },
    {tittle: "Titanic" ,year:1997, rating: 7.9 , genre: "Romance"},
    {tittle: "The Matrix" , year:1999, rating: 8.7 , genre: "Sci-Fi" },
    {tittle: "Avatar" , year:2009, rating: 7.8 , genre: "Sci-Fi" },
    {tittle: "Notebook" , year:2004, rating: 8.9 , genre: "Romance" },
];

// 1.Sci-Fi movie rating are organized by  desending order

let topSciFi = movies?.filter((m) => m.genre === "Sci-Fi")?.sort((a,b) => b.rating- a.rating)?.map((m) => `tittle: ${m.tittle}, rating: (${m.rating})`)?.forEach((m) => console.log(`Dekho ki dekbo na ${m}`))

// console.log(topSciFi);