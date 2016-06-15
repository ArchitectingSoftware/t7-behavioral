import {
  it,
  describe,
  async,
  inject,
  beforeEachProviders
} from '@angular/core/testing';

import { TestComponentBuilder } from '@angular/compiler/testing';

import { JournalComponent } from './journal.component';

describe('About Component', () => {

  beforeEachProviders(() => []);

  it('should ...', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    tcb.createAsync(JournalComponent).then((fixture) => {
      fixture.detectChanges();
    });
  })));

});
