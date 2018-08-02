<template>
    <nav v-bind:class="cor || 'blue'">
        <div class="nav-wrapper container">
            <router-link :to="url || '/'" class="brand-logo">{{$store.getters.getNome}}</router-link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <slot/>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "NavBar",
        props: ['logo', 'url', 'cor'],
        created(){
            // this.$store.commit('setNome', 'Outro nome');
        }
    }
</script>

<style scoped>

</style>