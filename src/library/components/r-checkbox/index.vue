<template>
  <div class="r-checkbox-components" @click="changeChecked">
    <!--选中样式-->
    <i class="iconfont icon-duoxuan_xuanzhong" v-if="ischeck"></i>
    <!--未选中样式-->
    <i class="iconfont icon-fangxingweixuanzhong" v-else></i>
    <!--checkbox内容-->
    <span class="label-text" v-if="$slots.default">
      <slot></slot>
    </span>
  </div>
</template>

<script>
// vueuse v-model
// import { useVModel } from '@vueuse/core'
import { ref, watch } from 'vue'
export default {
  name: 'rcheckbox',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit }) {
    const ischeck = ref(false)
    const changeChecked = () => {
      ischeck.value = !ischeck.value
      // 使用emit通知父组件数据的改变
      emit('update:modelValue', ischeck.value)
    }
    // 使用侦听器，得到父组件传递数据，给checked数据
    watch(() => props.modelValue, () => {
      ischeck.value = props.modelValue
    }, { immediate: true })
    return { ischeck, changeChecked }
  }
}
</script>

<style scoped lang="scss">
//自定义组件 复选框组件 样式
.r-checkbox-components{
  display: flex;
  align-items: center;
  cursor: pointer;
  .icon-duoxuan_xuanzhong{
    color: $txColor;
    cursor: pointer;
  }
  .icon-fangxingweixuanzhong{
    color: #ccc;
    cursor: pointer;
  }
  .label-text{
    margin-left: 5px;
    font-size: 13px;
    color: #999;
  }
}
</style>
