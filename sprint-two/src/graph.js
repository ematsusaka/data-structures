var Graph = function() {
  this.nodes = {};
};

Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};

// debugger;
Graph.prototype.contains = function(node) {
  if (this.nodes[node]) return true;
  return false;
};

Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  return _.contains(this.nodes[fromNode], toNode)
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
}

Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes[fromNode].length; i++) {
    if (this.nodes[fromNode][i] === toNode) {
      this.nodes[fromNode].splice(i, 1);
    }
  }
  for (var j = 0; j < this.nodes[toNode].length; j++) {
    if (this.nodes[toNode][j] === fromNode) {
      this.nodes[toNode].splice(j, 1);
    }
  }
};

Graph.prototype.forEachNode = function(cb) {
  return _.each(this.nodes, function(el, i) {
    cb(i);
  })
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
