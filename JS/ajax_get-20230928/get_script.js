let btn = document.getElementById('btnget');
btn.addEventListener('click', runAjax);

let content = document.getElementById("content");

function runAjax() {
    let xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'data.json', true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                console.log(xhr.responseText);
                var data = JSON.parse(xhr.responseText);

                
                if (Array.isArray(data.names)) {
                    // Construct the HTML to display the names
                    let html = "<ul>";
                    data.names.forEach(function(name) {
                        html += "<li>" + name + "</li>";
                    });
                    html += "</ul>";

                    // Set the HTML content
                    content.innerHTML = html;
                } else {
                    content.innerText = "Data is not an array of names.";
                }
            } else {
                content.innerText = "Error: File Not Found";
            }
        }
    }

    xhr.send();
}
