<template>
    <div class="SecondApplication">
        <v-layout row="row" wrap="wrap" width="100%" justify-center="justify-center">
            <v-card-actions class="justify-center" max-width="70%">
                <v-card>
                    <v-toolbar class="title" color="primary" dark="dark">
                        <v-layout
                            width="100%"
                            text-xs-center="text-xs-center"
                            justify-center="justify-center">
                            <v-toolbar-title>오늘 너가 지구를 얼마나 지켰는지 확인해봐!</v-toolbar-title>
                        </v-layout>
                    </v-toolbar>
                    <v-list
                        v-for="(item, index) in items"
                        :key="item.title"
                        >
                        <v-list-item>
                            <v-list-item-icon v-for="icons in item.icon" :key="icons">
                                <v-icon v-text="icons" size="30px"></v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title v-html="item.title"></v-list-item-title>
                            </v-list-item-content>
                            &nbsp;&nbsp;
                            <v-card-actions>
                                <v-btn @click="item.count = subCount(item.count)">-</v-btn>
                                &nbsp;&nbsp;
                                <!--{{item.count}}-->
                                <!--<input v-bind:value="inputText[item.id]" v-on:input="updateInput"
                                style="width: 30px">-->
                                <v-text-field class="text-field" v-model="item.count"></v-text-field>
                                &nbsp;&nbsp;
                                <v-btn @click="item.count = plusCount(item.count)">+</v-btn>
                            </v-card-actions>
                        </v-list-item>
                        <v-divider v-if="index < items.length - 1" :key="index"></v-divider>
                    </v-list>
                </v-card>
            </v-card-actions>
        </v-layout>
        <v-btn width="30%" color="primary">
            <router-link to="/plastic_consume1" class="link">Previous Step</router-link>
        </v-btn>
        <v-btn width="30%" color="primary">
            <router-link to="/plastic_consume3" class="link">Next Step</router-link>
        </v-btn>
    </div>
</template>

<script>
    import JsonData from "../assets/save_earth2.json"
    export default {
        data: () => ({items: JsonData.items, inputText: []}),
        methods: {
            subCount(count) {
                if (count > 0) {
                    --count;
                } else {
                    alert("이런! 0에서 더빼는건 불가능해!");
                }
                return count;
            },
            plusCount(count) {
                ++count;
                return count;
            }
        }
    }
</script>

<style>
    .title {
        font-weight: 900 !important;
        text-align: center !important;
    }
    .SecondApplication {
        display: block;
        text-align: center;
        margin-top: 5%;
        margin-bottom: 5%;
    }
    .link {
        width: 100% !important;
        height: 100% !important;
        color: black !important;
        text-decoration: none !important;
    }
    i {
        color: black !important;
    }
    .text-field {
        width: 50px;
    }
    .Calculator {
        float: left !important;
        text-align: center !important;
    }
    input {
        text-align: center !important;
    }
</style>