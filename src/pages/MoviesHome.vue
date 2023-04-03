<template>
    <header>
        <navbar />
    </header>  
    <div class="movies-wrapper" v-if="movies">
        <h1>Welcome to Movie App</h1>
        <p class="text-end">
            <strong>Results: </strong>
            <span>{{ movies.page * movies.results?.length }} of </span>
            <span>{{ movies.total_results }}</span>
        </p>
        <paginate
            :page-count="500"
            :page-range="3"
            :margin-pages="2"
            :click-handler="clickCallback"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'pagination'"
            :page-class="'page-item'"
        >
        </paginate>
        <div class="row g-3">
            <div class="col-12 col-sm-6 col-md-4  d-flex align-items-stretch" v-for="movie in movies.results">
                <div class="card">
                    <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" class="card-img-top"
                        :alt="movie.title">
                    <div class="card-body">
                        <h2 class="card-title">{{ movie.title }}</h2>
                        <router-link target="_blank" :to="{
                            name: 'Movie',
                            params: {
                                id: movie.id
                            }
                        }"  class="btn btn-primary">Details</router-link>
                    </div>
                    <div class="card-footer">
                        <div class="form-check form-switch">
                            <input class="form-check-input" 
                            type="checkbox" 
                            role="switch" 
                            :id="`fav${movie.id}`" 
                            @change="makeItFav(movie, $event)"
                            :checked="isChecked(movie.id)">
                            <label class="form-check-label" :for="`fav${movie.id}`">Make this film your favorite</label>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <paginate class="my-2"
            :page-count="500"
            :page-range="3"
            :margin-pages="2"
            :click-handler="clickCallback"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'pagination'"
            :page-class="'page-item'"
        >
        </paginate>
    </div>
    <div class="loader-wrapper" v-else>
        <h1>Loading...</h1>
    </div>
</template>

<script>
    import {
        getMovies
    } from './../services/getMovies';
    import NavBar from './../components/NavBar.vue';
    import Paginate from "vuejs-paginate-next";
    export default {
        name: "MoviesHome",
        components: {
            paginate: Paginate,
            navbar: NavBar
        },
        data: () => {          
            return {
                movies: {},
                favList: JSON.parse(localStorage.getItem('favList'))
            }
        },
        created() {
            getMovies().then((data) => {
                this.movies = data;
            });
        },
        methods: {
            clickCallback: function (pageNum) {
                getMovies(pageNum).then((data) => {
                    this.movies = data;
                });
            },
            makeItFav: function(movie, event) {
                if( !this.favList || this.favList.length === 0) {
                    this.favList = JSON.stringify([movie]);
                    localStorage.setItem('favList', this.favList);
                } else {
                    if(event.explicitOriginalTarget.checked) {
                        this.favList = JSON.stringify([...this.favList, movie]);                      
                    } else {
                        this.favList = JSON.stringify(this.favList.filter( fav => fav.id !== movie.id));
                    }
                    localStorage.setItem('favList', this.favList);
                }
            },
            isChecked: function (id) {
                this.favList = JSON.parse(localStorage.getItem('favList'));
                if(this.favList && this.favList.length > 0) {
                    return this.favList.some(el => el.id === id);                  
                }
            }
        },
    }
</script>

<style scoped>

</style>