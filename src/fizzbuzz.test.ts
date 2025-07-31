import { fizzbuzz } from "./fizzbuzz";

it('1を入力したら1を返す', () => {
  // 準備

  // 実行 & 検証
  expect(fizzbuzz(1)).toBe('1');
});

it('2を入力したら2を返す', () => {
  // 準備

  // 実行 & 検証
  expect(fizzbuzz(2)).toBe('2');
});

it('3を入力したらFizzを返す', () => {
  // 準備

  // 実行 & 検証
  expect(fizzbuzz(3)).toBe('Fizz');
});