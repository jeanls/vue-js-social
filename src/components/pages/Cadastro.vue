<template>
    <login-template>
        <div slot="menu">
            <card>
                <img style="width: 100%;height: auto" src="https://static.quizur.com/i/b/5b035c77702c13.471891555b035c775c3ff9.54480388.png" class="responsive-img">
            </card>
        </div>
        <div slot="principal">
            <card>
                <h5>Cadastro</h5>
                <form>
                    <input type="text" name="login" placeholder="Login"/>
                    <input type="password" name="senha" placeholder="Senha"/>
                    <input type="password" name="senha2" placeholder="Confirme sua senha"/>
                    <router-link to="/login"><button type="button" class="btn orange waves-effect">Já tenho conta</button></router-link>
                    <button class="btn waves-effect">Cadastrar</button>
                </form>
            </card>
        </div>
    </login-template>
</template>

<script>
    import LoginTemplate from "../../templates/LoginTemplate";
    import Card from "../layouts/Card";
    export default {
        name: "Cadastro",
        components: {Card, LoginTemplate}
    }
</script>

<style scoped>

</style>