**Combat Reports**

In VB6, understanding the combat events can be difficult given the sheer amount of information. Therefore, C# Aurora uses a condensed system where you no longer see each individual weapon firing, or the damage from individual hits. Instead weapon fire and any resulting damage are shown in a summary format. The side being attacked will also receive some information about the firing ship, using the Alien Ship Name if available.

Here is the summary when a Japanese destroyer opens fire on a Martian Patrol Ship. The different in hull designation in the two reports is because Mars classes the Monoceros as a patrol ship, while Japanese Intelligence classes it as a destroyer.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/f6ef6dc7afe9e1ef1d1fa3f2b3fbd0b2dcc28d84_2_690x40.png)

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/11140a752d266641c11c2eb118c8608c8ea7a085_2_690x38.png)

Subsequent damage reports in the next two five-second increments as the Japanese ship continues firing with 10cm railguns. The 15cm railguns are recharging.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/3640233f9b49871476c1402e5879b632516ff190_2_690x30.png)

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/9cb0037524e17dd064a3eecc9586ea48b9a29936_2_690x30.png)

The ship is finally destroyed by the next volley.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/b79d2f1e11c7a87918b16aa9934dd0dca4a5c821_2_690x30.png)

  

**Point Defence**

In C# Aurora, fire controls set to ‘Final Defensive Fire’ or ‘Final Defensive Fire (Self Only)’ will fire on hostile missiles, regardless of whether the fire control is set to ‘Open Fire’. Fire controls set to Area Mode or for AMMs will only fire defensively when that fire control is set to ‘Open Fire’.

When a missile reaches its target, a target ship will use its CIWS first. If that is insufficient, it will use any weapons linked to fire controls set to ‘Final Defensive Fire’ or ‘Final Defensive Fire (Self Only)’. If that is still insufficient, ships or the same race or an allied race with fire controls set to ‘Final Defensive Fire’ will be checked in increasing order of distance from the target ship.

A target population will use any ground units assigned to point defence to shoot at incoming missiles. If that is insufficient, the same process as for ships will take place, checking same race or allied ships within point defence range of the planet.

  

**Final Defensive Fire Changes**

In VB6 Aurora, a fire control can only fire at a single target in any increment. For C# Aurora, an exception is made for fire controls firing in automatic final defensive fire mode.

A fire control in this mode will continue to fire on incoming salvos as long as it has unfired weapons remaining. Each individual weapon or turret will only be able to engage a single salvo. This means point defence ships no longer need a large number of fire control systems, although there is still a design choice in terms of redundancy.

In VB6 Aurora, missiles moved in descending order of speed. I’ve updated that for C# Aurora to descending order of speed then by descending order of salvo size, so the largest salvos of the same type of missile will move first (and be engaged first by final defensive fire).

  

**Automated Weapon Assignment**

C# has a more intelligent auto-assignment for weapons and fire controls. You can set up a ship with a single click and then adjust as necessary. The code assumes that

*   Any missile fire control with a resolution of 1 is an anti-missile fire control
    
*   Any missile fire control with a resolution greater than 1 is a ‘normal’ missile fire control
    
*   Any beam fire control with a tracking speed at least 2x racial speed is a point defence fire control (some leeway here for older ships)
    
*   Other beam fire controls are for offensive weapons
    
*   Weapons within the given category (missile PD, missile offensive, beam PD, beam offensive) are split equally between fire controls of the same category
    
*   More powerful beam weapons are assigned first
    
*   ECCM is assigned as available with the priority order of offensive launcher, PD launcher, offensive beam, PD beam
    

The assignment code will take account of damage to the ship and adjust accordingly. In most cases, the above will be sufficient (and will be used for NPR designs). For more bespoke and unusual player ships, some tweaking may be necessary.

As a simple example, the escort cruiser below has six twin turrets and three fire controls. Clicking the button assigns two turrets to each fire control and sets the point defence to final fire.

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/0103b2b224b80964021d77baad09fbbe6f247b63_2_690x430.png)

image940×587 147 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/0103b2b224b80964021d77baad09fbbe6f247b63.png "image")

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/7e9e8d9445a1e030d9807cfc1f0f8c3bb505ee31_2_690x430.png)

image940×587 155 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/7e9e8d9445a1e030d9807cfc1f0f8c3bb505ee31.png "image")

