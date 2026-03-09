**Damage Control**

Damage Control functions in a similar way to VB6 with a few exceptions.

1.  There is no longer any separation between the current damage control assignment and the queue. In C# there is just a damage control queue and the highest priority item will be worked on first.
    
2.  The ship damage control rating is equal to the total value of engineering, damage control and commercial damage control systems, boosted by five times the Engineering bonus of the Chief Engineer (if one is assigned). So a Chief Engineer with a 20% bonus would double the damage control rating
    
3.  If the ship being repaired is in a hangar, the damage control rating of the mothership will be added to the damage control rating of the ship and the mothership maintenance supplies will be used first (although they will not be used past the specified minimum level). While this allows the mothership DC rating to be potentially used on multiple ships simultaneously, I decided that was preferable to having repair priorities per ship. The micromanagement isn’t really worth the extra realism.
    
4.  If the top item in the damage control queue is too expensive to repair (due to lack of maintenance supplies), other items will be checked in order to see if they can be repaired instead.
    
5.  The percentage chance of repair is equal to ((Increment Length in Seconds / Repair Cost) \* Damage Control Rating) / 1000. For example, Geological Survey Sensors cost 100 BP so have a repair cost of 200 MSP. If a ship has a damage control rating of 5 and the increment is one hour, the repair chance for the sensor would be ((3600 / 200) \* 5) / 1000 = 9%
    
6.  All ships have the option to engage Automated Damage Control, in which case the ship will assign its own damage control queue based on the same repair priorities as NPRs
    

Below is the new damage control tab for the Ship section of the Naval Organization window. The Repair Chance on the rightmost column is the chance for the ship to repair the component in the time specified at the bottom of the screen in the Repair Chance Time text box. SM Repair All is only visible in SM mode and will repair everything, including armour. Auto Queue will queue everything using the automated damage control rules. Clicking the Automated Damage Control checkbox means the ship will automatically queue and repair damage (the queuing is done just prior to damage control in the sequence of play).

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/a6adf7c8cd1427e7a385fbad4aef2cd0776632bf.jpeg)
