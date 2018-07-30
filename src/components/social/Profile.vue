<template>
    <grid tamanho="12">
        <card>
            <div class="row valign-wrapper">
                <grid tamanho="4">
                    <img :src="usuario.imagem || 'https://materializecss.com/images/yuna.jpg'" :alt="usuario.name" class="circle responsive-img">
                </grid>
                <grid tamanho="8">
                    <span class="black-text">
                        <h5>{{usuario.name || 'Sem nome'}}</h5>
                        {{usuario.descricao || ''}}
                    </span>
                </grid>
            </div>
        </card>
    </grid>
</template>

<script>
    import Grid from "../layouts/Grid";
    import Card from "../layouts/Card";
    export default {
        name: "Profile",
        components: {Card, Grid},
        created(){
            this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
        },
        data(){
            return{
                usuario: {}
            }
        }
    }
</script>

<style scoped>

</style>