Module HealthyHabits
    Sub Main()
    
        Dim totalSleepingHours As Integer
        Dim dailyVegetables As Boolean
        Dim dailyExercise As Boolean
        Dim dailyWaterIntake As Integer
 
        ' Sleeping Habits
        Console.WriteLine("How many hours do you usually sleep a day:")
        totalSleepingHours = Console.ReadLine()
        If totalSleepingHours < 8 Then
            Console.WriteLine("You should try to get at least 8 hours of sleep a day")
        ElseIf totalSleepingHours > 8 Then
            Console.WriteLine("Good job maintaining enough sleep hours a day")
        End If
 
        ' Eating Habits
        Console.WriteLine("Do you eat vegetables every day? Answer with Yes/No:")
        dailyVegetables = Console.ReadLine()
        If dailyVegetables = "Yes" Then
            Console.WriteLine("Good job for eating healthy food every day")
        ElseIf dailyVegetables = "No" Then
            Console.WriteLine("You should try to eat at least one vegetable a day")
        End If
 
        ' Exercise Habits
        Console.WriteLine("Do you do exercise every day? Answer with Yes/No:")
        dailyExercise = Console.ReadLine()
        If dailyExercise = "Yes" Then
            Console.WriteLine("Good job keeping up with your exercise routine")
        ElseIf dailyExercise = "No" Then
            Console.WriteLine("You should try to do at least 30 minutes of exercise a day")
        End If
 
        ' Water Intake
        Console.WriteLine("How many glasses of water do you drink everyday:")
        dailyWaterIntake = Console.ReadLine()
        If dailyWaterIntake <= 3 Then
            Console.WriteLine("You should try to increase your water intake")
        ElseIf dailyWaterIntake >= 3 Then
            Console.WriteLine("Good job on hydrating yourself with sufficient amount of water")
        End If
   
    End Sub
End Module