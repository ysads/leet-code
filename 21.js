function ListNode(val, next) {
  return {
    val: val === undefined ? 0 : val,
    next: next === undefined ? null : next,
  };
}

/**
 *
 * @param {ListNode[]} arr
 * @returns
 */
var buildList = function (arr) {
  let next = null;
  arr.reverse();
  for (const val of arr) {
    next = ListNode(val, next);
  }
  return next;
};

/**
 *
 * @param {ListNode} head
 */
var printList = function (head) {
  let node = head;
  let pr = [];
  while (node) {
    pr.push(node.val);
    node = node.next;
  }
  console.warn(pr.join(" > "));
};

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists2 = function (list1, list2) {
  var prev = undefined,
    curr = undefined,
    head = undefined,
    n1 = list1,
    n2 = list2;

  while (n1 && n2) {
    if (n1.val <= n2.val) {
      curr = ListNode(n1.val);
      n1 = n1.next;
    } else {
      curr = ListNode(n2.val);
      n2 = n2.next;
    }
    if (prev) {
      prev.next = curr;
    } else {
      head = curr;
    }
    prev = curr;
  }

  while (n1) {
    curr = ListNode(n1.val);
    if (prev) {
      prev.next = curr;
    } else {
      head = curr;
    }
    prev = curr;
    n1 = n1.next;
  }
  while (n2) {
    curr = ListNode(n2.val);
    if (prev) {
      prev.next = curr;
    } else {
      head = curr;
    }
    prev = curr;
    n2 = n2.next;
  }
  return head;
};

printList(mergeTwoLists(buildList([]), buildList([]))); // []

printList(mergeTwoLists(buildList([]), buildList([0]))); // [0]

printList(mergeTwoLists(buildList([1, 2]), buildList([]))); // [1, 2]

printList(mergeTwoLists(buildList([1, 2]), buildList([1]))); // [1,1,2]

printList(mergeTwoLists(buildList([1, 2, 4]), buildList([1, 3, 4]))); // [1,1,2,3,4,4]

printList(mergeTwoLists(buildList([1, 6, 8, 10, 11]), buildList([3, 4, 8]))); // [1,3,4,6,8,8,10,11]
