import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private hc:HttpClient) { }

  public URL:string = "http://localhost:3000/projects"

  getProjects():Observable<IProject[]> {
    return this.hc.get<IProject[]>(this.URL)
  }

  postProject(data:IProject):Observable<IProject> {
    return this.hc.post<IProject>(this.URL,data)
  }

}
