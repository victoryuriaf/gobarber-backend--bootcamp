interface IMailConfig {
	driver: 'ethereal' | 'ses';

	defaults: {
		from: {
			email: string;
			name: string;
		};
	};
}

export default {
	driver: process.env.MAIL_DRIVER || 'ethereal',

	defaults: {
		from: {
			email: 'equipe@gobarber.com.br', // email configurado no amazonSES
			name: 'Equipe do GoBarber',
		},
	},
} as IMailConfig;