import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProject } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {

  constructor(public active: ActivatedRoute, private _PS: ProjectService) { }
  public myProject: IProject | undefined
  public imageStyle = {
    backgroundImage: ""
  }

  ngOnInit(): void {
    this.active.params.subscribe(res => {
      this._PS.getSingleProject(res.id).subscribe((res: IProject[]) => {
        this.myProject = res[0];
        this.imageStyle.backgroundImage = `url(${this.myProject.background})`
      })
    })
  }

}
