class Main {
  public static void main(String[] args) {
    Car car = new Car();
    car.setName("フェラーリ");
    car.setColor("赤");
    
    Bicycle bicycle = new Bicycle();
    bicycle.setName("ビアンキ");
    bicycle.setColor("緑");
    
    System.out.println("【車の情報】");
    car.printData();

    System.out.println("=================");
    System.out.println("【自転車の情報】");
    bicycle.printData();
  }
}
