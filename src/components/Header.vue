<template>
    <div class="headerClass">
        <div>
           <el-avatar :size="50" :src="user.avatar"></el-avatar> 
           <div>{{user.username}}</div>
            <div class="maction">
                <span><el-link type="primary" href="/blogs">主页</el-link></span>
                <el-divider direction="vertical"></el-divider>
                <span><el-link type="primary" href="/blog/add">发表</el-link></span>
                <el-divider direction="vertical"></el-divider>
                <span v-show="hasLogin"><el-link type="danger" @click="loginout">退出</el-link></span>
                <span v-show="!hasLogin"><el-link type="danger" href="/login">登录</el-link></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    data(){
        return{
            user: {
                username:'请先登录',
                avatar:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
            },
            hasLogin: false
        }
    },
    methods: {
        loginout() {
            const _this = this;
            _this.$axios.get("/logout",{
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            }).then(res =>{
                _this.$store.commit("REMOVE_INFO");
                _this.$router.push("/login");
            })
        },
    },
    created(){
        if(this.$store.getters.getUser.uaccount){
            this.user.username = this.$store.getters.getUser.uaccount;

            this.hasLogin = true;
        }
    }
}
</script>

<style scoped>
.headerClass {
    max-width: 100%;
    margin: 0,auto;
    text-align: center;
}
.maction {
    margin: 10px 0;
}
</style>