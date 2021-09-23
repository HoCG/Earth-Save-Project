<template>
    <div class="ResultApplication">
        <v-layout row="row" wrap="wrap" width="100%" justify-center="justify-center">
            <v-card-actions class="justify-center" max-width="100%">
                <v-card>
                    <v-list>
                        <p class="image-text">
                            당신의 결과!
                        </p>
                        <v-img
                            lazy-src="https://picsum.photos/id/11/10/6"
                            max-width="450"
                            max-height="300"
                            src="https://picsum.photos/id/11/500/300">
                        </v-img>
                        <v-list-item-title v-if="FinalCalculater() === 1" class="text">
                            오늘 당신은 그야말로 지구지킴이! 아주 칭찬해요~
                        </v-list-item-title>
                        <v-list-item-title v-else-if="FinalCalculater() === 2" class="text">
                            이정도면 나쁘지 않지만 더 노력해서 지구를 지켜봐요~
                        </v-list-item-title>
                        <v-list-item-title v-else-if="FinalCalculater() === 3" class="text">
                            이런... 오늘은 환경파괴를 꽤 했네요ㅠ 노력합시다!
                        </v-list-item-title>
                        <v-list-item-title v-else-if="FinalCalculater() === 4" class="text">
                            아니 이럴수가! 꽤 많이 환경파괴를 했어요!
                        </v-list-item-title>
                        <v-list-item-title v-else-if="FinalCalculater() === 5" class="text">
                            너무 심각한 환경파괴범!!! 노력하세요!
                        </v-list-item-title>
                    </v-list>
                </v-card>
            </v-card-actions>
        </v-layout>
    </div>
</template>
<script>
    export default {
        data: () => ({
        }),
        methods: {
            FinalCalculater(){
                const point = parseInt(this.$route.query.items)
                if(point < 10){
                    return 1;
                }
                else if(point >= 10 && point < 20){
                    return 2;
                }
                else if(point >= 20 && point < 30){
                    return 3;
                }
                else if(point >= 30 && point < 40){
                    return 4;
                }
                else{
                    return 5;
                }
            }
        }
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