<template>
  <div class="mine">
    mine组件
    <zimo-btn types="danger" size="large">警告按钮</zimo-btn>
    <zimo-btn types="info">默认按钮</zimo-btn>
    <zimo-btn types="primary" size="small">常用按钮</zimo-btn>
    <zimo-btn types="success" size="mini">成功按钮</zimo-btn>
  </div>
</template>
<script>
export default {
    name:'mine'
}
</script>
<style lang="less">
.mine{
    width:100%;
    height:100%;
}
</style>
