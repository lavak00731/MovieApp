<template>
    <h1>Welcome to Movie App</h1>
    <div class="row g-3">
        <div class="col-12 col-sm-6 col-md-4  d-flex align-items-stretch" v-for="movie in movies.results">
            <div class="card">
                <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" class="card-img-top" :alt="movie.title">
                <div class="card-body">
                    <h2 class="card-title">{{ movie.title }}</h2>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>        
    </div>
    
</template>

<script>
    import {
        getMovies
    } from '../services/getMovies';

    export default {
        setup() {
            let movies = {};
            return {
                movies
            }
        },
        mounted() {
            getMovies().then((data) => {
                this.movies = data;
            });

        }
    }
</script>

<style lang="scss" scoped>

</style>