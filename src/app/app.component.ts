import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
<<<<<<< HEAD
import * as firebase from 'firebase/app';
import { firebaseConfig } from './firebase.config';
=======
>>>>>>> 71a8cd4605c2ef06b4d68542a1bb56587a97e07d

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
<<<<<<< HEAD

    firebase.initializeApp(firebaseConfig);
=======
>>>>>>> 71a8cd4605c2ef06b4d68542a1bb56587a97e07d
  }
}
