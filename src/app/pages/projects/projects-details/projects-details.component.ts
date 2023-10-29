import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.scss'],
})
export class ProjectsDetailsComponent implements OnInit {
  constructor(
    private _api: ApiService,
    private _activatedRoute: ActivatedRoute

  ) { }
  public project: any;
  public projectId = this._activatedRoute.snapshot.params['id'];

  ngOnInit() {
    this.getProjectById();
  }

  public getProjectById() {
    this._api.get(`/api/projects/${this.projectId}`).subscribe({
      next: (data) => {
        this.project = data;
        console.log(this.project)
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }
}
