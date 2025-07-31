import { fizzbuzz } from "./fizzbuzz";

describe('数を文字列に変換する', () => {

  describe('その他の数の時はそのまま文字列に変換する', () => {
    it('1を入力したら1を返す', () => {
      // 準備

      // 実行 & 検証
      expect(fizzbuzz(1)).toBe('1');
    });

    it('2を入力したら2を返す', () => {
      // 準備

      // 実行 & 検証
      expect(fizzbuzz(2)).toBe('2');
    })

  });

  describe('3の倍数を入力したら数の代わりにFizzを返す', () => {
    it('3を入力したらFizzを返す', () => {
      // 準備

      // 実行 & 検証
      expect(fizzbuzz(3)).toBe('Fizz');
    });
  })

})

