import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastService } from 'src/app/shared/services/toastr/toast.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private _api: ApiService,
    private _dialog: MatDialog,
    private formBuilder: FormBuilder,
    private _toastService: ToastService,
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      area_extension: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
    });
  }

  ngOnInit() { }

  public createProject() {
    if (this.form.valid) {
      const dados = this.form.value;
      this._api.post('/api/projects', dados).subscribe(
        (response) => {
          console.log('Project Info created', response)
          this._toastService.snackbar('Project created!');
        },
        (error) => {
          console.error('Form submission error', error);
        }
      );
      this.close();
    }
  }

  public close(): void {
    this._dialog.closeAll();
  }

}
