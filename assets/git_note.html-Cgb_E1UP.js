import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as d,f as t}from"./app-DC5CCnHn.js";const a={},n=t(`<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git"><span>git</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1.简介</span></a></h2><h3 id="_1-1集中式vs分布式" tabindex="-1"><a class="header-anchor" href="#_1-1集中式vs分布式"><span>1.1集中式vs分布式</span></a></h3><p>​ 集中式版本控制系统，版本库是集中存放在中央服务器的，而干活的时候，用的都是自己的电脑，所以要先从中央服务器取得最新的版本，然后开始干活，干完活了，再把自己的活推送给中央服务器。中央服务器就好比是一个图书馆，你要改一本书，必须先从图书馆借出来，然后回到家自己改，改完了，再放回图书馆。</p><p>​ 那分布式版本控制系统与集中式版本控制系统有何不同呢？首先，分布式版本控制系统根本没有“中央服务器”，每个人的电脑上都是一个完整的版本库，这样，你工作的时候，就不需要联网了，因为版本库就在你自己的电脑上。既然每个人电脑上都有一个完整的版本库，那多个人如何协作呢？比方说你在自己电脑上改了文件A，你的同事也在他的电脑上改了文件A，这时，你们俩之间只需把各自的修改推送给对方，就可以互相看到对方的修改了。</p><h2 id="_2-安装git" tabindex="-1"><a class="header-anchor" href="#_2-安装git"><span>2.安装git</span></a></h2><h3 id="_2-1在linux上安装git" tabindex="-1"><a class="header-anchor" href="#_2-1在linux上安装git"><span>2.1在Linux上安装Git</span></a></h3><p>​ 首先，你可以试着输入<code>git</code>，看看系统有没有安装Git：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git
The program &#39;git&#39; is currently not installed. You can install it by typing:
sudo apt-get install git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 像上面的命令，有很多Linux会友好地告诉你Git没有安装，还会告诉你如何安装Git。</p><p>如果你碰巧用Debian或Ubuntu Linux，通过一条<code>sudo apt-get install git</code>就可以直接完成Git的安装，非常简单。</p><p>老一点的Debian或Ubuntu Linux，要把命令改为<code>sudo apt-get install git-core</code>，因为以前有个软件也叫GIT（GNU Interactive Tools），结果Git就只能叫<code>git-core</code>了。由于Git名气实在太大，后来就把GNU Interactive Tools改成<code>gnuit</code>，<code>git-core</code>正式改为<code>git</code>。</p><p>如果是其他Linux版本，可以直接通过源码安装。先从Git官网下载源码，然后解压，依次输入：<code>./config</code>，<code>make</code>，<code>sudo make install</code>这几个命令安装就好了。</p><h3 id="_2-2在mac-os-x上安装git" tabindex="-1"><a class="header-anchor" href="#_2-2在mac-os-x上安装git"><span>2.2在Mac OS X上安装Git</span></a></h3><p>​ 如果你正在使用Mac做开发，有两种安装Git的方法。</p><p>一是安装homebrew，然后通过homebrew安装Git，具体方法请参考homebrew的文档：http://brew.sh/。</p><p>第二种方法更简单，也是推荐的方法，就是直接从AppStore安装Xcode，Xcode集成了Git，不过默认没有安装，你需要运行Xcode，选择菜单“Xcode”-&gt;“Preferences”，在弹出窗口中找到“Downloads”，选择“Command Line Tools”，点“Install”就可以完成安装了。</p><h3 id="_2-3在windows上安装git" tabindex="-1"><a class="header-anchor" href="#_2-3在windows上安装git"><span>2.3在Windows上安装Git</span></a></h3><p>​ 在Windows上使用Git，可以从Git官网直接，然后按默认选项安装即可。</p><p>​ 安装完成后，在开始菜单里找到“Git”-&gt;“Git Bash”，蹦出一个类似命令行窗口的东西，就说明Git安装成功！</p><p>​ 安装完成后，还需要最后一步设置，在命令行输入：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git config --global user.name &quot;Your Name&quot;
$ git config --global user.email &quot;email@example.com&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意<code>git config</code>命令的<code>--global</code>参数，用了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和Email地址。</p><h2 id="_3-创建版本库" tabindex="-1"><a class="header-anchor" href="#_3-创建版本库"><span>3.创建版本库</span></a></h2><h3 id="_3-1创建仓库" tabindex="-1"><a class="header-anchor" href="#_3-1创建仓库"><span>3.1创建仓库</span></a></h3><p>​ 版本库又名仓库，英文名<strong>repository</strong>，你可以简单理解成一个目录，这个目录里面的所有文件都可以被Git管理起来，每个文件的修改、删除，Git都能跟踪，以便任何时刻都可以追踪历史，或者在将来某个时刻可以“还原”。</p><p>所以，创建一个版本库非常简单，首先，选择一个合适的地方，创建一个空目录：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ mkdir learngit
$ cd learngit
$ pwd
/Users/michael/learngit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>pwd</code>命令用于显示当前目录。以上显示该仓库位于<code>/Users/michael/learngit</code>。</p><p>第二步，通过<code>git init</code>命令把这个目录变成Git可以管理的仓库：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git init
Initialized empty Git repository in /Users/michael/learngit/.git/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2把文件添加到版本库" tabindex="-1"><a class="header-anchor" href="#_3-2把文件添加到版本库"><span>3.2把文件添加到版本库：</span></a></h3><p>​ 首先这里再明确一下，所有的版本控制系统，其实只能跟踪文本文件的改动，比如TXT文件，网页，所有的程序代码等等，Git也不例外。版本控制系统可以告诉你每次的改动，比如在第5行加了一个单词“Linux”，在第8行删了一个单词“Windows”。而图片、视频这些二进制文件，虽然也能由版本控制系统管理，但没法跟踪文件的变化，只能把二进制文件每次改动串起来，也就是只知道图片从100KB改成了120KB，但到底改了啥，版本控制系统不知道，也没法知道。</p><p>不幸的是，Microsoft的Word格式是二进制格式，因此，版本控制系统是没法跟踪Word文件的改动的，前面我们举的例子只是为了演示，如果要真正使用版本控制系统，就要以纯文本方式编写文件。</p><p>因为文本是有编码的，比如中文有常用的GBK编码，日文有Shift_JIS编码，如果没有历史遗留问题，强烈建议使用标准的UTF-8编码，所有语言使用同一种编码，既没有冲突，又被所有平台所支持。</p><blockquote><p>注意：不要使用Windows自带的记事本编辑任何文本文件。原因是Microsoft开发记事本的团队使用了一个非常弱智的行为来保存UTF-8编码的文件，他们自作聪明地在每个文件开头添加了0xefbbbf（十六进制）的字符</p></blockquote><h3 id="_3-3编写一个readme-txt文件" tabindex="-1"><a class="header-anchor" href="#_3-3编写一个readme-txt文件"><span>3.3编写一个<code>readme.txt</code>文件</span></a></h3><p>​ 当我们要添加以下内容先在仓库的目录（或子目录）中添加一个名为readme.txt的文件，然后分为两个步骤</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Git is a version control system.
Git is free software.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 一定要放到<code>learngit</code>目录下（子目录也行），因为这是一个Git仓库，放到其他地方Git再厉害也找不到这个文件。</p><p>和把大象放到冰箱需要3步相比，把一个文件放到Git仓库只需要两步。</p><h4 id="第一步-用命令git-add告诉git-把文件添加到仓库" tabindex="-1"><a class="header-anchor" href="#第一步-用命令git-add告诉git-把文件添加到仓库"><span>第一步：用命令<code>git add</code>告诉Git，把文件添加到仓库：</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git add readme.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果要添加指定文件时应该使用以下指令</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git add 文件路径
例子：
$ git add ./readme.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第二步-用命令git-commit告诉git-把文件提交到仓库" tabindex="-1"><a class="header-anchor" href="#第二步-用命令git-commit告诉git-把文件提交到仓库"><span>第二步，用命令<code>git commit</code>告诉Git，把文件提交到仓库：</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git commit -m &quot;wrote a readme file&quot;
[master (root-commit) eaadf4e] wrote a readme file
 1 file changed, 2 insertions(+)
 create mode 100644 readme.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单解释一下<code>git commit</code>命令，<code>-m</code>后面输入的是本次提交的说明，可以输入任意内容，当然最好是有意义的，这样你就能从历史记录里方便地找到改动记录。</p><p>根据输入命令后返回的文字可知：<code>1 file changed</code>：1个文件被改动（我们新添加的readme.txt文件）；<code>2 insertions</code>：插入了两行内容（readme.txt有两行内容）</p><p>为什么Git添加文件需要<code>add</code>，<code>commit</code>一共两步呢？因为<code>commit</code>可以一次提交很多文件，所以你可以多次<code>add</code>不同的文件，比如：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git add file1.txt
$ git add file2.txt file3.txt
$ git commit -m &quot;add 3 files.&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-git的版本控制" tabindex="-1"><a class="header-anchor" href="#_4-git的版本控制"><span>4.git的版本控制</span></a></h2><p>​ 我们已经成功地添加并提交了一个readme.txt文件，现在，是时候继续工作了，于是，我们继续修改readme.txt文件，改成如下内容：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Git is a distributed version control system.
Git is free software.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，运行<code>git status</code>命令看看结果：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git status
On branch master
Changes not staged for commit:
  (use &quot;git add &lt;file&gt;...&quot; to update what will be committed)
  (use &quot;git checkout -- &lt;file&gt;...&quot; to discard changes in working directory)

	modified:   readme.txt

no changes added to commit (use &quot;git add&quot; and/or &quot;git commit -a&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git status</code>命令可以让我们时刻掌握仓库当前的状态，上面的命令输出告诉我们，<code>readme.txt</code>被修改过了，但还没有准备提交的修改。</p><p>虽然Git告诉我们<code>readme.txt</code>被修改了，但如果能看看具体修改了什么内容，自然是很好的。比如你休假两周从国外回来，第一天上班时，已经记不清上次怎么修改的<code>readme.txt</code>，所以，需要用<code>git diff</code>这个命令看看：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git diff readme.txt 
diff --git a/readme.txt b/readme.txt
index 46d49bf..9247db6 100644
--- a/readme.txt
+++ b/readme.txt
@@ -1,2 +1,2 @@
-Git is a version control system.
+Git is a distributed version control system.
 Git is free software.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git diff</code>顾名思义就是查看difference，显示的格式正是Unix通用的diff格式，可以从上面的命令输出看到，我们在第一行添加了一个<code>distributed</code>单词。</p><p>知道了对<code>readme.txt</code>作了什么修改后，再把它提交到仓库就放心多了，提交修改和提交新文件是一样的两步，第一步是<code>git add</code>：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git add readme.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同样没有任何输出。在执行第二步<code>git commit</code>之前，我们再运行<code>git status</code>看看当前仓库的状态：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git status
On branch master
Changes to be committed:
  (use &quot;git reset HEAD &lt;file&gt;...&quot; to unstage)

	modified:   readme.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git status</code>告诉我们，将要被提交的修改包括<code>readme.txt</code>，下一步，就可以放心地提交了：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git commit -m &quot;add distributed&quot;
[master e475afc] add distributed
 1 file changed, 1 insertion(+), 1 deletion(-)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提交后，我们再用<code>git status</code>命令看看仓库的当前状态：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git status
On branch master
nothing to commit, working tree clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Git告诉我们当前没有需要提交的修改，而且，工作目录是干净（working tree clean）的。</p><h3 id="_4-1版本回退" tabindex="-1"><a class="header-anchor" href="#_4-1版本回退"><span>4.1版本回退</span></a></h3><p>​ 你不断对文件进行修改，然后不断提交修改到版本库里，就好比玩RPG游戏时，每通过一关就会自动把游戏状态存盘，如果某一关没过去，你还可以选择读取前一关的状态。有些时候，在打Boss之前，你会手动存盘，以便万一打Boss失败了，可以从最近的地方重新开始。Git也是一样，每当你觉得文件修改到一定程度的时候，就可以“保存一个快照”，这个快照在Git中被称为<code>commit</code>。一旦你把文件改乱了，或者误删了文件，还可以从最近的一个<code>commit</code>恢复，然后继续工作，而不是把几个月的工作成果全部丢失。</p><h4 id="_4-1-1git-log查看版本" tabindex="-1"><a class="header-anchor" href="#_4-1-1git-log查看版本"><span>4.1.1git log查看版本</span></a></h4><p>在实际工作中，我们脑子里怎么可能记得一个几千行的文件每次都改了什么内容，不然要版本控制系统干什么。版本控制系统肯定有某个命令可以告诉我们历史记录，在Git中，我们用<code>git log</code>命令查看：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git log
commit 1094adb7b9b3807259d8cb349e7df1d4d6477073 (HEAD -&gt; master)
Author: Michael Liao &lt;askxuefeng@gmail.com&gt;
Date:   Fri May 18 21:06:15 2018 +0800

    append GPL

commit e475afc93c209a690c39c13a46716e8fa000c366
Author: Michael Liao &lt;askxuefeng@gmail.com&gt;
Date:   Fri May 18 21:03:36 2018 +0800

    add distributed

commit eaadf4e385e865d25c48e7ca9c8395c3f7dfaef0
Author: Michael Liao &lt;askxuefeng@gmail.com&gt;
Date:   Fri May 18 20:59:18 2018 +0800

    wrote a readme file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git log</code>命令显示从最近到最远的提交日志，我们可以看到3次提交，最近的一次是<code>append GPL</code>，上一次是<code>add distributed</code>，最早的一次是<code>wrote a readme file</code>。</p><h4 id="_4-1-2-pretty-oneline更加清晰" tabindex="-1"><a class="header-anchor" href="#_4-1-2-pretty-oneline更加清晰"><span>4.1.2--pretty=oneline更加清晰</span></a></h4><p>如果嫌输出信息太多，看得眼花缭乱的，可以试试加上<code>--pretty=oneline</code>参数：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git log --pretty=oneline
1094adb7b9b3807259d8cb349e7df1d4d6477073 (HEAD -&gt; master) append GPL
e475afc93c209a690c39c13a46716e8fa000c366 add distributed
eaadf4e385e865d25c48e7ca9c8395c3f7dfaef0 wrote a readme file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要友情提示的是，你看到的一大串类似<code>1094adb...</code>的是<code>commit id</code>（版本号），和SVN不一样，Git的<code>commit id</code>不是1，2，3……递增的数字，而是一个SHA1计算出来的一个非常大的数字，用十六进制表示，而且你看到的<code>commit id</code>和我的肯定不一样，以你自己的为准。为什么<code>commit id</code>需要用这么一大串数字表示呢？因为Git是分布式的版本控制系统，后面我们还要研究多人在同一个版本库里工作，如果大家都用1，2，3……作为版本号，那肯定就冲突了。</p><p>当我们准备把readme.txt回退到上一个版本</p><p>首先，Git必须知道当前版本是哪个版本，在Git中，用<code>HEAD</code>表示当前版本，也就是最新的提交<code>1094adb...</code>（注意我的提交ID和你的肯定不一样），上一个版本就是<code>HEAD^</code>，上上一个版本就是<code>HEAD^^</code>，当然往上100个版本写100个<code>^</code>比较容易数不过来，所以写成<code>HEAD~100</code>。</p><p>现在，我们要把当前版本<code>append GPL</code>回退到上一个版本<code>add distributed</code>，就可以使用<code>git reset</code>命令：</p><h4 id="_4-1-3git-reset回退到上一个版本" tabindex="-1"><a class="header-anchor" href="#_4-1-3git-reset回退到上一个版本"><span>4.1.3git reset回退到上一个版本</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git reset --hard HEAD^
HEAD is now at e475afc add distributed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git reset --hard HEAD~100
HEAD is now at e475afc add distributed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>看看<code>readme.txt</code>的内容是不是版本<code>add distributed</code>：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ cat readme.txt
Git is a distributed version control system.
Git is free software.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>果然被还原了。</p><p>还可以继续回退到上一个版本<code>wrote a readme file</code>，不过且慢，让我们用<code>git log</code>再看看现在版本库的状态：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git log
commit e475afc93c209a690c39c13a46716e8fa000c366 (HEAD -&gt; master)
Author: Michael Liao &lt;askxuefeng@gmail.com&gt;
Date:   Fri May 18 21:03:36 2018 +0800

    add distributed

commit eaadf4e385e865d25c48e7ca9c8395c3f7dfaef0
Author: Michael Liao &lt;askxuefeng@gmail.com&gt;
Date:   Fri May 18 20:59:18 2018 +0800

    wrote a readme file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新的那个版本<code>append GPL</code>已经看不到了！为了回到返回前的版本只要上面的命令行窗口还没有被关掉，你就可以顺着往上找啊找啊，找到那个<code>append GPL</code>的<code>commit id</code>是<code>1094adb...</code>，于是就可以指定回到未来的某个版本：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git reset --hard 1094a
HEAD is now at 83b0afe append GPL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Git的版本回退速度非常快，因为Git在内部有个指向当前版本的<code>HEAD</code>指针，当你回退版本的时候，Git仅仅是把HEAD从指向<code>append GPL</code>：</p><div class="language-ascii line-numbers-mode" data-ext="ascii" data-title="ascii"><pre class="language-ascii"><code>┌────┐
│HEAD│
└────┘
   │
   └──&gt; ○ append GPL
        │
        ○ add distributed
        │
        ○ wrote a readme file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>改为指向<code>add distributed</code>：</p><div class="language-ascii line-numbers-mode" data-ext="ascii" data-title="ascii"><pre class="language-ascii"><code>┌────┐
│HEAD│
└────┘
   │
   │    ○ append GPL
   │    │
   └──&gt; ○ add distributed
        │
        ○ wrote a readme file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后顺便把工作区的文件更新了。所以你让<code>HEAD</code>指向哪个版本号，你就把当前版本定位在哪。</p><h4 id="_4-1-4git-reflog用来记录你的每一次命令" tabindex="-1"><a class="header-anchor" href="#_4-1-4git-reflog用来记录你的每一次命令"><span>4.1.4<code>git reflog</code>用来记录你的每一次命令</span></a></h4><p>现在，你回退到了某个版本，关掉了电脑，第二天早上就后悔了，想恢复到新版本怎么办？找不到新版本的<code>commit id</code>怎么办？</p><p>在Git中，总是有后悔药可以吃的。当你用<code>$ git reset --hard HEAD^</code>回退到<code>add distributed</code>版本时，再想恢复到<code>append GPL</code>，就必须找到<code>append GPL</code>的commit id。Git提供了一个命令<code>git reflog</code>用来记录你的每一次命令：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git reflog
e475afc HEAD@{1}: reset: moving to HEAD^
1094adb (HEAD -&gt; master) HEAD@{2}: commit: append GPL
e475afc HEAD@{3}: commit: add distributed
eaadf4e HEAD@{4}: commit (initial): wrote a readme file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>终于舒了口气，从输出可知，<code>append GPL</code>的commit id是<code>1094adb</code></p><blockquote><p>小结：</p><ul><li><code>HEAD</code>指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令<code>git reset --hard commit_id</code>。</li><li>穿梭前，用<code>git log</code>可以查看提交历史，以便确定要回退到哪个版本。</li><li>要重返未来，用<code>git reflog</code>查看命令历史，以便确定要回到未来的哪个版本。</li></ul></blockquote><h3 id="_4-2工作区和暂存区" tabindex="-1"><a class="header-anchor" href="#_4-2工作区和暂存区"><span>4.2工作区和暂存区</span></a></h3><p>​ Git和其他版本控制系统如SVN的一个不同之处就是有暂存区的概念。</p><p>先来看名词解释。工作区（Working Directory）就是你在电脑里能看到的目录，比如我的<code>learngit</code>文件夹就是一个工作区</p><p>版本库（Repository）工作区有一个隐藏目录<code>.git</code>，这个不算工作区，而是Git的版本库。</p><p>Git的版本库里存了很多东西，其中最重要的就是称为stage（或者叫index）的暂存区，还有Git为我们自动创建的第一个分支<code>master</code>，以及指向<code>master</code>的一个指针叫<code>HEAD</code>。</p><p>第一步是用<code>git add</code>把文件添加进去，实际上就是把文件修改添加到暂存区；</p><p>第二步是用<code>git commit</code>提交更改，实际上就是把暂存区的所有内容提交到当前分支。</p><p>因为我们创建Git版本库时，Git自动为我们创建了唯一一个<code>master</code>分支，所以，现在，<code>git commit</code>就是往<code>master</code>分支上提交更改。</p><p>你可以简单理解为，需要提交的文件修改通通放到暂存区，然后，一次性提交暂存区的所有修改。</p><p>所以，<code>git add</code>命令实际上就是把要提交的所有修改放到暂存区（Stage），然后，执行<code>git commit</code>就可以一次性把暂存区的所有修改提交到分支。</p><p>一旦提交后，如果你又没有对工作区做任何修改，那么工作区就是“干净”的：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git status
On branch master
nothing to commit, working tree clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3管理修改" tabindex="-1"><a class="header-anchor" href="#_4-3管理修改"><span>4.3管理修改</span></a></h3><p>​ 如果不用<code>git add</code>到暂存区，那就不会加入到<code>commit</code>中。</p><h3 id="_4-4撤销修改" tabindex="-1"><a class="header-anchor" href="#_4-4撤销修改"><span>4.4撤销修改</span></a></h3><p>假如我们在文档中加入了一句错误的句子</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ cat readme.txt
Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.
Git tracks changes of files.
My stupid boss still prefers SVN.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>我们想撤销只需要执行git checkout命令
</code></pre><p>​ <code>git checkout -- file</code>可以丢弃工作区的修改：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git checkout -- readme.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令<code>git checkout -- readme.txt</code>意思就是，把<code>readme.txt</code>文件在工作区的修改全部撤销，这里有两种情况：</p><p>一种是<code>readme.txt</code>自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；</p><p>一种是<code>readme.txt</code>已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。</p><p>总之，就是让这个文件回到最近一次<code>git commit</code>或<code>git add</code>时的状态。</p><p>现在，看看<code>readme.txt</code>的文件内容：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ cat readme.txt
Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.
Git tracks changes of files.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git checkout -- file</code>命令中的<code>--</code>很重要，没有<code>--</code>，就变成了“切换到另一个分支”的命令，我们在后面的分支管理中会再次遇到<code>git checkout</code>命令。</p><p>但如果已经通过git add 命令添加到暂存区时</p><p>庆幸的是，在<code>commit</code>之前，你发现了这个问题。用<code>git status</code>查看一下，修改只是添加到了暂存区，还没有提交：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git status
On branch master
Changes to be committed:
  (use &quot;git reset HEAD &lt;file&gt;...&quot; to unstage)

	modified:   readme.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Git同样告诉我们，用命令<code>git reset HEAD &lt;file&gt;</code>可以把暂存区的修改撤销掉（unstage），重新放回工作区：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git reset HEAD readme.txt
Unstaged changes after reset:
M	readme.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git reset</code>命令既可以回退版本，也可以把暂存区的修改回退到工作区。当我们用<code>HEAD</code>时，表示最新的版本。</p><p>再用<code>git status</code>查看一下，现在暂存区是干净的，工作区有修改：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git status
On branch master
Changes not staged for commit:
  (use &quot;git add &lt;file&gt;...&quot; to update what will be committed)
  (use &quot;git checkout -- &lt;file&gt;...&quot; to discard changes in working directory)

	modified:   readme.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后我们就可以使用git checkout命令丢弃修改</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git checkout -- readme.txt

$ git status
On branch master
nothing to commit, working tree clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5删除文件" tabindex="-1"><a class="header-anchor" href="#_4-5删除文件"><span>4.5删除文件</span></a></h3><p>在Git中，删除也是一个修改操作，我们实战一下，先添加一个新文件<code>test.txt</code>到Git并且提交：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git add test.txt

$ git commit -m &quot;add test.txt&quot;
[master b84166e] add test.txt
 1 file changed, 1 insertion(+)
 create mode 100644 test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般情况下，你通常直接在文件管理器中把没用的文件删了，或者用<code>rm</code>命令删了：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ rm test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个时候，Git知道你删除了文件，因此，工作区和版本库就不一致了，<code>git status</code>命令会立刻告诉你哪些文件被删除了：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git status
On branch master
Changes not staged for commit:
  (use &quot;git add/rm &lt;file&gt;...&quot; to update what will be committed)
  (use &quot;git checkout -- &lt;file&gt;...&quot; to discard changes in working directory)

	deleted:    test.txt

no changes added to commit (use &quot;git add&quot; and/or &quot;git commit -a&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在你有两个选择，一是确实要从版本库中删除该文件，那就用命令<code>git rm</code>删掉，并且<code>git commit</code>：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git rm test.txt
rm &#39;test.txt&#39;

$ git commit -m &quot;remove test.txt&quot;
[master d46f35e] remove test.txt
 1 file changed, 1 deletion(-)
 delete mode 100644 test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一种情况是删错了，因为版本库里还有呢，所以可以很轻松地把误删的文件恢复到最新版本：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git checkout -- test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>git checkout</code>其实是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”。</p><blockquote><p>小结</p><p>命令<code>git rm</code>用于删除一个文件。如果一个文件已经被提交到版本库，那么你永远不用担心误删，但是要小心，你只能恢复文件到最新版本，你会丢失最近一次提交后你修改的内容。</p></blockquote><h2 id="_5-远程仓库" tabindex="-1"><a class="header-anchor" href="#_5-远程仓库"><span>5.远程仓库</span></a></h2><h3 id="_5-1绑定github仓库" tabindex="-1"><a class="header-anchor" href="#_5-1绑定github仓库"><span>5.1绑定github仓库</span></a></h3><p>​ 第1步：创建SSH Key。在用户主目录下，看看有没有.ssh目录，如果有，再看看这个目录下有没有<code>id_rsa</code>和<code>id_rsa.pub</code>这两个文件，如果已经有了，可直接跳到下一步。如果没有，打开Shell（Windows下打开Git Bash），创建SSH Key：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ ssh-keygen -t rsa -C &quot;youremail@example.com&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你需要把邮件地址换成你自己的邮件地址，然后一路回车，使用默认值即可，由于这个Key也不是用于军事目的，所以也无需设置密码。</p><p>如果一切顺利的话，可以在用户主目录里找到<code>.ssh</code>目录，里面有<code>id_rsa</code>和<code>id_rsa.pub</code>两个文件，这两个就是SSH Key的秘钥对，<code>id_rsa</code>是私钥，不能泄露出去，<code>id_rsa.pub</code>是公钥，可以放心地告诉任何人。</p><p>第2步：登陆GitHub，打开“Account settings”，“SSH Keys”页面：</p><p>然后，点“Add SSH Key”，填上任意Title，在Key文本框里粘贴<code>id_rsa.pub</code>文件的内容：</p><img src="https://www.liaoxuefeng.com/files/attachments/919021379029408/0" alt="github-addkey-1" style="zoom:150%;"><p>点“Add Key”，你就应该看到已经添加的Key：</p><img src="https://www.liaoxuefeng.com/files/attachments/919021395420160/0" alt="github-addkey-2" style="zoom:150%;"><p>为什么GitHub需要SSH Key呢？因为GitHub需要识别出你推送的提交确实是你推送的，而不是别人冒充的，而Git支持SSH协议，所以，GitHub只要知道了你的公钥，就可以确认只有你自己才能推送。</p><p>当然，GitHub允许你添加多个Key。假定你有若干电脑，你一会儿在公司提交，一会儿在家里提交，只要把每台电脑的Key都添加到GitHub，就可以在每台电脑上往GitHub推送了。</p><h3 id="_5-2添加远程库" tabindex="-1"><a class="header-anchor" href="#_5-2添加远程库"><span>5.2添加远程库</span></a></h3><p>现在的情景是，你已经在本地创建了一个Git仓库后，又想在GitHub创建一个Git仓库，并且让这两个仓库进行远程同步，这样，GitHub上的仓库既可以作为备份，又可以让其他人通过该仓库来协作，真是一举多得。</p><p>首先，登陆GitHub，然后，在右上角找到“Create a new repo”按钮，创建一个新的仓库：</p><p>在Repository name填入<code>learngit</code>，其他保持默认设置，点击“Create repository”按钮，就成功地创建了一个新的Git仓库：</p><p>目前，在GitHub上的这个<code>learngit</code>仓库还是空的，GitHub告诉我们，可以从这个仓库克隆出新的仓库，也可以把一个已有的本地仓库与之关联，然后，把本地仓库的内容推送到GitHub仓库。</p><p>现在，我们根据GitHub的提示，在本地的<code>learngit</code>仓库下运行命令：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git remote add origin git@github.com:michaelliao/learngit.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>请千万注意，把上面的<code>michaelliao</code>替换成你自己的GitHub账户名，否则，你在本地关联的就是我的远程库，关联没有问题，但是你以后推送是推不上去的，因为你的SSH Key公钥不在我的账户列表中。</p><p>添加后，远程库的名字就是<code>origin</code>，这是Git默认的叫法，也可以改成别的，但是<code>origin</code>这个名字一看就知道是远程库。</p><p>下一步，就可以把本地库的所有内容推送到远程库上：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git push -u origin master
Counting objects: 20, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (15/15), done.
Writing objects: 100% (20/20), 1.64 KiB | 560.00 KiB/s, done.
Total 20 (delta 5), reused 0 (delta 0)
remote: Resolving deltas: 100% (5/5), done.
To github.com:michaelliao/learngit.git
 * [new branch]      master -&gt; master
Branch &#39;master&#39; set up to track remote branch &#39;master&#39; from &#39;origin&#39;.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把本地库的内容推送到远程，用<code>git push</code>命令，实际上是把当前分支<code>master</code>推送到远程。</p><p>由于远程库是空的，我们第一次推送<code>master</code>分支时，加上了<code>-u</code>参数，Git不但会把本地的<code>master</code>分支内容推送的远程新的<code>master</code>分支，还会把本地的<code>master</code>分支和远程的<code>master</code>分支关联起来，在以后的推送或者拉取时就可以简化命令。</p><p>从现在起，只要本地作了提交，就可以通过命令：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git push origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>把本地<code>master</code>分支的最新修改推送至GitHub，现在，你就拥有了真正的分布式版本库！</p><h4 id="ssh警告" tabindex="-1"><a class="header-anchor" href="#ssh警告"><span>SSH警告</span></a></h4><p>当你第一次使用Git的<code>clone</code>或者<code>push</code>命令连接GitHub时，会得到一个警告：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>The authenticity of host &#39;github.com (xx.xx.xx.xx)&#39; can&#39;t be established.
RSA key fingerprint is xx.xx.xx.xx.xx.
Are you sure you want to continue connecting (yes/no)?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是因为Git使用SSH连接，而SSH连接在第一次验证GitHub服务器的Key时，需要你确认GitHub的Key的指纹信息是否真的来自GitHub的服务器，输入<code>yes</code>回车即可。</p><p>Git会输出一个警告，告诉你已经把GitHub的Key添加到本机的一个信任列表里了：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Warning: Permanently added &#39;github.com&#39; (RSA) to the list of known hosts.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个警告只会出现一次，后面的操作就不会有任何警告了。</p><p>如果你实在担心有人冒充GitHub服务器，输入<code>yes</code>前可以对照GitHub的RSA Key的指纹信息是否与SSH连接给出的一致。</p><h4 id="删除远程库" tabindex="-1"><a class="header-anchor" href="#删除远程库"><span>删除远程库</span></a></h4><p>如果添加的时候地址写错了，或者就是想删除远程库，可以用<code>git remote rm &lt;name&gt;</code>命令。使用前，建议先用<code>git remote -v</code>查看远程库信息：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git remote -v
origin  git@github.com:michaelliao/learn-git.git (fetch)
origin  git@github.com:michaelliao/learn-git.git (push)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，根据名字删除，比如删除<code>origin</code>：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git remote rm origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此处的“删除”其实是解除了本地和远程的绑定关系，并不是物理上删除了远程库。远程库本身并没有任何改动。要真正删除远程库，需要登录到GitHub，在后台页面找到删除按钮再删除。</p><h3 id="_5-3从远程库克隆" tabindex="-1"><a class="header-anchor" href="#_5-3从远程库克隆"><span>5.3从远程库克隆</span></a></h3><p>登陆GitHub，创建一个新的仓库，名字叫<code>gitskills</code>我们勾选<code>Initialize this repository with a README</code>，这样GitHub会自动为我们创建一个<code>README.md</code>文件。创建完毕后，可以看到<code>README.md</code>文件</p><p>现在，远程库已经准备好了，下一步是用命令<code>git clone</code>克隆一个本地库：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git clone git@github.com:michaelliao/gitskills.git
Cloning into &#39;gitskills&#39;...
remote: Counting objects: 3, done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 3
Receiving objects: 100% (3/3), done.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意把Git库的地址换成你自己的，然后进入<code>gitskills</code>目录看看，已经有<code>README.md</code>文件了：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ cd gitskills
$ ls
README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果有多个人协作开发，那么每个人各自从远程克隆一份就可以了。</p><p>你也许还注意到，GitHub给出的地址不止一个，还可以用<code>https://github.com/michaelliao/gitskills.git</code>这样的地址。实际上，Git支持多种协议，默认的<code>git://</code>使用ssh，但也可以使用<code>https</code>等其他协议。</p><p>使用<code>https</code>除了速度慢以外，还有个最大的麻烦是每次推送都必须输入口令，但是在某些只开放http端口的公司内部就无法使用<code>ssh</code>协议而只能用<code>https</code>。</p><h2 id="_6-分支管理" tabindex="-1"><a class="header-anchor" href="#_6-分支管理"><span>6.分支管理</span></a></h2><h3 id="_6-1创建与合并分支" tabindex="-1"><a class="header-anchor" href="#_6-1创建与合并分支"><span>6.1创建与合并分支</span></a></h3><p>在版本回退里，你已经知道，每次提交，Git都把它们串成一条时间线，这条时间线就是一个分支。截止到目前，只有一条时间线，在Git里，这个分支叫主分支，即<code>master</code>分支。<code>HEAD</code>严格来说不是指向提交，而是指向<code>master</code>，<code>master</code>才是指向提交的，所以，<code>HEAD</code>指向的就是当前分支。</p><p>一开始的时候，<code>master</code>分支是一条线，Git用<code>master</code>指向最新的提交，再用<code>HEAD</code>指向<code>master</code>，就能确定当前分支，以及当前分支的提交点：</p><p>每次提交，<code>master</code>分支都会向前移动一步，这样，随着你不断提交，<code>master</code>分支的线也越来越长。</p><p>当我们创建新的分支，例如<code>dev</code>时，Git新建了一个指针叫<code>dev</code>，指向<code>master</code>相同的提交，再把<code>HEAD</code>指向<code>dev</code>，就表示当前分支在<code>dev</code>上：</p><p>你看，Git创建一个分支很快，因为除了增加一个<code>dev</code>指针，改改<code>HEAD</code>的指向，工作区的文件都没有任何变化！</p><p>不过，从现在开始，对工作区的修改和提交就是针对<code>dev</code>分支了，比如新提交一次后，<code>dev</code>指针往前移动一步，而<code>master</code>指针不变：</p><p>假如我们在<code>dev</code>上的工作完成了，就可以把<code>dev</code>合并到<code>master</code>上。Git怎么合并呢？最简单的方法，就是直接把<code>master</code>指向<code>dev</code>的当前提交，就完成了合并：</p><p>所以Git合并分支也很快！就改改指针，工作区内容也不变！</p><p>合并完分支后，甚至可以删除<code>dev</code>分支。删除<code>dev</code>分支就是把<code>dev</code>指针给删掉，删掉后，我们就剩下了一条<code>master</code>分支：</p><p>首先，我们创建<code>dev</code>分支，然后切换到<code>dev</code>分支：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git checkout -b dev
Switched to a new branch &#39;dev&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git checkout</code>命令加上<code>-b</code>参数表示创建并切换，相当于以下两条命令：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git branch dev
$ git checkout dev
Switched to branch &#39;dev&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，用<code>git branch</code>命令查看当前分支：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git branch
* dev
  master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git branch</code>命令会列出所有分支，当前分支前面会标一个<code>*</code>号。</p><p>然后，我们就可以在<code>dev</code>分支上正常提交，比如对<code>readme.txt</code>做个修改，加上一行：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Creating a new branch is quick.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后提交：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git add readme.txt 
$ git commit -m &quot;branch test&quot;
[dev b17d20e] branch test
 1 file changed, 1 insertion(+)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，<code>dev</code>分支的工作完成，我们就可以切换回<code>master</code>分支：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git checkout master
Switched to branch &#39;master&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>切换回<code>master</code>分支后，再查看一个<code>readme.txt</code>文件，刚才添加的内容不见了！因为那个提交是在<code>dev</code>分支上，而<code>master</code>分支此刻的提交点并没有变</p><p>现在，我们把<code>dev</code>分支的工作成果合并到<code>master</code>分支上：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git merge dev
Updating d46f35e..b17d20e
Fast-forward
 readme.txt | 1 +
 1 file changed, 1 insertion(+)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git merge</code>命令用于合并指定分支到当前分支。合并后，再查看<code>readme.txt</code>的内容，就可以看到，和<code>dev</code>分支的最新提交是完全一样的。</p><p>注意到上面的<code>Fast-forward</code>信息，Git告诉我们，这次合并是“快进模式”，也就是直接把<code>master</code>指向<code>dev</code>的当前提交，所以合并速度非常快。</p><p>当然，也不是每次合并都能<code>Fast-forward</code>，我们后面会讲其他方式的合并。</p><p>合并完成后，就可以放心地删除<code>dev</code>分支了：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git branch -d dev
Deleted branch dev (was b17d20e).
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>删除后，查看<code>branch</code>，就只剩下<code>master</code>分支了：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git branch
* master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>因为创建、合并和删除分支非常快，所以Git鼓励你使用分支完成某个任务，合并后再删掉分支，这和直接在<code>master</code>分支上工作效果是一样的，但过程更安全。</p><p>switch</p><p>我们注意到切换分支使用<code>git checkout &lt;branch&gt;</code>，而前面讲过的撤销修改则是<code>git checkout -- &lt;file&gt;</code>，同一个命令，有两种作用，确实有点令人迷惑。</p><p>实际上，切换分支这个动作，用<code>switch</code>更科学。因此，最新版本的Git提供了新的<code>git switch</code>命令来切换分支：</p><p>创建并切换到新的<code>dev</code>分支，可以使用：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git switch -c dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>直接切换到已有的<code>master</code>分支，可以使用：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git switch master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>小结</p><p>Git鼓励大量使用分支：</p><p>查看分支：<code>git branch</code></p><p>创建分支：<code>git branch &lt;name&gt;</code></p><p>切换分支：<code>git checkout &lt;name&gt;</code>或者<code>git switch &lt;name&gt;</code></p><p>创建+切换分支：<code>git checkout -b &lt;name&gt;</code>或者<code>git switch -c &lt;name&gt;</code></p><p>合并某分支到当前分支：<code>git merge &lt;name&gt;</code></p><p>删除分支：<code>git branch -d &lt;name&gt;</code></p></blockquote><h3 id="_6-2解决冲突" tabindex="-1"><a class="header-anchor" href="#_6-2解决冲突"><span>6.2解决冲突</span></a></h3><p>准备新的<code>feature1</code>分支，继续我们的新分支开发：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git switch -c feature1
Switched to a new branch &#39;feature1&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改<code>readme.txt</code>最后一行，改为：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Creating a new branch is quick AND simple.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在<code>feature1</code>分支上提交：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git add readme.txt

$ git commit -m &quot;AND simple&quot;
[feature1 14096d0] AND simple
 1 file changed, 1 insertion(+), 1 deletion(-)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>切换到<code>master</code>分支：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git switch master
Switched to branch &#39;master&#39;
Your branch is ahead of &#39;origin/master&#39; by 1 commit.
  (use &quot;git push&quot; to publish your local commits)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Git还会自动提示我们当前<code>master</code>分支比远程的<code>master</code>分支要超前1个提交。</p><p>在<code>master</code>分支上把<code>readme.txt</code>文件的最后一行改为：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Creating a new branch is quick &amp; simple.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git add readme.txt 
$ git commit -m &quot;&amp; simple&quot;
[master 5dc6824] &amp; simple
 1 file changed, 1 insertion(+), 1 deletion(-)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，<code>master</code>分支和<code>feature1</code>分支各自都分别有新的提交，变成了这样：</p><p>这种情况下，Git无法执行“快速合并”，只能试图把各自的修改合并起来，但这种合并就可能会有冲突，我们试试看：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git merge feature1
Auto-merging readme.txt
CONFLICT (content): Merge conflict in readme.txt
Automatic merge failed; fix conflicts and then commit the result.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>果然冲突了！Git告诉我们，<code>readme.txt</code>文件存在冲突，必须手动解决冲突后再提交。<code>git status</code>也可以告诉我们冲突的文件：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git status
On branch master
Your branch is ahead of &#39;origin/master&#39; by 2 commits.
  (use &quot;git push&quot; to publish your local commits)

You have unmerged paths.
  (fix conflicts and run &quot;git commit&quot;)
  (use &quot;git merge --abort&quot; to abort the merge)

Unmerged paths:
  (use &quot;git add &lt;file&gt;...&quot; to mark resolution)

	both modified:   readme.txt

no changes added to commit (use &quot;git add&quot; and/or &quot;git commit -a&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以直接查看readme.txt的内容：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.
Git tracks changes of files.
&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
Creating a new branch is quick &amp; simple.
=======
Creating a new branch is quick AND simple.
&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Git用<code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>，<code>=======</code>，<code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>标记出不同分支的内容，我们修改如下后保存：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Creating a new branch is quick and simple.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再提交：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git add readme.txt 
$ git commit -m &quot;conflict fixed&quot;
[master cf810e4] conflict fixed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，<code>master</code>分支和<code>feature1</code>分支变成了下图所示：</p><p>用带参数的<code>git log</code>也可以看到分支的合并情况：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git log --graph --pretty=oneline --abbrev-commit
*   cf810e4 (HEAD -&gt; master) conflict fixed
|\\  
| * 14096d0 (feature1) AND simple
* | 5dc6824 &amp; simple
|/  
* b17d20e branch test
* d46f35e (origin/master) remove test.txt
* b84166e add test.txt
* 519219b git tracks changes
* e43a48b understand how stage works
* 1094adb append GPL
* e475afc add distributed
* eaadf4e wrote a readme file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，删除<code>feature1</code>分支：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git branch -d feature1
Deleted branch feature1 (was 14096d0).
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>小结</p><p>当Git无法自动合并分支时，就必须首先解决冲突。解决冲突后，再提交，合并完成。</p><p>解决冲突就是把Git合并失败的文件手动编辑为我们希望的内容，再提交。</p><p>用<code>git log --graph</code>命令可以看到分支合并图。</p></blockquote><h3 id="_6-3分支管理策略" tabindex="-1"><a class="header-anchor" href="#_6-3分支管理策略"><span>6.3分支管理策略</span></a></h3><p>通常，合并分支时，如果可能，Git会用<code>Fast forward</code>模式，但这种模式下，删除分支后，会丢掉分支信息。</p><p>如果要强制禁用<code>Fast forward</code>模式，Git就会在merge时生成一个新的commit，这样，从分支历史上就可以看出分支信息。</p><p>下面我们实战一下<code>--no-ff</code>方式的<code>git merge</code>：</p><p>首先，仍然创建并切换<code>dev</code>分支：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git switch -c dev
Switched to a new branch &#39;dev&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改readme.txt文件，并提交一个新的commit：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git add readme.txt 
$ git commit -m &quot;add merge&quot;
[dev f52c633] add merge
 1 file changed, 1 insertion(+)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，我们切换回<code>master</code>：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git switch master
Switched to branch &#39;master&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>准备合并<code>dev</code>分支，请注意<code>--no-ff</code>参数，表示禁用<code>Fast forward</code>：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git merge --no-ff -m &quot;merge with no-ff&quot; dev
Merge made by the &#39;recursive&#39; strategy.
 readme.txt | 1 +
 1 file changed, 1 insertion(+)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为本次合并要创建一个新的commit，所以加上<code>-m</code>参数，把commit描述写进去。</p><p>合并后，我们用<code>git log</code>看看分支历史：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git log --graph --pretty=oneline --abbrev-commit
*   e1e9c68 (HEAD -&gt; master) merge with no-ff
|\\  
| * f52c633 (dev) add merge
|/  
*   cf810e4 conflict fixed
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，不使用<code>Fast forward</code>模式，merge后就像这样：</p><p>分支策略</p><p>在实际开发中，我们应该按照几个基本原则进行分支管理：</p><p>首先，<code>master</code>分支应该是非常稳定的，也就是仅用来发布新版本，平时不能在上面干活；</p><p>那在哪干活呢？干活都在<code>dev</code>分支上，也就是说，<code>dev</code>分支是不稳定的，到某个时候，比如1.0版本发布时，再把<code>dev</code>分支合并到<code>master</code>上，在<code>master</code>分支发布1.0版本；</p><p>你和你的小伙伴们每个人都在<code>dev</code>分支上干活，每个人都有自己的分支，时不时地往<code>dev</code>分支上合并就可以了。</p><p>所以，团队合作的分支看起来就像这样：</p><h3 id="_6-4-bug分支" tabindex="-1"><a class="header-anchor" href="#_6-4-bug分支"><span>6.4.Bug分支</span></a></h3><p>在Git中，由于分支是如此的强大，所以，每个bug都可以通过一个新的临时分支来修复，修复后，合并分支，然后将临时分支删除。</p><p>当你接到一个修复一个代号101的bug的任务时，很自然地，你想创建一个分支<code>issue-101</code>来修复它，但是，等等，当前正在<code>dev</code>上进行的工作还没有提交：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git status
On branch dev
Changes to be committed:
  (use &quot;git reset HEAD &lt;file&gt;...&quot; to unstage)

	new file:   hello.py

Changes not staged for commit:
  (use &quot;git add &lt;file&gt;...&quot; to update what will be committed)
  (use &quot;git checkout -- &lt;file&gt;...&quot; to discard changes in working directory)

	modified:   readme.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并不是你不想提交，而是工作只进行到一半，还没法提交，预计完成还需1天时间。但是，必须在两个小时内修复该bug，怎么办？</p><p>幸好，Git还提供了一个<code>stash</code>功能，可以把当前工作现场“储藏”起来，等以后恢复现场后继续工作：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git stash
Saved working directory and index state WIP on dev: f52c633 add merge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，用<code>git status</code>查看工作区，就是干净的（除非有没有被Git管理的文件），因此可以放心地创建分支来修复bug。</p><p>首先确定要在哪个分支上修复bug，假定需要在<code>master</code>分支上修复，就从<code>master</code>创建临时分支：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git checkout master
Switched to branch &#39;master&#39;
Your branch is ahead of &#39;origin/master&#39; by 6 commits.
  (use &quot;git push&quot; to publish your local commits)

$ git checkout -b issue-101
Switched to a new branch &#39;issue-101&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在修复bug，需要把“Git is free software ...”改为“Git is a free software ...”，然后提交：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git add readme.txt 
$ git commit -m &quot;fix bug 101&quot;
[issue-101 4c805e2] fix bug 101
 1 file changed, 1 insertion(+), 1 deletion(-)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修复完成后，切换到<code>master</code>分支，并完成合并，最后删除<code>issue-101</code>分支：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git switch master
Switched to branch &#39;master&#39;
Your branch is ahead of &#39;origin/master&#39; by 6 commits.
  (use &quot;git push&quot; to publish your local commits)

$ git merge --no-ff -m &quot;merged bug fix 101&quot; issue-101
Merge made by the &#39;recursive&#39; strategy.
 readme.txt | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，是时候接着回到<code>dev</code>分支干活了！</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git switch dev
Switched to branch &#39;dev&#39;

$ git status
On branch dev
nothing to commit, working tree clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>工作区是干净的，刚才的工作现场存到哪去了？用<code>git stash list</code>命令看看：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git stash list
stash@{0}: WIP on dev: f52c633 add merge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>工作现场还在，Git把stash内容存在某个地方了，但是需要恢复一下，有两个办法：</p><p>一是用<code>git stash apply</code>恢复，但是恢复后，stash内容并不删除，你需要用<code>git stash drop</code>来删除；</p><p>另一种方式是用<code>git stash pop</code>，恢复的同时把stash内容也删了：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git stash pop
On branch dev
Changes to be committed:
  (use &quot;git reset HEAD &lt;file&gt;...&quot; to unstage)

	new file:   hello.py

Changes not staged for commit:
  (use &quot;git add &lt;file&gt;...&quot; to update what will be committed)
  (use &quot;git checkout -- &lt;file&gt;...&quot; to discard changes in working directory)

	modified:   readme.txt

Dropped refs/stash@{0} (5d677e2ee266f39ea296182fb2354265b91b3b2a)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再用<code>git stash list</code>查看，就看不到任何stash内容了：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git stash list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以多次stash，恢复的时候，先用<code>git stash list</code>查看，然后恢复指定的stash，用命令：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git stash apply stash@{0}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在master分支上修复了bug后，我们要想一想，dev分支是早期从master分支分出来的，所以，这个bug其实在当前dev分支上也存在。</p><p>那怎么在dev分支上修复同样的bug？重复操作一次，提交不就行了？</p><p>有木有更简单的方法？</p><p>有！</p><p>同样的bug，要在dev上修复，我们只需要把<code>4c805e2 fix bug 101</code>这个提交所做的修改“复制”到dev分支。注意：我们只想复制<code>4c805e2 fix bug 101</code>这个提交所做的修改，并不是把整个master分支merge过来。</p><p>为了方便操作，Git专门提供了一个<code>cherry-pick</code>命令，让我们能复制一个特定的提交到当前分支：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git branch
* dev
  master
$ git cherry-pick 4c805e2
[master 1d4b803] fix bug 101
 1 file changed, 1 insertion(+), 1 deletion(-)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Git自动给dev分支做了一次提交，注意这次提交的commit是<code>1d4b803</code>，它并不同于master的<code>4c805e2</code>，因为这两个commit只是改动相同，但确实是两个不同的commit。用<code>git cherry-pick</code>，我们就不需要在dev分支上手动再把修bug的过程重复一遍。</p><p>有些聪明的童鞋会想了，既然可以在master分支上修复bug后，在dev分支上可以“重放”这个修复过程，那么直接在dev分支上修复bug，然后在master分支上“重放”行不行？当然可以，不过你仍然需要<code>git stash</code>命令保存现场，才能从dev分支切换到master分支。</p><blockquote><p>小结</p><p>修复bug时，我们会通过创建新的bug分支进行修复，然后合并，最后删除；</p><p>当手头工作没有完成时，先把工作现场<code>git stash</code>一下，然后去修复bug，修复后，再<code>git stash pop</code>，回到工作现场；</p><p>在master分支上修复的bug，想要合并到当前dev分支，可以用<code>git cherry-pick &lt;commit&gt;</code>命令，把bug提交的修改“复制”到当前分支，避免重复劳动。</p></blockquote><h3 id="_6-5feature分支" tabindex="-1"><a class="header-anchor" href="#_6-5feature分支"><span>6.5Feature分支</span></a></h3><p>软件开发中，总有无穷无尽的新的功能要不断添加进来。</p><p>添加一个新功能时，你肯定不希望因为一些实验性质的代码，把主分支搞乱了，所以，每添加一个新功能，最好新建一个feature分支，在上面开发，完成后，合并，最后，删除该feature分支</p><p>现在，你终于接到了一个新任务：开发代号为Vulcan的新功能，该功能计划用于下一代星际飞船。</p><p>于是准备开发：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git switch -c feature-vulcan
Switched to a new branch &#39;feature-vulcan&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>5分钟后，开发完毕：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git add vulcan.py

$ git status
On branch feature-vulcan
Changes to be committed:
  (use &quot;git reset HEAD &lt;file&gt;...&quot; to unstage)

	new file:   vulcan.py

$ git commit -m &quot;add feature vulcan&quot;
[feature-vulcan 287773e] add feature vulcan
 1 file changed, 2 insertions(+)
 create mode 100644 vulcan.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>切回<code>dev</code>，准备合并：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git switch dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一切顺利的话，feature分支和bug分支是类似的，合并，然后删除。</p><p>但是！</p><p>就在此时，接到上级命令，因经费不足，新功能必须取消！</p><p>虽然白干了，但是这个包含机密资料的分支还是必须就地销毁：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git branch -d feature-vulcan
error: The branch &#39;feature-vulcan&#39; is not fully merged.
If you are sure you want to delete it, run &#39;git branch -D feature-vulcan&#39;.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>销毁失败。Git友情提醒，<code>feature-vulcan</code>分支还没有被合并，如果删除，将丢失掉修改，如果要强行删除，需要使用大写的<code>-D</code>参数。。</p><p>现在我们强行删除：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git branch -D feature-vulcan
Deleted branch feature-vulcan (was 287773e).
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-6多人协作" tabindex="-1"><a class="header-anchor" href="#_6-6多人协作"><span>6.6多人协作</span></a></h3><p>当你从远程仓库克隆时，实际上Git自动把本地的<code>master</code>分支和远程的<code>master</code>分支对应起来了，并且，远程仓库的默认名称是<code>origin</code>。</p><p>要查看远程库的信息，用<code>git remote</code>：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git remote
origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者，用<code>git remote -v</code>显示更详细的信息：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git remote -v
origin  git@github.com:michaelliao/learngit.git (fetch)
origin  git@github.com:michaelliao/learngit.git (push)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面显示了可以抓取和推送的<code>origin</code>的地址。如果没有推送权限，就看不到push的地址。</p><p>推送分支</p><p>推送分支，就是把该分支上的所有本地提交推送到远程库。推送时，要指定本地分支，这样，Git就会把该分支推送到远程库对应的远程分支上：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git push origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果要推送其他分支，比如<code>dev</code>，就改成：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git push origin dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是，并不是一定要把本地分支往远程推送，那么，哪些分支需要推送，哪些不需要呢？</p><ul><li><code>master</code>分支是主分支，因此要时刻与远程同步；</li><li><code>dev</code>分支是开发分支，团队所有成员都需要在上面工作，所以也需要与远程同步；</li><li>bug分支只用于在本地修复bug，就没必要推到远程了，除非老板要看看你每周到底修复了几个bug；</li><li>feature分支是否推到远程，取决于你是否和你的小伙伴合作在上面开发。</li></ul><p>总之，就是在Git中，分支完全可以在本地自己藏着玩，是否推送，视你的心情而定！</p><p>抓取分支</p><p>多人协作时，大家都会往<code>master</code>和<code>dev</code>分支上推送各自的修改。</p><p>现在，模拟一个你的小伙伴，可以在另一台电脑（注意要把SSH Key添加到GitHub）或者同一台电脑的另一个目录下克隆：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git clone git@github.com:michaelliao/learngit.git
Cloning into &#39;learngit&#39;...
remote: Counting objects: 40, done.
remote: Compressing objects: 100% (21/21), done.
remote: Total 40 (delta 14), reused 40 (delta 14), pack-reused 0
Receiving objects: 100% (40/40), done.
Resolving deltas: 100% (14/14), done.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当你的小伙伴从远程库clone时，默认情况下，你的小伙伴只能看到本地的<code>master</code>分支。不信可以用<code>git branch</code>命令看看：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git branch
* master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，你的小伙伴要在<code>dev</code>分支上开发，就必须创建远程<code>origin</code>的<code>dev</code>分支到本地，于是他用这个命令创建本地<code>dev</code>分支：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git checkout -b dev origin/dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在，他就可以在<code>dev</code>上继续修改，然后，时不时地把<code>dev</code>分支<code>push</code>到远程：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git add env.txt

$ git commit -m &quot;add env&quot;
[dev 7a5e5dd] add env
 1 file changed, 1 insertion(+)
 create mode 100644 env.txt

$ git push origin dev
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 308 bytes | 308.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To github.com:michaelliao/learngit.git
   f52c633..7a5e5dd  dev -&gt; dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你的小伙伴已经向<code>origin/dev</code>分支推送了他的提交，而碰巧你也对同样的文件作了修改，并试图推送：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ cat env.txt
env

$ git add env.txt

$ git commit -m &quot;add new env&quot;
[dev 7bd91f1] add new env
 1 file changed, 1 insertion(+)
 create mode 100644 env.txt

$ git push origin dev
To github.com:michaelliao/learngit.git
 ! [rejected]        dev -&gt; dev (non-fast-forward)
error: failed to push some refs to &#39;git@github.com:michaelliao/learngit.git&#39;
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: &#39;git pull ...&#39;) before pushing again.
hint: See the &#39;Note about fast-forwards&#39; in &#39;git push --help&#39; for details.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>推送失败，因为你的小伙伴的最新提交和你试图推送的提交有冲突，解决办法也很简单，Git已经提示我们，先用<code>git pull</code>把最新的提交从<code>origin/dev</code>抓下来，然后，在本地合并，解决冲突，再推送：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git pull
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull &lt;remote&gt; &lt;branch&gt;

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/&lt;branch&gt; dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git pull</code>也失败了，原因是没有指定本地<code>dev</code>分支与远程<code>origin/dev</code>分支的链接，根据提示，设置<code>dev</code>和<code>origin/dev</code>的链接：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git branch --set-upstream-to=origin/dev dev
Branch &#39;dev&#39; set up to track remote branch &#39;dev&#39; from &#39;origin&#39;.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>再pull：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git pull
Auto-merging env.txt
CONFLICT (add/add): Merge conflict in env.txt
Automatic merge failed; fix conflicts and then commit the result.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这回<code>git pull</code>成功，但是合并有冲突，需要手动解决，解决的方法和分支管理中的解完全一样。解决后，提交，再push：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git commit -m &quot;fix env conflict&quot;
[dev 57c53ab] fix env conflict

$ git push origin dev
Counting objects: 6, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (6/6), 621 bytes | 621.00 KiB/s, done.
Total 6 (delta 0), reused 0 (delta 0)
To github.com:michaelliao/learngit.git
   7a5e5dd..57c53ab  dev -&gt; dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，多人协作的工作模式通常是这样：</p><ol><li>首先，可以试图用<code>git push origin &lt;branch-name&gt;</code>推送自己的修改；</li><li>如果推送失败，则因为远程分支比你的本地更新，需要先用<code>git pull</code>试图合并；</li><li>如果合并有冲突，则解决冲突，并在本地提交；</li><li>没有冲突或者解决掉冲突后，再用<code>git push origin &lt;branch-name&gt;</code>推送就能成功！</li></ol><p>如果<code>git pull</code>提示<code>no tracking information</code>，则说明本地分支和远程分支的链接关系没有创建，用命令<code>git branch --set-upstream-to &lt;branch-name&gt; origin/&lt;branch-name&gt;</code>。</p><p>这就是多人协作的工作模式，一旦熟悉了，就非常简单。</p><blockquote><p>小结</p><ul><li>查看远程库信息，使用<code>git remote -v</code>；</li><li>本地新建的分支如果不推送到远程，对其他人就是不可见的；</li><li>从本地推送分支，使用<code>git push origin branch-name</code>，如果推送失败，先用<code>git pull</code>抓取远程的新提交；</li><li>在本地创建和远程分支对应的分支，使用<code>git checkout -b branch-name origin/branch-name</code>，本地和远程分支的名称最好一致；</li><li>建立本地分支和远程分支的关联，使用<code>git branch --set-upstream branch-name origin/branch-name</code>；</li><li>从远程抓取分支，使用<code>git pull</code>，如果有冲突，要先处理冲突。</li></ul></blockquote><h3 id="_6-7rebase" tabindex="-1"><a class="header-anchor" href="#_6-7rebase"><span>6.7Rebase</span></a></h3><p>多人在同一个分支上协作时，很容易出现冲突。即使没有冲突，后push的童鞋不得不先pull，在本地合并，然后才能push成功。</p><p>每次合并再push后，分支变成了这样：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git log --graph --pretty=oneline --abbrev-commit
* d1be385 (HEAD -&gt; master, origin/master) init hello
*   e5e69f1 Merge branch &#39;dev&#39;
|\\  
| *   57c53ab (origin/dev, dev) fix env conflict
| |\\  
| | * 7a5e5dd add env
| * | 7bd91f1 add new env
| |/  
* |   12a631b merged bug fix 101
|\\ \\  
| * | 4c805e2 fix bug 101
|/ /  
* |   e1e9c68 merge with no-ff
|\\ \\  
| |/  
| * f52c633 add merge
|/  
*   cf810e4 conflict fixed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Git有一种称为rebase的操作</p><p>在和远程分支同步后，我们对<code>hello.py</code>这个文件做了两次提交。用<code>git log</code>命令看看：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git log --graph --pretty=oneline --abbrev-commit
* 582d922 (HEAD -&gt; master) add author
* 8875536 add comment
* d1be385 (origin/master) init hello
*   e5e69f1 Merge branch &#39;dev&#39;
|\\  
| *   57c53ab (origin/dev, dev) fix env conflict
| |\\  
| | * 7a5e5dd add env
| * | 7bd91f1 add new env
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意到Git用<code>(HEAD -&gt; master)</code>和<code>(origin/master)</code>标识出当前分支的HEAD和远程origin的位置分别是<code>582d922 add author</code>和<code>d1be385 init hello</code>，本地分支比远程分支快两个提交。</p><p>现在我们尝试推送本地分支：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git push origin master
To github.com:michaelliao/learngit.git
 ! [rejected]        master -&gt; master (fetch first)
error: failed to push some refs to &#39;git@github.com:michaelliao/learngit.git&#39;
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., &#39;git pull ...&#39;) before pushing again.
hint: See the &#39;Note about fast-forwards&#39; in &#39;git push --help&#39; for details.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很不幸，失败了，这说明有人先于我们推送了远程分支。按照经验，先pull一下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git pull
remote: Counting objects: 3, done.
remote: Compressing objects: 100% (1/1), done.
remote: Total 3 (delta 1), reused 3 (delta 1), pack-reused 0
Unpacking objects: 100% (3/3), done.
From github.com:michaelliao/learngit
   d1be385..f005ed4  master     -&gt; origin/master
 * [new tag]         v1.0       -&gt; v1.0
Auto-merging hello.py
Merge made by the &#39;recursive&#39; strategy.
 hello.py | 1 +
 1 file changed, 1 insertion(+)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再用<code>git status</code>看看状态：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git status
On branch master
Your branch is ahead of &#39;origin/master&#39; by 3 commits.
  (use &quot;git push&quot; to publish your local commits)

nothing to commit, working tree clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加上刚才合并的提交，现在我们本地分支比远程分支超前3个提交。</p><p>用<code>git log</code>看看：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git log --graph --pretty=oneline --abbrev-commit
*   e0ea545 (HEAD -&gt; master) Merge branch &#39;master&#39; of github.com:michaelliao/learngit
|\\  
| * f005ed4 (origin/master) set exit=1
* | 582d922 add author
* | 8875536 add comment
|/  
* d1be385 init hello
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候，rebase就派上了用场。我们输入命令<code>git rebase</code>试试：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> git rebase
First, rewinding head to replay your work on top of it...
Applying: add comment
Using index info to reconstruct a base tree...
M	hello.py
Falling back to patching base and 3-way merge...
Auto-merging hello.py
Applying: add author
Using index info to reconstruct a base tree...
M	hello.py
Falling back to patching base and 3-way merge...
Auto-merging hello.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出了一大堆操作，到底是啥效果？再用<code>git log</code>看看：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git log --graph --pretty=oneline --abbrev-commit
* 7e61ed4 (HEAD -&gt; master) add author
* 3611cfe add comment
* f005ed4 (origin/master) set exit=1
* d1be385 init hello
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原本分叉的提交现在变成一条直线了！这种神奇的操作是怎么实现的？其实原理非常简单。我们注意观察，发现Git把我们本地的提交“挪动”了位置，放到了<code>f005ed4 (origin/master) set exit=1</code>之后，这样，整个提交历史就成了一条直线。rebase操作前后，最终的提交内容是一致的，但是，我们本地的commit修改内容已经变化了，它们的修改不再基于<code>d1be385 init hello</code>，而是基于<code>f005ed4 (origin/master) set exit=1</code>，但最后的提交<code>7e61ed4</code>内容是一致的。</p><p>这就是rebase操作的特点：把分叉的提交历史“整理”成一条直线，看上去更直观。缺点是本地的分叉提交已经被修改过了。</p><p>最后，通过push操作把本地分支推送到远程：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Mac:~/learngit michael$ git push origin master
Counting objects: 6, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (5/5), done.
Writing objects: 100% (6/6), 576 bytes | 576.00 KiB/s, done.
Total 6 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 1 local object.
To github.com:michaelliao/learngit.git
   f005ed4..7e61ed4  master -&gt; master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再用<code>git log</code>看看效果：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git log --graph --pretty=oneline --abbrev-commit
* 7e61ed4 (HEAD -&gt; master, origin/master) add author
* 3611cfe add comment
* f005ed4 set exit=1
* d1be385 init hello
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>远程分支的提交历史也是一条直线。</p><h2 id="_7-标签管理" tabindex="-1"><a class="header-anchor" href="#_7-标签管理"><span>7.标签管理</span></a></h2><p>发布一个版本时，我们通常先在版本库中打一个标签（tag），这样，就唯一确定了打标签时刻的版本。将来无论什么时候，取某个标签的版本，就是把那个打标签的时刻的历史版本取出来。所以，标签也是版本库的一个快照。</p><p>Git的标签虽然是版本库的快照，但其实它就是指向某个commit的指针（跟分支很像对不对？但是分支可以移动，标签不能移动），所以，创建和删除标签都是瞬间完成的。</p><p>Git有commit，为什么还要引入tag？</p><p>“请把上周一的那个版本打包发布，commit号是6a5819e...”</p><p>“一串乱七八糟的数字不好找！”</p><p>如果换一个办法：</p><p>“请把上周一的那个版本打包发布，版本号是v1.2”</p><p>“好的，按照tag v1.2查找commit就行！”</p><p>所以，tag就是一个让人容易记住的有意义的名字，它跟某个commit绑在一起。</p><h3 id="_7-1创建标签" tabindex="-1"><a class="header-anchor" href="#_7-1创建标签"><span>7.1创建标签</span></a></h3><p>在Git中打标签非常简单，首先，切换到需要打标签的分支上：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git branch
* dev
  master
$ git checkout master
Switched to branch &#39;master&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，敲命令<code>git tag &lt;name&gt;</code>就可以打一个新标签：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git tag v1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认标签是打在最新提交的commit上的。有时候，如果忘了打标签，比如，现在已经是周五了，但应该在周一打的标签没有打，怎么办？</p><p>方法是找到历史提交的commit id，然后打上就可以了：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git log --pretty=oneline --abbrev-commit
12a631b (HEAD -&gt; master, tag: v1.0, origin/master) merged bug fix 101
4c805e2 fix bug 101
e1e9c68 merge with no-ff
f52c633 add merge
cf810e4 conflict fixed
5dc6824 &amp; simple
14096d0 AND simple
b17d20e branch test
d46f35e remove test.txt
b84166e add test.txt
519219b git tracks changes
e43a48b understand how stage works
1094adb append GPL
e475afc add distributed
eaadf4e wrote a readme file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比方说要对<code>add merge</code>这次提交打标签，它对应的commit id是<code>f52c633</code>，敲入命令：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git tag v0.9 f52c633
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再用命令<code>git tag</code>查看标签：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git tag
v0.9
v1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，标签不是按时间顺序列出，而是按字母排序的。可以用<code>git show &lt;tagname&gt;</code>查看标签信息：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git show v0.9
commit f52c63349bc3c1593499807e5c8e972b82c8f286 (tag: v0.9)
Author: Michael Liao &lt;askxuefeng@gmail.com&gt;
Date:   Fri May 18 21:56:54 2018 +0800

    add merge

diff --git a/readme.txt b/readme.txt
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，<code>v0.9</code>确实打在<code>add merge</code>这次提交上。</p><p>还可以创建带有说明的标签，用<code>-a</code>指定标签名，<code>-m</code>指定说明文字：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git tag -a v0.1 -m &quot;version 0.1 released&quot; 1094adb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用命令<code>git show &lt;tagname&gt;</code>可以看到说明文字：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git show v0.1
tag v0.1
Tagger: Michael Liao &lt;askxuefeng@gmail.com&gt;
Date:   Fri May 18 22:48:43 2018 +0800

version 0.1 released

commit 1094adb7b9b3807259d8cb349e7df1d4d6477073 (tag: v0.1)
Author: Michael Liao &lt;askxuefeng@gmail.com&gt;
Date:   Fri May 18 21:06:15 2018 +0800

    append GPL

diff --git a/readme.txt b/readme.txt
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>小结</p><ul><li>命令<code>git tag &lt;tagname&gt;</code>用于新建一个标签，默认为<code>HEAD</code>，也可以指定一个commit id；</li><li>命令<code>git tag -a &lt;tagname&gt; -m &quot;blablabla...&quot;</code>可以指定标签信息；</li><li>命令<code>git tag</code>可以查看所有标签。</li></ul></blockquote><h3 id="_7-2操作标签" tabindex="-1"><a class="header-anchor" href="#_7-2操作标签"><span>7.2操作标签</span></a></h3><p>如果标签打错了，也可以删除：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git tag -d v0.1
Deleted tag &#39;v0.1&#39; (was f15b0dd)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>因为创建的标签都只存储在本地，不会自动推送到远程。所以，打错的标签可以在本地安全删除。</p><p>如果要推送某个标签到远程，使用命令<code>git push origin &lt;tagname&gt;</code>：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git push origin v1.0
Total 0 (delta 0), reused 0 (delta 0)
To github.com:michaelliao/learngit.git
 * [new tag]         v1.0 -&gt; v1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者，一次性推送全部尚未推送到远程的本地标签：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git push origin --tags
Total 0 (delta 0), reused 0 (delta 0)
To github.com:michaelliao/learngit.git
 * [new tag]         v0.9 -&gt; v0.9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果标签已经推送到远程，要删除远程标签就麻烦一点，先从本地删除：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git tag -d v0.9
Deleted tag &#39;v0.9&#39; (was f52c633)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，从远程删除。删除命令也是push，但是格式如下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ git push origin :refs/tags/v0.9
To github.com:michaelliao/learngit.git
 - [deleted]         v0.9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>小结</p><ul><li>命令<code>git push origin &lt;tagname&gt;</code>可以推送一个本地标签；</li><li>命令<code>git push origin --tags</code>可以推送全部未推送过的本地标签；</li><li>命令<code>git tag -d &lt;tagname&gt;</code>可以删除一个本地标签；</li><li>命令<code>git push origin :refs/tags/&lt;tagname&gt;</code>可以删除一个远程标签。</li></ul></blockquote><h2 id="_8-使用github" tabindex="-1"><a class="header-anchor" href="#_8-使用github"><span>8.使用GitHub</span></a></h2><p>我们一直用GitHub作为免费的远程仓库，如果是个人的开源项目，放到GitHub上是完全没有问题的。其实GitHub还是一个开源协作社区，通过GitHub，既可以让别人参与你的开源项目，也可以参与别人的开源项目。</p><p>在GitHub出现以前，开源项目开源容易，但让广大人民群众参与进来比较困难，因为要参与，就要提交代码，而给每个想提交代码的群众都开一个账号那是不现实的，因此，群众也仅限于报个bug，即使能改掉bug，也只能把diff文件用邮件发过去，很不方便。</p><p>但是在GitHub上，利用Git极其强大的克隆和分支功能，广大人民群众真正可以第一次自由参与各种开源项目了。</p><p>如何参与一个开源项目呢？比如人气极高的bootstrap项目，这是一个非常强大的CSS框架，你可以访问它的项目主页https://github.com/twbs/bootstrap，点“Fork”就在自己的账号下克隆了一个bootstrap仓库，然后，从自己的账号下clone：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git clone git@github.com:michaelliao/bootstrap.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一定要从自己的账号下clone仓库，这样你才能推送修改。如果从bootstrap的作者的仓库地址<code>git@github.com:twbs/bootstrap.git</code>克隆，因为没有权限，你将不能推送修改。</p><p>Bootstrap的官方仓库<code>twbs/bootstrap</code>、你在GitHub上克隆的仓库<code>my/bootstrap</code>，以及你自己克隆到本地电脑的仓库，他们的关系就像下图显示的那样：</p><div class="language-ascii line-numbers-mode" data-ext="ascii" data-title="ascii"><pre class="language-ascii"><code>┌─ GitHub ────────────────────────────────────┐
│                                             │
│ ┌─────────────────┐     ┌─────────────────┐ │
│ │ twbs/bootstrap  │────&gt;│  my/bootstrap   │ │
│ └─────────────────┘     └─────────────────┘ │
│                                  ▲          │
└──────────────────────────────────┼──────────┘
                                   ▼
                          ┌─────────────────┐
                          │ local/bootstrap │
                          └─────────────────┘
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你想修复bootstrap的一个bug，或者新增一个功能，立刻就可以开始干活，干完后，往自己的仓库推送。</p><p>如果你希望bootstrap的官方库能接受你的修改，你就可以在GitHub上发起一个pull request。当然，对方是否接受你的pull request就不一定了。</p><p>如果你没能力修改bootstrap，但又想要试一把pull request，那就Fork一下我的仓库：https://github.com/michaelliao/learngit，创建一个<code>your-github-id.txt</code>的文本文件，写点自己学习Git的心得，然后推送一个pull request给我，我会视心情而定是否接受。·</p>`,477),s=[n];function l(c,r){return i(),d("div",null,s)}const u=e(a,[["render",l],["__file","git_note.html.vue"]]),m=JSON.parse(`{"path":"/posts/git_note/git_note.html","title":"git","lang":"zh-CN","frontmatter":{"description":"git 1.简介 1.1集中式vs分布式 ​ 集中式版本控制系统，版本库是集中存放在中央服务器的，而干活的时候，用的都是自己的电脑，所以要先从中央服务器取得最新的版本，然后开始干活，干完活了，再把自己的活推送给中央服务器。中央服务器就好比是一个图书馆，你要改一本书，必须先从图书馆借出来，然后回到家自己改，改完了，再放回图书馆。 ​ 那分布式版本控制系统...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/git_note/git_note.html"}],["meta",{"property":"og:site_name","content":"kdmvp's\\tblog"}],["meta",{"property":"og:title","content":"git"}],["meta",{"property":"og:description","content":"git 1.简介 1.1集中式vs分布式 ​ 集中式版本控制系统，版本库是集中存放在中央服务器的，而干活的时候，用的都是自己的电脑，所以要先从中央服务器取得最新的版本，然后开始干活，干完活了，再把自己的活推送给中央服务器。中央服务器就好比是一个图书馆，你要改一本书，必须先从图书馆借出来，然后回到家自己改，改完了，再放回图书馆。 ​ 那分布式版本控制系统..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-18T06:44:44.000Z"}],["meta",{"property":"article:author","content":"林伟强"}],["meta",{"property":"article:modified_time","content":"2024-04-18T06:44:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"git\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-18T06:44:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"林伟强\\"}]}"]]},"headers":[{"level":2,"title":"1.简介","slug":"_1-简介","link":"#_1-简介","children":[{"level":3,"title":"1.1集中式vs分布式","slug":"_1-1集中式vs分布式","link":"#_1-1集中式vs分布式","children":[]}]},{"level":2,"title":"2.安装git","slug":"_2-安装git","link":"#_2-安装git","children":[{"level":3,"title":"2.1在Linux上安装Git","slug":"_2-1在linux上安装git","link":"#_2-1在linux上安装git","children":[]},{"level":3,"title":"2.2在Mac OS X上安装Git","slug":"_2-2在mac-os-x上安装git","link":"#_2-2在mac-os-x上安装git","children":[]},{"level":3,"title":"2.3在Windows上安装Git","slug":"_2-3在windows上安装git","link":"#_2-3在windows上安装git","children":[]}]},{"level":2,"title":"3.创建版本库","slug":"_3-创建版本库","link":"#_3-创建版本库","children":[{"level":3,"title":"3.1创建仓库","slug":"_3-1创建仓库","link":"#_3-1创建仓库","children":[]},{"level":3,"title":"3.2把文件添加到版本库：","slug":"_3-2把文件添加到版本库","link":"#_3-2把文件添加到版本库","children":[]},{"level":3,"title":"3.3编写一个readme.txt文件","slug":"_3-3编写一个readme-txt文件","link":"#_3-3编写一个readme-txt文件","children":[]}]},{"level":2,"title":"4.git的版本控制","slug":"_4-git的版本控制","link":"#_4-git的版本控制","children":[{"level":3,"title":"4.1版本回退","slug":"_4-1版本回退","link":"#_4-1版本回退","children":[]},{"level":3,"title":"4.2工作区和暂存区","slug":"_4-2工作区和暂存区","link":"#_4-2工作区和暂存区","children":[]},{"level":3,"title":"4.3管理修改","slug":"_4-3管理修改","link":"#_4-3管理修改","children":[]},{"level":3,"title":"4.4撤销修改","slug":"_4-4撤销修改","link":"#_4-4撤销修改","children":[]},{"level":3,"title":"4.5删除文件","slug":"_4-5删除文件","link":"#_4-5删除文件","children":[]}]},{"level":2,"title":"5.远程仓库","slug":"_5-远程仓库","link":"#_5-远程仓库","children":[{"level":3,"title":"5.1绑定github仓库","slug":"_5-1绑定github仓库","link":"#_5-1绑定github仓库","children":[]},{"level":3,"title":"5.2添加远程库","slug":"_5-2添加远程库","link":"#_5-2添加远程库","children":[]},{"level":3,"title":"5.3从远程库克隆","slug":"_5-3从远程库克隆","link":"#_5-3从远程库克隆","children":[]}]},{"level":2,"title":"6.分支管理","slug":"_6-分支管理","link":"#_6-分支管理","children":[{"level":3,"title":"6.1创建与合并分支","slug":"_6-1创建与合并分支","link":"#_6-1创建与合并分支","children":[]},{"level":3,"title":"6.2解决冲突","slug":"_6-2解决冲突","link":"#_6-2解决冲突","children":[]},{"level":3,"title":"6.3分支管理策略","slug":"_6-3分支管理策略","link":"#_6-3分支管理策略","children":[]},{"level":3,"title":"6.4.Bug分支","slug":"_6-4-bug分支","link":"#_6-4-bug分支","children":[]},{"level":3,"title":"6.5Feature分支","slug":"_6-5feature分支","link":"#_6-5feature分支","children":[]},{"level":3,"title":"6.6多人协作","slug":"_6-6多人协作","link":"#_6-6多人协作","children":[]},{"level":3,"title":"6.7Rebase","slug":"_6-7rebase","link":"#_6-7rebase","children":[]}]},{"level":2,"title":"7.标签管理","slug":"_7-标签管理","link":"#_7-标签管理","children":[{"level":3,"title":"7.1创建标签","slug":"_7-1创建标签","link":"#_7-1创建标签","children":[]},{"level":3,"title":"7.2操作标签","slug":"_7-2操作标签","link":"#_7-2操作标签","children":[]}]},{"level":2,"title":"8.使用GitHub","slug":"_8-使用github","link":"#_8-使用github","children":[]}],"git":{"createdTime":1713422684000,"updatedTime":1713422684000,"contributors":[{"name":"kdmvp-lin","email":"1561790129@qq.com","commits":1}]},"readingTime":{"minutes":49.11,"words":14733},"filePathRelative":"posts/git_note/git_note.md","localizedDate":"2024年4月18日","excerpt":"\\n<h2>1.简介</h2>\\n<h3>1.1集中式vs分布式</h3>\\n<p>​\\t\\t集中式版本控制系统，版本库是集中存放在中央服务器的，而干活的时候，用的都是自己的电脑，所以要先从中央服务器取得最新的版本，然后开始干活，干完活了，再把自己的活推送给中央服务器。中央服务器就好比是一个图书馆，你要改一本书，必须先从图书馆借出来，然后回到家自己改，改完了，再放回图书馆。</p>\\n<p>​\\t\\t那分布式版本控制系统与集中式版本控制系统有何不同呢？首先，分布式版本控制系统根本没有“中央服务器”，每个人的电脑上都是一个完整的版本库，这样，你工作的时候，就不需要联网了，因为版本库就在你自己的电脑上。既然每个人电脑上都有一个完整的版本库，那多个人如何协作呢？比方说你在自己电脑上改了文件A，你的同事也在他的电脑上改了文件A，这时，你们俩之间只需把各自的修改推送给对方，就可以互相看到对方的修改了。</p>","autoDesc":true}`);export{u as comp,m as data};