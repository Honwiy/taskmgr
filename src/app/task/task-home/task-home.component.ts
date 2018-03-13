import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';

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
    this.dialog.open(NewTaskComponent);
  }

}
