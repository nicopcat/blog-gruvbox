---
title: "chatGPT（依赖版"
date: 2023-05-03T02:00:00+08:00
tags: ["chatGPT"]
draft: false
---

在整Hugo的tag页面时，碰到困难，突然想起可以问问chatGPT.


**ME**: 

```html
<!-- layouts/_default/list.html -->
{{ define "main" }}
<article>
  <header>
    <h1>All {{ .Type }}</h1>
  </header>
    <div class="body">
      <!-- <div class="tags">
        {{ range .Pages }}
        <span>
          <a href="{{ .RelPermalink }}" title="{{ .Description }}">{{ .Title }} </a>
        </span>
        {{ end }}
      </div> -->
      <ol style="list-style-type:disc">
        {{ range .Pages }}
        <li>
          <a href="{{ .RelPermalink }}" title="{{ .Description }}">{{ .Title }} </a>
        </li>
        {{ end }}
      </ol>
    </div>
</article>
{{ end }}

```

重写这段代码，以实现“如果.Type 等于 tags时，使用下面这份模板：
```html
<!-- partails/taxonomy.html -->
<div class="tags">
    {{ range .Pages }}
    <span>
        <a href="{{ .RelPermalink }}" title="{{ .Description }}">{{ .Title }}</a>
    </span>
    {{ end }}
</div>
```

**chatGPT**:
可以使用 Go 模板语言的条件语句来实现这一需求。下面是一个可能的重写：

```html
<!-- layouts/_default/list.html -->
{{ if eq .Type "tags" }}
  <div class="tags">
    {{ range .Pages }}
      <span>
        <a href="{{ .RelPermalink }}" title="{{ .Description }}">{{ .Title }}</a>
      </span>
    {{ end }}
  </div>
{{ else }}
  <article>
    <header>
      <h1>All {{ .Type }}</h1>
    </header>
    <div class="body">
      <ol style="list-style-type:disc">
        {{ range .Pages }}
          <li>
            <a href="{{ .RelPermalink }}" title="{{ .Description }}">{{ .Title }}</a>
          </li>
        {{ end }}
      </ol>
    </div>
  </article>
{{ end }}
```

这段代码首先使用 if 条件语句检查 .Type 是否等于字符串 "tags"。如果是，则输出包含所有标签的 div。否则，就按照之前的模板输出所有页面的有序列表。


---

最终, layouts/_default/list.html 改成：

```html
{{ define "main" }}
<article>
  <header>
    <h1>All {{ .Type }}</h1>
  </header>
    <div class="body">
      <!-- 也是if else 嘛  -->
      {{ if eq .Type "tags" }}
      <div class="tags">
        {{ range .Pages }}
        <span>
            <a href="{{ .RelPermalink }}" title="{{ .Description }}">{{ .Title }}</a>
        </span>
        {{ end }}
      {{ else }}
            <ol style="list-style-type:disc">
              {{ range .Pages }}
                <li>
                  <a href="{{ .RelPermalink }}" title="{{ .Description }}">{{ .Title }}</a>
                </li>
              {{ end }}
            </ol>
      {{ end }}
    </div>
</article>
{{ end }}
```

..

and it just works