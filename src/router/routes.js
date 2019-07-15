// 引入组件
import MSite from '../pages/MSite';
import Order from '../pages/Order';
import Search from '../pages/Search';
import Profile from '../pages/Profile';

export default [
	{
		path:'/msite',
		component:MSite
	},
	{
		path:'/order',
		component:Order
	},
	{
		path:'/search',
		component:Search
	},
	{
		path:'/profile',
		component:Profile
	},
	{
		path:'',
		redirect:'/msite'
	}
]