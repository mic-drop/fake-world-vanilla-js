
const doShit = async function () {
    const URL_API = "https://random-word-api.herokuapp.com/word?length=5";
    const response = await fetch(URL_API);
    const word = await response.json();
    console.log(word);
}

export default doShit;
