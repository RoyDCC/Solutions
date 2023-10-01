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