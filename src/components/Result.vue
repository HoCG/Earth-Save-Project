<template>
    <div class="ResultApplication">
        <v-layout row="row" wrap="wrap" width="100%" justify-center="justify-center">
            <v-card-actions class="justify-center" max-width="100%">
                <v-card>
                    <v-list>
                        <p class="image-text">
                            <v-icon color="yellow" size="30px">mdi-star</v-icon>
                            당신의 결과!
                            <v-icon color="yellow" size="30px">mdi-star</v-icon>
                        </p>
                        <v-img
                            lazy-src="https://picsum.photos/id/11/10/6"
                            max-width="450"
                            max-height="300"
                            src="https://picsum.photos/id/11/500/300"></v-img>
                        <!--각각에 경우에 따라서 타이틀이 달라지도록 코딩.-->
                        <v-list-item-title v-if="FinalCalculater() === 1" class="text">
                            오늘 당신은 그야말로 최고의 지구지킴이! 아주 칭찬해요~
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
        <!--과소비하거나 과하게 이용한것들에 대해서 알려주는 카드들-->
        <v-layout row="row" wrap="wrap" width="100%" justify-center="justify-center">
            <v-card-actions
                v-for="lackItem of this.$route.query.lackItems"
                :key="String(lackItem)"
                class="justify-center"
                max-width="100%">
                <v-card v-if="InitialValue(lackItem)" width="400px" height="100%">
                    <div style="margin: 5%">
                        <v-list-item-icon v-for="icons in ShowIconData(lackItem)" :key="icons">
                            <v-icon color="black" v-text="icons" size="50px"></v-icon>
                        </v-list-item-icon>
                        <h2 class="EmphasisData">{{ShowEmphasisData(lackItem)}}</h2>
                        <p>{{ShowTipData(lackItem)}}</p>
                    </div>
                </v-card>
            </v-card-actions>
        </v-layout>
    </div>
</template>
<script>
    import lack_Point_Check from "../assets/Lack_Point_Check.json";
    export default {
        data: () => ({lackCardData: lack_Point_Check.items}),
        methods: {
            //초기값을 검출해내는 함수.
            InitialValue(lackTitle){
                if(lackTitle.includes("초기값")){
                    return false;
                }
                else{
                    return true;
                }
            },
            //객체를 반환해서 그 객체가 사용되도록 하는 방식이 제대로 적용되지 않기때문에 
            //어쩔수없이 각각의 값들을 반환하도록 코딩하였음.
            ShowIconData(lackTitle) {
                console.log(lackTitle);
                for (let item of this.lackCardData) {
                    if (item.title.includes(lackTitle)) {
                        return item.icon;
                    }
                }
            },
            ShowEmphasisData(lackTitle) {
                for (let item of this.lackCardData) {
                    if (item.title.includes(lackTitle)) {
                        return item.emphasis;
                    }
                }
            },
            ShowTipData(lackTitle) {
                for (let item of this.lackCardData) {
                    if (item.title.includes(lackTitle)) {
                        return item.tip;
                    }
                }
            },
            FinalCalculater() {
                const point = parseInt(this.$route.query.items)
                if (point < 10) {
                    return 1;
                } else if (10 <= point && point < 20) {
                    return 2;
                } else if (20 <= point && point < 30) {
                    return 3;
                } else if (30 <= point && point < 40) {
                    return 4;
                } else {
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
    .image-text {
        text-align: center !important;
        font-size: 20px;
        font-weight: 900 !important;
    }
    .text {
        font-size: 20px;
        font-weight: 800;
    }
    .EmphasisData {
        color: cornflowerblue;
    }
</style>