<template>
    <span>
        <div class="row">
            <div class="input-field col s12">
                <textarea id="textarea1" class="materialize-textarea"></textarea>
                <label for="textarea1">Textarea</label>
            </div>
        </div>
        <div class="row">
            <div class="col s2 offset-s10">
                <button class="btn">Publicar</button>
            </div>
        </div>
        <card-conteudo url-imagem="https://materializecss.com/images/yuna.jpg" nome="Fulana de Tal"
                       descricao="Texto de descrição" titulo="Olá mundo" data="20/07/2018 11:09">
            <card-detalhe url-imagem="https://materializecss.com/images/sample-1.jpg" descricao="Descrição de teste"
                          nome="Fulana de Tal"/>
        </card-conteudo>
    </span>
</template>

<script>
    import Grid from "./layouts/Grid";
    import CardConteudo from "./social/CardConteudo";
    import CardDetalhe from "./social/CardDetalhe";

    export default {
        name: "Home",
        components: {CardDetalhe, CardConteudo, Grid}
    }
</script>

<style scoped>

</style>
