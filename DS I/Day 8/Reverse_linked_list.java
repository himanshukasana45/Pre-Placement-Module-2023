public class Solution {
    public ListNode reverseList(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }
        ListNode cur = head;
        head = null;
        while (cur != null) {
            ListNode next = cur.next;
            cur.next = head;
            head = cur;
            cur = next;
        }
        return head;
    }
}