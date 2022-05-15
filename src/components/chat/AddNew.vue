<template>
  <div class="addnew-user-sidebar py-xl-4 py-3 px-xl-4 px-3">
    <div class="d-flex flex-column">
      <div class="header border-bottom pb-4 d-flex justify-content-between">
        <div>
          <h6 class="mb-0 font-weight-bold">Add new member</h6>
          <span class="text-muted">Update your profile details</span>
        </div>
        <div>
          <button
            class="btn btn-link text-muted close-chat-sidebar"
            type="button"
            @click="closeNew()"
          >
            <i class="zmdi zmdi-close"></i>
          </button>
        </div>
      </div>
      <div class="body mt-4">
        <div class="form-group input-group-lg search mb-3">
          <i class="zmdi zmdi-search"></i
          ><input type="text" class="form-control" placeholder="Search..." />
        </div>
        <ul class="chat-list">
          <li class="header d-flex justify-content-between ps-3 pe-3 mb-1">
            <span>A</span>
            <div class="dropdown">
              <a
                class="
                  btn btn-link
                  px-1
                  py-0
                  border-0
                  text-muted
                  dropdown-toggle
                "
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></a>
              <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="#">Action</a
                ><a class="dropdown-item" href="#">Another action</a
                ><a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </li>
          <li>
            <div class="hover_action">
              <button type="button" class="btn btn-link text-info">
                <i class="zmdi zmdi-plus-circle"></i>
              </button>
            </div>
            <a href="#" class="card"
              ><div class="card-body">
                <div class="media">
                  <div class="avatar me-3">
                    <img
                      class="avatar rounded-circle"
                      src="assets/images/xs/avatar1.jpg"
                      alt="avatar"
                    />
                  </div>
                  <div class="media-body overflow-hidden">
                    <div class="d-flex align-items-center mb-1">
                      <h6 class="text-truncate mb-0 me-auto">Amelia Green</h6>
                    </div>
                    <div class="text-truncate">last seen 2 hours ago</div>
                  </div>
                </div>
              </div></a
            >
          </li>
          <li>
            <div class="hover_action">
              <button type="button" class="btn btn-link text-info">
                <i class="zmdi zmdi-plus-circle"></i>
              </button>
            </div>
            <a href="#" class="card"
              ><div class="card-body">
                <div class="media">
                  <div class="avatar me-3">
                    <img
                      class="avatar rounded-circle"
                      src="assets/images/xs/avatar3.jpg"
                      alt="avatar"
                    />
                  </div>
                  <div class="media-body overflow-hidden">
                    <div class="d-flex align-items-center mb-1">
                      <h6 class="text-truncate mb-0 me-auto">Ava Green</h6>
                    </div>
                    <div class="text-truncate">last seen 1 hours ago</div>
                  </div>
                </div>
              </div></a
            >
          </li>
          <li class="header d-flex justify-content-between ps-3 pe-3 mb-1">
            <span>C</span>
          </li>
          <li>
            <div class="hover_action">
              <button type="button" class="btn btn-link text-info">
                <i class="zmdi zmdi-plus-circle"></i>
              </button>
            </div>
            <a href="#" class="card"
              ><div class="card-body">
                <div class="media">
                  <div class="avatar me-3">
                    <img
                      class="avatar rounded-circle"
                      src="assets/images/xs/avatar4.jpg"
                      alt="avatar"
                    />
                  </div>
                  <div class="media-body overflow-hidden">
                    <div class="d-flex align-items-center mb-1">
                      <h6 class="text-truncate mb-0 me-auto">
                        Charlotte Green
                      </h6>
                    </div>
                    <div class="text-truncate">last seen 6 hours ago</div>
                  </div>
                </div>
              </div></a
            >
          </li>
          <li>
            <div class="hover_action">
              <button type="button" class="btn btn-link text-info">
                <i class="zmdi zmdi-plus-circle"></i>
              </button>
            </div>
            <a href="#" class="card"
              ><div class="card-body">
                <div class="media">
                  <div class="avatar me-3">
                    <img
                      class="avatar rounded-circle"
                      src="assets/images/xs/avatar5.jpg"
                      alt="avatar"
                    />
                  </div>
                  <div class="media-body overflow-hidden">
                    <div class="d-flex align-items-center mb-1">
                      <h6 class="text-truncate mb-0 me-auto">Chloe Green</h6>
                    </div>
                    <div class="text-truncate">last seen 3 hours ago</div>
                  </div>
                </div>
              </div></a
            >
          </li>
          <li>
            <div class="hover_action">
              <button type="button" class="btn btn-link text-info">
                <i class="zmdi zmdi-plus-circle"></i>
              </button>
            </div>
            <a href="#" class="card"
              ><div class="card-body">
                <div class="media">
                  <div class="avatar me-3">
                    <img
                      class="avatar rounded-circle"
                      src="assets/images/xs/avatar6.jpg"
                      alt="avatar"
                    />
                  </div>
                  <div class="media-body overflow-hidden">
                    <div class="d-flex align-items-center mb-1">
                      <h6 class="text-truncate mb-0 me-auto">Charles Green</h6>
                    </div>
                    <div class="text-truncate">last seen 2 hours ago</div>
                  </div>
                </div>
              </div></a
            >
          </li>
          <li class="header d-flex justify-content-between ps-3 pe-3 mb-1">
            <span>D</span>
          </li>
          <li>
            <div class="hover_action">
              <button type="button" class="btn btn-link text-info">
                <i class="zmdi zmdi-plus-circle"></i>
              </button>
            </div>
            <a href="#" class="card"
              ><div class="card-body">
                <div class="media">
                  <div class="avatar me-3">
                    <img
                      class="avatar rounded-circle"
                      src="assets/images/xs/avatar4.jpg"
                      alt="avatar"
                    />
                  </div>
                  <div class="media-body overflow-hidden">
                    <div class="d-flex align-items-center mb-1">
                      <h6 class="text-truncate mb-0 me-auto">David Green</h6>
                    </div>
                    <div class="text-truncate">last seen 6 hours ago</div>
                  </div>
                </div>
              </div></a
            >
          </li>
          <li class="header d-flex justify-content-between ps-3 pe-3 mb-1">
            <span>M</span>
          </li>
          <li>
            <div class="hover_action">
              <button type="button" class="btn btn-link text-info">
                <i class="zmdi zmdi-plus-circle"></i>
              </button>
            </div>
            <a href="#" class="card"
              ><div class="card-body">
                <div class="media">
                  <div class="avatar me-3">
                    <img
                      class="avatar rounded-circle"
                      src="assets/images/xs/avatar8.jpg"
                      alt="avatar"
                    />
                  </div>
                  <div class="media-body overflow-hidden">
                    <div class="d-flex align-items-center mb-1">
                      <h6 class="text-truncate mb-0 me-auto">Michael Green</h6>
                    </div>
                    <div class="text-truncate">last seen 6 hours ago</div>
                  </div>
                </div>
              </div></a
            >
          </li>
          <li>
            <div class="hover_action">
              <button type="button" class="btn btn-link text-info">
                <i class="zmdi zmdi-plus-circle"></i>
              </button>
            </div>
            <a href="#" class="card"
              ><div class="card-body">
                <div class="media">
                  <div class="avatar me-3">
                    <img
                      class="avatar rounded-circle"
                      src="assets/images/xs/avatar8.jpg"
                      alt="avatar"
                    />
                  </div>
                  <div class="media-body overflow-hidden">
                    <div class="d-flex align-items-center mb-1">
                      <h6 class="text-truncate mb-0 me-auto">Mohammad</h6>
                    </div>
                    <div class="text-truncate">last seen 6 hours ago</div>
                  </div>
                </div>
              </div></a
            >
          </li>
          <li class="header d-flex justify-content-between ps-3 pe-3 mb-1">
            <span>T</span>
          </li>
          <li>
            <div class="hover_action">
              <button type="button" class="btn btn-link text-info">
                <i class="zmdi zmdi-plus-circle"></i>
              </button>
            </div>
            <a href="#" class="card"
              ><div class="card-body">
                <div class="media">
                  <div class="avatar me-3">
                    <img
                      class="avatar rounded-circle"
                      src="assets/images/xs/avatar9.jpg"
                      alt="avatar"
                    />
                  </div>
                  <div class="media-body overflow-hidden">
                    <div class="d-flex align-items-center mb-1">
                      <h6 class="text-truncate mb-0 me-auto">Tommy Green</h6>
                    </div>
                    <div class="text-truncate">last seen 6 hours ago</div>
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
  name: "AddNew",

  methods: {
    closeNew() {
      document
        .getElementById("chat-main")
        .classList.remove("open-user-sidebar");
    },
  },
};
</script>

<style>
</style>