import { Component } from '@angular/core';
import {trigger, animate, style, transition, animateChild, group, query, stagger} from '@angular/animations';
import {HostBinding, Input, Output, EventEmitter} from '@angular/core';
import { statusChange } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  /*animations: [
    statusChange
  ]*/
 animations: [trigger('bgImgTrigger', [
    transition('* <=> *', [
      // this hides everything right away
      //query('*', style({ opacity: 0 }),{optional: true}),
      
      // starts to animate things with a stagger in between
      //query('*', stagger('30ms', [ animate('300ms', 
      //style({ opacity: 1 }))]),{optional: true}),

      /*query('*', [
        style({ opacity: 0, transform: 'rotateX(-90deg) translateY(150px) translateZ(50px)' }),
        stagger(100, [
          animate('1200ms cubic-bezier(0.35, 0, 0.25, 1)', style('*'))
        ])
    ]),

    query(
      '*',
      [
        style({
          opacity: 0,
          transform: 'translateY(9rem) rotate(3600deg)'
        }),
        animate(
          '15s cubic-bezier(0, 1.8, 1, 1.8)',
          style({ opacity: 1, transform: 'translateY(0) rotate(360deg)' })
        )
  ])*/
])]),
trigger('statusChange', [transition('*<=>*', [    
  query('*',  [style({opacity: 0, transform: 'translateY(9rem) rotate(36000deg)'}),
    animate('0.60s cubic-bezier(0, 1.8, 1, 1.8)', style({ opacity: 1, transform: 'translateY(0) rotate(360deg)' }))])])])
 ]})

export class AppComponent {
  title = 'app';
  statusState = 'loop-state';
}
