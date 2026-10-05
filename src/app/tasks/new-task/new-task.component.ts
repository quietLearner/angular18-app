import { Component, Output, EventEmitter, signal } from '@angular/core';

//[(ngModel)] requires FormsModule
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  title: string = '';
  summary: string = '';
  dueDate: string = '';
  // title = signal('');
  // summary = signal('');
  // dueDate = signal('');

  @Output() add = new EventEmitter<NewTaskData>();
  @Output() cancel = new EventEmitter<void>();

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate,
    });

    this.onCancel();
  }
}
