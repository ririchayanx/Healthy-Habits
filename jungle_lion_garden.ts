// HealthHabits.ts
// 1
class HealthyHabits {
    private _habitName: string;
    private _startDate: Date;
  
    constructor(habitName: string, startDate: Date) {
        this._habitName = habitName;
        this._startDate = startDate;
    }
  
    get habitName(): string {
        return this._habitName;
    }
  
    set habitName(habitName: string) {
        this._habitName = habitName;
    }
  
    get startDate(): Date {
        return this._startDate;
    }
  
    set startDate(startDate: Date) {
        this._startDate = startDate;
    }
}

//2
class HealthyHabitTracker {
    private _healthyHabits: HealthyHabits[];
  
    constructor() {
        this._healthyHabits = [];
    }
  
    addHabit(healthyHabit: HealthyHabits): void {
        this._healthyHabits.push(healthyHabit);
    }
  
    removeHabit(habitName: string): void {
        let habitIndex = this._healthyHabits.findIndex(
            (habit: HealthyHabits) => habit.habitName === habitName
        );
        this._healthyHabits.splice(habitIndex, 1);
    }
  
    getHealthHabits(): HealthyHabits[] {
        return this._healthyHabits;
    }
}

//3
  class HealthyHabitReporter {
    private _habitTracker: HealthyHabitTracker;
  
    constructor(habitTracker: HealthyHabitTracker) {
        this._habitTracker = habitTracker;
    }
  
    printHabits(): void {
        console.log("Your list of healthy habits:");
        this._habitTracker.getHealthHabits().forEach((habit: HealthyHabits) => {
            console.log(`- ${habit.habitName}, started on ${habit.startDate.toDateString()}`);
        });
    }
}

//4
class HealthyHabitReminder {
    private _habitTracker: HealthyHabitTracker;
  
    constructor(habitTracker: HealthyHabitTracker) {
        this._habitTracker = habitTracker;
    }
  
    remind(): void {
        console.log("Time to practice your healthy habits!");
        this._habitTracker.getHealthHabits().forEach((habit: HealthyHabits) => {
            console.log(`- ${habit.habitName}`);
        });
    }
}

//5
class HealthyHabitNotifier {
    private _habitTracker: HealthyHabitTracker;
  
    constructor(habitTracker: HealthyHabitTracker) {
        this._habitTracker = habitTracker;
    }
  
    notify(): void {
        console.log("You have successfully completed a healthy habit!");
        this._habitTracker.getHealthHabits().forEach((habit: HealthyHabits) => {
            console.log(`- ${habit.habitName}`);
        });
    }
}

//6
class HealthyHabitManager {
    private _habitTracker: HealthyHabitTracker;
    private _reporter: HealthyHabitReporter;
    private _reminder: HealthyHabitReminder;
    private _notifier: HealthyHabitNotifier;
  
    constructor(habitTracker: HealthyHabitTracker) {
        this._habitTracker = habitTracker;
        this._reporter = new HealthyHabitReporter(habitTracker);
        this._reminder = new HealthyHabitReminder(habitTracker);
        this._notifier = new HealthyHabitNotifier(habitTracker);
    }
  
    get reporter(): HealthyHabitReporter {
        return this._reporter;
    }
  
    get reminder(): HealthyHabitReminder {
        return this._reminder;
    }
  
    get notifier(): HealthyHabitNotifier {
        return this._notifier;
    }
}

//7
class HealthyHabitsApplication {
    private _habitTracker: HealthyHabitTracker;
    private _manager: HealthyHabitManager;
  
    constructor() {
        this._habitTracker = new HealthyHabitTracker();
        this._manager = new HealthyHabitManager(this._habitTracker);
    }
  
    run(): void {
        let userInput: string = "";
        while (userInput !== "q") {
            console.log("Welcome to the Healthy Habits Application");
            console.log("[l] List Habits");
            console.log("[a] Add Habit");
            console.log("[r] Remove Habit");
            console.log("[m] Remind");
            console.log("[n] Notify");
            console.log("[q] Quit");
            userInput = prompt("Choose an option");
            switch (userInput) {
                case "l":
                    this._manager.reporter.printHabits();
                    break;
                case "a":
                    const habitName: string = prompt("Enter habit name:");
                    const habitStartDate: Date = new Date(
                        prompt("Enter start date (YYYY-MM-DD):")
                    );
                    const newHabit = new HealthyHabits(habitName, habitStartDate);
                    this._habitTracker.addHabit(newHabit);
                    break;
                case "r":
                    const habitNameToRemove: string = prompt("Enter habit name:");
                    this._habitTracker.removeHabit(habitNameToRemove);
                    break;
                case "m":
                    this._manager.reminder.remind();
                    break;
                case "n":
                    this._manager.notifier.notify();
                    break;
                case "q":
                    console.log("Goodbye!");
                    break;
                default:
                    console.log("Invalid input!");
            }
        }
    }
}

//8
let application = new HealthyHabitsApplication();
application.run();