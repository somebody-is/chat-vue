<template>
  <div class="chat-body">
    <ChatHeader></ChatHeader>
    <div class="collapse" id="chat-search-div">
      <div class="container-xxl py-2">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Find messages in current conversation"
          />
          <div class="input-group-append">
            <span class="input-group-text text-muted">0 / 0</span>
          </div>
          <div class="input-group-append">
            <button type="button" class="btn btn-secondary">Search</button>
            <button
              type="button"
              class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle Dropdown</span>
            </button>
            <div class="dropdown-menu dropdown-menu-right shadow border-0">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div role="separator" class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="chat-content" id="message-content">
      <div class="container-xxl" style="margin-bottom: 80px">
        <ul class="list-unstyled py-4">
          <li
            class="d-flex message"
            v-for="item in chatList"
            :key="item.id"
            :class="item.from == '1' ? 'right' : ''"
          >
            <div class="mr-lg-3 me-2">
              <img
                v-show="item.from != '1'"
                class="avatar sm rounded-circle"
                :src="item.img"
                alt="avatar"
              />
            </div>

            <div class="message-body">
              <span class="date-time text-muted">{{
                item.nickname + ", " + item.createDate
              }}</span>
              <div
                class="message-row d-flex align-items-center"
                :class="item.from == '1' ? 'justify-content-end' : ''"
              >
                <div class="dropdown" v-show="item.from == '1'">
                  <a
                    class="text-muted ms-1 p-2 text-muted"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="zmdi zmdi-more-vert"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#">Edit</a>
                    <a class="dropdown-item" href="#">Share</a>
                    <a class="dropdown-item" href="#">Delete</a>
                  </div>
                </div>

                <div class="message-content p-3" style="overflow: hidden">
                  <h5 v-if="item.type == 0">
                    <h5
                      v-html="
                        toTxt(item.content.content)
                        .replace(
                          /\#[\u4E00-\u9FA5]{1,3}\;/gi,
                          emotion
                        )
                      "
                    ></h5>
                  </h5>
                  <img v-else-if="item.type == 1" :src="item.content.content" />
                  <video
                    v-else-if="item.type == 2"
                    :src="item.content.content"
                    controls="controls"
                    width="240"
                    height="190"
                  />
                  <div v-else-if="item.type == 3" class="attachment">
                    <a href="fa.com" class="media mt-2">
                      <div class="avatar me-2">
                        <div class="avatar rounded no-image orange">
                          <i class="zmdi zmdi-file"></i>
                        </div>
                      </div>
                      <div class="media-body overflow-hidden">
                        <h6 class="text-truncate mb-0">
                          {{ item.content.name }}
                        </h6>
                        <span class="file-size"
                          >{{
                            Math.round(
                              (item.content.size / (1024 * 1024)) * 10
                            ) / 10
                          }}mb</span
                        >
                      </div>
                    </a>
                  </div>
                  <audio
                    v-else-if="item.type == 4"
                    :src="item.content.content"
                    controls="controls"
                    class="web__msg--audio"
                    style="width: 15rem; height: 20px"
                  ></audio>
                </div>

                <div class="dropdown" v-show="item.from != '1'">
                  <a
                    class="text-muted ms-1 p-2 text-muted"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="zmdi zmdi-more-vert"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#">Edit</a>
                    <a class="dropdown-item" href="#">Share</a>
                    <a class="dropdown-item" href="#">Delete</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="chat-footer border-top py-xl-4 py-lg-2 py-2">
      <div class="container-xxl">
        <div class="row">
          <div class="col-12">
            <div class="input-group align-items-center">
              <div class="input-group-append">
                <span class="input-group-text border-0">
                  <button
                    class="btn btn-sm btn-link text-muted"
                    data-toggle="tooltip"
                    title=""
                    type="button"
                    data-original-title="Refresh"
                    @click="clearContent()"
                  >
                    <i class="zmdi zmdi-refresh font-22"></i>
                  </button>
                </span>
              </div>
              <div class="input-group-append">
                <span class="input-group-text border-0">
                  <el-popover width="300" trigger="click">
                    <emotion @emotion="handleEmotion" :height="200"></emotion>
                    <button
                      class="btn btn-sm btn-link text-muted"
                      data-toggle="tooltip"
                      title=""
                      type="button"
                      data-original-title="Smaily"
                      slot="reference"
                    >
                      <i class="zmdi zmdi-mood font-22"></i>
                    </button>
                  </el-popover>
                </span>
              </div>
              <input id="my_inputObj" type="file" hidden>
              <div class="input-group-append">
                <span class="input-group-text border-0">
                  <button
                    id="Fileinput"
                    class="btn btn-sm btn-link text-muted"
                    data-toggle="tooltip"
                    title=""
                    type="button"
                    @click="chooseFile()"
                    data-original-title="Attachment"
                  >
                    <i class="zmdi zmdi-attachment font-22"></i>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="input-group align-items-center">
              <input
                v-model="content"
                type="text"
                class="form-control border-0 pl-0"
                placeholder="Type your message..."
              />

              <div class="input-group-append">
                <span class="input-group-text border-0 pr-0">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    @click="sendMessage(0)"
                  >
                    <span class="d-none d-md-inline-block me-2">Send</span>
                    <i class="zmdi zmdi-mail-send"></i>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Audio from "./Audio.vue";
