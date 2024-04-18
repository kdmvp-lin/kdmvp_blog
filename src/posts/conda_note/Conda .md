---
icon: pen-to-square
date: 2022-1-4
category:
  - 笔记
  - 计算机
tag: 
    - python
    - 环境
    
---
# Conda 命令

## env环境

创建环境

```
conda create --name py3.7 python=3.7
```

激活环境

```
conda activate py3.7
```

退出环境

```
conda deactivate
```

删除环境

```
conda remove --name py3.7 --all
```

查看所有环境

```
conda env list
```



## 模块

安装numpy模块

```
conda install numpy
```

查看已安装的模块

```
conda list
```

搜索模块信息

```
conda search numpy
```

删除模块

```
conda remove numpy
```

更新模块

```
conda update numpy
```

更新全部模块：

```
conda update --all
```

更新conda

```
conda update conda
```

更新python

```
conda update python
```



## 生成.condarc文件

```
conda config --set show_channel_urls yes
```



## 设置conda国内源

这俩是必须有的：

```
conda config --add channels https://mirrors.bfsu.edu.cn/anaconda/pkgs/main/

conda config --add channels https://mirrors.bfsu.edu.cn/anaconda/pkgs/free/
```

安装pytorch，你需要这个：

```
conda config --add channels https://mirrors.bfsu.edu.cn/anaconda/cloud/pytorch/
```

安装pytorch的时候，在官网复制的命令行，请去掉最后的-c pytorch，这个命令是去pytorch官网下载pytorch

查看channels

```
conda config --show channels
```

删除channels

```
conda config --remove channels
```

删除所有channels

```
conda config --remove-key --channels
```

恢复默认channels

```
conda config --remove-key channels
```

