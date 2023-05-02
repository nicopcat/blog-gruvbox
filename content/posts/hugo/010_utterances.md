---
title: "给Hugo博客添加utterances评论插件"
date: 2023-05-03T00:00:00+08:00
# lastmod: 2022-01-09T16:39:00+08:00
draft: false
tags: ["Hugo","评论"]
---
utterances 是一个基于GitHub issues的轻量级评论系统，部署非常简单。

官网：[utteranc.es](https://utteranc.es/)

# 第一步

下载 [utterances 应用](https://github.com/apps/utterances)

# 第二步

创建一个公开的github repo，例如我的repo名称为 `nicopcat/utterances`

# 第三步

### 第一种做法
在 theme/layouts/partials 下新建模板文件 `utterances.html`：
```html
{{ if .Site.Params.utteranc.enable }}
  <script src="https://utteranc.es/client.js"
  repo="{{ .Site.Params.utteranc.repo }}"
  issue-term="{{ .Site.Params.utteranc.issueTerm }}"
  theme="{{ .Site.Params.utteranc.theme }}"
  crossorigin="anonymous"
  async>
  </script>
{{ end }}
```

并在 theme/layouts/_default/single.html 中加入utterances.html：
```html
<footer>
  ...
  {{ partial "utterances.html" . }}
  ...
</footer>
```

最后在`config.toml`中写配置：
```toml
[params.utteranc]
  enable = true
  repo = "nicopcat/utterances"
  issueTerm = "title"
  theme = "boxy-light"

```

### 第二种做法
你也可以在 single.html 中直接加入脚本：
```html
  <footer>
    <script src="https://utteranc.es/client.js"
        repo="nicopcat/utterances" //你的仓库名
        issue-term="pathname" 
        theme="github-dark"   //风格
        crossorigin="anonymous"
        async>
    </script>
    <!-- {{ partial "utterances.html" . }} -->
  </footer>
```

效果是一样的，只是改配置不如第一种做法方便。