let data = [
                {
                "category": "Reaction",
                "score": 80,
                "icon": "./assets/images/icon-reaction.svg"
                },
                {
                "category": "Memory",
                "score": 92,
                "icon": "./assets/images/icon-memory.svg"
                },
                {
                "category": "Verbal",
                "score": 61,
                "icon": "./assets/images/icon-verbal.svg"
                },
                {
                "category": "Visual",
                "score": 72,
                "icon": "./assets/images/icon-visual.svg"
                }
            ];

for (i = 0; i < data.length; ++i){

    let scoreInfo = document.querySelector(".scores");

    let icon = data[i].icon;
    let category = data[i].category;
    let score = data[i].score;

    let element = "";
    
    element = 
        `
        <div id="${category}" class ="score-container">
            <div>
                <img src="${icon}" alt="">
                <p id="category"> ${category} </p>
            </div>
            <p class="score"> ${score}&nbsp; <span> / 100 </span></p>
        </div>  
        `

    scoreInfo.innerHTML += element;
};


let overallScore = document.querySelector("#overallScore");
let newScore = 0;
   
data.forEach( element => {
    newScore += element.score;
});
score = newScore/4;
overallScore.innerHTML = Math.round(score);
