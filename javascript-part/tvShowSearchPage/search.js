const form = document.querySelector('#searchForm');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const searchTerm = form.elements.searchTerm.value;
    const shows = await searchFor(searchTerm);
    addImages(shows);
});

const searchFor = async (searchTerm) => {
    const url = `http://api.tvmaze.com/search/shows?q=${searchTerm}`
    console.log(url);
    const response = await fetch(url)
    return await response.json();
};

const addImages = (shows) => {
    const showsWithImages = shows.filter(elem => elem.show.image);
    for (let elem of showsWithImages) {
        const img = document.createElement('IMG');
        img.src = elem.show.image.medium;
        document.body.append(img);
    }
}