<template>
  <div>
    <Audio :mate="mate"></Audio>
    <UserDetail></UserDetail>
  </div>
</template>

<script>
import Audio from "@/components/chat/Audio";
import UserDetail from "@/components/chat/UserDetail";
export default {
  name: "ViewChat",
  props:['mate'],
  components: {
    UserDetail,
    Audio,
  },
};
</script>

<style>

</style>