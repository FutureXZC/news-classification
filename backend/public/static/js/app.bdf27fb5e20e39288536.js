webpackJsonp([1],{EPCM:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),o=s("zL8q"),l=s.n(o),a=(s("tvR6"),s("/ocq")),i=s("mvHQ"),r=s.n(i);function c(e){return fetch("http://localhost:3000/process/cls",{method:"post",body:r()(e),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()})}var u={data:function(){return{fileList:[],timeStamp:"",percent:0,processMsg:"正在上传的新闻文件格式...",activeName:"multi",show:!1,singleLoading:!1,isDisabled:!1,form:{title:"",content:"",result:"待分析"},categories:{0:"财经",1:"房产",2:"教育",3:"科技",4:"军事",5:"汽车",6:"体育",7:"游戏",8:"娱乐",9:"其他"},tableData:[{no:1,channelName:"",title:"空军航空兵某旅组织青年飞行员开展现地教学活动",content:"“常香玉老前辈，我们是人民空军飞行员。今天来这里参观学习，特意带来了一架歼-20战斗机模型，向您报告！”近日，空军航空兵某旅组织歼-20试飞员李刚等一批青年飞行员，走进驻地某博物馆寻初心、话传承\t博物馆的醒目位置，悬挂着“人民艺术家”、著名豫剧表演艺术家常香玉的两幅挂像。其中一幅的画面中，常香玉手捧一架米格-15战斗机模型。据介绍，这一米格-15战斗机模型，是由一级战斗英雄王海在抗美援朝作战中击落敌机的残骸制作而成，由空军部队赠予常香玉，表达对她当年为志愿军空军捐献战斗机的感激之情。\t飞行员们被军民鱼水情深深打动。在常香玉的挂像前，青年飞行员刘洪江代表战友们深情告白：“新时代的人民空军，已经装备了国产新一代隐身战斗机歼-20。您当年为志愿军空军捐献米格-15战斗机的事迹，人民空军一代代飞行员铭记不忘。我们一定刻苦训练、建功蓝天、保卫祖国！”\t“谢谢您，老前辈！”牛年春节，在抗美援朝战场击落击伤9架敌机的王海老英雄，当选“感动中国2020年度人物”。人们在整理历史资料时，发现了常香玉到前线慰问参战官兵和战斗英雄时所拍的两张珍贵照片，一张是王海和战友们与常香玉的合影，一张是常香玉手捧米格-15战斗机模型的照片。\t常香玉的义举，让现场的飞行员们由衷敬佩。大家纷纷表示，要不负老司令员王海的期望，不负人民群众的深情厚爱。\t党史学习教育开展以来，该旅把学习教育成果转化为工作动力，飞行员们苦练精飞，多次圆满完成重大战训任务，部队战斗力稳步提升。（申进科）(责编：陈羽、任佳晖)分享让更多人看到"},{no:2,channelName:"",title:"钢铁板块年内涨超26% 多股上半年业绩亮眼",content:"今年以来，我国经济运行持续稳定恢复，钢材市场产销两旺，钢铁企业盈利明显好转。截至目前，A股钢铁板块36家上市公司已有9家发布2021年半年度业绩预告，其中8家实现预增。二级市场表现方面，上半年钢铁板块在28个申万一级行业中涨幅居前，截至6月25日收盘，钢铁板块年内涨幅达26.59%。　　6月26日，南钢股份发布业绩预增公告，预计2021年上半年实现归属于上市公司股东的净利润约为22.61亿元，同比增长约102.67%。此外，鞍钢股份预计上半年实现净利润48亿元左右，同比增长幅度为860%左右；沙钢股份预计上半年实现净利润3.6亿至5.4亿元，同比增长幅度为42.69%至114.04%；中信特钢预计上半年实现归属于上市公司股东的净利润为盈利41.3亿至42.3亿元，同比增长50.24%至53.87%。　　机构分析，今年以来，受益于下游地产、基建开工率提升，需求驱动钢铁类上市公司产销量出现较大幅度的增长。此外，供需两旺背景下，钢铁价格持续位于高位，吨钢利润处于较高水平。不过，6月中旬以来，国内钢材现货市场出现持续的震荡下跌行情。兰格钢铁网数据显示，截至6月24日，全国三级螺纹钢现货均价4880元/吨，较6月中旬下跌242元/吨；全国热轧卷板现货均价5340元/吨，较6月中旬下跌212元/吨。　　近日，中钢协副会长骆铁军表示，当前钢材市场下游需求呈现出新变化，但综合而言，今年的钢材消费总体呈增长态势，需求偏乐观。　　深港证券认为，钢铁行业需求端偏弱迹象显现，后续货币趋稳以及投资端回落或影响淡季钢材消费表现。此外，近期钢企陆续披露中报业绩，关注板材占比较高的钢企业绩持续超预期的可能性。（记者 高伟）"},{no:"...",channelName:"",title:"...",content:"..."}],rules:{title:[{required:!0,message:"请输入新闻标题",trigger:"blur"}],content:[{required:!0,message:"请选输入新闻正文内容",trigger:"blur"}]}}},methods:{handleBeforeUpload:function(e){var t=e.name.substring(e.name.lastIndexOf(".")+1).toLowerCase();return-1!==["xlsx","csv"].indexOf(t)||(this.$message.error("请上传正确格式的新闻文件！"),this.$notify({title:"支持的文件格式",message:"xlsx、csv",position:"bottom-left",duration:0}),this.resetFileListAndShow(),!1)},handleSuccess:function(e){var t=this;this.percent=20,this.processMsg="正在对数据进行分析（可能耗时较长，请稍后）...";var s=setInterval(function(){t.virtualIncrease()},1e3);c({filename:e.originalname,mode:1}).then(function(n){var o;200===n.code?(t.percent=100,t.processMsg="分析完成，即将下载结果文件！",o=e.originalname,window.location.href="http://localhost:3000/multer/download?filename="+o):t.$message.error("数据分析失败！"),clearTimeout(s),t.resetFileListAndShow()})},transHandle:function(){console.log("开始上传",this.fileList[0]),this.fileList!==[]?(this.percent=0,this.show=!0,this.isDisabled=!0,this.$refs.upload.submit()):this.$message.error("尚未上传新闻文件，无法进行分类！")},handleError:function(e,t){console.log("上传失败：",e),this.$message.error("上传失败！"),this.resetFileListAndShow()},handleChange:function(e,t){this.fileList=t.slice(-1),console.log("添加文件：",this.fileList[0])},handleSwitch:function(e,t){console.log("切换：",e.label)},submitForm:function(){var e=this;this.$refs.form.validate(function(t){t&&(e.singleLoading=!0,console.log("开始分析单条新闻..."),e.$message("新闻类别正在分析中，请稍后..."),c({title:e.form.title.replace(/[~`!@#$%^&*()\-\+\s\|\[\]\/{}<>\\.]/g,""),content:e.form.content.replace(/[~`!@#$%^&*()\-\+\s\|\[\]\/{}<>\\.]/g,""),mode:0}).then(function(t){console.log(t),200===t.code?(e.$message({message:"新闻分类成功！",type:"success"}),e.form.result=e.categories[t.msg],e.singleLoading=!1):(e.$message({message:"新闻分类失败！您的新闻标题或正文内容中可能含有非法特殊字符！",type:"error",duration:2e3}),setTimeout(function(){e.singleLoading=!1,e.form.result="待分析"},1500))}))})},resetForm:function(){this.form.title="",this.form.content="",this.form.result="待分析"},resetFileListAndShow:function(){var e=this;this.isDisabled=!1,this.fileList=[],setTimeout(function(){e.show=!1},5e3)},virtualIncrease:function(){this.percent<80?this.percent+=2:this.percent<95?this.percent+=1:this.percent<99.5&&(this.percent+=.5)},info:function(){this.$notify({title:"使用方法",dangerouslyUseHTMLString:!0,message:"<p>1、将文件拖拽到上传按钮位置，或直接点击上传按钮，上传含有新闻信息的.xlsx或.csv文件。</br>          2、点击左上方的“开始识别”按钮，稍等片刻，后台将分析文件并给出新闻分类结果，将结果保存在原文件中。</br>          3、新闻分类完成后将自动下载标记了新闻类别的文件。</br>          4、进度条将展示后台的实时进度。</p>",position:"bottom-left",duration:0})}}},p={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-container",[s("el-header",[e._v("2021中国软件杯-A7-新闻文本分类算法")]),e._v(" "),s("div",{staticClass:"tab-wrap"},[s("el-tabs",{on:{"tab-click":e.handleSwitch},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[s("el-tab-pane",{attrs:{label:"多条新闻分类",name:"multi"}},[s("el-row",{attrs:{gutter:20,type:"flex",align:"middle"}},[s("el-col",{attrs:{span:11}},[s("div",{staticClass:"translate-button"},[s("el-button",{attrs:{icon:"el-icon-info",circle:""},on:{click:function(t){return e.info()}}}),e._v(" "),s("el-button",{attrs:{type:"primary",icon:"el-icon-edit",plain:"",disabled:e.isDisabled},on:{click:e.transHandle}},[e._v("开始识别")])],1)]),e._v(" "),s("el-col",{attrs:{span:11}},[s("el-alert",{attrs:{title:"提交的含有多条新闻的表格文件格式样例：",description:"文件的第一行为表头，第二行起才是待分析的数据。“编号”是新闻条目的编号；“chanelName”上传时应放空，分析结束后会在该栏填入对应的分类结果；“title”是新闻的标题；“content”是新闻的正文内容。",type:"info",closable:!1}})],1)],1),e._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:11}},[s("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{drag:"",action:"http://127.0.0.1:3000/multer/upload","file-list":e.fileList,multiple:!1,"before-upload":e.handleBeforeUpload,"on-success":e.handleSuccess,"on-error":e.handleError,"on-change":e.handleChange,"auto-upload":!1,disabled:e.isDisabled}},[s("i",{staticClass:"el-icon-upload"}),e._v(" "),s("div",{staticClass:"el-upload__text"},[e._v("\n                将.xlsx/.csv文件拖到此处，或"),s("em",[e._v("点击上传")])])]),e._v(" "),s("transition",{attrs:{name:"el-fade-in-linear"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"transition-box"},[s("el-progress",{attrs:{"text-inside":!0,"stroke-width":26,percentage:e.percent}}),e._v(" "),s("div",{attrs:{id:"progress-bar"}},[e._v(e._s(e.processMsg))])],1)])],1),e._v(" "),s("el-col",{attrs:{span:11}},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[s("el-table-column",{attrs:{prop:"no",label:"编号",width:"50"}}),e._v(" "),s("el-table-column",{attrs:{prop:"channelName",label:"channelName",width:"120"}}),e._v(" "),s("el-table-column",{attrs:{prop:"title",label:"title","show-overflow-tooltip":!0}}),e._v(" "),s("el-table-column",{attrs:{prop:"content",label:"content","show-overflow-tooltip":!0}})],1)],1)],1)],1),e._v(" "),s("el-tab-pane",{attrs:{label:"单条新闻分类",name:"single"}},[s("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.singleLoading,expression:"singleLoading"}],ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:16}},[s("el-form-item",{attrs:{label:"新闻标题",prop:"title"}},[s("el-input",{model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1)],1)],1),e._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:16}},[s("el-form-item",{attrs:{label:"新闻内容",prop:"content"}},[s("el-input",{attrs:{type:"textarea",rows:15},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1)],1)],1),e._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:4}},[s("el-form-item",{attrs:{label:"分类结果"}},[s("el-tag",[e._v(e._s(e.form.result))])],1)],1)],1),e._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:11}},[s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("开始分析")]),e._v(" "),s("el-button",{on:{click:e.resetForm}},[e._v("重置")])],1)],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var m=s("VU/8")(u,p,!1,function(e){s("EPCM")},null,null).exports;n.default.use(a.a);var d=new a.a({routes:[{path:"/",redirect:"/cls"},{path:"/cls",name:"Classification",component:m}]}),f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var h=s("VU/8")({name:"App"},f,!1,function(e){s("ymcE")},null,null).exports;n.default.config.productionTip=!1,n.default.use(l.a),new n.default({el:"#app",router:d,components:{App:h},template:"<App/>"})},tvR6:function(e,t){},ymcE:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.bdf27fb5e20e39288536.js.map