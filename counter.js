const counter = {
  count: 0,
  increment(){
    this.count++;
  },
  decrement(){
    this.count--;
  },
  reset(){
    this.count = 0;
  },
  updateCounter(){
    document.getElementById('value').textContent = this.count;
  }
};

document.getElementById('increment').addEventListener('click',
  function(){
    counter.increment();
    counter.updateCounter();
  }
);

document.getElementById('decrement').addEventListener('click',
  function(){
    counter.decrement();
    counter.updateCounter();
  }
);

document.getElementById('reset').addEventListener('click',
  function(){
    counter.reset();
    counter.updateCounter();
  }
);