function hasCycle(graph) {
    let visited = new Array(graph.length).fill(false); // declare array with all false values as they have not been visited 
    let tracking = new Array(graph.length).fill(false); // declare array with all false values as they have also not been visited 

    function dfs(node, parent) {
        if (tracking[node]) { // if this is true, it has already seen this node which would imply its a cycle 
            return true;
        }

        if (visited[node]) { // if the node was processed in a path before, skip it 
            return false;
        }

        visited[node] = true; // marks node as visited 
        tracking[node] = true; // marks node as visited for current path 

        for (const neighbor of graph[node]) { // iterates over neighbors of node 
            if (!visited[neighbor]) { // neighbor hasn't been visited 
                if (dfs(neighbor, node)) { // visit the unvisited neighbor
                    return true; // cycle detected because of edge 
                }
            } else if (neighbor !== parent) { // neighbor visited and not parent, cycle again 
                return true; 
            }
        }

        tracking[node] = false; // unmark node are being explored 
        return false; // false if no cycle is detected 
    }

    for (let i = 0; i < graph.length; i++) { // iterate through each node 
        if (!visited[i] && dfs(i, -1)) { // dfs node if it hasnt been visited 
            return true; // return true if a cycle is detected 
        }
    }

    return false;
}
