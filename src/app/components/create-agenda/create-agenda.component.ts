import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ageRangeValidator } from "../../shared/validators";

@Component({
  selector: "app-create-agenda",
  templateUrl: "./create-agenda.component.html",
  styleUrls: ["./create-agenda.component.scss"]
})
export class CreateAgendaComponent implements OnInit {
  people: Array<any>;

  min = 0;
  max = 130;
  agendaForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    age: ["", [Validators.required, ageRangeValidator(this.min, this.max)]],
    email: [
      "",
      [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")
      ]
    ]
  });
  constructor(private fb: FormBuilder) {
    this.people = [];
  }

  ngOnInit(): void {}
  savePerson() {
    console.info(this.agendaForm.value);
    this.people.push(this.agendaForm.value);
    this.agendaForm.reset();
  }
}
