class Bicycle {
  private String name;

  Bicycle(String name) {
    this.name = name;
  }

  public void printData() {
    System.out.println("【自転車の情報】");
    System.out.println("名前：" + this.name);
  }
}