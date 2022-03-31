// java.lang.Mathを読み込んでください
import java.lang.Math;

class Person {
  public static void printData(String name, int age, double height, double weight) {
    System.out.println("私の名前は" + name + "です");
    System.out.println("年齢は" + age + "歳です");
    System.out.println("身長は" + height + "mです");
    System.out.println("体重は" + weight + "kgです");
    double bmi = bmi(height, weight);
    // Mathクラスのroundメソッドを用いて、BMIを四捨五入して出力するようにしてください
    System.out.println("BMIは" + Math.round(bmi) + "です");

    if (isHealthy(bmi)) {
      System.out.println("標準値です");
    } else {
      System.out.println("標準値の範囲外です");
    }
  }

  public static String fullName(String firstName, String lastName) {
    return firstName + " " + lastName;
  }

  public static String fullName(String firstName, String middleName, String lastName) {
    return firstName + " " + middleName + " " + lastName;
  }
  
  public static double bmi(double height, double weight) {
    return weight / height / height;
  }
  
  public static boolean isHealthy(double bmi) {
    return bmi >= 18.5 && bmi < 25.0;
  }
}
