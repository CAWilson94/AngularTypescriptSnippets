import { AnimalStrategy } from "./AnimalStrategy";

export class AnimalContext { 

    private strategy: AnimalStrategy;

    constructor(animalStrategy: AnimalStrategy) {
        this.strategy = animalStrategy;
    }

    public setStrategy(strategy: AnimalStrategy) {
        this.strategy = strategy;
    }

    public doSomeMagicThing(): string { 
        return this.strategy.displayName();
    }
}