<template>
    <div>
        <div v-show="user">
            <Top></Top>
        </div>
        <div v-show="user === false">
            <el-menu
                    class="el-menu-demo"
                    mode="horizontal"
                    background-color="snow"
                    text-color="black"
                    active-text-color="#ffd04b"
                    style="border: 0">
                <div class="logo-div" @click="tohome" style="cursor:pointer">
                    <!--<img :src="logo" width="70px">-->
                    <span style="font-size: 28px;font-family: 'Ink Free'">Logo</span>
                </div>
                <div class="menu">
                    <el-menu-item index="1" style="display: inline-block">关于我们</el-menu-item>
                    <el-menu-item index="2" style="display: inline-block"><el-button type="primary" size="medium" @click="loginFormVisible = true">登录/注册</el-button></el-menu-item>
                </div>
            </el-menu>
        </div>
        <el-dialog title="登录" :visible.sync="loginFormVisible" width="35%" center>
            <div class="login-body">
                <el-form :model="form" :label-position="labelPos" :rules="rules" ref="form">
                    <el-form-item label="输入用户名" style="margin-bottom: 15px" prop="userName">
                        <el-col :span="24">
                            <el-input placeholder="USERNAME" v-model="form.userName" autocomplete="off" clearable></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="输入密码" style="margin-bottom: 20px" prop="password">
                        <el-col :span="24">
                            <el-input placeholder="PASSWORD" v-model="form.password" autocomplete="off" show-password></el-input>
                        </el-col>
                    </el-form-item>
                </el-form>
                <div class="word-button">
                    <el-row>
                        <el-col :span="6">
                            <div  @click="openRegister" style="cursor:pointer">
                                新用户注册
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div @click="openFindPass" style="cursor:pointer">
                                忘记密码？
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="button-row">
                    <el-button @click="loginFormVisible = false">取 消</el-button>
                    <el-button type="primary" style="margin-left: 30px" @click="login('form')">登 录</el-button>
                </div>
            </div>
        </el-dialog>

        <el-dialog title="注册" :visible.sync="registerFormVisible" width="40%" center top="10px">
            <div class="login-body">
                <el-form :model="reForm" :label-position="labelPos" :rules="reRules" ref="reForm">
                    <el-form-item label="输入邮箱" style="margin-bottom: 15px" prop="userName">
                        <el-col :span="24">
                            <el-input placeholder="EMAIL" v-model="reForm.userName" autocomplete="off" clearable></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="输入验证码" style="margin-bottom: 15px" prop="verification">
                        <el-row>
                            <el-col :span="20">
                                <el-input placeholder="VERIFICATION CODE" v-model="reForm.verification" autocomplete="off" clearable></el-input>
                            </el-col>
                            <el-col :span="4">
                                <div class="timer">
                                    <span v-show="show" @click="getCode" style="cursor:pointer">获取验证码</span>
                                    <span v-show="!show" class="count">{{count}} s</span>
                                </div>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item label="输入用户名" style="margin-bottom: 15px" prop="name">
                        <el-col :span="24">
                            <el-input placeholder="USERNAME" v-model="reForm.name" autocomplete="off" clearable></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="输入密码" style="margin-bottom: 20px" prop="password">
                        <el-col :span="24">
                            <el-input placeholder="PASSWORD" v-model="reForm.password" autocomplete="off" show-password></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="确认密码" style="margin-bottom: 20px" prop="passwordConfirm">
                        <el-col :span="24">
                            <el-input placeholder="PASSWORD" v-model="reForm.passwordConfirm" autocomplete="off" show-password></el-input>
                        </el-col>
                    </el-form-item>
                </el-form>
                <div class="word-button" style="text-align: center;cursor:pointer" @click="openLogin" >
                    已有账号？点此登录
                </div>
                <div style="margin-left: 25%">
                    <el-button @click="registerFormVisible = false">取 消</el-button>
                    <el-button type="primary" style="margin-left: 50px" @click="register('reForm')">注册并登录</el-button>
                </div>
            </div>
        </el-dialog>

        <el-dialog title="找回密码" :visible.sync="findPassVisible" width="35%" center>
            <div class="login-body">
                <div v-if="page === 'A'">
                    <el-steps :space="200" :active="1" finish-status="success" align-center style="margin-bottom: 20px">
                        <el-step title="进行中"></el-step>
                        <el-step title="步骤二"></el-step>
                        <el-step title="步骤三"></el-step>
                    </el-steps>
                    <el-form :model="findForm" :label-position="labelPos" :rules="findRules" ref="findForm">
                        <el-form-item label="请输入注册邮箱" style="margin-bottom: 30px" prop="email">
                            <el-col :span="24">
                                <el-input placeholder="EMAIL" v-model="findForm.email" autocomplete="off" clearable></el-input>
                            </el-col>
                        </el-form-item>
                    </el-form>
                    <div class="button-row">
                        <el-button @click="returnLogin">取 消</el-button>
                        <el-button type="primary" style="margin-left: 30px" @click="findPass1">下一步</el-button>
                    </div>
                </div>
                <div v-if="page === 'B'">
                    <el-steps :space="200" :active="2" finish-status="success" align-center style="margin-bottom: 20px">
                        <el-step title="已完成"></el-step>
                        <el-step title="进行中"></el-step>
                        <el-step title="步骤三"></el-step>
                    </el-steps>
                    <el-form :model="findForm" :label-position="labelPos" :rules="findRules" ref="findForm">
                        <el-form-item label="请输入系统发送到邮箱的验证码" style="margin-bottom: 30px" prop="verification">
                            <el-col :span="24">
                                <el-input placeholder="VERIFICATION" v-model="findForm.verification" autocomplete="off" clearable></el-input>
                            </el-col>
                        </el-form-item>
                    </el-form>
                    <div class="button-row">
                        <el-button @click="returnLogin">取 消</el-button>
                        <el-button type="primary" style="margin-left: 30px" @click="findPass2">下一步</el-button>
                    </div>
                </div>
                <div v-if="page === 'C'">
                    <el-steps :space="200" :active="3" finish-status="success" align-center style="margin-bottom: 20px">
                        <el-step title="已完成"></el-step>
                        <el-step title="已完成"></el-step>
                        <el-step title="进行中"></el-step>
                    </el-steps>
                    <el-form :model="findForm" :label-position="labelPos" :rules="findRules" ref="findForm">
                        <el-form-item label="请输入新密码" style="margin-bottom: 30px" prop="password">
                            <el-col :span="24">
                                <el-input placeholder="PASSWORD" v-model="findForm.password" autocomplete="off" show-password></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="请确认密码" style="margin-bottom: 30px" prop="confirm">
                            <el-col :span="24">
                                <el-input placeholder="PASSWORD" v-model="findForm.confirm" autocomplete="off" show-password></el-input>
                            </el-col>
                        </el-form-item>
                    </el-form>
                    <div class="button-row">
                        <el-button @click="returnLogin">取 消</el-button>
                        <el-button type="primary" style="margin-left: 30px" @click="submitFindPassword">完成</el-button>
                    </div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import axios from "axios";
    import Top from "./Top.vue";
    export default {
        name: "Top2",
        components: {Top},
        inject: ['reload'],
        data(){
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.reForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.findForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return{
                logo: "http://10.251.253.212:8082/file/navLogo.png",
                user: !!sessionStorage.getItem('userL'),
                activeIndex: '1',
                loginFormVisible: false,
                registerFormVisible: false,
                findPassVisible: false,
                labelPos: 'right',
                show: true,
                count: '',
                timer: null,
                page: 'A',
                form: {
                    userName: '',
                    password: ''
                },
                reForm: {
                    userName: '',
                    verification: '',
                    name: '',
                    password: '',
                    passwordConfirm: '',
                    code:''
                },
                findForm:{
                    email: '',
                    verification: '',
                    password: '',
                    confirm: '',
                    code: ''
                },
                rules: {
                    userName:[
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                    ],
                    password:[
                        { required: true, message: '请输入密码', trigger: 'blur' },
                    ]
                },
                reRules: {
                    userName:[
                        { required: true, message: '请输入邮箱', trigger: 'blur' },
                    ],
                    verification:[
                        { required: true, message: '请输入验证码', trigger: 'blur' },
                    ],
                    name:[
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                    ],
                    password:[
                        { required: true, message: '请输入密码', trigger: 'blur' },
                    ],
                    passwordConfirm:[
                        { validator: validatePass, trigger: 'blur' },
                    ]
                },
                findRules: {
                    email:[
                        { required: true, message: '请输入邮箱', trigger: 'blur' },
                    ],
                    verification:[
                        { required: true, message: '请输入验证码', trigger: 'blur' },
                    ],
                    password:[
                        { required: true, message: '请输入密码', trigger: 'blur' },
                    ],
                    confirm:[
                        { validator: validatePass2, trigger: 'blur' },
                    ]
                },
            }
        },
        methods: {
            toHome(){
                this.$router.push('/');
            },
            openRegister(){
                this.loginFormVisible = false;
                this.registerFormVisible = true;
            },
            getCode() {
                var _this=this;
                axios.post("http://10.251.253.212:8081/send?email=" +  _this.reForm.userName)
                    .then(function (response) {
                        if(response.data.status === 200){
                            console.log("接口没有问题！！！！！！！！！！！！");
                            console.log(response.data.data);
                            _this.reForm.code = response.data.data;
                        }
                        else{
                            console.log("接口看起来有问题！！！！！！！！！！！！");
                            console.log(response.data.data);
                            console.log(response.data.status);
                            console.log(response.data.msg);
                        }
                    })
                    .catch(function (error) {
                        console.log(error)
                    });
                const TIME_COUNT = 60;
                if (!this.timer) {
                    this.count = TIME_COUNT;
                    this.show = false;
                    this.timer = setInterval(() => {
                        if (this.count > 0 && this.count <= TIME_COUNT) {
                            this.count--;
                        } else {
                            this.show = true;
                            clearInterval(this.timer);
                            this.timer = null;
                        }
                    }, 1000)
                }
            },
            openLogin(){
                this.loginFormVisible = true;
                this.registerFormVisible = false;
            },
            openFindPass(){
                this.loginFormVisible = false;
                this.findPassVisible = true;
            },
            returnLogin(){
                this.loginFormVisible = true;
                this.findPassVisible = false;
            },

            findPass1(){
                var _this=this;
                axios.post("http://10.251.253.212:8081/user/send2?email=" + _this.findForm.email)
                    .then(function (response) {
                        if(response.data.status === 200){
                            console.log(response.data.data);
                            _this.findForm.code = response.data.data;
                            _this.page = 'B';
                        }
                        else{
                            console.log(response.data.status);
                            console.log(response.data.msg);
                            _this.$message({
                                message: '邮箱不存在',
                                type: 'error'
                            })
                        }
                    })
                    .catch(function (error) {
                        console.log(error)
                    });
            },
            findPass2(){
                var _this=this;
                axios.post("http://10.251.253.212:8081/user/verify?string1=" +  _this.findForm.verification + "&string2=" + _this.findForm.code)
                    .then(function (response) {
                        if(response.data.status === 200){
                            _this.page = 'C';
                        }
                        else{
                            console.log(response.data.status);
                            console.log(response.data.msg);
                            _this.$message({
                                message: '验证码错误',
                                type: 'error'
                            })
                        }
                    })
                    .catch(function (error) {
                        console.log(error)
                    });
            },
            submitFindPassword(){
                var _this=this;
                axios.post("http://10.251.253.212:8081/user/reset?pwd=" + _this.findForm.password + "&email=" + _this.findForm.email)
                    .then(function (response) {
                        if(response.data.status === 200){
                            console.log(response.data.status);
                            _this.findPassVisible = false;
                            _this.page = 'A';
                            _this.loginFormVisible = true;
                        }
                        else{
                            console.log(response.data.status);
                            console.log(response.data.msg);
                        }
                    })
                    .catch(function (error) {
                        console.log(error)
                    });
            },
            tohome(){
                this.$router.push('/')
            }
        },
        created() {
            if(sessionStorage.getItem("userL") === null){
                this.user = false;
            }
            else{
                this.user = true;
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
    .menu{
        float: right;
        margin-right: 5%;
    }
    .login-body{
        margin-left: 10%;
        margin-right: 10%;
    }
    .button-row{
        margin-left: 20%;
    }
    .word-button{
        margin-bottom: 20px;
        font-size: small;
        color: #62AAFF;
    }
    .timer{
        background-color: #409EFF;
        color: white;
        font-size: 10px;
        text-align: center;
        margin-left: 3px;
        border-radius: 3px;
        line-height: 3em;
        margin-top: 5px;
    }
</style>
