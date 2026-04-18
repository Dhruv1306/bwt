import type React from "react"

type task5Props = {
    handleChange : (e: React.ChangeEvent<HTMLInputElement>) 
}


export function task5() {
    return (
        <div>
            <h2>Task_5 : Create an input Element Component - import it - use Component & functionality - display the data on UI as a paragraph</h2>
            <input type="text" placeholder="Enter something..." />
        </div>
    )
}