<template>
  <div class='r-carousel' @mouseenter="stop" @mouseleave="start">
    <ul class="carousel-body">
      <li class="carousel-item" v-for="(item, i) in swiperData" :key="i" :class="{fade:index===i}">
        <!--图片-->
        <RouterLink v-if="item.imgUrl" to="/">
          <img
            :src="item.imgUrl"
            alt="">
        </RouterLink>
        <!--商品列表,每个li四个商品 item是数组[goods1,goods2,...]-->
        <div v-else class="slider">
          <RouterLink v-for="goods in item" :key="goods.id" :to="`/product/${goods.id}`">
            <img :src="goods.picture" alt="">
            <p class="name ellipsis">{{ goods.name }}</p>
            <p class="price">&yen;{{ goods.price }}</p>
          </RouterLink>
        </div>
      </li>
    </ul>
    <a @click="toggle(-1)" href="javascript:;" class="carousel-btn prev">
      <i class="iconfont icon-previous-icon"></i>
    </a>
    <a @click="toggle(1)" href="javascript:;" class="carousel-btn next"><i class="iconfont icon-next-icon"></i></a>
    <div class="carousel-indicator">
      <!--active-->
      <span @click="index=i" v-for="(item, i) in swiperData" :key="i" :class="{active:index===i}"></span>
    </div>
  </div>
</template>

<script>
import { onUnmounted, ref, watch } from 'vue'

export default {
  name: 'rswiper',
  props: {
    swiperData: {
      type: Array,
      default: () => []
    },
    // 是否自动轮播 - 条件之一
    autoPlay: {
      type: Boolean,
      default: false
    },
    // 间隔时长
    duration: {
      type: Number,
      default: 3000
    }
  },
  setup (props) {
    // 控制显示图片的索引
    const index = ref(0)
    // 1.自动轮播的逻辑
    // 定时器接受变量
    let timer = null
    const autoPlayFn = () => {
      // 自动播放==切换索引
      // 每次开始前清除定时器
      clearInterval(timer)
      timer = setInterval(() => {
        index.value++
        if (index.value >= props.swiperData.length) {
          index.value = 0
        }
      }, props.duration)
    }
    // 需要监听sliders数据变化,判断如果有数据且autoPlay是true
    watch(() => props.swiperData, (newVal) => {
      if (newVal.length && props.autoPlay) {
        autoPlayFn()
      }
    }, { immediate: true })
    // 2.鼠标进入,定时器暂停,离开,开启定时器(开启有条件)
    const stop = () => {
      if (timer) clearInterval(timer)
    }
    const start = () => {
      if (props.swiperData.length && props.autoPlay) {
        // 有数据且允许自动播放
        autoPlayFn()
      }
    }
    // 3.下一张
    const toggle = (step) => {
      // 将要改变的索引
      const newIndex = index.value + step
      // 太大
      if (newIndex > (props.swiperData.length - 1)) {
        index.value = 0
        return
      }
      // 太小
      if (newIndex < 0) {
        index.value = props.swiperDatapm.length - 1
        return
      }
      // 正常
      index.value = newIndex
    }
    // 组件卸载
    onUnmounted(() => {
      clearInterval(timer)
    })
    return {
      index,
      stop,
      start,
      toggle
    }
  }
}
</script>
<style scoped lang="scss">
.r-carousel {
  width: 100%;
  height: 100%;
  position: relative;

  .carousel {
    &-body {
      width: 100%;
      height: 100%;
    }

    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;

      &.fade {
        opacity: 1;
        z-index: 1;
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: $borderRadius;
      }
    }

    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;

      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;

        ~ span {
          margin-left: 12px;
        }

        &.active {
          background: #fff;
        }
      }
    }

    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0, 0, 0, .2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;

      &.prev {
        left: 20px;
      }

      &.next {
        right: 20px;
      }
    }
  }

  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
// 轮播商品
.slider {
  display: flex;
  justify-content: space-around;
  padding: 0 40px;
  > a {
    width: 240px;
    text-align: center;
    img {
      padding: 20px;
      width: 230px!important;
      height: 230px!important;
      border-radius: $borderRadius;
    }
    .name {
      font-size: 16px;
      color: #666;
      padding: 0 40px;
    }
    .price {
      font-size: 16px;
      color: $priceColor;
      margin-top: 15px;
    }
  }
}
</style>
