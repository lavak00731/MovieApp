<template>
    <nav aria-label="Pagination">
        <ul class="pagination justify-content-center">
            <li class="page-item disabled">
                <button type="button" class="page-link">Previous</button>
            </li>
            <li class="page-item" v-for="movie in movies">
                <button type="button" class="page-link">{{ movie.page }}</button>
            </li>
            <li class="page-item">
                <button type="button" class="page-link">Next</button>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>