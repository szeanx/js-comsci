import React from "react";
import "./tree.css";
import { TreeViz } from "./tree-visualizer";
import _ from "lodash";

class Tree {
  constructor() {
    this.root = null;
  }
  add(value) {
    // logic if this is the root
    if (this.root === null) this.root = new Node(value);
    else {
      let current = this.root;
      while (true) {
        if (current.value > value) {
          // go left

          if (current.left) {
            current = current.left;
          } else {
            current.left = new Node(value);
            // break out of the loop
            break;
          }
        } else {
          //go right
          if (current.right) {
            current = current.right;
          } else {
            current.right = new Node(value);
            // break out of the loop
            break;
          }
        }
      }
    }
    return this;
    // find the correct place to add
  }
  toObject() {
    return this.root;
  }
}

// you might consider using a Node class too
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default function TreeComponent() {
  const nums = _.shuffle(_.range(20));
  const tree = new Tree();
  nums.map((num) => tree.add(num));
  const objs = tree.toObject();
  return <TreeViz root={objs} />;
}
