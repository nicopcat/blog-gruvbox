


Promise
# JS的执行
众所周知，在JavaScript的世界中，所有代码都是单线程执行的。下面的例子中，`console.log('Second log')`不得不等待`stopThis()`中的定时器打印完毕，才能接着打印。

```js
function stopThis() {
  setTimeout(() => {
    console.log('You need to wait line, haha.')
  }, 2000)
}

// 立即打印
console.log('First log')
// 等待2秒 'You need to wait line, haha.'
stopThis(); 

// 然后立即打印
console.log('Second log')
```

单线程执行的缺点是，很容易阻塞其他内容的加载进程。


在网络请求的世界，都是需要异步操作的，因为服务器不可能立即返回数据到客户端，这就产生了问题—：总不能啥也不做，干等着服务器返回数据吧。

于是就有了一些解决方案。

# 异步请求1.0 ———— 古早的Callback
难不倒咱，可以用回调函数解决。上文举例的setTimeout()实际上也是一个回调函数：倒数结束以后，执行callback。
```js
function isCallback() {
  setTimeout(() => {
    console.log("I'm a callback.")
  }, 2000)
}

isCallback()
//2秒后打印： I'm a callback.
```

但，功能复杂的回调函数耦合度高，且会造成一个人尽皆知的后果：回调地狱
![callback-hell](https://nic-gz-1308403500.file.myqcloud.com/posts/js-promise-2022-07-02-21-02-58.png)


于是就有了一种更优雅的异步操作手段：Promise
# 异步请求2.0 ———— Promise
Promise是一个对象，它接受两个参数：resolve和reject，它们是两个函数，分别表示成功和失败的结果。

使用Promise写异步请求，意味着在将来的某个时间点，Promise一定会返回一个结果，并保存在resolve和reject中。

Jecelyn Yeen在她的文章中，举了一个非常浅显易懂的例子来接是Promise的概念。

她假设，你是一个小孩，你妈妈承诺下周会帮你买一部新手机。其间会有三种状态：

1. Pending: 你不知道自己是否会得到
2. Fullfilled：妈妈很高兴，帮你买了新手机
3. Reject：妈妈心情差，没有帮你买新手机

用代码实现一下：

```js
const isMomHappy = Math.random() * 2;
const willGetNewPhone = new Promise((resolve, reject) => {
  if (isMomHappy > 1) {
    const phone = {
      brand: 'apple',
      color: 'black'
    }
    resolve(phone);
  } else {
    const reason = new Error('mon is not happy')
    reject(reason)
  }
})
```
我在这里用`Math.random()`模拟妈妈阴晴不定的情绪（不是），结果或是成功（resolve），或是失败（reject）。


接着，让我们使用这个Promise问妈妈要一下手机。
```js
const askMom = () => {
  willGetNewPhone
    .then(fullfilled => {

      // I got the apple black phone
      console.log(`I got the ${fullfilled.brand} ${fullfilled.color} phone`)
    })
    .catch(error => {
      // mon is not happy
      console.log(error.message)
    })
}

askMom()
```




## Promise术语
1. promise：是一个拥有 then 方法的对象或函数，其行为符合本规范

2. thenable：是一个定义了 then 方法的对象或函数。这个主要是用来兼容一些老的

3. Promise实现，只要一个Promise实现是thenable，也就是拥有then方法的，就可以
跟Promises/A+兼容。

4. value：指reslove出来的值，可以是任何合法的JS值(包括 undefined , thenable 和 promise等)

5. exception：异常，在Promise里面用throw抛出来的值

6. reason：拒绝原因，是reject里面传的参数，表示reject的原因
Promise状


---
# 参考
廖雪峰 https://www.liaoxuefeng.com/wiki/1022910821149312/1023024413276544

Understanding JavaScript Promises https://www.digitalocean.com/community/tutorials/understanding-javascript-promises
 

手写一个Promise/A+ https://segmentfault.com/a/1190000023157856###