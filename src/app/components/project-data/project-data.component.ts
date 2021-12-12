import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProject } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-data',
  templateUrl: './project-data.component.html',
  styleUrls: ['./project-data.component.css']
})
export class ProjectDataComponent implements OnInit {

  constructor(public _PS: ProjectService, public route:Router) { }

  public projectData: IProject[] = [];
  public count: number = 0;
  public projectname: string = "";
  public deleteBool: boolean = false;
  public updateBool:boolean = false;

  public updateObj: IProject = {
    id: 0,
    projectName: "",
    projectLead: "",
    startDate: "",
    isUpdated: false,
    background: ""
  }

  ngOnInit(): void {
    this.getProjects()
  }

  getProjects() {
    this._PS.getProjects().subscribe((res: IProject[]) => this.projectData = res.map((x: IProject) => {
      x.isUpdated = false;
      return x
    }),
    ()=>this.route.navigate(['error']))
  }

  postProjectDetails(data: IProject) {
    this._PS.postProject(data).subscribe(() => {
      this.getProjects()
    })
  }

  deleteProject(id: number) {
    this._PS.deleteProject(id).subscribe(() => {
      this.deleteBool = true
      setTimeout(() => {
        this.deleteBool = false
      }, 2000)
      this.getProjects()
    })
  }

  updateProject(index: number, data: IProject) {
    if(this.count<1) {
      this.projectData[index].isUpdated = true;
      this.updateObj = data;
    }
    else {
      alert("You can only update a row at a time.");
    }
    this.count++;
  }

  cancelUpdate(index: number) {
    this.projectData[index].isUpdated = false;
    this.count = 0;
  }

  updateRow(index: number, id: number) {
    this.updateObj.id = id;
    this._PS.updateProject(this.updateObj).subscribe(() => {
      this.projectname = this.updateObj.projectName
      this.count = 0;
      this.projectData[index].isUpdated = false
      this.updateBool = true
      setTimeout(() => {
        this.updateBool = false
      }, 2000)
      this.getProjects()
    })
  }

}
