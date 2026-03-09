**Fighter Pods and Fighter Pod Bays**

In C# Aurora, fighter-sized ships can be equipped with a new component, the Fighter Pod Bay, which is similar in function to a small Box Launcher, except it will only hold Fighter Pods (see below).

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/85183b303e5cbad6abaa6619081affcd3fa07d23.png)

Fighter Pods are created on the Missile Design window. The various pod options, such as bombardment pod, autocannon pod and air-to air pod, will appear when the requisite technology has been researched. When one of those options is selected, the warhead strength field is replaced by a pod size field. The player can choose the pod size, with larger pods being more effective. The pod capabilities will be similar to the capabilities of equivalent-sized ground unit components, although the fighter pods have more flexibility in design. For example, a bombardment pod will have three shots, armour penetration equal to Racial Weapon Modifier \* ((Tons / 20) ^ 0.6) and damage equal to Racial Weapon Modifier \* ((Tons / 20) ^ 1.6).

Fighter pods are ordnance, in exactly the same way as missiles. They are built by ordnance factories, transported in magazines and loaded onto fighters. Unlike missiles, they are not expended when fired and will function during ground combat phases.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/11bef24116b679e95ede8e2844b12220188a19c7.png)

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/44d6220bd59074f403f5a56773d8b0cbda2082ea.png)

A fighter can be designed with fighter pod bays. Different pods can be assigned to those bays while the fighter is in a hangar, providing flexibility of loadout. The same fighter could be used for bombardment or autocannon pods, as long as the pods bays are large enough and the parent carrier has both types of pods available. The pods can be assigned to the fighter using the normal ordnance loadout. The pods require a missile fire control to operate, although this can be minimal size (0.1 HS) as there are no range or resolution restrictions.

Pods can also be assigned to normal box launchers, so a fighter designed for space combat can also be used for ground combat in an emergency. However, box launchers are three times larger than the missiles (or pods) they are designed to fire, while fighter pod bays are equivalent in size to the pods, making fighter pod bays are a much more efficient way to mount the pods. Because of this efficiency, the minimal-size fire control and no requirement for active sensors in ground combat missions, dedicated ground support fighters can be much smaller than their space combat equivalents. It is also possible to have hybrid designs mounting both pods and box launchers. Due to the requirement for smaller engines for dedicated ground support aircraft, ship engines can now be designed from 0.1 HS in size.

  

**Ground Support Fighters**

Fighters equipped with fighter pods can provide support to ground unit formations during ground combat.

To be eligible, a fleet with fighters is given an order to “Provide Ground Support” with a friendly population as the destination. This order functions in a similar way to a ‘Follow’ order, with the order remaining in place until removed by the player. On the Ground Combat Window, eligible fleets appear in their own section for each population. These fleets can be dragged and dropped on to formations in the same way as superior and subordinate formations. Fleets with this order that are at their target population cannot be targeted in normal naval combat or by STO weapons.

In combat, the ground support fighters attack at the same time as bombardment elements and have the same target selection options as heavy bombardment.

Ground support fighters have the same chance to hit as ground units, although they are not affected by any negative environmental modifiers (such as high gravity or extreme temperatures). Each fighter’s to hit chance is affected by its own crew grade and morale.

Each Forward Fire Direction component in a formation allows support from up to six ground support fighters. If more fighters are assigned to a formation than can be supported, the chance to hit is modified by (Number of FFD \* 6) / Number of Fighters.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/cc4408375541db8d95d8a096bb0fd17da9c6c497.png)

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/78950367b45c949ca87ad463dcbd5bd0f03bc573.jpeg)

  

**Ground-based AA Fire**

AA units take part in ground combat normally, using their ground combat values. If an AA unit takes part in both ground-ground and ground-air combat, it will draw supply twice.

Once all direct combat, bombardment support and ground support fire has been resolved, but before damage is allocated, all AA units will be checked to see if they can fire on hostile aircraft, using the following rules:

1.  All AA units in a formation that was directly attacked by aircraft will each select a random aircraft from those that attacked that formation.
2.  Medium or Heavy AA units in a formation that was not directly attacked by aircraft but is the direct parent of a formation that was attacked will each select a random aircraft from those that are attacking the subordinate formations.
3.  Heavy AA units that are not included in the two categories above will fire on a random hostile aircraft, including those on CAP that are not directly engaged in attacking ground units.

An Environment Modifier is calculated, taking into account gravity, pressure and temperature and whether the firing AA unit has capabilities in those environments. Each environment for which the element is not trained has a x2 modifier. There are no terrain modifiers.

The chance to hit is (10% x (Tracking Speed / Aircraft Speed) x (Morale / 100)) / Environment Modifier.

If a hit is scored, the damage vs the fighter is (Ground Damage Value / 20)^2 rounded down. For example, an AA unit with a ground damage value of 40 would have AA Damage of (40 / 20) ^ 2 = 4.

All AA damage is applied after all attacks have been resolved.

  

**Non-Support Fighter Missions**

In addition to the option to directly support ground forces, fighters can be assigned additional missions over the battlefield. To be eligible, a fleet composed only of fighters is given one of the following orders with a system body as the destination. A friendly population is not required. These orders function in a similar way to a ‘Follow’ order, with the order remaining in place until removed by the player. Fleets with these orders that are at their target system body cannot be targeted in normal naval combat or by STO weapons.

**Search & Destroy**

Search and Destroy involves sending fighters to a planet with enemy ground forces (with or without friendly forces present) to attack targets of opportunity. This is similar to a ground support mission with the following differences:

1.  The fighters do not need to be assigned to a friendly ground formation and do not require fire direction
    
2.  The fighters will select any hostile formation, regardless of field position
    
3.  The chance to hit is 33% of normal
    
4.  Hostile AA will fire as if this is a ground support mission directed against the selected formation
    

**Flak Suppression**

Flak Suppression involves sending fighters to a planet with enemy ground forces (with or without friendly forces present) to specifically attack hostile AA units. Because the fighters are seeking out nearby AA units that are engaging them, the chance to hit is higher than for Search & Destroy, but the target selection is more difficult (finding the AA). This is similar to a ground support mission with the following differences:

1.  The fighters do not need to be assigned to a friendly ground formation and do not require fire direction
    
2.  The fighters will select any hostile formation, regardless of field position
    
3.  The chance to hit is 50% of normal
    
4.  Only hostile AA elements will be attacked. If none are present in the selected formation, no air-to-ground attack will take place
    
5.  Hostile AA will fire as if this is a ground support mission directed against the selected formation, even if the fighters did not open fire
    

  

**Ground Support Bonus**

This is a new bonus in C# for naval officers commanding fighters on ground support, search & destroy and flak suppression missions. The to hit chance is modified by the bonus.

The bonus is also used for orbital bombardment support (explained in a future rules post), with the Tactical Officer contributing 100% of his bonus and the Ship Commander contributing 50% of his bonus.
