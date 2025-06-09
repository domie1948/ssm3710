<template>
  <div>
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      label-width="80px"
    >  
     <el-row>
      <el-col :span="12">
        <el-form-item   v-if="flag=='yisheng'"  label="医生账号" prop="yishengzhanghao">
          <el-input v-model="ruleForm.yishengzhanghao" readonly              placeholder="医生账号" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='yisheng'"  label="医生姓名" prop="yishengxingming">
          <el-input v-model="ruleForm.yishengxingming"               placeholder="医生姓名" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='yisheng'"  label="性别" prop="xingbie">
          <el-select v-model="ruleForm.xingbie" placeholder="请选择性别">
            <el-option
                v-for="(item,index) in yishengxingbieOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item  v-if="flag=='yisheng'" label="出生日期" prop="chushengriqi">
            <el-date-picker
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                v-model="ruleForm.chushengriqi" 
                type="date"
                placeholder="出生日期">
            </el-date-picker> 
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='yisheng'"  label="工龄" prop="gongling">
          <el-input v-model="ruleForm.gongling"               placeholder="工龄" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='yisheng'"  label="职称" prop="zhicheng">
          <el-input v-model="ruleForm.zhicheng"               placeholder="职称" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='yisheng'"  label="身份证号" prop="shenfenzhenghao">
          <el-input v-model="ruleForm.shenfenzhenghao"               placeholder="身份证号" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='yisheng'"  label="手机" prop="shouji">
          <el-input v-model="ruleForm.shouji"               placeholder="手机" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='yisheng'"  label="邮箱" prop="youxiang">
          <el-input v-model="ruleForm.youxiang"               placeholder="邮箱" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">  
        <el-form-item v-if="flag=='yisheng'" label="照片" prop="zhaopian">
          <file-upload
          tip="点击上传照片"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.zhaopian?ruleForm.zhaopian:''"
          @change="yishengzhaopianUploadChange"
          ></file-upload>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='shisheng'"  label="师生账号" prop="shishengzhanghao">
          <el-input v-model="ruleForm.shishengzhanghao" readonly              placeholder="师生账号" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='shisheng'"  label="师生姓名" prop="shishengxingming">
          <el-input v-model="ruleForm.shishengxingming"               placeholder="师生姓名" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='shisheng'"  label="性别" prop="xingbie">
          <el-select v-model="ruleForm.xingbie" placeholder="请选择性别">
            <el-option
                v-for="(item,index) in shishengxingbieOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item  v-if="flag=='shisheng'" label="出生日期" prop="chushengriqi">
            <el-date-picker
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                v-model="ruleForm.chushengriqi" 
                type="date"
                placeholder="出生日期">
            </el-date-picker> 
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='shisheng'"  label="身份证号" prop="shenfenzhenghao">
          <el-input v-model="ruleForm.shenfenzhenghao"               placeholder="身份证号" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='shisheng'"  label="手机" prop="shouji">
          <el-input v-model="ruleForm.shouji"               placeholder="手机" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='shisheng'"  label="邮箱" prop="youxiang">
          <el-input v-model="ruleForm.youxiang"               placeholder="邮箱" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='shisheng'"  label="学院" prop="xueyuan">
          <el-select v-model="ruleForm.xueyuan" placeholder="请选择学院">
            <el-option
                v-for="(item,index) in shishengxueyuanOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="24">  
        <el-form-item v-if="flag=='shisheng'" label="照片" prop="zhaopian">
          <file-upload
          tip="点击上传照片"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.zhaopian?ruleForm.zhaopian:''"
          @change="shishengzhaopianUploadChange"
          ></file-upload>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='jianshenjiaolian'"  label="教练账号" prop="jiaolianzhanghao">
          <el-input v-model="ruleForm.jiaolianzhanghao" readonly              placeholder="教练账号" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='jianshenjiaolian'"  label="教练姓名" prop="jiaolianxingming">
          <el-input v-model="ruleForm.jiaolianxingming"               placeholder="教练姓名" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item v-if="flag=='jianshenjiaolian'"  label="性别" prop="xingbie">
          <el-select v-model="ruleForm.xingbie" placeholder="请选择性别">
            <el-option
                v-for="(item,index) in jianshenjiaolianxingbieOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item  v-if="flag=='jianshenjiaolian'" label="出生日期" prop="chushengriqi">
            <el-date-picker
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                v-model="ruleForm.chushengriqi" 
                type="date"
                placeholder="出生日期">
            </el-date-picker> 
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='jianshenjiaolian'"  label="工龄" prop="gongling">
          <el-input v-model="ruleForm.gongling"               placeholder="工龄" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='jianshenjiaolian'"  label="职称" prop="zhicheng">
          <el-input v-model="ruleForm.zhicheng"               placeholder="职称" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='jianshenjiaolian'"  label="身份证号" prop="shenfenzhenghao">
          <el-input v-model="ruleForm.shenfenzhenghao"               placeholder="身份证号" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='jianshenjiaolian'"  label="手机" prop="shouji">
          <el-input v-model="ruleForm.shouji"               placeholder="手机" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item   v-if="flag=='jianshenjiaolian'"  label="邮箱" prop="youxiang">
          <el-input v-model="ruleForm.youxiang"               placeholder="邮箱" clearable></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">  
        <el-form-item v-if="flag=='jianshenjiaolian'" label="照片" prop="zhaopian">
          <file-upload
          tip="点击上传照片"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.zhaopian?ruleForm.zhaopian:''"
          @change="jianshenjiaolianzhaopianUploadChange"
          ></file-upload>
        </el-form-item>
      </el-col>
      <el-form-item v-if="flag=='users'" label="用户名" prop="username">
        <el-input v-model="ruleForm.username" 
        placeholder="用户名"></el-input>
      </el-form-item>
      <el-col :span="24">
      <el-form-item>
        <el-button type="primary" @click="onUpdateHandler">修 改</el-button>
      </el-form-item>
      </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isMobile,isPhone,isURL,checkIdCard } from "@/utils/validate";

