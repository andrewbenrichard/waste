<template>
  <div class="row">
    <div class="col-lg-12" v-for="(event, id) in events" :key="id">
      <div class="section-bg">
        <div
          class="section-absolute-bg absolute-bg-1"
          v-bind:style="{ 'background-image': 'url(/uploads/' + event.event_img + ')' }"
        ></div>
        <div class="row">
          <div class="offset-6 col-lg-6 col-md-6">
            <div class="single-event">
              <p class="event-date">
                <i class="las la-calendar-check"></i>
                {{event.event_date}}
              </p>
              <h6>{{ event.event_name }}</h6>
              <p class="event-meta">
                <i class="las la-clock"></i>
                <span>
                  {{ event.event_time }} |
                  <i class="las la-map-marker"></i>
                </span>
                <span>{{event.event_location}}</span>
              </p>
              <p>{{event.event_theme}}</p>
              <router-link :to="'/event/'+event.event_slug">Learn More</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {},
  data() {
    return {};
  },
  props: ["events"],
  methods: {}
};
</script>