import { Avion } from './avion';

describe('Avion', () => {
  it('should create an instance', () => {
    expect(new Avion(0,"")).toBeTruthy();
  });
});