export default {
  data() {
    return {
      ruleForm: {},
      flag: '',
      usersFlag: false,
      yishengxingbieOptions: [],
      shishengxingbieOptions: [],
      shishengxueyuanOptions: [],
      jianshenjiaolianxingbieOptions: [],
    };
  },
  mounted() {
    var table = this.$storage.get("sessionTable");
    this.flag = table;
    this.$http({
      url: `${this.$storage.get("sessionTable")}/session`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.ruleForm = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.yishengxingbieOptions = "男,女".split(',')
    this.shishengxingbieOptions = "男,女".split(',')
    this.$http({
      url: `option/xueyuan/xueyuan`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.shishengxueyuanOptions = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.jianshenjiaolianxingbieOptions = "男,女".split(',')
  },
  methods: {
    yishengzhaopianUploadChange(fileUrls) {
        this.ruleForm.zhaopian = fileUrls;
    },
    shishengzhaopianUploadChange(fileUrls) {
        this.ruleForm.zhaopian = fileUrls;
    },
    jianshenjiaolianzhaopianUploadChange(fileUrls) {
        this.ruleForm.zhaopian = fileUrls;
    },
    onUpdateHandler() {
      if((!this.ruleForm.yishengzhanghao)&& 'yisheng'==this.flag){
        this.$message.error('医生账号不能为空');
        return
      }
      if((!this.ruleForm.mima)&& 'yisheng'==this.flag){
        this.$message.error('密码不能为空');
        return
      }
      if((!this.ruleForm.yishengxingming)&& 'yisheng'==this.flag){
        this.$message.error('医生姓名不能为空');
        return
      }
      if( 'yisheng' ==this.flag && this.ruleForm.gongling&&(!isIntNumer(this.ruleForm.gongling))){
       this.$message.error(`工龄应输入整数`);
        return
      }
      if( 'yisheng' ==this.flag && this.ruleForm.shenfenzhenghao&&(!checkIdCard(this.ruleForm.shenfenzhenghao))){
        this.$message.error(`身份证号应输入身份证格式`);
        return
      }
      if( 'yisheng' ==this.flag && this.ruleForm.shouji&&(!isMobile(this.ruleForm.shouji))){
        this.$message.error(`手机应输入手机格式`);
        return
      }
      if( 'yisheng' ==this.flag && this.ruleForm.youxiang&&(!isEmail(this.ruleForm.youxiang))){
        this.$message.error(`邮箱应输入邮箱格式`);
        return
      }
      if((!this.ruleForm.shishengzhanghao)&& 'shisheng'==this.flag){
        this.$message.error('师生账号不能为空');
        return
      }
      if((!this.ruleForm.mima)&& 'shisheng'==this.flag){
        this.$message.error('密码不能为空');
        return
      }
      if((!this.ruleForm.shishengxingming)&& 'shisheng'==this.flag){
        this.$message.error('师生姓名不能为空');
        return
      }
      if( 'shisheng' ==this.flag && this.ruleForm.shenfenzhenghao&&(!checkIdCard(this.ruleForm.shenfenzhenghao))){
        this.$message.error(`身份证号应输入身份证格式`);
        return
      }
      if( 'shisheng' ==this.flag && this.ruleForm.shouji&&(!isMobile(this.ruleForm.shouji))){
        this.$message.error(`手机应输入手机格式`);
        return
      }
      if( 'shisheng' ==this.flag && this.ruleForm.youxiang&&(!isEmail(this.ruleForm.youxiang))){
        this.$message.error(`邮箱应输入邮箱格式`);
        return
      }
      if((!this.ruleForm.jiaolianzhanghao)&& 'jianshenjiaolian'==this.flag){
        this.$message.error('教练账号不能为空');
        return
      }
      if((!this.ruleForm.mima)&& 'jianshenjiaolian'==this.flag){
        this.$message.error('密码不能为空');
        return
      }
      if((!this.ruleForm.jiaolianxingming)&& 'jianshenjiaolian'==this.flag){
        this.$message.error('教练姓名不能为空');
        return
      }
      if( 'jianshenjiaolian' ==this.flag && this.ruleForm.gongling&&(!isIntNumer(this.ruleForm.gongling))){
       this.$message.error(`工龄应输入整数`);
        return
      }
      if( 'jianshenjiaolian' ==this.flag && this.ruleForm.shenfenzhenghao&&(!checkIdCard(this.ruleForm.shenfenzhenghao))){
        this.$message.error(`身份证号应输入身份证格式`);
        return
      }
      if( 'jianshenjiaolian' ==this.flag && this.ruleForm.shouji&&(!isMobile(this.ruleForm.shouji))){
        this.$message.error(`手机应输入手机格式`);
        return
      }
      if( 'jianshenjiaolian' ==this.flag && this.ruleForm.youxiang&&(!isEmail(this.ruleForm.youxiang))){
        this.$message.error(`邮箱应输入邮箱格式`);
        return
      }
      if('users'==this.flag && this.ruleForm.username.trim().length<1) {
	this.$message.error(`用户名不能为空`);
        return	
      }
      this.$http({
        url: `${this.$storage.get("sessionTable")}/update`,
        method: "post",
        data: this.ruleForm
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$message({
            message: "修改信息成功",
            type: "success",
            duration: 1500,
            onClose: () => {
            }
          });
        } else {
          this.$message.error(data.msg);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
