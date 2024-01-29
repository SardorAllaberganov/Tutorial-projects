const list = document.getElementById("list");
let isLoading = false;
let page = 1;
window.addEventListener("scroll", () => {
    if (
        window.innerHeight + window.scrollY >=
            document.body.offsetHeight - 300 &&
        !isLoading
    ) {
        isLoading = true;
        fetchData();
    }
});

function fetchData() {
    fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=a4942ba2bb35ba2f7205bedb5a8989bc&page=" +
            page
    )
        .then((response) => response.json())
        .then((data) => {
            data.results.forEach((item) => {
                list.innerHTML += `<li>
                    <h3>${item.title}</h3>
                    <div style='background-image: url(https://image.tmdb.org/t/p/w500/${item.poster_path})'></div>
                </li>`;
            });
            isLoading = false;
            page++;
        });
}

fetchData();
