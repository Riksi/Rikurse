---
layout: post
title:  Modular arithmetic inverse
date:   2023-04-13 19:01:20 +0000
categories: rc maths
---

## Modular arithmetic inverse

In basic arithmetic with real numbers the inverse of an number $x$ is another number $y$ such that $xy = 1$. All numbers except for 0 have an inverse. 

The definition for the modular arithmetic inverse is similar. Consider $\mathbb{Z}_N = \{x: x \in \mathbb{Z}, 0 \leq x \lt N\} = \{0, \ldots N-1\}$. The inverse of $x$ is a number $y \in \mathbb{Z}_N$ such that $yx = 1 \mod N$. As with real numbers this means that $x$ is the inverse of $y$. 

Now it might appear from this definition that $y$ is the inverse of more than one number. For example for $N=7$,

$$2 \cdot 4 = 8 = 1\cdot 7 + 1=> 2 \cdot 4 = 1 \mod N \\
2 \cdot 11 = 22 = 3\cdot 7 + 1=> 2 \cdot 11 = 1 \mod N \\
2 \cdot 25 = 50 = 7\cdot 7 + 1=> 2 \cdot 25 = 1 \mod N \\$$

but that is not the case if you represent a number in terms of its remainder with respect to $N$

$$y\cdot x \mod N \\
= (y \mod N) \cdot (x \mod N) \mod N \\
= y \cdot (x \mod N) \mod N$$

Observe that in the example above $25 = 11 = 4 \mod N$.

From now on we will only consider the inverse of numbers in $\mathbb{Z}_N$ since any number can be represented by an element in $\mathbb{Z}_N$ by taking the remainder with respect to $N$.

Modular arithmetic inverses differ in a few ways compared to regular arithmetic inverses. 

### $0$ is self-inverse in $\mathbb{Z}_1$
In arithmetic over real numbers 0 never has an inverse but in modular arithmetic 0 is its own inverse in $\mathbb{Z}_1 = \{0\}$. Since $\forall x, x \mod 1 = 0$

$0 \mod 1 = 1 \mod 1 \\ \implies 0 = 0\cdot 0 = 1 \mod 1 \\
\implies 0 = 0^{-1} \mod 1$

### Non-zero numbers may not have inverses in $\mathbb{Z}_N$
As with real numbers, there is no $y \in \mathbb{Z}_N$ such that $ y\cdot 0 = 1 \mod N$. What is different is that not all non-zero numbers in $Z_N$ may be invertible. For example for $x = 2, N=4$,

$$1\cdot 2 = 2 \mod 4 \\
2\cdot 2 = 0 \mod 4 \\
3\cdot 2 = 2 \mod 4$$

which means that no inverse exists in $\mathbb{Z}_N$ for 2 $-$ or for any number whose remainder with respect to 4 is 2.

## Inverse and greatest common divisors

For a given $N>1$, which numbers in $\mathbb{Z}_N$ are invertible? We can prove that $x$ in $\mathbb{Z}_N$ has an inverse if and only if the greatest common divisor (gcd) of $N$ and $x$ is 1.

First we note that $\gcd(x,y)$ is the smallest positive (integer) linear combination $x$ and $y$. 

**gcd is 1 $\implies$ existence of inverse**

$$\gcd(x,N) = 1 \\
\implies \exists \hspace{0.1cm} a,b \hspace{0.2cm} \text{s.t.} \hspace{0.2cm} aN + bx = 1
\\ \implies aN + bx \mod N 
\\ = bx \mod N 
\\ = (b \mod N)x \mod N = 
\\ = 1 \mod N = 1
\\ \implies \exists \hspace{0.1cm} \beta = (b \mod N) \in \mathbb{Z}_N  \hspace{0.2cm} \text{s.t.} \hspace{0.2cm}  \beta x = 1 \mod N\hspace{0.2cm} 
\\ \implies \beta = x^{-1} \text{ in } \mathbb{Z}_N$$


**existence of inverse $\implies$ gcd is 1**

$$\exists \hspace{0.1cm} x^{-1} \text{ in } \mathbb{Z}_N \\
\implies \exists \hspace{0.1cm} \beta \in \mathbb{Z}_N \hspace{0.1cm} \text{s.t.} \hspace{0.1cm} \beta x = 1 \mod 
N
\\ \implies \exists \hspace{0.1cm} \alpha \in \mathbb{Z} \hspace{0.1cm} \text{s.t.} \hspace{0.1cm} \beta x = \alpha N + 1
\\ \implies - \alpha N + \beta x  = 1
\\ \implies \exists \hspace{0.1cm} a=-\alpha, b=\beta \in \mathbb{Z} \hspace{0.1cm} \text{s.t.} \hspace{0.1cm} aN + bx = 1
\\ \implies \gcd(x, N) = 1 $$

where the last step comes about because if 1 is a linear combination of $x$ and $N$, it is necessarily the smallest positive integer linear combination of $x$ and $N$ and is therefore the gcd.
