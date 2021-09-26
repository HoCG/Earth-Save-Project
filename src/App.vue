<template>
    <v-app class="justify-center">
        <!--페이지 뒤를 장식하는 이미지는 여기 v-img를 통해 보여진다.-->
        <v-img
            width="100%"
            height="100%"
            src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
            <router-view/>
        </v-img>
    </v-app>
</template>

<script>
    export default {
        name: 'App',
        components: {},
        data: () => ({
            //
        })
    };
</script>