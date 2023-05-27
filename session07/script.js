let button = document.getElementById("generate");
button.addEventListener("click",function(){
    let column = parseInt(document.getElementById("column").value);
    let row = parseInt(document.getElementById("row").value);

    let target = document.getElementById("table");
    target.innerHTML = '';
    let html = '';

    html += '<thead>';
    html += '<tr>';
    for(let i = 1; i <= column; i++){
        html += '<td>Cột '+i+'</td>';
    }
    html += '</tr>';
    html += '</thead>';

    html += '<tbody>';
    for(let i = 1; i <= row; i++){
        html += '<tr>';
        for(let j = 1; j <= column; j++){
            html += '<td>Hàng '+i+' Cột '+j+'</td>';
        }
        html += '</tr>';
    }
    html += '</tbody>';

    target.innerHTML = html;
});