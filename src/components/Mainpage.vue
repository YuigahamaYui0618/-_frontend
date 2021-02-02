<template>
    <div>
        <div>
            <Top2></Top2>
            <el-divider></el-divider>
            <el-container>
                <!-- 头部 -->

                <!-- 主体 -->
                <el-container>
                    <!-- 侧边栏 -->
                    <el-aside width="27%">
                        <el-tabs :tab-position="tabPosition" style="height: 100%">
                            <el-tab-pane stretch="true">
                                <span slot="label">
                                    <i class="el-icon-picture" style="margin:0 8px 0 8px">
                                        <span style="padding-left: 1px">线条</span>
                                    </i>
                                </span>
                                <div style="background-color: snow;height: 645px">
                                    <div style="width: 30%">
                                        <span style="font-size: 15px">直线</span>
                                        <div style="height: 100px">

                                        </div>
                                        <span style="font-size: 15px">弧线</span>
                                        <div style="height: 100px">

                                        </div>
                                    </div>

                                </div>

                            </el-tab-pane>
                            <el-tab-pane stretch="true">
                                <span slot="label">
                                    <i class="el-icon-picture-outline-round" style="margin:0 8px 0 1px">
                                        <span style="padding-left: 1px">纹理</span>
                                    </i>
                                </span>
                                <div style="background-color: snow;height: 645px">
                                    <div style="width: 30%">
                                        <span style="font-size: 15px">牛仔</span>
                                        <div style="height: 100px">

                                        </div>
                                        <span style="font-size: 15px">条纹</span>
                                        <div style="height: 100px">

                                        </div>
                                        <span style="font-size: 15px">格子</span>
                                        <div style="height: 100px">

                                        </div>
                                        <span style="font-size: 15px">斑点</span>
                                        <div style="height: 100px">

                                        </div>
                                    </div>

                                </div>
                            </el-tab-pane>
                            <el-tab-pane stretch="true">
                                <span slot="label">
                                    <i class="el-icon-s-opportunity" style="margin:0 8px 0 1px">
                                        <span style="padding-left: 1px">组件</span>
                                    </i>
                                </span>
                                <div style="background-color: snow;height: 645px">
                                    <div style="width: 30%">
                                        <span style="font-size: 15px">袖口</span>
                                        <div style="height: 100px">

                                        </div>
                                        <span style="font-size: 15px">衣领</span>
                                        <div style="height: 100px">

                                        </div>
                                        <span style="font-size: 15px">纽扣</span>
                                        <div style="height: 100px">

                                        </div>
                                        <span style="font-size: 15px">拉链</span>
                                        <div style="height: 100px">

                                        </div>
                                    </div>

                                </div>
                            </el-tab-pane>
                            <el-tab-pane stretch="true">
                                <span slot="label">
                                    <i class="el-icon-edit" style="margin:0 8px 0 1px">
                                        <span style="padding-left: 1px">色彩</span>
                                    </i>
                                </span>
                                <div style="background-color: snow;height: 645px">
                                    <div style="width: 30%">
                                        <span style="font-size: 15px">亮度</span>
                                        <div style="height: 100px">

                                        </div>
                                        <span style="font-size: 15px">对比度</span>
                                        <div style="height: 100px">

                                        </div>
                                        <span style="font-size: 15px">饱和度</span>
                                        <div style="height: 100px">

                                        </div>
                                        <span style="font-size: 15px">色调</span>
                                        <div style="height: 100px">

                                        </div>
                                    </div>

                                </div>
                            </el-tab-pane>
                        </el-tabs>
                       <!-- <el-menu
                                style="height: 100%"
                                background-color="white"
                                text-color="grey"
                                active-text-color="#ffd04b"
                                :default-active="$route.path">
                            <el-menu-item index="/personalinfo/personalinfo_collection" @click="itemClickc" style="height: 12%">
                                <div style="height: 25%">
                                    <i class="el-icon-picture" style="color: black;margin-bottom: 1%" ></i>
                                </div>
                                <div>
                                    <span slot="title">线条</span>
                                </div>
                            </el-menu-item>
                            <el-menu-item index="/personalinfo/personalinfo_follow" @click="itemClickf" style="height: 12%">
                                <div style="height: 25%">
                                    <i class="el-icon-picture-outline-round" style="color: black"></i>
                                </div>
                                <span slot="title">纹理</span>
                            </el-menu-item>
                            <el-menu-item index="/personalinfo/personalinfo_child" @click="itemClickp" style="height: 12%">
                                <div style="height: 25%">
                                    <i class="el-icon-s-opportunity" style="color: black"></i>
                                </div>
                                <span slot="title">部件</span>
                            </el-menu-item>
                            <el-menu-item index="/home/recycle" @click="itemClicks_academ" style="height: 12%">
                                <div style="height: 25%">
                                    <i class="el-icon-edit" style="color: black"></i>
                                </div>
                                <span slot="title">色彩</span>
                            </el-menu-item>
                        </el-menu>-->
                    </el-aside>


                    <!-- 右侧主体 -->
                    <el-main>
                        <router-view :key="$route.fullPath"></router-view>
                    </el-main>
                    <el-aside width="10%" style="text-align: center">
                        <el-button style="background-color: #e5e8f1;width: 85%;margin-top: 10%">添加新画纸</el-button>

                    </el-aside>
                </el-container>
            </el-container>
        </div>
    </div>
</template>

<script>
    import Top2 from '../components/Top2.vue'
    import ElDivider from "../../../node_modules/element-ui/packages/divider/src/main.vue";
    import ElAside from "../../../node_modules/element-ui/packages/aside/src/main.vue";
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";
    //import ElAvatar from "../../node_modules/element-ui/packages/avatar/src/main.vue";

    export default {
        name:"Mainpage",
        components:{
            //ElAvatar,
            ElButton,
            ElAside,
            ElDivider,
            Top2
        },
        computed: {
            showAvatar(){
                return ""

            }
        },
        created(){
            this.showteamlist()
        },
        methods:{
            /*async showteamlist(){
                const res= await this.$axios.get('/teamlist').catch(err=>{console.log(err)})
                this.menulist=res.data
                console.log(res)
            },*/
            itemClickc(){
                //   this.$router.replace("/wordtemplate")
                this.$router.replace(
                    {path:'/personalinfo/personalinfo_collection',
                        query:{
                            //     id:this.$route.query.id
                        }
                    })
            },

            itemClickf(){
                this.$router.replace(
                    {path:'/personalinfo/personalinfo_follow',
                        query:{
                            //       id:this.$route.query.id
                        }
                    })
            },
            itemClickp(){
                this.$router.replace(
                    {path:"/personalinfo/personalinfo_child",
                        query:{
                            //       id:this.$route.query.id
                        }
                    })
            },
            itemClicks_academ()
            {
                this.$router.replace(
                    {
                        path:"/personalinfo/personalinfo_academ",
                        query:
                            {

                            }
                    }
                )
            }

        },
        data(){
            return{
                tabPosition: 'top'

            }
        },
    }
</script>

<style scoped>
    #home{
        height: 100%;
    }
    /deep/.el-tabs__item{
        font-size: 13px !important;
    }

    .el-aside{
        background-color: white;

    }
    .el-container{
        height: 100%;
    }
    .el-main{
        height: 700px;
        background-color: #edf2f9;

    }
    .el-divider--vertical{
        height: 100%;
    }
    .el-divider--horizontal{
        margin: 2px 2px;
        border-top: 0px dashed #e8eaec;
    }

</style>
