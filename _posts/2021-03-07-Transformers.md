---
layout: post
title:  "Transformers"
date:   2021-02-08 12:01:20 +0000
categories: paper
---

There is really only one idea behind transformers and that is attention. This is aptly captured in the title of the paper which introduced this architecture: "Attention is All You Need". Attention is not a new concept. It was used notably previously in sequence to sequence models. 

Question - when was the earliest use of attention?

Data is represented as a sequence of tokens. It could be a list of words, the pixels in an image or any collection of items which are related in some way but should also be kept distinct. 

Question - does order matter?

The basic model consists of two parts an encoder and a decoder. Each of the two parts consists of several stages. At each stage of the encoder the model starts off with a representation of the input sequence and tries to generate better representation of the input sequence. To generate a representation for a given element the model "looks" at all the elements of the sequence, decides which are likely to be the most relevant in relation to this particular element and updates the representation accordingly. This process is attention.

Mathematically ... 


If you compare this to the other important types of models - CNNs and RNNs you notice that there is no notion of locality. In CNNs the kernel specifies a region around the pixel that will used to update the representation at that location. Over many steps 

In RNNs hidden states from all earlier timesteps can in theory influence the present timestep but 


In the Transformer all positions have equal status relative to every position.

You can see the problem with this

- No positional info


Decoder

One of the most interesting aspects for me regarding transformers is the way in which people have tried to overcome this problem.

## Less attention

In practice and we can see this intuitively most locations will not be important in updating the representation of a given location. This motivates approaches to restrict the locations for which the attention map needs to be computed.

The key idea is how to choose these regions. 
- Sparse Transformer
- Reformer 
- Big Bird
- Image Transformer 

In some cases 


## Less data

In Transformer XL they take advantage of the ability of transformers to treat all positions equally and thus to make use of long range dependencies by saving representations from earlier stages and using them the update the present representations but not the weights.

TODO: explain precisely how this saves computation

In Taming Transformers and DALL-E they don't directly generate the image pixels but train an independent model that is applied to represent images in terms of "codes" where the number of codes per image is much smaller than the number of pixels. Essentially this is a compressed representation of the image. Provided that there is a way to decode these compressed representations we can now just generate sequences in terms of codes and subsequently decode them to generate images. 


## Hybrid approaches

The idea here is to used conv layers until the image resolution is small enough that it becomes feasible to use attention layers in an unmodified form.



## Big Transformers
They have been used to obtain impressive performance on language modelling tasks like BERT and GPT. 


## The notion of a sequence

Another interesting idea that emerges is what consititutes a sequence. Transformer-XL introduces the notion of relative encodings to make it possible to process arbitrarily long sequences.

Whilst text typically has an inherent ordering where one unit of writing follows the next, that is not the case with images. Typical auto-regressive models process images left to right top to bottom but in Taming Transformers they experiment with various types of order. 