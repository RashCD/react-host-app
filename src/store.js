import { observable } from "@legendapp/state";
import { configureObservablePersistence } from "@legendapp/state/persist";
import { ObservablePersistLocalStorage } from "@legendapp/state/persist-plugins/local-storage";
import { persistObservable } from "@legendapp/state/persist";

configureObservablePersistence({
  // Use Local Storage on web
  persistLocal: ObservablePersistLocalStorage,
});

export const obs = observable({
  counter: {
    count: 0,
    increaseCounter: () => obs.counter.count.set((v) => v + 1),
    decreaseCounter: () => obs.counter.count.set((v) => v - 1),
  },
});

export const persist = observable({
  forceError: false,
});

persistObservable(persist, { local: "store" });
