interface Sensor {
	id: number;
	identificador: string;
	nome: string;
	descricao: string;
	localizacao: string;
	tipo: string;
	data_criacao: string | Date;
	data_atualizacao: string | Date;
	usuario_criacao: number;
	usuario_atualizacao: number;
}

export { Sensor };