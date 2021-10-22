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

var g = new Graph(6);
var vertices = [ 'A', 'B', 'C', 'D', 'F', 'G', 'H', 'I', 'J', 'K' ];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
	g.addVertex(vertices[i]);
}


g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'C');
g.addEdge('B', 'F');
g.addEdge('B', 'G');
g.addEdge('D', 'H');
g.addEdge('D', 'I');
g.addEdge('C', 'J');
g.addEdge('C', 'K');

g.printGraph();

var txt = ["A"];
function psaxnw(komvos) {
    for(var k of g.AdjList.get(komvos)) {
        console.log(k);
        if (txt.includes(k)) {
            break;
        } else {
            txt.push(k);
            psaxnw(k);
        }            
    }
}

psaxnw("A");
console.log(txt);