import { create } from "zustand";

export interface Member {
  id: string;
  name: string;
  race: string;
  skill: string;
  imageUrl?: string;
  age?: number;
  isEvil?: boolean;
}

interface FellowshipState {
  members: Member[];
  ringBearer: Member | null;
  addMember: (member: Member) => void;
  addRingBearer: (member: Member) => void;
  removeRingBearer: (id: string) => void;
  removeMember: (id: string) => void;
  clearFellowship: () => void;
}

export const useFellowshipStore = create<FellowshipState>((set) => ({
  members: [],
  ringBearer: null,
  // Adds a new member to the fellowship
  addMember: (member) =>
    set((state) => ({
      members: [...state.members, member],
    })),

  // Removes a member from the fellowship by ID
  removeMember: (id) =>
    set((state) => ({
      members: state.members.filter((member) => member.id !== id),
    })),
  // Adds a ring bearer to the fellowship
  addRingBearer: (member) =>
    set(() => ({
      ringBearer: member,
    })),
  // Removes the ring bearer from the fellowship
  removeRingBearer: () =>
    set(() => ({
      ringBearer: null,
    })),

  // Clears all members from the fellowship
  clearFellowship: () =>
    set(() => ({
      members: [],
    })),
}));
