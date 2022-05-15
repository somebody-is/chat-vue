<template>
  <div>
    <!--input输入框-->
    <Input v-model="inputVal" placeholder="请输入" id="input" class="input">
    </Input>
    <!--表情包弹出组件-->
    <Poptip class="poptip">
      <Button icon="ios-search"></Button>
      <!--表情包内部结构-->
      <div slot="content">
        <el-tabs tab-position="left" @tab-click="tabClick">
          <!--循环表情包的类型-->
          <el-tab-pane
            :label="item.name"
            v-for="(item, index) in faceList"
            :key="index"
          >
            <div class="img-div">
              <!--循环表情类型的每一个表情包-->
              <div
                class="emoji"
                v-for="(item1, index1) in faceList[tabIndex].iconArr"
                :key="index1"
                @click="clickEmoji(item1.icon)"
                :style="index1%5==0?'display: table-column;padding-top:10px':''"
              >
                <div>{{ item1.icon }}</div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </Poptip>
  </div>
</template>

<script>
import { emoji } from "./emoji.js";
export default {
  name: "Emoji",
  data() {
    return {
      faceList: emoji,
      tabIndex: 0, //表情包的类型索引
      inputVal: "", // 输入框内的值
    };
  },
  methods: {
    // 点击表情包
    clickEmoji(val) {
      // 获取文本输入框元素节点
      let ele = document.querySelector("#input .ivu-input");
      // 获取光标
      let cursor = ele.selectionStart;
      // 设置文本内容
      ele.setRangeText(val);
      // 移动光标并聚焦
      ele.selectionStart = cursor + 2;
      ele.focus();
      // 使文本输入框的内容等于当前的值
      this.inputVal = ele.value;
    },
    // 点击标签页
    tabClick(tab) {
      this.tabIndex = tab.index - 0;
    },
  },
};
</script>

<style>
.img-div {
  width: 200px;
}
.emoji {
  display: inline-table;
  width: 50px;
  font-size: 20px;
}
</style>