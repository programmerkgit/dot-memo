import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-dot-drag-drop',
    templateUrl: './dot-drag-drop.component.html',
    styleUrls: [ './dot-drag-drop.component.scss' ]
})
export class DotDragDropComponent implements OnInit {

    lists = [
        'cdkDrag1',
        'cdkDrag2',
        'cdkDrag3',
        'cdkDrag4',
        'cdkDrag5',
        'cdkDrag6',
    ];

    todos = [
        'Get to work',
        'Pick up groceries',
        'Go home',
        'Fall asleep'
    ];

    dones = [
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog'
    ];

    constructor() {
    }

    dropTodo(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else if (event.previousContainer !== event.container) {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.lists, event.previousIndex, event.currentIndex);
    }

    ngOnInit() {
    }

    data(event: CdkDragDrop<string>) {
        console.log(event.item.data);
    }

}
