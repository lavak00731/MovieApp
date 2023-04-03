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
                        <p class="alert alert-danger" v-if="user !== 'Ezequiel' && user !== '' && sendingAttemp">User Name must be Ezequiel</p>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" v-model="password">
                        <p class="alert alert-danger" v-if="password.length < 3 && password !== '' && sendingAttemp">Password min length is 3 characters</p>
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
                password: '',
                sendingAttemp: false
            }
        },
        methods: {
            validateUser: function(){
                const router = this.$router;
                this.user = this.user.trim();
                this.sendingAttemp = true;
                if(this.user.length > 0 && this.user === "Ezequiel" && this.password.length >= 3) {
                    localStorage.setItem('isLogged', 'true');
                    router.replace('/')
                }
            }
        }
    }
</script>

<style scoped>

</style>