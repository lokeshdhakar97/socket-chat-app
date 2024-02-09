import { ReactNode } from "react";

export interface ProviderProps {
  children: ReactNode;
}

export interface AuthContextType {
  signOut: () => Promise<any>;
  loading: boolean;
  user: any;
  signInWithGoogle: () => Promise<any>;
  setLoading: any;
}

export interface GiphyContextType {
  gifData: any;
  setSearchQuery: any;
  fetchSearchGifs: any;
  searchQuery: any;
  trending: any;
  loading: any;
}

export interface GifBoxProps {
  imgSrc: string;
  name: string;
  userName: string;
  iconSrc: string;
}
