import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Carte & position actuelle',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Arrets de bus',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Arrets de tram',
      url: '/tram',
      icon: 'tram'
    },
    {
      title: 'Points vélo +',
      url: '/velo',
      icon: 'velo'
    }
  ];

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
  }
}
