<template>
    <div class="card">
        <div class="card-content">
            <div class="row valign-wrapper">
                <grid tamanho="1">
                    <img :alt="nome" :src="urlImagem || 'https://materializecss.com/images/yuna.jpg'" alt="" class="circle responsive-img">
                </grid>
                <grid tamanho="11">
                    <span class="black-text">
                        <b>{{nome || 'Fulana de Tal'}}</b> - <small>{{data || '20/07/2018 10:56'}}</small>
                    </span>
                </grid>
            </div>
            <slot/>
        </div>
        <div class="card-action">
            <a href="#"><i class="material-icons">favorite_border</i></a>
            <a href="#"><i class="material-icons">insert_comment</i></a>
        </div>
    </div>
</template>

<script>
    import Grid from "../layouts/Grid";
    export default {
        name: "CardConteudo",
        components: {Grid},
        props:['nome', 'data', 'urlImagem']
    }
</script>

<style scoped>

</style>