<template>

  <div class="container" style="background-color: white;">

    <el-container style="height: 900px; border: 1px solid #eee">

      <el-header style="text-align: right; font-size: 12px">

        <el-card shadow="always" class="logo-title" >greatme学习通</el-card>

        <el-dropdown>

          <i class="el-icon-setting" style="margin-right: 15px"></i>

          <el-dropdown-menu slot="dropdown">

            <el-dropdown-item>
              <router-link to='/logout' style="color: #000000;">查看</router-link>
            </el-dropdown-item>

            <el-dropdown-item>
              <router-link to='/logout' style="color: #000000;">退出登陆</router-link>
            </el-dropdown-item>

          </el-dropdown-menu>

        </el-dropdown>

        <span style="font-size: 20px;">{{this.$store.state.student.name}}</span>

      </el-header>

      <el-container>

        <el-aside width="200px">

          <el-menu :default-openeds="['5']">

            <router-link to='/student/sc'>

              <el-menu-item index="1">

                <i class="el-icon-menu"></i>

                <span slot="title">

                  选课管理

                </span>

              </el-menu-item>

            </router-link>

            <router-link to='/student/course'>

              <el-menu-item index="2">

                <i class="el-icon-menu"></i>

                <span slot="title">

                  我的课程

                </span>

              </el-menu-item>

            </router-link>

            <router-link to='/student/score'>

              <el-menu-item index="3">

                <i class="el-icon-menu"></i>

                <span slot="title">

                  我的成绩

                </span>

              </el-menu-item>

            </router-link>
            <el-badge :value="tip" class="item">
            <router-link to='/student/signin'>

              <el-menu-item index="4">
                <i class="el-icon-menu"></i>
                <span slot="title">
                  签到
                </span>
              </el-menu-item>

            </router-link>
            </el-badge>

          </el-menu>

        </el-aside>

        <el-container>

          <el-main>

            <router-view ref='main'
             v-on:updateCollege='updateCollege()'
             v-on:updateMajor='updateMajor()'
             v-on:updateTeacher='updateTeacher()'
             v-on:updateCourse='updateCourse()'
             v-on:updateDistribute='updateDistribute()'
             v-on:updateSc='updateSc()'
             v-on:updateSign='updateSign()'
             v-on:setTip='setTip()'
             v-bind:college='college'

              v-bind:major='major'
             v-bind:teacher='teacher'
             v-bind:course='course'
             v-bind:distribute='distribute'
             v-bind:sc='sc'
             v-bind:sign='sign'
             v-bind:tip='tip'>

            </router-view>

          </el-main>

          <el-footer style="background: #eaeaea;line-height: 50px;">Copyright © 2021 by liuzongfang</el-footer>

        </el-container>

      </el-container>

    </el-container>

    <el-button @click="refresh()" v-trigger style="display:none">刷新</el-button>

  </div>

</template>



