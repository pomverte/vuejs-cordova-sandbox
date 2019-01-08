# vuejs-cordova-sandbox

## Prerequisites

### NodeJS
Download NodeJS LTS : https://nodejs.org/en/download/

Install Cordova and Vue CLI
```
npm install -g cordova
npm install -g @vue/cli
```

References :
* https://cordova.apache.org/
* https://cli.vuejs.org/

### Cordova on Android
See [Installing the Requirements](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#installing-the-requirements).

* Gradle
* Android Studio
* Android SDK

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Cordova setup
```
cordova platform add android --save
```

### Compiles for developpement
```
cordova run android
```

### Build package
```
cordova build android --release
```

## Create project
```
cordova create vuejs-cordova-sandbox fr.pomverte
vue create vuejs-cordova-sandbox

cd  vuejs-cordova-sandbox
npm install bootstrap-vue
```

## Troubleshooting

Accepting Android SDK licenses :
```
cd $ANDROID_HOME/tools/bin
./sdkmanager --licenses
sdkmanager.bat --licenses
```

Note : on Windows, ANDROID_HOME = C:\Users\username\AppData\Local\Android\Sdk
