export interface Todo {
  id: number;
  name: string;
  completed: boolean;
}

export type ActionType = {
  type: string;
  payload: {
    id: number;
    name: string;
  }; // ✅ Allows id and name, but both are optional
};
