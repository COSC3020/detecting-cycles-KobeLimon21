# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.


The worst case for my implementation would be $\Theta$(V+E). The outer for loop does iterate through all the nodes, but it makes sure that it only implements a dfs on the nodes that have not been visited. In the worst case, the inner for loop has to iterate through every node's neighbors which would cover all the edges twice in a undirected graph, giving us 2E . But since we do ignore constants it still simplifies down to $\Theta$(V+E).



Sources

ChatGPT - see what cases I should test for 

https://www.youtube.com/watch?v=rKQaZuoUR4M - viewed this explanation

https://github.com/COSC3020/dijkstra-s-algorithm-KobeLimon21 - referenced this for test file layout 
