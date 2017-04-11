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
//console.log(tree);
//tree.right.right.key = 'A';
//console.log(tree);

//--------Tree Height ---
// function height(node){
//    if(!node) return 0;
//    var leftHeight = height(node.left);
//    var rightHeight = height(node.right);
//
//    return Math.max(leftHeight, rightHeight) + 1;
// }
//
//
// console.log(height(tree));
//-----------------

const notBST = new BinarySearchTree();
notBST.insert('G');
notBST.insert('D');
notBST.insert('L');
notBST.insert('Z');
notBST.insert('A');
notBST.insert('F');
notBST.insert('B');
notBST.insert('M');

notBST.left.left.right.key = 'F';
//console.log(notBST);

// function isBST(node) {
//     let currentNode = node;
//     if(!node) {
//       return true;
//     }
//     while(currentNode.parent) {
//       let whichChild = currentNode.parent.parent > currentNode.parent;
//       if (whichChild !== (node.parent.parent > node.parent)){
//         return false;
//       }
//       currentNode = currentNode.parent;
//     }
//     return (isBST(node.right) && isBST(node.left));
// }
//
// console.log(isBST(notBST));



// function thirdLargest(node) {
//   let largest = node;
//   let third;
//   while (largest.right) {
//     largest = largest.right;
//   }
//   let second = largest.left ? largest.left : largest.parent;
//   }
//   while (second.right && (second.right != largest)) {
//     second = second.right;
//   };
//   // if (second.left && !second.left.right) {
//   //   third = second.left;
//   // }
//   // if (!second.left && (second.parent != largest)) {
//   //   third = second.parent;
//   // }
//   // else if (!second.left){
//   //   third = parent.largest;
//   // }
//   // return third;
// }
