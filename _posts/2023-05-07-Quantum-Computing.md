---
layout: post
title:  Quantum Computing Notes
date:   2023-04-13 19:01:20 +0000
categories: rc maths
---

$$\newcommand{\ket}[1]{\left\lvert #1 \right \rangle}$$

<style>
    .hi{
        background-color: #00ff00ab;
    }

    .hi-row{
        margin-left: 25%;
    }

    h4{
        font-weight: bold;
    }
</style>


<h2> Contents </h2>

* This will become a table of contents (this text will be scrapped).
{:toc}

## MIT 8.370.2x: Quantum Information Science I, Part 2
### Problem Set 2
#### Simon's algorithm (2 of 2) / Simon's algorithm II

Let $U\lvert{x}\rangle \lvert {y}\rangle  = \lvert{x}\rangle \lvert{y\oplus f(x)}\rangle$.

For f such that $f(x) =  \lvert 0, x_1, \ldots x_n \rangle$, the state in A before measurement is  

$$(H_2 \times I_2) U (H_2 \times I_2)\lvert 00 \rangle \lvert 00 \rangle
\\=(H_2 \times I_2)U\left(\sum_{x_0=0}^1\sum_{x_1=0}^1 \lvert x_0,x_1 \rangle \lvert 00 \rangle/2\right)
\\=(H_2 \times I_2)\left(\sum_{x_0=0}^1\sum_{x_1=0}^1 \lvert x_0,x_1 \rangle \lvert 00 \oplus f(x)\rangle/2 \right)
\\=(H_2 \times I_2)\left(\sum_{x_0=0}^1\sum_{x_1=0}^1 \lvert x_0,x_1 \rangle \lvert f(x)\rangle/2 \right)
\\=(H_2 \times I_2)\left(\sum_{x_0=0}^1\sum_{x_1=0}^1 \lvert x_0,x_1 \rangle \lvert 0,x_1\rangle/2 \right)
\\=\sum_{x_0=0}^1\sum_{x_1=0}^1 H_2\lvert x_0,x_1 \rangle \lvert 0,x_1\rangle/2 $$

- If the state in B is measured to be 00, then the state in A before measurement would be proportional to

$$H_2\left(\lvert 00 \rangle + \lvert 10 \rangle\right) = \lvert ++ \rangle + \lvert -+ \rangle \propto \left(\lvert 00 \rangle + \lvert 01 \rangle\right)$$

Normalising gives

<span class='hi hi-row' markdown=1>$$\left(\lvert 00 \rangle + \lvert 01 \rangle\right)/\sqrt{2}$$</span>

which means the two possible measurement results for A are 

<span class='hi hi-row' markdown=1>$$z_1 = \lvert 00 \rangle$$</span>

<span class='hi hi-row' markdown=1>$$z_1= \lvert 01 \rangle$$</span>

The result obtained by solving $z_1 \cdot s = 0$ for $z \neq 00$ gives

$$z_1 \cdot s = 0 
\\ \implies 01 \cdot s = 0 \\ = 0\cdot s_0 \oplus 1\cdot s_1 = 0
\\ = s_1 = 0$$

whilst $s_0$ can be either 0 or 1. Excluding the trivial solution 

<span class='hi hi-row' markdown=1>$$s = 10$$</span>

Since $f(s) = f(10) = 00 = f(00)$, the true value of $s$ is <span class='hi' markdown=1>$10$</span>.

## MIT 8.371.2x: Quantum Information Science II, Part 2 - Efficient Quantum Computing - fault tolerance and complexity
### Problem Set 1

#### Fault-tolerant NAND gate / Fault-tolerant NAND gate

The output is 

$$\overline{\overline{x \cdot y} \cdot \overline{y \cdot z} \cdot \overline{z \cdot x}}$$ 

which can be obtained without NOT gates by using De Morgan's theorem

$${x \cdot y} + {y \cdot z} + {z \cdot x}$$

#### Gate teleportation / Rotation gates and the C3 family

```
H = [Z, Ry(0, pi/2)] = [Ry(0, pi/2), X]
T = [exp(I*pi/8)*Rz(0, pi/4)]
```

#### One-qubit teleportation circuits / One-qubit teleportation circuits

$$W = V Z V^\dagger = S^\dagger H S$$

Using only S and H gates, we can implement the W gate as follows:

```
W = [S(0), H(0), S(0), S(0), S(0)]
```

noting that 

$$Z = S^2 \\
\implies Z^\dagger = S^\dagger S^\dagger = Z \\
\implies ZS = S^\dagger$$

#### Toffoli gate is in C3 / Toffoli gate is in C3

U = [CNOT(1, 0), X(2)]
V = [CZ(2, 1), Z(0)]

## MIT 8.371.3x: Quantum Information Science II, Part 3 - Advanced quantum algorithms and information theory
### Problem Set 1

#### Factoring using feedback: repetition / Quantum factoring by feedback: repetition III

$$p(k|n) = f(t,n) q(t,n,k)$$

#### Factoring using feedback: repetition / Quantum factoring by feedback: repetition II

Note that there are $\binom{t}{n}$ states in $\vert A_k\rangle^{\otimes t}$ with $n$ zeros all with the same coefficent. Thus, the probability is obtained by summing over the probabilities of each of these states:

$$p(k, n) =
\sum_{a\cdot\mathbf{1}_t=n}\left \vert\left( \langle a \vert \otimes \langle \lambda_k \vert\right)\vert \chi_t \rangle\right \vert ^2 = \binom{t}{n}\frac{1}{r} \cos^{2n}(\pi \phi_k) \sin^{2(t-n)}(\pi \phi_k)$$

$$\vert\chi _ t\rangle  = \frac{1}{\sqrt{r}} \sum _ k \vert A_ k\rangle ^{\otimes t} \vert\lambda _ k\rangle$$

### Problem Set 2

#### Communication complexity II

##### Proof of useful result
First let us show that for all $B$-bit strings there are exactly half that have an even and odd number of 1's. 

- Let $N_1(s)$ denote the number of 1's in string $s$

- Define

    $$S_{B, \text{odd}} = \{s:s \in \{0,1\}^{B}, N_1(s)\ \text{odd}\} \\
    S_{B, \text{even}} = \{s:s \in \{0,1\}^{B}, N_1(s)\ \text{even}\}$$

- By definition

$$S_{B, \text{odd}} \cap S_{B, \text{even}} = \emptyset$$

- Since each $B$-bit string belongs in exactly one set

$$S_{B, \text{odd}} \cup S_{B, \text{even}} = \{0,1\}^B$$

- The goal is to show that $P(B) = \left\vert S_{B, \text{odd}}\right\vert = \left\vert S_{B, \text{even}}\right\vert = 2^{B-1}$ holds for all $B$

The proof is by induction.

**Base case, $P(1)$**
- $\\{0,1\\}^B = \\{0,1\\}$ so that $S_{B, \text{odd}} = \\{1\\}$ and $S_{B, \text{even}} = \\{0\\}$
- Both have exactly $2^{B-1} = 2^{1-1} = 2^0 = 1$ element so $P(1)$ holds

**Induction, $P(B)$**
- Assume $P(B-1)$ holds
- Note that string $a' \in \\{0,1\\}^B$ can be written as $a'_0\Vert a$ where $a \in \\{0,1\\}^{B-1}$ and $\Vert$ denotes concatenation.
- Then $N_1(a') = a'_0 + N_1(a)$
- In particular if $N_1(a) = 0\Vert a$ then $N_1(a)$ is even otherwise $N_1(a)$ is odd
- By the induction hypothesis we assume that 
    
$$\left\vert S_{B-1, \text{odd}}\right\vert = \left\vert S_{B-1, \text{even}}\right\vert = 2^{B-2}$$

- Then the number of strings with an odd number of 1's is 
    
$$\begin{align*}
\left\vert S_{B, \text{odd}}\right\vert &= \left\vert\{s'=0\Vert s:s\in S_{B-1, \text{odd}}\}\right\vert + \left\vert\{s'=1\Vert s:s\in S_{B-1, \text{even}}\}\right\vert \\
&= \left\vert S_{B-1, \text{odd}}\right\vert + \left\vert S_{B-1, \text{even}}\right\vert \\
&= 2^{B-2} + 2^{B-2} \\
&= 2^{B-1}
\end{align*}$$

- From this we see that number of strings with an even number of 1's is 

$$\left\vert S_{B, \text{even}}\right\vert = \left\vert\{0,1\}^B\right\vert - \left\vert S_{B, \text{odd}}\right\vert = 2^B - 2^{B-1} = 2^{B-1} = \left\vert S_{B, \text{odd}}\right\vert \quad \square$$


##### Problem

Now let us return to the problem

$$
\begin{align*}
H_2^{\otimes n} \ket{\phi} &= H_2^{\otimes n} \frac{1}{\sqrt{2^n}} \sum_y (-1)^{x \cdot y} \ket {x, y} \\
&= \frac{1}{\sqrt{2^n}} \sum_y (-1)^{x \cdot y} \ket{x} H^{\otimes n}  \ket {y} \\
&= \frac{1}{\sqrt{2^n}} \sum_y (-1)^{x \cdot y} \ket{x} \frac{1}{\sqrt{2^n}}\sum_z (-1)^{z \cdot y} \ket {y} \\
&= \frac{1}{2^n} \ket{x}\sum_z \left(\sum_y (-1)^{(x+z) \cdot y}\right) \ket{z}
\end{align*}
$$

The additions and multiplications are all mod 2 so $a=x+z=x \oplus z$. Let $S_1 = \left\\{i: a_i=1 \right\\}$. Then we can write

$$
\begin{align*}
a \cdot y &= \sum_i a_i \cdot y_i \\
&= \sum_{i \in S_1} a_i \cdot y_i \\
&= \sum_{i \in S_1} y_i
\end{align*} 
$$


The dot product above is a sum over an $\vert S_1\vert$-bit substring of $y$.  Since $y$ ranges over all $2^{n-1}$ bit strings, for each possible such substring $s$ there will be an equal number of strings $y$ where this substring equals $s$. Since there are $2^{\vert S_1 \vert}$ possible such substrings, there will be $2^{n-\vert S_1 \vert}$ strings $y$ such that

$$y_{i_0}, y_{i_1}, \dots, y_{i_{\vert S_1\vert-1}} = s_0, s_1, \ldots, s_{\vert S_1\vert-1}$$  

The case $a=\mathbf{0}_n$, where $S_1 = \emptyset$, occurs only when $x=z$. For this

$$\sum_y (-1)^{a \cdot y} = \sum_y (-1)^0 = 2^n$$

For $x\neq z \implies \vert S_1 \vert > 0$ we can write 

$$\begin{align*}
\sum_y (-1)^{a \cdot y}
&= \sum_{y=0}^{2^{n-1}} (-1)^{\sum_{i \in S_1} y_i} \\
&= 2^{n-\vert S_1 \vert} \sum_{s=0}^{2^\vert S_1\vert-1} (-1)^{\sum_{i=0}^{\vert S_1\vert-1}s_i} \\
&= 2^{n-\vert S_1 \vert} \sum_{s=0}^{2^\vert S_1\vert-1} (-1)^{N_1(s)} \\
&=2^{n-\vert S_1 \vert} \sum_{s, N_1(s) \text{odd}} (-1) + \sum_{s, N_1(s) \text{even}} 1 \\
&=2^{n-\vert S_1 \vert}\left(-2^{\vert S_1\vert-1} + 2^{\vert S_1\vert-1}\right)\\
&=0
\end{align*}$$

Combining these results we can write

$$\begin{align*}
H_2^{\otimes n} \ket{\phi} &= \frac{1}{2^n} \ket{x}\sum_z \left(\sum_y (-1)^{(x+z) \cdot y}\right) \ket{z} \\
&= \frac{1}{2^n} \ket{x}\left(\left(\sum_y (-1)^{\mathbf{0}_n \cdot y}\right) \ket{x} + \sum_{z\neq x}  \left(\sum_y (-1)^{(x+z) \cdot y}\right) \ket{z}\right) \\
&=\frac{1}{2^n} \ket{x}\left(2^n \ket{x} + \sum _{z\neq x} 0\cdot\ket{z}\right) \\
&=\ket{x, x}\end{align*}
$$


Therefore:
- The state obtained by Bob will be <span class='hi'>$\ket{x}$</span>.
- This implies that the IP protocol can be used to communicate <span class='hi'>$m=n$</span> qubits of quantum information from Alice to Bob.




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

#### Dihedral HSP and QFT

The part of the question where there seems to be an error is where it states

> Recall that the algorithm in lecture applied  $F_{\mathbb{Z}_N}$ , measured, and upon obtaining outcome $k$, yielded the state  $\vert{\psi _ k}\rangle  = (\vert{0}\rangle  + e^{2\pi iky}\vert {1}\rangle )/\sqrt{2}$.
>
> There is a procedure that will transform  $\vert \varphi_j\rangle$  into  $\vert \psi_k\rangle$ for some distribution over $k$ that depends on  $j$. If we start with a known value of $j$ then this yields a known value of $k$.

These are the questions that follow (with answers highlighted):

What is the procedure?

- <span class='hi'> Measure the first qubit.</span>
- Measure the second qubit.
- CNOT from first to second qubit, then measure second qubit.
- CNOT from second to first qubit, then measure first qubit.
- Something else.

To know $k$ do we need the outcome of the measurement?
- <span class='hi' >Yes</span>
- No

What value of $k$ do we obtain? If there are more than one possibility then write any one of them. 

<span class='hi hi-row' markdown=1>$j$</span>


However for these answers to be correct it must be that

$$\vert{\psi _ k}\rangle  = (\vert{0}\rangle  + e^{\frac{2\pi iky}{N}}\vert{1}\rangle )/\sqrt{2}$$

and not

$$\vert{\psi _ k}\rangle  = (\vert{0}\rangle  + e^{2\pi iky}\vert {1}\rangle )/\sqrt{2}$$

i.e. the phase of the second term is $2\pi iky/N$ and not $2\pi iky$.

To see this let us look at the results of the measurements.

We have that 

$$\begin{align*}
\vert \varphi_j \rangle &= \frac{1}{2}\left(
e^{\frac{2\pi i j x}{N}} \vert 00 \rangle
+ e^{-\frac{2\pi i j x}{N}} \vert 11 \rangle
+ e^{\frac{2\pi i j (x + y)}{N}} \vert 01 \rangle
+ e^{-\frac{2\pi i j (x + y)}{N}} \vert 10 \rangle
\right)
\\&= \frac{1}{2}\left(
e^{\frac{2\pi i j x}{N}} \vert 0 \rangle
 \left(\vert 0 \rangle
+ e^{\frac{2\pi i j y}{N}} \vert 1\rangle \right)
+ e^{\frac{-2\pi i j (x + y)}{N}} \vert 1 \rangle
 \left(\vert 0 \rangle
+ e^{\frac{2\pi i j y}{N}} \vert 1\rangle \right)
\right)
\\&=\frac{1}{\sqrt{2}}\left(
e^{\frac{2\pi i j x}{N}} \vert 0 \rangle
+ e^{\frac{-2\pi i j (x + y)}{N}} \vert 1\rangle
\right)
 \frac{1}{\sqrt{2}}\left(\vert 0 \rangle
+ e^{\frac{2\pi i j y}{N}} \vert 1\rangle \right)
\end{align*}$$

which means that whether we measure $\vert 0 \rangle$ or $\vert 1 \rangle$ for the first qubit, we always get the following state for the second qubit

$$\frac{1}{\sqrt{2}}\left(\vert 0 \rangle
+ e^{\frac{2\pi i j y}{N}} \vert 1\rangle \right)$$

where the phase is $2\pi i j y/N$ and not $2\pi i j y$ (with $j$ the value of $k$).