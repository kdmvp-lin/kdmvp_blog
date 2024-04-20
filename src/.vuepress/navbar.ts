import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/intro",
  {
    text: "笔记",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "股票",
        icon: "pen-to-square",
        prefix: "stock/",
        children: [
          { text: "股票介绍", icon: "pen-to-square", link: "stock" },
          { text: "股票技术性分析", icon: "pen-to-square", link: "Technical_analysis" },
        ],
      },
      {
        text: "基金",
        icon: "pen-to-square",
        prefix: "fund/",
        children: [
          { text: "基金介绍", icon: "pen-to-square", link: "fund" },

        ],
      },
      {
        text: "python",
        icon: "pen-to-square",
        prefix: "python/",
        children: [
          { text: "python笔记", icon: "pen-to-square", link: "Python_note" },
          { text: "计算机视觉", icon: "pen-to-square", link: "OpenCV_Pthon_note" },

        ],
      },
      {
        text: "markdown_note",
        icon: "pen-to-square",
        prefix: "markdown_note/",
        children: [
          { text: "markdown_note", icon: "pen-to-square", link: "markdown_note" },
        ],
      },
      {
        text: "java",
        icon: "pen-to-square",
        prefix: "java_note/",
        children: [
          { text: "java", icon: "pen-to-square", link: "Java_note" },
          { text: "SpringBoot+Vue", icon: "pen-to-square", link: "SpringBoot_Vue" },
        ],
      },
      {
        text: "docker",
        icon: "pen-to-square",
        prefix: "docker/",
        children: [
          { text: "docker", icon: "pen-to-square", link: "docker" },
        ],
      },
      {
        text: "conda",
        icon: "pen-to-square",
        prefix: "conda/",
        children: [
          { text: "conda命令", icon: "pen-to-square", link: "Conda" },
        ],
      },
      {
        text: "面试",
        icon: "pen-to-square",
        prefix: "interview/",
        children: [
          { text: "实习面试", icon: "pen-to-square", link: "interview" },
        ],
      },

    ],
  },
  {
    text: "AI工具",
    icon: "book",
    children: [
      {
        text: "国外（需要vpn）",
        children: [
          { text: "ChatGPT", link: "https://openai.com/blog/chatgpt/" },
          { text: "Claude 3", link: "https://www.anthropic.com/" },
          { text: "Meta Llama 3", link: "https://ai.meta.com/" },
          { text: "gemini", link: "https://deepmind.google/technologies/gemini/" },
          { text: "huggingChat", link: "https://huggingface.co/chat/" },
        ],
      },
      {
        text: "国内",
        children: [
          { text: "kimi", link: "https://kimi.moonshot.cn/" },
          { text: "文心一言", link: "https://yiyan.baidu.com/" },
          { text: "讯飞星火", link: "https://xinghuo.xfyun.cn/" },
          { text: "通义千问", link: "https://tongyi.aliyun.com/" },
          { text: "AI工具箱", link: "https://www.phpcms9.com/" },
        ],
      },

    ],
  },
  {
    text: "博客开发文档",
    link: "https://theme-hope.vuejs.press/zh/",
  },

]);
