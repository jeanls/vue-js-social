<template>
    <site-template>
        <div slot="menu">
            <card>
                <div class="row valign-wrapper">
                    <grid tamanho="12">
                        <img src="https://materializecss.com/images/yuna.jpg" alt="" class="circle responsive-img">
                    </grid>
                </div>
            </card>
        </div>
        <div slot="conteudo">
            <card>
                <h2>Perfil</h2>
                <input type="text" placeholder="Nome"/>
                <input type="text" placeholder="Email"/>
                <div class="file-field input-field">
                    <div class="btn">
                        <span>Imagem</span>
                        <input type="file">
                    </div>
                    <div class="file-path-wrapper">
                        <input class="file-path validate" type="text">
                    </div>
                </div>
                <input type="password" placeholder="Senha"/>
                <input type="password" placeholder="Confirmação de Senha"/>
                <a class="waves-effect waves-light btn"><i class="material-icons left">save</i>Atualizar</a>
            </card>
        </div>
    </site-template>
</template>

<script>
    import SiteTemplate from "../../templates/SiteTemplate";
    import Card from "../layouts/Card";
    import Grid from "../layouts/Grid";
    export default {
        name: "Perfil",
        components: {Grid, Card, SiteTemplate}
    }
</script>

<style scoped>

</style>