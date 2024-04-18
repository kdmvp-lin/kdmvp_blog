---
icon: pen-to-square
date: 2022-1-4
category:
  - 笔记
  - 计算机
tag: 
    - python
    - opencv
    
---
# 							OpenCV-Pthon

## 1.Python和opencv需要的环境

​		建议直接安装anaconda

## 2.图片读取

### 	2.1图片的展示

​	首先用python来读取一张图片

```python
import cv2
import matplotlib.pyplot as ply
import numpy as np
%matplotlib inline
img=cv2.imread('./one.png')
```

通过调用来显示图片

```python
img
```

```
array([[[255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        ...,
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255]],

       [[255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        ...,
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255]],

       [[255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        ...,
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255]],

       ...,
        [255, 255, 255],
        [255, 255, 255],
        ...,
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255]]], dtype=uint8)
```

这样就发现读取的图片是一个三维数组

但同时也可以用另外一种方法来显示图片，采用窗口的形式

```python
#图像显示创建窗口
cv2.imshow('oneimg',img)
#等待时间，也就是图片显示时间
cv2.waitKey(0)
#键盘输入就停止
cv2.destroyAllWindows()
```

如果想用实时使用这一块的功能就只需要将这一块改成函数

```python
#创建一个显示图片窗口并且键盘输入后停止的自定义函数
def cv_show(name,img):
    cv2.imshow(name,img)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
```

这样就可以使用cv_show函数显示想要读取的任何图片

### 	2.2图片的截取

#### 		2.2.1图片大小的截取

图片的截取用到的是python中的切片功能，和数组切片类似就是定义图片上的位置

```python
img3=cv2.imread('two.png')
cat=img3[50:150,50:150]
cv_show('cat',cat)
```

#### 		2.2.2图片颜色通道的截取

```python
#将img3中数据切割成三分分别对应b，g，r三个颜色通道
b,g,r=cv2.split(img3)
```

```python
#cv2中的颜色通道为bgr，因此对应的数组下标为b：0 ，g：1， r：2
img3_copy=img3.copy()
#若想查看仅在r通道下的图片颜色就把b，g通道值设置为0即可，也就是对切片操作中第三个参数进行设置
img3_copy[:,:,0]=0
img3_copy[:,:,1]=0
cv_show('R',img3_copy)
```

```python
#cv2中的颜色通道为bgr，因此对应的数组下标为b：0 ，g：1， r：2
img3_copy=img3.copy()
#若想查看仅在g通道下的图片颜色就把b，r通道值设置为0即可，也就是对切片操作中第三个参数进行设置
img3_copy[:,:,0]=0
img3_copy[:,:,2]=0
cv_show('G',img3_copy)
```

```python
#cv2中的颜色通道为bgr，因此对应的数组下标为b：0 ，g：1， r：2
img3_copy=img3.copy()
#若想查看仅在r通道下的图片颜色就把r，g通道值设置为0即可，也就是对切片操作中第三个参数进行设置
img3_copy[:,:,2]=0
img3_copy[:,:,1]=0
cv_show('B',img3_copy)
```

### 2.3图像填充

图像填充有五种方法填充的效果也不相同

```python
#首先设置四个边距要填充的距离
top,bottom,left,right=(50,50,50,50)
#方法一：BORDER_REPLICATE 复制法，也就是复制最边缘的像素
replicate=cv2.copyMakeBorder(img,top,bottom,left,right,borderType=cv2.BORDER_REPLICATE)
#方法二：BORDER_REFLECT 反射法，对图像中的像素在两边进行复制 例如fedcba|abcdefgh|hgfedcb
reflect=cv2.copyMakeBorder(img,top,bottom,left,right,borderType=cv2.BORDER_REFLECT)
#方法三：BORDER_REFLECT_101 反射发，也就是以最边缘像素为轴对称 例如dfedcb|abcdefgh|gfedcba
reflect101=cv2.copyMakeBorder(img,top,bottom,left,right,borderType=cv2.BORDER_REFLECT_101)
#方法四：BORDER_WRAP 外包装法 例如cdefgh|abcdefgh|abcdefg
wrap=cv2.copyMakeBorder(img,top,bottom,left,right,borderType=cv2.BORDER_WRAP)
#方法四：BORDER_CONSTANT 常量法，常量数值填充
constant=cv2.copyMakeBorder(img,top,bottom,left,right,borderType=cv2.BORDER_CONSTANT,value=0)
```

