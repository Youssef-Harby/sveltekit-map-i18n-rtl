import type { BaseTranslation } from '../i18n-types';

const en = {
	title: 'Load Reduction Map - Egypt {year:number}',
	welcome: 'Welcome to The Map {year:number}',
	spectators: '{0} live spectator{{s}}',
	summit: {
		schedule: '{0:Date|simpleDate}'
	},
	log: `This log was called from '{fileName:string}'`
} satisfies BaseTranslation;

export default en;
