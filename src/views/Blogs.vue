<template>
    <div class="mcontant">
        <Header></Header>
        <div class="block">
            <el-timeline>
                <el-timeline-item :timestamp="blog.createtime"  placement="top" v-for="blog in blogs" >
                    <el-card>
                    <h4>
                        <router-link :to="{name: 'BlogDetail', params: {blogid: blog.atcid}}">
                            {{blog.atctitle}}
                        </router-link>
                    </h4>
                    <p>{{blog.atccon}}</p>
                    </el-card>
                </el-timeline-item>
            </el-timeline>

            <el-pagination  class="pagebar"
                background
                layout="prev, pager, next"
                :current-page="currentPage"
                :page-size="pageSize"
                :total="totalPage"
                @current-change=page
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
import Header from "../components/Header"
export default {
    name: "Blogs",
    components: {Header},
    data(){
        return{
            blogs: {},
            currentPage: 1,
            totalPage: 0,
            pageSize:1
        }
    },
    methods: {
        page(currentPage){
            const _this = this;
            _this.$axios.get("/getAllArticl?currentPage="+currentPage).then(res =>{
                console.log(res);
                _this.blogs = res.data.data.records;
                _this.currentPage = res.data.data.current;
                _this.totalPage = res.data.data.total;
                _this.pageSize = res.data.data.size;
            })
        }
    },
    created(){
        this.page(1);
    }
}
</script>

<style scoped>
.pagebar{
    margin: 0px auto;
    text-align: center;
}
</style>