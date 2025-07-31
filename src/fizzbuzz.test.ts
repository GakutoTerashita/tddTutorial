import { fizzbuzz } from "./fizzbuzz";

it('数を文字列に変換する', () => {
  // 準備

  // 実行
  const actual = fizzbuzz();
  // 検証
  expect(actual).toEqual('1');
});