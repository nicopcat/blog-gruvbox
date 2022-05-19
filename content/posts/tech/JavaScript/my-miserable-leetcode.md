---
title: "力扣 oh Leetcode"
date: 2022-05-18T11:00:00+08:00
tags: ["JavaScript","力扣"]
draft: false
---
作为一个准前端开发者，我天真地以为不用看力扣，~~你只是个切图仔~~。但感受到各方各界的暗示：你得看，你得看看。  

好吧，其实是快要机考了。  

从网上搜的机考真题来看，貌似是3道算法题，难度也许在力扣简单-中等之间。对于一个月前才知道 codewars 这个可爱网站的我来说，不啻晴天霹雳，于是我跑到力扣大概看了几道简单的题目。  

第一题很“简单”，只用一个了一个JS的方法就可以计算出来。查看他人的解题，发现大家的思路很不一样，甚至很陌生。这些新奇的思路（不用库）大概就是传说中的**算法**吧。

啊，算法，犹如哥伦布一脚踏进美洲，还以为是另一个印度呢。  

---

## 已了解/未了解：

- [X] 二分算法
- [ ] 哈希算法
- [ ] 滑动窗口
- [X] 左右双指针

---

### 题目： 判断str是否为回文字符串
来自牛客网
左右双指针：
```js
function judge(str) {
  let left = 0;
  let right = str.length - 1;
  if (str.length === 0) return false;
  while (left <= right) {
    if (str[left] !== str[right]) {
      return false
    } else {
      left++;
      right--;
    }
  }
  return true;
}
```
循环：
```js
function judge(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true
}
```

### 题目：求1~n内互质与n互质的数组
来自 codewars [Coprimes up to N](https://www.codewars.com/kata/59e0dbb72a7acc3610000017/train/javascript)
example:
```
2 -> [1]
6 -> [1, 5]
10 -> [1, 3, 7, 9]
20 -> [1, 3, 7, 9, 11, 13, 17, 19]
30 -> [1, 7, 11, 13, 17, 19, 23, 29]
```
思路：欧几里得算法（辗转相除法）求最大公约数
```js
function coprimes(n) {
  // 1. 创建1~n的数组
  let arr = [...Array(n).keys()].map(n=>n+1);
  // 2. 互质 意思是两个共同的被除数只有1
  // 3. 使用欧几里得算法 可求最大公约数
  // 4。若最大公约数为1 则互质呗
  return arr.filter(item=> {
    function f(a, b) {
      return b === 0 ? a : f(b, a % b);
    }
    return f(n,item) === 1;
  })
};
```