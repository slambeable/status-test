import NodeInterface from './types/NodeInterface';

class TreeStore {
  private tree: NodeInterface[];

  constructor(tree: NodeInterface[]) {
    this.tree = tree;
  }

  public getAll() {
    return this.tree;
  }

  public getItem(id: number | string) {
    return this.tree.find((element: NodeInterface) => element.id === id);
  }

  public getChildren(id: number) {
    return this.tree.filter((element: NodeInterface) => element.parent === id);
  }

  public getAllChildren(id: number): NodeInterface[] {
    const filteredTree = this.getChildren(id);

    return filteredTree.reduce((acc: NodeInterface[], element: NodeInterface) => (
      [...acc, ...this.getAllChildren(element.id)]), filteredTree);
  }

  public getAllParents(id: number | string): NodeInterface[] {
    const item = this.getItem(id);
    const parent = item ? this.getItem(item.parent) : null;

    return parent
      ? [parent, ...this.getAllParents(parent.id)]
      : [];
  }
}

export default TreeStore;
