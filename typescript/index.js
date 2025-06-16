"use strict";
// 基础类型
let age = 20;
let username = "张三";
let isShow = true;
let s = Symbol();
console.log(s);
// 数组类型
// 两种方式
let arr = [12, 6];
let arr1 = ["78", "6"];
let arr2 = ["a", "b", "c"];
let str = [12, 4, 5, 7];
// 数组联合类型
let str_arr = [1, 2, 4, 6, undefined];
let arr3 = [1, 2, 3, "8"];
// 函数类型
// 函数声明
function add(num1, num2) {
    return num1 + num2;
}
// 函数表达式
const add1 = (num1, num2) => {
    return num1 + num2;
};
// 同时指定参数，返回值类型
const add2 = (num1, num2) => {
    return num1 + num2;
};
add(20, 10);
// void 返回值为空
function hello() { }
// 函数可选参数
function phone(width, height, weight) { }
/**
 *
 * 对象类型
 */
let animal = {
    name: "jack",
    age: 20,
    speak() {
        return 100;
    },
};
function axios(config) { }
axios({ url: "/api/get", methods: "get" });
let person = {
    name: "章三",
    age: 20,
    sayhi() { },
};
let point4 = {
    x: 1,
    y: 200,
    z: 200,
    sum(a, b) {
        return a;
    },
};
/**
 * 元祖
 */
let position = [12.348, 758.8];
/**
 * 类型断言
 */
let alink = document.getElementById("cen");
let aa = document.getElementById("cen");
alink.href;
