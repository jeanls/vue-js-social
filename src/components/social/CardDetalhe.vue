<template>
    <div class="row">
        <grid tamanho="12">
            <div v-if="urlImagem" class="card-image">
                <img :alt="nome" :src="urlImagem">
                <span class="card-title">{{titulo || 'Título do cartão'}}</span>
            </div>
            <div v-if="descricao" class="card-content">
                <p>{{descricao}}</p>
            </div>
        </grid>
    </div>
</template>

<script>
    import Grid from "../layouts/Grid";
    export default {
        name: "CardDetalhe",
        components: {Grid},
        props:['nome', 'titulo', 'urlImagem', 'descricao']
    }
</script>

<style scoped>

</style>