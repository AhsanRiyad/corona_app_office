import VueCookies from 'vue-cookies'
import  store   from '@/store.js'
import axios from 'axios'
// import cookie_mixins from '@/mixins/cookie_mixins'


// alert(to.meta.title);
/*
return next() ;

return next({
				name: 'login'
			})*/


			var authMixins = {

				requireAuthLoginCheck (to, from, next) {


					


					return next() ;

					/*return next({
						name: 'Login'
					})
*/

				}



			}



			export default authMixins