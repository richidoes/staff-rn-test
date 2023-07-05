# Staff RN Test App

Mobile application builded mainly using [Expo](https://docs.expo.dev/) framework.

## Getting started

### Pre-requisites

The following section lists all the different softwares that need to be installed before running the project.

*  **Node.js** - It's recommended to have Node.js version **18.16.0** or higher pre-installed in order to run this project. Use this [link](https://nodejs.org/en/download/releases/) to download the required version.

*  **npm**  - It's recommended to have npm version **9.6.4** pre-installed (vary depending of the node version). This version of npm comes packaged with node.js version 18.16.0, so no extra steps are required.

*  **yarn (optional)**  - You can install the latest version from [here](https://yarnpkg.com/getting-started/install)

* **Xcode** - This software is required to run and test your application in iPhone simulators\. You can download it [here](https://developer.apple.com/xcode/). For simulating iOS devices on Xcode follow [these instructions](https://docs.expo.io/workflow/ios-simulator/) provided by Expo documentation.

From App store:

>_Xcode_ provides developers a unified workflow for user interface design, coding, testing, and debugging. The _Xcode_ IDE combined with the Swift ...

*  **command line tools for Xcode**  - It's  a smaller package for software developers with tools that run on the command line, that is, in the Terminal application.

* **Android Studio** -  This software is required if you want to run in your app in android simulators\. You can download Android Studio [here](https://developer.android.com/studio). Then it's recommended you follow the steps provided in [this section](https://docs.expo.io/workflow/android-studio-emulator/) from Expo documentation to configure a virtual device within AVD Manager.

From Developer android:
>_Android Studio_ provides app builders with an integrated development environment (IDE) optimized for Android apps. Download _Android Studio_ today.

> Be sure to expose the Android SDK path to an environment variable of name **ANDROID\_SDK**. Make use of `~/.bash_profile` or `~/.bashrc` to expose said variable on system startup.

 * **Expo CLI** - This software is required if you want to run and build your app. You can install it by running this command:

 - `npm install -g expo-cli`
 
## Installation
Clone the repo using git directly on the commands tools:

 - `git clone https://github.com/richidoes/staff-rn-test.git`

After cloning the project repository you can install its dependencies running on the command line the following commands:

- `cd staff-rn-test`
 - Either `npm i` or  `yarn install`
 - `cd ios`
 - `pod install`
 - `cd ..`

Once you've installed the dependencies you need to create at least one Development build for the platform you want to run the app:

- Build your native Android project  `npx expo run:android`
- Build your native iOS project `npx expo run:ios`
- Now if no simulator is launched after the build is complete you can go to the terminal and press Either `i` to open the iOS  simulator or  `a` to open the Android simulator where the app was installed
 
 For more info you can go to the official Expo documentation [build native apps locally.](https://docs.expo.dev/workflow/prebuild/#usage-with-expo-cli-run-commands) 

## Deliverables
If you just want to test the final result of the app you can use the below links:

[Expo Android APK](https://expo.dev/artifacts/eas/k3z8Xcqq22ViVXiY6Nwmhc.apk)
Note: If you have previously installed the app on simulator or device, please delete it before installing this apk, this will avoid any issue while installing the apk.

[Expo iOS tar,gz](https://expo.dev/artifacts/eas/bSdQH2fqDZ89eJiKBH8ELQ.tar.gz)
Notes: 
 - This iOS file only works on simulator.
 - App is inside the tar.gz file, un-zip the file and then drag and drop the app into the iOS simulator
 - If you have previously installed the app on simulator or device, please delete it before installing this app, this will avoid any issue while installing the app.