<template>
    <div>
        <el-menu
                class="el-menu-demo"
                mode="horizontal"
                background-color="#3D4246"
                text-color="#fff"
                active-text-color="#ffd04b"
                style="border: 0">
            <div class="logo-div" @click="tohome" style="cursor:pointer">
                <img :src="logo" width="70px">
            </div>
            <el-submenu index="1" style="float: right;margin-right: 5%">
                <template slot="title"><img :src="showAvatar" class="userhead"/></template>
                <el-menu-item index="1-1" @click="personalSpace">个人空间</el-menu-item>
                <el-menu-item index="1-2" @click="changePasswordVisible = true">更改密码</el-menu-item>
                <el-menu-item index="1-3" @click="quit">退出登录</el-menu-item>
            </el-submenu>
            <el-menu-item index="2" style="float: right;" @click="toMessage">
                <i class="el-icon-chat-line-square" style="font-size: 25px;color: #ddd"></i>
            </el-menu-item>
            <div class="username">
                欢迎，{{showUserName}}
            </div>
        </el-menu>
        <el-dialog title="更改密码" :visible.sync="changePasswordVisible" width="35%" center>
            <div class="login-body">
                <el-form :model="form" :label-position="labelPos" :rules="rules" ref="form">
                    <el-form-item label="输入原密码" style="margin-bottom: 15px" prop="password1">
                        <el-col :span="24">
                            <el-input placeholder="PASSWORD" v-model="form.password1" autocomplete="off" show-password></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="输入新密码" style="margin-bottom: 20px" prop="password2">
                        <el-col :span="24">
                            <el-input placeholder="PASSWORD" v-model="form.password2" autocomplete="off" show-password></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="确认新密码" style="margin-bottom: 20px" prop="password3">
                        <el-col :span="24">
                            <el-input placeholder="PASSWORD" v-model="form.password3" autocomplete="off" show-password></el-input>
                        </el-col>
                    </el-form-item>
                </el-form>
                <div class="button-row">
                    <el-button @click="changePasswordVisible = false">取 消</el-button>
                    <el-button type="primary" style="margin-left: 30px" @click="changePass('form')">更 改</el-button>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    //import axios from "axios";

    export default {
        name: "Top",
        data(){
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.form.password2) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return{
                logo: "",
                changePasswordVisible: false,
                labelPos: 'right',
                form: {
                    password1: '',
                    password2: '',
                    password3: ''
                },
                rules: {
                    password1:[
                        { required: true, message: '请输入原密码', trigger: 'blur' },
                    ],
                    password2:[
                        { required: true, message: '请输入新密码', trigger: 'blur' },
                    ],
                    password3:[
                        { validator: validatePass, trigger: 'blur' },
                    ],
                },
            }
        },
        computed: {
            showUserName(){
                return JSON.parse(sessionStorage.getItem("userL")).name
            },
            showAvatar(){
                return "http://10.251.253.212:8082" + JSON.parse(sessionStorage.getItem("userL")).avatar
            }
        },
        methods: {

            tohome(){
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
    .logo-div{
        float: left;
        margin-left: 5%;
        text-align: center;
        margin-top: 5px;
    }
    .username{
        float: right;
        margin-right: 30px;
        text-align: center;
        color: #ddd;
        margin-top: 23px;
    }
    .userhead {
        width: 40px;
        height: 40px;
        border: 1px solid #ddd;
        border-radius: 50%;
        float: right;
        text-align: center;
        margin-top: 7px;
        margin-left: 10px;
    }
    .login-body{
        margin-left: 10%;
        margin-right: 10%;
    }
    .button-row{
        text-align: center;
    }
</style>

