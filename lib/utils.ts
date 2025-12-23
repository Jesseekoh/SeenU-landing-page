import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const getRandomAvatars = (avatarCount: number) => {
  const avatars = new Set<string>();

  while (avatars.size < avatarCount) {
    const id = Math.floor(Math.random() * 21);
    avatars.add(`/avatars/${id}.jpg`);
  }

  return Array.from(avatars);
};
