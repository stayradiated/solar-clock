# Solar Clock

## Why?

I want to understand how we calculate time.

From what I understand it's based on the movement of the Earth around our Sun.

We have exactly 24 hours in our day -- but this is "Mean Solar Time" -- the
average length of a day.

I want to know what the actual length of the day is.

## Inspiration

[Earth and Sun by Bartosz Ciechanowski](https://ciechanow.ski/earth-and-sun/)
is a work of art.

I've been reading through the source code trying to understand all the
calculations and numbers that are used. There are a lot.

## 1. Ellipses

I've started by plotting the orbit of the Earth around our Sun.

The Earth does not orbit in a perfect circle. It looks like a circle, but it's
actually an Ellipse.

<strong>e<sup>2</sup> = 1 - y<sup>2</sup> / x<sup>2</sup></strong>

http://ffden-2.phys.uaf.edu/212_fall2003.web.dir/Beth_Caissie/eccentricity.htm

The eccentricity of the Earth changes over time due to gravitational forces
from other planets in the Solar System (mostly Jupiter). 

It ranges from almost a perfect circle (0.0034) to quite elliptical (0.058).

The eccentricity of the Earth's orbit is currently around 0.0167.

This is a small diagram to help visualize those numbers:

```
                   0.0167
|------------------*-----------------------------------------------------------|
0.0034                                                                     0.058

```
