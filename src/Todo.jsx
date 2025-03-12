// export default function Todo({task, isDone}) {
//     return (
//         <li>Task: {task} {isDone} </li>
//     )
// }

// conditional rendering option 1 (Bangla version) with if else
// export default function Todo({task, isDone}) {
    
//     if(isDone){
//         return <li><b>Finished:</b> {task}</li>
//     } else {
//         return <li><b>Work one:</b> {task}</li>
//     }
    
// }

// conditional rendering option 2 (Bangla version) with boolean operator
// export default function Todo({task, isDone}) {
    
//     if(isDone){
//         return <li><b>Finished:</b> {task}</li>
//     }
//     return <li><b>Work one:</b> {task}</li>
    
// }

// // conditional rendering option 3 with ternary operator
// export default function Todo({task, isDone}) {

//     return <li>{isDone ? <b>Finished:</b> : <b>Work one:</b>} {task}</li>
    
// }

// // conditional rendering option 4 with and(&&) operator
// export default function Todo({task, isDone}) {

//     return (
//         <li>{task} {isDone && <b>Done</b>}</li>
//     )
    
// }

// // conditional rendering option 5 with or(||) operator
// export default function Todo({task, isDone}) {

//     return (
//         <li>{task} {isDone || <b>Do it</b>}</li>
//     )
    
// }

// // conditional rendering option 6
export default function Todo ({task, isDone}) {
    let listItem;
    if(isDone){
        listItem = <li><b>Finished:</b> {task}</li>
    } else {
        listItem = <li><b>Work one:</b> {task}</li>
    }
    return listItem;
}


