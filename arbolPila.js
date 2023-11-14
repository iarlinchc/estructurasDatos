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
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);

  
  // Función para recorrer en orden el árbol binario
  function inorderTraversal(node) {
    if (node === null) {
      return [];
    }
  
    const result = [];
    result.push(node.value);
    result.push(...inorderTraversal(node.left));
    result.push(...inorderTraversal(node.right));
    return result;
  }

  function flattened(raiz){
    let stack=[];
    let result=[];
    let current = raiz;
    while (current || stack.length){
      while(current){
        stack.push(current);
        current=current.left;      
      }
      current=stack.pop();
      result.push(current.value);
      current=current.right;    
    }    
     return result;
  }
  

  // Llamar a la función de recorrido en orden del árbol usando una función recursiva
  //usando la pila result
  console.log("Recorrido en orden de un árbol: "+inorderTraversal(root));  
  
  //Función para "aplanar" el árbol usando dos ciclos while y dejanto el resultado 
  //en la pila result
  console.log("Aplanado de un árbol binario: "+flattened(root));  
  
