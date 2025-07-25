type ChatStateClass<K extends string, V> = {
  state: Record<K, V>;
  setState: (key: K, state: V) => void;
  getByKey: (key: K) => V;
};

type UserPresence = {
  isOnline: boolean;
  lastSeen: Date;
};

class UserPresenceState implements ChatStateClass<string, UserPresence> {
  state: Record<string, UserPresence> = {};

  setState(key: string, state: UserPresence) {
    this.state[key] = state;
  }

  getByKey(key: string) {
    return this.state[key];
  }
}

export { UserPresenceState };
