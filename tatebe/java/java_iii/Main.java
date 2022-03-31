// java.util.Scannerを読み込んでください
import java.util.Scanner;

class Main {
  public static void main (String[] args) {
    Scanner scanner = new Scanner(System.in);
    
    System.out.print("名前： ");
    
    // 変数nameを定義し、コンソールから文字列を受け取って代入してください
    String name = scanner.next();
    
    // 「こんにちは◯◯さん」と出力してください
    System.out.println("こんにちは" + name + "さん");
  }
}