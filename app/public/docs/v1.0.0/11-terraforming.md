**Terraforming Update**

In terms of the general mechanics, terraforming works as it does in VB6 Aurora. Atmosphere measured in atm (atmospheric pressure) is added by terraforming ships or installations. However, there are several significant changes for C# Aurora.

1.  The base terraforming technologies have their atm rates reduced by 75% at the lower tech levels. The rate of tech increase has improved so the higher tech levels are reduced by around 60%. The starting racial tech rate per module/installation is 0.00025 atm per year.
    
2.  Smaller planets are much faster to terraform. The terraforming rate in atm is modified by Earth Surface Area / Planet Surface Area. For example, the rate at which atm is added to Mars is 3.5x faster than on Earth (90% of VB6 Aurora speed), Ganymede is 6x faster and Luna is almost 14x faster (3.4x faster than VB6)
    
3.  System Bodies with gravity of less than 0.1G cannot retain atmosphere and therefore cannot be terraformed
    
4.  Carbon Dioxide is now a dangerous gas.
    
5.  Water is now a significant factor in terraforming planets. Any planet with less than 20% water has a colony cost factor for water equal to (20 - Hydro Extent) / 10 (see colony cost rules).
    
6.  Water vapour can be added to the atmosphere just like any other gas.
    
7.  Water vapour will condense out of the atmosphere at a rate of 0.1 atm per year and increase the planet’s Hydro Extent
    
8.  Each 1% of Hydro Extent requires 0.025 atm of water vapour. This means that creating 20% Hydro Extent would require 0.5 atm of water vapour (this will be much faster on smaller worlds because the speed at which water vapour atm is added is linked to surface area). With this in mind, existing water becomes an important factor in the speed at which terraforming can be accomplished, especially on larger worlds.
    
9.  Water will also evaporate into the atmosphere. The evaporation cycle follows condensation and will stabilise water vapour in the atmosphere of a planet with liquid water at a level of: Atmospheric Pressure \* (Hydro Extent / 100) \* 0.01 atm. The resulting atm \* 20 is the % of the planet’s surface that loses water. As the water vapour is removed from the atmosphere, it will replenish from the surface water. This is to allow the removal of water from ocean worlds to create more living space.
    

These new rules should add more variety to terraforming and, in conjunction with the max population rules, should add more interesting decision-making when choosing which worlds to terraform.
