import { InviteComponent } from './../invite/invite.component';
import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewProjectComponent } from "../new-project/new-project.component";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = [
    {
      "name": "企业协作平台",
      "desc": "项目描述0",
      "coverImg": "assets/img/covers/0.jpg"
    },
    {
      "name": "企业协作平台",
      "desc": "项目描述1",
      "coverImg": "assets/img/covers/1.jpg"
    }
  ]

  constructor(private dialog: MdDialog) { } 

  ngOnInit() {
  }

  openNewProjectDialog() {
      const dialogRef = this.dialog.open(NewProjectComponent, {data: {dark: true}});
      dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchInviteDialog() {
      const dialogRef = this.dialog.open(InviteComponent);
  }

}
