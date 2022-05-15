<template>
  <div class="main-body">
    <div class="body-header border-bottom py-xl-3 py-2">
      <div class="container px-0">
        <div class="row align-items-center">
          <div class="col-12">
            <div class="media">
              <div class="media-body overflow-hidden">
                <div class="d-flex align-items-center mb-1">
                  <h6 class="fw-bold text-truncate mb-0 me-auto">Settings</h6>
                </div>
                <div class="text-truncate">
                  Last Update your profile:29 Aug 2020
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="body-page d-flex py-xl-3 py-2">
      <div class="container px-0">
        <div class="row">
          <div class="col-12">
            <ul
              class="
                nav nav-tabs nav-overflow
                page-header-tabs
                mb-4
                mt-md-5 mt-3
              "
            >
              <li class="nav-item">
                <a
                  class="nav-link active"
                  data-toggle="tab"
                  href="#setting-general"
                  role="tab"
                  >General</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-toggle="tab"
                  href="#setting-security"
                  role="tab"
                  >Security</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="tab-content">
          <div
            class="tab-pane fade show active"
            id="setting-general"
            role="tabpanel"
          >
            <div class="row">
              <div class="col-12">
                <div class="card mb-4">
                  <div class="card-header">
                    <h6 class="card-title mb-0">Account Setting</h6>
                    <span class="text-muted small"
                      >Update your account details</span
                    >
                  </div>
                  <div class="card-body">
                    <form class="row g-3">
                      <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control form-control-lg"
                              placeholder="Enter your name"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control form-control-lg"
                              placeholder="Enter phone"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control form-control-lg"
                              placeholder="Enter your email"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control form-control-lg"
                              placeholder="Facebook profile link"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control form-control-lg"
                              placeholder="Instagram profile link"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="form-group">
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control form-control-lg"
                              placeholder="Linkedin profile link"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label>Select Avatar</label
                          ><input type="file" class="form-control-file" />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <div class="input-group">
                            <textarea
                              rows="4"
                              class="form-control"
                              placeholder="Enter Bio"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <button type="button" class="btn btn-primary">
                          Update Details</button
                        ><button type="button" class="btn btn-link">
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-between mt-4">
              <div class="col-12 col-md-6">
                <h5>Delete your account</h5>
                <p class="text-muted mb-md-0">
                  Please note,deleting your account is a permanent action and
                  will no be recoverable once completed.
                </p>
              </div>
              <div class="col-auto">
                <button class="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="setting-security" role="tabpanel">
            <div class="row justify-content-between mb-4">
              <div class="col-12 col-md-6">
                <h5>Change your password</h5>
                <p class="text-muted mb-md-0">
                  We will email you a confirmation when changing your
                  password,so please expect that email after submitting.
                </p>
              </div>
              <div class="col-auto">
                <button class="btn btn-warning">Forgot your password?</button>
              </div>
            </div>
            <div class="row g-3">
              <div class="col-12">
                <div class="card mb-4">
                  <div class="card-body">
                    <form class="row">
                      <div class="col-lg-4 col-md-12">
                        <div class="form-group mb-3">
                          <label>Current password</label
                          ><input type="email" class="form-control" />
                        </div>
                        <div class="form-group mb-3">
                          <label>New password</label
                          ><input type="email" class="form-control" />
                        </div>
                        <div class="form-group mb-3">
                          <label>Confirm password</label
                          ><input type="email" class="form-control" />
                        </div>
                        <button type="button" class="btn btn-primary">
                          Update Password</button
                        ><button type="button" class="btn btn-link">
                          Cancel
                        </button>
                      </div>
                      <div class="col-lg-8 col-md-12">
                        <div class="card bg-light border">
                          <div class="card-body">
                            <p class="mb-2">Password requirements</p>
                            <p class="small text-muted mb-2">
                              To create a new password,you have to meet all of
                              the following requirements:
                            </p>
                            <ul class="small text-muted ps-4 mb-0">
                              <li>Minimum 8 character</li>
                              <li>At least one special character</li>
                              <li>At least one number</li>
                              <li>Can’t be the same as a previous password</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-between mt-4 mb-4">
              <div class="col-12 col-md-6">
                <h5>Device History</h5>
                <p class="text-muted mb-md-0">
                  If you see a device here that you believe wasn’t you,please
                  contact our account fraud department immediately.
                </p>
              </div>
              <div class="col-auto">
                <button class="btn btn-dark">Log out all devices</button>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="card mb-4">
                  <div class="card-body">
                    <div class="list-group custom list-group-flush my-md-3">
                      <div class="list-group-item px-0">
                        <div class="row align-items-center">
                          <div class="col-auto">
                            <div class="avatar lg text-center">
                              <i class="zmdi zmdi-smartphone h2"></i>
                            </div>
                          </div>
                          <div class="col ml-n2">
                            <h6 class="mb-1">iPhone 11</h6>
                            <small class="text-muted"
                              >Brownsville,VT ·
                              <time>Jun 11 at 10:05am</time></small
                            >
                          </div>
                          <div class="col-auto">
                            <button class="btn btn-sm btn-white">
                              Sign out
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="list-group-item px-0">
                        <div class="row align-items-center">
                          <div class="col-auto">
                            <div class="avatar lg text-center">
                              <i class="zmdi zmdi-desktop-mac h2"></i>
                            </div>
                          </div>
                          <div class="col ml-n2">
                            <h6 class="mb-1">
                              iMac OSX ·
                              <span class="font-weight-normal"
                                >Safari 10.2</span
                              >
                            </h6>
                            <small class="text-muted"
                              >Ct,Corona,CA ·
                              <time>September 14 at 2:30pm</time></small
                            >
                          </div>
                          <div class="col-auto">
                            <button class="btn btn-sm btn-white">
                              Sign out
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="list-group-item px-0">
                        <div class="row align-items-center">
                          <div class="col-auto">
                            <div class="avatar lg text-center">
                              <i class="zmdi zmdi-laptop h2"></i>
                            </div>
                          </div>
                          <div class="col ml-n2">
                            <h6 class="mb-1">HP Laptop Win10</h6>
                            <small class="text-muted"
                              >Ct,Corona,CA ·
                              <time>September 16 at 11:16am</time></small
                            >
                          </div>
                          <div class="col-auto">
                            <button class="btn btn-sm btn-white">
                              Sign out
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="list-group-item px-0">
                        <div class="row align-items-center">
                          <div class="col-auto">
                            <div class="avatar lg text-center">
                              <i class="zmdi zmdi-desktop-windows h2"></i>
                            </div>
                          </div>
                          <div class="col ml-n2">
                            <h6 class="mb-1">
                              iMac OSX ·
                              <span class="font-weight-normal"
                                >Edge browser</span
                              >
                            </h6>
                            <small class="text-muted"
                              >Huntington Station,NY ·
                              <time>October 26 at 5:16pm</time></small
                            >
                          </div>
                          <div class="col-auto">
                            <button class="btn btn-sm btn-white">
                              Sign out
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"Settings",
    methods:{
      
    }
};
</script>

<style>
</style>