import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  items = [
    {
      id: 1,
      name: 'abc'
    },
    {
      id: 2,
      name: 'asdfsdf'
    },
    {
      id: 3,
      name: 'Olif'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  displayUser(user: {id:string; name: string}) {
    return user ? user.name : '';
  }

  

}
