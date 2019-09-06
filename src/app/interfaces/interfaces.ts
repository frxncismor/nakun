export interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

export interface Contacto {
  name: string;
  img: string;
  state: string;
  lastMessage: string;
  time: string;
  color?: string;
}

export interface Notificaciones {
  name: string;
  subtitle: string;
  description: string;
  state: string;
  img: string;
  color?: string;
}
