import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { BoxCardComponent } from './components/box-card/box-card.component';
import { BoxDetailsComponent } from './components/box-details/box-details.component';
import { BoxGridComponent } from './components/box-grid/box-grid.component';
import { UserBalanceComponent } from './components/header/user-balance/user-balance.component';

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
