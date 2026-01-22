import Feeding from '@/public/assets/images/Food.jpg';
import Transport from '@/public/assets/images/Transport.jpg';
import Entertainment from '@/public/assets/images/Entertainment.jpg';
import Utilities from '@/public/assets/images/Utilities.jpg';
import Others from '@/public/assets/images/Others.jpg';
import type { StaticImageData } from 'next/image';

export type Category = "Food" | "Transportation" | "Entertainment" | "Utilities" | "Others";

export interface Transaction {
  id: number;
  date: string;
  itemBought: string;
  price: number;
  category: Category;
}

export interface TransactionState {
  transactions: Transaction[];
}

export interface DailySpendingFormProps {
  id: string;
  date: string;
  itemBought: string;
  price: string;
  category: string;
}

export interface State{
  transactions: TransactionState;
}


export const CategoryImageMap:Record <Category, StaticImageData> = {
  Food: Feeding,
  Transportation: Transport ,
  Entertainment: Entertainment,
  Utilities: Utilities,
  Others: Others,
}