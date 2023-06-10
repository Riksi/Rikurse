---
layout: post
title:  Quantum Computing Notes
date:   2023-04-13 19:01:20 +0000
categories: rc maths
---


## MIT 8.371.2x: Quantum Information Science II, Part 2 - Efficient Quantum Computing - fault tolerance and complexity
### Problem Set 1

#### Fault-tolerant NAND gate / Fault-tolerant NAND gate

#### Gate teleportation / Rotation gates and the C3 family

```
H = [Z, Ry(0, pi/2)] = [Ry(0, pi/2), X]
T = [exp(I*pi/8)*Rz(0, pi/4)]
```

#### One-qubit teleportation circuits / One-qubit teleportation circuits

$$W = V Z V^\dagger = S^\dagger H S$$

Using only S and H gates, we can implement the W gate as follows:

W = [S(0), H(0), S(0), S(0), S(0)]

noting that 

$$Z = S^2 \\
\implies Z^\dagger = S^\dagger S^\dagger = Z \\
\implies ZS = S^\dagger$$

#### Toffoli gate is in C3 / Toffoli gate is in C3

U = [CNOT(1, 0), X(2)]
V = [CZ(2, 1), Z(0)]

## Quantum Information Science II, Part 3 - Advanced quantum algorithms and information theory

### Problem Set 1

#### Factoring using feedback: repetition / Quantum factoring by feedback: repetition III

$$p(k|n) = f(t,n) q(t,n,k)$$

#### Factoring using feedback: repetition / Quantum factoring by feedback: repetition II

Note that there are $\binom{t}{n}$ states in $\vert A_k\rangle^{\otimes t}$ with $n$ zeros all with the same coefficent. Thus, the probability is obtained by summing over the probabilities of each of these states:

$$p(k, n) =
\sum_{a\cdot\mathbf{1}_t=n}\left \vert\left( \langle a \vert \otimes \langle \lambda_k \vert\right)\vert \chi_t \rangle\right \vert ^2 = \binom{t}{n}\frac{1}{r} \cos^{2n}(\pi \phi_k) \sin^{2(t-n)}(\pi \phi_k)$$

$$\vert\chi _ t\rangle  = \frac{1}{\sqrt{r}} \sum _ k \vert A_ k\rangle ^{\otimes t} \vert\lambda _ k\rangle$$


### Problem Set 3

#### Holevo's Theorem I / Holevo's Theorem II

Alice's states $\vert X_1\rangle, \vert X_2\rangle, \dots, \vert X_n\rangle$ are the vertices of a tetrahedron in the Bloch sphere representation. Since $\vert\phi_1\rangle = \vert 1\rangle$, choosing Bob's other states to be points of an inverted tetrahedron leads to the desired value of $I_0$.

We can obtain these states by rotating the vectors corresponding to each state by $pi$ which is equivalent to an orthogonal state.

```python
Y1 = s1_sy
Y2 = sy.Matrix([[-X2[1].conjugate(), X2[0]]]).T
Y3 = sy.Matrix([[-X3[1].conjugate(), X3[0]]]).T
Y4 = sy.Matrix([[-X4[1].conjugate(), X4[0]]]).T
```

Note that to calculate $I_0 = I(X;Y)$ we do as follows:

- Calculate the measurement operators $M_i = \frac{1}{2} \vert \phi_i\rangle\langle\phi_i \vert$ corresponding to each state.

```python
N1, N2, N3, N4 = [
    (Yi @ Yi.conjugate().T)/2
    for Yi in [Y1, Y2, Y3, Y4]
]
```

- Calculate the probability of each measurement outcome $P(y) = \text{Tr}(\rho M_y)$.

```python
PY = sy.Matrix([(rho_sy @ Ny).trace() for Ny in [N1, N2, N3, N4]])
```

- For each $X_i$ find $P(X=x \vert Y=y) = \langle X_x \vert M_y \vert X_x \rangle$.
- Find $P(X=x, Y=y) = P(X=x \vert Y=y) P(Y=y)$.

```python
P_XY = sy.zeros(4, 4)
for y, Ny in enumerate([N1, N2, N3, N4]):
    P_Yy = PY[y]
    for x, Xx in enumerate([X1, X2, X3, X4]):
        P_Xx_cond_Yy = sy.simplify((Xx.conjugate().T @ Ny @ Xx)[0])
        assert np.isclose(complex(P_Xx_cond_Yy), float(sy.re(P_Xx_cond_Yy)))
        P_XY[x, y] = sy.re(P_Xx_cond_Yy) * P_Yy
        
P_XY = sy.Matrix(P_XY)

assert np.isclose(np.array(
    
    [[float(i) for i in j] for j in P_XY.tolist()]
                          
                          ).sum(), 1)
```

Then, given $H(X) = 2$, we can calculate the mutual information $I_0 = I(X;Y) = H(X) - H(X \vert Y)$ where 

$$H(X\vert Y) = \sum_{x,y} P(X=x,Y=y) \log_2 \left(\frac{P(X=x, Y=y)}{P(Y=y)}\right)$$

```python
HX = 2

HX_cond_Y = 0

PX = sy.Rational(1, 4)

for x in range(P_XY.rows):
    for y in range(P_XY.cols):
        P_Xx_Yy = P_XY[x, y]
        if P_Xx_Yy > 0:
            HX_cond_Y += (-P_Xx_Yy * sy.log(P_Xx_Yy / PX)/sy.log(2) )
        
I0 = HX - HX_cond_Y     
list(map(float, (HX, HX_cond_Y, I0))) # => [2.0, 1.584962500721156, 0.4150374992788438]
```

