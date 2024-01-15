// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyCardsComponent } from './my-cards/my-cards.component';
import { TradingComponent } from '../app/trading/trading.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SettingsComponent } from './settings/settings.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'my-account', component: MyAccountComponent },
  { path: 'my-cards', component: MyCardsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'trading', component: TradingComponent },
  { path: 'login', component: LoginPageComponent },

  { path: 'register', component: RegisterPageComponent },
  { path: 'footer', component: FooterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
