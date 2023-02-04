# 2021 中国软件杯-新闻分类

## 开发指导

### 模型资源下载

模型资源较大，请移步百度网盘进行下载：[下载链接](https://pan.baidu.com/s/1shZbPllnc2yJblGNebx2-w?pwd=x21y)

提取码：x21y

下载完成后，得到 `bert_trained` 文件夹，其中包含配置文件、预训练模型和分词文件。  
请将这个文件夹放入 `backend/src/bert_trained` 位置。

### Web 前端

项目热启动于 http://localhost:8080

```
cd frontend
npm install
npm run dev
```

### Web 后端

项目热启动于 http://localhost:3000

```
cd backend
npm install
npm run dev
```

## 提交格式

- \[+\]: 添加新功能
- \[!\]: 修复 bug
- \[\*\]: 常规调整与更改
