const isMobile = require("ismobilejs");

// Handle API calls for what the user searched for
// shouldLoadNew is a boolean value that controls whether a new search
// is occuring or we are getting more results for the previous search
export function searchAPICall(shouldLoadNew, gifsList, searchValue) {
    const LIMIT = isMobile.phone ? 10 : 25;
    const offset = shouldLoadNew ? "" : "&offset=" + gifsList.length;

    return fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw&limit=${LIMIT}&q=` +
            searchValue.split(" ").join("+") +
            offset
    )
        .then(results => {
            return results.json();
        })
        .then(data => {
            const updatedList = shouldLoadNew
                ? data.data
                : gifsList.concat(data.data);

            return updatedList;
        });
}

// Handle API calls to the trending endpoint
export function trendingAPICall(gifsList) {
    const LIMIT = isMobile.phone ? 10 : 25;
    const offset = gifsList.length + 2;
    return fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw&limit=${LIMIT}&offset=` +
            offset
    )
        .then(results => {
            return results.json();
        })
        .then(data => {
            return gifsList.concat(data.data);
        });
}
