import { tsExternalModuleReference, exportAllDeclaration } from "@babel/types";
import {pad} from "./sample";
// function x2(value) {
//      return value * 2;
// }

// test("2を入れたら4になる", () => { // 第一引数はテストの名前
//     // テストしたいコード
//     const value = x2(2);
//     // 関数の戻り値が正しいか検証
//     expect(value).toBe(4); // テストの関数として用意されている
// })

function getWeather(weather) {
    return `今日の天気は${weather}です`;
}

describe("天気のテスト", () => { // グループ化されて見やすくなる、入れごにもできる

    test("天気が返ってくる", () => {
        const weatherInfo = getWeather("晴れ");
        expect(weatherInfo).toBe("今日の天気は晴れです");
        const weatherInfo2 = getWeather("雨");
        expect(weatherInfo2).toBe("今日の天気は雨です");
    });
})

// sample.jsに転記してimport
// function pad(value) {
//     if(value < 10) {
//         return "0" + value;
//     } else {
//         return 10;
//     }
// }

describe("パディングの処理", () => {

    test("3を入れたら03になる", () => {
        const value = pad(3);
        expect(value).toBe("03");
    });

    // for文的に,２個同時にテストを行う
    test.each([
        {input: 4, out: "04"},
        {input: 20, out: "20"}
    ])("数値のテスト %o", (item) => { // "数値のテスト %o"で引数を取れる（Objectはだめ）
        const value = pad(item.input);
        expect(value).toBe(item.out);
    })
});