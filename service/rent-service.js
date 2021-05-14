
let rentList = [{
    "movieId": 10002,
    "duration": 10,
    "person": "Hi Coders"
 }];

export default function createMovieRent(movieId, rentInfo){
    rentList.push({
        movieId: movieId,
        ...rentInfo
    })
}