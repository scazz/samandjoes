import DS from 'ember-data';

var drink = DS.Model.extend({
  name: DS.attr('string'),
  img_url: DS.attr('string'),
  description: DS.attr('string'),
  subtitle: DS.attr('string')
});

drink.reopenClass({
	FIXTURES: [
		{
			id: "apple-and-elderflower",
			name: "APPLE & ELDERFLOWER",
			img_url: "/images/AppleElderflower.png",
			description:
				'Influenced by English summer flavours, a very light and refreshing drink. '

		},
    {
      id: "orange-and-mango",
      name: "ORANGE & MANGO",
      img_url: "/images/OrangeMango.png",
      description: 'An exotic take on a Sam and Jo\'sq childhood favourite.'
    },
		{
			id: "couldy-lemon",
			name: "CLOUDY LEMON",
      subtitle: "with a hint of Ginger",
			img_url: "/images/CloudyLemon.png",
      description: 'A traditional classic with some additional spice.'
		},
    {
      id: "cranberry-and-lime",
      name: "CRANBERRY & LIME",
      img_url: "/images/CranberryLime.png",
      description: 'Berry sweetness with a distinctive after bite!'
    }
	]
});


export default drink;
