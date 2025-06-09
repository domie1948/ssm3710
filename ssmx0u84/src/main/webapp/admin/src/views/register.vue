<template>
  <div>
    <div class="container">
      <div class="login-form" style="backgroundColor:rgba(255, 255, 255, 1);borderRadius:10px">
        <h1 class="h1" style="color:rgba(131, 138, 182, 1);fontSize:28px;">师生健康管理系统注册</h1>
		<el-form ref="rgsForm" class="rgs-form" :model="rgsForm" label-width="120px">
			<!-- <div v-if="tableName=='yisheng'" class="input-group">
			   <div class="label">医生账号</div>
			   <div class="input-container">
			     <input v-model="ruleForm.yishengzhanghao" class="input" type="text" placeholder="医生账号">
			   </div>
			 </div> -->
			<el-form-item label="医生账号" class="input" v-if="tableName=='yisheng'">
			  <el-input v-model="ruleForm.yishengzhanghao" autocomplete="off" placeholder="医生账号"  />
			</el-form-item>
			<!-- <div v-if="tableName=='yisheng'" class="input-group">
			   <div class="label">密码</div>
			   <div class="input-container">
			     <input v-model="ruleForm.mima" class="input" type="text" placeholder="密码">
			   </div>
			 </div> -->
			<el-form-item label="密码" class="input" v-if="tableName=='yisheng'">
			  <el-input v-model="ruleForm.mima" autocomplete="off" placeholder="密码" type="password"#elsetype="text" />
			</el-form-item>
			<!-- <div v-if="tableName=='yisheng'" class="input-group">
			   <div class="label">医生姓名</div>
			   <div class="input-container">
			     <input v-model="ruleForm.yishengxingming" class="input" type="text" placeholder="医生姓名">
			   </div>
			 </div> -->
			<el-form-item label="医生姓名" class="input" v-if="tableName=='yisheng'">
			  <el-input v-model="ruleForm.yishengxingming" autocomplete="off" placeholder="医生姓名"  />
			</el-form-item>
			<!-- <div v-if="tableName=='yisheng'" class="input-group">
			   <div class="label">工龄</div>
			   <div class="input-container">
			     <input v-model="ruleForm.gongling" class="input" type="text" placeholder="工龄">
			   </div>
			 </div> -->
			<el-form-item label="工龄" class="input" v-if="tableName=='yisheng'">
			  <el-input v-model="ruleForm.gongling" autocomplete="off" placeholder="工龄"  />
			</el-form-item>
			<!-- <div v-if="tableName=='yisheng'" class="input-group">
			   <div class="label">职称</div>
			   <div class="input-container">
			     <input v-model="ruleForm.zhicheng" class="input" type="text" placeholder="职称">
			   </div>
			 </div> -->
			<el-form-item label="职称" class="input" v-if="tableName=='yisheng'">
			  <el-input v-model="ruleForm.zhicheng" autocomplete="off" placeholder="职称"  />
			</el-form-item>
			<!-- <div v-if="tableName=='yisheng'" class="input-group">
			   <div class="label">身份证号</div>
			   <div class="input-container">
			     <input v-model="ruleForm.shenfenzhenghao" class="input" type="text" placeholder="身份证号">
			   </div>
			 </div> -->
			<el-form-item label="身份证号" class="input" v-if="tableName=='yisheng'">
			  <el-input v-model="ruleForm.shenfenzhenghao" autocomplete="off" placeholder="身份证号"  />
			</el-form-item>
			<!-- <div v-if="tableName=='yisheng'" class="input-group">
			   <div class="label">手机</div>
			   <div class="input-container">
			     <input v-model="ruleForm.shouji" class="input" type="text" placeholder="手机">
			   </div>
			 </div> -->
			<el-form-item label="手机" class="input" v-if="tableName=='yisheng'">
			  <el-input v-model="ruleForm.shouji" autocomplete="off" placeholder="手机"  />
			</el-form-item>
			<!-- <div v-if="tableName=='yisheng'" class="input-group">
			   <div class="label">邮箱</div>
			   <div class="input-container">
			     <input v-model="ruleForm.youxiang" class="input" type="text" placeholder="邮箱">
			   </div>
			 </div> -->
			<el-form-item label="邮箱" class="input" v-if="tableName=='yisheng'">
			  <el-input v-model="ruleForm.youxiang" autocomplete="off" placeholder="邮箱"  />
			</el-form-item>
			<!-- <div v-if="tableName=='shisheng'" class="input-group">
			   <div class="label">师生账号</div>
			   <div class="input-container">
			     <input v-model="ruleForm.shishengzhanghao" class="input" type="text" placeholder="师生账号">
			   </div>
			 </div> -->
			<el-form-item label="师生账号" class="input" v-if="tableName=='shisheng'">
			  <el-input v-model="ruleForm.shishengzhanghao" autocomplete="off" placeholder="师生账号"  />
			</el-form-item>
			<!-- <div v-if="tableName=='shisheng'" class="input-group">
			   <div class="label">密码</div>
			   <div class="input-container">
			     <input v-model="ruleForm.mima" class="input" type="text" placeholder="密码">
			   </div>
			 </div> -->
			<el-form-item label="密码" class="input" v-if="tableName=='shisheng'">
			  <el-input v-model="ruleForm.mima" autocomplete="off" placeholder="密码" type="password"#elsetype="text" />
			</el-form-item>
			<!-- <div v-if="tableName=='shisheng'" class="input-group">
			   <div class="label">师生姓名</div>
			   <div class="input-container">
			     <input v-model="ruleForm.shishengxingming" class="input" type="text" placeholder="师生姓名">
			   </div>
			 </div> -->
			<el-form-item label="师生姓名" class="input" v-if="tableName=='shisheng'">
			  <el-input v-model="ruleForm.shishengxingming" autocomplete="off" placeholder="师生姓名"  />
			</el-form-item>
			<!-- <div v-if="tableName=='shisheng'" class="input-group">
			   <div class="label">身份证号</div>
			   <div class="input-container">
			     <input v-model="ruleForm.shenfenzhenghao" class="input" type="text" placeholder="身份证号">
			   </div>
			 </div> -->
			<el-form-item label="身份证号" class="input" v-if="tableName=='shisheng'">
			  <el-input v-model="ruleForm.shenfenzhenghao" autocomplete="off" placeholder="身份证号"  />
			</el-form-item>
			<!-- <div v-if="tableName=='shisheng'" class="input-group">
			   <div class="label">手机</div>
			   <div class="input-container">
			     <input v-model="ruleForm.shouji" class="input" type="text" placeholder="手机">
			   </div>
			 </div> -->
			<el-form-item label="手机" class="input" v-if="tableName=='shisheng'">
			  <el-input v-model="ruleForm.shouji" autocomplete="off" placeholder="手机"  />
			</el-form-item>
			<!-- <div v-if="tableName=='shisheng'" class="input-group">
			   <div class="label">邮箱</div>
			   <div class="input-container">
			     <input v-model="ruleForm.youxiang" class="input" type="text" placeholder="邮箱">
			   </div>
			 </div> -->
			<el-form-item label="邮箱" class="input" v-if="tableName=='shisheng'">
			  <el-input v-model="ruleForm.youxiang" autocomplete="off" placeholder="邮箱"  />
			</el-form-item>
			<!-- <div v-if="tableName=='jianshenjiaolian'" class="input-group">
			   <div class="label">教练账号</div>
			   <div class="input-container">
			     <input v-model="ruleForm.jiaolianzhanghao" class="input" type="text" placeholder="教练账号">
			   </div>
			 </div> -->
			<el-form-item label="教练账号" class="input" v-if="tableName=='jianshenjiaolian'">
			  <el-input v-model="ruleForm.jiaolianzhanghao" autocomplete="off" placeholder="教练账号"  />
			</el-form-item>
			<!-- <div v-if="tableName=='jianshenjiaolian'" class="input-group">
			   <div class="label">密码</div>
			   <div class="input-container">
			     <input v-model="ruleForm.mima" class="input" type="text" placeholder="密码">
			   </div>
			 </div> -->
			<el-form-item label="密码" class="input" v-if="tableName=='jianshenjiaolian'">
			  <el-input v-model="ruleForm.mima" autocomplete="off" placeholder="密码" type="password"#elsetype="text" />
			</el-form-item>
			<!-- <div v-if="tableName=='jianshenjiaolian'" class="input-group">
			   <div class="label">教练姓名</div>
			   <div class="input-container">
			     <input v-model="ruleForm.jiaolianxingming" class="input" type="text" placeholder="教练姓名">
			   </div>
			 </div> -->
			<el-form-item label="教练姓名" class="input" v-if="tableName=='jianshenjiaolian'">
			  <el-input v-model="ruleForm.jiaolianxingming" autocomplete="off" placeholder="教练姓名"  />
			</el-form-item>
			<!-- <div v-if="tableName=='jianshenjiaolian'" class="input-group">
			   <div class="label">工龄</div>
			   <div class="input-container">
			     <input v-model="ruleForm.gongling" class="input" type="text" placeholder="工龄">
			   </div>
			 </div> -->
			<el-form-item label="工龄" class="input" v-if="tableName=='jianshenjiaolian'">
			  <el-input v-model="ruleForm.gongling" autocomplete="off" placeholder="工龄"  />
			</el-form-item>
			<!-- <div v-if="tableName=='jianshenjiaolian'" class="input-group">
			   <div class="label">职称</div>
			   <div class="input-container">
			     <input v-model="ruleForm.zhicheng" class="input" type="text" placeholder="职称">
			   </div>
			 </div> -->
			<el-form-item label="职称" class="input" v-if="tableName=='jianshenjiaolian'">
			  <el-input v-model="ruleForm.zhicheng" autocomplete="off" placeholder="职称"  />
			</el-form-item>
			<!-- <div v-if="tableName=='jianshenjiaolian'" class="input-group">
			   <div class="label">身份证号</div>
			   <div class="input-container">
			     <input v-model="ruleForm.shenfenzhenghao" class="input" type="text" placeholder="身份证号">
			   </div>
			 </div> -->
			<el-form-item label="身份证号" class="input" v-if="tableName=='jianshenjiaolian'">
			  <el-input v-model="ruleForm.shenfenzhenghao" autocomplete="off" placeholder="身份证号"  />
			</el-form-item>
			<!-- <div v-if="tableName=='jianshenjiaolian'" class="input-group">
			   <div class="label">手机</div>
			   <div class="input-container">
			     <input v-model="ruleForm.shouji" class="input" type="text" placeholder="手机">
			   </div>
			 </div> -->
			<el-form-item label="手机" class="input" v-if="tableName=='jianshenjiaolian'">
			  <el-input v-model="ruleForm.shouji" autocomplete="off" placeholder="手机"  />
			</el-form-item>
			<!-- <div v-if="tableName=='jianshenjiaolian'" class="input-group">
			   <div class="label">邮箱</div>
			   <div class="input-container">
			     <input v-model="ruleForm.youxiang" class="input" type="text" placeholder="邮箱">
			   </div>
			 </div> -->
			<el-form-item label="邮箱" class="input" v-if="tableName=='jianshenjiaolian'">
			  <el-input v-model="ruleForm.youxiang" autocomplete="off" placeholder="邮箱"  />
			</el-form-item>
			<div style="display: flex;flex-wrap: wrap;width: 100%;justify-content: center;">
				<el-button class="btn" type="primary" @click="login()">注册</el-button>
				<el-button class="btn close" type="primary" @click="close()">取消</el-button>
			</div>
		</el-form>
      </div>
      <!-- <div class="nk-navigation">
        <a href="#">
          <div @click="login()">注册</div>
        </a>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
      },
      tableName:"",
      rules: {}
    };
  },
  mounted(){
    let table = this.$storage.get("loginTable");
    this.tableName = table;
  },
  methods: {
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    close(){
	this.$router.push({ path: "/login" });
    },
    // 注册
    login() {
      if((!this.ruleForm.yishengzhanghao) && `yisheng` == this.tableName){
        this.$message.error(`医生账号不能为空`);
        return
      }
      if((!this.ruleForm.mima) && `yisheng` == this.tableName){
        this.$message.error(`密码不能为空`);
        return
      }
      if((!this.ruleForm.yishengxingming) && `yisheng` == this.tableName){
        this.$message.error(`医生姓名不能为空`);
        return
      }
      if(`yisheng` == this.tableName && this.ruleForm.gongling&&(!this.$validate.isIntNumer(this.ruleForm.gongling))){
        this.$message.error(`工龄应输入整数`);
        return
      }
      if(`yisheng` == this.tableName && this.ruleForm.shenfenzhenghao&&(!this.$validate.checkIdCard(this.ruleForm.shenfenzhenghao))){
        this.$message.error(`身份证号应输入身份证格式`);
        return
      }
      if(`yisheng` == this.tableName && this.ruleForm.shouji&&(!this.$validate.isMobile(this.ruleForm.shouji))){
        this.$message.error(`手机应输入手机格式`);
        return
      }
      if(`yisheng` == this.tableName && this.ruleForm.youxiang&&(!this.$validate.isEmail(this.ruleForm.youxiang))){
        this.$message.error(`邮箱应输入邮件格式`);
        return
      }
      if((!this.ruleForm.shishengzhanghao) && `shisheng` == this.tableName){
        this.$message.error(`师生账号不能为空`);
        return
      }
      if((!this.ruleForm.mima) && `shisheng` == this.tableName){
        this.$message.error(`密码不能为空`);
        return
      }
      if((!this.ruleForm.shishengxingming) && `shisheng` == this.tableName){
        this.$message.error(`师生姓名不能为空`);
        return
      }
      if(`shisheng` == this.tableName && this.ruleForm.shenfenzhenghao&&(!this.$validate.checkIdCard(this.ruleForm.shenfenzhenghao))){
        this.$message.error(`身份证号应输入身份证格式`);
        return
      }
      if(`shisheng` == this.tableName && this.ruleForm.shouji&&(!this.$validate.isMobile(this.ruleForm.shouji))){
        this.$message.error(`手机应输入手机格式`);
        return
      }
      if(`shisheng` == this.tableName && this.ruleForm.youxiang&&(!this.$validate.isEmail(this.ruleForm.youxiang))){
        this.$message.error(`邮箱应输入邮件格式`);
        return
      }
      if((!this.ruleForm.jiaolianzhanghao) && `jianshenjiaolian` == this.tableName){
        this.$message.error(`教练账号不能为空`);
        return
      }
      if((!this.ruleForm.mima) && `jianshenjiaolian` == this.tableName){
        this.$message.error(`密码不能为空`);
        return
      }
      if((!this.ruleForm.jiaolianxingming) && `jianshenjiaolian` == this.tableName){
        this.$message.error(`教练姓名不能为空`);
        return
      }
      if(`jianshenjiaolian` == this.tableName && this.ruleForm.gongling&&(!this.$validate.isIntNumer(this.ruleForm.gongling))){
        this.$message.error(`工龄应输入整数`);
        return
      }
      if(`jianshenjiaolian` == this.tableName && this.ruleForm.shenfenzhenghao&&(!this.$validate.checkIdCard(this.ruleForm.shenfenzhenghao))){
        this.$message.error(`身份证号应输入身份证格式`);
        return
      }
      if(`jianshenjiaolian` == this.tableName && this.ruleForm.shouji&&(!this.$validate.isMobile(this.ruleForm.shouji))){
        this.$message.error(`手机应输入手机格式`);
        return
      }
      if(`jianshenjiaolian` == this.tableName && this.ruleForm.youxiang&&(!this.$validate.isEmail(this.ruleForm.youxiang))){
        this.$message.error(`邮箱应输入邮件格式`);
        return
      }
      this.$http({
        url: `${this.tableName}/register`,
        method: "post",
        data:this.ruleForm
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$message({
            message: "注册成功",
            type: "success",
            duration: 1500,
            onClose: () => {
              this.$router.replace({ path: "/login" });
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
	.el-radio__input.is-checked .el-radio__inner {
		border-color: #00c292;
		background: #00c292;
	}

	.el-radio__input.is-checked .el-radio__inner {
		border-color: #00c292;
		background: #00c292;
	}

	.el-radio__input.is-checked .el-radio__inner {
		border-color: #00c292;
		background: #00c292;
	}

	.el-radio__input.is-checked+.el-radio__label {
		color: #00c292;
	}

	.el-radio__input.is-checked+.el-radio__label {
		color: #00c292;
	}

	.el-radio__input.is-checked+.el-radio__label {
		color: #00c292;
	}

	.h1 {
		margin-top: 10px;
	}

	body {
		padding: 0;
		margin: 0;
	}

	// .container {
 //    min-height: 100vh;
 //    text-align: center;
 //    // background-color: #00c292;
 //    padding-top: 20vh;
 //    background-image: url(../assets/img/bg.jpg);
 //    background-size: 100% 100%;
 //    opacity: 0.9;
 //  }

	// .login-form:before {
	// 	vertical-align: middle;
	// 	display: inline-block;
	// }

	// .login-form {
	// 	max-width: 500px;
	// 	padding: 20px 0;
	// 	width: 80%;
	// 	position: relative;
	// 	margin: 0 auto;

	// 	.label {
	// 		min-width: 60px;
	// 	}

	// 	.input-group {
	// 		max-width: 500px;
	// 		padding: 20px 0;
	// 		width: 80%;
	// 		position: relative;
	// 		margin: 0 auto;
	// 		display: flex;
	// 		align-items: center;

	// 		.input-container {
	// 			display: inline-block;
	// 			width: 100%;
	// 			text-align: left;
	// 			margin-left: 10px;
	// 		}

	// 		.icon {
	// 			width: 30px;
	// 			height: 30px;
	// 		}

	// 		.input {
	// 			position: relative;
	// 			z-index: 2;
	// 			float: left;
	// 			width: 100%;
	// 			margin-bottom: 0;
	// 			box-shadow: none;
	// 			border-top: 0px solid #ccc;
	// 			border-left: 0px solid #ccc;
	// 			border-right: 0px solid #ccc;
	// 			border-bottom: 1px solid #ccc;
	// 			padding: 0px;
	// 			resize: none;
	// 			border-radius: 0px;
	// 			display: block;
	// 			width: 100%;
	// 			height: 34px;
	// 			padding: 6px 12px;
	// 			font-size: 14px;
	// 			line-height: 1.42857143;
	// 			color: #555;
	// 			background-color: #fff;
	// 		}

	// 	}
	// }

	.nk-navigation {
		margin-top: 15px;

		a {
			display: inline-block;
			color: #fff;
			background: rgba(255, 255, 255, .2);
			width: 100px;
			height: 50px;
			border-radius: 30px;
			text-align: center;
			display: flex;
			align-items: center;
			margin: 0 auto;
			justify-content: center;
			padding: 0 20px;
		}

		.icon {
			margin-left: 10px;
			width: 30px;
			height: 30px;
		}
	}

	.register-container {
		margin-top: 10px;

		a {
			display: inline-block;
			color: #fff;
			max-width: 500px;
			height: 50px;
			border-radius: 30px;
			text-align: center;
			display: flex;
			align-items: center;
			margin: 0 auto;
			justify-content: center;
			padding: 0 20px;

			div {
				margin-left: 10px;
			}
		}
	}
	
	.container {
		background-image: url("http://codegen.caihongy.cn/20210105/bf5686918faa4f68a9b7634e35a058d7.jpg");
		height: 100vh;
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
	
		.login-form {
			right: 50%;
			top: 50%;
			height: auto;
			transform: translate3d(50%, -50%, 0);
			border-radius: 10px;
			background-color: rgba(255,255,255,.5);
			width: 420px;
			padding: 30px 30px 40px 30px;
			font-size: 14px;
			font-weight: 500;
			
			.h1 {
				margin: 0;
				text-align: center;
				line-height: 54px;
			    font-size: 24px;
			    color: #000;
			}
				
			.rgs-form {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				
				.input {
					width: 100%;
					
					& /deep/ .el-form-item__label {
						line-height: 38px;
						color: rgba(131, 138, 182, 1);
						font-size: #606266;
					}
					
					& /deep/ .el-input__inner {
						height: 38px;
						color: rgba(131, 138, 182, 1);
						font-size: 14px;
						border-width: 1px;
						border-style: solid;
						border-color: rgba(236, 236, 255, 1);
						border-radius: 4px;
						background-color: #fff;
					}
				}
				
				.btn {
					margin: 0 10px;
					width: 88px;
					height: 44px;
					color: #fff;
					font-size: 14px;
					border-width: 0px;
					border-style: solid;
					border-color: #409EFF;
					border-radius: 4px;
					background-color: rgba(84, 88, 179, 1);
				}

				.close {
					margin: 0 10px;
					width: 88px;
					height: 44px;
					color: #409EFF;
					font-size: 14px;
					border-width: 1px;
					border-style: solid;
					border-color: #409EFF;
					border-radius: 4px;
					background-color: #FFF;
				}

			}
		}
	}
</style>
