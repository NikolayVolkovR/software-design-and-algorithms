import { Item } from "./Item";

export interface WeaponProps {
    name: string;
    baseDamage: number;
    baseDurability: number;
    value: number;
    weight: number;
}

export abstract class Weapon extends Item {
    public MODIFIER_CHANGE_RATE = 0.005;
    private baseDamage: number;
    private baseDurability: number;
    private damageModifier: number;
    private durabilityModifier: number;

    protected constructor({
        value,
        name,
        weight,
        baseDamage,
        baseDurability,
    }: WeaponProps) {
        super({ value, name, weight });
        this.baseDamage = baseDamage;
        this.damageModifier = 0.05;
        this.baseDurability = baseDurability;
        this.durabilityModifier = 0.05;
    }

    getDamage() {
        return (this.baseDamage + this.damageModifier).toFixed(2);
    }

    getDurability() {
        return ((this.baseDurability + this.durabilityModifier) * 100).toFixed(
            2
        );
    }

    toString(): string {
        return `${this.getName()} − Value: ${this.getValue()}, Weight : ${this.getWeight()} , Damage : ${this.getDamage()} , Durability : ${this.getDurability()}%.`;
    }

    use() {
        const text = `You use the ${this.getName()}, dealing ${this.getDamage()} points of damage.`;
        this.baseDurability -= this.MODIFIER_CHANGE_RATE;
        const isBroken = this.baseDurability <= 0;
        return `${text} ${
            isBroken ? `The ${this.getName()} breaks.` : ""
        }`.trim();
    }

    polish() {
        switch (this.getName()) {
            case "sword": {
                const baseDamageQuarter = +this.baseDamage / 4;
                this.baseDamage +=
                    this.MODIFIER_CHANGE_RATE < baseDamageQuarter
                        ? this.MODIFIER_CHANGE_RATE
                        : baseDamageQuarter;
            }
            case "bow": {
                const durabilityOnePercent =
                this.baseDurability += this.MODIFIER_CHANGE_RATE > 0.01 ? 0.01 : this.MODIFIER_CHANGE_RATE;
            }
        }
    }
}
