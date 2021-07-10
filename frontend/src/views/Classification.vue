<template>
  <el-container>
    <el-header>2021软件杯-新闻分类</el-header>
    <el-tabs v-model="activeName" @tab-click="handleSwitch">
      <el-tab-pane label="多条新闻分类" name="multi">
        <el-row :gutter="20">
          <el-col :span="10" :offset="1"
            ><div class="translate-button">
              <el-button icon="el-icon-info" circle @click="info()"></el-button>
              <el-button
                type="primary"
                icon="el-icon-edit"
                plain
                @click="transHandle"
                :disabled="isDisabled"
                >开始识别</el-button
              >
            </div></el-col
          >
          <el-col :span="10" :offset="2">
            <transition name="el-fade-in-linear">
              <div v-show="show" class="transition-box">
                <el-progress
                  :text-inside="true"
                  :stroke-width="26"
                  :percentage="percent"
                ></el-progress>
                <div id="progress-bar">{{ processMsg }}</div>
              </div>
            </transition>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="10" :offset="1"
            ><div>
              <el-upload
                class="upload-demo"
                ref="upload"
                drag
                action="http://127.0.0.1:3000/multer/upload"
                :multiple="false"
                :before-upload="handleBeforeUpload"
                :on-success="handleSuccess"
                :on-error="handleError"
                :on-change="handleChange"
                :auto-upload="false"
                :disabled="isDisabled"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将.xlsx/.csv文件拖到此处，或<em>点击上传</em>
                </div>
              </el-upload>
            </div></el-col
          >
          <!-- <el-col :span='14'><div>
                <el-input
                    type='textarea'
                    :rows='8'
                    placeholder='识别结果'
                    v-model='textarea'>
                </el-input>
            </div></el-col> -->
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="单条新闻分类" name="single">
        <el-form
          ref="form"
          :model="form"
          label-width="80px"
          v-loading="singleLoading"
        >
          <el-row :gutter="20">
            <el-col :span="16" :offset="1">
              <el-form-item label="新闻标题">
                <el-input v-model="form.title"></el-input> </el-form-item
            ></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="16" :offset="1">
              <el-form-item label="新闻内容">
                <el-input
                  type="textarea"
                  v-model="form.content"
                  :rows="15"
                ></el-input> </el-form-item
            ></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="4" :offset="1">
              <el-form-item label="分类结果">
                <el-tag>{{ form.result }}</el-tag>
              </el-form-item></el-col
            >
          </el-row>
          <el-row :gutter="20">
            <el-col :span="10" :offset="1">
              <el-form-item>
                <el-button type="primary" @click="submitForm"
                  >开始分析</el-button
                >
                <el-button @click="resetForm">重置</el-button>
              </el-form-item></el-col
            >
          </el-row>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </el-container>
</template>

<script>
import { cls, download } from "@/api/apis";

export default {
  data: () => ({
    file: "",
    timeStamp: "",
    percent: 0,
    processMsg: "正在上传的新闻文件格式...",
    activeName: "multi",
    show: false,
    singleLoading: false,
    isDisabled: false,
    form: {
      title: "",
      content: "",
      result: "待分析"
    },
    categories: {
      0: "财经",
      1: "房产",
      2: "教育",
      3: "科技",
      4: "军事",
      5: "汽车",
      6: "体育",
      7: "游戏",
      8: "娱乐",
      9: "其他"
    }
  }),
  methods: {
    handleBeforeUpload(file) {
      let format = file.name
        .substring(file.name.lastIndexOf(".") + 1)
        .toLowerCase();
      if (["xlsx", "csv"].indexOf(format) === -1) {
        this.$message.error("请上传正确格式的新闻文件！");
        this.$notify({
          title: "支持的文件格式",
          message: "xlsx、csv",
          position: "bottom-left",
          duration: 0
        });
        return false;
      }
      return true;
    },

    handleSuccess(file) {
      this.percent = 20;
      this.processMsg = "正在对数据进行分析（可能耗时较长，请稍后）...";
      cls({ filename: file.originalname, mode: 1 }).then(res => {
        if (res.code === 200) {
          this.percent = 100;
          this.processMsg = "分析完成，即将下载结果文件！";
          download(file.originalname);
        } else {
          this.$message.error("数据分析失败！");
        }
        this.isDisabled = false;
        this.file = "";
        setTimeout(() => {
          this.show = false;
        }, 5000);
      });
    },

    transHandle() {
      console.log("开始上传", this.file);
      if (this.file === "") {
        this.$message.error("尚未上传新闻文件，无法进行分类！");
        return;
      }
      this.percent = 0;
      this.show = true;
      this.isDisabled = true;
      this.$refs.upload.submit();
    },

    handleError(res, file) {
      console.log("上传失败：", res);
      this.$message.error("上传失败！");
    },

    handleChange(file, fileList) {
      console.log("添加文件：", file);
      this.file = file;
    },

    handleSwitch(tab, event) {
      console.log("切换：", tab.label);
    },

    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.singleLoading = true;
          console.log("开始分析单条新闻...");
          this.$message("新闻类别正在分析中，请稍后...");
          cls({
            title: this.form.title,
            content: this.form.content,
            mode: 0
          }).then(res => {
            console.log(res);
            if (res.code === 200) {
              this.$message({
                message: "新闻分类成功！",
                type: "success"
              });
              this.form.result = this.categories[res.msg];
            } else {
              this.$message.error("数据分析失败！");
              return;
            }
            this.singleLoading = false;
            setTimeout(() => {
              this.show = false;
            }, 5000);
          });
        }
      });
    },

    resetForm() {
      this.form.title = "";
      this.form.content = "";
      this.form.result = "待分析";
    },

    info() {
      this.$notify({
        title: "使用方法",
        message:
          "将文件拖拽到左侧按钮位置，或直接点击左侧按钮，上传含有新闻信息的.xlsx、.csv文件。\
                        稍等片刻，后台将分析文件并给出新闻分类结果，将结果保存在原文件中。\
                        识别完成后将自动下载标记了新闻类别的文件。\
                        进度条将展示后台的实时进度。",
        position: "bottom-left",
        duration: 0
      });
    }
  }
};
</script>

<style>
body {
  margin: 0;
}
.el-header {
  background: #3282b8;
  margin-top: 0;
  margin-bottom: 1em;
  color: #eee;
  text-align: center;
  line-height: 60px;
  font-size: 20px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
}
.el-tabs__header {
  padding-left: 50px;
  padding-right: 50px;
}
.translate-button {
  margin-bottom: 1em;
}
.upload-demo {
  text-align: center;
}
.el-upload {
  width: 100%;
  height: 180px;
}
.el-upload-dragger {
  width: 100%;
  height: 100%;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
#progress-bar {
  font-size: 12px;
  color: #606266;
}
</style>
