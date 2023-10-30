import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

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
  public articles: any;
  public projectId = this._activatedRoute.snapshot.params['id'];
  public radius: number = 50;

  ngOnInit() {
    this.getProjectById();
    setTimeout(() => {
      this.generateMap(this.project.longitude, this.project.latitude);
    }, 500);

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

  public defineSearchRange(value: number): string {
    this.radius = value;
    return `${value}km`;
  }

  public getArticlesNearProject() {
    this.articles = [];
    this._api.get(`/api/articles/articlesNearProject/${this.projectId}/${this.radius}`).subscribe({
      next: (data) => {
        this.articles = data;
        console.log(this.articles)
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }

  public generateMap(longitude: string, latitude: string) {
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [Number(longitude), Number(latitude)],
        zoom: 5,
        projection: 'EPSG:4326',
      }),
    });
  }

}
