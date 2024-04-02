interface Information {
	id: string | number;
	date: string;
	ph: string | number;
	temperature: string;
	conductivity: string;
	dissolved_oxygen: string;
	turbidity: string;
	cityId: string | number
}

interface Characteristics {
	id: number;
	ph: string | number;
	condutividade: string | number;
	sulfato: string | number;
	carbono_organico: string | number;
	trihalometanos: string | number;
	turbidez: string | number;
	potabilidade: number;
	data_criacao: string | Date;
	data_atualizacao: string | Date;
	data_atualizacao_formatada: string;
	data_criacao_formatada: string;
	potavel: string;
	sensor: number;
	media_ph: string;
	media_condutividade: string;
	media_sulfato: string;
	media_carbono_organico: string;
	media_trihalometanos: string;
	media_turbidez: string;
}

export { Information, Characteristics };
