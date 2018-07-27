<template>
    <site-template>
        <div slot="menu">
            <card>
                <div class="row valign-wrapper">
                    <grid tamanho="12">
                        <img :src="usuario.imagem" alt="" class="responsive-img">
                    </grid>
                </div>
            </card>
        </div>
        <div slot="conteudo">
            <card>
                <h2>Perfil</h2>
                <span v-for="erro in errors" style="color: white" class="badge red">{{erro[0]}}</span>
                <span v-if="mensagem" style="color: white" class="badge green">{{mensagem}}</span>
                <input type="text" v-model="name" placeholder="Nome"/>
                <input type="text" v-model="email" placeholder="Email"/>
                <div class="file-field input-field">
                    <div class="btn">
                        <span>Imagem</span>
                        <input v-on:change="salvaImagem" type="file">
                    </div>
                    <div class="file-path-wrapper">
                        <input v-model="img" class="file-path validate" type="text">
                    </div>
                </div>
                <input type="password" v-model="password" placeholder="Senha"/>
                <input type="password" v-model="password_confirmation" placeholder="Confirmação de Senha"/>
                <a v-on:click="perfil()" class="waves-effect waves-light btn"><i class="material-icons left">save</i>Atualizar</a>
            </card>
        </div>
    </site-template>
</template>

<script>
    import SiteTemplate from "../../templates/SiteTemplate";
    import Card from "../layouts/Card";
    import Grid from "../layouts/Grid";
    import axios from 'axios';
    export default {
        name: "Perfil",
        components: {Grid, Card, SiteTemplate},
        data(){
            return{
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
                img: "",
                token: "",
                errors: [],
                mensagem: false,
                imagem: "",
                usuario:""
            }
        },
        created(){
            this.token = sessionStorage.getItem("token");
            let user = sessionStorage.getItem("usuario");
            if(user){
                let userObject = JSON.parse(user);
                this.name = userObject.name;
                this.email = userObject.email;
            }else {
                this.$router.push("/login");
            }
        },
        methods:{
            perfil(){
                axios.put(`http://127.0.0.1:8000/api/perfil`, {
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                    name: this.name,
                    imagem: this.imagem
                }, {"headers":{"authorization": "Bearer " + this.token}}).then(response => {
                    if(response.data.token){
                        this.mensagem = "Perfil atualizado com sucesso";
                        sessionStorage.setItem("usuario", JSON.stringify(response.data));
                        this.errors = [];
                        this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
                        console.log(this.usuario.imagem);
                    }else {
                        this.mensagem = false;
                        this.errors = Object.values(response.data);
                    }
                }).catch(e => {
                    console.log(e);
                })
            },
            salvaImagem(e){
                let file = e.target.files || e.dataTransfer.files;
                if(!file.length){
                    return;
                }
                let reader = new FileReader();
                reader.onloadend = (e) => {
                    this.imagem = e.target.result;
                };
                reader.readAsDataURL(file[0]);
            }
        }
    }
</script>

<style scoped>

</style>