$(document).ready(function() {
    

    function addGifToPage(gifUrl) {
        const $newGif = $('<img>', {src: gifUrl, style: 'width: 100%;'});
        const $gridItem = $("<div>", { style: "width: 100%" }).append($newGif);
        $('#gifContainer').append($gridItem);
    }
    
    
    $('#searchButton').on('click', async function() {
        const search = $('#search').val();
        const API_KEY = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
        const SEARCH_ENDPOINT = 'https://api.giphy.com/v1/gifs/search';

        try {
            const response = await axios.get(SEARCH_ENDPOINT, {
                params: {
                    api_key: API_KEY,
                    q: search,
                    limit: 1,
                    offset: Math.floor(Math.random() * 100)
                }
            });

            const gifData = response.data.data[0];
            const gifUrl = gifData.images.original.url;

            addGifToPage(gifUrl);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });

    $('#removeImagesButton').on('click', function() {
        $('#gifContainer').empty();
    });



});