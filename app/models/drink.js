import DS from 'ember-data';

var drink = DS.Model.extend({
  name: DS.attr('string'),
  img_url: DS.attr('string'),
  description: DS.attr('string')
});

drink.reopenClass({
	FIXTURES: [
		{
			id: "apple-and-elderflower",
			name: "Apple & Elderflower",
			img_url: "apple_drink.png",
			description:
				'Love the great taste of apple but bored by the same traditional flavours? Then try Sam and Jo\'s Apple and Elderflower, the same great taste of apple with a refreshing elderflower twist!'
		},
		{
			id: "couldy-lemon",
			name: "Cloudy Lemon",
			img_url: "apple_drink.png"
		},
    {
      id: "orange-and-mango",
      name: "Orange & Mango",
      img_url: "apple_drink.png"
    },
    {
      id: "cranberry-and-lime",
      name: "Cranberry & Lime",
      img_url: "apple_drink.png"
    }
	]
});


export default drink;
