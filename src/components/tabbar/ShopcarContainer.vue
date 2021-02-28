<template>
    <div class="shopcar-container">
        <div class="goods-list">
            <div class="mui-card" v-for="(item, i) in goodslist" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch 
                            v-model="$store.getters.getGoodsSelected[item.id]"
                            @change="selectedChanged(item.id, $store.getters.getGoodsSelected[item.id])"></mt-switch>
                            <!-- v-model中的$store.getters.getGoodsSelected[item.id]是从store读取过来的值，该值与v-model绑定，store中并未修改，又因是属性调用，因此该值缓存
                            change事件获得的$store.getters.getGoodsSelected[item.id]是从缓存中读出来的，是与v-model绑定的，因此可以反映v-model中的value值 -->
                        <img :src="item.img_url">
                        <div class="info">
                            <h1>{{ item.title }}</h1>
                            <p>
                                <span class="price">￥{{ item.sell_price }}</span>
                                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                                <!-- 从购物车中获取商品的数量 -->
                                <!-- 先创建一个 空对象，然后循环购物车中所有商品的数据， 把 当前循环这条商品的 Id， 作为 对象 的 属性名，count值作为 对象的 属性值，这样，当把所有的商品循环一遍，就会得到一个对象： { 88: 2, 89: 1, 90: 4 } -->
                                <a href="#" @click.prevent="remove(item.id, i)">删除</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner settlement">
                    <div class="left">
                        <p>总计（不含运费）</p>
                        <p>已勾选商品 <span class="red">{{ $store.getters.getGoodsCountAndAmount.count }}</span> 件， 总价 <span class="red">￥{{ $store.getters.getGoodsCountAndAmount.amount }}</span></p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import numbox from "../subcomponents/shopcar_numbox.vue";

export default {
    data () {
        return {
          goodslist: []
        }
    },
    created () {
        this.getGoodsList();
    },
    methods: {
        getGoodsList () {
            // 获取到 store 中所有的商品的Id，然后拼接出一个 用逗号分隔的 字符串
            const idArr = [];
            this.$store.state.car.forEach(item => idArr.push(item.id));
            if (idArr.length <= 0) {
                return;
            }

            this.$http
                .get("goods/getshopcarlist/" + idArr.join(","))
                .then(result => {
                    if (result.body.status === 0) {
                        this.goodslist = result.body.message;
                    }
                })
        },
        remove (id, index) {
            // 点击删除，把商品从 store 中根据 传递的 Id 删除，同时，把 当前组件中的 goodslist 中，对应要删除的那个商品，使用 index 来删除
            this.goodslist.splice(index, 1);
            this.$store.commit("removeFromCar", id);
        },
        selectedChanged (id, val) {
            // 每当点击开关，把最新的开关状态，同步到 store 中
            this.$store.commit("updateGoodsSelected", { id, selected: val });
        }
    },
    components: {
        numbox
    }
}
</script>

<style lang="scss" scoped>
.shopcar-container {
    background-color: #eee;
    overflow: hidden;
    .goods-list {
        .mui-card-content-inner {
            display: flex;
            align-items: center;
        }
        img {
            width: 60px;
        }
        h1 {
            font-size: 13px;
        }
        .info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .price {
                color: red;
                font-weight: bold;
            }
        }
    }
    .settlement {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .red {
            color: red;
            font-weight: bold;
            font-size: 16px;
        }
    }
}
</style>
