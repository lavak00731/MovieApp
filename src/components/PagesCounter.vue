<template>
    <p class="text-end">
        <strong>Results: </strong>
        <span>{{ movies.page * movies.results.length }} of </span>
        <span>{{ movies.total_results }}</span>
    </p>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>