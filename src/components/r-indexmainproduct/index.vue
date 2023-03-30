<template>
  <div class="r-indexmainproduct-components">
    <div class="r-indexmainproduct-title">
      <div class="left-title">
        <h3>{{ productData.name }}</h3>
      </div>
      <div class="right-content">
        <div class="right-content-left-cate">
          <RouterLink v-for="sub in productData.children" :key="sub.id" :to="`/category/sub/${sub.id}`">{{sub.name}}</RouterLink>
        </div>
        <div class="right-more">
          <rmore :path="`/category/${productData.id}`"></rmore>
        </div>
      </div>
    </div>
    <div class="r-indexmainproduct-product">
      <div class="r-indexmainproduct-product-left">
          <img v-lazy="productData.picture" alt=""/>
        <!--左侧标签区域-->
        <div class="product-tag">
          <div class="left-box">{{ productData.name }}</div>
          <div class="right-box">{{ productData.saleInfo }}</div>
        </div>
      </div>
      <div class="r-indexmainproduct-product-right">
        <template v-for="(item,index) in productData.goods" :key="index">
          <rmainproduct :productData="item"></rmainproduct>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
// 商品组件
import rmainproduct from '@/components/r-mainproduct/index'
export default {
  name: 'indexmainproduct',
  props: {
    // 商品区块数据
    productData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  components: {
    rmainproduct
  }
}
</script>

<style scoped lang="scss">
.r-indexmainproduct-components{
  padding-top: 34px;
  padding-bottom: 34px;
  width: 100%;
  .r-indexmainproduct-title{
    width: 100%;
    display: flex;
    justify-content: space-between;
    .left-title{
      font-size: 20px;
      color: #333333;
      h3{
        font-weight: normal;
      }
    }
    .right-content{
      display: flex;
      align-items: center;
      .right-content-left-cate{
        display: flex;
        margin-bottom: 2px;
          a{
            font-size: 14px;
            color: #333;
            padding: 2px 10px;
            border-radius: 5px;
              &.active{
                color: #fff;
                background-color: $txColor;
              }
              &:hover{
                color: #fff;
                background-color: $txColor;
              }
            }
      }
    }
  }
  .r-indexmainproduct-product{
    display: flex;
    align-items: center;
    margin-top: 34px;

    .r-indexmainproduct-product-left{
      width: 240px;
      height: 610px;
      border-radius: $borderRadius;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      cursor: pointer;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .product-tag{
        position: absolute;
        top: 270px;
        left: 0;
        display: flex;
        align-items: center;
        .left-box{
          width: 76px;
          height: 66px;
          background-color: #000000;
          font-size: 14px;
          color: #fff;
          text-align: center;
          line-height: 66px;
        }
        .right-box{
          border-top-right-radius: $borderRadius;
          border-bottom-right-radius: $borderRadius;
          height: 66px;
          color: #fff;
          line-height: 66px;
          padding-left: 10px;
          padding-right: 10px;
          box-sizing: border-box;
          background-color: rgba(0,0,0,0.5);
        }
      }
    }
    .r-indexmainproduct-product-right{
      flex: 1;
      height: 610px;
      margin-left: 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-left: 37px;
    }
  }
}

</style>
