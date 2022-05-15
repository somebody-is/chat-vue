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
      class="
        d-flex
        justify-content-center
        align-items-center
        h-100
        text-center
        py-xl-4 py-md-3 py-2
      "
    >
      <div class="container-xxl">
        <div class="avatar lg avatar-bg me-auto ms-auto mb-5">
          <div class="avatar lg rounded-circle no-image">
            <span><i class="zmdi zmdi-mic zmdi-hc-2x"></i></span>
          </div>
          <span class="a-bg-1"></span>
          <span class="a-bg-2"></span>
        </div>

        <div class="mt-5">
          <button
            type="submit"
            class="btn btn-default"
            data-toggle="tooltip"
            title=""
            data-original-title="Mute"
          >
            <i class="zmdi zmdi-mic-off"></i>
          </button>
          <button
            type="submit"
            class="btn btn-default"
            data-toggle="tooltip"
            title=""
            data-original-title="Call Recording"
          >
            <i class="zmdi zmdi-dot-circle"></i>
          </button>
          <button
            type="submit"
            class="btn btn-danger"
            data-toggle="tooltip"
            title=""
            data-original-title="End cll"
          >
            <i class="zmdi zmdi-phone"></i>
          </button>
          <button
            type="submit"
            class="btn btn-default"
            data-toggle="tooltip"
            title=""
            data-original-title="Screen Share"
          >
            <i class="zmdi zmdi-desktop-mac"></i>
          </button>
          <button
            type="submit"
            class="btn btn-default"
            data-toggle="tooltip"
            title=""
            data-original-title="Chat Sidebar"
          >
            <i class="zmdi zmdi-comments"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChatHeader from './ChatHeader'
export default {
  name: "Audio",
  props:['mate'],
  components:{
    ChatHeader
  },
};
</script>

<style>
</style>