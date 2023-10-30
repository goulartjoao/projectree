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
  public projectId = this._activatedRoute.snapshot.params['id'];

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
        zoom: 5, // Nível de zoom
        projection: 'EPSG:4326',
      }),
    });
  }

}
