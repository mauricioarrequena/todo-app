import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import { SharedAddTaskService } from '../../services/shared-add-task/shared-add-task.service';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SidenavComponent, MatButtonModule, MatDialogModule, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  readonly dialog = inject(MatDialog);
  sharedAddTaskService = inject(SharedAddTaskService);

  constructor() {
    this.sharedAddTaskService.openAdd$.subscribe(() => {
      this.openDialog();
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddTaskComponent);
  }
}
