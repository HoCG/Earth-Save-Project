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
                    <v-list v-for="(item, index) in items" :key="item.title">
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
                                <v-text-field v-if="checkForAirConditioner(item.title)" class="text-field" label="시간" v-model="item.count"></v-text-field>
                                <v-text-field v-else class="text-field" v-model="item.count"></v-text-field>
                                &nbsp;&nbsp;
                                <v-btn @click="item.count = plusCount(item.count)">+</v-btn>
                            </v-card-actions>
                        </v-list-item>
                        <v-divider v-if="index < items.length - 1" :key="index"></v-divider>
                    </v-list>
                </v-card>
            </v-card-actions>
        </v-layout>
        <v-btn class="ForBtnClass" @click="pushData" width="30%" color="primary">
            Next Step
        </v-btn>
    </div>
</template>

<script>
    import JsonData from "../assets/save_earth.json"
    export default {
        data: () => ({lackItems: [], Counter: 0, items: JsonData.items, inputText: []}),
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
            },
            CalculateData() {
                let bottleCount = this.items.find(item => item.title.includes('플라스틱 병')).count * 2;
                let meatCount = this.items.find(item => item.title.includes('고기')).count * 2;
                let strawCount = this.items.find(item => item.title.includes('빨대')).count;
                let deliveryCount = this.items.find(item => item.title.includes('배달')).count * 5;
                let airConditionerCount = this.items.find(item => item.title.includes('에어컨')).count * 2;
                this.Counter += (bottleCount + meatCount + strawCount + deliveryCount + airConditionerCount);
            },
            PutLackItems(){
                if(this.items.find(item => item.title.includes('플라스틱 병')).count > 5){
                    this.lackItems.push("플라스틱 병");
                }
                if(this.items.find(item => item.title.includes('고기')).count >= 3){
                    this.lackItems.push("고기");
                }
                if(this.items.find(item => item.title.includes('빨대')).count >= 2){
                    this.lackItems.push("빨대");
                }
                if(this.items.find(item => item.title.includes('배달')).count >= 1){
                    this.lackItems.push("배달");
                }
                if(this.items.find(item => item.title.includes('에어컨')).count >= 5){
                    this.lackItems.push("에어컨");
                }
                this.lackItems.push("초기값"); //아무값도 없는 상태에서 대중교통의 값이 "대","중","교","통"으로 나뉘어서 보이는
                //오류 수정을 위한 배열 초기값
            },
            checkForAirConditioner(title){
                if(title.includes("에어컨")){
                    return true;
                }
                else{
                    return false;
                }
            },
            pushData() {
                this.CalculateData();
                this.PutLackItems();
                this
                    .$router
                    .push({
                        path: "/plastic_consume2",
                        query: {
                            name: "첫번째 페이지 결과",
                            items: this.Counter,
                            lackItems: this.lackItems
                        }
                    });
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
    .ForBtnClass {
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