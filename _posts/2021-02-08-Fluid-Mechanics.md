---
layout: post
title:  "Fluid Mechanics Key Equations [In progress]"
date:   2021-02-08 12:01:20 +0000
categories: engg
---
$$\newcommand{\evec}[1]{\mathbf{e}_{#1}}$$

- Streamline: a line along which the velocity is constant:
    $$\frac{dx}{v_x} = \frac{dy}{v_y} = \frac{dy}{v_y}$$

- Stream function : a value that is constant along a streamline

    $$\text{2D}: v_x = \frac{\partial phi}{\partial y}, v_y = -\frac{\partial phi}{\partial x}$$

- Steady flow: $\frac{\partial v}{\partial t} = 0$

- Inviscid flow: $\nabla \tau = \nabla\cdot(-p\mathbf{I}) = -\nabla$

- Incompressible flow: $\frac{-1}{\rho}\frac{D\rho}{Dt} = 0$

- Volumetric strain rate: $\nabla \cdot \mathbf{v}$

- Conservation of mass: 

    $$\frac{-1}{\rho}\frac{D\rho}{Dt}
    = \nabla \cdot \mathbf{v}$$

- Conservation of mass, incompressible flow

    $$\frac{-1}{\rho}\frac{D\rho}{Dt}
    = 0 \Longleftrightarrow \nabla \cdot \mathbf{v} = 0$$

- Conservation of momentum

    $$\rho\frac{D\rho}{Dt} = \nabla \cdot \tau + \rho g$$

- Conservation of momentum, inviscid flow (Euler equation)

    $$\nabla \tau = \nabla\cdot(-p\mathbf{I}) = -\nabla \\
    \rho\frac{D\rho}{Dt} = -\nabla p + \rho g$$

- Euler equation, hydrostatics

    $$\frac{D\rho}{Dt} = 0 \\
    \nabla p = \rho g$$

- Archimedes principle (can be derived using Euler equation for hydrostatics)

    $$F_B = -\text{mass of displaced fluid} \times \mathbf{g}$$

- Bernouilli equation, steady flow, invisicid flow
    - Streamline coordinates, integral: $\evec{s}$
        - Integral form (usually seen)

        $$P_1 + \frac{1}{2}\rho v_1^2 + \rho g z_1 =  
      P_2 + \frac{1}{2}\rho v_2^2 + \rho g z_2$$

        - Differential form

        $$\frac{\partial}{\partial s}\left({P + \frac{1}{2}\rho v^2 + \rho g z}\right) = 0$$

    - Normal to streamline: $\evec{n}$:

    $$ \text{Radius of curvature}: R \\
    \frac{\partial}{\partial n}\left(p + \rho g z\right) = \frac{\rho v_s^2}{R}$$

    - Binormal to streamline: $\evec{l} = \evec{n} \times \evec{s}$

    $$\frac{\partial}{\partial l}\left({P+ \rho g z}\right) = 0$$

