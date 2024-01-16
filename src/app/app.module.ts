import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyCardsComponent } from './my-cards/my-cards.component';
import { TradingComponent } from './trading/trading.component';
import { SettingsComponent } from './settings/settings.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from '../app/home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomeComponent,
    FooterComponent,
    RegisterPageComponent,
    MyAccountComponent,
    MyCardsComponent,
    TradingComponent,
    SettingsComponent,
    SidebarMenuComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
