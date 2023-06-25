//1
//Create the function for healthy habits
function establishHealthyHabits(){
    
    //2
    //Create an array for healthy habits
    var healthyHabits = [];
    
    //3
    //Add habits to the array
    healthyHabits.push("Drink more water");
    healthyHabits.push("Eat more fruits and vegetables");
    healthyHabits.push("Exercise regularly");
    healthyHabits.push("Get enough sleep");
    healthyHabits.push("Reduce stress");
    
    //4
    //Loop through the array and log healthy habits
    healthyHabits.forEach((habit) => {
        console.log(habit);
    });
    
}

//5
//Call the establishHealthyHabits function
establishHealthyHabits();

//6
//Create a function to track healthy habit progress
function trackHealthyHabitsProgress(){
    
    //7
    //Create variables to store the amount of healthy habits completed
    var waterHabitsCompleted = 0;
    var fruitsAndVeggiesHabitsCompleted = 0;
    var exerciseHabitsCompleted = 0;
    var sleepHabitsCompleted = 0;
    var stressReductionHabitsCompleted = 0;
    
    //8
    //Log the amount of healthy habits completed
    console.log("Water Habits Completed: " + waterHabitsCompleted);
    console.log("Fruits and Vegetables Habits Completed: " + fruitsAndVeggiesHabitsCompleted);
    console.log("Exercise Habits Completed: " + exerciseHabitsCompleted);
    console.log("Sleep Habits Completed: " + sleepHabitsCompleted);
    console.log("Stress Reduction Habits Completed: " + stressReductionHabitsCompleted);
    
    //9
    //Increase the amount of healthy habits completed
    waterHabitsCompleted++;
    fruitsAndVeggiesHabitsCompleted++;
    exerciseHabitsCompleted++;
    sleepHabitsCompleted++;
    stressReductionHabitsCompleted++;
    
    //10
    //Log the amount of healthy habits completed
    console.log("Water Habits Completed: " + waterHabitsCompleted);
    console.log("Fruits and Vegetables Habits Completed: " + fruitsAndVeggiesHabitsCompleted);
    console.log("Exercise Habits Completed: " + exerciseHabitsCompleted);
    console.log("Sleep Habits Completed: " + sleepHabitsCompleted);
    console.log("Stress Reduction Habits Completed: " + stressReductionHabitsCompleted);
    
}

//11
//Call the trackHealthyHabitsProgress function
trackHealthyHabitsProgress();

//12
//Create a function to reward yourself for healthy habits
function rewardHealthyHabits(){
    
    //13
    //Create an array of rewards
    var rewards = [];
    
    //14
    //Add rewards to the array
    rewards.push("Go for a walk");
    rewards.push("Treat yourself to a healthy snack");
    rewards.push("Take a break from your phone or computer");
    rewards.push("Go for a bike ride");
    rewards.push("Listen to your favorite music");
    
    //15
    //Loop through the rewards array and select a reward
    rewards.forEach((reward) => {
        //16
        //Select a reward at random
        var randomReward = rewards[Math.floor(Math.random()*rewards.length)];
        //17
        //Log the reward
        console.log(randomReward);
    });
}

//18
//Call the rewardHealthyHabits function
rewardHealthyHabits();

//19
//Create a function to focus on a healthy habit
function focusOnHealthyHabit(){
    
    //20
    //Prompt the user to enter a healthy habit
    var selectedHealthyHabit = prompt("Enter a healthy habit:");
    
    //21
    //Log the selected healthy habit
    console.log("Healthy Habit: "+selectedHealthyHabit);
    
    //22
    //Create an array of strategies
    var strategies = [];
    
    //23
    //Add strategies to the array
    strategies.push("Start small. Even small changes can make a big difference in your health.");
    strategies.push("Set realistic goals. Make sure they are achievable and measurable.");
    strategies.push("Focus on one habit at a time. Don't try to tackle too much all at once.");
    strategies.push("Be consistent. If you slip up, just start over. Don't give up.");
    strategies.push("Measure your progress. Track your progress and celebrate your successes.");
    
    //24
    //Loop through the strategies array and log the strategies
    strategies.forEach((strategy) => {
        console.log(strategy);
    });
    
}

//25
//Call the focusOnHealthyHabit function
focusOnHealthyHabit();

//26
//Create a function to encourage healthy habits
function encourageHealthyHabits(){
    
    //27
    //Create an array of encouragements
    var encouragements = [];
    
    //28
    //Add encouragements to the array
    encouragements.push("You can do it!");
    encouragements.push("Every small step counts!");
    encouragements.push("Stay focused and keep going!");
    encouragements.push("You got this!");
    encouragements.push("Believe in yourself!");
    
    //29
    //Loop through the encouragements array and select an encouragement at random
    encouragements.forEach((encouragement) => {
        //30
        //Select an encouragement at random
        var randomEncouragement = encouragements[Math.floor(Math.random()*encouragements.length)];
        //31
        //Log the encouragement
        console.log(randomEncouragement);
    });
    
}

//32
//Call the encourageHealthyHabits function
encourageHealthyHabits();

//33
//Create a function to help stick to healthy habits
function stickToHealthyHabits(){
    
    //34
    //Create an array of tips
    var tips = [];
    
    //35
    //Add tips to the array
    tips.push("Be mindful of your habits. Pay attention to what and how you are doing things.");
    tips.push("Make a plan. Set goals and create a plan to achieve them.");
    tips.push("Set reminders. Post reminders in strategic places or set an alarm on your phone.");
    tips.push("Find support. Let friends and family know what you are doing and ask for their support.");
    tips.push("Track your progress. Measure your progress and make adjustments as needed.");
    
    //36
    //Loop through the tips array and log the tips
    tips.forEach((tip) => {
        console.log(tip);
    });
    
}

//37
//Call the stickToHealthyHabits function
stickToHealthyHabits();