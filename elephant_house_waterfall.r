# Create snapshot of Global health
# Load necessary data
happines_index <- read.csv("happiness_index.csv")
life_expectancy <- read.csv("life_expectancy.csv")
# Calculate global average happiness
overall_happiness <- mean(happines_index$Score)
# Calculate global life expectancy
overall_life_expectancy <- mean(life_expectancy$Years)

# Create Healthy Habits program
# Create plan and goals
plan <- c("Eat nutrituous meals", "Exercise regularly", "Get plenty of sleep", "Reduce stress",
          "Limit alcohol consumption", "Minimize screen time")
goals <- c("Improve happiness index score", "Extend life expectancy", "Increase quality of life")

# Create habits scorecard
habit_scorecard <- data.frame(Habit = plan, Daily = rep(FALSE, length(plan)))
# Create progress tracker for health goals
goal_tracker <- data.frame(Goal = goals, Progress = rep("Not Started", length(goals)))

# Create Healthy Habits checklist
# Generate prompts for every plan
meal_prompts <- c("Eat at least five servings of fruits/veggies every day",
                  "Avoid processed foods with added sugar and sodium",
                  "Include whole grains, legumes, and lean proteins at every meal")
exercise_prompts <- c("Engage in at least 30 minutes of physical activity every day",
                      "Mix cardio activities with strength training exercises",
                      "Try something new – yoga, dance, rock climbing, etc.")
sleep_prompts <- c("Set sleep schedule and try to go to bed and wake up at same time each day",
                   "Take a hot bath, read a book, or listen to soothing music before bed",
                   "Minimize blue light exposure by avoiding screens in the hour before bed")
stress_prompts <- c("Establish a daily mindfulness practice – 10 minutes of meditation, breathing, or stretching",
                    "Schedule time for leisure activities – drawing, reading, listening to music, etc.",
                    "Stay connected .. Reach out to family and friends for support")
alcohol_prompts <- c("Avoid binge drinking – limit consumption to 1-2 drinks per day",
                     "Be mindful of associated risks – health, legal, financial, etc.",
                     "Choose non-alcoholic alternatives – sparkling water, tea, etc.")
screen_prompts <- c("Set limits for yourself and keep track of how much time you spend on screens",
                    "Reward yourself with a non-screen related activity – going for a walk, cooking a meal, etc.",
                    "Turn off screen notifications to limit distractions")
checklist <- data.frame(Habit = plan, Prompt = c(meal_prompts, exercise_prompts, sleep_prompts, 
                                                stress_prompts, alcohol_prompts, screen_prompts))

# Create monthly program member survey
survey_questions <- c("Please rate your overall health: (Poor/Fair/Good/Excellent)",
                      "Please rate your overall happiness: (Not Happy/Somewhat Happy/Happy/Very Happy)",
                      "Please rate your overall life satisfaction: (Dissatisfied/Satisfied/Very Satisfied)",
                      "Please rate your nutrition satisfaction: (Poor/Fair/Good/Excellent)",
                      "Please rate your exercise satisfaction: (Poor/Fair/Good/Excellent)",
                      "Please rate your sleep satisfaction: (Poor/Fair/Good/Excellent)",
                      "Please rate your stress management: (Poor/Fair/Good/Excellent)",
                      "Please rate your alcohol consumption: (Poor/Fair/Good/Excellent)",
                      "Please rate your screen time: (Poor/Fair/Good/Excellent)") 
survey <- data.frame(Question = survey_questions)

# Create monitoring system
# Create function to calculate habits score
calculate_score <- function(scorecard){
  total_habits <- nrow(scorecard)
  count <- 0
  for (i in 1:total_habits){
    if (scorecard[i, "Daily"] == TRUE){
      count <- count + 1
    }
  }
  habit_score <- count/total_habits
  return(habit_score)
}
# Calculate frequency of program surveys
survey_frequency <- 12
# Calculate max time to achieve goals
max_time <- 6
# Monitor progress against goals
goal_monitor <- function(time_passed, goal_tracker){
  total_goals <- nrow(goal_tracker)
  for (i in 1:total_goals){
    if(time_passed < max_time){
      goal_tracker[i, "Progress"] <- "In Progress"
    }
    else{
      goal_tracker[i, "Progress"] <- "Complete"
    }
  }
  return(goal_tracker)
}