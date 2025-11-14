<template>
  <VCalendar />
  <VDatePicker v-model="date" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Calendar',
  data() {
    return {
      date: null,
      events: [
        {
          key: 'meeting',
          dates: '2025-11-15',
          highlight: { backgroundColor: '#42b983', color: 'white' },
          popover: { label: 'Team Meeting at 10 AM' }
        },
        {
          key: 'holiday',
          dates: '2025-12-25',
          highlight: { backgroundColor: '#ff6666', color: 'white' },
          popover: { label: 'Christmas Day 🎄' }
        },
        {
          key: 'conference',
          dates: { start: '2025-11-20', end: '2025-11-22' },
          highlight: { backgroundColor: '#ffa500', color: 'black' },
          popover: { label: 'Tech Conference (3 days)' }
        }
      ]
    };
  }
});
</script>
<style scoped>
:deep(.vc-container) {
  max-width: 700px;
  margin: 0 auto;
}
</style>
