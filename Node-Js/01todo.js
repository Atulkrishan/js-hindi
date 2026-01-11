const fs = require('fs');
const filePath = "./task.json";

const command = process.argv[2];
const args = process.argv[3];

function saveTasks(tasks){
    const formattedData = JSON.stringify(tasks);
    fs.writeFileSync(filePath ,formattedData);
}   
function listAllTasks(){
    const allTasks = loadTask();
    allTasks.forEach((name,index) => {
        console.log(index," : ", name);
    })
}
function removeTasks(task){
    const allTasks = loadTask();
    const newTasks = allTasks.filter((name) => (name != task));
    saveTasks(newTasks);
} 

function addTask(task){
    const tasks = loadTask();
    tasks.push(task);
    saveTasks(tasks);
    console.log(`A new Task named : ${task} added..`);
}

function loadTask(){
    try {
        const data = fs.readFileSync(filePath);
        // console.log(typeof data);
        const parsedData = data.toString();
        // console.log(typeof parsedData);
        return JSON.parse(parsedData);
    } catch (error) {
        return [];
    }
}
if(command === "add"){
    addTask(args);
}
else if(command === "list"){
    listAllTasks();
}
else if(command === "remove"){
    removeTasks(args);
}
else {
    console.log("Command not found");
}