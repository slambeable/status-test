import TreeStore from '../src/index';

const items = [
  { id: 1, parent: 'root' },
  { id: 2, parent: 1, type: 'test' },
  { id: 3, parent: 1, type: 'test' },

  { id: 4, parent: 2, type: 'test' },
  { id: 5, parent: 2, type: 'test' },
  { id: 6, parent: 2, type: 'test' },

  { id: 7, parent: 4, type: null },
  { id: 8, parent: 4, type: null },
];

const ts = new TreeStore(items);

describe('Test ThreeStore', () => {
  it('Test getAll method', () => {
    expect(ts.getAll()).toBe(items);
  });

  it('Test getItem method - 7', () => {
    expect(ts.getItem(7)).toStrictEqual({ id: 7, parent: 4, type: null });
  });

  it('Test getChildren method - 5', () => {
    expect(ts.getChildren(5)).toStrictEqual([]);
  });

  it('Test getChildren method - 2', () => {
    expect(ts.getChildren(2)).toStrictEqual([
      { id: 4, parent: 2, type: 'test' },
      { id: 5, parent: 2, type: 'test' },
      { id: 6, parent: 2, type: 'test' },
    ]);
  });

  it('Test getAllChildren method - 2', () => {
    expect(ts.getAllChildren(2)).toStrictEqual([
      { id: 4, parent: 2, type: 'test' },
      { id: 5, parent: 2, type: 'test' },
      { id: 6, parent: 2, type: 'test' },

      { id: 7, parent: 4, type: null },
      { id: 8, parent: 4, type: null },
    ]);
  });

  it('Test getAllParents method - 7', () => {
    expect(ts.getAllParents(7)).toStrictEqual([
      { id: 4, parent: 2, type: 'test' },
      { id: 2, parent: 1, type: 'test' },
      { id: 1, parent: 'root' },
    ]);
  });
});
