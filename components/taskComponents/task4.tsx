type Task4Props = {
    onButtonClick : () => void         /* We have written "void" here to tell that this function doesn't return anything  fn. will not return anything. In other words, this function should just do something, not return a value*/
}

export function task4 (props: Task4Props) {
    return (
        <div>
            <h2>Task_4 : Create a Button Component - import it - use Component & functionality - alert(button clicked)</h2>
            <button onClick={() => alert("Button clicked!!")}>Click me!!</button> <br /><br />
            <button onClick={props.onButtonClick}>get data as props</button>
        </div>
    )
}