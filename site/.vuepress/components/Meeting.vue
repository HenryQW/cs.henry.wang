
<template>
<div class="meetingBlock" :id="date">
  <table>
    <tr>
      <th>Date</th>
      <th>Next Meeting</th>
      <th>Members</th>
    </tr>
    <tr>
      <td>{{date}}</td>
      <td>{{nextDate}}</td>
      <td>{{members}}</td>
    </tr>
  </table>
  <p>
    <h4>Topic Discussed:</h4>
    <slot name="topic">
    </slot>
  </p>
  <p>
    <h4>Progress:</h4>
    <slot name="prog">
    </slot>
  </p>
  <p>
    <h4>Todo:</h4>
    <slot name="todo">
    </slot>
  </p>
</div>
</template>
<script>
export default {
  props: {
    date: {
      type: String,
      required: true
    },
    nextDate: {
      type: String,
      required: true
    },
    members: {
      type: String,
      required: true
    },
  }
}
</script>
<style>
li.params p {
  display: inline;
  }
.meetingBlock {
  margin: 1rem 0 2rem;
}
</style>
