<template>
  <div class="meetingBlock" :id="date">
    <table>
      <tr>
        <th>No</th>
        <th>Date</th>
        <th v-if="nextDate">Next Meeting</th>
        <th>Members</th>
      </tr>
      <tr>
        <td>{{ index }}</td>
        <td>{{ date }}</td>
        <td v-if="nextDate">{{ nextDate }}</td>
        <td>{{ members }}</td>
      </tr>
    </table>

    <div>
      <h3>Topic Discussed</h3>
      <slot name="topic"></slot>
    </div>
    <div v-if="$slots.prog">
      <h3>Progress</h3>
      <slot name="prog"></slot>
    </div>
    <div v-if="$slots.todo">
      <h3>Todo</h3>
      <slot name="todo"></slot>
    </div>
    <div v-if="$slots.todoProg">
      <h3>Todo Progress</h3>
      <slot name="todoProg"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    index: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    nextDate: {
      type: String,
      required: false,
    },
    members: {
      type: String,
      required: true,
    },
  },
};
</script>
<style>
li.params p {
  display: inline;
}
.meetingBlock {
  margin: 1rem 0 2rem;
  page-break-after: always;
}
</style>
