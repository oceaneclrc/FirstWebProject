// function MyFunction(){
// 	alert("hey");
// 	console.log("j'apparait dans la console JS");
// 	document.getElementById("demo").innerHTML;
// }

var pony=[];

function displayPony(name) {
	console.log(name);
	for (var i=0; i<pony.length; i++){
		if (pony[i].name==name){
			let item=pony[i];
			document.getElementById("ponyName").innerHTML = name;
			document.getElementById("ponyDescription").innerHTML = item.description;
			$('#ponyImg').attr('src', '.' + item.img);
			break;

		}
	}
}


$(document).ready(function () {
    $.get("./data.json", function (data) {
    	pony=data;
        var container = $('#ponyList');
        data.forEach(function (item) {
            var age = $('<span></span>').addClass('badge').text(item.age);
            var img = '<img src="'+item.img+'" />' 
            var elem = $('<a onclick="displayPony(\'' + item.name + '\')"></a>').addClass('list-group-item').append( item.name);
            elem.appendTo(container);
        });
        var total = $('<p></p>').append('Total number of pony: ', data.length);
        container.after(total);
    });
});