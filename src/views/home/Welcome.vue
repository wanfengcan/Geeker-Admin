<template>
  <div>
    <Hero v-if="shouldShow('hero')" />
    <About v-if="shouldShow('aboutus')" />
    <Services v-if="shouldShow('services')" />
    <Contact v-if="shouldShow('contact')" />
    <footer class="text-center py-4 bg-light">© 2025 巨速软件工作室. All Rights Reserved.</footer>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import Hero from "@/components/Home/Hero.vue";
import About from "@/components/Home/About.vue";
import Services from "@/components/Home/Services.vue";
import Contact from "@/components/Home/Contact.vue";

interface Props {
  showAll: boolean;
  section?: "hero" | "about" | "services" | "contact";
}

const props = withDefaults(defineProps<Props>(), {
  showAll: false
});

const shouldShow = (componentSection: string) => {
  return props.showAll || props.section === componentSection;
};
</script>
