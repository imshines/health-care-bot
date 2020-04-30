import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
=======
>>>>>>> 71a8cd4605c2ef06b4d68542a1bb56587a97e07d

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

<<<<<<< HEAD
  
  constructor(private authService:AuthService,private router:Router,
    private alertCtrl:AlertController) { }

=======
  constructor() { }
>>>>>>> 71a8cd4605c2ef06b4d68542a1bb56587a97e07d

  ngOnInit() {
  }

<<<<<<< HEAD
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

=======
}
>>>>>>> 71a8cd4605c2ef06b4d68542a1bb56587a97e07d
