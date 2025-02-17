


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))


async function fetchData() {

    try {

        let data = await fetch('https://jsonplaceholder.typicode.com/posts')
        let FData = await data.json()
        console.log(FData)


    } catch (error) {
        console.log(error)
    }

}

fetchData()