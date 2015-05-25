export default function() {
	this.transition(
		this.fromRoute('drinks.index'),
		this.toRoute('drinks.drink'),

		this.use('explode', {
			matchBy: 'data-drink-id',
			use: ['fly-to', { duration: '700' }]
		}, {
			use: ['toLeft', { duration: '700' }]
		}),

		this.reverse('explode', {
			matchBy: 'data-drink-id',
			use: ['fly-to', { duration: '600' }]
		}, {
			use: ['toRight', { duration: '600' }]
		})
	);

}
