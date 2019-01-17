# Firebase
```
npm install -g firebase-tools
```

```
PS D:\git\vuejs-cordova-sandbox> firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  D:\git\vuejs-cordova-sandbox

? Are you ready to proceed? Yes
? Which Firebase CLI features do you want to setup for this folder? Press Space to select features, then Enter to confirm your choices. Hosting: Configure and dep
loy Firebase Hosting sites

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

? Select a default Firebase project for this directory: fir-test-7c5ed (firebase-test)
i  Using project fir-test-7c5ed (firebase-test)

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? www
? Configure as a single-page app (rewrite all urls to /index.html)? No
+  Wrote www/404.html
? File www/index.html already exists. Overwrite? No
i  Skipping write of www/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

+  Firebase initialization complete!
```

```
firebase deploy --only hosting
firebase deploy
```

```
curl 'https://fir-test-7c5ed.firebaseio.com/api/grades.json?print=pretty'
curl 'https://fir-test-7c5ed.firebaseio.com/api/grades/cb00.json?print=pretty'
curl 'https://fir-test-7c5ed.firebaseio.com/api/grades/cb00/epreuves.json?print=pretty'
```

```
curl -X PUT -d '@database.json' 'https://fir-test-7c5ed.firebaseio.com/api.json?access_token=<ACCESS_TOKEN>'
 ```

Note: don't forget firebase rules for indexes ;)
