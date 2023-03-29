export async function getSpecificMovie(id) {
    try {
        const apiKey = '26b4b0ba1ea14cc6730d7cff2ef58bc6';
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&page=${apiPage}`);
        const jsonData = await response.json();
        return await jsonData;
    } catch (error) {
        throw new Error(error);
    }
}