export interface CartaLezioni {
  id: string;
  periodo: Giornaliera | Settimanale | Mensile;
  lezioni: Lezione[];
}

export interface Lezione {
  orarioInizio: string;
  materia: string;
  argomento: string;
  presenza: boolean;
}


export interface Giornaliera {
  data: string;
  giorno: string;
}

export interface Settimanale {
  inizioSettimana: string;
  fineSettimana: string;
}

export interface Mensile {
  inizioMese : string;
  fineMese : string;
}