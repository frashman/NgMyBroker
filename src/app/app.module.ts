import { CryptoreceiverService } from './services/cryptoreceiver.service';
import { StockreceiverService } from './services/stockreceiver.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ShowstockComponent } from './home/showstock/showstock.component';
import { AddstockComponent } from './home/addstock/addstock.component';
import { CardComponent } from './home/card/card.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowstockComponent,
    AddstockComponent,
    CardComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StockreceiverService, CryptoreceiverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
