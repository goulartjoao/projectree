import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { CreateRelevantInfoComponent } from './create-relevant-info/create-relevant-info.component';

@Component({
  selector: 'app-relevant-info',
  templateUrl: './relevant-info.component.html',
  styleUrls: ['./relevant-info.component.scss']
})
export class RelevantInfoComponent implements OnInit {

  constructor(
    private _api: ApiService,
    private _dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public project: any,
  ) { }
  public relevantInfos: any;

  ngOnInit() {
    this.getRelevantInfosByProjectId();
  }

  public getRelevantInfosByProjectId() {
    this._api.get(`/api/relevantInfos/findRelevantInfosByProjectId/${this.project.id}`).subscribe({
      next: (data) => {
        this.relevantInfos = data;
        console.log(this.relevantInfos)
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }

  public openForm() {
    this._openModalOrDialog(CreateRelevantInfoComponent, this.project);
  }

  private _openModalOrDialog(component: ComponentType<any>, project: any) {
    this._dialog.open(component, {
      width: '1200px',
      height: '200px',
      data: project,
    });
  }

  public close(): void {
    this._dialog.closeAll();
  }

}
