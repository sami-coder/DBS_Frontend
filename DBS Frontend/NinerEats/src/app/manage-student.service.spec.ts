import { TestBed } from '@angular/core/testing';

import { ManageStudentService } from './manage-student.service';

describe('ManageStudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageStudentService = TestBed.get(ManageStudentService);
    expect(service).toBeTruthy();
  });
});
