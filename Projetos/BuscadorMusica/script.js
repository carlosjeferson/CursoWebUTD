document.getElementById('searchButton').addEventListener('click', async ()=>{
    const artistInput = document.getElementById('artistInput').value;
    const titleInput = document.getElementById('titleInput').value;
    const lyricsResult = document.getElementById('lyricsResult');

    const res = await fetch(`https://api.lyrics.ovh/v1/${artistInput}/${titleInput}`);

    const letra = await res.json();

    lyricsResult.innerText = letra.lyrics;

    console.log(letra)
});