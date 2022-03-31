import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.print("何人分の情報を入力しますか：");
    int num = scanner.nextInt();

    for(int i = 1; i <= num; i++) {
      System.out.println(i + "人目");
      personInfo(scanner);
    }
  }

  public static void personInfo(Scanner scanner) {
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
  }
}
