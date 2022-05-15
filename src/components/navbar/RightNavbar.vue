<template>
  <div class="rightbar d-none d-md-block">
    <div class="nav flex-column nav-pills border-start py-xl-4 py-3 h-100">
      <a
        class="nav-link mb-2 text-center rightbar-link"
        data-toggle="pill"
        href="#tab-calendar"
        @click="open()"
        ><i class="zmdi zmdi-calendar"></i
      ></a>
      <a
        class="nav-link mb-2 text-center rightbar-link"
        data-toggle="pill"
        href="#tab-note"
        @click="open()"
        ><i class="zmdi zmdi-lamp"></i
      ></a>
      <a
        class="nav-link mb-2 text-center rightbar-link"
        data-toggle="pill"
        href="#tab-task"
        @click="open()"
        ><i class="zmdi zmdi-comment-edit"></i
      ></a>
      <a
        class="nav-link mb-2 text-center rightbar-link"
        data-toggle="pill"
        href="#tab-github"
        @click="open()"
        ><i class="zmdi zmdi-github"></i
      ></a>
      <a class="nav-link mb-2 text-center" href="#" @click="open()"
        ><i class="zmdi zmdi-plus"></i
      ></a>
    </div>
    <div class="tab-content py-xl-4 py-3 px-xl-4 px-3">
      <div class="tab-pane fade" id="tab-calendar" role="tabpanel">
        <div class="header border-bottom pb-4 d-flex justify-content-between">
          <div>
            <h6 class="mb-0 font-weight-bold">Calendar</h6>
            <span class="text-muted">Update your profile details</span>
          </div>
          <div>
            <button class="btn btn-link close-sidebar text-muted" type="button" @click="close()">
              <i class="zmdi zmdi-close"></i>
            </button>
          </div>
        </div>
        <div class="body mt-4">
          <div id="mini-calendar">
            <div class="datepicker datepicker-inline">
              <div class="datepicker-days" style="">
                <table class="table-condensed">
                  <thead>
                    <tr>
                      <th
                        colspan="7"
                        class="datepicker-title"
                        style="display: none"
                      ></th>
                    </tr>
                    <tr>
                      <th class="prev">«</th>
                      <th colspan="5" class="datepicker-switch">May 2022</th>
                      <th class="next">»</th>
                    </tr>
                    <tr>
                      <th class="dow">Su</th>
                      <th class="dow">Mo</th>
                      <th class="dow">Tu</th>
                      <th class="dow">We</th>
                      <th class="dow">Th</th>
                      <th class="dow">Fr</th>
                      <th class="dow">Sa</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="old day" data-date="1650758400000">24</td>
                      <td class="old day" data-date="1650844800000">25</td>
                      <td class="old day" data-date="1650931200000">26</td>
                      <td class="old day" data-date="1651017600000">27</td>
                      <td class="old day" data-date="1651104000000">28</td>
                      <td class="old day" data-date="1651190400000">29</td>
                      <td class="old day" data-date="1651276800000">30</td>
                    </tr>
                    <tr>
                      <td class="day" data-date="1651363200000">1</td>
                      <td class="day" data-date="1651449600000">2</td>
                      <td class="day" data-date="1651536000000">3</td>
                      <td
                        class="day active"
                        title="Example tooltip"
                        data-date="1651622400000"
                      >
                        4
                      </td>
                      <td class="day" data-date="1651708800000">5</td>
                      <td class="day" data-date="1651795200000">6</td>
                      <td class="day" data-date="1651881600000">7</td>
                    </tr>
                    <tr>
                      <td class="day disabled" data-date="1651968000000">8</td>
                      <td class="day" data-date="1652054400000">9</td>
                      <td class="day" data-date="1652140800000">10</td>
                      <td class="day" data-date="1652227200000">11</td>
                      <td class="day green" data-date="1652313600000">12</td>
                      <td class="today day" data-date="1652400000000">13</td>
                      <td class="day" data-date="1652486400000">14</td>
                    </tr>
                    <tr>
                      <td class="day" data-date="1652572800000">15</td>
                      <td class="day" data-date="1652659200000">16</td>
                      <td class="day" data-date="1652745600000">17</td>
                      <td class="day" data-date="1652832000000">18</td>
                      <td class="day" data-date="1652918400000">19</td>
                      <td class="day" data-date="1653004800000">20</td>
                      <td class="day" data-date="1653091200000">21</td>
                    </tr>
                    <tr>
                      <td class="day" data-date="1653177600000">22</td>
                      <td class="day" data-date="1653264000000">23</td>
                      <td class="day" data-date="1653350400000">24</td>
                      <td class="day" data-date="1653436800000">25</td>
                      <td class="day" data-date="1653523200000">26</td>
                      <td class="day" data-date="1653609600000">27</td>
                      <td class="day" data-date="1653696000000">28</td>
                    </tr>
                    <tr>
                      <td class="day" data-date="1653782400000">29</td>
                      <td class="day" data-date="1653868800000">30</td>
                      <td class="day" data-date="1653955200000">31</td>
                      <td class="new day" data-date="1654041600000">1</td>
                      <td class="new day" data-date="1654128000000">2</td>
                      <td class="new day" data-date="1654214400000">3</td>
                      <td class="new day" data-date="1654300800000">4</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colspan="7" class="today" style="display: none">
                        Today
                      </th>
                    </tr>
                    <tr>
                      <th colspan="7" class="clear" style="display: none">
                        Clear
                      </th>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div class="datepicker-months" style="display: none">
                <table class="table-condensed">
                  <thead>
                    <tr>
                      <th
                        colspan="7"
                        class="datepicker-title"
                        style="display: none"
                      ></th>
                    </tr>
                    <tr>
                      <th class="prev">«</th>
                      <th colspan="5" class="datepicker-switch">2022</th>
                      <th class="next">»</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="7">
                        <span class="month">Jan</span
                        ><span class="month">Feb</span
                        ><span class="month">Mar</span
                        ><span class="month">Apr</span
                        ><span class="month focused">May</span
                        ><span class="month">Jun</span
                        ><span class="month">Jul</span
                        ><span class="month">Aug</span
                        ><span class="month">Sep</span
                        ><span class="month">Oct</span
                        ><span class="month">Nov</span
                        ><span class="month">Dec</span>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colspan="7" class="today" style="display: none">
                        Today
                      </th>
                    </tr>
                    <tr>
                      <th colspan="7" class="clear" style="display: none">
                        Clear
                      </th>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div class="datepicker-years" style="display: none">
                <table class="table-condensed">
                  <thead>
                    <tr>
                      <th
                        colspan="7"
                        class="datepicker-title"
                        style="display: none"
                      ></th>
                    </tr>
                    <tr>
                      <th class="prev">«</th>
                      <th colspan="5" class="datepicker-switch">2020-2029</th>
                      <th class="next">»</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="7">
                        <span class="year old">2019</span
                        ><span class="year">2020</span
                        ><span class="year">2021</span
                        ><span class="year focused">2022</span
                        ><span class="year">2023</span
                        ><span class="year">2024</span
                        ><span class="year">2025</span
                        ><span class="year">2026</span
                        ><span class="year">2027</span
                        ><span class="year">2028</span
                        ><span class="year">2029</span
                        ><span class="year new">2030</span>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colspan="7" class="today" style="display: none">
                        Today
                      </th>
                    </tr>
                    <tr>
                      <th colspan="7" class="clear" style="display: none">
                        Clear
                      </th>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div class="datepicker-decades" style="display: none">
                <table class="table-condensed">
                  <thead>
                    <tr>
                      <th
                        colspan="7"
                        class="datepicker-title"
                        style="display: none"
                      ></th>
                    </tr>
                    <tr>
                      <th class="prev">«</th>
                      <th colspan="5" class="datepicker-switch">2000-2090</th>
                      <th class="next">»</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="7">
                        <span class="decade old">1990</span
                        ><span class="decade">2000</span
                        ><span class="decade">2010</span
                        ><span class="decade focused">2020</span
                        ><span class="decade">2030</span
                        ><span class="decade">2040</span
                        ><span class="decade">2050</span
                        ><span class="decade">2060</span
                        ><span class="decade">2070</span
                        ><span class="decade">2080</span
                        ><span class="decade">2090</span
                        ><span class="decade new">2100</span>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colspan="7" class="today" style="display: none">
                        Today
                      </th>
                    </tr>
                    <tr>
                      <th colspan="7" class="clear" style="display: none">
                        Clear
                      </th>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div class="datepicker-centuries" style="display: none">
                <table class="table-condensed">
                  <thead>
                    <tr>
                      <th
                        colspan="7"
                        class="datepicker-title"
                        style="display: none"
                      ></th>
                    </tr>
                    <tr>
                      <th class="prev">«</th>
                      <th colspan="5" class="datepicker-switch">2000-2900</th>
                      <th class="next">»</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="7">
                        <span class="century old">1900</span
                        ><span class="century focused">2000</span
                        ><span class="century">2100</span
                        ><span class="century">2200</span
                        ><span class="century">2300</span
                        ><span class="century">2400</span
                        ><span class="century">2500</span
                        ><span class="century">2600</span
                        ><span class="century">2700</span
                        ><span class="century">2800</span
                        ><span class="century">2900</span
                        ><span class="century new">3000</span>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colspan="7" class="today" style="display: none">
                        Today
                      </th>
                    </tr>
                    <tr>
                      <th colspan="7" class="clear" style="display: none">
                        Clear
                      </th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tab-pane fade" id="tab-note" role="tabpanel">
        <div class="header border-bottom pb-4 d-flex justify-content-between">
          <div>
            <h6 class="mb-0 font-weight-bold">My Notes</h6>
            <span class="text-muted">Update your profile details</span>
          </div>
          <div>
            <button class="btn btn-link close-sidebar text-muted" type="button" @click="close()">
              <i class="zmdi zmdi-close"></i>
            </button>
          </div>
        </div>
        <div class="body mt-4">
          <div class="add-note">
            <form>
              <div class="input-group mb-2">
                <textarea
                  rows="3"
                  class="form-control"
                  placeholder="Enter a note here.."
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary addnote">Add</button>
            </form>
            <ul class="list-unstyled mt-4">
              <li class="card border-0 mb-2">
                <span
                  >It is a long established fact that a reader will be
                  distracted by the readable content of a page when looking at
                  its layout.</span
                >
                <button class="btn btn-sm btn-link">
                  <i class="zmdi zmdi-delete text-danger"></i>
                </button>
              </li>
              <li class="card border-0 mb-2">
                <span
                  >Contrary to popular belief, Lorem Ipsum is not simply random
                  text.</span
                >
                <button class="btn btn-sm btn-link">
                  <i class="zmdi zmdi-delete text-danger"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="tab-pane fade" id="tab-task" role="tabpanel">
        <div class="header border-bottom pb-4 d-flex justify-content-between">
          <div>
            <h6 class="mb-0 font-weight-bold">My Task List</h6>
            <span class="text-muted">Update your profile details</span>
          </div>
          <div>
            <button class="btn btn-link close-sidebar text-muted" type="button" @click="close()">
              <i class="zmdi zmdi-close"></i>
            </button>
          </div>
        </div>
        <div class="body mt-4">
          <div class="todo-list">
            <ul class="list-unstyled todo-list-items">
              <li>
                <label class="c_checkbox">
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                  <span class="ms-2">Update new code on github</span>
                </label>
                <button class="btn btn-sm btn-link" type="submit">
                  <i class="zmdi zmdi-delete"></i>
                </button>
              </li>
              <li>
                <label class="c_checkbox">
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                  <span class="ms-2">Meeting with design team and updates</span>
                </label>
                <button class="btn btn-sm btn-link" type="submit">
                  <i class="zmdi zmdi-delete"></i>
                </button>
              </li>
              <li>
                <label class="c_checkbox">
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                  <span class="ms-2">Send project zip file to developer</span>
                </label>
                <button class="btn btn-sm btn-link" type="submit">
                  <i class="zmdi zmdi-delete"></i>
                </button>
              </li>
              <li>
                <label class="c_checkbox">
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                  <span class="ms-2">Create new design psd for onepage</span>
                </label>
                <button class="btn btn-sm btn-link" type="submit">
                  <i class="zmdi zmdi-delete"></i>
                </button>
              </li>
            </ul>
            <form class="add-items">
              <div class="input-group mb-2">
                <textarea
                  rows="3"
                  class="form-control"
                  placeholder="What do you need to do today?"
                ></textarea>
              </div>
              <button class="add btn btn-primary" type="submit">
                Add to List
              </button>
            </form>
          </div>
        </div>
      </div>

      <div class="tab-pane fade" id="tab-github" role="tabpanel">
        <div class="header border-bottom pb-4 d-flex justify-content-between">
          <div>
            <h6 class="mb-0 font-weight-bold">My Github Activity</h6>
            <span class="text-muted">puffintheme</span>
          </div>
          <div>
            <button class="btn btn-link close-sidebar text-muted" type="button" @click="close()">
              <i class="zmdi zmdi-close"></i>
            </button>
          </div>
        </div>
        <div class="body mt-4">
          <div class="card mb-4">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col">
                  <div class="d-flex align-items-center">
                    <img
                      src="assets/images/xs/avatar6.jpg"
                      data-toggle="tooltip"
                      title=""
                      alt="Avatar"
                      class="rounded-circle avatar"
                      data-original-title="Avatar Name"
                    />
                    <div class="ms-3">
                      <a href="#" title="">Michelle Green</a>
                      <p class="mb-0">
                        <a
                          href="/cdn-cgi/l/email-protection"
                          class="__cf_email__"
                          data-cfemail="e984808a818c85858cc78e9b8c8c87a98c91888499858cc78a8684"
                          >[email&nbsp;protected]</a
                        >
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-auto">
                  <div class="dropdown">
                    <a
                      href="#"
                      class="btn btn-link btn-sm dropdown-toggle"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      data-expanded="false"
                    >
                      <i class="zmdi zmdi-more-vert zmdi-hc-lg"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a href="#!" class="dropdown-item">Action</a>
                      <a href="#!" class="dropdown-item">Another action</a>
                      <a href="#!" class="dropdown-item">Something else here</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group mt-3 mb-3">
                <textarea
                  rows="3"
                  class="form-control no-resize"
                  placeholder="Please type what you want..."
                ></textarea>
              </div>
              <div class="align-right">
                <button class="btn btn-primary">Push</button>
                <button class="btn btn-link">
                  <i class="zmdi zmdi-attachment text-muted"></i>
                </button>
                <button class="btn btn-link">
                  <i class="zmdi zmdi-camera text-muted"></i>
                </button>
                <button class="btn btn-link">
                  <i class="zmdi zmdi-mood text-muted"></i>
                </button>
              </div>
            </div>
          </div>
          <ol class="activity-feed p-0 ms-3 mb-0 pt-5">
            <li
              class="feed-item d-flex mb-3 pl-lg-4 ps-3"
              data-content=""
              data-time="5 hours ago"
              data-color="yellow"
            >
              <div class="card mb-3">
                <div class="card-body">
                  <input type="checkbox" id="expand_1" name="expand_1" />
                  <label for="expand_1" class="mb-0">
                    <b>Request</b> code merge in git
                  </label>
                  <div class="feed-content">
                    <p>
                      <b>comments</b> Lorem Ipsum is simply dummy text of the
                      printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="feed-item d-flex mb-3 pl-lg-4 ps-3"
              data-content=""
              data-time="7 hours ago"
              data-color="green"
            >
              <div class="card mb-3">
                <div class="card-body">
                  <input type="checkbox" id="expand_2" name="expand_2" />
                  <label for="expand_2" class="mb-0">
                    <b>Update</b> React app login page code
                  </label>
                  <div class="feed-content">
                    <p>
                      <b>comments</b> Lorem Ipsum is simply dummy text of the
                      printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="feed-item d-flex mb-3 pl-lg-4 ps-3"
              data-content=""
              data-time="December 2020"
              data-color="green"
            >
              <div class="card mb-3">
                <div class="card-body">
                  <input type="checkbox" id="expand_3" name="expand_3" />
                  <label for="expand_3" class="mb-0">
                    2 contributions in private repositories
                  </label>
                  <div class="feed-content">
                    <span
                      ><a href="#">puffintheme/Allima-v0.1</a> 12 commits</span
                    >
                  </div>
                </div>
              </div>
            </li>
            <li
              class="feed-item d-flex mb-3 pl-lg-4 ps-3"
              data-content=""
              data-time="December 2020"
              data-color="dark"
            >
              <div class="card mb-3">
                <div class="card-body">
                  <input type="checkbox" id="expand_4" name="expand_4" />
                  <label for="expand_4" class="mb-0">
                    <b>PostMan</b> Create a new project
                  </label>
                  <div class="feed-content">
                    <h2>BOOM!</h2>
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
      
  </div>
</template>

<script>
  export default {
  name: "RightNavbar",
  methods:{
    open(){
      document.getElementsByClassName("rightbar")[0].classList.add("open")
    },
    close(){
      document.getElementsByClassName("rightbar")[0].classList.remove("open")
    }
  }
};
</script>

<style>
</style>