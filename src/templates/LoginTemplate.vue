<template>
    <div>
        <header>
            <nav-bar logo="Social" url="/" cor="blue">
                <li v-if="!usuario"><router-link to="/login">Login</router-link></li>
                <li v-if="!usuario"><router-link to="/cadastro">Cadastre-se</router-link></li>
                <li v-if="usuario"><router-link to="/perfil">{{usuario.name}}</router-link></li>
                <li v-if="usuario"><a v-on:click="sair()">Sair</a></li>
            </nav-bar>
        </header>
        <main>
            <div class="container">
                <div class="row">
                    <grid tamanho="8">
                        <slot name="menu"/>
                    </grid>
                    <grid tamanho="4">
                        <slot name="principal"/>
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
        name: "LoginTemplate",
        components: {Grid, Rodape, NavBar},
        created(){
            let user = sessionStorage.getItem("usuario");
            if(user){
                this.usuario = JSON.parse(user);
                this.$router.push("/");
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
            }
        }
    }
</script>

<style scoped>

</style>