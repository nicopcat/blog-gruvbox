---
title: "Hugo | Custom Domain 自定义域名篇"
date: 2022-01-09T13:55:19+08:00
draft: false
showToc: true
tags: ["Hugo","域名"]
---

你可以在网上买域名，也可以使用免费域名。  
下面的文章将介绍如何在免费域名网站 [freenom](https://www.freenom.com/) 购买并更换为 blog 域名。

### 1. 购买免费域名

- 进到 [freenom](https://www.freenom.com/) 官网，注册一下，选择其中一个结账
  <!-- ![20211123152149](https://i.loli.net/2021/11/23/vS8wIAzhW1tyGs5.png) -->
  <img src="https://i.loli.net/2021/11/23/vS8wIAzhW1tyGs5.png" width = "400" alt="freenom" />

- 但这个网站有个小 bug，直接点 `get it now` 会显示 `Not available`。此时，你需要复制整个域名，比如 `hugo666.tk` 到搜索框，再一次 `Check Availibility`，接着点 `Checkout`。
- `Period` 选 `12 months FREE`, 完成结账，全程不需要银行卡，非常友好。

- 点击导航栏的 `Services` - `My Domains` 在这里你能看到刚刚得到的域名，这个页面不要关，稍后需要继续设置。

### 2. 域名解析 - DNSPod

- 打开 [DNSPod](https://www.dnspod.cn/)，用微信注册一下账号，需要实名登记。完成以后点击顶上的 `DNS`，选择 `DNS解析`

- 此时已经进到 `我的域名` 版面

![20211123154157](https://i.loli.net/2021/11/23/ykMVugWKYEFvRpc.png)

- 点击 `添加域名` - `确认` 这时会提示`未正确设置 DNS 服务器`
  <img src="https://i.loli.net/2021/11/23/CxpFjJVbB9Ke7WQ.png" height = "350" alt="freenom2" />

这时，需要复制这两个 `正确的DNS服务器` 地址。  
回到刚刚的 `My Domain`页面，点击 `Manage Domain` - `Management Tools` - `Nameservers` 按下列填写，保存即可
<img src="https://i.loli.net/2021/11/23/O8NpnUXISQweDFJ.png" height = "350" alt="freenom2" />

- 再回到 DNSPod，点重新验证，此时发现域名状态变为`正常`。

### 3. 设置 custom domain

打开 [Github Pages 官方教程](https://docs.github.com/cn/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
![20211123163458](https://i.loli.net/2021/11/23/s3bBjCOqW67vy4k.png)

#### 3.1 解析为带 www 的 domain

- 官方文档说，若要解析带 `www` 的 domain，记录类型为 `CNAME`（默认 A）
- 那么回到 DNSpod 的`我的域名`，点击域名，添加记录：
  - `主机记录`： `www`
  - `记录类型`： `CNAME`
  - `线路类型`： 默认
  - `记录值`： username.github.io. ，然后点 `确认`

#### 3.2 不带 www 的 domain

- 同样，回到 DNSpod 的`我的域名`，点击域名，添加记录：

  - `主机记录`： `@`
  - `记录类型`： `A`
  - `线路类型`： 默认
  - `记录值`： 为 4 个 ip 地址，最好都记录上，然后点 `确认`

  ![20211123160856](https://i.loli.net/2021/11/23/auzNPdhDHtbw81Q.png)

  ```
  //复制粘贴即可
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
  ```

### 4. 回到 Github Pages 更新该域名

- 回到 Github Pages 页面，在`Custom domain` 处填上域名，保存即可，如我的 www.niqks.tk
  ![my-first-post-2021-12-30](https://blogpic-1308403500.file.myqcloud.com/markdown/my-first-post-2021-12-30.png)
- 这时，你会发现仓库里的代码多了一个 `CNAME` 文件，里面有一条 `域名` 的记录。
- 这时，你已经可以通过自定义域名访问到博客了。
