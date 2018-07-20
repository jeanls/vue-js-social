<template>
    <div>
        <div style="margin-bottom: 5px" class="row">
            <grid tamanho="12" class="input-field">
                <textarea v-model="conteudo" id="conteudo" class="materialize-textarea"></textarea>
                <label for="conteudo">O que está acontecendo?</label>
            </grid>
        </div>
        <div class="row">
            <grid tamanho="2" class="no-padding offset-s10">
                <button v-if="conteudo" style="margin-right: 9px" class="btn waves-effect waves-light right">Publicar</button>
            </grid>
        </div>

    </div>
</template>

<script>
    import Grid from "./layouts/Grid";
    import CardConteudo from "./social/CardConteudo";
    import CardDetalhe from "./social/CardDetalhe";
    export default {
        name: "PublicarConteudo",
        components: {CardDetalhe, CardConteudo, Grid},
        data(){
            return{
                conteudo: ''
            }
        }
    }
</script>

<style scoped>

</style>