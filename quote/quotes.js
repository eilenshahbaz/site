/*
 * 
 */


$(document).ready(function() {
	function shuffle(array) {
		// Credit to Fisher–Yates shuffle
	 	var m = array.length, t, i;

		// While there remain elements to shuffle
	 	while (m) {

		// Pick a remaining element
	    i = Math.floor(Math.random() * m--);

	    // And swap it with the current element.
	    t = array[m];
	    array[m] = array[i];
	    array[i] = t;
	}

	  return array;
	}

	function change(qCntr, cCntr, qLst, cLst) {		
		var quote = quotes[qCntr][0]
		var source = quotes[qCntr][1]
		var color = colors[cCntr];
		$(".clr").css("background-color", color);
		$("#words").html(quote);
		$("#cite").html("- " + source);
		var tweet = "https://twitter.com/share?text=" + "\"" + encodeURIComponent(quote) + "\" "
			 + encodeURIComponent(source) + "&hashtags=quotes,dank";
		$("#tweet").attr("href", tweet);
	}

	quotes = [
			["We the best", "DJ Khaled"], 
			["If you're going through hell, keep going.", "Winston Churchill"], 
			["Genius is 1% inspiration, 99% perspiration.", "Thomas Edison"], 
			["The secret of getting ahead is getting started.", "Mark Twain"], 
			["Nothing in the world can take the place of persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. Persistence and determination alone are omnipotent. The slogan \'Press On!\' has solved and always will solve the problems of the human race.", "Calvin Coolidge"], 
			["I shall pass this way but once; any good that I can do or any kindness I can show to any human being; let me do it now. Let me not deter or neglect it, for I shall not pass this way again.", "Anonymous"], 
			["Satisfaction lies in the effort, not in the attainment, full effort is full victory.", "Gandhi"], 
			["I will do what you won\'t today so I can do what you can\'t tomorrow.", "Anonymous"], 
			["It\s not the will to win, but the will to prepare to win that makes the difference.", "Paul Bryant"], 
			["Discipline is doing what you know needs to be done, even though you don\'t want to.", "Anonymous"],  
			["Whenever you find yourself doubting how far you can go, just remember how far you have come. Remember everything you have faced, all the battles you have won, and all the fears you have overcome.", "Anonymous"], 
			["Find the hardest working person you know. Then work harder.", "Anonymous"], 
			["I hated every minute of training, but I said, \'Don\'t quit. Suffer now and live the rest of your life as a champion.\'", "Muhammad Ali"], 
			["I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.", "Leonardo da Vinci"], 
			["Do not love sleep or you will grow poor.", "Proverbs 20:13"], 
			["The world offers you comfort. But you were not made for comfort. You were made for greatness.", "Pope Benedict XVI"], 
			["Man cannot remake himself without suffering for he is both the marble and the sculptor.", "Alexis Carrel"], 
			["Ever tried. Ever failed. No matter. Try again. Fail again. Fail better", "Anonymous"],  
			["Do not complain about the snow on your neighbor\'s roof when your own doorstep is unclean.", "Confucius"], 
			["I will speak ill of no man and speak all the good I know of everybody.", "Benjamin Franklin"], 
			["Do the thing you fear and the death of fear is certain.", "Ralph Waldo Emerson"], 
			["You miss 100 percent of the shots you don\'t take.", "Wayne Gretzky"], 
			["The great aim of education is not knowledge but action.", "Herbert Spencer"], 
			["We are interested in others when they are interested in us.", "Publilius Syrus"], 
			["There is one quality that one must possess to win, and that is definiteness of purpose, the knowledge of what one wants and a burning desire to achieve it.", "Napoleon Hill"], 
			["Truly, \'thoughts are things,\' and powerful things at that, when they are mixed with definiteness of purpose, persistence, and a burning desire for their translation into riches or other material objects.", "Napoleon Hill"], 
			["Rule the day, or it will rule you", "Eilen Shahbaz"], 
			["Haters be sleeping on me like they got insomnia", "Young Eilen"],
			["Life contains but two tragedies. One is not to get your heart's desire; the other is to get it.", 
			"Socrates"]
			];

	colors = ["#20b2aa", "#d3d3d3", "#90ee90", "#add8e6", "#f08080",
			"#ffd700", "fafad2", "ffb6c1", "#ffa07a", "#87cefa", "#b0c4de", 
			"#ff00ff", "#800000", "#800080", "#ffa500", "#ff7f50", "#006400"];

	

	counter = 0;
	colorCntr = 0;
	quotes = shuffle(quotes);
	colors = shuffle(colors);

	function enforcer() {
		counter += 1;
		colorCntr += 1;
		console.log(quotes.length);
		if (counter >= quotes.length){
			quotes = shuffle(quotes);
			counter = 0;
		}
		if (colorCntr >= colors.length){
			colors = shuffle(colors);
			colorCntr = 0;
		}
		
		change(counter, colorCntr, quotes, colors);
	}

	change(counter, colorCntr, quotes, colors);
	$("#nquote").on("click", function(){
		enforcer();
	});
});