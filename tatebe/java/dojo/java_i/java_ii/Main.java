class Main {
  public static void main(String[] args) {
    Bicycle bicycle1 = new Bicycle("ビアンキ", "緑");
    bicycle1.printData();

    System.out.println("-----------------");

    bicycle1.run(10);
  }
}