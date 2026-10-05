import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
// import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [HeaderComponent, UserComponent, TasksComponent, NgForOf, NgIf],
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = '';

  onUserSelected(id: string) {
    this.selectedUserId = id;
  }

  get selectedUser() {
    return DUMMY_USERS.find((user) => user.id === this.selectedUserId);
  }
}
