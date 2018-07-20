<template>
    <site-template>
        <div class="row" style="margin-bottom: 150px;">
            <grid tamanho="4">
                <profile/>
            </grid>
            <grid tamanho="8">
                <publicar-conteudo/>
                <card-conteudo url-imagem="https://materializecss.com/images/yuna.jpg" nome="Fulana de Tal"
                               descricao="Texto de descrição" titulo="Olá mundo" data="20/07/2018 11:09">
                    <card-detalhe url-imagem="https://materializecss.com/images/sample-1.jpg" descricao="Descrição de teste"
                                  nome="Fulana de Tal"/>
                </card-conteudo>
            </grid>
        </div>
    </site-template>
</template>

<script>
    import Grid from "./layouts/Grid";
    import CardConteudo from "./social/CardConteudo";
    import CardDetalhe from "./social/CardDetalhe";
    import PublicarConteudo from "./PublicarConteudo";
    import Profile from "./social/Profile";
    import SiteTemplate from "../templates/SiteTemplate";

    export default {
        name: "Home",
        components: {SiteTemplate, Profile, PublicarConteudo, CardDetalhe, CardConteudo, Grid}
    }
</script>

<style scoped>

</style>
