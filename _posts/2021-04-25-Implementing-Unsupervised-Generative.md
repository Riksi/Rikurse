---
layout: post
title:  "Implementing Unsupervised Learning and Generative Models"
date:   2021-04-25 12:01:20 +0000
categories: paper ai
---

If you can't figure out the answer to any of the TODOs here transfer them to some other document but don't avoid publishing this blog post for that reason.

## Flow models

- X, Z, p_Z - find p_X through change of variables and finding the determinant 

- Affine coupling
    - Partition
    - Copy elements from some of the bins
    - Use other elements to obtain weight and bias to transform the rest via an affine transform 
    - Partition is defined by a mask $b$
    - Easy way to do this:
        $$
        y = b \odot(x)  + (1 - b)\odot(\exp(s(b \odot(x) ))\odot x + t(b \odot(x) ))
        $$

(TODO: add details for all of these points)
- You can also compose functions in this way and by use of the chain rule and the fact that $\lvertAB\rvert = \lvertA\rvert\lvertB\rvert$ the Jacobian and hence the determinant can be found for each part on its own and multiplied 
- Two kinds of masking are used - partition spatially and across channels
- After every few blocks, a squeeze step pushes some of the spatial dimensions into the channels 
- TODO: understand the BN used here 

An important advantage here is that there are no constraints for $s$ and $t$ that are introduced by this approach because:
- They don't need to be differentiated to find the determinant of the Jacobian
- They don't need to be inverted in order to invert the output


## VAE
The idea is that you model the data $x$ as coming from a conditional distribution given some latent variable $z$ associated with each datapoint. 

You would like to find the parameters $\theta$ for a conditional distribtion $p_{\theta}(\mathbf{z} \vert |\mathbf{z})$  as well as a distribution $p_{\theta}(z)$ but you can't do this simply by availing of Bayes rule.

Are you are trying to do is to find a distribution over z given x whilst assuming a distribution over x given z or the other way round?

For one thing you don't know $z$ or $\theta$ (TODO: why does this matter?)

You could assume some form of the distribution and try to find parameters that best match the data by optimising the marginal likelihood but in practice it is usually not possible to evaluate the integral $\int\p_\theta(z)p_\theta(x\vert z)/p_\theta(x)$.

You can approximate by using another distribution $q_\phi(z\vert x)$ and optimising it until it matches $p_\theta(z|x)$. It turns out that:
- You can do this without knowing $p_\theta(z|x)$
- By doing so you optimise a lower bound on the likelihood $p_\theta(x)$ thereby increasing it (TODO: why is this good exactly)

However unless you make some assumptions about the form of q, this is also not possible.

The VAE gets around this by modelling $q$ as a neural network and optimising a Monte Carlo estimate of the expected value with respect to $\phi$ and $\theta$.

The system works like this during training:

1. Sample $x$
2. Predict parameters for $q_{\phi}(z \vert x)$
3. Sample $z$
4. Find the probability of $z$ according to $q$ based on these parameters
5. Predict parameters for $p_{\theta}(x \vert z)$
6. Find $p_{\theta}(x \vert z)$

To generate images you would just sample $z$ from $p_{\theta}(\mathbf{z})$, run step 5 and use the parameters to sample from $p_{\theta}(x \vert z)$. Note that the dependence on $z$ (and $x$ in case of $q$) is due to the fact that this is used as an input to a neural network to predict the parameters. 

The problem is that you can't differentiate via step 3. 

To get around that you turn the randomness into an input via the "reparameterisation trick" whereby you sample a noise value $\epislon$ from some distribution and transform that to $z$ via some function $g_\phi(\epislon, x)$.

## GANs

BiGAN has an encoder in addition to the generator. This maps from images back to the latent space. The discriminator gets the pairs (x, E(x)) and (G(z), z), real and fake.

It turns out that the optimal discriminator is similar to that for the regular GAN with difference that the model optimises a JS divergence between distributions over the data as well as the latent space not just the data.

So they train unsupervised and use the E(x) later for supervised tasks. 

The way x and z are used in the discriminator is that x is first input then prior to each layer z is transformed to have the same number of features as the output of the previous part and added to this (TODO: confirm if this is what is done).

It is also possible to transform X and Z to some other space by introducing transforms $g_X$ and $g_Z$. An example is resizing the images. The encoder and generator are considered to map to the same space. For example the generate would generate an image of smaller resolution correspondingly. 


Autoregressive models can give you a probability for the image but they don't have a notion of latent variables.



