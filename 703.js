class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.pq = new PriorityQueue((a, b) => a - b);
    for (const num of nums) {
      this.add(num);
    }
  }

  add(val) {
    this.pq.offer(val);
    if (this.pq.size() > this.k) {
      this.pq.poll();
    }
    return this.pq.peek();
  }
}

class PriorityQueue {
  constructor(comparator) {
    this.comparator = comparator;
    this.data = [];
  }

  offer(val) {
    this.data.push(val);
    this.bubbleUp(this.data.length - 1);
  }

  peek() {
    return this.data[0];
  }

  poll() {
    if (this.size() === 0) {
      throw new Error("Queue is empty");
    }
    const val = this.data[0];
    const last = this.data.pop();
    if (this.data.length > 0) {
      this.data[0] = last;
      this.bubbleDown(0);
    }
    return val;
  }

  size() {
    return this.data.length;
  }

  bubbleUp(i) {
    while (i > 0) {
      const j = ((i + 1) >>> 1) - 1;
      if (this.comparator(this.data[i], this.data[j]) < 0) {
        this.swap(i, j);
        i = j;
      } else {
        break;
      }
    }
  }

  bubbleDown(i) {
    while (true) {
      const left = (i << 1) + 1;
      const right = (i + 1) << 1;
      let smallest = i;
      if (left < this.data.length && this.comparator(this.data[left], this.data[smallest]) < 0) {
        smallest = left;
      }
      if (right < this.data.length && this.comparator(this.data[right], this.data[smallest]) < 0) {
        smallest = right;
      }
      if (smallest !== i) {
        this.swap(i, smallest);
        i = smallest;
      } else {
        break;
      }
    }
  }

  swap(i, j) {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }
}
