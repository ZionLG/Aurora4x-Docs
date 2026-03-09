**Boarding Combat**

Boarding combat in C# Aurora is similar in principle to VB6 Aurora with some adjustments for the new ground combat mechanics. The boarding attempt process is as follows:

1.  Only a ship with a boarding-equipped troop transport bay can be ordered to make a boarding attempt
    
2.  Only formations that consist entirely of infantry can take part in a boarding attempt
    
3.  Boarding attempts cannot be made against ships that are faster than the ship making the boarding attempt
    
4.  A fleet given the ‘Attempt Boarding Action’ (for a specified formation) or ‘Attempt Boarding Action All Formations’ will attempt to end its movement in the same location as the target ship. If that happens, a boarding attempt will be made.
    
5.  The percentage chance of each individual unit (soldier) conducting a successful boarding attempt is equal to 10% x (Boarding Ship Speed / Target Ship Speed). So if the boarding ship is 10x faster than the target ship, success is automatic.
    
6.  Any unit with a ‘Boarding Combat’ capability has double the normal chance of success. In this case, if the boarding ship is 5x faster than the target ship, success is automatic.
    
7.  Any units that do not make the successful attempt are killed. If an HQ unit is lost, there is a chance the formation commander is killed based on (1/Number of HQ units), which is an automatic kill result if only one HQ exists
    

Once on the target ships, the surviving attackers will move inside if there is a hole in the armour. If there is no hole, the boarders will use a breaching charge to destroy one armour at the weakest point every thirty seconds until they gain access.

Once inside the target ship, a boarding combat round is conducted every sixty seconds. This is very similar in principle to ground combat, albeit without support artillery, aircraft, etc. and with no concept of front-live vs rear. There is no ‘fortification’ in the ground combat sense, but the defenders are given a fortification level of 2 to simulate the advantages of defence within the ship. Also, because this is a confined space and there are likely to be fragments of formations, each individual unit on each side randomly selects a target formation element on the opposing side, using a weighted random selection based on size, and conducts an attack using the normal ground combat procedure:

The commanders of each formation provide a bonus to hit with their Ground Combat Offence bonus and provide a bonus to fortification (base fortification is 1 on attack and 2 on defence) with their Ground Combat Defence bonus. Any units on either side with ‘Boarding Combat’ capability have double the normal chance to hit.

For the purposes of boarding combat, the crew is a temporary formation with a single element composed of ‘crew’ ground units and a morale equal to the current crew morale. A crew member is equipped with light personal weapons and has ‘armour’ equal to half the lowest racial armour for infantry. Casualties in this temporary formation translate into crew losses and morale losses translate into the same impact on crew morale. Given that the crew is not well equipped for a fight of this type, it would advisable for ships to carry a small marine detachment if there is a chance they may face boarding attacks. If the target ship is a carrier, formations based on parasite ships will fight to protect the mothership.

If all the defending units are killed, the ship is transferred to the new owners (I may also add some surrender rules so you don’t need to kill all the crew). To simulate the difficulties in making use of a captured ship, especially as the defenders have no doubt locked out the controls and sabotaged whatever they can, the captured ship is treated as if it just abandoned an overhaul and is given an overhaul factor of 0.01.

If a ship is captured, the associated Alien Class is updated with complete information.

Collateral damage can occur during boarding combat using the same rules as for ground-based collateral damage. All the damage is applied to the ship as a single internal hit. Because of the relatively small-scale of shipboard combat, any fractional points of collateral damage have a percentage chance of becoming full points equal to (fractional damage / 1). Damage to transport bays due to collateral damage will not kill defending troops (as they are fighting on the ship and not located in the bay).

If a ship is struck by external damage during boarding combat and one or more components are destroyed, there may be casualties among the boarding combatants on both sides. The damage to each engaged element is equal to:  
(destroyed component size / ship size) \* (0.25 + (Random(10) \* 0.05))

The random roll is made for each element separately.
