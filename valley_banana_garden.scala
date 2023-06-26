//Import necessary libraries
import scala.collection.mutable.Map
import scala.collection.mutable.ListBuffer

// Define an object to store and manage healthy habits
object HealthyHabits { 
  // Create a mutable map to store habit names and corresponding associated tip
  val habitsMap: Map[String, String] = Map()

  // Add habits and tips to the mutable map
  habitsMap.put("Exercise", "Get at least 30 minutes of exercise every day!")
  habitsMap.put("Eat Healthy", "Eat more fruits and vegetables!")
  habitsMap.put("Get Enough Sleep", "Make sure to get 7-9 hours of sleep!")
  habitsMap.put("Drink Water", "Drink at least 8 glasses of water per day!")

  // Create a mutable ListBuffer to store array of habit names
  var habitsList: ListBuffer[String] = ListBuffer()

  // Add habits to ListBuffer
  habitsList += "Exercise"
  habitsList += "Eat Healthy"
  habitsList += "Get Enough Sleep"
  habitsList += "Drink Water"

  // Create a method to print out the habit names and associated tips
  def printHabits: Unit = {
    habitsList.foreach{ habit =>
      println(s"Habit: ${habit}")
      println(s"Tip: ${habitsMap.getOrElse(habit, "Not Found")}")
      println("\n")
    }
  }
}

// Call the HealthyHabits object printHabits method
HealthyHabits.printHabits