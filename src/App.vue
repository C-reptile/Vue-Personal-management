<template>
  <div id="app">
    <router-view />
  <el-affix position="bottom" :offset="20">
    <div class="flexStyle">
      <span class="contentStyle"><Video></Video></span>
      <span class="contentStyle"><Time></Time></span>
    </div>
  </el-affix>
  </div>
</template>

<script>
import Video from '@/components/system/video'
import Time from '@/components/system/time'
export default {
  name: 'HelloWorld',
  mounted() {
    this.$router.push({ name: 'login' })
  },
  components:{
        'Video':Video,
        'Time':Time
      }
}
</script>

<style>
body{
  font-family: 'siyuan';
}
.flexStyle{
  height:55px;
  display:flex;
  justify-content:space-between;
  /* 设置超出滚动 */
  overflow-x:auto;
}
.contentStyle{
  width:200px;
  height:54px;
  display:inline-block;
  background-color: rgba(255, 255, 255, );
  margin-right:5px;
  /* 超出滚动的关键，没有它元素会自动缩小，不会滚动 */
  flex-shrink: 0;
}
::-webkit-scrollbar {
  /* 隐藏滚动条 */
  display: none;
}
</style>