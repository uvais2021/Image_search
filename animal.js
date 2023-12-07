const apiKey = 'wPum4FQqv_jtJWL-4_Y_cbl15IXy9NkJTYFRjuaPUic';

const form = document.getElementById('search-form');
const inputImg = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const showMore = document.getElementById('sm-btn');
// const searchbtn = document.getElementById('search-btn'); // Assuming searchbtn is a button

let inputData = '';
let page = 1;
const inputValue = document.querySelector('input');

async function searchImg() {
    inputData = inputValue.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const results = data.results;
  
    if (page == 1) {
        searchResults.innerHTML = "";
    }
    results.map((result) => {
        var imgWrapper = document.createElement('div');
        imgWrapper.classList.add("search-result");
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_discription;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_discription;

        imgWrapper.appendChild(image);
        imgWrapper.appendChild(imageLink);
        searchResults.appendChild(imgWrapper);
    });
    page++;
    if (page > 1) {
        showMore.style.display = "block";
    }
}

// Attach the event listener to the button
form.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImg();
});

showMore.addEventListener('click', () => {
    searchImg();
});
