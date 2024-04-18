# 1.Redis

## 1.1 五个基本类型

- String（字符串）
	应用场景：共享session、分布式锁，计数器、限流
- Hash（哈希）
	应用场景：缓存用户信息
- List（列表）
	应用场景：消息队列，文章列表
- Set（集合）
	应用场景：用户标签,生成随机数抽奖、社交需求
- zset（有序集合）
	应用场景：排行榜，社交需求（如用户点赞）

## 1.2速度快的原因
### 1.2.1基于内存存储
  基于内存实现的数据库，省去I/O的消耗
  （redis可以持久化防止数据丢失）
### 1.2.2高效的数据结构
Redis 作为 K-V 型内存数据库，所有的键值就是用字典来存储，事件复杂度为O（1）

+ 字符串不是传统的char[]而是SDS简单动态字符串
+ 有序集合采用的是跳跃表
### 1.2.3合理的数据编码
每种基本类型，可能对多种数据结构，因此针对每个存储值不同编码方式也不同

### 1.2.4合理的线程模型
多路I/O复用，一个线程可以监视多个文件句柄

### 1.2.5虚拟内存机制

暂时把不经常访问的数据(冷数据)从内存交换到磁盘中


## 1.3缓存穿透问题
下面是redis读取数据的流程

![[Pasted image 20231009154301.png]]
缓存穿透就是说，查询一个一定不存在的数据，那么都是需要穿透到数据库中去查找，这样就进而给数据库带来压力。

原因：业务设计不合理、非法假数据的请求
解决方法：在API入口，对参数进行校验，过滤非法值

## 1.4缓存雪崩

缓存中数据大批量到过期时间，而查询数据量巨大，请求都直接访问数据库，引起数据库压力过大甚至down机

解决方法：可通过均匀设置过期时间解决，即让过期时间相对离散一点。如采用一个较大固定值+一个较小的随机值。或者采用redis集群

## 1.5缓存击穿问题
指热点key在某个时间点过期的时候，而恰好在这个时间点对这个Key有大量的并发请求过来，从而大量的请求打到db

缓存雪奔是指数据库压力过大甚至down机，缓存击穿只是大量并发请求到了DB数据库层面。可以认为击穿是缓存雪奔的一个子集
解决方法：热点数据快要过期时，异步线程去更新和设置过期时间。

## 1.6redis持久化
### 1.6.1RDB
把内存数据以快照的形式保存到磁盘上

RDB持久化，是指在指定的时间间隔内，执行指定次数的写操作，将内存中的数据集快照写入磁盘中，它是Redis默认的持久化方式。执行完操作后，在指定目录下会生成一个`dump.rdb`文件，Redis 重启的时候，通过加载`dump.rdb`文件来恢复数据。

**RDB 的优点**

- 适合大规模的数据恢复场景，如备份，全量复制等

**RDB缺点**

- 没办法做到实时持久化/秒级持久化。
- 新老版本存在RDB格式兼容问题

### 1.6.2AOF
采用日志的形式来记录每个写操作，追加到文件中，重启时再重新执行AOF文件中的命令来恢复数据。它主要解决数据持久化的实时性问题。

**AOF的优点**

- 数据的一致性和完整性更高

**AOF的缺点**

- AOF记录的内容越多，文件越大，数据恢复变慢。


# 2.消息队列
## 2.1什么是消息队列

消息队列理解为一个**使用队列来通信**的组件。它的本质，就是个**转发器**，包含**发消息、存消息、消费消息**的过程。最简单的消息队列模型如下：
![[Pasted image 20231009160025.png]]
## 2.2为什么使用消息队列
+  应用解耦
	应用场景：下单扣库存，用户下单后，订单系统去通知库存系统扣减。传统的做法就是订单系统直接调用库存系统,如果库存系统无法访问，下单就会失败，订单和库存系统存在耦合关系。如果中间加了一个消息队列，订单系统只需要把把订单存到队列中就已经下单成功，如果库存系统坏了也没关系，等修复完再订阅数据。
	![[Pasted image 20231009160745.png]]
+ 流量削峰
	秒杀系统每秒最多可以处理`2k`个请求，每秒却有`5k`的请求过来，可以引入消息队列，秒杀系统每秒从消息队列拉2k请求处理就行，防止消息积压问题，可以为消息队列设置一个最大长度
+  异步处理
	注册信息入库是30ms，发短信、邮件也是30ms，三个动作**串行执行**的话，会比较耗时，响应90ms，采用并行执行的方式，可以减少响应时间。注册信息入库后，同时异步发短信和邮件。如何实现异步呢，用消息队列即可，就是说，注册信息入库成功后，写入到消息队列（这个一般比较快，如只需要3ms），然后异步读取发邮件和短信。
	![[Pasted image 20231009161639.png]]
	![[Pasted image 20231009161648.png]]
+ 消息通讯
	消息队列内置了高效的通信机制，可用于消息通讯。如实现点对点消息队列、聊天室等。
+ 远程调用

##  2.3消息队列如何保证消息的顺序性

假设生产者先后产生了两条消息，分别是下单消息（M1），付款消息（M2），M1比M2先产生，由于网络延迟又可能M2比M1先到，可以将M1、M2发送到同一个Server上，当M1发送完收到ack后，M2再发送