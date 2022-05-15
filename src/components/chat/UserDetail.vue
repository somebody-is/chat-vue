<template>
  <div class="user-detail-sidebar py-xl-4 py-3 px-xl-4 px-3">
    <div class="d-flex flex-column">
      <div class="header border-bottom pb-4 d-flex justify-content-between">
        <div>
          <h6 class="mb-0 font-weight-bold">User Details</h6>
          <span class="text-muted">Update your profile details</span>
        </div>
        <div>
          <button
            class="btn btn-link text-muted close-chat-sidebar"
            type="button"
            @click="close()"
          >
            <i class="zmdi zmdi-close"></i>
          </button>
        </div>
      </div>
      <div class="body mt-4">
        <div class="d-flex justify-content-center">
          <div class="avatar xxl">
            <img
              class="avatar xxl rounded-circle"
              :src="mate.img"
              alt="avatar"
            />
          </div>
        </div>
        <div class="text-center mt-3 mb-5">
          <h4>{{this.mate.nickname}}</h4>
          <span class="text-muted"
            ><a
              href="/cdn-cgi/l/email-protection"
              class="__cf_email__"
              data-cfemail="f4999d979c91989891da938691919ab49399959d98da979b99"
              >[email&nbsp;protected]</a
            ></span
          >
          <p>+14 123 456 789 - New york(USA)</p>
        </div>
        <ul class="chat-list">
          <li class="header d-flex justify-content-between ps-3 pe-3 mb-1">
            <span>mutual friend</span>
          </li>
          <li>
            <a href="#" class="card"
              ><div class="card-body">
                <div class="media">
                  <div class="avatar me-3">
                    <img
                      class="avatar rounded-circle"
                      src="http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/xs/avatar1.jpg"
                      alt="avatar"
                    />
                  </div>
                  <div class="media-body overflow-hidden">
                    <div class="d-flex align-items-center mb-1">
                      <h6 class="text-truncate mb-0 me-auto">Michelle Green</h6>
                    </div>
                    <div class="text-truncate">+14 123 456 258</div>
                  </div>
                </div>
              </div></a
            >
          </li>
          <li>
            <a href="#" class="card"
              ><div class="card-body">
                <div class="media">
                  <div class="avatar me-3">
                    <img
                      class="avatar rounded-circle"
                      src="http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/xs/avatar2.jpg"
                      alt="avatar"
                    />
                  </div>
                  <div class="media-body overflow-hidden">
                    <div class="d-flex align-items-center mb-1">
                      <h6 class="text-truncate mb-0 me-auto">Jason Porter</h6>
                    </div>
                    <div class="text-truncate">+14 123 456 963</div>
                  </div>
                </div>
              </div></a
            >
          </li>
          <li>
            <a href="#" class="card"
              ><div class="card-body">
                <div class="media">
                  <div class="avatar me-3">
                    <img
                      class="avatar rounded-circle"
                      :src="mate.img"
                      alt="avatar"
                    />
                  </div>
                  <div class="media-body overflow-hidden">
                    <div class="d-flex align-items-center mb-1">
                      <h6 class="text-truncate mb-0 me-auto">
                        {{ this.mate.nickname }}
                      </h6>
                    </div>
                    <div class="text-truncate">+14 123 456 753</div>
                  </div>
                </div>
              </div></a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserDetail",
  computed: {
    mate() {
      return this.$store.state.mate;
    },
  },
  methods: {
    close() {
      document
        .getElementsByClassName("main")[0]
        .classList.remove("open-chat-sidebar");
    },
  },
};
</script>

<style>
</style>