let search_url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch='
let content_url = 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=';
let user_input;

function setup() {
	noCanvas();
	//user_input = select('#userinput');
	//user_input.changed(search_func);
	//search_func();
}

function on_click_func(){
	user_input = select('#userinput');
	let search_term = user_input.value();
	search_func(search_term);
}

function search_func(search_term){
	//let search_term = user_input.value();
	search_term = replace_white_space(search_term);
	let url = search_url + search_term;
	let data = loadJSON(url, 'jsonp');
	loadJSON(url, exact_search_func, 'jsonp');
	//console.log(data);
	//data = data.query;
	//console.log(data);
	//let specific_data = data[0][1];
	//url = content_url + specific_data;
}

function exact_search_func(data){
	console.log(data);
	let title = data.query.search[0];
	console.log(title);
	title = replace_white_space(title.title);
	//console.log(title);
	let url = content_url + title;
	loadJSON(url, content_func, 'jsonp');
}

function content_func(data){
	console.log(data);
	//let page = data.query.pages;
	//let page_id = Object.keys(data.query.pages)[0];
	//let url = content_url + 
	//loadJSON(url, gotContent, 'jsonp');
}

function replace_white_space(input_term){
	input_term = input_term.replace(/\s+/g, '_');
	return input_term;
}

function random_quote(){
	let choice = Math.floor(Math.random() *3);
	let quote;
	let author;
	
	if (choice == 1){
		quote = "\"You miss 100% of the shots you don't take.";
		author = "Wayne Gretzky\"";
		let sub_author = "Michael Scott";
		document.getElementById("sub_author").innerHTML = "-" + sub_author;
	}
	else if (choice == 2){
		quote = "\"I like bolwing because it is zen.  But zen is more fun when you win.\"";
		author = "Patrick Barry";
	}
	else{
		quote = "\"I am Groot.\"";
		author = "Groot";
		
	}
	document.getElementById("quote").innerHTML = quote;
	document.getElementById("author").innerHTML = "-" + author;
}































function draw() {
  // put drawing code here
}