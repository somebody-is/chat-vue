<template>
  <div class="chat-body">
   <ChatHeader :mate="mate"></ChatHeader>

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

    <div
      class="d-flex justify-content-left align-items-top h-100 text-center py-2"
    >
      <div class="container-xxl">
        <div class="video-div overflow-hidden position-relative">
          <div class="video-action-btn position-absolute p-2 rounded">
            <button
              type="submit"
              class="btn btn-sm btn-default"
              data-toggle="tooltip"
              title=""
              data-original-title="Mute"
            >
              <i class="zmdi zmdi-mic-off"></i>
            </button>
            <button
              type="submit"
              class="btn btn-sm btn-default"
              data-toggle="tooltip"
              title=""
              data-original-title="Call Recording"
            >
              <i class="zmdi zmdi-dot-circle"></i>
            </button>
            <button
              type="submit"
              class="btn btn-sm btn-danger"
              data-toggle="tooltip"
              title=""
              data-original-title="End cll"
            >
              <i class="zmdi zmdi-phone"></i>
            </button>
            <button
              type="submit"
              class="btn btn-sm btn-default"
              data-toggle="tooltip"
              title=""
              data-original-title="Screen Share"
            >
              <i class="zmdi zmdi-desktop-mac"></i>
            </button>
            <button
              type="submit"
              class="btn btn-sm btn-default"
              data-toggle="tooltip"
              title=""
              data-original-title="Chat Sidebar"
            >
              <i class="zmdi zmdi-comments"></i>
            </button>
          </div>

          <div
            class="my-video position-absolute rounded overflow-hidden border"
          >
            <img
              class="img-fluid rounded"
              src="http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/my-video-img.jpg"
              alt=""
            />
          </div>
          <img
            class="img-fluid rounded"
            src="http://v.bootstrapmb.com/2021/2/yxh1x9666/assets/images/video-img.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChatHeader from './ChatHeader'
export default {
  name: "Video",
  props:['mate'],
  components:{
    ChatHeader
  },
};
</script>

<style>
</style>