import Emotion from "@/components/Emotion/index";
const chatList = [
  {
    id: "1",
    img: "http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/xs/avatar5.jpg",
    nickname: "Jason",
    createDate: "2022/4/15 15:45",
    type: 0,
    from: "1",
    to: "1",
    content: {
      name: "text",
      content: "Ok, I got it!",
    },
  },
  {
    id: "2",
    img: "http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/xs/avatar5.jpg",
    nickname: "Jason",
    createDate: "2022/4/15 15:45",
    type: 2,
    from: "2",
    to: "1",
    content: {
      name: "movie.mp4",
      content: "https://www.w3school.com.cn/i/movie.mp4",
    },
  },
  {
    id: "3",
    img: "http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/xs/avatar5.jpg",
    nickname: "Jason",
    createDate: "2022/4/15 15:45",
    type: 1,
    from: "2",
    to: "1",
    content: {
      name: "avatar5.jpg",
      content:
        "http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/xs/avatar5.jpg",
    },
  },
  {
    id: "4",
    img: "http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/xs/avatar5.jpg",
    nickname: "Jason",
    createDate: "2022/4/15 15:45",
    type: 3,
    from: "2",
    to: "1",
    content: {
      name: "test.txt",
      content: "#",
      size: 45864156,
    },
  },
  {
    id: "5",
    img: "http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/xs/avatar5.jpg",
    nickname: "Jason",
    createDate: "2022/4/15 15:45",
    type: 4,
    from: "2",
    to: "1",
    content: {
      name: "test.mp3",
      content: "https://www.w3school.com.cn/i/horse.mp3",
    },
  },
];
import ChatHeader from "./ChatHeader";
import Video from "./Video.vue";
export default {
  name: "Chat",
  components: {
    ChatHeader,
    Emotion,
    Video,
    Audio,
  },
  data() {
    return {
      chatList: chatList,
      content: "",
    };
  },
  methods: {
    handleEmotion(i) {
      this.content += i;
    },
    clearContent() {
      this.content = "";
    },
    //替换文本中的 '<' '>'
    toTxt(str) {
      var RexStr = /\<|\>/g;
      str = str.replace(RexStr, function (MatchStr) {
        switch (MatchStr) {
          case "<":
            return "&lt;";
            break;
          case ">":
            return "&gt;";
            break;
          default:
            break;
        }
      });

      return str;
    },
    // 将匹配结果替换表情图片
    emotion(res) {
      let word = res.replace(/\#|\;/gi, "");
      const list = [
        "微笑",
        "撇嘴",
        "色",
        "发呆",
        "得意",
        "流泪",
        "害羞",
        "闭嘴",
        "睡",
        "大哭",
        "尴尬",
        "发怒",
        "调皮",
        "呲牙",
        "惊讶",
        "难过",
        "酷",
        "冷汗",
        "抓狂",
        "吐",
        "偷笑",
        "可爱",
        "白眼",
        "傲慢",
        "饥饿",
        "困",
        "惊恐",
        "流汗",
        "憨笑",
        "大兵",
        "奋斗",
        "咒骂",
        "疑问",
        "嘘",
        "晕",
        "折磨",
        "衰",
        "骷髅",
        "敲打",
        "再见",
        "擦汗",
        "抠鼻",
        "鼓掌",
        "糗大了",
        "坏笑",
        "左哼哼",
        "右哼哼",
        "哈欠",
        "鄙视",
        "委屈",
        "快哭了",
        "阴险",
        "亲亲",
        "吓",
        "可怜",
        "菜刀",
        "西瓜",
        "啤酒",
        "篮球",
        "乒乓",
        "咖啡",
        "饭",
        "猪头",
        "玫瑰",
        "凋谢",
        "示爱",
        "爱心",
        "心碎",
        "蛋糕",
        "闪电",
        "炸弹",
        "刀",
        "足球",
        "瓢虫",
        "便便",
        "月亮",
        "太阳",
        "礼物",
        "拥抱",
        "强",
        "弱",
        "握手",
        "胜利",
        "抱拳",
        "勾引",
        "拳头",
        "差劲",
        "爱你",
        "NO",
        "OK",
        "爱情",
        "飞吻",
        "跳跳",
        "发抖",
        "怄火",
        "转圈",
        "磕头",
        "回头",
        "跳绳",
        "挥手",
        "激动",
        "街舞",
        "献吻",
        "左太极",
        "右太极",
      ];
      let index = list.indexOf(word);
      return `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif" align="middle">`;
    },
    dateFormat(date) {
      var year = date.getFullYear();

      var month =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1; //三目运算符
      var day = date.getDate().toString().padStart(2, "0");
      var hour = date.getHours().toString().padStart(2, "0");
      var minute = date.getMinutes().toString().padStart(2, "0");
      var second = date.getSeconds().toString().padStart(2, "0");
      return (
        year +
        "/" +
        month +
        "/" +
        day +
        " " +
        hour +
        ":" +
        minute +
        ":" +
        second
      );
    },
    sendMessage(type, file) {
      if (type == 0 && this.content.length == 0) return;
      let message = {
        id: new Date().toTimeString(),
        img: this.$store.state.userInfo.img,
        nickname: this.$store.state.userInfo.nickname,
        createDate: this.dateFormat(new Date()),
        type: type,
        from: this.$store.state.userInfo.id,
        to: this.$store.state.mate.id,
        content: {
          name: file ? file.name : "text",
          content: file ? "#" : this.content,
          size: file ? file.size : "",
        },
      };
      console.log(this.content);

      this.chatList.push(message);
      this.content = "";
      document.getElementById("message-content").scrollTop =
        document.getElementById("message-content").scrollHeight + 500;
    },
    chooseFile() {
      var inputObj = document.getElementById("my_inputObj")
      inputObj.onchange = (e) => {
        var file = e.target.files[0];
        console.log(file);
        this.sendMessage(3, file);
      };
      inputObj.click();
    },
  },
};
</script>

<style>
</style>