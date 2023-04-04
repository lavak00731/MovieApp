<template>
    <header>
        <navbar />
    </header>
    <div class="fav-wrapper">
        <h1>Your Favorites movies</h1>
        <template v-if="favList?.length > 0">
            <div class="movie-container">
                <div class="row g-3">
                    <div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch" v-for="movie in favList">
                        <div class="card mb-3">
                            <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" class="card-img-top"
                                :alt="movie.title">
                            <div class="card-body">
                                <h5 class="card-title">{{ movie.title }}</h5>
                                <p class="card-text">{{ movie.overview }}</p>
                                <p class="card-text"><small class="text-body-secondary"><router-link :to="{
                            name: 'Movie',
                            params: {
                                id: movie.id
                            }
                        }"  class="btn btn-primary">Details</router-link></small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="no-movies">
                <p>No favorites movies here...</p>
            </div>
        </template>
    </div>
</template>

<script>
    import NavBar from './../components/NavBar.vue';
    export default {
        data: () => {
            return {
                favList: JSON.parse(localStorage.getItem('favList'))
            }
        },
        components: {
            navbar: NavBar
        }
    }
</script>

<style scoped>

</style>