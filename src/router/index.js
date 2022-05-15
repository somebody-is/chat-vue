import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/view/Welcome'
import Login from '@/view/Login'
import NotFound from '@/view/NotFound/NotFound'

import Index from "@/components/main/Index";
import SingleChat from "@/components/main/SingleChat";
import VideoView from "@/components/main/VideoView";
import AudioView from "@/components/main/AudioView";
import Settings from "@/components/main/Settings";

Vue.use(Router)

const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }, {
      path: '/',
      name: 'Login',
      component: Login
    }, {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome,
      children: [
        {
          path: '/welcome/Index',
          name: "Index",
          component: Index
        }, {
          path: '/welcome/SingleChat',
          name: "SingleChat",
          component: SingleChat
        }, {
          path: '/welcome/VideoView',
          name: "VideoView",
          component: VideoView
        }, {
          path: '/welcome/AudioView',
          name: "AudioView",
          component: AudioView
        }, {
          path: '/welcome/Settings',
          name: "Settings",
          component: Settings
        },
      ]
    }
  ]
})


