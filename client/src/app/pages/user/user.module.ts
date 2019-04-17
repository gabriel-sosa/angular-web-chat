import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { UserRoutingModule } from "./user-routing.module";
import { CreateUserComponent } from "./create-user/create-user.component";
import { SignOutComponent } from "./sign-out/sign-out.component";
import { MaterialsModule } from "@shared/materials/materials.module";
import { ComponentsModule } from "@shared/components/components.module";

@NgModule({
  declarations: [CreateUserComponent, SignOutComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    MaterialsModule,
    ComponentsModule
  ]
})
export class UserModule {}
