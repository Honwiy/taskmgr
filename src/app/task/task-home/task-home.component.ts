import { NewTaskListComponent } from './../new-task-list/new-task-list.component';
import { ConfirmDialogComponent } from './../../shared/confirm-dialog/confirm-dialog.component';
import { NewTaskComponent } from './../new-task/new-task.component';
import { CopyTaskComponent } from './../copy-task/copy-task.component';
import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  lists = [
    {
      id: 1,
      name: '待办',
      tasks: [
        {
          id: 1,
          desc: '任务一',
          completed: true,
          priority: 3,
          owner: {
            id: 1,
            name: 'zhangsan',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date()
        },  
        {
          id: 2,
          desc: '任务二',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: 'lisi',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
        },  
      ]
    },
    {
      id: 2,
      name: '进行中',
      tasks: [
        {
          id: 1,
          desc: '任务三',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: 'wangwu',
            avatar: 'avatars:svg-13'
          },
          dueDate: new Date(),
        },  
        {
          id: 2,
          desc: '任务四',
          completed: true,
          priority: 2,
          owner: {
            id: 1,
            name: 'oliver',
            avatar: 'avatars:svg-14'
          },
          dueDate: new Date(),
        },  
      ]
    }
  ]

  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  launchNewTaskDialog() {
    const dialogRef = this.dialog.open(NewTaskComponent, {data: {title: '新建任务' }});
  }

  launchCopyTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}});
  }

  launchUpdateTaskDialog(task) {
    const dialogRef = this.dialog.open(NewTaskComponent, {data: {title: '修改任务', task: task}});
  }

  launchConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: '删除任务列表', content: '您确认删除该任务列表吗？'}});
      dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchEditListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: '更改列表名称'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchNewListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: '新增列表'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

}
