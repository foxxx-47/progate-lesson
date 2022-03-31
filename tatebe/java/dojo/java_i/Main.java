import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.println("名前：");
    String firstName = scanner.next();
    System.out.println("名前は" + firstName + "です");

    System.out.print("名字：");
    String lastName = scanner.next();

    System.out.print("年齢：");
    int age = scanner.nextInt();
    
    String fullName = firstName + " " + lastName;
    System.out.println("名前は" + fullName + "です");

    System.out.println("年齢は" + age + "歳です");
    if (age >= 20) {
      System.out.println("成年者です");
    } else {
      System.out.println("未成年者です");
    }
  }
}
