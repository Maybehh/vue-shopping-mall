<template>
<!-- 问题： 我们不知道什么时候能够拿到 max 值，但是，总归有一刻，会得到一个真正的 max 值 -->
<!-- 我们可以 使用 watch 属性监听，来 监听 父组件传递过来的 max 值，不管 watch 会被触发几次，但是，最后一次，肯定是一个 合法的 max 数值 -->
    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox" />
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";

export default {
    mounted() {
        // 初始化数字选择框组件
        mui(".mui-numbox").numbox();
        console.log(this.max);  //由于父组件的then获取数据后再传参，因此这里是undefined
    },
    methods: {
        countChanged() {
            // 每当 文本框的数据被修改的时候，立即把 最新的数据，通过事件调用，传递给父组件
            this.$emit("getcount", parseInt(this.$refs.numbox.value));
        }
    },
    props: ["max"],
    watch: {
        max: function(newVal, oldVal) {
            // 只能使用 JS API 设置 numbox 的最大值，不能直接给data-numbox-max属性动态设置，是无效的，官文有说
            mui(".mui-numbox")
              .numbox()
              .setOption("max", newVal);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
