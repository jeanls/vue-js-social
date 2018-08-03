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
                <span v-for="erro in errors" style="color: white" class="badge red">{{erro[0]}}</span>
                <input type="text" name="login" v-model="email" placeholder="Login"/>
                <input type="password" v-model="password" name="senha" placeholder="Senha"/>
                <router-link to="/cadastro"><button type="button" class="btn orange waves-effect">Cadastre-se</button></router-link>
                <button v-on:click="login()" type="button" class="btn waves-effect">Entrar</button>
            </card>
        </div>
    </login-template>
</template>

<script>
    import LoginTemplate from "../../templates/LoginTemplate";
    import Card from "../layouts/Card";
    export default {
        name: "Login",
        components: {Card, LoginTemplate},
        data(){
            return{
                email: "",
                password: "",
                errors: []
            }
        },
        methods:{
            login(){
                this.$http.post(this.$urlAPI + "login", {
                    email: this.email,
                    password: this.password
                }).then(response => {
                    if(response.data.status === true){
                        if(response.data.token){
                            sessionStorage.setItem("usuario", JSON.stringify(response.data.user));
                            sessionStorage.setItem("token", response.data.token);
                            this.$store.commit('setUsuario', JSON.parse(JSON.stringify(response.data.user)));
                            this.$store.commit('setToken', response.data.token);
                            this.$router.push('/');
                        }
                    }else {
                        if(response.data.errors){
                            this.errors = Object.values(response.data.errors);
                            for(let erro of Object.values(response.data.errors)){
                                console.log(erro);
                            }
                        }else {
                            console.log("CREDÊNCIAIS INVÁLIDAS")
                        }
                    }
                }).catch(e => {
                    console.log(e);
                })
            }
        }
    }
</script>

<style scoped>

</style>