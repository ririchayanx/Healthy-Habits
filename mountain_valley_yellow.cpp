#include <iostream> 
#include <string> 

using namespace std; 

// Function to display the healthy habits
void healthyHabits(){
	cout << "1. Exercise regularly and aim for at least 30 minutes of physical activity daily.";
	cout << "2. Eat a balanced diet with plenty of fruits, vegetables, and whole grains.";
	cout << "3. Drink plenty of water to stay hydrated.";
	cout << "4. Get enough quality sleep and aim for 7-8 hours of sleep per night.";
	cout << "5. Limit your intake of sugar, sodium, saturated fat, and processed foods.";
	cout << "6. Avoid tobacco and alcohol and practice mindful breathing techniques.";
	cout << "7. Take time for yourself to reduce stress and participate in activities you enjoy.";
	cout << "8. Maintain good hygiene habits and follow safety guidelines to reduce your risk of illness.";
	cout << "9. Monitor your mental health and seek help if needed.";
	cout << "10. Connect with family and friends and build strong, healthy relationships.";
}

// Function to get user input 
void getInput(){
	string choice;
	
	cout << "Would you like to view healthy habits (Y/n)?";
	cin >> choice;
	
	if(choice == "y" || choice == "Y"){
		healthyHabits();
	}
	else if (choice == "n" || choice == "N"){
		cout << "Thank you, goodbye!" << endl;
	}
	else{
		cout << "Invalid input, try again!" << endl;
		getInput();
	}
}

// Main Function 
int main() {
	getInput();
	return 0;
}