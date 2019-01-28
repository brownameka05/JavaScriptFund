function sortMovies(){
  let viceSort = document.getElementById('viceSort').textContent;
  let starSort = document.getElementById('starSort').textContent
  let muleSort = document.getElementById('muleSort').textContent
  let whiplashSort = document.getElementById('whiplashSort').textContent
  let moviesArray = [whiplashSort, viceSort, starSort, muleSort]
  moviesArray.sort()

  let sortedMovies = '<p><ol>'
  for (let movie in moviesArray){
    sortedMovies += '<li>' + moviesArray[movie] + '</li>'
  }
  sortedMovies += '</ol></p>'
  document.getElementById('sortResults').innerHTML = sortedMovies
  // alert(moviesArray)
  //
  // alert("Hello Movie Lovers")
}
