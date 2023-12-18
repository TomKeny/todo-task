const API_URL = `http://localhost:4000`

export const getTodo = async (id) => {

    const response = await fetch(`${API_URL}/todos/item/${id}`, {
        // what method?
        method: "get",
        // type of content?
        headers: {
            "Content-Type": "application/json"
        }
        // body updated the "text" in your model with the text you sent as parameter 
        
    })

    const data = await response.json()
    return data
}