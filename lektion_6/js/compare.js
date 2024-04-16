fetch(url)
.then(response => response.json())
.then(data => console.log(data));

async function myFetch(url){
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

myFetch(url).then(returnedData => console.log(returnedData));