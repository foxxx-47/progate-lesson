class Main {
  public static void main(String[] args) {
    Person person1 = new Person();
    person1.hello();
    
    // person1のインスタンスフィールドnameに「Kate Jones」をセットしてください
    person1.name = "Kate Jones";
    
    // person1のインスタンスフィールドnameの値を出力してください
    System.out.println(person1.name);

    Person person2 = new Person();
    person2.hello();
    
    // person2のインスタンスフィールドnameに「John Christopher Smith」をセットしてください
    person2.name = "John Christopher Smith";
    
    // person2のインスタンスフィールドnameの値を出力してください
    System.out.println(person2.name);
    
  }
}
