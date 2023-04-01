<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <router-link  class="navbar-brand" :to="{
                            name: 'Home'                            
                        }">MovieApp</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link" :to="{
                            name: 'Home'                            
                        }">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{
                            name: 'Favorites'                            
                        }">Favorites</router-link>
                </li>
                <li class="nav-item">
                    <span class="nav-link">Welcome Ezequiel</span>
                </li>
                <li class="nav-item">
                    <button type="button" class="btn btn-danger nav-link" @click="logout">Logout</button>
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
                }));                
            },
            logout: function() {
                const router = this.$router;
                localStorage.setItem('isLogged', 'false');
                router.replace('/login')
            }
        }
    }
</script>

<style scoped>
    .router-link-active {
        color: black;
    }
    .btn.btn-danger {
        color: white;
    }
</style>