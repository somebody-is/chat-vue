<template>
  <div>
    <Chat></Chat>
    <AddNew></AddNew>
    <UserDetail></UserDetail>
  </div>
</template>

<script>
import Chat from "@/components/chat/Chat";
import AddNew from "@/components/chat/AddNew";
import UserDetail from "@/components/chat/UserDetail";
export default {
  name: "SingleChat",
  components: {
    UserDetail,
    AddNew,
    Chat,
  },
};
</script>

<style>
</style>