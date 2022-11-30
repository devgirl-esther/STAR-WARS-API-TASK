const fetchData = async()=>{
    const response = await fetch("https://swapi.dev/api/people")
    const data = await response.json();
    const results = data.results;

    for (let i = 0; i <= results.length; i++){
        let {name, gender, height} = results[i];

        let imagePath = `../images/character${i}.jpg`
        document.getElementById('rows').innerHTML += ` <main class="col-lg-3 col-sm-6">
        <img
          src=${imagePath}
          title = "Click the named button for more info"
          class="img-responsive img-rounded"
          alt="${name}, a ${gender} with height: ${height}"
          srcset=""
          width="100%"
          height="100%"
        />
        <button
         type="button"
          class="btn btn-info btn-lg"
          onclick = "showImage(${i})">${name}</button>
        
        <main> 
        <div class="container1 dontshow" id=${i}>
        <div class="centered1">
        
        <button onclick = "closeButton(${i})">X</button>
          <img src="../images/character${i}.jpg" width="300px" height="500px" />


          <ul class="no-bullets">
                <li>Name: ${name}</li>
                <li>Gender: ${gender}</li>
                <li>Height: ${height}cm</li>
            </ul>
        </main>
        `

    }

}

function closeButton(id){
    let btn = document.getElementById(id)
    btn.classList.remove("show")
    btn.classList.add("dontshow")
}
    
function showImage(id){
    let el = document.getElementById(id)
    el.classList.remove("dontshow") 
    el.classList.add("show")   
}
fetchData()
































// function main() {}

// module.exports = { main }
