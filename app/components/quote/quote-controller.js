function QuoteController() {

	var quoteService = new QuoteService();

	/*<div class="card">
	  <div class="card-header">
		Quote
	  </div>
	  <div class="card-body">
		<blockquote class="blockquote mb-0">
		  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
		  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
		</blockquote>
	  </div>
	</div>*/

	function drawQuote(quote) {
		var template = ""
		template += `
	<div class="card">
	<div class="card-body text-center">
	<h3>${quote.quote}</h3>
	<button type="button" class="btn btn-outling-light btn-lg btn-block todo-font glow-quote"><h5>-${quote.author}</h5></button>
	</div>
	</div>
	`
		document.getElementById('quote').innerHTML = template
	}

	quoteService.getQuote(drawQuote)

	quoteService.getQuote(function (quote) {
		console.log('What is the quote', quote)
	})
}