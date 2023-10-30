import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api/api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor(private _api: ApiService) { }
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
}
