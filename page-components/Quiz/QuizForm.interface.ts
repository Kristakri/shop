export interface QuizForm {
  type: 'Повседневные' | 'Беговые' | 'Дизайнерские' | 'Кеды' | 'Треккинговые' | 'Горные';
  size: "менее 36" | "36-38" | "39-41" | "42-44" | "45 и больше";
  correction: string;
  name: string;
  email: string;
}