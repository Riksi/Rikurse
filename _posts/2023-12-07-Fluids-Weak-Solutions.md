---
layout: post
title:  "IMOW: The Navier Stokes Millennium Prize Problem - Weak Solutions"
date:   2023-12-07 00:00:00 +0000
categories: engg
---

$$\newcommand{\intxt}[1]{\underset{\mathbb{R}^3\times\mathbb{R}}{\iint}{#1}dxdt}$$


<h2> Contents </h2>
* This will become a table of contents (this text will be scrapped).
{:toc}

This is part 3 of a series of posts on the Navier Stokes Millennium Prize Problem in which I endeavour to express the problem statement in my own words (IMOW) with some help from ChatGPT.

Here is the list of all the posts in this series:

- [IMOW: The Navier Stokes Millennium Prize Problem - Statement]({% post_url 2023-08-14-Fluids %})
- [IMOW: The Navier Stokes Millennium Prize Problem - Main Partial Results]({% post_url 2023-09-07-Fluids-Finite %})
- [IMOW: The Navier Stokes Millennium Prize Problem - Weak Solutions](this post)


## Introduction
According to the [problem statement]((https://www.claymath.org/wp-content/uploads/2022/06/navierstokes.pdf))

> To arrive at the idea of a weak solution to a PDE one integrates the equation against a test function, and then integrates by parts (formally) to make the derivatives fall on the test function. For instance if (1) and (2) hold, then, for any smooth vector field $\theta(x, t) = (\theta_i(x, t))_{1\leq i\leq n}$ compactly supported in $\mathbb{R}^3 \times (0, \infty)$, a formal integration by parts yields

<div id='eqn12' markdown=1>

 $$-\underset{\mathbb{R}^3\times\mathbb{R}}{\iint}u\cdot \frac{\partial{\theta}}{\partial{t}} dx dt - \sum_{ij}
\underset{\mathbb{R}^3\times\mathbb{R}}{\iint}u_iu_j\frac{\partial{\theta_i}}{\partial{x_j}}dxdt 
\\= \nu\underset{\mathbb{R}^3\times\mathbb{R}}{\iint}u\cdot\Delta \theta dx dt 
+ \underset{\mathbb{R}^3\times\mathbb{R}}{\iint}f\cdot \theta dx dt - \underset{\mathbb{R}^3\times\mathbb{R}}{\iint} p \left(\operatorname{div}\theta\right)dx dt \quad \text{(12) in the paper}$$

</div>

A similar process is followed for [(2)](#eqn2) by using  a smooth function $\phi(x, t)$ which like $\theta(x, t)$ is compactly supported in $\mathbb{R}^3 \times (0, \infty)$ to obtain

<div id='#eqn13' markdown=1>

$$\intxt{u\cdot\nabla\phi} = 0 \quad \text{(13) in the paper}$$

</div>

Note I have given the corrected version of equation [(12)](#eqn12) given in the Errata (which itself contains an error as it refers to this as (10)). For clarity I have also written the pressure term as ${\iint} p \left(\operatorname{div}\theta\right)dx dt$ rather than ${\iint} p \cdot \left(\operatorname{div}\theta\right)dx dt$, as in the paper, so that in equation [(12)](#eqn12) the symbol $\cdot$ is solely used to denote the dot product of two vectors and not also the multiplication of scalars like $p$ and $\operatorname{div}\theta$.

For consistency with the derivation below, let rewrite [(12)](#eqn12) in pure vector form (no summations) and using the $\nabla$-notation where 
- The Laplacian of $F$ is written as $\nabla^2 F$ instead of $\Delta F$
- The divergence of $F$ is written $\nabla \cdot F$ instead of $\operatorname{div} F$

Note also that

$$\begin{aligned}
\sum_i \sum_j u_i u_j \frac{\partial \theta_i}{\partial x_j} &= \sum_i u_i \left(\sum_j u_j \frac{\partial}{\partial x_j}\right)\theta_i
\\&= \sum_i u_i \left( u \cdot \nabla\right)\theta_i
\\&= u \cdot \left( u \cdot \nabla\right)\theta
\end{aligned}
$$

Now let us state the vector form of [(12)](#eqn12) which we denote [(12A)](#eqn12A)

<div id='eqn12A' markdown=1>

$$-\underset{\mathbb{R}^3\times\mathbb{R}}{\iint}u\cdot \frac{\partial{\theta}}{\partial{t}} dx dt - 
\underset{\mathbb{R}^3\times\mathbb{R}}{\iint}u \cdot \left( u \cdot \nabla\right)\theta dxdt 
\\= \nu\underset{\mathbb{R}^3\times\mathbb{R}}{\iint}u\cdot\nabla^2 \theta dx dt
+ \underset{\mathbb{R}^3\times\mathbb{R}}{\iint}f\cdot \theta dx dt
- \underset{\mathbb{R}^3\times\mathbb{R}}{\iint} p \left(\nabla \cdot \theta\right)dx dt \quad (12A)$$

</div>


## "Compactly supported"

Here are answers from ChatGPT about what is meant by "compactly supported" and its implications for a function and its derivatives. Whilst the answer refers to $\theta$ if correct it would apply to any compactly supported function, such as $\phi$ for instance.

<div class='chatgpt' markdown=1>

In the context of the excerpt from the statement of the Navier-Stokes equations millennium prize problem:

1. **What does "compactly supported" mean in this context?**

   "Compactly supported" refers to a property of a function, in this case, the vector field $\theta(x, t)$. A function is said to be compactly supported if its support is a compact set. In simpler terms, the function is non-zero only in a bounded region of its domain. For the given vector field $\theta(x, t) = (\theta_i(x, t))_{1\leq i\leq n}$, it means that there exists a bounded region in $\mathbb{R}^3 \times (0, \infty)$ (three-dimensional space and time) such that $\theta(x, t)$ is zero outside that region.

2. **What does it imply about $\theta$ and its derivatives as $x$ or $t$ approach the limits of the support?**

   If $\theta(x, t)$ is compactly supported in $\mathbb{R}^3 \times (0, \infty)$, it implies that the function and its derivatives become zero as $x$ or $t$ move away from the bounded region where the function is non-zero. In other words, as you move toward the edges or boundaries of the support, $\theta(x, t)$ and its derivatives rapidly approach zero. This property is crucial when performing mathematical operations, such as integration by parts, as it ensures that the terms involved in the operations do not diverge or cause mathematical difficulties due to infinite values.
</div>

## Derivation strategy

Let us first outline how to derive [(12)](#eqn12)/[(12A)](#eqn12A)

- Assume $u$ and $p$ satisfy (1) and (2) from the paper repeated below in vector form

    <div id='eqn1' markdown=1>

    $$\frac{\partial u}{\partial t} + \left(u \cdot \nabla\right) u = \nu \nabla^2 u - \nabla p + f(x, t) \quad (x \in \mathbb{R}^n, t \geq 0) \quad (1)$$

    </div>

    <div id='eqn2' markdown=1>

    $$\nabla \cdot u = 0 \quad (x \in \mathbb{R}^n, t \geq 0) \quad (2)$$

    </div>

- Take dot product of both sides of [(1)](#eqn1) with $\theta(x, t) = (\theta_i(x, t))_{1\leq i\leq n}$ and multiply both sides of [(2)](#eqn2)  with $\phi(x, t)$

    $$\theta \cdot \frac{\partial u}{\partial t} + \theta \cdot\left(\left(u \cdot \nabla\right)u\right) = \theta\cdot \nu \nabla^2 u - \theta\cdot \nabla p + \theta\cdot f(x, t)$$

    $$\phi\nabla \cdot u = 0 \quad (x \in \mathbb{R}^n, t \geq 0) \quad (2)$$

- Integrate both sides over all space and time, using integration by parts to move any derivatives to  $\phi$ or $\theta$ and show that any other terms vanish.
- Essentially this means in $\int u dv = u v - \int v du$, choose $u$ so that it is a function of $\phi$ or $\theta$ and show that $uv$ vanishes.

## Momentum equation 

Let us now derive the integral form (weak form) of the Navier-Stokes equations from the classical (strong) form for the momentum equation, considering each term on both sides of the equation.

### Left hand side

#### Time derivative term

For the partial time derivative term consider the integral over time for each term of the dot product expressed using integration by parts

$$\int_{\mathbb{R}} \theta_i \frac{\partial u_i} {\partial t} dt = \int_{\mathbb{R}} \frac{\partial\left(\theta_i u_i\right)}{\partial t}dt- \int_{\mathbb{R}} u_i \frac{\partial \theta_i} {\partial t} dt$$


Since the integral is over the real line, the limits are $t=\pm \infty$. As $\theta_i$ is [compactly supported](#compactly-supported) over the interval $(0, \infty)$ as a function of $t$ it vanishes at the limits causing the first  term on the right to vanish

$$\int_{\mathbb{R}} \frac{\partial\left(\theta_i u_i\right)}{\partial t}dt = \left. \theta_i u_i\right \rvert_{-\infty}^\infty = 0$$

Therefore the integral can be written using only derivatives of $\theta_i$ as

$$\int_{\mathbb{R}} \theta_i \frac{\partial u_i} {\partial t} dt = - \int_{\mathbb{R}} u_i \frac{\partial \theta_i} {\partial t} dt$$

(What I do find confusing is the fact that the problem statement only defines the velocity $u$ for $t \geq 0$. Does that mean we define velocity as $0$ for $t < 0$?)

#### Divergence term

Before we evaluate the integral $\theta \cdot \left(u \cdot \nabla \right)u = \sum_i \theta_i \left(u \cdot \nabla \right)u_i$ let us first use vector identities to express each term of the dot product in terms of derivatives of $\theta$

$$
\begin{aligned} 
\theta_i \left(u \cdot \nabla\right) u_i &=  \theta_i u \cdot \nabla u_i
\\ &=\nabla\cdot\left(\theta_i u u_i \right) - u_i\nabla\cdot\left(\theta_i u\right)
\\ & =\nabla\cdot\left(\theta_i u u_i \right) - u_i\theta_i\left(\nabla \cdot u\right) - u_i u\cdot\nabla \theta_i 
\\ & =\nabla\cdot\left(\theta_i u u_i \right)  - u_i \left(u\cdot\nabla \right)\theta_i  \quad \text{using $\nabla \cdot u = 0$ since $u$ satisfies (2)}
\end{aligned}
$$

At this stage the right hand side still contains derivatives of $u$. Let us now see how we can make them disappear by integrating over space

$$\int_{\mathbb{R}^3} \theta \cdot \left(u \cdot \nabla \right)u_i dx = \int_{\mathbb{R}^3} \nabla \cdot (\theta_i u u_i) dx- \int_{\mathbb{R}^3} u \cdot \left(u \cdot \nabla \right)\theta_i dx$$

We will show that the first term on the right $\int_{\mathbb{R}^3} \nabla \cdot (\theta_i u u_i) dx$ vanishes. First express the velocity $u$ and the divergence operator $\nabla$ in terms of their components


$$
\begin{aligned}
\int_{\mathbb{R}^3} \nabla \cdot (\theta_i u u_i) dx &= \int_{\mathbb{R}^3} \left(\sum_a\hat{\mathbf{e}}_a \frac{\partial}{\partial x_a}\right) \cdot \left(\theta_i \left(\sum_b{u_b \hat{\mathbf{e}}_b}\right) u_i\right) dx
\\&= \int_{\mathbb{R}^3} \sum_{a,b}\left(\hat{\mathbf{e}}_a \cdot \hat{\mathbf{e}}_b\right)\frac{\partial}{\partial x_a}\left(\theta_i u_b u_i\right) 
\\&= \int_{\mathbb{R}^3} \sum_{a,b}\delta_{ab}\frac{\partial}{\partial x_a}\left(\theta_i u_b u_i\right)  dx \quad \text{where $\delta_{ab}$ is the Kronecker delta}
\\ &= \int_{\mathbb{R}^3} \sum_{b}\frac{\partial}{\partial x_b}\left(\theta_i u_b u_i\right) dx
\\ &= \sum_{b}\int_{\mathbb{R}^3} \frac{\partial}{\partial x_b}\left(\theta_i u_b u_i\right) dx
\end{aligned}
$$


Let us now evaluate the integral of each term of the sum, noting that $dx = \prod_s dx_s$, a volume element that represents an infinitesimal cube

$$\begin{aligned}
\int_{\mathbb{R}^3} \frac{\partial \left(\theta_i u_b u_i\right)}{\partial x_b} dx &= \int_{\mathbb{R}^3}\frac{\partial \left(\theta_i u_b u_i\right)}{\partial x_b} \prod_s dx_s 
\\&= \int_{\mathbb{R}^2}\left(\int_\mathbb{R} \frac{\partial \left(\theta_i u_b u_i\right)}{\partial x_b} dx_b\right)\prod_{s\neq b} dx_s
\end{aligned}$$

Evaluating the innermost integral we see that it vanishes due to the fact $\theta_i$ is [compactly supported](#compactly-supported) in $\mathbb{R}$ as a function of $x_b$

$$\int_\mathbb{R} \frac{\partial \left(\theta_i u_b u_i\right)}{\partial x_b} dx_b  = \left .\theta_i u_b u_i\right \rvert_{x_b=-\infty}^{x_b=\infty} = 0 \implies \int_\mathbb{R^3} \frac{\partial \left(\theta_i u_b u_i\right)}{\partial x_b} dx = 0$$

The integral of each term of $\nabla \cdot (\theta_i u u_i)$ similarly vanishes. 

Therefore the overall integral can be expressed entirely in terms of an integral over derivatives of $\theta$

$$\int_{\mathbb{R}^3} \theta \cdot \left(u \cdot \nabla \right)u_i dx = -\int_{\mathbb{R}^3} u \cdot \left(u \cdot \nabla \right)\theta_i dx$$


### Right hand side

#### Viscous force term

Since $\nu$ is a constant let us just consider any term of the dot product $\theta\cdot \nabla^2 u = \sum_i \theta_i \nabla^2 u_i$ and express it in terms of derivatives of $\theta$ using vector identities

$$
\begin{aligned}
\theta_i \nabla^2 u_i
&=\theta_i \nabla \cdot \nabla u_i
\\&=\nabla \cdot(\theta_i \nabla u_i) - \nabla \theta_i \cdot \nabla u_i
\\&=\nabla \cdot(\theta_i \nabla u_i) - \left(\nabla\cdot \left(u_i\nabla \theta_i\right) - u_i \nabla \cdot \nabla \theta_i\right)
\\&= \nabla \cdot \left(\theta_i  \nabla u_i - u_i  \nabla \theta_i\right) + u_i \nabla^2 \theta_i
\end{aligned}
$$

Integrated over space you get

$$\int_{\mathbb{R}^3}\theta_i \nabla^2 u_i dx = \int_{\mathbb{R}^3}\nabla \cdot \left(\theta_i  \nabla u_i - u_i  \nabla \theta_i\right) dx + \int_{\mathbb{R}^3}u_i \nabla^2 \theta_i dx$$

Relying on the ["compactly supported"](#compactly-supported) condition for $\theta$ we can show that the first term on the right vanishes in a similar fashion to the divergence term $\nabla \cdot (\theta_i u u_i)$ above. 

$$\begin{aligned}
\int_{\mathbb{R}^3}\nabla \cdot \left(\theta_i  \nabla u_i - u_i  \nabla \theta_i\right) &=\int_{\mathbb{R}^3} \left(\sum_{a,b} \left(\hat{\mathbf{e}_a}\cdot \hat{\mathbf{e}_b}\right)\frac{\partial}{\partial x_a} \left(\theta_i  \frac{\partial u_i}{\partial x_b} - u_i   \frac{\partial \theta_i}{\partial x_b}\right) \right)\prod_s dx_s
\\&=\sum_b\int_{\mathbb{R}^3}  \frac{\partial}{\partial x_b} \left(\theta_i  \frac{\partial u_i}{\partial x_b} - u_i   \frac{\partial \theta_i}{\partial x_b}\right) \prod_s dx_s
\\&=\sum_b\int_{\mathbb{R}^2}  \left(\int_\mathbb{R}\frac{\partial}{\partial x_b} \left(\theta_i  \frac{\partial u_i}{\partial x_b} - u_i   \frac{\partial \theta_i}{\partial x_b}\right) dx_b\right) \prod_{s\neq b} dx_s
\\&=\sum_b\int_{\mathbb{R}^2}  \left. \left(\theta_i  \frac{\partial u_i}{\partial x_b} - u_i   \frac{\partial \theta_i}{\partial x_b}\right) \right\rvert_{x_b=-\infty}^{x_b=\infty}\prod_{s\neq b} dx_s
\\&=\sum_b\int_{\mathbb{R}^2}  0\cdot\prod_{s\neq b} dx_s \\&=0
\end{aligned}$$

Similar to before, this means we express the original integral solely in terms of derivatives of theta

$$\begin{aligned}
\int_{\mathbb{R}^3}\theta \nabla^2 u dx 
&= \sum_i\int_{\mathbb{R}^3}\theta_i \nabla^2 u_i dx 
\\&= \sum_i\int_{\mathbb{R}^3}u_i \nabla^2 \theta_i dx
\\&= \int_{\mathbb{R}^3}u \nabla^2 \theta dx
\end{aligned}$$

#### Pressure term

The result is simpler to derive. Let us consider the spatial integral

$$\int_{\mathbb{R}^3}\theta \cdot \nabla p dx= \int_{\mathbb{R}^3} \nabla\cdot\left(\theta p\right) dx - \int_{\mathbb{R}^3} p\nabla\cdot\theta dx$$ 

By a reasoning similar to that applied to earlier terms involving integrals of the divergence of a vector, we can show that

$$\int_{\mathbb{R}^3} \nabla\cdot\left(\theta p\right) dx = \sum_b\int_{\mathbb{R}^2}\left.\theta_b p \right \rvert_{x_b=-\infty}^{x_b=\infty} \prod_{s\neq b}dx_s = 0$$

#### External force term

Since the external force term does not involve any derivatives of $u, p$, it remains in the original form

$$\underset{\mathbb{R}^3 \times \mathbb{R}}{\iint}f\cdot \theta dx dt$$

### A digression on the divergence theorem

It is worth noting that though we have not explicitly mentioned the divergence theorem that is essentially what we have been using to argue that certain terms vanish. The divergence theorem states that the integral of the divergence vector field $F$ over a volume is equivalent to the integral over the surface area that encloses the volume of the component of $F$ normal to the surface area.

$$\iiint_V \left(\nabla \cdot F \right)dV = ∯\left(F\cdot \hat{\mathbf{n}}\right) dS$$


In our expression $\int_{\mathbb{R}^3} \nabla\cdot\left(\theta p\right) dx$ corresponds to the volume integral where $dx$ (as noted earlier) is a volume element whilst $\sum_b\int_{\mathbb{R}^2}\left.\theta_b p \right \rvert_{x_b=-\infty}^{x_b=\infty} \prod_{s\neq b}dx_s$ corresponds to the surface integral where in Cartesian coordinates you essentially have a piecewise surface area element $dS$ that for each dimension $x_b$ is $\prod_{s\neq b}dx_s$

$$
\begin{align*}
\quad dS = 
\left\{
    \begin {aligned}
         & \prod_{s\neq b}dx_s \quad & \vert x_b \vert = \infty \quad \forall b\\
         & 0 \quad & \text{otherwise}      
    \end{aligned}
\right.
\end{align*}
$$

with associated normal $\hat{\mathbf{n}}$ in each case pointing in the positive $x_b$ direction at the positive limit and the negative $x_b$ direction at the negative limit. 

Then the integral over the surface area is

$$\begin{aligned}
∯\left(F\cdot \hat{\mathbf{n}}\right) dS 
&=\sum_b\int_{\mathbb{R}^2} (\left. F_b \right \vert_{x_b=\infty} - \left. F_b \right \vert_{x_b=-\infty}) \prod_{s\neq b}dx_s
\end{aligned}$$

which vanishes when for instance $F$ vanishes at the limits as in our case with compactly supported $\theta$.

For example letting $x_b$ represent the $z$-direction you can think of $dS$ as the top and bottom faces of an infinitely long cuboid with $\hat{\mathbf{n}}$ pointing in the $\pm$ directions, as conceptually illustrated below

![Diagram showing dS as the top and bottom faces of an infinitely long cuboid
that extends in the z-direction]({{site.baseurl}}/assets/images/div-theorem-z.png)

### Final form
Let's summarise the results from above for each term

- LHS time derivative term

    $$\intxt {\theta \cdot \frac{\partial u}{\partial t} }=-\intxt {u \cdot \frac{\partial \theta}{\partial t}}$$

- LHS divergence term 

    $$\intxt {\theta \cdot \left(u \cdot \nabla \right)u} = -\intxt{ u \cdot \left(u \cdot \nabla \right)\theta}$$

- RHS viscous force term 

    $$\nu\intxt {\theta \cdot \nabla^2 u} = \nu\intxt {u \cdot \nabla^2 \theta}$$

- RHS external force term 

    $$\underset{\mathbb{R}^3 \times \mathbb{R}}{\iint}f\cdot \theta dx dt$$

- RHS pressure term 

    $$\intxt {\theta \cdot \nabla p}= \intxt {p\nabla\cdot\theta}$$


Now group the terms together on each side, remembering to include the negative sign for the pressure term from [(2)](#eqn2), confirming that the final result is identical to [(12A)](#eqn12A)

$$-\intxt u \cdot \frac{\partial \theta}{\partial t} -\intxt u \cdot \left(u \cdot \nabla \right)\theta \\=  \nu\intxt {u \cdot \nabla^2 \theta} + \intxt{f\cdot \theta} - \intxt {p\nabla\cdot\theta}$$


## Conservation of mass equation 

The result follows in a similar way to the cases seen earlier involving divergence terms.

Expressing $\phi \nabla \cdot u$ using the vector identities, integration by parts over space yields

$$0 = \int_{\mathbb{R}^3}\phi \nabla \cdot u dx = \int_{\mathbb{R}^3}\nabla \cdot \left(\phi u\right) dx - \int_{\mathbb{R}^3}u\cdot\nabla\phi dx$$ 

Using the divergence theorem the first term on the right vanishes due to the fact $\phi$ is [compactly-supported](#compactly-supported) in $\mathbb{R}^3 \times (0, \infty)$ leading to the result given in [(13)](#eqn13) 

$$\intxt{u\cdot\nabla\phi} = 0$$

## Caveats
It is evident that certain terms in the integration by parts of the terms in equation 10 must vanish for the final result to come about. However I have doubts about my reasoning as to why they vanish. My arguments rely on information I obtained from ChatGPT as to the significance of the condition that $\theta$ is compactly supported but they may not be correct or they may not accurately apply the condition. 

## References
- [Clay Mathematics institute Problem Introduction](https://www.claymath.org/millennium/navier-stokes-equation)
- [Official Problem Description by Charles L. Fefferman](https://www.claymath.org/wp-content/uploads/2022/06/navierstokes.pdf)