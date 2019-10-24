<template>
    <div class="Success">
        <h2>问卷调查表填写成功</h2>
        <p>您的性别：{{this.$route.params.sex}}</p>
        <p>您的爱好：{{this.$route.params.hobby}}</p>
        <p>个人简介：{{this.$route.params.js}}</p>
    </div>
</template>
<script>
    export default {
        name: "success"
    }
</script>

<style scoped>

</style>