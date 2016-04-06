(function(){
	self.Board = function(width, height)
	{
		this.width = width;
		this.height = height;
		this.jugando = false;
		this.game_over = false;
		this.barras = [];
		this.ball = null;
	}

	self.Board.prototype = {
		get elementos(){
			var elementos = this.barras;
			elementos.push(ball);
			return elementos;
		}
	}
})();

(function(){
	self.BoardView = function(canvas, board){
		this.canvas = canvas;
		this.canvas.width = board.width;
		this.canvas.height = board.height;
		this.board = board;
		this.ctx = canvas.getContext("2d");
	}
})();

window.addEventListener("load", ping);

function ping()
{
	var board = new Board(800, 400);
	var canvas = document.getElementById("canvas");
	var board_view = new BoardView(canvas, board);
}