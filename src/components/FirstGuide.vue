<template>
    <div class="FirstGuide">
        <v-card-actions class="justify-center">
            <v-carousel
                width="90%"
                cycle="cycle"
                hide-delimiter-background="hide-delimiter-background"
                show-arrows-on-hover="show-arrows-on-hover">
                <template v-slot:prev="{ on, attrs }">
                    <v-btn color="success" v-bind="attrs" v-on="on">Previous slide</v-btn>
                </template>
                <template v-slot:next="{ on, attrs }">
                    <v-btn color="info" v-bind="attrs" v-on="on">Next slide</v-btn>
                </template>
                <!--페이지에 대한 안내를 담은 부분. carousel-item을 활용해서 보여지도록 하였다.-->
                <v-carousel-item v-for="(color, i) in colors" :key="i">
                    <v-sheet :color="color" height="100%">
                        <v-row class="fill-height" align="center" justify="center">
                            <div class="text-h2">
                                {{ texts[i] }}
                            </div>
                        </v-row>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </v-card-actions>
        <v-btn width="30%" color="primary">
            <!--라우터를 통해 열려져있는 다음 화면으로 넘어가도록 해준다.-->
            <router-link to="/plastic_consume1" class="link">Let's go!</router-link>
        </v-btn>
    </div>
</template>
<script>
    export default {
        data: () => ({
            model: 0,
            //색정보를 배열로 가진다.
            colors: [
                'primary', 'secondary', 'yellow darken-2', 'red', 'orange'
            ],
            //텍스트 정보를 배열로 가진다.
            texts: ['우리가 지구를 살릴수 있는 방법은 무엇이 있을까?', '그 방법에 대해서 천천히 알아보자!', '우리가 사용하는 물품중에 이게 재활용이 안되는 물건이였다고?', '믿기지 않아!', '대체 어떤게 재활용되는거야 그럼?']
        })
    }
</script>

<style>
    .text-h2 {
        font-weight: 700 !important;
    }
    div {
        text-align: center;
    }
    .FirstGuide {
        margin-top: 10%;
        margin-bottom: 10%;
    }
    .link {
        width: 100%;
    }
    a {
        text-decoration: none;
        color: black !important;
    }
</style>