<template>
  <div class="chat-header border-bottom py-xl-4 py-md-3 py-2">
    <div class="container-xxl">
      <div class="row align-items-center">
        <div class="col-6 col-xl-4">
          <div class="media" @click="openDetail()">

              <div class="me-3 show-user-detail">
                <span class="status rounded-circle"></span>
                <img
                  class="avatar rounded-circle"
                  :src="mate ? mate.img : ''"
                  alt="avatar"
                />
              </div>
              <div class="media-body overflow-hidden">
                <div class="d-flex align-items-center mb-1">
                  <h6 class="text-truncate mb-0 me-auto">
                    {{ this.mate ? this.mate.nickname : "" }}
                  </h6>
                </div>
                <div class="text-truncate">
                  {{ this.mate ? this.mate.status : "" }}
                </div>
              </div>

          </div>
        </div>

        <div class="col-6 col-xl-8 text-end">
          <ul class="nav justify-content-end">
            <li class="nav-item list-inline-item d-none d-md-block me-3">
              <a
                href="#"
                class="nav-link text-muted px-3"
                data-toggle="collapse"
                data-target="#chat-search-div"
                aria-expanded="true"
                title="Search this chat"
              >
                <i class="zmdi zmdi-search zmdi-hc-lg"></i>
              </a>
            </li>
            <li class="nav-item list-inline-item d-none d-sm-block me-3">
              <a
                href="#"
                class="nav-link text-muted px-3"
                title="videocam"
                @click="changeView('VideoView')"
              >
                <i class="zmdi zmdi-videocam zmdi-hc-lg"></i>
              </a>
            </li>
            <li class="nav-item list-inline-item d-none d-sm-block me-3">
              <a
                href="#"
                class="nav-link text-muted px-3"
                title="Call"
                @click="changeView('AudioView')"
              >
                <i class="zmdi zmdi-phone-forwarded zmdi-hc-lg"></i>
              </a>
            </li>
            <li class="nav-item list-inline-item add-user-btn">
              <a
                href="#"
                class="nav-link text-muted px-3"
                title="Add Account"
                @click="addNew()"
              >
                <i class="zmdi zmdi-account-add zmdi-hc-lg"></i>
              </a>
            </li>

            <li class="nav-item list-inline-item d-block d-sm-none px-3">
              <div class="dropdown">
                <a
                  class="nav-link text-muted px-0"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="zmdi zmdi-more-vert zmdi-hc-lg"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="#">Search chat</a>
                  <a class="dropdown-item" href="#">Attache Image</a>
                  <a class="dropdown-item" href="#">Video call</a>
                  <a class="dropdown-item" href="#">Call</a>
                  <a class="dropdown-item" href="#">Add New</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatHeader",
  data() {
    return {};
  },
  methods: {
    addNew() {
      var classList = document.getElementById("chat-main").classList;
      if (classList.contains("open-user-sidebar")) {
        classList.remove("open-user-sidebar");
      } else {
        classList.add("open-user-sidebar");
      }
    },
    changeView(page) {
      this.$router.push("/welcome/" + page);
    },
    openDetail(){
        var main = document.getElementsByClassName("main")[0]
        if(main.classList.contains("open-chat-sidebar")){
            main.classList.remove("open-chat-sidebar")
        }else{
            main.classList.add("open-chat-sidebar")
        }
    }
  },
  computed: {
    mate() {
      return this.$store.state.mate;
    },
  },
};
</script>

<style>
</style>