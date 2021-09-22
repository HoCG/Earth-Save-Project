<template>
    <div class="ResultApplication">
        <v-layout row="row" wrap="wrap" width="100%" justify-center="justify-center">
            <v-card-actions class="justify-center" max-width="100%">
                <v-card>
                    <v-list>
                        <v-img
                            lazy-src="https://picsum.photos/id/11/10/6"
                            max-width="450"
                            max-height="300"
                            src="https://picsum.photos/id/11/500/300">
                            <p class="image-text">
                                당신의 결과!
                            </p>
                        </v-img>
                        <v-list-item-title class="text">
                            오늘 지구를 ~~~만큼 지키셨군요!
                        </v-list-item-title>
                        {{
                            this.$route.query.items
                            }}
                    </v-list>
                </v-card>
            </v-card-actions>
        </v-layout>
    </div>
</template>
<script>
    export default {
        data: () => ({
        })
    }
</script>
<style>
    .ResultApplication {
        display: block;
        text-align: center;
        margin-top: 5%;
        margin-bottom: 5%;
    }
    .image-text{
        text-align: center !important;
        font-size: 20px;
        font-weight: 900 !important;
    }
    .text{
        font-size: 20px;
        font-weight: 800;
    }
</style>