import { TestBed } from '@angular/core/testing';

import { EmitterSubjectService } from './emitter-subject.service';

describe('EmitterSubjectService', () => {
  let service: EmitterSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmitterSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
