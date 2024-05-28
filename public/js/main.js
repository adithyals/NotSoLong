document.getElementById('shortenBtn').addEventListener('click',async() => {
    const originalUrl= document.getElementById('originalUrl').value;
    if(!originalUrl || !isValidUrl(originalUrl)){
        alert('please enter a valid url');
        return;

    }
    try {
        const response=await fetch('/shorten',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({originalUrl})

        });
        const data =await response.json();
        document.getElementById('result').textContent=`Shortened URL: ${window.location.href} ${data.shortUrl}`
    } catch (err) {
        console.error('error shortening the url',err);
        alert('error shortining the url,please try again')
    }
});

function isValidUrl(String){
    try {
        new URL(String);
        return true;
    } catch (_) {
        return false;      
    }
}