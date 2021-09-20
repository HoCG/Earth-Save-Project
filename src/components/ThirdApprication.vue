<template>
    <div class="SecondApplication">
        <v-layout row="row" wrap="wrap" width="100%" justify-center="justify-center">
            <v-card max-width="70%" class="SecondApplication">
                <v-toolbar color="primary" dark="dark">
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>

                    <v-toolbar-title>Inbox</v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn icon="icon">
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-list three-line="three-line">
                    <template v-for="(item, index) in items">
                        <v-divider v-if="item.divider" :key="index" :inset="item.inset"></v-divider>
                        <v-list-item v-else :key="item.title">
                            <v-list-item-icon v-for="icons in item.icon" :key="icons">
                                <v-icon v-text="icons" size="30px"></v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title v-html="item.title"></v-list-item-title>
                                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                </v-list>
            </v-card>
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
    export default {
        data: () => ({
            items: [
                {
                    icon: ['mdi-bottle-soda'],
                    title: '오늘 내가 버린 플라스틱 병은?',
                    subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`
                }, {
                    divider: true,
                    inset: true
                }, {
                    icon: [
                        'mdi-cow', 'mdi-pig'
                    ],
                    title: '오늘 내가 먹은 고기의 양은?',
                    subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`
                }, {
                    divider: true,
                    inset: true
                }, {
                    icon: ['./assets/straw.jpg'],
                    title: '오늘 내가 무심코 버린 빨대는?',
                    subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris reco' +
                            'mmendations? Have you ever been?'
                }, {
                    divider: true,
                    inset: true
                }, {
                    icon: ['mdi-star'],
                    title: 'Birthday gift',
                    subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about ' +
                            'what we should get Heidi for her birthday?'
                }, {
                    divider: true,
                    inset: true
                }, {
                    icon: ['mdi-star'],
                    title: 'Recipe to try',
                    subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Gra' +
                            'te, Squash, Corn, and tomatillo Tacos.'
                }
            ]
        })
    }
</script>

<style>
    .SecondApplication {
        text-align: center;
        margin-top: 5%;
        margin-bottom: 5%;
    }
</style>