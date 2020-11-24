const UIkmInput = document.getElementById('kmInput');
document.getElementById('output').style.display = 'none';
UIkmInput.addEventListener('input', (e)=>{
    document.getElementById('output').style.display = 'block';
    let km = e.target.value;
    document.getElementById('metresOutput').innerHTML = km*1000;
    document.getElementById('smOutput').innerHTML = km*100000;
    document.getElementById('millimetresOutput').innerHTML = km*1000000;
});
