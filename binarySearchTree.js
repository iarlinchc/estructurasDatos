
function BinarySearchTree(){
    this.root = null;
}

BinarySearchTree.prototype={
    //contructor
    constructor: BinarySearchTree,

    add: function(value){
        //Crea un nuevo nodo y se le asigna un valor
        var node = {
            value: value,
            left: null,
            right: null
        }

        current;
        //Cuando no hay nodos en el árbol
        if (this.root===null){
            this.root = node;
        } else {
            current = root;
            while (true){
                //si el nuevo valor es menor que el valor del nodo actual, ir a la izq
                if(value < current.value){
                    //si no hay rama izquierda, insertar el nodo
                    if(current.left === null){
                        current.left = node;
                        break;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value){
                    //si no hay rama derecha, insertar el nodo
                    if (current.rigth === null){
                        current.rigth = node;
                        break;
                    } else {
                        current = current.rigth;
                    }
                } else {
                    break;
                }
            }
        }
    },

    contains: function(value){

    },

    remove: function(value){

    },

    size: function(){

    },

    toArray: function(){

    },   

    toString: function(){

    }
}