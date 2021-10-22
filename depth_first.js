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
g.addEdge('B', 'D');
g.addEdge('B', 'E');
g.addEdge('C', 'F');
g.addEdge('C', 'G');


g.printGraph();
console.log("============================================");

goneis = [];
paidia = [];

function epanal(goneas) {
    //console.log(g.AdjList.get(goneas)); moy dinei ta paidia
    goneis.push(goneas);
    console.log(goneis);
    //paidia.push(paidi);
    
    for (var paidi of g.AdjList.get(goneas)) {
        console.log(paidi);

        if (goneis.includes(paidi)) {
            console.log("NAI");
            continue;
        }
        epanal(paidi); 

    }
}

epanal("A");
