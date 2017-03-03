import { Component } from '@angular/core';

@Component({
  selector: 'click-me',
  template: `
    <button (click)="onClickMe()">Click me!</button>
    {{clickMessage}}`
})

export class ClickMeComponent {
  clickMessage = '';

  onClickMe() {
  	if(this.clickMessage == '')
    	this.clickMessage = 'You are my hero!';
    else
    	this.clickMessage = '';

  }
}
