import { Servicio } from './servicio';

describe('Contacto', () => {
  it('should create an instance', () => {
    expect(new Servicio(0,"")).toBeTruthy();
  });
});
