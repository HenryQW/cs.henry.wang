
<template>
  <div class="meetingBlock" :id="date">
    <table>
      <tr>
        <th>No</th>
        <th>Date</th>
        <th>Next Meeting</th>
        <th>Members</th>
      </tr>
      <tr>
        <td>{{index}}</td>
        <td>{{date}}</td>
        <td>{{nextDate}}</td>
        <td>{{members}}</td>
      </tr>
    </table>
    <div>
      <h4>Topic Discussed:</h4>
      <slot name="topic"></slot>
    </div>
    <div>
      <h4>Progress:</h4>
      <slot name="prog"></slot>
    </div>
    <div>
      <h4>Todo:</h4>
      <slot name="todo"></slot>
      <!-- <table>
        <tr>
          <th>Todo</th>
          <th>Progress</th>
        </tr>
        <tr>
          <td valign="top">
            <slot name="todo"></slot>
          </td>
          <td valign="top">
            <slot name="todoProg"></slot>
          </td>
        </tr>
      </table>-->
    </div>
    <div v-if="$slots.todoProg">
      <h4>Todo Progress:</h4>
      <slot name="todoProg"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    index: {
      type: String,
      required: true
    },
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
    }
  }
};
</script>
<style>
li.params p {
  display: inline;
}
.meetingBlock {
  margin: 1rem 0 2rem;
}
</style>
