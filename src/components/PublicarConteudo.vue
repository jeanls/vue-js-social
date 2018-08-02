<template>
    <div>
        <div style="margin-bottom: 5px" class="row">
            <grid tamanho="12" class="input-field">
                <input type="text" v-model="conteudo.titulo">
                <textarea v-if="conteudo.titulo" placeholder="Corpo do texto" v-model="conteudo.texto" id="conteudo" class="materialize-textarea"></textarea>
                <label for="conteudo">O que está acontecendo?</label>
                <input placeholder="Link" v-if="conteudo.titulo && conteudo.texto" type="text" v-model="conteudo.link">
                <input placeholder="Imagem" v-if="conteudo.titulo && conteudo.texto" type="text" v-model="conteudo.imagem">
            </grid>
        </div>
        <div class="row">
            <grid tamanho="2" class="no-padding offset-s10">
                <button @click="publicar()" v-if="conteudo.titulo && conteudo.texto" style="margin-right: 9px" class="btn waves-effect waves-light right">Publicar</button>
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
                conteudo: {titulo: '', texto: '', link: '', imagem: ''}
            }
        },
        methods: {
            publicar(){
                this.$http.post(this.$urlAPI + "conteudo/adicionar", {
                    titulo: this.conteudo.titulo,
                    texto: this.conteudo.texto,
                    link: this.conteudo.link,
                    imagem: this.conteudo.imagem
                }, {"headers":{"authorization": "Bearer " + this.$token()}}).then(response => {
                    if(response.data.status){
                        console.log(response.data.conteudos);
                    }
                }).catch(e => {
                    console.log(e);
                })
            }
        }
    }
</script>

<style scoped>

</style>