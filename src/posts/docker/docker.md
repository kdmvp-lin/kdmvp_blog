---
icon: pen-to-square
date: 2022-4-13
category:
  - 笔记
  - 计算机
tag: 
    - docker
    - 容器
    - 分布式
    
---
# Docker

## 1.简介

Docker 是一个应用打包、分发、部署的工具，可以虚拟软件运行的环境

**打包**：就是把你软件运行所需的依赖、第三方库、软件打包到一起，变成一个安装包  
**分发**：你可以把你打包好的“安装包”上传到一个镜像仓库，其他人可以非常方便的获取和安装  
**部署**：拿着“安装包”就可以一个命令运行起来你的应用，自动模拟出一摸一样的运行环境，不管是在 Windows/Mac/Linux。

### 1.1优点

#### 1.1.1相对于虚拟机优势

| 特性  | 普通虚拟机                                        | Docker                          |
| --- | -------------------------------------------- | ------------------------------- |
| 跨平台 | 通常只能在桌面级系统运行，例如 Windows/Mac，无法在不带图形界面的服务器上运行 | 支持的系统非常多，各类 windows 和 Linux 都支持 |
| 性能  | 性能损耗大，内存占用高，因为是把整个完整系统都虚拟出来了                 | 性能好，只虚拟软件所需运行环境，最大化减少没用的配置      |
| 自动化 | 需要手动安装所有东西                                   | 一个命令就可以自动部署好所需环境                |
| 稳定性 | 稳定性不高，不同系统差异大                                | 稳定性好，不同系统都一样部署方式                |

#### 1.1.2部署优势

- 可以在windows上开发，部署到linux上

- 部署方式简单只需要一个命令

- 保证在不同设备和系统上运行环境一致

- 可以让软件多个版本共存且不污染环境

- 占用内存极小

### 1.2重要概念

#### 1.2.1镜像

可以理解为软件安装包，可以方便的进行传播和安装。

#### 1.2.2容器

软件安装后的状态，每个软件运行环境都是独立的、隔离的，称之为容器。

### 1.3镜像加速源

| 镜像加速器         | 镜像加速器地址                                 |
| ------------- | --------------------------------------- |
| Docker 中国官方镜像 | https://registry.docker-cn.com          |
| DaoCloud 镜像站  | http://f1361db2.m.daocloud.io           |
| Azure 中国镜像    | https://dockerhub.azk8s.cn              |
| 科大镜像站         | https://docker.mirrors.ustc.edu.cn      |
| 阿里云           | https://<your_code>.mirror.aliyuncs.com |
| 七牛云           | https://reg-mirror.qiniu.com            |
| 网易云           | https://hub-mirror.c.163.com            |
| 腾讯云           | https://mirror.ccs.tencentyun.com       |

## 2.Docker快速安装软件

### 2.1流程

去docker网站先找到自己想要的镜像https://hub.docker.com/

1. 拉取镜像

```
docker pull

例：
docker pull centos(可以去docker)
```

2. 创建容器(运行镜像)

```
docker run

例：
docker run -d -p 6379:6379 --name redis redis:latest
```

3. 发布镜像

```
docker push

例： 
```

## 3.DockerFile

DockerFile是构建文件，定义了一切步骤，源代码

DockerImages是通过DockerFile构建生成的镜像，最终发布和运行的产品

Docker容器是镜像运行起来提供服务器

#### 3.1基础知识

1. 每个保留关键字（指令）都必须是大写字母

2. 执行从上到下的顺序

3. #表示注解

4. 每个指令都会创建提交一个新的镜像层，并提交


### 3.2DockerFile的指令

```shell
FROM            #指定基础镜像,一切从这开始（这个镜像的妈妈是谁）
MAINTAINER      #指定维护信息，姓名+邮箱（告诉别人谁负责养他）
RUN             #镜像构建的时候需要运行的命令（你想让他干啥）
ADD             #步骤，添加内容（给他点创业资金）例如：加tomcat镜像
WORKDIR         #设置当前工作目录也就是镜像目录（我是cd今天刚化了妆）
VOLUME          #挂在目录（给他一个存放行李的地方）
EXPOSE          #指定对外端口（要开的门牌号）
CMD             #指定这个容器启动的时候要运行的命令，只有最后一个会生效，可被替代
ENTRYPOINT      #指定这个容器启动的时候要运行的命令，可以追加命令
ONBUILD         #当构建一个被继承DockerFile这个时候会运行，触发指令
COPY            #类似ADD，我们文件拷贝到镜像中
ENV             #构建时候设置环境变量
```

