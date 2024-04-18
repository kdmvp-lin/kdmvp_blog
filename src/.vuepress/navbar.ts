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
    text: "博客开发文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
