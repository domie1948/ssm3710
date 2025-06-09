import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import jianshenjiaolian from '@/views/modules/jianshenjiaolian/list'
    import yishengjianyi from '@/views/modules/yishengjianyi/list'
    import shisheng from '@/views/modules/shisheng/list'
    import jibingjilu from '@/views/modules/jibingjilu/list'
    import xueyuan from '@/views/modules/xueyuan/list'
    import yisheng from '@/views/modules/yisheng/list'
    import tijianbaogao from '@/views/modules/tijianbaogao/list'
    import tiyuyundong from '@/views/modules/tiyuyundong/list'
    import shenghuoxiguan from '@/views/modules/shenghuoxiguan/list'
    import xinlijiankang from '@/views/modules/xinlijiankang/list'
    import jianshenjiaolianjianyi from '@/views/modules/jianshenjiaolianjianyi/list'


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
    }
      ,{
	path: '/jianshenjiaolian',
        name: '健身教练',
        component: jianshenjiaolian
      }
      ,{
	path: '/yishengjianyi',
        name: '医生建议',
        component: yishengjianyi
      }
      ,{
	path: '/shisheng',
        name: '师生',
        component: shisheng
      }
      ,{
	path: '/jibingjilu',
        name: '疾病记录',
        component: jibingjilu
      }
      ,{
	path: '/xueyuan',
        name: '学院',
        component: xueyuan
      }
      ,{
	path: '/yisheng',
        name: '医生',
        component: yisheng
      }
      ,{
	path: '/tijianbaogao',
        name: '体检报告',
        component: tijianbaogao
      }
      ,{
	path: '/tiyuyundong',
        name: '体育运动',
        component: tiyuyundong
      }
      ,{
	path: '/shenghuoxiguan',
        name: '生活习惯',
        component: shenghuoxiguan
      }
      ,{
	path: '/xinlijiankang',
        name: '心理健康',
        component: xinlijiankang
      }
      ,{
	path: '/jianshenjiaolianjianyi',
        name: '健身教练建议',
        component: jianshenjiaolianjianyi
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
