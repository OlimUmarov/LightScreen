<template>

    <div class="app">
        <SideBar/>
        <router-view/>
    </div>

</template>

<script>
    import SideBar from "./components/Sidebar.vue";
    export default {
        components: {SideBar}
    }

</script>

<style lang="scss" scoped>

    .app{
        display: flex;

        main{
            flex: 1 1 0;
            padding: 2rem;

            @media (max-width: 768px) {
                padding: 6rem;
            }
        }
    }
</style>
