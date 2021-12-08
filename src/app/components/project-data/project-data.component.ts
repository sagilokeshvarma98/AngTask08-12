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

  projectname:string = ""
  deleteBool:boolean = false;

  ngOnInit(): void {
    this.getProjects()
  }
  
  getProjects() {
    this._PS.getProjects().subscribe((res:IProject[])=>this.projectData = res)
  }

  postProjectDetails(data:IProject) {
    this._PS.postProject(data).subscribe(()=>this.getProjects())
  }

  deleteProject(id:number) {
    this._PS.deleteProject(id).subscribe(()=>{
      this.deleteBool = true
      setTimeout(()=>{
        this.deleteBool = false
      },2000)
      this.getProjects()
    })
  }


}
