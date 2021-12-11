import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private hc:HttpClient) { }

  private _URL:string = "http://localhost:3000/projects"

  getProjects():Observable<IProject[]> {
    return this.hc.get<IProject[]>(this._URL)
  }

  postProject(data:IProject):Observable<IProject> {
    return this.hc.post<IProject>(this._URL,data)
  }

  deleteProject(id:number):Observable<IProject> {
    return this.hc.delete<IProject>(`${this._URL}/${id}`)
  }

  getSingleProject(id:number):Observable<IProject[]> {
    return this.hc.get<IProject[]>(this._URL+`?id=${id}`)
  }

  updateProject(updtObj:IProject) {
    return this.hc.put(this._URL+`/${updtObj.id}`,updtObj)
  }

}
