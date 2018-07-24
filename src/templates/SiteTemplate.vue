<template>
    <div id="content">
        <header>
            <nav-bar logo="Social" url="/" cor="blue">
                <li><router-link to="/">Home</router-link></li>
                <li v-if="!usuario"><router-link to="/login">Login</router-link></li>
                <li v-if="!usuario"><router-link to="/cadastro">Cadastre-se</router-link></li>
                <li v-if="usuario"><router-link to="/perfil">{{usuario.name}}</router-link></li>
                <li v-if="usuario"><a v-on:click="sair()">Sair</a></li>
            </nav-bar>
        </header>
        <main>
            <div class="container">
                <div class="row">
                    <grid tamanho="4">
                        <slot name="menu"/>
                    </grid>
                    <grid tamanho="8">
                        <slot name="conteudo"/>
                    </grid>
                </div>
            </div>
        </main>
        <!--<rodape cor="blue"></rodape>-->
    </div>
</template>

<script>
    import NavBar from "../components/layouts/NavBar";
    import Rodape from "../components/layouts/Rodape";
    import Grid from "../components/layouts/Grid";
    export default {
        name: "SiteTemplate",
        components: {Grid, Rodape, NavBar},
        created(){
            let user = sessionStorage.getItem("usuario");
            if(user){
                this.usuario = JSON.parse(user);
            }else {
                this.$router.push("/login");
            }
        },
        data(){
            return{
                usuario: false
            }
        },
        methods:{
            sair(){
                sessionStorage.clear();
                this.usuario = false;
                this.$router.push("/login");
            }
        }
    }
</script>

<style scoped>
    #content{
        overflow: hidden;
    }
</style>