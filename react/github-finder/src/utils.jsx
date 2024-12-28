import axios from "axios"

export const fetchData = (url, callback) => {
    axios.get(url, {
        headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
            "X-GitHub-Api-Version": "2022-11-28"
        }
    })
    .then(data => callback(data.data))
    .catch(err => console.error(err))
}

export const search = (query, setData) => {
    axios.get(`https://api.github.com/search/users?q=${query}`, {
        headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
            "X-GitHub-Api-Version": "2022-11-28"
        }
    })
        .then(data => setData(data.data.items))
}