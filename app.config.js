import 'dotenv/config'

export default {
  "expo": {
    "name": "CRUD-FIREBASE",
    "slug": "CRUD-FIREBASE",
    "version": "1.0.0",

    "web": {
      "favicon": "./assets/favicon.png"
    },

    "experiments": {
      "tsconfigPaths": true
    },

    "plugins": [],

    "orientation": "portrait",
    "icon": "./assets/icon.png",

    "userInterfaceStyle": "light",

    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": ["**/*"],
    "ios": {
      "supportsTablet": true,
      bundleIdentifier: "com.viniciusst1.crudfirebase"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      package: "com.viniciusst1.crudfirebase"
    },
    "extra": {
      apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.EXPO_PUBLIC_FIREBASE_DATABASE_URL,
      projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
      storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
      measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID,
      "eas":{
        "projectId": "fb0ece02-87f2-4e13-b24d-bebec0bb4e00"
      }
    }
  }
}
