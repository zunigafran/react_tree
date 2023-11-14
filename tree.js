/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    let total = this.root.val;

    function sumNode(node) {
      for (let child of node.children) {
        total += child.val;
        if (child.children.length > 0) {
          sumNode(child);
        }
      }
    }

    sumNode(this.root);
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let count = this.root.val % 2 === 0 ? 1 : 0;

    function countEvensNode(node) {
      for (let child of node.children) {
        if (child.val % 2 === 0) count++;
        if (child.children.length > 0) {
          countEvensNode(child);
        }
      }
    }

    countEvensNode(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let count = this.root.val > lowerBound ? 1 : 0;

    function countEvensNode(node) {
      for (let child of node.children) {
        if (child.val > lowerBound) count++;
        if (child.children.length > 0) {
          countEvensNode(child);
        }
      }
    }

    countEvensNode(this.root);
    return count; 
  }
}

module.exports = { Tree, TreeNode };
