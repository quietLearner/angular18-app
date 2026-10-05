import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
  output,
} from '@angular/core';

import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //definite assignment assertion !
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  // This child component can emit an event called select to its parent component.
  @Output() select = new EventEmitter<string>();

  // this is not signal
  // select = output<string>();

  // read only
  // avatar = input.required<string>();
  // name = input<string>('');

  // imagePath = computed(() => 'assets/users/' + this.avatar());

  get imagePath() {
    // return 'assets/users/' + this.avatar;
    return 'assets/users/' + this.user.avatar;
  }

  // who recive this? and how?
  onSelectUser() {
    // this.select.emit(this.id);
    this.select.emit(this.user.id);
  }
}
