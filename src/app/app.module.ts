import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { TitleComponent } from './components/partials/title/title.component';
import { TableComponent } from './components/partials/table/table.component';
import { HomeComponent } from './components/pages/home/home.component';
import { UsersComponent } from './components/pages/users/users.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { ProductDetailComponent } from './components/pages/product-detail/product-detail.component';
import { UserDetailComponent } from './components/pages/user-detail/user-detail.component';
import { DescriptionComponent } from './components/partials/description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponent,
    TableComponent,
    HomeComponent,
    UsersComponent,
    ProductsComponent,
    ProductDetailComponent,
    UserDetailComponent,
    DescriptionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
