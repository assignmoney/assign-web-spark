import { writable } from "svelte/store";

export type NotificationType = "default" | "error";

export interface Notification {
  id: number;
  message: string;
  type: NotificationType;
}

function createNotificationStore() {
  const { subscribe, update } = writable<Notification[]>([]);
  let counter = 0;

  function notify(message: string, type: NotificationType = "default") {
    const id = ++counter;
    const notification: Notification = { id, message, type };

    update((all) => [...all, notification]);

    // Auto-remove after 3s
    setTimeout(() => {
      update((all) => all.filter((n) => n.id !== id));
    }, 3000);
  }

  return {
    subscribe,
    notify,
  };
}

export const notifications = createNotificationStore();
