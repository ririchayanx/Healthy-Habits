1.	import java.util.ArrayList
2.	import java.util.HashMap
3.	
4.	object HealthyHabits {
5.	
6.	    def main(args: Array[String]): Unit = {
7.	        // Declare a list of habit stones that can form healthy habits
8.	        val habitStones = new ArrayList[String]
9.	        habitStones.add("Drink water")
10.	        habitStones.add("Eat nutritious meals")
11.	        habitStones.add("Exercise daily")
12.	        habitStones.add("Get enough sleep")
13.	        habitStones.add("Reduce stress")
14.	        habitStones.add("Make time for yourself")
15.	
16.	        // Declare a map of habits and the rewards that come with sustaining them
17.	        val rewards = new HashMap[String, String]()
18.	        rewards.put("Drink water", "Stay hydrated and healthy")
19.	        rewards.put("Eat nutritious meals", "Grow healthy and strong")
20.	        rewards.put("Exercise daily", "Keep your body fit and active")
21.	        rewards.put("Get enough sleep", "Feel energetic and refreshed")
22.	        rewards.put("Reduce stress", "Maintain mental health and peace")
23.	        rewards.put("Make time for yourself", "Discover your passions and pursue them")
24.	
25.	        // Iterate over the habit stones and print out the rewards that accompany them
26.	        habitStones.forEach { stone =>
27.	            println("By practising healthy habit: " + stone + " you can enjoy " + rewards.get(stone))
28.	        }
29.	
30.	        // Declare a list of actions to form healthy habits
31.	        val actions = new ArrayList[String]
32.	        actions.add("Take time to plan your meals for the week")
33.	        actions.add("Set realistic and achievable goals for yourself")
34.	        actions.add("Make a daily to-do list and stick to it")
35.	        actions.add("Schedule time for exercise in your day")
36.	        actions.add("Create a calming bedtime routine")
37.	        actions.add("Take breaks throughout the day to practice mindfulness")
38.	        actions.add("Spend time with friends and family")
39.	
40.	        // Iterate over the list of actions and print out the rewards that accompany them
41.	        actions.forEach { action =>
42.	            println("By taking action: " + action + " you can enjoy the benefit of improved health and wellbeing")
43.	        }
44.	
45.	        // Declare a map of habits and the challenges that come with maintaining them
46.	        val challenges = new HashMap[String, String]()
47.	        challenges.put("Drink water", "Making time to refill your bottle and stay hydrated")
48.	        challenges.put("Eat nutritious meals", "Finding the motivation to cook meals ahead of time")
49.	        challenges.put("Exercise daily", "Finding the discipline to exercise even when you don't feel like it")
50.	        challenges.put("Get enough sleep", "Switching off from work and other stressors to get a full night's rest")
51.	        challenges.put("Reduce stress", "Managing the demands of life while also prioritizing yourself")
52.	        challenges.put("Make time for yourself", "Making self-care a priority despite having a busy schedule")
53.	
54.	        // Iterate over the habit stones and print out the challenges that accompany them
55.	        habitStones.forEach { stone =>
56.	            println("Maintaining healthy habit: " + stone + " can be a challenge due to: " + challenges.get(stone))
57.	        }
58.	
59.	        // Declare a list of resources to help form healthy habits
60.	        val resources = new ArrayList[String]
61.	        resources.add("Apps that remind you to drink water")
62.	        resources.add("Recipes and grocery delivery services that make cooking easier")
63.	        resources.add("Guided exercise classes and fitness videos")
64.	        resources.add("Podcasts and sleep tracking apps to monitor your sleep")
65.	        resources.add("Meditation and mindfulness apps to manage stress")
66.	        resources.add("Online courses and books to help with self-growth")
67.	
68.	        // Iterate over the list of resources and print out how they can help form healthy habits
69.	        resources.forEach { resource =>
70.	            println("Using resource: " + resource + " can help you form healthy habits and enjoy the associated benefits")
71.	        }
72.	    }
73.	
74.	}