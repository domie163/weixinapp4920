import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import address from '@/views/modules/address/list'
    import dictionary from '@/views/modules/dictionary/list'
    import fanghuzhishi from '@/views/modules/fanghuzhishi/list'
    import fanghuzhishiCollection from '@/views/modules/fanghuzhishiCollection/list'
    import fanghuzhishiLiuyan from '@/views/modules/fanghuzhishiLiuyan/list'
    import forum from '@/views/modules/forum/list'
    import jiance from '@/views/modules/jiance/list'
    import news from '@/views/modules/news/list'
    import xinguankangyuan from '@/views/modules/xinguankangyuan/list'
    import xinguankangyuanCollection from '@/views/modules/xinguankangyuanCollection/list'
    import xinguankangyuanLiuyan from '@/views/modules/xinguankangyuanLiuyan/list'
    import xinguankangyuanOrder from '@/views/modules/xinguankangyuanOrder/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryFanghuzhishi from '@/views/modules/dictionaryFanghuzhishi/list'
    import dictionaryFanghuzhishiCollection from '@/views/modules/dictionaryFanghuzhishiCollection/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryIsdefault from '@/views/modules/dictionaryIsdefault/list'
    import dictionaryJiance from '@/views/modules/dictionaryJiance/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
    import dictionaryXinguankangyuan from '@/views/modules/dictionaryXinguankangyuan/list'
    import dictionaryXinguankangyuanCollection from '@/views/modules/dictionaryXinguankangyuanCollection/list'
    import dictionaryXinguankangyuanOrder from '@/views/modules/dictionaryXinguankangyuanOrder/list'
    import dictionaryXinguankangyuanOrderPayment from '@/views/modules/dictionaryXinguankangyuanOrderPayment/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryFanghuzhishi',
        name: '知识类型',
        component: dictionaryFanghuzhishi
    }
    ,{
        path: '/dictionaryFanghuzhishiCollection',
        name: '收藏表类型',
        component: dictionaryFanghuzhishiCollection
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryIsdefault',
        name: '是否默认地址',
        component: dictionaryIsdefault
    }
    ,{
        path: '/dictionaryJiance',
        name: '检测结果',
        component: dictionaryJiance
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryXinguankangyuan',
        name: '新冠抗原类型',
        component: dictionaryXinguankangyuan
    }
    ,{
        path: '/dictionaryXinguankangyuanCollection',
        name: '收藏表类型',
        component: dictionaryXinguankangyuanCollection
    }
    ,{
        path: '/dictionaryXinguankangyuanOrder',
        name: '订单类型',
        component: dictionaryXinguankangyuanOrder
    }
    ,{
        path: '/dictionaryXinguankangyuanOrderPayment',
        name: '订单支付类型',
        component: dictionaryXinguankangyuanOrderPayment
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/address',
        name: '收货地址',
        component: address
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/fanghuzhishi',
        name: '防护知识',
        component: fanghuzhishi
      }
    ,{
        path: '/fanghuzhishiCollection',
        name: '防护知识收藏',
        component: fanghuzhishiCollection
      }
    ,{
        path: '/fanghuzhishiLiuyan',
        name: '防护知识留言',
        component: fanghuzhishiLiuyan
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/jiance',
        name: '检测记录',
        component: jiance
      }
    ,{
        path: '/news',
        name: '公告通知',
        component: news
      }
    ,{
        path: '/xinguankangyuan',
        name: '新冠抗原',
        component: xinguankangyuan
      }
    ,{
        path: '/xinguankangyuanCollection',
        name: '新冠抗原收藏',
        component: xinguankangyuanCollection
      }
    ,{
        path: '/xinguankangyuanLiuyan',
        name: '新冠抗原留言',
        component: xinguankangyuanLiuyan
      }
    ,{
        path: '/xinguankangyuanOrder',
        name: '新冠抗原订单',
        component: xinguankangyuanOrder
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
