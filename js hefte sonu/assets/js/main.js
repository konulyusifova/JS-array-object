
var cinemas = [
    {
        point: "7.9",
        img:"https://m.media-amazon.com/images/M/MV5BYmZjNGQ2NzktMDUzNi00NGMxLWFkMzctZTlhY2JjOWU4NDU1XkEyXkFqcGdeQXVyMTQyNDk2NzE@._V1_.jpg",
        name: "Country Romance",
        desc: "Lorem ipsum dolor sit"
    },
    {
        point: "8.1",
        img:"https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/77/00/10/lostc_salone_poster_1400x2100.jpg",
        name: "The lost city",
        desc: "Lorem ipsum dolor sit"
    },
    {
        point: "6.8",
        img:"https://yc.cldmlk.com/8jdhagkgp1c93jajx0memntq7r/1627646556218_Poster.jpeg",
        name: "Aladdin",
        desc: "Lorem ipsum dolor sit"
    },
    {
        point: "6.3",
        img:"https://throughthesilverscreenuk.files.wordpress.com/2017/03/beauty-and-the-beast-2017.jpg",
        name: "Beauty and best",
        desc: "Lorem ipsum dolor sit"
    },
    {
        point: "7.5",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkvwYHN5D5Ht4lPDuGkHBqobVm68k4EtotQ&usqp=CAU",
        name: "Save the cinema",
        desc: "Lorem ipsum dolor sit"
    },
    {
        point: "8.1",
        img:"https://4.bp.blogspot.com/-WV13fFQXD-Y/UcQ4m9MBq8I/AAAAAAAAA1A/jCgkQw94s_M/s1600/RAANJHANAA_POSTER.jpg",
        name: "Eros international",
        desc: "Lorem ipsum dolor sit"
    },
    {
        point: "5.4",
        img:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/52d24c99322159.5ef08afdcf399.jpg",
        name: "Tom Hanks & <br> Gary Goetzman",
        desc: "Lorem ipsum dolor sit"
    },
    {
        point: "6.8",
        img:"https://m.media-amazon.com/images/M/MV5BNzU4NWEwNDItMzMzYy00ZDYyLWIxZjMtMDlkYWVjNjQwYzBjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
        name: "Butterfly man",
        desc: "Lorem ipsum dolor sit"
    }
]
for (var i = 0; i < cinemas.length; i++) {
    area.innerHTML += `<div class="col-3 mt-3">
        <div class="bal">
            <p>${cinemas[i].point}</p>
                    </div>
                    <div class="image" style="background-image: url(${cinemas[i].img});">
                        <i class="lar la-play-circle"></i>
                    </div>
                    <div>
                        <h3>${cinemas[i].name}</h3>
                        <span>${cinemas[i].desc}</span>
                    </div>
</div>`
}