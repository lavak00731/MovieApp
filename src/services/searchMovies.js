export async function searchMovies(query) {
    const apiKey = '26b4b0ba1ea14cc6730d7cff2ef58bc6';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1`
    const encoded = encodeURI(url);
    try {
        const response = await fetch(encoded);
        const jsonData = await response.json();
        return await jsonData;
    } catch (error) {
        throw new Error(error);
    }
}