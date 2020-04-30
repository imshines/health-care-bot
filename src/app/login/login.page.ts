import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AuthService } from '../services/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';
=======
>>>>>>> 71a8cd4605c2ef06b4d68542a1bb56587a97e07d

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

<<<<<<< HEAD
  constructor(private authService:AuthService,private router:Router,
    private alertCtrl:AlertController) { }
=======
  constructor() { }
>>>>>>> 71a8cd4605c2ef06b4d68542a1bb56587a97e07d

  ngOnInit() {
  }

<<<<<<< HEAD
  async loginUser(form):Promise<void>{
    this.authService.loginUser(form.value.email, form.value.password).then(
      ()=>{
        this.router.navigateByUrl('home');
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

  goTosignUp(){
    this.router.navigateByUrl('signup');
  }

=======
>>>>>>> 71a8cd4605c2ef06b4d68542a1bb56587a97e07d
}
