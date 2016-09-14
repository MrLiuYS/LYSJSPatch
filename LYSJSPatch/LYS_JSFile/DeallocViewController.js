defineClass('DeallocViewController', {



	dealloc: function() {



		console.log("js - dealloc");

		self.lys__dealloc();



	},

	lys__dealloc: function() {

		console.log("js - lys__dealloc ");

	},

});