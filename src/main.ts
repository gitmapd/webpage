import { createApp } from 'vue';
import App from './App.vue';
import { setupCalendar } from 'v-calendar';
import 'v-calendar/style.css';

const app = createApp(App);

// Register V-Calendar globally
app.use(setupCalendar, {});

app.mount('#app');

