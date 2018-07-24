<template>
    <login-template>
        <div slot="menu">
            <card>
                <img style="width: 100%;height: auto" src="https://static.quizur.com/i/b/5b035c77702c13.471891555b035c775c3ff9.54480388.png" class="responsive-img">
            </card>
        </div>
        <div slot="principal">
            <card>
                <h5>Login</h5>
                <form>
                    <input type="text" name="login" v-model="email" placeholder="Login"/>
                    <input type="password" v-model="password" name="senha" placeholder="Senha"/>
                    <router-link to="/cadastro"><button type="button" class="btn orange waves-effect">Cadastre-se</button></router-link>
                    <button v-on:click="login()" type="button" class="btn waves-effect">Entrar</button>
                </form>
            </card>
        </div>
    </login-template>
</template>

<script>
    import LoginTemplate from "../../templates/LoginTemplate";
    import Card from "../layouts/Card";
    import axios from 'axios';
    export default {
        name: "Login",
        components: {Card, LoginTemplate},
        data(){
            return{
                email: "",
                password: ""
            }
        },
        methods:{
            login(){
                axios.post(`http://127.0.0.1:8000/api/login`, {
                    email: this.email,
                    password: this.password
                }).then(response => {
                    if(response.data.status === true){
                        if(response.data.token){
                            sessionStorage.setItem("usuario", JSON.stringify(response.data.user));
                            sessionStorage.setItem("token", response.data.token);
                            this.$router.push('/');
                        }
                    }else {
                        if(response.data.errors){
                            for(let erro of Object.values(response.data.errors)){
                                console.log(erro);
                            }
                        }else {
                            console.log("CREDÊNCIAIS INVÁLIDAS")
                        }
                    }
                }).catch(e => {

                    console.log("Tente novamente mais tarde");
                })
            }
        }
    }
</script>

<style scoped>

</style>