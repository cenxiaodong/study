// 基础类型

let age: number = 20;
let username: string = "张三";
let isShow: boolean = true;
let s: symbol = Symbol();

console.log(s);

// 数组类型
// 两种方式
let arr: number[] = [12, 6];
let arr1: string[] = ["78", "6"];

let arr2: Array<string> = ["a", "b", "c"];
let str: Array<number> = [12, 4, 5, 7];
// 数组联合类型
let str_arr: (number | string | undefined)[] = [1, 2, 4, 6, undefined];

// 类型别名

type customArr = (string | number)[];
let arr3: customArr = [true];
