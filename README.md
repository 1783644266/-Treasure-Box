技术栈：vue、vuex、vue-router、axios、swiper、betterScroll、mint-ui

总结：

1.开发时，可配置dveServer的proxy处理跨域问题，设置路径别名方便文件引入。

2.利用axios.interceptors拦截器过滤不需要的数据。

3.swiper和betterScroll实例需要在界面更新后创建,可利用watch加上this.$nextTick()。

4.由于图片异步渲染的问题，betterScroll实例的可滚动区域与实际有出入，需要监听图片onload事件，并触发betterScroll实例的refresh函数。

5.refresh函数执行次数过多，可利用debounce减少执行次数。或计算图片张数与onload事件执行次数，当两者相等，再触发实例的refresh函数。

6.需要元素到文档顶部的长度，可利用$el.offsetTop获取。

7.利用localStorage在登陆时存储用户数据，在app.vue 执行created时读取数据并commit存入state中。在退出登陆时删除localStorage.removeItem。(注：localStorage以JSON格式存储，注意转换)

8.mint-ui要引入css，不然效果。

9.利用mixins多次复用代码。

路漫漫其修远兮~