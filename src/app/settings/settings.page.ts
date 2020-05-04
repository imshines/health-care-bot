import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  
  constructor(private authService:AuthService,private router:Router,
    private alertCtrl:AlertController) { }


  ngOnInit() {
  }

  async logOutUser():Promise<void>{
    this.authService.logOutUser().then(
      ()=>{
        this.router.navigateByUrl('login');
      },
      async error =>{
        const alert = await this.alertCtrl.create({
          message:error.message,
          buttons:[{text:'ok',role:'cancel'}],
        });
        await alert.present();
      }
      
    );
  }

}

