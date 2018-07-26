<template>
    <login-template>
        <div slot="menu">
            <card>
                <img style="width: 100%;height: auto" src="https://static.quizur.com/i/b/5b035c77702c13.471891555b035c775c3ff9.54480388.png" class="responsive-img">
            </card>
        </div>
        <div slot="principal">
            <card>
                <h5>Cadastro</h5>
                <span v-for="erro in errors" style="color: white" class="badge red">{{erro[0]}}</span>
                <input type="text" name="login" placeholder="Nome" v-model="name"/>
                <input type="text" placeholder="Email" v-model="email"/>
                <input type="password" v-model="password" placeholder="Senha"/>
                <input type="password" v-model="password_confirmation" placeholder="Confirme sua senha"/>
                <router-link to="/login"><button type="button" class="btn orange waves-effect">Já tenho conta</button></router-link>
                <button type="button" v-on:click="cadastro()" class="btn waves-effect">Cadastrar</button>
            </card>
        </div>
    </login-template>
</template>

<script>
    import LoginTemplate from "../../templates/LoginTemplate";
    import Card from "../layouts/Card";
    import axios from 'axios';
    export default {
        name: "Cadastro",
        components: {Card, LoginTemplate},
        data(){
            return{
                email: "",
                password: "",
                password_confirmation: "",
                name: "",
                errors: []
            }
        },
        methods:{
            cadastro(){
                axios.post(`http://127.0.0.1:8000/api/cadastro`, {
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                    name: this.name
                }).then(response => {
                    if(response.data.status === true){
                        if(response.data.token){
                            sessionStorage.setItem("usuario", JSON.stringify(response.data.user));
                            sessionStorage.setItem("token", response.data.token);
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
                    console.log("Tente novamente mais tarde");
                })
            }
        }
    }
</script>

<style scoped>

</style>