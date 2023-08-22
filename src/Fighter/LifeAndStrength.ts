interface ILifeAndStrength {
  lifePoints:number,
  strength:number,
  receiveDamage(attackPoints:number):number,
}

export default ILifeAndStrength;