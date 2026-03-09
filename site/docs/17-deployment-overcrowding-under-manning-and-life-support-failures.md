**Deployment, Overcrowding, Under-manning and Life Support Failures**

In VB6 Aurora, this is a very complex area (see link below), particularly with regard to fighters and other parasite warships.

[http://aurora2.pentarch.org/index.php?topic=4835.msg49116#msg49116](https://web.archive.org/web/20250530232105/http:/aurora2.pentarch.org/index.php?PHPSESSID=1dc751aa1d7ffd56cabb8a8613d8df9c&topic=4835.msg49116#msg49116)

For C# I am trying to keep all the flavour of this area while simplifying the mechanics in general and adding a couple of additional mechanics that never made it into VB6. Each construction phase, every ship is checked according to the following rules:

**Deployment Clock**

1.  Any military ship, or one equipped with geological survey sensors, has a deployment clock, similar to their maintenance clock, which is displayed on the fleet window in months
    
2.  For ships outside hangar bays, the clock normally advances at a rate equal to the passage of time when the ship is anywhere except at a recreational location
    
3.  A recreational location is any ship with a recreational module or any population of at least 50,000 people.
    
4.  When any ship (including those in hangars) is at a recreational location, the deployment clock reduces at a rate equal to ten times the passage of time.
    
5.  If a parasite is in a hangar bay but the mothership is not at a recreational location, the deployment clock of the parasite reduces at a rate equal to the following formula:  
    Time Passed \* 10 \* (1 - Mothership Deployment Modifier));
    
6.  The Mothership Deployment Modifier is equal to the Mothership Deployment Clock / Mothership Class Intended Deployment Time. In effect, the more time on the mothership deployment clock, the slower any docked parasites reduce their own clocks
    
7.  If the Mothership Deployment Modifier is equal to or greater than 1, any parasite in the hangar cannot reduce its own deployment clock, although the time on the parasite clock will not grow either. This means that every time the parasite is deployed, its clock will continue to increase without the chance to reduce between missions.
    
8.  A ship’s morale is always 100% unless the ship’s deployment clock exceeds the intended deployment time of its class (or for other reasons in subsequent sections). In that case, morale is equal to the intended deployment time / deployment clock. For example, a ship with a deployment clock for 15 months and an intended deployment time of 12 months would have a morale of 80%.
    
9.  If the crew on the ship is less than half the required crew complement, morale is multiplied by (Current Crew / Class Crew) x 2;
    
10.  Morale can never fall below 25% as a result of the above rules.
     

**Overcrowding**

1.  Each construction phase, the total personnel on each ship is compared to the available accommodation (after accounting for damage). Personnel in this case equals the crew, any rescued survivors beyond the capacity of any cryogenic modules and the capacity of the flight crew berths (I may add a rule tracking whether the hangar is in use when checking the flight crew berths).
    
2.  If the required accommodation is greater than the available accommodation, the ship is overcrowded.
    
3.  In this case, an Overcrowding Modifier is calculated equal to: (Required Accommodation / Actual Accommodation) ^ 2.
    
4.  The ship’s deployment clock will increase at a rate equal to the time passed multiplying by the Overcrowding Modifier. For example, if the ship is 25% overcrowded, the deployment clock will increase at 1.5625x the normal rate (1.25 x 1.25).
    
5.  If the overcrowding modifier is greater than 1.5, life support may begin to suffer damage.
    
6.  The percentage chance of failure in any construction phase is equal to Overcrowding Modifier \* 100 \* (Increment Length / Year Length). That translates to a 3.1% chance per construction phase if the ship is 50% overcrowded, an 8.6% chance at 150% overcrowded and a 34.2% chance at 400%.
    
7.  If failure occurs, a crew quarters system will potentially be damaged. This can be prevented in the normal way by maintenance supplies. If no maintenance supplies are available, the crew quarters will be destroyed.
    
8.  Destruction of crew quarters will reduce available accommodation and increase the overcrowding problem. Eventually, if all crew quarters are destroyed, this will lead to complete life support failure.
    
9.  Overcrowding is not checked on parasites in hangars, as it is assumed the flight crew berths and life support on the mothership will help with this situation. To avoid potential exploits of this simplification, any survivors on a parasite that docks with a mothership will be transferred to the mothership, unless they can be held in cryogenic modules on the parasite.
    

**Life Support Failure**

If a ship has no life support systems (due to combat damage or maintenance failures), it suffers the following penalties:

1.  For any military ship or one equipped with geological survey sensors, the deployment clock increases at 12x the normal rate and morale is immediately reduced to 10%.
    
2.  The crew takes casualties from 4% to 80% (4D20) of the remaining crew in each construction phase
    
3.  Any survivors on board take casualties of up to 80% of the remaining survivors in each construction phase
    
4.  Each commander on board the ship has a chance of dying equal to half the crew casualty percentage in step 2.
    

Life support failure is not checked for parasites in hangars, as it is assumed the flight crew berths and life support on the mothership will help with this situation.

If help is not close by, it may be better for the crew in these circumstances to abandon the ship and hope for rescue. This rule may also be a reason for a more common use of lifeboats.

**Summary**

This is still a long rule section but I hope it is more straightforward than in VB6 and will provide the background for building the support network required for distant deployments, plus the capacity to handle rescued crew members or prisoners of war.
