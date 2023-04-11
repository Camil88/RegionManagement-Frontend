<template>
    <v-footer 
        app
        padless 
        inset
        absolute
        color="#333545"
        height="40px">
            <v-col
            class="text-center font-weight-normal footerText"
            cols="12">
                &copy; {{ new Date().getFullYear() }} SalesCore - 
                <v-icon
                    small
                    color="amber lighten-2"
                    class="footerText">
                    mdi-lightning-bolt
                </v-icon>
               
               by Kamil Glowka
            </v-col>              
    </v-footer>
</template>

<script>
export default {
name: 'Footer'

}
</script>

<style scoped>

.footerText {
    font-size: 12px;
    letter-spacing: 0.8px;
    padding: 0;
    color: #6d6868;
    /* color: #616161; */

}

</style>