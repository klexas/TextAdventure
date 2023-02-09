export class Quest {
    id: number;
    name: string;
    description: string;
    requiredLevel: number;
    reward: number;
    rewardType: string;
    completed: boolean;
    steps : QuestStep[];
    preRequisiteQuestIds: [];

    constructor(id: number, name: string, description: string, requiredLevel: number, reward: number, rewardType: string, completed: boolean, steps: QuestStep[], preRequisiteQuestIds: []) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.requiredLevel = requiredLevel;
        this.reward = reward;
        this.rewardType = rewardType;
        this.completed = completed;
        this.steps = steps;
        this.preRequisiteQuestIds = preRequisiteQuestIds;
    }
}

export class QuestStep {
    id: number;
    name: string;
    description: string;
    completed: boolean;
    reward: number;

    constructor(id: number, name: string, description: string, completed: boolean, reward: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.reward = reward;
    }
}

export class QuestList {
    quests: Quest[];
    constructor(quests: Quest[]) {
        this.quests = quests;
    }
}