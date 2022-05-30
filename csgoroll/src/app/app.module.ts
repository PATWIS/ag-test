import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { UserBalanceComponent } from './header/user-balance/user-balance.component';
import { BoxGridComponent } from './box-grid/box-grid.component';
import { BoxCardComponent } from './box-card/box-card.component';
import { BoxDetailsComponent } from './box-details/box-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserBalanceComponent,
    BoxGridComponent,
    BoxCardComponent,
    BoxDetailsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, GraphQLModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
