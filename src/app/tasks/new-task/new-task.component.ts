import {
  Component,
  Output,
  EventEmitter,
  signal,
  inject,
  Input,
} from '@angular/core';

//[(ngModel)] requires FormsModule
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

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

  @Input({ required: true }) userId!: string;
  // @Output() add = new EventEmitter<NewTaskData>();
  @Output() close = new EventEmitter<void>();

  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    // this.add.emit({
    //   title: this.title,
    //   summary: this.summary,
    //   dueDate: this.dueDate,
    // });

    // this.onCancel();

    this.tasksService.addTask(
      {
        title: this.title,
        summary: this.summary,
        dueDate: this.dueDate,
      },
      this.userId,
    );

    this.close.emit();
  }
}
