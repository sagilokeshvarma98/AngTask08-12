import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-data',
  templateUrl: './project-data.component.html',
  styleUrls: ['./project-data.component.css']
})
export class ProjectDataComponent implements OnInit {

  constructor(public _PS:ProjectService) { }

  public projectData:IProject[] = []

  ngOnInit(): void {
    this.getProjects()
  }
  
  getProjects() {
    this._PS.getProjects().subscribe((res:IProject[])=>this.projectData = res)
  }

  postProjectDetails(data:IProject) {
    this._PS.postProject(data).subscribe(res=>this.getProjects())
  }

}
