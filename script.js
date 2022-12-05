const Gameboard = (() => {
    board = Array(9) 
    let round = 0
    return {round, board}
  })();

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const box = document.querySelectorAll(".box");

  const boxes = Array.from(box);
  boxes.forEach((element) =>
    element.addEventListener("click", (e) => {

     const whichLetter = () => { 
        if (Gameboard.round % 2 == 0 && element.innerHTML == "") { 
            Gameboard.round += 1  
            player1.selections.push(e.target.id)
            return player1.letter 
        } else if (Gameboard.round % 1 == 0 && element.innerHTML == "") { 
            Gameboard.round += 1  
            player2.selections.push(e.target.id)
            return player2.letter
        } else return element.innerHTML
        
    }
     element.innerHTML = whichLetter()
     console.log(Gameboard.round)
     console.log(player1.selections)
     console.log(player2.selections)
     console.log(player1.didPlayerWin())

    }
    )
  );



const player = (name,letter,selections) => { 
    let playerName = name 
    let playerLetter = letter 
    let playerSelections = Array.from(selections)
    // let didPlayerWin = (element) => { 
    //    element 
    // }

    return {name,letter,selections,didPlayerWin}
     
}

const player1 = player("duke","X",[])
const player2 = player("duke2","O",[])





 



  
  