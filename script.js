const Gameboard = (() => {
    return { board: Array(9) };
  })();
  
  const box = document.querySelectorAll(".box");
  const boxes = Array.from(box);
  boxes.forEach((element) =>
    element.addEventListener("click", (e) => {
      Gameboard.board[e.target.id] = "X";
      console.log(e.target.id);
      console.log(Gameboard.board);
      for (let i = 0; i < Gameboard.board.length; i++) {
        box[i].innerHTML = Gameboard.board[i];
      }
    })
  );
  