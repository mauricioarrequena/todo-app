import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { TaskService } from '../../services/task/task.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  taskService = inject(TaskService);

  taskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  get title()
  {
    return this.taskForm.get('title')!;
  }

  get description()
  {
    return this.taskForm.get('description')!;
  }

  submit() {
    this.taskService.post(this.title.value!, this.description.value!).subscribe((data) => {
      console.log(data);
    });
  }
}
