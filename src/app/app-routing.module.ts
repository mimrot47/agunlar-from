import { OrderModule } from './order/order.module';
import { ServiceModule } from './service/service.module';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path:"", component:HeaderComponent},
  {path:"contact", component:ContactComponent},
  {path:"order",loadChildren:()=>import("./order/order-routing.module").then(mod=>mod.OrderRoutingModule)},
  {path:"service",loadChildren:()=>import("./service/service-routing.module").then(mod=>mod.ServiceRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
