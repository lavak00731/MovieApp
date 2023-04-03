<template>
    <header>
        <navbar />
    </header> 
    <div class="movie-wrapper" v-if="movie">
        <h1>{{ movie.title }}</h1>
        <div class="row">
            <div class="col">
                <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" :alt="movie.title">
            </div>
            <div class="col">
               <p class="genre text-start"><strong>Genre: </strong><span v-for="genre in movie.genres">{{ genre.name }}</span></p> 
               <figure class="text-end">
                    <blockquote class="blockquote">
                        <p>{{ movie.tagline }}</p>
                    </blockquote>
                </figure>
               <p class="overview text-start">{{ movie.overview }}</p>
            </div>
        </div>
    </div>
    <div v-else>
        Loading...
    </div>
</template>

<script>
    import {
        getSpecificMovie
    } from './../services/getSpecificMovie';
    import NavBar from './../components/NavBar.vue';
    export default {
        props: ['id'],
        components: {
            navbar: NavBar
        },
        data: () => {
            let movie = {};            
            return {
                movie
            }
        },
        created() {
            getSpecificMovie(this.id).then((data) => {
                this.movie = data;
            });
        },
    }
</script>

<style scoped>
    .genre > span:not(:last-child)::after {
        content: " | ";
    }
</style>