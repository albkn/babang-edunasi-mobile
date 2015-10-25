/*******************************************

  Cordova Settings go here

*******************************************/


//Allow Google files and google maps to work on phone app
App.accessRule('https://*.googleapis.com/*');
App.accessRule('https://*.google.com/*');
App.accessRule('https://*.gstatic.com/*');
App.accessRule('https://*.stripe.com/*');
App.accessRule("http://s3-ap-southeast-2.amazonaws.com/staticassetspasha/*");
App.accessRule("http://testedunasi.meteor.com");
App.accessRule("*");

// Set PhoneGap/Cordova preferences
App.setPreference('StatusBarStyle', 'lightcontent');

//Make storage local rather than iCloud
App.setPreference('BackupWebStorage', 'local');


// Set up resources such as icons and launch screens.
// App.icons({
// // iOS
// 'iphone': 'resources/icons/ios/Icon-60.png',
// 'iphone_2x': 'resources/icons/ios/Icon-60@2x.png',
// 'iphone_3x': 'resources/icons/ios/Icon-60@3x.png',
// 'ipad': 'resources/icons/ios/Icon-76.png',
// 'ipad_2x': 'resources/icons/ios/Icon-76@2x.png',
//
// // Android
// 'android_ldpi': 'resources/icons/android/drawable-ldpi/ic_launcher.png',
// 'android_mdpi': 'resources/icons/android/drawable-mdpi/ic_launcher.png',
// 'android_hdpi': 'resources/icons/android/drawable-hdpi/ic_launcher.png',
// 'android_xhdpi': 'resources/icons/android/drawable-xhdpi/ic_launcher.png',
// // Not supported for now
// 'android_xxhdpi': 'resources/icons/android/drawable-xxhdpi/ic_launcher.png',
// 'android_xxxhdpi': 'resources/icons/android/drawable-xxxhdpi/ic_launcher.png',
// })

// App.launchScreens({
//   // iOS
//   'iphone': 'resources/splash/splash-320x480.png',
//   'iphone_2x': 'resources/splash/splash-320x480@2x.png',
//   'iphone5': 'resources/splash/splash-320x568@2x.png',
//   'iphone6': 'resources/splash/splash-375x667@2x.png',
//   'iphone6p_portrait': 'resources/splash/splash-414x736@3x.png',
//   'iphone6p_landscape': 'resources/splash/splash-736x414@3x.png',
//
//   'ipad_portrait': 'resources/splash/splash-768x1024.png',
//   'ipad_portrait_2x': 'resources/splash/splash-768x1024@2x.png',
//   'ipad_landscape': 'resources/splash/splash-1024x768.png',
//   'ipad_landscape_2x': 'resources/splash/splash-1024x768@2x.png',
//
//   // Android
//   'android_ldpi_portrait': 'resources/splash/splash-200x320.png',
//   'android_ldpi_landscape': 'resources/splash/splash-320x200.png',
//   'android_mdpi_portrait': 'resources/splash/splash-320x480.png',
//   'android_mdpi_landscape': 'resources/splash/splash-480x320.png',
//   'android_hdpi_portrait': 'resources/splash/splash-480x800.png',
//   'android_hdpi_landscape': 'resources/splash/splash-800x480.png',
//   'android_xhdpi_portrait': 'resources/splash/splash-720x1280.png',
//   'android_xhdpi_landscape': 'resources/splash/splash-1280x720.png'
// });
