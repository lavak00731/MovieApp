<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h1>Movie App - Login</h1>
                <p>In order to enter to our app and see the content, you must log in</p>
                <form action="" @submit.prevent="validateUser">
                    <div class="mb-3">
                        <label for="user" class="form-label">User</label>
                        <input type="text" class="form-control" id="user" placeholder="Your User" v-model="user">
                        <p class="alert" v-if="user !== 'Ezequiel'">User Name must be Ezequiel</p>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" v-model="password">
                    </div>
                    <div class="mb-3">
                        <button type="submit" class="btn btn-primary">Log in</button></div>
                </form> 
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                user: '',
                password: ''
            }
        },
        methods: {
            validateUser: function(){
                const router = this.$router;
                console.log(router)
                if(this.user.length > 0 && this.user === "Ezequiel" && this.password.length > 0) {
                    localStorage.setItem('isLogged', 'true');
                    router.replace('/')
                }
            }
        }
    }
</script>

<style scoped>

</style>