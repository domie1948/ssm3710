<template>
  <div class="addEdit-block">
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
	  :style="{backgroundColor:addEditForm.addEditBoxColor}"
    >
      <el-row>
      <el-col :span="12">
        <el-form-item class="select" v-if="type!='info'" label="师生账号" prop="shishengzhanghao">
          <el-select  @change="shishengzhanghaoChange" v-model="ruleForm.shishengzhanghao" placeholder="请选择师生账号">
            <el-option
                v-for="(item,index) in shishengzhanghaoOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <div v-else>
          <el-form-item class="input"v-if="ruleForm.shishengzhanghao" label="师生账号" prop="shishengzhanghao">
              <el-input v-model="ruleForm.shishengzhanghao" 
                placeholder="师生账号" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="师生姓名" prop="shishengxingming">
          <el-input v-model="ruleForm.shishengxingming" 
              placeholder="师生姓名" clearable  :readonly="ro.shishengxingming"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="师生姓名" prop="shishengxingming">
              <el-input v-model="ruleForm.shishengxingming" 
                placeholder="师生姓名" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="性别" prop="xingbie">
          <el-input v-model="ruleForm.xingbie" 
              placeholder="性别" clearable  :readonly="ro.xingbie"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="性别" prop="xingbie">
              <el-input v-model="ruleForm.xingbie" 
                placeholder="性别" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="出生日期" prop="chushengriqi">
          <el-input v-model="ruleForm.chushengriqi" 
              placeholder="出生日期" clearable  :readonly="ro.chushengriqi"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="出生日期" prop="chushengriqi">
              <el-input v-model="ruleForm.chushengriqi" 
                placeholder="出生日期" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="身份证号" prop="shenfenzhenghao">
          <el-input v-model="ruleForm.shenfenzhenghao" 
              placeholder="身份证号" clearable  :readonly="ro.shenfenzhenghao"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="身份证号" prop="shenfenzhenghao">
              <el-input v-model="ruleForm.shenfenzhenghao" 
                placeholder="身份证号" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="学院" prop="xueyuan">
          <el-input v-model="ruleForm.xueyuan" 
              placeholder="学院" clearable  :readonly="ro.xueyuan"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="学院" prop="xueyuan">
              <el-input v-model="ruleForm.xueyuan" 
                placeholder="学院" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="身高" prop="shengao">
          <el-input v-model="ruleForm.shengao" 
              placeholder="身高" clearable  :readonly="ro.shengao"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="身高" prop="shengao">
              <el-input v-model="ruleForm.shengao" 
                placeholder="身高" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="体重" prop="tizhong">
          <el-input v-model="ruleForm.tizhong" 
              placeholder="体重" clearable  :readonly="ro.tizhong"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="体重" prop="tizhong">
              <el-input v-model="ruleForm.tizhong" 
                placeholder="体重" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="视力" prop="shili">
          <el-input v-model="ruleForm.shili" 
              placeholder="视力" clearable  :readonly="ro.shili"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="视力" prop="shili">
              <el-input v-model="ruleForm.shili" 
                placeholder="视力" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="皮肤" prop="pifu">
          <el-input v-model="ruleForm.pifu" 
              placeholder="皮肤" clearable  :readonly="ro.pifu"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="皮肤" prop="pifu">
              <el-input v-model="ruleForm.pifu" 
                placeholder="皮肤" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="淋巴" prop="linba">
          <el-input v-model="ruleForm.linba" 
              placeholder="淋巴" clearable  :readonly="ro.linba"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="淋巴" prop="linba">
              <el-input v-model="ruleForm.linba" 
                placeholder="淋巴" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="甲状腺" prop="jiazhuangxian">
          <el-input v-model="ruleForm.jiazhuangxian" 
              placeholder="甲状腺" clearable  :readonly="ro.jiazhuangxian"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="甲状腺" prop="jiazhuangxian">
              <el-input v-model="ruleForm.jiazhuangxian" 
                placeholder="甲状腺" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="脊椎" prop="jizhui">
          <el-input v-model="ruleForm.jizhui" 
              placeholder="脊椎" clearable  :readonly="ro.jizhui"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="脊椎" prop="jizhui">
              <el-input v-model="ruleForm.jizhui" 
                placeholder="脊椎" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="四肢" prop="sizhi">
          <el-input v-model="ruleForm.sizhi" 
              placeholder="四肢" clearable  :readonly="ro.sizhi"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="四肢" prop="sizhi">
              <el-input v-model="ruleForm.sizhi" 
                placeholder="四肢" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="关节" prop="guanjie">
          <el-input v-model="ruleForm.guanjie" 
              placeholder="关节" clearable  :readonly="ro.guanjie"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="关节" prop="guanjie">
              <el-input v-model="ruleForm.guanjie" 
                placeholder="关节" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="听力" prop="tingli">
          <el-input v-model="ruleForm.tingli" 
              placeholder="听力" clearable  :readonly="ro.tingli"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="听力" prop="tingli">
              <el-input v-model="ruleForm.tingli" 
                placeholder="听力" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="血压" prop="xueya">
          <el-input v-model="ruleForm.xueya" 
              placeholder="血压" clearable  :readonly="ro.xueya"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="血压" prop="xueya">
              <el-input v-model="ruleForm.xueya" 
                placeholder="血压" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="心率" prop="xinlv">
          <el-input v-model="ruleForm.xinlv" 
              placeholder="心率" clearable  :readonly="ro.xinlv"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="心率" prop="xinlv">
              <el-input v-model="ruleForm.xinlv" 
                placeholder="心率" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="蛀牙" prop="zhuya">
          <el-input v-model="ruleForm.zhuya" 
              placeholder="蛀牙" clearable  :readonly="ro.zhuya"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="蛀牙" prop="zhuya">
              <el-input v-model="ruleForm.zhuya" 
                placeholder="蛀牙" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="心脏" prop="xinzang">
          <el-input v-model="ruleForm.xinzang" 
              placeholder="心脏" clearable  :readonly="ro.xinzang"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="心脏" prop="xinzang">
              <el-input v-model="ruleForm.xinzang" 
                placeholder="心脏" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="胸透" prop="xiongtou">
          <el-input v-model="ruleForm.xiongtou" 
              placeholder="胸透" clearable  :readonly="ro.xiongtou"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="胸透" prop="xiongtou">
              <el-input v-model="ruleForm.xiongtou" 
                placeholder="胸透" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="医生账号" prop="yishengzhanghao">
          <el-input v-model="ruleForm.yishengzhanghao" 
              placeholder="医生账号" clearable  :readonly="ro.yishengzhanghao"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="医生账号" prop="yishengzhanghao">
              <el-input v-model="ruleForm.yishengzhanghao" 
                placeholder="医生账号" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="医生姓名" prop="yishengxingming">
          <el-input v-model="ruleForm.yishengxingming" 
              placeholder="医生姓名" clearable  :readonly="ro.yishengxingming"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="医生姓名" prop="yishengxingming">
              <el-input v-model="ruleForm.yishengxingming" 
                placeholder="医生姓名" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item class="textarea" v-if="type!='info'" label="病史记录" prop="bingshijilu">
                <el-input
                  style="min-width: 200px; max-width: 600px;"
                  type="textarea"
                  :rows="8"
                  placeholder="病史记录"
                  v-model="ruleForm.bingshijilu" >
                </el-input>
              </el-form-item>
              <div v-else>
                <el-form-item v-if="ruleForm.bingshijilu" label="病史记录" prop="bingshijilu">
                    <span>{{ruleForm.bingshijilu}}</span>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
      <el-form-item class="btn">
        <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
        <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
        <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
  data() {
    let self = this
    var validateIdCard = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!checkIdCard(value)) {
        callback(new Error("请输入正确的身份证号码"));
      } else {
        callback();
      }
    };
    var validateUrl = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isURL(value)) {
        callback(new Error("请输入正确的URL地址"));
      } else {
        callback();
      }
    };
    var validateMobile = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isMobile(value)) {
        callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isPhone(value)) {
        callback(new Error("请输入正确的电话号码"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isEmail(value)) {
        callback(new Error("请输入正确的邮箱地址"));
      } else {
        callback();
      }
    };
    var validateNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isNumber(value)) {
        callback(new Error("请输入数字"));
      } else {
        callback();
      }
    };
    var validateIntNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isIntNumer(value)) {
        callback(new Error("请输入整数"));
      } else {
        callback();
      }
    };
    return {
	  addEditForm: {"btnSaveFontColor":"#fff","selectFontSize":"14px","btnCancelBorderColor":"#DCDFE6","inputBorderRadius":"4px","inputFontSize":"14px","textareaBgColor":"#fff","btnSaveFontSize":"14px","textareaBorderRadius":"4px","uploadBgColor":"#fff","textareaBorderStyle":"solid","btnCancelWidth":"88px","textareaHeight":"120px","dateBgColor":"#fff","btnSaveBorderRadius":"4px","uploadLableFontSize":"14px","textareaBorderWidth":"1px","inputLableColor":"rgba(131, 138, 182, 1)","addEditBoxColor":"#fff","dateIconFontSize":"14px","btnSaveBgColor":"rgba(84, 88, 179, 1)","uploadIconFontColor":"#8c939d","textareaBorderColor":"rgba(236, 236, 255, 1)","btnCancelBgColor":"rgba(255, 255, 255, 1)","selectLableColor":"rgba(131, 138, 182, 1)","btnSaveBorderStyle":"solid","dateBorderWidth":"1px","dateLableFontSize":"14px","dateBorderRadius":"4px","btnCancelBorderStyle":"solid","selectLableFontSize":"14px","selectBorderStyle":"solid","selectIconFontColor":"rgba(236, 236, 255, 1)","btnCancelHeight":"44px","inputHeight":"38px","btnCancelFontColor":"rgba(0, 0, 0, 1)","dateBorderColor":"rgba(236, 236, 255, 1)","dateIconFontColor":"rgba(0, 0, 0, 1)","uploadBorderStyle":"dashed","dateBorderStyle":"solid","dateLableColor":"rgba(131, 138, 182, 1)","dateFontSize":"14px","inputBorderWidth":"1px","uploadIconFontSize":"28px","selectHeight":"38px","inputFontColor":"rgba(119, 122, 178, 1)","uploadHeight":"148px","textareaLableColor":"rgba(131, 138, 182, 1)","textareaLableFontSize":"14px","btnCancelFontSize":"14px","inputBorderStyle":"solid","btnCancelBorderRadius":"4px","inputBgColor":"rgba(255, 255, 255, 1)","inputLableFontSize":"14px","uploadLableColor":"rgba(131, 138, 182, 1)","uploadBorderRadius":"4px","btnSaveHeight":"44px","selectBgColor":"#fff","btnSaveWidth":"88px","selectIconFontSize":"14px","dateHeight":"38px","selectBorderColor":"rgba(236, 236, 255, 1)","inputBorderColor":"rgba(236, 236, 255, 1)","uploadBorderColor":"rgba(236, 236, 255, 1)","textareaFontColor":"rgba(119, 122, 178, 1)","selectBorderWidth":"1px","dateFontColor":"rgba(119, 122, 178, 1)","btnCancelBorderWidth":"0px","uploadBorderWidth":"2px","textareaFontSize":"14px","selectBorderRadius":"4px","selectFontColor":"rgba(119, 122, 178, 1)","btnSaveBorderColor":"#409EFF","btnSaveBorderWidth":"0px"},
      id: '',
      type: '',
      ro:{
	shishengzhanghao : false,
	shishengxingming : false,
	xingbie : false,
	chushengriqi : false,
	shenfenzhenghao : false,
	xueyuan : false,
	shengao : false,
	tizhong : false,
	shili : false,
	pifu : false,
	linba : false,
	jiazhuangxian : false,
	jizhui : false,
	sizhi : false,
	guanjie : false,
	tingli : false,
	xueya : false,
	xinlv : false,
	zhuya : false,
	xinzang : false,
	xiongtou : false,
	bingshijilu : false,
	yishengzhanghao : false,
	yishengxingming : false,
	userid : false,
      },
      ruleForm: {
        shishengzhanghao: '',
        shishengxingming: '',
        xingbie: '',
        chushengriqi: '',
        shenfenzhenghao: '',
        xueyuan: '',
        shengao: '',
        tizhong: '',
        shili: '',
        pifu: '',
        linba: '',
        jiazhuangxian: '',
        jizhui: '',
        sizhi: '',
        guanjie: '',
        tingli: '',
        xueya: '',
        xinlv: '',
        zhuya: '',
        xinzang: '',
        xiongtou: '',
        bingshijilu: '',
        yishengzhanghao: '',
        yishengxingming: '',
        userid: '',
      },
          shishengzhanghaoOptions: [],
      rules: {
          shishengzhanghao: [
          ],
          shishengxingming: [
          ],
          xingbie: [
          ],
          chushengriqi: [
          ],
          shenfenzhenghao: [
          ],
          xueyuan: [
          ],
          shengao: [
          ],
          tizhong: [
          ],
          shili: [
          ],
          pifu: [
          ],
          linba: [
          ],
          jiazhuangxian: [
          ],
          jizhui: [
          ],
          sizhi: [
          ],
          guanjie: [
          ],
          tingli: [
          ],
          xueya: [
          ],
          xinlv: [
          ],
          zhuya: [
          ],
          xinzang: [
          ],
          xiongtou: [
          ],
          bingshijilu: [
          ],
          yishengzhanghao: [
          ],
          yishengxingming: [
          ],
          userid: [
          ],
      }
    };
  },
  props: ["parent"],
  computed: {
  },
  created() {
	this.addEditStyleChange()
	this.addEditUploadStyleChange()
  },
  methods: {
    // 下载
    download(file){
      window.open(`${file}`)
    },
    // 初始化
    init(id,type) {
      if (id) {
        this.id = id;
        this.type = type;
      }
      if(this.type=='info'||this.type=='else'){
        this.info(id);
      }else if(this.type=='cross'){
        var obj = this.$storage.getObj('crossObj');
        for (var o in obj){
          if(o=='shishengzhanghao'){
            this.ruleForm.shishengzhanghao = obj[o];
	    this.ro.shishengzhanghao = true;
            continue;
          }
          if(o=='shishengxingming'){
            this.ruleForm.shishengxingming = obj[o];
	    this.ro.shishengxingming = true;
            continue;
          }
          if(o=='xingbie'){
            this.ruleForm.xingbie = obj[o];
	    this.ro.xingbie = true;
            continue;
          }
          if(o=='chushengriqi'){
            this.ruleForm.chushengriqi = obj[o];
	    this.ro.chushengriqi = true;
            continue;
          }
          if(o=='shenfenzhenghao'){
            this.ruleForm.shenfenzhenghao = obj[o];
	    this.ro.shenfenzhenghao = true;
            continue;
          }
          if(o=='xueyuan'){
            this.ruleForm.xueyuan = obj[o];
	    this.ro.xueyuan = true;
            continue;
          }
          if(o=='shengao'){
            this.ruleForm.shengao = obj[o];
	    this.ro.shengao = true;
            continue;
          }
          if(o=='tizhong'){
            this.ruleForm.tizhong = obj[o];
	    this.ro.tizhong = true;
            continue;
          }
          if(o=='shili'){
            this.ruleForm.shili = obj[o];
	    this.ro.shili = true;
            continue;
          }
          if(o=='pifu'){
            this.ruleForm.pifu = obj[o];
	    this.ro.pifu = true;
            continue;
          }
          if(o=='linba'){
            this.ruleForm.linba = obj[o];
	    this.ro.linba = true;
            continue;
          }
          if(o=='jiazhuangxian'){
            this.ruleForm.jiazhuangxian = obj[o];
	    this.ro.jiazhuangxian = true;
            continue;
          }
          if(o=='jizhui'){
            this.ruleForm.jizhui = obj[o];
	    this.ro.jizhui = true;
            continue;
          }
          if(o=='sizhi'){
            this.ruleForm.sizhi = obj[o];
	    this.ro.sizhi = true;
            continue;
          }
          if(o=='guanjie'){
            this.ruleForm.guanjie = obj[o];
	    this.ro.guanjie = true;
            continue;
          }
          if(o=='tingli'){
            this.ruleForm.tingli = obj[o];
	    this.ro.tingli = true;
            continue;
          }
          if(o=='xueya'){
            this.ruleForm.xueya = obj[o];
	    this.ro.xueya = true;
            continue;
          }
          if(o=='xinlv'){
            this.ruleForm.xinlv = obj[o];
	    this.ro.xinlv = true;
            continue;
          }
          if(o=='zhuya'){
            this.ruleForm.zhuya = obj[o];
	    this.ro.zhuya = true;
            continue;
          }
          if(o=='xinzang'){
            this.ruleForm.xinzang = obj[o];
	    this.ro.xinzang = true;
            continue;
          }
          if(o=='xiongtou'){
            this.ruleForm.xiongtou = obj[o];
	    this.ro.xiongtou = true;
            continue;
          }
          if(o=='bingshijilu'){
            this.ruleForm.bingshijilu = obj[o];
	    this.ro.bingshijilu = true;
            continue;
          }
          if(o=='yishengzhanghao'){
            this.ruleForm.yishengzhanghao = obj[o];
	    this.ro.yishengzhanghao = true;
            continue;
          }
          if(o=='yishengxingming'){
            this.ruleForm.yishengxingming = obj[o];
	    this.ro.yishengxingming = true;
            continue;
          }
          if(o=='userid'){
            this.ruleForm.userid = obj[o];
	    this.ro.userid = true;
            continue;
          }
        }
      }
      // 获取用户信息
      this.$http({
        url: `${this.$storage.get('sessionTable')}/session`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
          var json = data.data;
		if(json.yishengzhanghao!=''&&json.yishengzhanghao){
              		this.ruleForm.yishengzhanghao = json.yishengzhanghao
		}
		if(json.yishengxingming!=''&&json.yishengxingming){
              		this.ruleForm.yishengxingming = json.yishengxingming
		}
        } else {
          this.$message.error(data.msg);
        }
      });
            this.$http({
              url: `option/shisheng/shishengzhanghao`,
              method: "get"
            }).then(({ data }) => {
              if (data && data.code === 0) {
                this.shishengzhanghaoOptions = data.data;
              } else {
                this.$message.error(data.msg);
              }
            });
    },
    // 下二随
    shishengzhanghaoChange () {
      this.$http({
        url: `follow/shisheng/shishengzhanghao?columnValue=`+ this.ruleForm.shishengzhanghao,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
              if(data.data.shishengxingming){
                this.ruleForm.shishengxingming = data.data.shishengxingming
              }
              if(data.data.xingbie){
                this.ruleForm.xingbie = data.data.xingbie
              }
              if(data.data.chushengriqi){
                this.ruleForm.chushengriqi = data.data.chushengriqi
              }
              if(data.data.shenfenzhenghao){
                this.ruleForm.shenfenzhenghao = data.data.shenfenzhenghao
              }
              if(data.data.xueyuan){
                this.ruleForm.xueyuan = data.data.xueyuan
              }
        } else {
          this.$message.error(data.msg);
        }
      });
    },
    // 多级联动参数
    info(id) {
      this.$http({
        url: `tijianbaogao/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
	//解决前台上传图片后台不显示的问题
	let reg=new RegExp('../../../upload','g')//g代表全部
        } else {
          this.$message.error(data.msg);
        }
      });
    },
    // 提交
    onSubmit() {
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}

























      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          this.$http({
            url: `tijianbaogao/${!this.ruleForm.id ? "save" : "update"}`,
            method: "post",
            data: this.ruleForm
          }).then(({ data }) => {
            if (data && data.code === 0) {
              this.$message({
                message: "操作成功",
                type: "success",
                duration: 1500,
                onClose: () => {
                  this.parent.showFlag = true;
                  this.parent.addOrUpdateFlag = false;
                  this.parent.tijianbaogaoCrossAddOrUpdateFlag = false;
                  this.parent.search();
                  this.parent.contentStyleChange();
                }
              });
            } else {
              this.$message.error(data.msg);
            }
          });
        }
      });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.tijianbaogaoCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
	addEditStyleChange() {
	  this.$nextTick(()=>{
	    // input
	    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.inputHeight
	      el.style.color = this.addEditForm.inputFontColor
	      el.style.fontSize = this.addEditForm.inputFontSize
	      el.style.borderWidth = this.addEditForm.inputBorderWidth
	      el.style.borderStyle = this.addEditForm.inputBorderStyle
	      el.style.borderColor = this.addEditForm.inputBorderColor
	      el.style.borderRadius = this.addEditForm.inputBorderRadius
	      el.style.backgroundColor = this.addEditForm.inputBgColor
	    })
	    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.inputHeight
	      el.style.color = this.addEditForm.inputLableColor
	      el.style.fontSize = this.addEditForm.inputLableFontSize
	    })
	    // select
	    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.selectHeight
	      el.style.color = this.addEditForm.selectFontColor
	      el.style.fontSize = this.addEditForm.selectFontSize
	      el.style.borderWidth = this.addEditForm.selectBorderWidth
	      el.style.borderStyle = this.addEditForm.selectBorderStyle
	      el.style.borderColor = this.addEditForm.selectBorderColor
	      el.style.borderRadius = this.addEditForm.selectBorderRadius
	      el.style.backgroundColor = this.addEditForm.selectBgColor
	    })
	    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.selectHeight
	      el.style.color = this.addEditForm.selectLableColor
	      el.style.fontSize = this.addEditForm.selectLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
	      el.style.color = this.addEditForm.selectIconFontColor
	      el.style.fontSize = this.addEditForm.selectIconFontSize
	    })
	    // date
	    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.dateHeight
	      el.style.color = this.addEditForm.dateFontColor
	      el.style.fontSize = this.addEditForm.dateFontSize
	      el.style.borderWidth = this.addEditForm.dateBorderWidth
	      el.style.borderStyle = this.addEditForm.dateBorderStyle
	      el.style.borderColor = this.addEditForm.dateBorderColor
	      el.style.borderRadius = this.addEditForm.dateBorderRadius
	      el.style.backgroundColor = this.addEditForm.dateBgColor
	    })
	    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.dateHeight
	      el.style.color = this.addEditForm.dateLableColor
	      el.style.fontSize = this.addEditForm.dateLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
	      el.style.color = this.addEditForm.dateIconFontColor
	      el.style.fontSize = this.addEditForm.dateIconFontSize
	      el.style.lineHeight = this.addEditForm.dateHeight
	    })
	    // upload
	    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
	    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
	      el.style.width = this.addEditForm.uploadHeight
	      el.style.height = this.addEditForm.uploadHeight
	      el.style.borderWidth = this.addEditForm.uploadBorderWidth
	      el.style.borderStyle = this.addEditForm.uploadBorderStyle
	      el.style.borderColor = this.addEditForm.uploadBorderColor
	      el.style.borderRadius = this.addEditForm.uploadBorderRadius
	      el.style.backgroundColor = this.addEditForm.uploadBgColor
	    })
	    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.uploadHeight
	      el.style.color = this.addEditForm.uploadLableColor
	      el.style.fontSize = this.addEditForm.uploadLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
	      el.style.color = this.addEditForm.uploadIconFontColor
	      el.style.fontSize = this.addEditForm.uploadIconFontSize
	      el.style.lineHeight = iconLineHeight
	      el.style.display = 'block'
	    })
	    // 多文本输入框
	    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
	      el.style.height = this.addEditForm.textareaHeight
	      el.style.color = this.addEditForm.textareaFontColor
	      el.style.fontSize = this.addEditForm.textareaFontSize
	      el.style.borderWidth = this.addEditForm.textareaBorderWidth
	      el.style.borderStyle = this.addEditForm.textareaBorderStyle
	      el.style.borderColor = this.addEditForm.textareaBorderColor
	      el.style.borderRadius = this.addEditForm.textareaBorderRadius
	      el.style.backgroundColor = this.addEditForm.textareaBgColor
	    })
	    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
	      // el.style.lineHeight = this.addEditForm.textareaHeight
	      el.style.color = this.addEditForm.textareaLableColor
	      el.style.fontSize = this.addEditForm.textareaLableFontSize
	    })
	    // 保存
	    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
	      el.style.width = this.addEditForm.btnSaveWidth
	      el.style.height = this.addEditForm.btnSaveHeight
	      el.style.color = this.addEditForm.btnSaveFontColor
	      el.style.fontSize = this.addEditForm.btnSaveFontSize
	      el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
	      el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
	      el.style.borderColor = this.addEditForm.btnSaveBorderColor
	      el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
	      el.style.backgroundColor = this.addEditForm.btnSaveBgColor
	    })
	    // 返回
	    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
	      el.style.width = this.addEditForm.btnCancelWidth
	      el.style.height = this.addEditForm.btnCancelHeight
	      el.style.color = this.addEditForm.btnCancelFontColor
	      el.style.fontSize = this.addEditForm.btnCancelFontSize
	      el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
	      el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
	      el.style.borderColor = this.addEditForm.btnCancelBorderColor
	      el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
	      el.style.backgroundColor = this.addEditForm.btnCancelBgColor
	    })
	  })
	},
	addEditUploadStyleChange() {
		this.$nextTick(()=>{
		  document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
			el.style.width = this.addEditForm.uploadHeight
			el.style.height = this.addEditForm.uploadHeight
			el.style.borderWidth = this.addEditForm.uploadBorderWidth
			el.style.borderStyle = this.addEditForm.uploadBorderStyle
			el.style.borderColor = this.addEditForm.uploadBorderColor
			el.style.borderRadius = this.addEditForm.uploadBorderRadius
			el.style.backgroundColor = this.addEditForm.uploadBgColor
		  })
	  })
	},
  }
};
</script>
<style lang="scss">
.editor{
  height: 500px;
  
  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
}
.btn .el-button {
  padding: 0;
}
</style>
