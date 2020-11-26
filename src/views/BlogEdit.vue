<template>
    <div>
        <Header></Header>
        <div class="m-content">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="标题" prop="atctitle">
                    <el-input v-model="ruleForm.atctitle"></el-input>
                </el-form-item>
                <el-form-item label="摘要" prop="description">
                    <el-input type="textarea" v-model="ruleForm.description"></el-input>
                </el-form-item>

                <el-form-item label="内容" prop="atccon">
                    <mavon-editor v-model="ruleForm.atccon"></mavon-editor>
                </el-form-item>
                
                <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import Header from "../components/Header"
export default {
    name: "Edit",
    components: {Header},
    data() {
      return {
        ruleForm: {
          atctitle: 'Jackhou',
          description: '11111',
          atccon: ''
        },
        rules: {
          title: [
            { required: true, message: '请输入文章标题', trigger: 'blur' },
            { min: 3, max: 25, message: '长度在 3 到 25 个字符', trigger: 'blur' }
          ],
          description: [
            { required: true, message: '请输入文章摘要', trigger: 'blur' }
          ],
          atccon: [
            { required: true, message: '请输入文章内容', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              console.log("----------------------");
              const _this = this;
              this.$axios.post('/blog/edit', this.ruleForm, {
                  headers: {
                    "Authorization": localStorage.getItem("token")
                }
              }).then(res => {
                  console.log(res);
              })
          } else {
            // console.log('error submit!!');
            return false;
          }
        });
      },
    },
    resetForm(formName) {
        this.$refs[formName].resetFields();
      }
}
</script>

<style scoped>
.m-content{
    text-align: center;
}
</style>