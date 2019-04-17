import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { NameInputComponent } from "./name-input/name-input.component";
import { MaterialsModule } from "@shared/materials/materials.module";
import { MessageDisplayComponent } from "./message-display/message-display.component";
import { EventDisplayComponent } from "./event-display/event-display.component";

@NgModule({
  declarations: [
    NameInputComponent,
    MessageDisplayComponent,
    EventDisplayComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, MaterialsModule],
  exports: [NameInputComponent, MessageDisplayComponent, EventDisplayComponent]
})
export class ComponentsModule {}