<script>

  export default {

    name: 'Student',

    data() {

      return {

        college: {},

        major: {},
        teacher:{},
        course:{},
        distribute:{},
        sc:{},
        sign:{},
        signDetail:{},
        count:0,
        tip:''

      }

    },

    directives: {

      trigger: {

        inserted(el, binging) {

          el.click()

        }

      }

    },

    methods: {

      refresh() {

        this.updateCollege()

        this.updateMajor()
        this.updateTeacher()
        this.updateCourse()
        this.updateDistribute()
        this.updateSc()
        this.updateSign()
        this.timeStart()
        this.updateSignDetail()

      },
      timeStart(){
        setInterval(this.timer,1000)
      },
      timer(){
        this.updateSign()
        //console.log(5)
      },
      setTip(){
        this.tip=''
      },

      updateCollege() {

        this.$axios({

          method: 'post',

          url: "http://localhost:8080/course/college/getall"

        }).then((res) => {

          this.college = res.data

        })

      },

      updateMajor() {

        this.$axios({

          method: 'post',

          url: "http://localhost:8080/course/major/getall"

        }).then((res) => {

          this.major = res.data
          for (var data in this.major) {
            for(var d in this.college){
              if(this.college[d].number==this.major[data].collegeNum){
                this.major[data].collegeName=this.college[d].name
              }
            }
          }

        })

      },
      updateTeacher(){
        this.$axios({
          method: 'post',
          url: "http://localhost:8080/course/teacher/getall"
        }).then((res) => {
          this.teacher = res.data
          for (var data in this.teacher) {
            for(var d in this.college){
              if(this.college[d].number==this.teacher[data].collegeNum){
                this.teacher[data].collegeName=this.college[d].name
              }
            }
          }
        })
      },
      updateCourse(){
        this.$axios({
          method: 'post',
          url: "http://localhost:8080/course/course/getall"
        }).then((res) => {
          this.updateDistribute()
          this.updateSc()
          this.course = res.data
          for (var data in this.course) {
            for(var d in this.college){
              if(this.college[d].number==this.course[data].collegeNum){
                this.course[data].collegeName=this.college[d].name
              }
            }
          }
          for (var data in this.course) {
            for(var d in this.distribute){
              if(this.distribute[d].courseNumber==this.course[data].number){
                for(var t in this.teacher){
                  if(this.teacher[t].number==this.distribute[d].teacherNumber){
                    this.course[data].teacherName=this.teacher[t].name
                    this.course[data].teacherNum=this.teacher[t].number
                    }
                }
              }
            }
          }
          this.updateSign()
        })
      },
      async updateDistribute(){
        this.$axios({
          method: 'post',
          url: "http://localhost:8080/course/distribute/getall"
        }).then((res) => {
          this.distribute = res.data
        })
      },
      async updateSc(){
        var id=this.$store.state.student.id
        this.$axios({
          method: 'post',
          url: "http://localhost:8080/course/sc/query",
          data:{
            studentNum:id
          }
        }).then((res) => {
          this.sc = res.data
          for(var d in this.sc){
            for(var data in this.course){
              if(this.course[data].number==this.sc[d].courseNumber)
                this.sc[d].courseName=this.course[data].name
            }
          }
        })
      },
      async updateSign(){
        this.updateSignDetail()
        var id=this.$store.state.student.id
        this.$axios({
          method: 'post',
          url: "http://localhost:8080/course/releasesign/getbystudent",
          data:{
            studentNum:this.$store.state.student.id
          }
        }).then((res) => {
          if(res.data.length!=this.count){
            this.count=res.data.length
            this.tip='new'
            this.$alert('您有新的签到', '签到提醒', {
                      confirmButtonText: '确定'
                    });
          }
          this.sign = res.data
          for(var d in this.sign){
            for(var data in this.course){
              if(this.course[data].number==this.sign[d].courseNum)
                this.sign[d].courseName=this.course[data].name
                this.sign[d].teacherName=this.course[data].teacherName
            }
          }
          for(var d in this.sign){
            for(var data in this.teacher){
              if(this.teacher[data].number==this.sign[d].teacherNum)
                this.sign[d].teacherName=this.teacher[data].name
            }
          }
          for(var d in this.sign){
            for(var data in this.signDetail){
              if(this.signDetail[data].courseNum==this.sign[d].courseNum)
                this.sign[d].isSign=this.signDetail[data].isSign
            }
          }
        })
      },
      async updateSignDetail(){
        var id=this.$store.state.student.id
        this.$axios({
          method: 'post',
          url: "http://localhost:8080/course/sign/getbystudentid",
          data:{
            studentNum:this.$store.state.student.id
          }
        }).then((res) => {
          this.signDetail=res.data
        })
      }

    }

  }

</script>



<style scoped>


  .el-header {

    background-color: #B3C0D1;

    color: #333;

    line-height: 60px;
    font-family:"幼圆",Georgia,Serif;
    font-size: 25px;

    background-color: #43d7ff;;

  }



  .el-aside {

    border: 1px solid #DCDFE6;

    overflow: hidden;

  }



  .logo-title {

    float: left;

    height: 100%;

    width: 200px;

    margin-left: -21px;
    border:0px solid #e6e6e6;

    border-radius: 0px;
    background-color: #000000;

    text-align: center;
    font-family:"宋体",Georgia,Serif;
    line-height: 20px;

    font-size: 20px;

    user-select: none;

    color: #ffffff;

  }

  .el-table{
    font-size: 16px;
  }




  .el-menu-item{
    padding-top: 10px;
    height:80px;
    border-bottom: 1px solid #e6e6e6;
    font-family:"幼圆",Georgia,Serif;
    font-size: 20px;
  }

  a {

    text-decoration: none;

  }
  .container{
    background: white;
  }

</style>
