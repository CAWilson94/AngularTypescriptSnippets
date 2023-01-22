import { AnimalComponent } from "../animal.component";

export class GroupComponentContext { 
    private strategy: AnimalComponent;

    constructor(animalComonentStrategy: AnimalComponent) {
        this.strategy = animalComonentStrategy;
    }

    public setStrategy(strategy: AnimalComponent){ 
        this.strategy = strategy;
    }

    public getService(): string { 
        return "the service would be: " + this.strategy.name;
    }
}

 