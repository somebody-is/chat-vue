<template>
  <div>
    <Video :mate="mate"></Video>
    <UserDetail></UserDetail>
  </div>
</template>

<script>
import Video from "@/components/chat/Video";
import UserDetail from "@/components/chat/UserDetail";
export default {
  name: "ViewChat",
  props:['mate'],
  components: {
    UserDetail,
    Video,
  },
};
</script>

<style>

</style>