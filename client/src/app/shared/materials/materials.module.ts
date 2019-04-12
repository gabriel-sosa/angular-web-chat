import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatListModule } from "@angular/material/list";

const materials = [
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
  MatListModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...materials],
  exports: materials
})
export class MaterialsModule {}
