import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { UserService } from '@core/services/user.service';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.scss']
})
export class NameInputComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;

  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  name: FormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(12)
  ]);

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.name.valid) {
      this.submit.emit(this.name.value);
    }
  }

}
