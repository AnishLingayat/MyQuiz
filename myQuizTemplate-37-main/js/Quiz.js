class Quiz {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCount = await database.ref('contestantCount').once("value");
        if(contestantCount.exists()){
          contestantCount = contestantCount.val();
          contestant.getCount();
        }
        question = new Question()
        question.display();
      }
    }
  
    play(){
      question.hide();
      background("yellow");
        textSize(30);
        text("Result of the QUIZ",340,50);
        text("-------------------", 320 , 65);
      contestant.getPlayerInfo();
      
      if(allcontestants !== undefined){
        debugger;
        
        var display_Answers = 230;
        fill("blue");
        textSize(20);
        text("Note:Contestants who answered correct are highlighted in green color",130,230);
          for(var plr in allcontestants){
            debugger;
            var correctAns = "2";
            if(correctAns===allContestants[plr].answer) 
                fill("green");
            else 
            fill("red");
            display_Answers+=30;
            textSize(20);
            text(allContestants[plr].name+" : "+ allContestants[plr].answer, 250,display_Answers);
        }
  
      }
  
  }
}