const API_URL = `http://localhost:4000`

export const addTodo = async (text) => {
    // pass paramter to function
    // create new object with 'text' key (depending on your Model)
    let obj = { text: text }
    const response = await fetch(`${API_URL}/tests/item`, {
        // method type?
        method: 'post',
        // sending body, stringify data
        body: JSON.stringify(obj),
        // content type?
        headers: {
            "Content-Type": "application/json"
        }
    })
    const json = await response.json()
    return json
}
