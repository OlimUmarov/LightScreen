<template>

    <div class="app">
        <Sidebar/>
        <router-view/>
        <router-link to="/about"/>
    </div>

</template>

<script setup>
    import Sidebar from './components/SideBar.vue'
</script>

<style lang="scss" scoped>

    :root{
        --primary: #4ade80;
        --primary-alt: #22c55e;
        --grey: #64748b;
        --dark: #1e293b;
        --light: #f1f5f9;
        --sidebar-width: 300px
    }
    *{
        margin: 0;
        padding: 0;
        min-width: 100%;
        min-height: 100%;
        box-sizing: border-box;
        font-family: 'Fira Sans', sans-serif;
    }
    body{
        background: var(--light);
    }
    button{
        cursor: pointer;
        appearance: none;
        border: none;
        outline: none;
        background: none;
    }
    .app{
        display: flex;

        main{
            flex: 1 1 0;
        }
    }
</style>
