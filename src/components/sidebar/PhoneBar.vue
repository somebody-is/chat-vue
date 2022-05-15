<template>
  <div>
    <div class="tab-pane fade" id="nav-tab-phone" name="nav-tab" role="tabpanel">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h3 class="mb-0 text-primary">Call</h3>
        <div>
          <button class="btn btn-dark" type="button">New Call</button>
        </div>
      </div>

      <div class="form-group input-group-lg search mb-3">
        <i class="zmdi zmdi-search"></i>
        <input type="text" class="form-control" placeholder="Search..." />
      </div>

      <ul class="chat-list">
        <li class="header d-flex justify-content-between ps-3 pe-3 mb-1">
          <span>RECENT CALL</span>
        </li>
        <li v-for="item in phoneList" :key="item.id">
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
          <a href="#" class="card" @click="openPhone(item)">
            <div class="card-body">
              <div class="media">
                <div class="avatar me-3">
                  <img
                    class="avatar rounded-circle"
                    :src="item.img"
                    alt="avatar"
                  />
                </div>
                <div class="media-body overflow-hidden">
                  <div class="d-flex align-items-center mb-1">
                    <h6 class="text-truncate mb-0 me-auto">
                      {{ item.nickname }}
                    </h6>
                  </div>
                  <div class="text-truncate">
                    <i class="zmdi zmdi-phone-forwarded me-1"></i>
                    {{ item.date }}
                  </div>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const phoneList = [
  {
    id: 1,
    img: "http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/xs/avatar2.jpg",
    nickname: "Michelle Green",
    date: "2022/4/17 15:60",
  },
  {
    id: 2,
    img: "http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/xs/avatar3.jpg",
    nickname: "Jane Hunt",
    date: "2022/4/17 15:60",
  },
  {
    id: 3,
    img: "http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/xs/avatar4.jpg",
    nickname: "Jack chen",
    date: "2022/4/17 15:60",
  },
  {
    id: 4,
    img: "http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/xs/avatar5.jpg",
    nickname: "Dragon li",
    date: "2022/4/17 15:60",
  },
  {
    id: 5,
    img: "http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/xs/avatar6.jpg",
    nickname: "Zongfang liu",
    date: "2022/4/17 15:60",
  },
];
export default {
  name: "PhoneBar",
  data() {
    return {
      phoneList: phoneList,
    };
  },
  methods: {
    openPhone(mate) {
      var viewStatus = [true, true, true, false, true];
      this.$emit("updateView", viewStatus,mate);
    },
  },
};
</script>

<style>
</style>