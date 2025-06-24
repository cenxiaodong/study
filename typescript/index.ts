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
let arr3: customArr = [1, 2, 3, "8"];

// 函数类型

// 函数声明
function add(num1: number, num2: number): number {
  return num1 + num2;
}
// 函数表达式

const add1 = (num1: number, num2: number): number => {
  return num1 + num2;
};
// 同时指定参数，返回值类型
const add2: (num1: number, num2: number) => number = (num1, num2) => {
  return num1 + num2;
};

add(20, 10);
// void 返回值为空
function hello(): void {}

// 函数可选参数

function phone(width: number, height: number, weight?: number): void {}

/**
 *
 * 对象类型
 */

let animal: { name: string; age: number; speak(): number } = {
  name: "jack",
  age: 20,
  speak() {
    return 100;
  },
};

function axios(config: { url: string; methods?: string }) {}

axios({ url: "/api/get", methods: "get" });

/**
 * 接口
 */

interface Iperson {
  name: string;
  age: number;
  sayhi: () => void;
}

let person: Iperson = {
  name: "章三",
  age: 20,
  sayhi() {},
};

// 接口继承

interface point2 {
  x: number;
  y: number;
  sum(a: number, b?: number | undefined): number;
}

interface point3 extends point2 {
  z: number;
}

let point4: point3 = {
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

let position: [number, number] = [12.348, 758.8];

/**
 * 类型断言
 */

let alink = document.getElementById("cen") as HTMLAnchorElement;
let aa = <HTMLAnchorElement>document.getElementById("cen");

alink.href;

let a = "hello ts";
const a2 = "hello ts";

function changeDirection(dirrction: "up" | "down" | "left" | "right") {}
changeDirection("down");

enum Direction {
  Up = 4,
  Down,
  Left,
  Right,
}

function changeD(direction: Direction) {
  console.log(direction);
}
changeD(Direction.Left);

let obj = { x: 1, y: 2 };

function formatPoint(point: typeof obj) {}

formatPoint({ x: 1, y: 89 });
