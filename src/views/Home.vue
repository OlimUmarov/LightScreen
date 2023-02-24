<template>
    <section class="home">
        <div class="home-active active">
        <!--    Header Part (Light Screen)        -->
        <div class="header">
            Light Screen
        </div>

        <div class="main">
            <!--    Left Part (Content Sharing Section)        -->
            <div class="main-left">
                <div class="main-left-footer">
                    <div class="icons"><span class="material-icons">videocam</span></div>
                    <div class="icons"><span class="material-icons">mic</span></div>
                    <div class="flex"></div>
                    <div class="icons"><span class="material-icons">person_add</span></div>
                </div>
            </div>
            <!--    Right Part (Message Section)        -->
            <div class="main-right">
                <div class="main-right_title">
                    <span class="material-icons">comment</span>
                    <p>Messages</p>
                </div>
                <div class="main-right_messages">
                    <div class="message">Na gap</div>
                </div>
                <div class="main-right_add-message">
                    <input type="text" placeholder="Write a message" class="input-add" v-model="addMessage">
                    <div class="icons"> <span class="material-icons">add_box</span></div>
                </div>
            </div>
        </div>
        <div class="footer">

        </div>
        </div>
        <div class="home-popUp">
            <div class="options">
                <div class="host-meeting">
                    <div class="host-title">Host Meeting</div>
                    <div class="logo"><span class="material-icons">not_started</span></div>
                    <div class="placebo"></div>
                    <button class="button">Start</button>
                </div>

                <div class="join-meeting">
                    <div class="join-title">Join Meeting</div>
                    <div class="logo"><span class="material-icons">fingerprint</span></div>
                    <input type="text" placeholder="id" v-model="meetingID" class="join-input">
                    <button class="button">Join</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    let meetingID
    let addMessage
    export default {
        name: "Home",
        setup(){
        }
    }

</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@200;300;400;500;600&display=swap');

    .home{
        background: var(--home-background);
        position: relative;
        width: 100%;
        min-height: 100%;
        .header {
            width: 100%;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: var(--home-header);
            color: #f1f5f9;
            font-weight: 400;
        }
        .icons {
            margin: 0 5px;
            cursor: pointer;

            span {
                padding: 9px;
                background: var(--button);
                color: #FFFFFF;
                border-radius: 5px;
            }
        }
        .active{
            filter: blur(5px);
        }
        .logo{
            min-width: 150px;
            min-height: 150px;
            display: flex;
            justify-content: center;
            left: 25%;
            top: 25%;
            align-items: center;
            border-radius: 100px;
            background: var(--home-background);
            span{
                font-size: 8rem;
                color: var(--primary);
            }
        }
        .home-active {
            .main {
                width: 100%;
                display: flex;
                min-height: 94vh;

                .main-left {
                    position: relative;
                    width: 80%;


                    .main-left-footer {
                        width: 100%;
                        height: 60px;
                        background: var(--home-header);
                        display: flex;
                        align-items: center;
                        position: absolute;

                        padding: 0 1rem;
                        left: 0;
                        bottom: 0;

                        .flex {
                            flex: 1 1 0;
                        }
                    }
                }

                .main-right {
                    width: 20%;
                    min-height: 100%;
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: var(--home-messages);

                    .main-right_title {
                        min-width: 100%;
                        position: absolute;
                        min-height: 60px;
                        display: flex;
                        justify-content: start;
                        align-items: center;

                        top: 0;
                        padding-left: 10px;

                        span {
                            color: #f1f5f9;
                            width: 2rem;
                        }

                        p {
                            font-size: 18px;
                            color: #f1f5f9;
                        }

                    }

                    .main-right_messages {
                        min-width: 100%;
                        height: 85%;

                        padding: 0 10px;

                        .message {
                            width: 100%;
                            background: var(--button);
                            font-size: 16px;
                            margin: 5px 0;
                            line-height: 20px;
                            padding: 8px 16px;
                            color: #f1f5f9;
                            border-radius: 5px;
                            border: gainsboro;
                        }
                    }

                    .main-right_add-message {
                        padding: 0 10px 5px 10px;
                        min-height: 60px;
                        min-width: 100%;
                        position: absolute;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        bottom: 0;
                        height: 60px;

                        .input-add {
                            width: 100%;
                            padding: 0 10px;
                            height: 35px;
                            margin-right: 5px;
                            border: 1px solid #c7c7c7;
                            outline: none;

                            border-radius: 5px;
                            font-size: 16px;

                            &:focus {
                                outline: 1px solid var(--button);
                            }
                        }
                    }
                }
            }
        }
        .home-popUp{
            background: rgba(0,0,0,0.5);
            position: absolute;
            transition: 0.2s ease-out;
            left: 25%;
            top: 25%;


            .options{
                width: 800px;
                height: 600px;
                display: flex;
                gap: 25px;
                background: var(--home-background);



                .host-meeting{
                    border-radius: 25px;
                    border: 1px solid var(--grey);
                    width: 330px;
                    height: 400px;
                    gap: 10px;
                    justify-content: space-between;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 20px;
                    background: #DEF1FD;
                    .placebo{
                        height: 40px;
                    }

                    .host-title{
                        left: 10px;
                        top: 20px;
                        font-size: 2rem;
                        font-weight: 800;
                        margin-bottom: 1rem;
                    }
                }
                .button{
                    width: 200px;
                    height: 50px;
                    transition: 0.2s ease-in;
                    background: var(--button);
                    color: var(--button-light);
                    font-weight: 300;

                    bottom: 20px;
                    border-radius: 10px;
                    font-size: 1.7rem;
                    &:last-child{
                        padding: 5px 0;
                    }
                    &:hover{
                        background: #22c55e;
                    }
                    &:active{
                        transform: translateY(-4px);
                    }

                }

                .join-meeting{
                    width: 330px;
                    height: 400px;
                    display: flex;
                    position: relative;
                    flex-direction: column;
                    gap: 10px;
                    padding: 20px;
                    align-items: center;
                    border-radius: 25px;
                    justify-content: space-between;
                    border: 1px solid var(--grey);
                    background: #DEF1FD;
                    &:last-child{
                        align-items: center;
                    }

                    .join-title{
                        font-size: 2rem;
                        font-weight: 800;
                        margin-bottom: 1rem;
                    }
                    .join-input{
                        width: 200px;
                        height: 40px;
                        border: 1px solid #c7c7c7;
                        outline: none;

                        border-radius: 5px;
                        font-size: 16px;
                        padding: 0.5rem 1rem;
                        margin-bottom: 0.5rem;

                        &:focus{
                            outline: 1px solid var(--button);
                        }
                    }
                }
            }
        }

    }
</style>