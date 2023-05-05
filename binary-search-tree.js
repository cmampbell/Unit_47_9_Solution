class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val)
      return this
    }

    let current = this.root

    while (current) {
      if (val < current.val) {
        if(current.left){
          current = current.left
        } else {
          current.left = new Node(val)
          return this
        }
      }
      else if (val > current.val) {
        // if we have current.right move there
        if(current.right){
          current = current.right
        } else {
          // create current.right
          current.right = new Node(val)
          return this
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {

    if (this.root === null) {
      this.root = new Node(val)
      return this
    }

    function _insertNodeIntoTree(node){
      // base case
      if(!node){
        return new Node(val)
      }
      if(val < node.val){
        if(node.left){
          _insertNodeIntoTree(node.left)
        } else {
          node.left = _insertNodeIntoTree(node.left)
        }
      } else if ( val > node.val){
        if(node.right){
          _insertNodeIntoTree(node.right)
        } else {
          node.right = _insertNodeIntoTree(node.left)
        }
      }      
    }

    _insertNodeIntoTree(this.root)
    return this
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if(this.root === null) return undefined

    let current = this.root

    while(current){
      if(current.val === val) return current

      current = val < current.val ? current.left : current.right
    }

    return undefined
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if(this.root === null) return undefined

    function _traverseTree(node){
      // base case no node found
      if(!node) return undefined
      if(node.val === val) return node

      return val < node.val ? _traverseTree(node.left) : _traverseTree(node.right)
    }

    return _traverseTree(this.root)
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const values = []
    function _traverseTree(node){
      if(!node) return undefined

      values.push(node.val)

      if(_traverseTree(node.left)){
        values.push(node.left.val)
      }

      if(_traverseTree(node.right)){
        values.push(node.right.val)
      }
    }

    _traverseTree(this.root)
    return values
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const values = []
    function _traverseTree(node){
      if(!node) return undefined

      if(_traverseTree(node.left)){
        values.push(node.left.val)
      }

      values.push(node.val)

      if(_traverseTree(node.right)){
        values.push(node.right.val)
      }
    }

    _traverseTree(this.root)
    return values
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const values = []
    function _traverseTree(node){
      if(!node) return undefined

      if(_traverseTree(node.left)){
        values.push(node.left.val)
      }

      if(_traverseTree(node.right)){
        values.push(node.right.val)
      }

      values.push(node.val)
    }

    _traverseTree(this.root)
    return values

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    // use a loop and a queue

    let queue = [this.root]
    let values = []

    while(queue.length){
      let current = queue.shift()

      values.push(current.val)

      if(current.left) queue.push(current.left)
      if(current.right) queue.push(current.right)
    }

    return values
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;
