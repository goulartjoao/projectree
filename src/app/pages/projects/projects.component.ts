import { Component, OnInit } from '@angular/core';
import { CreateProjectComponent } from 'src/app/pages/projects/create-project/create-project.component';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { MatDialog } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor(
    private _api: ApiService,
    private _dialog: MatDialog,
  ) { }
  public projects: any;

  ngOnInit() {
    this.getProjects();
  }

  public getProjects() {
    this._api.get('/api/projects').subscribe({
      next: (data) => {
        this.projects = data;
        console.log(this.projects)
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }

  public openForm() {
    this._openModalOrDialog(CreateProjectComponent, null);
  }

  private _openModalOrDialog(component: ComponentType<any>, project: any) {
    this._dialog.open(component, {
      width: '1200px',
      height: '600px',
    });
  }
}
