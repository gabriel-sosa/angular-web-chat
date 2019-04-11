import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { NameInputComponent } from "./name-input/name-input.component";
import { MaterialsModule } from "@shared/materials/materials.module";

@NgModule({
  declarations: [NameInputComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialsModule],
  exports: [NameInputComponent]
})
export class ComponentsModule {}
