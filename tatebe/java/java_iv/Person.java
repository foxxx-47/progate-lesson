class Person {
  public String name;

  public void hello() {
    // thisを用いて、「こんにちは、私は◯◯です」で出力するように以下を書き換えてください
    System.out.println("こんにちは、私は" + this.name + "です");
  }
}
