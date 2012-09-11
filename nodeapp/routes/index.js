
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express', 
  	questions: [
		{ 
			description: 'Which actor was in *******',
			option1: 'John Doe1',
			option2: 'John Doe2',
			option3: 'John Doe3',
			option4: 'John Doe4',
		}
	]});
};