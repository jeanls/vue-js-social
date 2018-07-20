<template>
    <div>
        <header>
            <nav-bar logo="Social" url="#" cor="blue"/>
        </header>
        <main>
            <div class="container">
                <slot/>
            </div>
        </main>
        <rodape cor="blue"></rodape>
    </div>
</template>

<script>
    import NavBar from "../components/layouts/NavBar";
    import Rodape from "../components/layouts/Rodape";
    export default {
        name: "LoginTemplate",
        components: {Rodape, NavBar}
    }
</script>

<style scoped>

</style>