-- Healthy Habits Local Script 
--
-- This script sets up healthy habits for the player.
--

-- Health Habits Global Variables 

local healthHabits = {
	"Eat Breakfast",
	"Drink Water",
	"Exercise",
	"Get Enough Sleep"
}

-- Health Habits Functions 

-- Function to remind the player of the healthy habits daily 
local function dailyReminder()
	for _, habit in pairs(healthHabits) do
		print("Remember to " .. habit .. " !")
	end
end

-- Function to check the players daily health habits
local function checkHabits()
	for _, habit in pairs(healthHabits) do
		-- Prompt user to rate how well they did 
		local score = tonumber(io.read())
		
		-- Calculate an overall score for their health habits 
		local overallScore = overallScore + score
	end
	
	print("Your overall health habit score is: " .. overallScore)
end

-- Health Habits Main

-- Call the dailyReminder() function every day
while true do
	dailyReminder()
	checkHabits()
	sleep(86400)
end