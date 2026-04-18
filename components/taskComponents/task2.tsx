type task2Props = {
    user : {
        name: string,
        age: number
    }[]
}

function task2(props : task2Props) {
    return (
        <div>
            <h2>Task_2 : create a component which accepts object (User) Arrays as props</h2>
            {props.user.map((user) => (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Age: {user.age}</p>
                </div>
            ))}
        </div>
    )
}

export default task2;
