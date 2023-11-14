class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Crear un árbol binario
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(5);
  root.left.left = new TreeNode(3);
  root.left.right = new TreeNode(4);
  root.right.right = new TreeNode(6);

  function flattened(root) {
    let queue = []
    preOrder(root, queue);
    let curr = queue.shift(); 
    while (queue.length > 0) {         
        let next = queue.shift();           
        curr.left = null;
        curr.right = next;
        curr = next;            
    }       
    return root;
}

function preOrder(root, queue) {
    if (!root) return;
    queue.push(root)
    preOrder(root.left, queue)
    preOrder(root.right, queue)
}

//Imprimir el árbol binario original
console.log(root);
//Llamado a la función para "aplanar" el árbol binario dejando todo en una rama derecha
//en el mismo árbol
console.log(flattened(root));
