<template>
    <div id="app">
        <header>
            <nav-bar logo="Social" url="#" cor="blue"/>
        </header>
        <main>
            <div class="container">
                <div class="row">
                    <grid tamanho="4">
                        <profile/>
                    </grid>
                    <grid tamanho="8">
                        <router-view/>
                    </grid>
                </div>
            </div>
        </main>
        <!--<rodape cor="blue">-->
            <!--<li><a class="grey-text text-lighten-3" href="#!">Home</a></li>-->
            <!--<li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>-->
            <!--<li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>-->
            <!--<li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>-->
        <!--</rodape>-->
    </div>
</template>

<script>
    import Home from "./components/Home";
    import NavBar from "./components/layouts/NavBar";
    import Rodape from "./components/layouts/Rodape";
    import Grid from "./components/layouts/Grid";
    import Card from "./components/layouts/Card";
    import CardConteudo from "./components/social/CardConteudo";
    import Profile from "./components/social/Profile";
    import CardDetalhe from "./components/social/CardDetalhe";

    export default {
        name: 'App',
        components: {CardDetalhe, Profile, CardConteudo, Card, Grid, Rodape, NavBar, Home}
    }
</script>

<style>

</style>
