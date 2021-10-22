class Graph {

    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

    addVertex(v) {
    this.AdjList.set(v, []);
    }
   
    addEdge(v, w) {
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
    }


    printGraph() {
        var get_keys = this.AdjList.keys();
        for (var i of get_keys) {
            var get_values = this.AdjList.get(i);
            var conc = "";

            for (var j of get_values)
                conc += j + " ";

            // print the vertex and its adjacency list
            console.log(i + " -> " + conc);
        }
    }

}

var g = new Graph(7);
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
	g.addVertex(vertices[i]);
}

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('A', 'E');
g.addEdge('B', 'D');
g.addEdge('B', 'F');
g.addEdge('C', 'G');
g.addEdge('F', 'E');


g.printGraph();
console.log("============================================");

all_parents = [];


function depth_first(parent) {
    
    all_parents.push(parent);
    console.log("List of parents " + all_parents);
    
    
    for (var kid of g.AdjList.get(parent)) {
        console.log("The current kid is " + kid);

        if (all_parents.includes(kid)) {
            continue;
        }
        depth_first(kid); 

    }
}

depth_first("A");

console.log("The route is: " + all_parents);