```python
#将这些图片进行可视化在坐标轴上
import matplotlib.pyplot as plt
plt.subplot(231),plt.imshow(img,'gray'),plt.title('original')
plt.subplot(232),plt.imshow(replicate,'gray'),plt.title('replicate')
plt.subplot(233),plt.imshow(reflect,'gray'),plt.title('reflect')
plt.subplot(234),plt.imshow(reflect101,'gray'),plt.title('reflect101')
plt.subplot(235),plt.imshow(wrap,'gray'),plt.title('wrap')
plt.subplot(236),plt.imshow(constant,'gray'),plt.title('constant')
```

![image-20220130113414325](https://cdn.jsdelivr.net/gh/kdmvp-lin/MarkdownImg/202203211945395.png)

## 3.视频读取

```python
vc=cv2.VideoCapture('./two.mp4')
```

```python
#检查是否可以正确打开
if vc.isOpened():
    open, frame=vc.read()
else:
    open=False
```

```python
#一帧帧遍历
while open:   
    #ret参数保存表示是否正确读取到帧，frame参数表示读取到帧的内容
    ret, frame=vc.read()
    if frame is None:
        break
    #如果这帧存在就进行操作，每一帧的处理相当于处理图片
    if ret==True:
        gray=cv2.cvtColor(frame,cv2.COLOR_BGR2GRAY)
        cv2.imshow('reslt',gray)
        #在一帧处理后延时一定时间再处理下一帧,按esc直接退出esc对应的ascll为27
        if cv2.waitKey(1) & 0xFF == 27:
            break
vc.release()
cv2.destroyAllWindows()
```

## 4.数值计算

数值计算中有直接相加和add函数两种他们的区别在于越界后的处理形式

```python
#如果相加越界就%256
img2=cv2.imread('./two.png')
(img2+img2)[:10,:,0]
```

```python
#越界就直接当成255
cv2.add(img2,img2)[:10,:,0]
```

## 5.图像的阈值

ret，dst=cv2.threshold(src,thresh,maxval,type)

src:输入图，只能输入单通道图像，通常来说为灰度图

dst：输出图

thresh：阈值

maxval：当像素超过或者小于阈值所赋予的值

type：二值化操作的类型，包含以下五种类型

```python
#超过阈值部分取maxval（最大值），否则取0
ret,thresh1=cv2.threshold(img,127,255,cv2.THRESH_BINARY)
#THRESH_BINARY的反转
ret,thresh2=cv2.threshold(img,127,255,cv2.THRESH_BINARY_INV)
#大于阈值部分设为阈值否则部分
ret,thresh3=cv2.threshold(img,127,255,cv2.THRESH_TRUNC)
#大于阈值部分不改变，否则设为0
ret,thresh4=cv2.threshold(img,127,255,cv2.THRESH_TOZERO)
#THRESH_TOZERO的反转
ret,thresh5=cv2.threshold(img,127,255,cv2.THRESH_TOZERO_INV)

titles=['img','THRESH_BINARY','THRESH_BINARY_INV','THRESH_TRUNC','THRESH_TOZERO','THRESH_TOZERO_INV']
imgs=[img,thresh1,thresh2,thresh3,thresh4,thresh5]  

for i in range(6):
    plt.subplot(2,3,i+1),plt.imshow(imgs[i],'gray')
    plt.title(titles[i])
    plt.xticks([]),plt.yticks([])
plt.show()
```

![image-20220130162527726](https://cdn.jsdelivr.net/gh/kdmvp-lin/MarkdownImg/202203211945610.png)

## 6.图像平滑处理

```python
#均值滤波
#简单的平均卷积操作
#小括号中的3，3意思为每一个3*3单位进行一次计算
blur=cv2.blur(img,(3,3))
cv2.imshow('blur',blur)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

```python
# 方框滤波
#基本和均值一样，可以选择归一化
box=cv2.boxFilter(img,-1,(3,3),normalize=True)
cv2.imshow('box',box)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

```python
# 方框滤波
#基本和均值一样，可以选择归一化,容易越界
box=cv2.boxFilter(img,-1,(3,3),normalize=False)
cv2.imshow('box',box)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

```python
#高斯滤波
#高斯模糊的卷积核里的数值是满足高斯分布，相当于更重视中间的
aussian=cv2.GaussianBlur(img,(5,5),1)
cv2.imshow('aussian',aussian)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

```python
#中值滤波
#相当于用中值代替
median=cv2.medianBlur(img,5)
cv2.imshow('median',aussian)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

## 7.形态学操作

### 7.1形态学--图像的腐蚀

当图像周围出现毛刺时就可以使用这种方法进行处理把毛刺去掉

cv2.erode(src, kernel, iteration)

参数说明：src表示的是输入图片，kernel表示的是方框的大小，iteration表示迭代的次数

> 注：下面用到的ones函数的用法
>
> numpy.ones(shape, dtype=None,order='C', *****,like=None)
>
> shape参数：表示生成形状例如（5）那就是一维数组相当于[1,1,1,1,1]而（5，5）就是生成都为1的五行五列的二维数组
>
> dtype参数：数组所需的数据类型，例如[`numpy.int8`](https://numpy.org/doc/stable/reference/arrays.scalars.html#numpy.int8). 默认为 [`numpy.float64`](https://numpy.org/doc/stable/reference/arrays.scalars.html#numpy.float64)。
>
> order参数：是否在内存中以行优先（C 风格）或列优先（Fortran 风格）的顺序存储多维数据
>
> like参数：引用对象以允许创建不是 NumPy 数组的数组。如果传入的类数组 as`like`支持`__array_function__`协议，则结果将由它定义。在这种情况下，它确保创建一个与通过此参数传入的对象兼容的数组对象。
>
> *版本 1.20.0 中的新功能。*

```python
img=cv2.imread('./dige.png')
cv2.imshow('img',img)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

```python
kernel=np.ones((5,5),np.uint8)
erosion=cv2.erode(img,kernel,iterations=1)
cv2.imshow('erosion',erosion)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

不同的腐蚀程度也让图像的腐蚀结果不相同

```python
pie=cv2.imread('./pie.png')
cv2.imshow('pie',pie)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

```python

kernel=np.ones((30,30),np.uint8)
#第三个参数表示腐蚀的程度
erosion_1=cv2.erode(pie,kernel,iterations=1)
erosion_2=cv2.erode(pie,kernel,iterations=2)
erosion_3=cv2.erode(pie,kernel,iterations=3)
#将三次不同腐蚀程度放在一起做对比
res=np.hstack((erosion_1,erosion_2,erosion_3))
cv2.imshow('res',res)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

### 7.2形态学--膨胀操作

一般在对图像进行腐蚀操作后图形会受到一定的破坏，比如瘦一圈这时就可以使用膨胀操作对破坏进行还原

cv2.dilate(src, kernel, iteration)

参数说明：src表示的是输入图片，kernel表示的是方框的大小，iteration表示迭代的次数

```python
img=cv2.imread('./dige.png')
cv2.imshow('img',img)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

```python
#先对图像进行腐蚀
kernel=np.ones((5,5),np.uint8)
erosion=cv2.erode(img,kernel,iterations=1)
cv2.imshow('erosion',erosion)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

```python
kernel=np.ones((5,5),np.uint8)
erosion=cv2.dilate(erosion,kernel,iterations=1)
cv2.imshow('erosion',erosion)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

将不同膨胀程度的图像放在一起对比更加明显

```python
pie=cv2.imread('./pie.png')
kernel=np.ones((30,30),np.uint8)
#第三个参数表示膨胀
erosion_1=cv2.dilate(pie,kernel,iterations=1)
erosion_2=cv2.dilate(pie,kernel,iterations=2)
erosion_3=cv2.dilate(pie,kernel,iterations=3)
#将三次不同膨胀度放在一起做对比
res=np.hstack((erosion_1,erosion_2,erosion_3))
cv2.imshow('res',res)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

### 7.3开运算和闭运算

```python
#开运算：先腐蚀再膨胀
img=cv2.imread('./dige.png')
kernel=np.ones((5,5),np.uint8)
#第二个参数控制这个运算是开运算还是闭运算
opening=cv2.morphologyEx(img,cv2.MORPH_OPEN,kernel)
cv2.imshow('opening',opening)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

```python
#闭运算：先膨胀再腐蚀
img=cv2.imread('./dige.png')
kernel=np.ones((5,5),np.uint8)
#第二个参数控制这个运算是开运算还是闭运算
closing=cv2.morphologyEx(img,cv2.MORPH_CLOSE,kernel)
cv2.imshow('closing',closing)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

### 7.4梯度运算

```python
#梯度运算=膨胀-腐蚀
#首先先让膨胀的和腐蚀的图像进行对比
pie=cv2.imread('./pie.png')
kernel=np.ones((7,7),np.uint8)
dilate=cv2.dilate(pie,kernel,iterations=5)
erosion=cv2.erode(pie,kernel,iterations=5)
res=np.hstack((dilate,erosion))
cv2.imshow('res',res)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

```python
gradient=cv2.morphologyEx(pie,cv2.MORPH_GRADIENT,kernel)
cv2.imshow('gradient',gradient)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

### 7.5礼帽与黑帽

```python
#礼帽=原始输入-开运算结果
img=cv2.imread('./dige.png')
kernel=np.ones((5,5),np.uint8)
tophat=cv2.morphologyEx(img,cv2.MORPH_TOPHAT,kernel)
cv2.imshow('tophat',tophat)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

```python
#黑帽=闭运算-原始输入
img=cv2.imread('./dige.png')
blackhat=cv2.morphologyEx(img,cv2.MORPH_BLACKHAT,kernel)
cv2.imshow('blackhat',blackhat)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

## 8.梯度运算

### 	8.1sobel算子

函数cv2.Sobel(src, ddepth, dx, dy[, ksize[, [scale](https://so.csdn.net/so/search?q=scale&spm=1001.2101.3001.7020)[, delta[, borderType]]]])

参数：

src：输入图像
ddepth: 输出图像的深度（可以理解为数据类型），-1表示与原图像相同的深度
dx,dy:当组合为dx=1,dy=0时求x方向的一阶导数，当组合为dx=0,dy=1时求y方向的一阶导数（如果同时为1，通常得不到想要的结果）
ksize:（可选参数）Sobel算子的大小，必须是1,3,5或者7,默认为3。求X方向和Y方向一阶导数时，卷积核分别为：

![image-20220131163052219](https://cdn.jsdelivr.net/gh/kdmvp-lin/MarkdownImg/202203211945457.png)

scale:（可选参数）将梯度计算得到的数值放大的比例系数，效果通常使梯度图更亮，默认为1
delta:（可选参数）在将目标图像存储进多维数组前，可以将每个像素值增加delta，默认为0
borderType:（可选参数）决定图像在进行滤波操作（卷积）时边沿像素的处理方式，默认为BORDER_DEFAULT

> ## cv2.addWeighted()
>
> addWeighted()函数是将两张相同大小，相同类型的图片（叠加）线性融合的函数，可以实现图片的特效。
>
> ```python
> cv2.addWeighted(InputArray src1, double alpha, InputArray src2, double beta, double gamma, OutputArray dst, int dtype=-1)
> ```
>
>src1 ：	需要加权的第一个数组，常常填一个Mat
> alpha ：	第一个数组的权重
> src2 ：	第二个数组，需要和第一个数组拥有相同的尺寸和通道数
> beta ：	第二个数组的权重值，值为1-alpha
> gamma ：	一个加到权重总和上的标量值，可以理解为加权和后的图像的偏移量
> dst ：	输出的数组，和输入的两个数组拥有相同的尺寸和通道数。dst = src1[I] * alpha + src2[I] * beta + gamma
> dtype ：	可选，输出阵列的深度，有默认值-1。当两个输入数组具有相同深度时，这个参数设置为-1（默认值），即等同于src1.depth()。

```python
pie=cv2.imread('./pie.png')
cv2.imshow('pie',pie)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

```python
def cv_show(name,img):
    cv2.imshow(name,img)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
```

```python
#第二个参数写法可以让数值带负数
sobelx=cv2.Sobel(pie,cv2.CV_64F,1,0,ksize=3)
cv_show('sobelx',sobelx)
```

```python
#先进行x轴处理
sobelx=cv2.Sobel(pie,cv2.CV_64F,1,0,ksize=3)
#取绝对值才能让图像完整
sobelx=cv2.convertScaleAbs(sobelx)
cv_show('sobelx',sobelx)
```

```python
#再进行y轴处理
sobely=cv2.Sobel(pie,cv2.CV_64F,0,1,ksize=3)
sobely=cv2.convertScaleAbs(sobely)
cv_show('sobely',sobely)
```

```python
#再进行求和
sobelxy=cv2.addWeighted(sobelx,0.5,sobely,0.5,0)
cv_show('sobelxy',sobelxy)
```

不建议直接在前面Sobel中xy值全部设置为1这样效果不如分别求出后再相加的好

### 8.2Scharr算子

在离散的空间上，有很多方法可以用来计算近似导数，在使用 3×3 的 Sobel 算子时，可能计算结果并不太精准。[OpenCV](https://so.csdn.net/so/search?q=OpenCV&spm=1001.2101.3001.7020) 提供了 Scharr 算子，该算子具有和 Sobel 算子同样的速度，且精度更高。可以将 Scharr 算子看作对 Sobel 算子的改进，其核通常为：

![image-20220201152010926](https://cdn.jsdelivr.net/gh/kdmvp-lin/MarkdownImg/202203211946257.png)

dst = cv2.Scharr( src, ddepth, dx, dy[, scale[, delta[, borderType]]] )

 dst ：代表输出图像。
 src： 代表原始图像。
 ddepth ：代表输出图像深度。该值与函数 cv2.Sobel()中的参数 ddepth 的含义相同。
 dx ：代表 x 方向上的导数阶数。
dy： 代表 y 方向上的导数阶数。
 scale ：代表计算导数值时的缩放因子，该项是可选项，默认值是 1，表示没有缩放。
 delta ：代表加到目标图像上的亮度值，该项是可选项，默认值为 0。
 borderType ：代表边界样式

```python
scharrx=cv2.Scharr(pie,cv2.CV_64F,1,0)
scharry=cv2.Scharr(pie,cv2.CV_64F,0,1)
scharrx=cv2.convertScaleAbs(scharrx)
scharry=cv2.convertScaleAbs(scharry)
scharrxy=cv2.addWeighted(scharrx,0.5,scharry,0.5,0)
cv_show('sobelxy',scharrxy)
```



### 8.3laplacian算子

![image-20220201153131991](https://cdn.jsdelivr.net/gh/kdmvp-lin/MarkdownImg/202203211946952.png)

dst = cv2.Laplacian(src, ddepth[, dst[, ksize[, scale[, delta[, borderType]]]]])

 dst ：代表输出图像。
 src： 代表原始图像。
 ddepth ：代表输出图像深度。该值与函数 cv2.Sobel()中的参数 ddepth 的含义相同。
 dx ：代表 x 方向上的导数阶数。
dy： 代表 y 方向上的导数阶数。
 scale ：代表计算导数值时的缩放因子，该项是可选项，默认值是 1，表示没有缩放。
 delta ：代表加到目标图像上的亮度值，该项是可选项，默认值为 0。
 borderType ：代表边界样式

```python
#因为算法的差异所以在laplacian算子中并不用涉及到两个方向分别求结果直接使用即可
laplacian=cv2.Laplacian(pie,cv2.CV_64F)
laplacian=cv2.convertScaleAbs(laplacian)
cv_show('sobelxy',laplacian)
```

```python
#对比三个算子的效果
res=np.hstack((sobelxy,scharrxy,laplacian))
cv_show('res',res)
```

图像处理前：

![image-20220201154518804](https://cdn.jsdelivr.net/gh/kdmvp-lin/MarkdownImg/202203211946716.png)

图像分别经过三种算子处理：

![image-20220201154443258](https://cdn.jsdelivr.net/gh/kdmvp-lin/MarkdownImg/202203211946761.png)

## 9.Canny边缘检测

Canny边缘检测算法可以分为以下5个步骤：

- 应用高斯滤波来平滑图像，目的是去除噪声
- 找寻图像的强度梯度（intensity gradients）
- 应用非最大抑制（non-maximum suppression）技术来消除边误检（本来不是但检测出来是）
- 应用双阈值的方法来决定可能的（潜在的）边界
- 利用滞后技术来跟踪边界

Canny边缘检测的公式推导：

​	（1）高斯滤波：对图像进行平滑处理

![image-20220201155513905](https://cdn.jsdelivr.net/gh/kdmvp-lin/MarkdownImg/202203211946917.png)

（2）计算梯度幅度和方向（采用Sobel算子）

![image-20220201155541573](https://cdn.jsdelivr.net/gh/kdmvp-lin/MarkdownImg/202203211946852.png)



（3）非极大值抑制

![image-20220201155636845](https://cdn.jsdelivr.net/gh/kdmvp-lin/MarkdownImg/202203211946633.png)

![image-20220201155725707](https://cdn.jsdelivr.net/gh/kdmvp-lin/MarkdownImg/202203211946337.png)

（4）双阈值检测

![image-20220201155741900](https://cdn.jsdelivr.net/gh/kdmvp-lin/MarkdownImg/202203211946316.png)

cv2.Canny(image, threshold1, threashold2)

参数：

- image : 原始图像
- threshold1 : 阈值1 (minVal)
- threshold2 : 阈值2 (maxVal)

其中较大的阈值2用于检测图像中明显的边缘，但一般情况下检测的效果不会那么完美，[边缘检测](https://so.csdn.net/so/search?q=边缘检测&spm=1001.2101.3001.7020)出来是断断续续的。所以这时候用较小的第一个阈值用于将这些间断的边缘连接起来。

```python
#首先获取一个灰度图
img=cv2.imread('./img/ironman.png',cv2.IMREAD_GRAYSCALE)
#第二个和第三个参数分别为最大和最小的阈值，第二个参数约小连接度越高，第三个参数约大边缘细节越少
v1=cv2.Canny(img,300,700)
v2=cv2.Canny(img,50,100)
res=np.hstack((v1,v2))
cv_show('res',res)
```

## 10.图像金字塔

### 	10.1高斯金字塔

```python
img=cv2.imread('./img/ironman.png')
cv_show('img',img)
img.shape
```

```python
#结果
(523, 393, 3)
```



#### 		向下采样:

原理：先对图像做高斯平滑，然后删除图像的偶数行和偶数列，即将图像在x和y方向均减少一半，最后的图像为原来图像的四分之一

![image-20220201172749432](https://cdn.jsdelivr.net/gh/kdmvp-lin/MarkdownImg/202203211946669.png)

```python
#向下采样
down=cv2.pyrDown(img)
cv_show('down',down)
down.shape
```

```python
#结果
(262, 197, 3)
```

#### 		向上采样:

原理：将图像的行和列，间隔的插入零，最后做一个高斯模糊

![image-20220201172830307](https://cdn.jsdelivr.net/gh/kdmvp-lin/MarkdownImg/202203211946766.png)

```python
#向上采样
up=cv2.pyrUp(img)
cv_show('up',up)
up.shape
```

```python
#结果
(1046, 786, 3)
```

因此如果将一个图片向上采样后再向下采样最终图片结果是和原图片不一样，因为向上采样过程中会自己填充0进去而向下采样则会去除掉一部分图片原有的信息

### 10.2拉普拉斯金字塔

公式：

![image-20220201173406558](https://cdn.jsdelivr.net/gh/kdmvp-lin/MarkdownImg/202203211946224.png)

> G为原始图像

![image-20220201173626452](https://cdn.jsdelivr.net/gh/kdmvp-lin/MarkdownImg/202203211946872.png)

```python
down=cv2.pyrDown(img)
down_up=cv2.pyrUp(down)
L=img-down_up
cv_show('L',L)
```

## 11.图像轮廓

cv2.findContours(image, mode, method, contours=None, hierarchy=None, offset=None)

参数	描述	
image	寻找轮廓的图像，注意输入的图片必须为二值图片。若输入的图片为彩色图片，必须先进行灰度化和二值化	

mode	轮廓的检索模式，有4种
method	轮廓的近似办法，有4种
contours	使用findContours检测到的轮廓数据，每个轮廓以点向量的形式存储，point类型的vector 
hierarchy	可选层次结构信息
offset	可选轮廓偏移参数，用制定偏移量offset=(dx, dy)给出绘制轮廓的偏移量



返回值：

opencv2返回两个值：一个是轮廓本身**contours**，还有一个是每条轮廓对应的属性**hierarchy**。

opencv3返回三个值：img, countours, hierarchy

> mode	描述
>
> cv2.RETR_EXTERNAL	只检测外轮廓
>  cv2.RETR_LIST	提取所有轮廓，并放置在list中，检测的轮廓不建立等级关系 
> cv2.RETR_CCOMP	建立两个等级的轮廓，上面的一层为外边界，里面的一层为内孔的边界信息。如果内孔内还有一个连通物体，这个物体的边界也在顶层。
>  cv2.RETR_TREE	检测所有轮廓，建立完整的层次结构，建立网状轮廓结构 （通常都用这个）
>
> 
>
> method	描述
> cv2.CHAIN_APPROX_NONE	获取每个轮廓的每个像素，相邻的两个点的像素位置差不超过1
> cv2.CHAIN_APPROX_SIMPLE	压缩水平方向，垂直方向，对角线方向的元素，值保留该方向的重点坐标，如果一个矩形轮廓只需4个点来保存轮廓信息 
> cv2.CHAIN_APPROX_TC89_L1	使用Teh-Chini chain近似算法
> cv2.CHAIN_APPROX_TC89_KCOS	使用Teh-Chini chain近似算法

```python
img=cv2.imread('./img/ironman.png')
gray=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
#使用阈值把图片变为二值图像
ret,thresh=cv2.threshold(gray,127,255,cv2.THRESH_BINARY)
cv_show('thresh',thresh)
```

```python
#取轮廓
contours,hierarchy=cv2.findContours(thresh,cv2.RETR_TREE,cv2.CHAIN_APPROX_NONE)

```

```python
#传入绘制图像，轮廓，轮廓索引，颜色模式，线条厚度
#注意需要copy，确保原图不变
draw_img=img.copy()
#-1就是全部轮廓 如果有多个轮廓就从0开始
res=cv2.drawContours(draw_img,contours,-1,(0,0,255),2)
cv_show('res',res)
```

```python
draw_img=img.copy()
res=cv2.drawContours(draw_img,contours,1,(0,0,255),2)
cv_show('res',res)
```

轮廓的特征

```python
#-1代表全部，若有多个轮廓就从0开始
cnt=contours[-1]
```

```python
#求轮廓的面积
cv2.contourArea(cnt)
```

```python
#求周长
cv2.arcLength(cnt,True)
```

近似轮廓

```python
#轮廓近似
img=cv2.imread('./img/contours.png')
gray=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
#使用阈值把图片变为二值图像
ret,thresh=cv2.threshold(gray,127,255,cv2.THRESH_BINARY)
contours,hierarchy=cv2.findContours(thresh,cv2.RETR_TREE,cv2.CHAIN_APPROX_NONE)
cnt=contours[0]
draw_img=img.copy()
res=cv2.drawContours(draw_img,[cnt],-1,(0,0,255,2))
cv_show('res',res)
```

```python
#前面乘的值越大轮廓约不准
epsilon=0.1*cv2.arcLength(cnt,True)
approx=cv2.approxPolyDP(cnt,epsilon,True)
res=cv2.drawContours(draw_img,[approx],-1,(0,0,255),2)
cv_show('res',res)
```

```python
#外接矩形
img=cv2.imread('./img/pie2.png')
gray=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
ret,thresh=cv2.threshold(gray,127,255,cv2.THRESH_BINARY)
contours,hierarchy=cv2.findContours(thresh,cv2.RETR_TREE,cv2.CHAIN_APPROX_NONE)
#先选择正确的图形来创造外接矩形
cnt=contours[1]
#直接引用矩形边框函数
x,y,w,h=cv2.boundingRect(cnt)
#画出矩形
img=cv2.rectangle(img,(x,y),(x+w,y+h),(0,255,0),2)
cv_show('img',img)
```

![image-20220203210805743](https://cdn.jsdelivr.net/gh/kdmvp-lin/MarkdownImg/202203211946817.png)

```python
area=cv2.contourArea(cnt)
x,y,w,h=cv2.boundingRect(cnt)
rect_area=w*h
extent=float(area)/rect_area
print('轮廓面积与边界矩形比',extent)
```

```python
#外接圆
img=cv2.imread('./img/chang.png')
gray=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
ret,thresh=cv2.threshold(gray,127,255,cv2.THRESH_BINARY)
contours,hierarchy=cv2.findContours(thresh,cv2.RETR_TREE,cv2.CHAIN_APPROX_NONE)
cnt=contours[1]
(x,y),radius=cv2.minEnclosingCircle(cnt)
center=(int(x),int(y))
radius=int(radius)
img=cv2.circle(img,center,radius,(0,255,0),2)
cv_show('img',img)
```

![image-20220203212014871](https://cdn.jsdelivr.net/gh/kdmvp-lin/MarkdownImg/202203211946793.png)

## 12.模板匹配

模板匹配是在一幅图像中寻找一个特定目标的方法之一，这种方法的原理非常简单，遍历图像中的每一个可能的位置，比较各处与模板是否“相似”，当相似度足够高时，就认为找到了我们的目标。[OpenCV](https://so.csdn.net/so/search?q=OpenCV&spm=1001.2101.3001.7020)提供了6种模板匹配算法：

| 匹配算法             | method              |
| -------------------- | ------------------- |
| 平方差匹配法         | CV.TM_SQDIFF        |
| 归一化平方差匹配法   | CV.TM_SQDIFF_NORMED |
| 相关匹配法           | CV.TM_CCORR         |
| 归一化相关匹配法     | CV.TM_CCORR_NORMED  |
| 相关系数匹配法       | CV.TM_CCOEFF        |
| 归一化相关系数匹配法 | CV.TM_CCOEFF_NORMED |

```python
img=cv2.imread('./img/lena.png',0)
template=cv2.imread('./img/face.png',0)
h,w=template.shape[:2]
methods=['cv2.TM_CCOEFF','cv2.TM_CCOEFF_NORMED','cv2.TM_CCORR','cv2.TM_CCORR_NORMED','cv2.TM_SQDIFF','cv2.TM_SQDIFF_NORMED']
```

```python
import matplotlib.pyplot as plt
for meth in methods:
    img2=img.copy()
    #eval() 函数用来执行一个字符串表达式，并返回表达式的值,因为在matchTemplate中字符串类型识别不出来
    method=eval(meth)
    print(method)
    res=cv2.matchTemplate(img,template,method)
    min_val,max_val,min_loc,max_loc=cv2.minMaxLoc(res)
    #在模板匹配的六种方法中TM_SQDIFF , TM_SQDIFF_NORMED这两种方法是取最小值其他都取最大值
    #在这里先确定左上角左边
    if method in [cv2.TM_SQDIFF,cv2.TM_SQDIFF_NORMED]:
        top_left=min_loc
    else:
        top_left=max_loc
    #通过左上角坐标算出右下角坐标
    bottom_right=(top_left[0]+w,top_left[1]+h)
    #将匹配出来的部分用rectangle函数在图片中画出来
    cv2.rectangle(img2,top_left,bottom_right,255,2)

    plt.subplot(121),plt.imshow(res,cmap='gray')
    plt.xticks([]),plt.yticks([]) #隐藏坐标轴
    plt.subplot(122),plt.imshow(img2,cmap='gray')
    plt.xticks([]),plt.yticks([])
    plt.suptitle(meth)
    plt.show()
```

