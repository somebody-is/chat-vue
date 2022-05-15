<template>
  <div id="layout" class="theme-cyan">
    <LeftNavbar ref="Welcome" v-on:jump="jump"  v-on:updateView="updateView"></LeftNavbar>
    <div class="sidebar border-end py-xl-4 py-3 px-xl-4 px-3">
      <div class="tab-content">
        <!-- <router-view v-on:updateView="updateView"></router-view> -->
        <UserBar :hidden="viewStatus[0]"></UserBar>
        <ChatBar :hidden="viewStatus[1]"></ChatBar>
        <PhoneBar :hidden="viewStatus[2]"></PhoneBar>
        <ContactBar :hidden="viewStatus[3]"></ContactBar>
        <PagesBar :hidden="viewStatus[4]"></PagesBar>
      </div>
    </div>
    <RightNavbar></RightNavbar>
    <div class="main px-xl-5 px-lg-4 px-3" id="chat-main">
      <!-- <Index :hidden="viewStatus[0]"></Index>
      <SingleChat :hidden="viewStatus[1]" :mate="mate"></SingleChat>
      <VideoView :hidden="viewStatus[2]" :mate="mate"></VideoView>
      <AudioView :hidden="viewStatus[3]" :mate="mate"></AudioView>
      <Settings :hidden="viewStatus[4]"></Settings> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LeftNavbar from "@/components/navbar/LeftNavbar";
import RightNavbar from "@/components/navbar/RightNavbar";

import ChatBar from '@/components/sidebar/ChatBar'
import ContactBar from '@/components/sidebar/ContactBar'
import PagesBar from '@/components/sidebar/PagesBar'
import PhoneBar from '@/components/sidebar/PhoneBar'
import UserBar from '@/components/sidebar/UserBar'

import Index from "@/components/main/Index";
import SingleChat from "@/components/main/SingleChat";
import VideoView from "@/components/main/VideoView";
import AudioView from "@/components/main/AudioView";
import Settings from "@/components/main/Settings";

export default {
  name: "Welcome",
  components: {
    LeftNavbar,
    RightNavbar,
    Index,
    SingleChat,
    VideoView,
    AudioView,
    Settings,
    ChatBar,
    ContactBar,
    PagesBar,
    PhoneBar,
    UserBar
  },
  data() {
    return {
      mate: {
        id: "3",
        img: "http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/xs/avatar3.jpg",
        nickname: "Elizabeth Martin",
        date: "11:08 am",
        tipText: "It is a long established fact that a reader w...",
        status: "online",
      },
      viewStatus: [true, false, true, true, true, true],
    };
  },
  methods: {
    jump(page) {
      this.$router.push("/welcome/" + page);
    },
    updateView(viewStatus) {
      console.log(viewStatus)
      this.viewStatus = viewStatus;
    },
  },
};
</script>

<style>
</style>