### 3.3写DockerFile文件

例子：

```shell

# github中的centos的源文件
FROM scratch
ADD centos-7-x86_64-docker.tar.xz /

LABEL \
    org.label-schema.schema-version="1.0" \
    org.label-schema.name="CentOS Base Image" \
    org.label-schema.vendor="CentOS" \
    org.label-schema.license="GPLv2" \
    org.label-schema.build-date="20201113" \
    org.opencontainers.image.title="CentOS Base Image" \
    org.opencontainers.image.vendor="CentOS" \
    org.opencontainers.image.licenses="GPL-2.0-only" \
    org.opencontainers.image.created="2020-11-13 00:00:00+00:00"

CMD ["/bin/bash"]
```

利用原有的centos写一个自己的文件

```
FROM centos:7
MAINTAINER kdmvp<1561790129@qq.com>


ENV MYPATH /usr/local
WORKDIR $MYPATH

RUN yum -y install vim
RUN yum -y install net-tools

EXPOSE 9090

CMD echo $MYPATH
CMD echo "--------end--------"
CMD /bin/bash
```

### 3.4构建镜像

```
docker build -f 文件名 -t 镜像名：版本号 .

例：
docker build -f mydockerfile-centos -t mycentos:0.1 .
```

## 4.发布镜像

### 4.1发布到docker Hub上

- 命令行登录账号：  
  `docker login -u username`
- 新建一个tag，名字必须跟你注册账号一样  
  `docker tag test:v1 username/test:v1`
- 推上去  
  `docker push username/test:v1`
- 部署试下  
  `docker run -dp 8080:8080 username/test:v1`

### 4.2发布到阿里云等云上

+ 登录阿里云

+ 找到容器镜像服务

+ 创建命名空间

+ 创建容器镜像

## 5.docker网络

在容器之间进行通信时我们需要把他们放在同一个网络下，因此可以创建一个虚拟的网络

+ 创建一个名为`test-net`的网络：

```
docker network create 网络名

例：
docker network create test-net
```

+ 运行 Redis 在 `test-net` 网络中，别名`redis`

```
docker run -d --name 运行的镜像名 --network 网络名 --network-alias 别名 别名指向的容器
例：
docker run -d --name redis --network test-net --network-alias redis redis:latest
```

更多命令

```
docker ps 查看当前运行中的容器
docker images 查看镜像列表
docker rm container-id 删除指定 id 的容器
docker stop/start container-id 停止/启动指定 id 的容器
docker rmi image-id 删除指定 id 的镜像
docker volume ls 查看 volume 列表
docker network ls 查看网络列表
```

## 6.Docker-Compose

如果项目依赖更多的第三方软件，我们需要管理的容器就更加多，每个都要单独配置运行，指定网络。我们使用 docker-compose 把项目的多个服务集合到一起，一键运行。

### 6.1安装Docker-Compose

- 如果你是安装的桌面版 Docker，不需要额外安装，已经包含了。
- 如果是没图形界面的服务器版 Docker，你需要单独安装
- 运行`docker-compose`检查是否安装成功

Linux

安装命令

```ruby
sudo curl -L https://github.com/docker/compose/releases/download/1.21.2/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

查看安装是否成功

```undefined
docker-compose -v
```

### 6.2编写脚本

要把项目依赖的多个服务集合到一起，我们需要编写一个`docker-compose.yml`文件，描述依赖哪些服务

```
version: "3.7"                #版本

services:                    #依赖哪些服务
  app:
    build: ./                #当前目录build
    ports:                   #暴露端口
      - 80:8080
    volumes:                 #挂载目录
      - ./:/app
    environment:             #设置时区
      - TZ=Asia/Shanghai
  redis:                     
    image: redis:5.0.13    
    volumes:
      - redis:/data
    environment:
      - TZ=Asia/Shanghai

volumes:
  redis:
```

### 6.3运行

在`docker-compose.yml` 文件所在目录，执行

```
docker-compose up -d
```

### 6.4其他命令

```
停止运行：docker-compose stop
重启：docker-compose restart
重启单个服务：docker-compose restart service-name
进入容器命令行：docker-compose exec service-name sh
查看容器运行log：docker-compose logs [service-name]
```




