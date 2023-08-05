import type { BaseTranslation } from '../i18n-types';

const ar = {
	title: 'خارطة تخفيف الاحمال {year:number}',
	welcome: '{year:number} اهلا بيك في خريطة تخفيف الاحمال لمصر',
	spectators: '{0} مشاهد مباشر',
	summit: {
		schedule: '{0:Date|simpleDate}'
	},
	log: `تم استدعاء هذا السجل من '{fileName:string}'`
} satisfies BaseTranslation;

export default ar;
