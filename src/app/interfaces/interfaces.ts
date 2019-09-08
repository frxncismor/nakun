// Interfaz para menu
export interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

// Interfaz para chat

export interface Contacto {
  id: string;
  name: string;
  img: string;
  state: string;
  lastMessage: string;
  time: string;
  color?: string;
}

// Interfaz para notificaciones

export interface Notificaciones {
  name: string;
  subtitle: string;
  description: string;
  state: string;
  img: string;
  color?: string;
}

// Interfaz para destacado

export interface RespuestaTopHeadlines {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: Source;
  author?: string;
  title: string;
  description?: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content?: string;
}

export interface Source {
  id?: string;
  name: string;
}

// Interfaz para profesionales

export interface RespuestaProfesionales {
  status: string;
  totalResults: number;
  profesionals: Profesional[];
}

export interface Profesional {
  name: string;
  img: string;
  profesion: string;
  puntuacion: number;
  address: Address;
  description: string;
}

export interface Address {
  direccion: string;
  numero: string;
  colonia: string;
  ciudad: string;
  codigoPostal: number;
  estado: string;
  pais: string;
}
