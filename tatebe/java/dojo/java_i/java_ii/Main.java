import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    Bicycle bicycle1 = new Bicycle("ビアンキ", "緑");
    bicycle1.printData();

    System.out.println("-----------------");

    System.out.print("走る距離を入力してください：");
    int biCycleDistance = sc.nextInt();
    bicycle1.run(biCycleDistance);

    System.out.println("=================");

    Car car1 = new Car("フェラーリ", "赤");
    car1.printData();

    System.out.println("-----------------");

    System.out.print("走る距離を入力してください：");
    int carDistance = sc.nextInt();
    car1.run(carDistance);
  }
}