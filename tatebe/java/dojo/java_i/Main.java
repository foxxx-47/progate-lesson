import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.print("何人分の情報を入力しますか：");
    int num = scanner.nextInt();

    int maxAge = 0;
    for(int i = 1; i <= num; i++) {
      System.out.println(i + "人目");
      System.out.println("名前：");
      String firstName = scanner.next();
      System.out.println("名前は" + firstName + "です");

      System.out.print("名字：");
      String lastName = scanner.next();

      System.out.print("年齢：");
      int age = scanner.nextInt();

      System.out.print("身長：");
      double height = scanner.nextDouble();

      System.out.print("体重：");
      double weight = scanner.nextDouble();

      Person.printData(Person.fullName(firstName, lastName), age, height, weight, Person.bmi(height, weight));

      if (maxAge < age) {
        maxAge = age;
      }
    }

    System.out.println("最高年齢は" + maxAge + "歳です");
  }
}
