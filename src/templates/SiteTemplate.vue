<template>
    <div>
        <header>
            <nav-bar logo="Social" url="/" cor="blue">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/login">Login</router-link></li>
                <li><router-link to="/cadatro">Cadastre-se</router-link></li>
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
        <rodape cor="blue"></rodape>
    </div>
</template>

<script>
    import NavBar from "../components/layouts/NavBar";
    import Rodape from "../components/layouts/Rodape";
    import Grid from "../components/layouts/Grid";
    export default {
        name: "SiteTemplate",
        components: {Grid, Rodape, NavBar}
    }
</script>

<style scoped>

</style>