class Queue {
  private items: Array<string>;
  constructor() {
    this.items = [];
  }
  enqueue(item: string) {
    this.items.push(item);
  }
  print() {
    console.log(this.items.toString());
  }
  isEmpty() {
    return this.items.length == 0;
  }
  front() {
    return this.items[0];
  }
  dequeue() {
    return this.items.shift();
  }
  size() {
    return this.items.length;
  }
}

interface IPriorityElement {
  item: string;
  priority: number;
}

class PriorityQueue {
  private items: Array<IPriorityElement>;
  constructor() {
    this.items = [];
  }
  enqueue(item: string, priority: number = 2) {
    let priorityElement: IPriorityElement = {
      item: '',
      priority: 0
    };
    priorityElement.item = item;
    priorityElement.priority = priority;
    let added: boolean = false;
    for (let i = 0; i < this.items.length; i++) {
      const ele = this.items[i];
      if (priority < ele.priority) {
        this.items.splice(i, 0, priorityElement);
        added = true;
        break;
      }
    }
    if (!added) {
      this.items.push(priorityElement);
    }
  }
  print() {
    for (const item of this.items) {
      console.log(`${item.item}-${item.priority}`);
    }
  }
  isEmpty() {
    return this.items.length == 0;
  }
  front() {
    return this.items[0];
  }
  dequeue() {
    return this.items.shift();
  }
  size() {
    return this.items.length;
  }
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue('jack', 2);
priorityQueue.enqueue('mi', 1);
priorityQueue.enqueue('john', 3);
priorityQueue.enqueue('john', 1);
priorityQueue.print();

function hotPotato(nameList: Array<string>, num: number) {
  let queue = new Queue(); // {1}

  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]); // {2}
  }

  let eliminated: string | undefined = '';
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue() as string); // {3}
    }
    eliminated = queue.dequeue(); // {4}
    console.log(eliminated + '在击鼓传花游戏中被淘汰。');
  }

  return queue.dequeue(); // {5}
}

let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
let winner = hotPotato(names, 7);
console.log('The winner is: ' + winner);
