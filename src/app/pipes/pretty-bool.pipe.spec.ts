import { PrettyBoolPipe } from './pretty-bool.pipe';

describe('PrettyBoolPipe', () => {
  it('create an instance', () => {
    const pipe = new PrettyBoolPipe();
    expect(pipe).toBeTruthy();
  });
});
