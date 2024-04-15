import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './components/product/product.component';
import { InscriptionComponent } from './components/inscription/inscription.component';

const routes: Routes = [
  //{path: "**", component:UserComponent },
  {path:"user", component:UserComponent},
  {path:"register",component:RegisterComponent},
  {path:"product",component:ProductComponent},
  {path:"inscription",component:InscriptionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
