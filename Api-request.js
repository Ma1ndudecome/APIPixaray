export default function fetchs(input, page){
    return fetch(`https://pixabay.com/api/?key=44315350-5fb6622ed99d21bdef1df9e3d&q=${input}&per_page=4&page=${page}`)
    .then(request=>request.json())
}