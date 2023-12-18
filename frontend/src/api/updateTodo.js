const API_URL = `http://localhost:4000`

export const updateTodo = async (todo) => {
    console.log(todo._id)

    let options = JSON.stringify({
        update: {
            text: todo.text
        }
    })
    const response = await fetch(`${API_URL}/todos/item/${todo._id}`, {
        
        // what method?
        method: "PATCH",
        // type of content?
        body: options,
        
        headers: {
            "Content-Type": "application/json"
        }
        // body updated the "text" in your model with the text you sent as parameter 
        
    })
    const json = await response.json()
    return json
}