const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const n = Number(fs.readFileSync(filePath).toString().trim());
let result = [];
let visited = Array(n + 1).fill(false);
function dfs() {
    if (result.length === n) {
        console.log(result.join(' '));
        return;
    }
    for (let i = 1; i <= n; i++) {
        if (!visited[i]) {
            visited[i] = true;      
            result.push(i);         
            dfs();                  
            result.pop();           
            visited[i] = false;     
        }
    }
}
dfs();
