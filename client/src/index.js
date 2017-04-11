class BinarySearchTree {
    constructor(key=null, value=null, parent=null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    insert(key, value) {
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }
        else if (key < this.key) {
            if (this.left === null) {
                this.left = new BinarySearchTree(key, value, this);
            }
            else {
                this.left.insert(key, value);
            }
        }
        else {
            if (this.right === null) {
                this.right = new BinarySearchTree(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }

    get(key) {
        if (this.key === key) {
            return this.value;
        }
        else if (key < this.key && this.left) {
            return this.left.get(key);
        }
        else if (key > this.key && this.right) {
            return this.right.get(key);
        }
        else {
            throw new Error('Key Error');
        }
    }

    remove(key) {
       if (this.key === key) {
           if (this.left && this.right) {
               const successor = this.right._findMin();
               this.key = successor.key;
               this.value = successor.value;
               successor.remove(successor.key);
           }
           else if (this.left) {
               this._replaceWith(this.left);
           }
           else if (this.right) {
               this._replaceWith(this.right);
           }
           else {
               this._replaceWith(null);
           }
       }
       else if (key < this.key && this.left) {
           this.left.remove(key);
       }
       else if (key > this.key && this.right) {
           this.right.remove(key);
       }
       else {
           throw new Error('Key Error');
       }
   }

   _replaceWith(node) {
        if (this.parent) {
            if (this === this.parent.left) {
                this.parent.left = node;
            }
            else if (this === this.parent.right) {
                this.parent.right = node;
            }

            if (node) {
                node.parent = this.parent;
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

    _findMin() {
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }
}

const tree = new BinarySearchTree();
tree.insert('E');
tree.insert('A');
tree.insert('S');
tree.insert('Y');
tree.insert('Q');
tree.insert('U');
tree.insert('E');
tree.insert('S');
tree.insert('T');
tree.insert('I');
tree.insert('O');
tree.insert('N');
console.log(tree);


function height(node){
   if(!node) return 0;
   var leftHeight = height(node.left);
   var rightHeight = height(node.right);

   return Math.max(leftHeight, rightHeight) + 1;
}


console.log(height(tree));
