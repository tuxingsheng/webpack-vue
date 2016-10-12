<style lang="less" scoped>

</style>

<template>
    <div>
        <div id="aaa" @click="alert">
            <span>{{ aaa }}</span>
        </div>
        <div id="bbb">
            <span>{{ bbb }}</span>
        </div>
        <div id="ccc">
            <span>{{ ccc }}</span>
        </div>
    </div>
</template>

<script>
    export default{
        props: [],
        ready(){

        },
        data() {
            return {
                aaa: 'aaaaaa',
                bbb: 'bbbbbb',
                ccc: 'cccccc'
            }
        },
        methods: {
            alert() {
                alert('AppContent');
            }
        }
    }
</script>