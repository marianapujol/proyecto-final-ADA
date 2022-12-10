window.onload = async () => {

    let page = await fetchPage(1)
    addCharacterCards(page.results)

  }

  async function fetchPage(pageNumber) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
    const data = await response.json()
    return data
  }

  function addCharacterCards(characters) {
    let cards = ''

    for(let i = 0; i < characters.length; i++){
      let character = characters[i]
      cards += createCharacterCard(character)
    }

    
    let cardContainer = document.getElementById('cardContainer')
    cardContainer.insertAdjacentHTML('beforeend', cards)
  }

  function createCharacterCard(character){
    let card = `
      <div class="character-card col-3">
        <div class="p-3">
          <div class="card" style="width: 18rem;">
            <img src="${character.image}" alt="img">
            <div class="card-body">
              <h5 class="card-title">${character.name} <spa class="text-muted">#${character.id}</span></h5> 
              <div class="container py-3">
                <dl class="row my-1"> 
                  <dt class="col-6">Specie:</dt>
                  <dd class="col-6">${character.species}</dd>
                </dl>
                <dl class="row my-1"> 
                  <dt class="col-6">Status:</dt>
                  <dd class="col-6">${character.status}</dd>
                </dl>
                <dl class="row my-1"> 
                  <dt class="col-6">Gender:</dt>
                  <dd class="col-6">${character.gender}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
     `
     return card
  }
