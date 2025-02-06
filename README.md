# PlantApp

# How to run the App

To run the app from the terminal you need to:
1. Download the Expo Go app on your smartphone and make an account if you don't have one already. Only tested with Iphone.
2. Install Expo using the command "npm install -g expo-cli".
3. Log in with the "expo login" command.
4. Run "npm install" to install all the needed dependencies.
5. Run "npx expo start" to run the development project.
6. Scan the QR-code from the terminal to open the app in Expo Go.

You can also scan the QR-code below and the app should open up inside Expo Go.

<img src="https://github.com/user-attachments/assets/a62c9b40-5600-4d54-bfce-086ec6119144" alt="Sample Image" width="230" height="330">

# Description

The app is a plant photograpfy/journal app where you can take pictures and give these pictures names and some additional notes. Entrys are not saved in the phones memory since it was not required. State management and data transfer is done using React Context for easy use throughout the app. The app architecture is split up into each individual screen, navigation and a seperate plant card component. This makes it easier to make changes in the future and also makes the app more modular. Here are screenshots of the empty ListView, ListView with an entry, ScanView and DetailView.

<img src="https://github.com/user-attachments/assets/997e0d4c-f4cd-4bac-b00a-b9b56b0f1376" alt="Sample Image" width="230" height="430">

<img src="https://github.com/user-attachments/assets/7c3af070-a4c2-44c4-a22e-cf47195b1324" alt="Sample Image" width="230" height="430">

<img src="https://github.com/user-attachments/assets/f413e452-8ca6-4347-a1be-7bb972c9cfed" alt="Sample Image" width="230" height="430">

<img src="https://github.com/user-attachments/assets/ad507d26-7782-49f2-a24a-97f4eb31cf8a" alt="Sample Image" width="230" height="430">

