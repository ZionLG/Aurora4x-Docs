**New Active Sensor Model**

A new active sensor model has been implemented for C# Aurora. In VB6 Aurora, there is an issue that active sensor ranges become so huge with large size-50 sensors, that the standard tactic is to create a ship with such a sensor so that it can watch the entire inner system, taking away some of the fog of war. In addition, such extreme-range sensors allow ultra-long range missile combat, giving the race that possesses such sensors a major advantage. The following change is intended to create a situation where:

a) Multiple scouts or pickets become a serious alternative to one huge sensor.  
b) Missile combat ranges are reduced  
c) Fog of war is increased, leading to more interesting exploration and combat.

The VB6 sensor model is based on the following formula, which increases range in direct relation to sensor strength:

Sensor Range = Racial Sensor Strength \* HS \* Racial EM Sensitivity \* SQRT(Resolution) \* 10,000 km

The C# model uses similar basics and leaves all the existing technology in place. However, the sensor strength now has to cover an area rather than a direct range, creating diminishing returns for larger sensors. In addition, the modifier for resolution has been adjusted from square root to the power of (1 / 1.5). Because of this formula, smaller, lower resolution sensors are now more effective than the VB6 equivalents (much more in some cases), making earlier detection of missiles and fighters possible for non-specialised ships. The new formula is:

Sensor Range = SQRT((Racial Sensor Strength \* HS \* Racial EM Sensitivity \* (Resolution ^ (1/1.5)) / PI) \* 1,000,000 km

The following screenshots are based on the Commonwealth in my current campaign, which has active sensor strength 21 and EM sensitivity 11.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/6d6548362b1cdc8db24d76f6657e1721497e67c4.png)

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/8e8599a529fb50393129a33231a56d1f6972302e.png)

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/8f475bad1b7edf9436a05952ef1e55fc98502377.png)

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/d3e29b15faf4c46a60a313e84c9a5162bf6d20b5.png)

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/313a6f88dd94a9f8187f27382603d7c0a8bc8e41.png)

  

**New Passive Sensor Model**

A new passive sensor model has been implemented for C# Aurora, using similar principles to the new active sensor model. In VB6 Aurora, small ship-based passive sensors are not particularly effective compared to active sensors in terms of detection, although their passive nature does allow a ship some sensor capability without giving away its position. Planet-based passive sensors (deep space tracking stations) are very effective as they can be stacked to cover the whole star system,

The C# Aurora passive sensor model substantially improves small passive sensors, particularly against small signatures, while dramatically reducing the benefits of creating large numbers of deep space tracking stations.

The VB6 sensor model is based on the following formula, which increases range in direct relation to sensor strength:  
Detection Range = Passive Sensor Strength \* Target Signature \* 1000 km. For example, a strength-10 thermal sensor would detect a signature-500 target at 5m km (10 \* 500 \* 1000).

The C# model uses all the existing technology and tech values. However, the sensor strength now has to cover an area rather than a direct range, creating diminishing returns for larger sensors.  
Detection Range = SQRT(Passive Sensor Strength \* Target Signature ) \* 250,000 km. The same example as above would result in the strength-10 thermal sensor detecting the signature-500 target at 17.7m km.

Because of the great improvement in the performance of small passive sensors, there will no longer be an inherent size-1 passive sensor on all ships. In addition, the smallest functional passive sensor on a missile will be 0.25 MSP.

The screenshot below demonstrates the difference between the two models.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/a2aeb475e6f35221ab3fe559183405ad1344a8f8.png)

  

**Ship Thermal Signature**

In VB6 Aurora, a ship always has its maximum thermal signature even when not moving. The fleet can be set to a lower speed if desired, which reduces the signature, but that isn’t directly related to movement. As it doesn’t seem realistic that a stationary ship and one moving at full speed should have the same thermal signature, C# Aurora will handle thermal signatures in the following way:

