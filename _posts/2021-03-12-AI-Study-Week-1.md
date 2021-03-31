---
layout: post
title:  "AI Study Week 1 - Federated Learning 1"
date:   2021-01-12 2:01:20 +0000
categories: rc ai
---
<script>
    window.onload = function(){
        const NUM_IMPLEMENTATIONS = 2
        const MIN_LENGTH = 50
        const MAX_LENGTH = 150

        let summaries = document.querySelectorAll('.summary') 
        document.getElementById('total').innerText = summaries.length + NUM_IMPLEMENTATIONS
        var entries = 0;
        var implementations = 0;
        for(elem of summaries){
            var impl =  elem.parentNode.querySelectorAll('.implementation');
            if (impl.length > 0){
                implementations += 1
            }
            var span = document.createElement('span')
            var words = elem.innerText.trim().split(" ")
            if ((words.length > MIN_LENGTH) && (words.length <= MAX_LENGTH)){
                entries += 1
                span.innerText = 'DONE'
                if (impl.length > 0){
                    span.innerText = 'DONE++'
                }
                span.className = 'done'
            }
            if (words.length > MAX_LENGTH){
                span.innerText = 'TOO LONG'
                span.className = 'too'
            }
            if (words.length <= MIN_LENGTH){
                span.innerText = 'TOO BRIEF'
                span.className = 'too'
                if ((words.length == 1) && (words[0].length == "")){
                    span.innerText = 'TODO'
                    span.className = 'todo'
                }
            }
            
            elem.parentNode.insertBefore(span, elem)
        }
    let numDone = entries + implementations;
    document.getElementById('done').innerText = numDone;
    let total = parseFloat(document.getElementById('total').innerText)
    let percent = (100. * numDone) / (1. * total)
    document.getElementById('myBar').style.width = percent + "%"
    if (percent > 33){
        document.getElementById('myBar').style.backgroundColor = 'blue'
    }

    if (percent > 67){
        document.getElementById('myBar').style.backgroundColor = 'purple'
    }

    if (percent == 100){
        document.getElementById('myBar').style.backgroundColor = 'gold'
    }

    }
</script>
<style>
    #progressOuter{
        width: 80%;
        float: left
    }
    #details{
        width: 18%;
        float: right;
    }
    #myProgress {
    width: 100%;
    background-color: silver;
    }

    #myBar {
        width: 0;
        height: 20px;
        background-color: green;
    }
    .done{
        color: green;
    }
    .too{
        color: red;
    }
    .todo{
        color: blue;
    }
</style>

## Progress 
<div>
    <div id='progressOuter'>
        <div id="myProgress">
            <div id="myBar"></div> 
        </div>
    </div>
    <div id='details'>
        <span id='done'></span>
        <span>/</span>
        <span id='total'></span>
    </div>
</div>
<br>

## Federated Learning

### 1. ([Konečný et al. 16](https://arxiv.org/pdf/1610.02527.pdf)) Federated Optimization: Distributed Machine Learning for On-Device Intelligence, arXiv Preprint, 2016
<div class='paper'>
    <div class='summary'>
    </div>
</div>
<br>

### 2. ([Konečný et al. 16](https://arxiv.org/abs/1610.05492)) Federated Learning: Strategies for Improving Communication Efficiency, NIPS Workshop on Private Multi-Party Machine Learning 2016.
<div class='paper'>
    <div class='summary'> 
    </div>
    
</div>
<br>
### 3. ([McMahan et al. 17](http://proceedings.mlr.press/v54/mcmahan17a/mcmahan17a.pdf)) Communication-Efficient Learning of Deep Networks from Decentralized Data
<div class='paper'>
    <div class='summary'> 
    </div>
</div>
<br>
### 4. ([Rothchild et al. 20](https://proceedings.icml.cc/static/paper_files/icml/2020/5927-Paper.pdf)) FetchSGD: Communication-Efficient Federated Learning with Sketching, ICML 2020.
<div class='paper'>
    <div class='summary'>
    </div>
</div>
<br>
### 5. ([Pathak and Wainwright 20](https://papers.nips.cc/paper/2020/file/4ebd440d99504722d80de606ea8507da-Paper.pdf)) FedSplit: An Algorithmic Framework for Fast Federated Optimization, NeurIPS 2020.
<div class='paper'>
    <div class='summary'>
    </div>
</div>
<br>

## Interesting, new or recommended papers

### 6. ([Pathak and Wainwright 20](https://papers.nips.cc/paper/2020/file/4ebd440d99504722d80de606ea8507da-Paper.pdf)) FedSplit: An Algorithmic Framework for Fast Federated Optimization, NeurIPS 2020.
<div class='paper'>
    <div class='summary'>
    </div>
</div>
<br>

### 7. ([Pathak and Wainwright 20](https://papers.nips.cc/paper/2020/file/4ebd440d99504722d80de606ea8507da-Paper.pdf)) FedSplit: An Algorithmic Framework for Fast Federated Optimization, NeurIPS 2020.
<div class='paper'>
    <div class='summary'>
    </div>
</div>
<br>

### 8. ([Pathak and Wainwright 20](https://papers.nips.cc/paper/2020/file/4ebd440d99504722d80de606ea8507da-Paper.pdf)) FedSplit: An Algorithmic Framework for Fast Federated Optimization, NeurIPS 2020.
<div class='paper'>
    <div class='summary'>
    </div>
</div>
<br>
