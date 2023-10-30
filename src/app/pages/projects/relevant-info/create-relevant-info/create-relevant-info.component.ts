import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ToastService } from 'src/app/shared/services/toastr/toast.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-relevant-info',
  templateUrl: './create-relevant-info.component.html',
  styleUrls: ['./create-relevant-info.component.scss']
})
export class CreateRelevantInfoComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private _api: ApiService,
    private _dialog: MatDialog,
    private formBuilder: FormBuilder,
    private _toastService: ToastService,
    @Inject(MAT_DIALOG_DATA) public project: any,
  ) {
    this.form = this.formBuilder.group({
      author: ['', Validators.required],
      commentary: ['', Validators.required],
      project_id: [this.project.id],
      created_at: [this.formatDate()],
    });
  }

  ngOnInit() { }

  public createRelevantInfo() {
    if (this.form.valid) {
      const dados = this.form.value;
      this._api.post('/api/relevantInfos', dados).subscribe(
        (response) => {
          console.log('Relevant Info created', response)
          this._toastService.snackbar('Relevant Info created!');
        },
        (error) => {
          console.error('Form submission error', error);
        }
      );
      this.close();
    }
  }

  public formatDate(): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
  }

  public close(): void {
    this._dialog.closeAll();
  }

}
