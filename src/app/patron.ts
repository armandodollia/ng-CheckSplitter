import {Item} from './item';
import { v4 as uuid } from 'uuid';

export class Patron {
  id: uuid;
  name: string;
  items: Item[];
}
