import { EntityManager } from "@mikro-orm/core";

export class BaseEntity {
  private entityManager: EntityManager;
  constructor(entityManager: EntityManager) {
    this.entityManager = entityManager;
  }

  insert(): Promise<void> {
    return this.entityManager.persistAndFlush(this);
  }
}
