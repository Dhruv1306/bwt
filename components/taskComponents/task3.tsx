type task3Props = {
    children: React.ReactNode;
}

function task3(props: task3Props) {
    return (
        <div>
            <h2>Task_3 : Create a component which accepts a child Props</h2>
            {props.children}
        </div>
    )
}

export default task3;