module.exports  = {
	not_specified: function(name) {
		throw Error(`Not Specified ${name} Please read the docs!`)
	},
	undefined: function(name) {
		throw Error(`Undefined ${name} Please read the docs!`)
	},
	invalid: function(name) {
		throw Error(`Invalid ${name} Please read the docs!`)
	},
	empty: function(name) {
		throw Error(`${name} Cannot be emoty! Please read the docs!`)
	},
	incorrect_option: function(name) {
		throw Error(`${name} Was an incorrect option Please read the docs!`)
	}
}