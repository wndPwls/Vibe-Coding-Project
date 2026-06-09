import type { AppState } from '../types';

const KEY = 'qp-data';

export const defaultState: AppState = {
  tasks: [],
  goals: [],
  character: {
    name: '모험가',
    totalXp: 0,
    level: 1,
    achievements: [],
  },
  streak: {
    count: 0,
    lastDate: '',
    bestStreak: 0,
    milestones: [],
  },
  claudeApiKey: '',
  profile: {
    name: '모험가',
    email: '',
    bio: '',
    status: 'online',
  },
};

export function load(): AppState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw) as AppState;
    return {
      ...defaultState,
      ...parsed,
      goals: (parsed.goals ?? []).map((g) => ({
        ...g,
        completions: g.completions ?? [],
      })),
    };
  } catch {
    return defaultState;
  }
}

export function save(state: AppState): void {
  localStorage.setItem(KEY, JSON.stringify(state));
}

export function today(): string {
  return new Date().toISOString().split('T')[0];
}

export function yesterday(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split('T')[0];
}
