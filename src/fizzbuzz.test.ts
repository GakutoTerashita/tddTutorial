import { fizzbuzz } from "./fizzbuzz";

it('1を入力したら1を返す', () => {
  // 準備

  // 実行 & 検証
  expect(fizzbuzz(1)).toEqual('1');
});