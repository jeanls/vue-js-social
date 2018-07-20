<template>
    <grid tamanho="12">
        <card>
            <div class="row valign-wrapper">
                <grid tamanho="4">
                    <img src="https://materializecss.com/images/yuna.jpg" alt="" class="circle responsive-img">
                </grid>
                <grid tamanho="8">
                    <span class="black-text">
                        <h5>Fulana de Tal</h5>
                        This is a square image. Add the "circle" class to it to make it appear circular.
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
        components: {Card, Grid}
    }
</script>

<style scoped>

</style>