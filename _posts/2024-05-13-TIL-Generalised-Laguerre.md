---
layout: post
title:  TIL - generalized Laguerre polynomial
date:   2024-05-02 00:00:00 +0000
categories: engg
---

Here we will compute the values of the generalized Laguerre polynomial for small values of $n$ and $\alpha$

$$ L_n^\alpha(X) = \sum_{m=0}^{n} (-1)^m \left( \binom{n+\alpha}{n - m} \right) \frac{X^m}{m!} $$

```python
from scipy.special import comb, factorial
from IPython import display
import sympy as sy

def laguerre(n, alpha, X):
    m = np.arange(n+1)
    return np.sum(
        (-X) ** m * comb(n + alpha, n - m) / factorial(m)
    ).simplify()
```

We can now calculate the values for $\alpha$ and $n$ varying from 0 

```python
X = sy.Symbol('X')
for n in range(3):
    for alpha in range(3):
        l = laguerre(n, alpha, X)
        display.display(display.Markdown(f'$L_{n}^{alpha} = {sy.latex(l)}$'))
```

$$L_0^0 = 1.0,\quad L_1^0 = 1.0 - 1.0 X,\quad L_2^0 = 0.5 X^{2} - 2.0 X + 1.0,\quad L_3^0 = - \frac{1}{6} X^{3} + 1.5 X^{2} - 3.0 X + 1.0$$

$$L_0^1 = 1.0,\quad L_1^1 = 2.0 - 1.0 X,\quad L_2^1 = 0.5 X^{2} - 3.0 X + 3.0,\quad L_3^1 = - \frac{1}{6}  X^{3} + 2.0 X^{2} - 6.0 X + 4.0$$

$$L_0^2 = 1.0,\quad L_1^2 = 3.0 - 1.0 X,\quad L_2^2 = 0.5 X^{2} - 4.0 X + 6.0,\quad L_3^2 = - \frac{1}{6}  X^{3} + 2.5 X^{2} - 10.0 X + 10.0$$
