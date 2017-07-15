
var game = {

	// Variables

	yourCharacter: {},
	defender: {},
	characterSelected: false,
	defenderSelected: false,
	enemiesDefeated: 0,




	characters: [

		{
			name: "Harry Potter",
			attack: 8,
			attackMultiplier: 8,
			counterAttack: 8,
			hp: 120,
			hpId: "hpPotter",
			charPic: "assets/images/potter.jpg",
			charNum: 0
		},
		{
			name: "Draco Malfoy",
			attack: 10,
			attackMultiplier: 10,
			counterAttack: 10,
			hp: 100,
			hpId: "hpMalfoy",
			charPic: "assets/images/draco.jpg",
			charNum: 1
		},
		{
			name: "Hermione Granger",
			attack: 5,
			attackMultiplier: 5,
			counterAttack: 15,
			hp: 150,
			hpId: "hpGranger",
			charPic: "assets/images/granger.jpg",
			charNum: 2
		},
		{
			name: "Cedric Diggory",
			attack: 12,
			attackMultiplier: 12,
			counterAttack: 10,
			hp: 160,
			hpId: "hpDiggory",
			charPic: "assets/images/diggory.jpg",
			charNum: 3
		},
	],

	startGame: function(){

		for (var i = 0; i < game.characters.length; i++) {
			$('#selectCharacters').append("<span class='character' id='" + game.characters[i].charNum + "'>" + 
				"<h3>" + game.characters[i].name + "</h3>" + 
				"<img class='characterPic' src='" + game.characters[i].charPic + "' alt='char" + i + "pic'>" + 
				"<h3 id='" + game.characters[i].hpId + "'>" + game.characters[i].hp + "</h3></span>"
			);
		};
	}


	
};


game.startGame();

$('.character').on("click", function(event){
	if(game.characterSelected == false){
		var chosenCharId = $(this).attr("id");
		var chosenChar = $(this);
		chosenChar.addClass("attacker");
		$('.yourCharacter').append(chosenChar);
		game.yourCharacter = game.characters[chosenCharId];
		game.characterSelected = true;
		var enemies = $('#selectCharacters');
		$('.enemiesLeft').append(enemies);
	} else if(game.defenderSelected == false){

		var defenderId = $(this).attr("id");
		var defender = $(this);
		defender.addClass('defenderChar');
		$('.defender').append(defender);
		game.defender = game.characters[defenderId];
		game.defenderSelected = true;
		$('#btnAttack').removeClass("invisible");

	};


});

$('#btnAttack').on('click', function(){

	if(game.characterSelected && game.defenderSelected){
		// ATTACK -------------------------------------------------------------------
			game.defender.hp = game.defender.hp - game.yourCharacter.attack;
			$('#' + game.defender.hpId).html(game.defender.hp);
			game.yourCharacter.attack = game.yourCharacter.attack * 2;
			//Check if defender is defeated
			if(game.defender.hp <= 0){
				$('.defenderChar').remove();
				game.defenderSelected = false;
				alert("you defeated " + game.defender.name + "!!");
				game.enemiesDefeated += 1;
				if(game.enemiesDefeated == 3){
					alert("You are a grand duelist!!");
					$('#btnRestart').removeClass("invisible");
					$('#btnAttack').addClass("invisible");


				};
			};
	};

});























