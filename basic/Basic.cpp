// Jenny's secret message - 8 kyu
std::string greet(std::string name) {
  if(name == "Johnny") {
    return "Hello, my love!";
  }
  return "Hello, " + name + "!";
}

// You Can't Code Under Pressure #1 - 8 kyu
#include <cstdint>
int32_t double_integer(int32_t n){
  return n*2;
}


// Get Planet Name By ID - 8 kyu
#include <string>
std::string get_planet_name(int id)
{
    std::string name;
    switch (id) {
    case 1: name = "Mercury"; break;
    case 2: name = "Venus";break;
    case 3: name = "Earth";break;
    case 4: name = "Mars";break;
    case 5: name = "Jupiter";break;
    case 6: name = "Saturn";break;
    case 7: name = "Uranus";break;
    case 8: name = "Neptune";
    }
    return name;
}