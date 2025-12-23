import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const getRandomAvatars = (avatarCount: number) => {
  const avatars = new Set<string>();

  while (avatars.size < avatarCount) {
    const gender = Math.random() > 0.5 ? 'men' : 'women';
    const id = Math.floor(Math.random() * 100);
    avatars.add(`https://randomuser.me/api/portraits/${gender}/${id}.jpg`);
  }

  return Array.from(avatars);
};
