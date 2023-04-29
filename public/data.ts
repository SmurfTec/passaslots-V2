import recent from './recent.json';
import top from './top.json';

type data = Array<{
  Username: string;
  Game: string;
  Amount: string;
}>;

export const recentWinners = recent as data;

export const topWinners = top as data;
