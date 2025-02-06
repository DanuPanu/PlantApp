# PlantApp

# How to run the App

To run the app from the terminal you need to:
1. Download the Expo Go app on your smartphone. Only tested with Iphone.
2. Install Expo using the command "npm install -g expo-cli".
3. Log in with the "expo login" command.
4. Run "npm install" to install all the needed dependencies.
5. Run "npx expo start" to run the development project.
6. Scan the QR-code from the terminal to open the app in Expo Go.

You can also scan the QR-code below and the app should open up inside the Expo Go.



# Description

The app is a plant photograpfy/journal app where you can take pictures and give these pictures names and some additional notes. Entrys are not saved in the phones memory since it was not required. State management and data transfer is done using React Context for easy use throughout the app. The app architecture is split up into each individual screen, navigation and a seperate plant card component. This makes it easier to make changes in the future and also makes the app more modular. 

