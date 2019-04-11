import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";

const materials = [MatCardModule, MatButtonModule, MatInputModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...materials],
  exports: materials
})
export class MaterialsModule {}
