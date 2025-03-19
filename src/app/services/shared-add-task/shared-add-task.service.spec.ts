import { TestBed } from '@angular/core/testing';

import { SharedAddTaskService } from './shared-add-task.service';

describe('SharedAddTaskService', () => {
  let service: SharedAddTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedAddTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
