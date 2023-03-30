<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">MovieApp</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" list="datalistOptions" @input="inputSearch">
                <datalist id="datalistOptions">
                    <option :value="result.title" v-for="result in searchResult.results"/>
                </datalist>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
</template>

<script>
    import { searchMovies } from "../services/searchMovies";
    import { debounce } from "../helpers/debounce";
    export default { 
        data: () => {                   
            return {
                searchResult: {}
            }
        },       
        methods: {
            inputSearch: function(e) {
                if(e.target.value.length <= 0 ) return;
                e.preventDefault();
                debounce(searchMovies(e.target.value).then((data) => {
                    this.searchResult = data;
                }))
                
            }
        }
    }
</script>

<style scoped>

</style>