This ship has a mixture of point defence and offensive lasers, plus fire controls for each. The auto-assign determines which weapons should be assigned to which fire control. All beam fire control are set as final fire so the ship will use all available weapons to defend against missile attack.

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/4f9b673deccd4cd748f22e1ac5c4ff80863d9be3.jpeg)

image495×459 73.4 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/4f9b673deccd4cd748f22e1ac5c4ff80863d9be3.jpeg "image")

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/56d69c20f4545ac51c2d4442c89d4b1724fb6232.jpeg)

image481×486 91.1 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/56d69c20f4545ac51c2d4442c89d4b1724fb6232.jpeg "image")

This ship has a mixture of missiles and offensive lasers. Note that missiles are automatically assigned to launchers.

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/db824cab9543961c55ccd4eb15e3e5859bbceeb0.jpeg)

image494×420 91.2 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/db824cab9543961c55ccd4eb15e3e5859bbceeb0.jpeg "image")

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/0ef4f1c69788b922e5a0708676d20aa4b45c95fb.jpeg)

image711×492 125 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/0ef4f1c69788b922e5a0708676d20aa4b45c95fb.jpeg "image")

This ship has a point defence turret and multiple types of offensive beam weapons, plus an ECCM system.

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/dd0ff18222df8da0155d9360aab50b6203274938.png)

image359×430 87.4 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/dd0ff18222df8da0155d9360aab50b6203274938.png "image")

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/a52a44ae1e6ac37809aaa7beac0142e8468ecce5.jpeg)

image478×483 74.3 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/a52a44ae1e6ac37809aaa7beac0142e8468ecce5.jpeg "image")

An extreme example!

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/116561bafb129e3396c0fbc9bd28c5a80ee755c4_2_173x499.jpeg)

image430×1238 184 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/116561bafb129e3396c0fbc9bd28c5a80ee755c4.jpeg "image")

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/800042eccda67ad2df8c18573291dd11e0ca5c98_2_217x500.jpeg)

image534×1225 228 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/800042eccda67ad2df8c18573291dd11e0ca5c98.jpeg "image")

  

**Fire Delay**

The Fire Delay mechanic for inexperienced ships has changed for C#. The delay is about half that in VB6 and is on a bell curve. I decided to reduce the delay because it was never a major issue for long-range missile combat but it could be a very long time in energy range combat. The new mechanic reduces the delay overall and makes the maximum delay far less likely. Note that this is not the same as a jump delay, which remains the same.

A fire delay happens when a ship with less than 100% Fleet Training either opens fire or changes target. The formula is as follows:

Round ((1 - (Fleet Training Points / 500)) \* (1 - Reaction Bonus) \* Random(10) \* Random(10) \* 0.5)

For example, a ship with 20% fleet training (100 points) and a 10% reaction bonus would be: Round (0.8 \* 0.9 \* Random(10) \* Random(10) \* 0.5), which is anything from no delay to 36 seconds, with the likely outcomes in the middle of that range. 15-20 seconds for a relatively inexperienced ship is long enough to disrupt coordination in a close-range battle, but not so long it is crippling or difficult to accept in terms of reality. A ship with 100% fleet training will suffer no delay and ships with high percentages are more likely to have no delay.

  

**Interrupts for Active Weapons**

In VB6, the game interrupts if you have weapons set to fire and no valid targets. It also interrupts when recharging is complete for weapons set to fire, even if nothing is in range.

For C#, the game checks to see if the target exists and is in range for each individual fire control. If not, there is no interrupt. Instead, you get a single event message per ship stating that ship is trying to fire on a target that is out of range or doesn’t exist but the increment otherwise happens normally. This means you can set all your weapons up and assign targets while well out of range. Increments will proceed normally until you are within range, at which point the weapons will start firing.

Once in range, the recharge interrupts will happen (so if your weapons have a 40 second cycle time you can just hit 2 minutes and time will advance 40 seconds).

  

**Point Defence Fire Control**

VB6 has a restriction that each fire control can only engage a single target during point blank fire. I’ve removed that restriction for C#. Each weapon can still only engage a single salvo.

In VB6, missiles moved in descending order of speed. In C# that has changed to descending order of speed then by descending order of salvo size, so the largest salvos of the same type of missile will move first. Consequently, your point defence will engage the largest salvos first.
