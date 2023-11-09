// Jenny's secret message - 8 kyu
public class Greeter {
  public static String greet(String name) {
    
    
    if(name.equals("Johnny")){
      return "Hello, my love!";
    }
    return String.format("Hello, %s!", name);
  }
}


// You Can't Code Under Pressure #1 - 8 kyu
class Java {
  public static int doubleInteger(int i) {
    return i*2;
  }
}


// Ghost code?! - 8 kyu
public class GhostCode{
  public static String helloName(final String name){
    if(name == null || name.equals("")){
      return "Hello world!";
    }else{
      return "Hello my name is " + name;
    }
  }
}


// Get Planet Name By ID - 8 kyu
class Planet {
  static String getPlanetName(int id) {
    String name = null;
    switch (id) {
      case 1:name = "Mercury"; break;
      case 2:name = "Venus";break;
      case 3:name = "Earth";break;
      case 4:name = "Mars";break;
      case 5:name = "Jupiter";break;
      case 6:name = "Saturn";break;
      case 7:name = "Uranus";break;
      case 8:name = "Neptune";
    }
    return name;
  }
}