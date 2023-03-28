<template>
    <div>

    </div>
</template>

<script>
    import { getMovies } from '../services/getMovies';
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