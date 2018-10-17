window.onload = init;
function init() {
    var myP = document.getElementsByTagName('p');
    //console.log(Array.from(myP));
    for (var i = 0; i < myP.length; i++) {
        var p = myP[i];
        //console.log(p);
        p.addEventListener('click', createElements);

        function createElements(eventObj) {

            var searchP = eventObj.target;
            //console.log(searchP);
            var nameId = searchP.id;
            var pId = document.getElementById(nameId);
            console.log(nameId);

            var div = document.createElement('div');
            var form = document.createElement('form');
            var inputText = document.createElement('input');
            var inputBtn = document.createElement('input');
            var p = document.createElement('p');

            inputText.setAttribute("type", "text");
            inputBtn.setAttribute("type", "submit");
            inputBtn.setAttribute("value", "submit");

            li = pId.parentNode;
            console.log(li);
            li.appendChild(div);
            div.appendChild(form);
            form.appendChild(inputText);
            form.appendChild(inputBtn);
            form.appendChild(p);

            p.innerHTML = '<< result >>';
            p.style.marginBottom = '20px';
            p.addEventListener('click', function() {console.log('hello')});

            inputBtn.addEventListener('click', function() {
                li.style.background = 'yellow';
                setTimeout(changeColor, 1000);
                function changeColor() {li.style.background = 'white'}
            });
        }
    }

}