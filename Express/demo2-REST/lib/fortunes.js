var fortunes = [
    'cccsfsf',
    'sdsdsd',
    'syf'
];

exports.getFortune=function(){
	var id=Math.floor(Math.random()*fortunes.length);
	return fortunes[id]
}