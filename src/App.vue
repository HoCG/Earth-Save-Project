<template>
    <v-app class="justify-center">
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