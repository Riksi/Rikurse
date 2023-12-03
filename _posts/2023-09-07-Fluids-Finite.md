---
layout: post
title:  "IMOW: The Navier Stokes Millennium Prize Problem - Main Partial Results"
date:   2023-09-04 00:00:00 +0000
categories: engg
---

<h2> Contents </h2>
* This will become a table of contents (this text will be scrapped).
{:toc}

## Introduction

Here are some of the key partial results with regard to the Euler and Navier-Stokes equations. The problem statement is described in detail in this [blogpost]({% post_url 2023-08-14-Fluids %}).

## Two dimensional case

- In two dimensions the analogues of the existence in both the non-periodic [(A)]({% post_url 2023-08-14-Fluids %}/#existence-statement-a-of-the-paper) and periodic [(B)]({% post_url 2023-08-14-Fluids %}/#periodic-solutions-statements-b-d-of-the-paper) cases have been known for a long time
- However it appears that no hint can be derived from this about the 3d case 

> since the main difficulties are absent in two dimensions

<span class='chatgpt'>One crucial distinction is the absence of vortex stretching in two dimensions, which plays a significant role in the formation of turbulence and singularities in three-dimensional fluid flow. In two dimensions, vorticity tends to be conserved and does not exhibit the complex behavior observed in three dimensions, leading to a more stable and well-behaved system.</span>

## Three dimensional case
- In three dimensions, [(A)]({% post_url 2023-08-14-Fluids %}/#existence-statement-a-of-the-paper) and [(B)]({% post_url 2023-08-14-Fluids %}/#periodic-solutions-statements-b-d-of-the-paper) hold provided that the initial velocity $u^\circ(x)$ satisfies a smallness condition.

- If $u^\circ(x)$ is not assumed to be small, then [(A)]({% post_url 2023-08-14-Fluids %}/#existence-statement-a-of-the-paper) and [(B)]({% post_url 2023-08-14-Fluids %}/#periodic-solutions-statements-b-d-of-the-paper) hold if the time interval $[0, \infty)$ is replaced by a small time interval $[0, T)$
    - $T$ depends on the initial data
    - For a given $u^\circ(x)$, maximum allowable $T$ is called the **blowup time**

## Significance of the blowup time

- Either [(A)]({% post_url 2023-08-14-Fluids %}/#existence-statement-a-of-the-paper) and [(B)]({% post_url 2023-08-14-Fluids %}/#periodic-solutions-statements-b-d-of-the-paper) hold or else there is a smooth divergence-free $u^\circ(x)$ for which [(1)]({% post_url 2023-08-14-Fluids %}/#eqn1), [(2)]({% post_url 2023-08-14-Fluids %}/#eqn2), [(3)]({% post_url 2023-08-14-Fluids %}/#eqn3) have a solution with a finite blowup time
- For the Navier Stokes equations, if there is a finite blowup time $T$, the velocity $\left(u_i(x, t)\right)_{1\leq i \leq 3}$ becomes unbounded near the blowup time. 
 - For Euler equations ($\nu = 0$) if there is a solution (such as for the case of no external force, $f \equiv 0$) with finite blowup time $T$, then vorticity $\omega(x, t)$ satisfies

    $$\int_0^T \left\{\sup_{x\in \mathbb{R}^3}\left \lvert \omega(x, t)\right \rvert\right \}dt = \infty$$

### Explanation of the vorticity integral

<span class='chatgpt' markdown=1>The integral expression indicates that for solutions to the Euler equations with finite blowup time $T$, the vorticity $\omega(x, t)$ becomes unbounded at certain points in the fluid domain as time progresses towards the blowup time $T$. Such unbounded vorticity is a characteristic of turbulence and singularity formation in the fluid flow, and it signifies the breakdown of the smoothness and regularity of the flow field.</span>

### Why integral over time?

<span class='chatgpt' markdown=1>Taking the integral over time, rather than the supremum, provides a comprehensive view of vorticity behavior across the entire fluid domain throughout the time interval from 0 to the blowup time $T$. This approach emphasizes the cumulative effect of vorticity magnitude, showing that large vorticity values persist and accumulate throughout the entire fluid system as we approach the blowup time. This is crucial when studying turbulence and singularities, as it highlights the collective behavior of vorticity across space and time, rather than focusing solely on individual maximum values.</span>

## Numerical simulations

Many numerical simulations seem to blowup for solutions to Euler equations but they are extremely numerically unstable so it is difficult to come to reliable conclusions. 

## References
- [Clay Mathematics institute Problem Introduction](https://www.claymath.org/millennium/navier-stokes-equation)
- [Official Problem Description by Charles L. Fefferman](https://www.claymath.org/wp-content/uploads/2022/06/navierstokes.pdf)