//Create the graph object
//Each key represents a node on the graph. Each key has an object for its value, which represents the immediate neighbors and the weight of reaching that neighbor. 
const graph = {
        A: {C: 4, D: 2},
        B: {A: 8, D: 7},
        C: {D: 6, E: 3},
        D: {E: 1},
        E: {}
  };

  
  //Keep track of the lowest weight from one node to the next.
const weight = {
    
   };

   // Keep track of the lowest weight parent
const parents = {
   
  };


const findLowestWeightNode = (weights, processed) => {
    const knownNodes = Object.keys(weights)
    
    const lowestWeightNode = knownNodes.reduce((lowest, node) => {
    if (lowest === null && !processed.includes(node)) {
     lowest = node;
     }
   if (weights[node] < weights[lowest] && !processed.includes(node)) {    
   lowest = node;
    }
   return lowest;
   }, null);
   
  return lowestWeightNode
 };

 
 const dijkstra = (graph, from, to) => {
   
    // track lowest cost to reach each node  
    const weights = Object.assign({to: Infinity}, graph[from]); 
      
    // track paths  
    const parents = {to: null};  
    for (let child in graph[from]) {    
      parents[child] = from;  
     }
       
    // track nodes that have already been processed  
    const processed = [];
    //Next, we’ll set the initial value of the node being processed //using the lowestCostNode function. Then, we’ll begin a while loop, //which will continuously look for the cheapest node.
    let node = findLowestWeightNode(weights, processed);
       
    while (node) {
    //Get the weight of the current node
    let weight = weights[node];
    //Get all the neighbors of current node
    let children = graph[node]; 
    //Loop through each of the children, and calculate the weight to reach that child node. We'll update the weight of that node in the weights object if it is lowest or the ONLY weight available
    for (let n in children) {   
        let newWeight = weight + children[n];     
         if (!weights[n] || weights[n] > newWeight) { 
          weights[n] = newWeight; 
          parents[n] = node;
            }
         }
     //push processed data into its data structure
     processed.push(node);
     // repeat until we processed all of our nodes.    
     node = findLowestWeightNode(weights, processed);
    }

        
    let optimalPath = [to];
    let parent = parents[to];
    while (parent) {
        optimalPath.unshift(parent);
        parent = parents[parent]; // add parent to start of path array
    }
  
  const results = {
    distance: weights[to],
    path: optimalPath
  };

  return results;

}; //end of function

console.log(JSON.stringify(dijkstra(graph, 'B', 'D')));

// {"distance":8,"path":["start","A","D","finish"]}
