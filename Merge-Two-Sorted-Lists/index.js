var mergeLists = function (l1, l2) {
  if (!l1 || !l2) {
    return l1 || l2;
  }
  if (l1.val > l2.val) {
    [l2, l1] = [l1, l2];
  }

  l1.next = mergeLists(l1.next, l2);

  return l1;
};
