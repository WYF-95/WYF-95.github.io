// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'


import Layout from './components/Layout'
import IndexPage from './pages/IndexPage'
import ProductPage from './pages/ProductPage'
import GoodsPage from './pages/GoodsPage'
import BrandPage from './pages/BrandPage'
import ExpressPage from './pages/ExpressPage'
import MountPage from './pages/MountPage'

Vue.config.productionTip = false
Vue.use(Router)
Vue.use(Resource)

let router = new Router({
	mode:'hash',
	routes:[
	   {
	   	path:'/',
	   	component:IndexPage
	   },
	   {
	   	path:'/product',
	   	component:ProductPage,
	   	redirect:'/product/goods',
	   	children:[
	   	   {
	          path:'goods',
	   	      component:GoodsPage
	        },
	        {
	          path:'brand',
	   	      component:BrandPage
	        },
	        {
	          path:'express',
	   	      component:ExpressPage
	        },
	        {
	          path:'mount',
	   	      component:MountPage
	        },
	   	]
	   },
	   
	]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { Layout },
  template: '<layout/>'
})
