<template>
  <div class="tab-pane fade show active" name="nav-tab" id="nav-tab-chat" role="tabpanel">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h3 class="mb-0 text-primary">Chat</h3>
      <div>
        <button class="btn btn-dark" type="button">New Chat</button>
      </div>
    </div>

    <div class="form-group input-group-lg search mb-3">
      <i class="zmdi zmdi-search"></i>
      <input type="text" class="form-control" placeholder="Search..." />
    </div>

    <ul class="chat-list">
      <li class="header d-flex justify-content-between ps-3 pe-3 mb-1">
        <span>RECENT CHATS</span>
        <div class="dropdown">
          <a
            class="btn btn-link px-1 py-0 border-0 text-muted dropdown-toggle"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            ><i class="zmdi zmdi-filter-list"></i
          ></a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </li>
      <li>
        <a href="#" class="card">
          <div class="card-body">
            <div class="media">
              <div class="avatar me-3">
                <div
                  class="avatar rounded-circle no-image bg-primary text-light"
                >
                  <span><i class="zmdi zmdi-comment-text"></i></span>
                </div>
              </div>
              <div class="media-body overflow-hidden">
                <div class="d-flex align-items-center mb-1">
                  <h6 class="text-truncate mb-0 me-auto">Support ChatBot</h6>
                </div>
                <div class="text-truncate">
                  <i class="zmdi zmdi-circle text-success"></i> Online
                </div>
              </div>
            </div>
          </div>
        </a>
      </li>
      <li  v-for="item in list" :key="item.id" :class="item.status">
        <div class="hover_action">
          <button type="button" class="btn btn-link text-info">
            <i class="zmdi zmdi-eye"></i>
          </button>
          <button type="button" class="btn btn-link text-warning">
            <i class="zmdi zmdi-star"></i>
          </button>
          <button type="button" class="btn btn-link text-danger">
            <i class="zmdi zmdi-delete"></i>
          </button>
        </div>
        <a href="#" class="card"  @click="openChat(item)">
          <div class="card-body">
            <div class="media">
              <div class="avatar me-3">
                <span class="status rounded-circle"></span>
                <img
                  class="avatar rounded-circle"
                  :src="item.img"
                  alt="avatar"
                />
              </div>
              <div class="media-body overflow-hidden">
                <div class="d-flex align-items-center mb-1">
                  <h6 class="text-truncate mb-0 me-auto">{{item.nickname}}</h6>
                  <p class="small text-muted text-nowrap ms-4 mb-0">{{item.date}}</p>
                </div>
                <div class="text-truncate">
                  <i class="zmdi zmdi-phone-end me-1"></i> {{item.tipText}}
                </div>
              </div>
            </div>
          </div>
        </a>
      </li>
     
    </ul>
  </div>
</template>

<script>
const list=[
  {
    id:'1',
    img:'http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/xs/avatar1.jpg',
    nickname:'Jason Porter',
    date:'11:08 am',
    tipText:'It is a long established fact that a reader w...',
    status:'online'
  },{
    id:'2',
    img:'http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/xs/avatar2.jpg',
    nickname:'Michelle Green',
    date:'11:08 am',
    tipText:'It is a long established fact that a reader w...',
    status:'away'
  },{
    id:'3',
    img:'http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/xs/avatar3.jpg',
    nickname:'Elizabeth Martin',
    date:'11:08 am',
    tipText:'It is a long established fact that a reader w...',
    status:'online'
  }
]
export default {
  name: "ChatBar",
  data(){
    return{
      list:list
    }
  },
  methods:{
    openChat(mate){
      console.log(mate)
      this.$store.dispatch("setMate",mate)
      localStorage.setItem("mate",JSON.stringify(mate))
      this.$router.push("/welcome/SingleChat")
      var body = document.getElementsByTagName("html")[0]
      body.classList.remove("open-sidebar-menu")
    }
  }

};
</script>

<style>
</style>