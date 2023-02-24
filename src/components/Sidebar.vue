<template>
    <aside :class="`${is_expanded && 'is-expanded'}`">
        <div class="logo">
            <img src="../assets/vue.svg" alt="Vue">
        </div>
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-icons">keyboard_double_arrow_right</span>
            </button>
        </div>
        <h3>Menu</h3>
        <div class="menu">
          <router-link class="button" to="/">
              <span class="material-icons">home</span>
              <span class="text">Home</span>
          </router-link>
            <router-link class="button" to="/team">
                <span class="material-icons">group</span>
                <span class="text">Group</span>
            </router-link>
            <router-link class="button" to="/contact">
                <span class="material-icons">history</span>
                <span class="text">History</span>
            </router-link>
            <router-link class="button" to="/about">
                <span class="material-icons">input</span>
                <span class="text">Get Started</span>
            </router-link>
        </div>

        <div class="flex"></div>
            <div class="menu">
            <router-link class="button" to="/settings">
                <span class="material-icons">settings</span>
                <span class="text">Settings</span>
            </router-link>
        </div>


    </aside>
</template>

<script setup>
    import {ref} from 'vue'

    const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

    const ToggleMenu = () => {
        is_expanded.value = !is_expanded.value

        localStorage.setItem("is_expanded", is_expanded.value)
    }
</script>

<style lang="scss" scoped>
    aside{
        display: flex;
        flex-direction: column;
        width: calc(3rem + 32px);
        min-height: 100vh;
        overflow: hidden;
        padding: 1rem;

        background-color: var(--dark);
        color: var(--light);

        transition: 0.2s ease-out;


        &.is-expanded{
            width: var(--sidebar-width);

            .menu-toggle-wrap{
                top: -3rem;

                .menu-toggle{
                    transform: rotate(-180deg);

                }
            }
            h3, .button .text {
                opacity: 1;
            }
            h3{
                color: var(--grey);
                margin-bottom: 0.5rem;
                font-size: 1rem;
                text-transform: uppercase;
            }
            .button{
                .material-icons{
                    margin-right: 1rem;
                }
            }
        }

        h3, .button .text {
            font-size: 1.2rem;
            opacity: 0;
            transition: 0.3s ease-out;
        }

        .flex{
            flex: 1 1 0;
        }

        .menu{
            margin: 0 -1rem;

            .button{
                text-decoration: none;
                display: flex;
                align-items: center;

                padding: 0.5rem 1rem;
                transition: 0.2s ease-out;

                .material-icons{
                    font-size: 2rem;
                    color: var(--light);
                    transition: 0.2s ease-out;
                }
                .text{
                    color: var(--light);
                    transition: 0.2s ease-out;
                }
                &:hover, &.router-link-exact-active{
                    background: var(--dark-alt);

                    .material-icons, .text {
                        color: var(--primary);
                    }
                }
                &.router-link-exact-active{
                 border-right: 5px solid var(--primary);
                }
            }
        }

        @media (max-width: 768px) {
            position: fixed;
            z-index: 99;
        }



        .logo{
            margin-bottom: 1rem;


            img{
                width: 2rem;
            }
        }
        .menu-toggle-wrap{
            display: flex;
            justify-content: flex-end;
            margin-bottom: 1rem;


            position: relative;
            top: 0;
            transition: 0.2s ease-out;

            .menu-toggle{
                transition: 0.2s ease-out;

                .material-icons{
                    font-size: 2rem;
                    color: var(--light);
                    transition: 0.2s ease-out;
                }
                &:hover{
                    .material-icons{
                        color: var(--primary);
                        transform: translateX(0.5rem);
                    }
                }
            }
        }
    }
</style>