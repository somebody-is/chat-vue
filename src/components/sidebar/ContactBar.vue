<template>
  <div>
    <div class="tab-pane fade" id="nav-tab-contact" name="nav-tab" role="tabpanel">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h3 class="mb-0 text-primary">Contact</h3>
        <div>
          <button
            class="btn btn-dark"
            type="button"
            data-toggle="modal"
            data-target="#InviteFriends"
          >
            Invite Friends
          </button>
        </div>
      </div>

      <div class="form-group input-group-lg search mb-3">
        <i class="zmdi zmdi-search"></i>
        <input type="text" class="form-control" placeholder="Search..." />
      </div>

      <ul class="chat-list" v-for="item in initial" :key="item" v-show="mailList[item]?mailList[item].length!=0:false">
        <li class="header d-flex justify-content-between ps-3 pe-3 mb-1">
          <span>{{ item }}</span>
        </li>
        <li class="online" v-for="item2 in mailList[item]" :key="item2.id">
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
          <a href="#" class="card" @click="openChat(item2)">
            <div class="card-body">
              <div class="media">
                <div class="avatar me-3">
                  <img
                    class="avatar rounded-circle"
                    :src="item2.img"
                    alt="avatar"
                  />
                </div>
                <div class="media-body overflow-hidden">
                  <div class="d-flex align-items-center mb-1">
                    <h6 class="text-truncate mb-0 me-auto">
                      {{ item2.nickname }}
                    </h6>
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
const contactList = [
  {
    id: 1,
    img: "http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/xs/avatar1.jpg",
    nickname: "Tommy Green",
    status: 'online'
  },
  {
    id: 2,
    img: "http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/xs/avatar2.jpg",
    nickname: "帅哥",
    status: 'online'
  },
  {
    id: 3,
    img: "http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/xs/avatar3.jpg",
    nickname: "列车员",
    status: 'online'
  },
  {
    id: 4,
    img: "http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/xs/avatar4.jpg",
    nickname: "王朝阳",
    status: 'online'
  },
  {
    id: 5,
    img: "http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/xs/avatar5.jpg",
    nickname: "赵宇",
    status: 'online'
  },
  {
    id: 6,
    img: "http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/xs/avatar6.jpg",
    nickname: "igsgsgs",
    status: 'online'
  },
  {
    id: 7,
    img: "http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/xs/avatar7.jpg",
    nickname: "a阿飞噶噶",
    status: 'online'
  },
  {
    id: 8,
    img: "http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/xs/avatar8.jpg",
    nickname: "土地法规定",
    status: 'online'
  },
  {
    id: 9,
    img: "http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/xs/avatar9.jpg",
    nickname: "出租车",
    status: 'online'
  },
  {
    id: 10,
    img: "http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/xs/avatar10.jpg",
    nickname: "黑车",
    status: 'online'
  },{
    id: 11,
    img: "http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/xs/avatar10.jpg",
    nickname: "^_^",
    status: 'online'
  },
];
export default {
  name: "ContactBar",
  data() {
    return {
      contactList: contactList,
      initial: ['#','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
      mailList: [],
    }
  },
  methods: {
    openChat(mate){
      console.log(mate)
      this.$store.dispatch("setMate",mate)
      localStorage.setItem("mate",JSON.stringify(mate))
      this.$router.push("/welcome/SingleChat")
      var body = document.getElementsByTagName("html")[0]
      body.classList.remove("open-sidebar-menu")
    },
    //中文转拼音
    chineseToEnglish(c) {
      var idx = -1;
      var MAP = "ABCDEFGHJKLMNOPQRSTWXYZ";
      var boundaryChar = "驁簿錯鵽樲鰒餜靃攟鬠纙鞪黁漚曝裠鶸蜶籜鶩鑂韻糳";
      if (!String.prototype.localeCompare) {
        throw Error("String.prototype.localeCompare not supported.");
      }
      if (/[^\u4e00-\u9fa5]/.test(c)) {
        return c;
      }
      for (var i = 0; i < boundaryChar.length; i++) {
        if (boundaryChar[i].localeCompare(c, "zh-CN-u-co-pinyin") >= 0) {
          idx = i;
          break;
        }
      }
      return MAP[idx];
    },
    //获取第一个字母
    getFirstUpperChar(str) {
      var string = String(str);
      var c = string[0];
      if (/[^\u4e00-\u9fa5]/.test(c)) {
        return c.toUpperCase();
      } else {
        return this.chineseToEnglish(c);
      }
    },
    //排序
    sortFriend(list) {
      var map = [];
      var c = "A".charCodeAt();
      for (; c <= "Z".charCodeAt(); c++) {
        map[String.fromCharCode(c)] = []; 
      }
      map["#"] = [];
      var firstCharUpper;
      var getFirstUpperChar=this.getFirstUpperChar
      list.forEach(function (item) {
        firstCharUpper = getFirstUpperChar(item.nickname);
        if (map.hasOwnProperty(firstCharUpper)) {
          map[firstCharUpper].push(item);
        } else {
          map["#"].push(item);
        }
      });
      let arr = [];

      let arrKey = Object.keys(map); //.sort()
      arrKey.map((i) => {
        arr.push(
          ...map[i].sort(function (a, b) {
            return a.nickname.localeCompare(b.nickname, "zh-CN", { numeric: true });
          })
        );
      });

      return map;
    },
  },
  mounted() {
    this.mailList = this.sortFriend(this.contactList);
  },
};
</script>

<style>
</style>