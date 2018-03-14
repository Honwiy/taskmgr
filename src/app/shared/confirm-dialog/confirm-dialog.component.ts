import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  template: `
  <form>
    <h2 md-dialog-title>{{title}}</h2>
    <div md-dialog-content>
      {{content}}
    </div>
    <div md-dialog-actions>
      <button type="button" md-raised-button color="primary" (click)="onclick(true)">确定</button>
      <button type="button" md-button md-dialog-close (click)="onclick(false)">取消</button>
    </div>
  </form>
  `,
  styles: []
})
export class ConfirmDialogComponent implements OnInit {
  title = "";
  content = "";
  constructor(
    private dialogRef: MdDialogRef<ConfirmDialogComponent>,
    @Inject(MD_DIALOG_DATA)private data) { }

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.content;
  }

  onclick(result: boolean) {
    this.dialogRef.close(result);
  }

}
