使用 node 第三方库进行压缩/解压缩
[compressing](https://github.com/node-modules/compressing)

本工程目录如下：

├─example # 示例目录
├─node_modules
├─src
│ ├─unzip.js # 解压缩 pm2 监听 zips 中的 zip 文件发生变动后，即执行本文件进行解压缩
│ ├─zip.js # 压缩
└─zips # 接收 zip 包

在服务器上，需要使用 pm2 来守护进程。

操作如下：

1. 安装

    ```bash
    npm i pm2 -g
    ```

2. 切到本工程目录

    ```bash
    # 启动并守护目标文件
    pm2 start .\src\unzip.js --watch --ignore-watch="node_modules"
    ```

    注意本工程下所有文件改动都会被监听到，但会忽略 node_modules 下的改动。