If a fleet has movement orders, each ship in that fleet has a thermal signature equal to: (current speed / max speed) \* max thermal signature (the same as VB6). This applies regardless of whether the order involves a change in position, so a freighter in transit and one loading cargo are both ‘moving’.

A ship in a fleet without orders has a baseline thermal output equal to 5% of its size in hull spaces (or 0.1% of its size in tons). For example, a 10,000 ton ship without orders would have a thermal signature of 10 (200 HS x 5%). There is no distinction for commercial shipping on the basis that some commercial functions (mining, terraforming, harvesters) would generate heat and even freighters would have less thermal shielding than similar size warships. The minimum thermal signature for a ship with movement orders is also the base thermal output.

This has significant implications for scouting, as passive sensors will now only detect large stationary alien warships from a relatively short range.

  

**Ground Forces Detection**

In C#, as in VB6, ground forces are treated as size-1 for the purposes of detection, so are best detected with resolution-1 sensors.

For C#, the ground forces signature is equal to the total signature of all ground formation elements on a planet, divided by 100. The signature of each element is equal to (unit size \* unit number) / (fortification level \* dominant terrain fortification modifier).

In other words, well-fortified ground forces will have a smaller signature than those out in the open, so you won’t always know if you face a small force, or a well-fortified larger force.

  

**Surface to Orbit Ground Forces Contact**

STO elements that have not fired are detected with other ground forces as a ground forces contact.

When an STO element fires, any races that are currently detecting it as part of normal ground forces will flag it as an STO element. Thereafter, those races will detect that element as an ‘STO Ground Forces’ contact, which is a new contact type. All known STO elements on a planet are grouped as a single STO Ground Forces contact. Players can choose to target either the known STO elements or the normal ground forces (which may contain undetected STO elements).

An STO element may be known to some races and detected accordingly, while still being part of the normal ground forces contact for other races.

The active sensors of STO elements are detected by EM sensors in the same way as any other active sensor. However, this is not sufficient to flag the STO element.

  

**Missile Launch Detection**

In VB6, missiles are only detected after their first movement sub-pulse. This is due to the sequence of play of Movement → Detection → Combat. Consequently, a missile ship close enough to an opponent for its missile to cover the distance in less than five seconds can avoid point defence entirely, because there is no opportunity to detect the missile before impact.

In C#, an additional detection phase takes place after missile launch, which is restricted to the detection of newly launched missiles at the point of launch. This means that no matter how close the missile ship is to its opponent, the missile will be detected if the opponent has sensors capable of detecting it. The missile will still be in the same location as the launching ship when this detection phase takes place.

  

**Alien Weapon Detection**

As part of the tactical intelligence in C# Aurora, it will be possible to determine the weapons of alien ships under the right circumstances.

When a ship fires beam weapons, either in the combat phase or in the missile movement phase, each race which has a current active sensor contact for the firing ship will detect the type of weapon (Railgun, Laser, etc), the power of the weapon, the number of weapons fired and the weapon range (based on target location).

When a ship launches missiles, each race which can detect the new salvo at the point of launch will detect the number and size of the launchers on the firing ship (only those launchers that fire missiles will be detected).

If a ship fires or launches multiple times, the interval between firing for each weapon type will be tracked (this won’t be perfect because the alien ship may be firing different weapons at different times but will provide a reasonable idea). All the weapon intelligence gathered will be displayed for the Alien Class.

  

**Detecting Engine Type**

Thermal sensors are able to detect whether a ship moving faster than 1 km/s has military or commercial engines. This information is added to the intelligence for the associated alien class.

The thermal contact strength for a ship will be preceded by “M” or “C” if the engine type for the parent class is known.

NPRs will treat ships without detected military engines that have not demonstrated any weapon capability as 10% of the normal size when assessing their threat level

  

**Transponders**

In C# Aurora, transponders have three modes; Off, Friendly and All. A transponder set to Friendly will only be detected by Friendly or Allied Races. A transponder set to All will be visible to all races, even hostile ones.

Civilian Shipping will have transponders set to Friendly.
