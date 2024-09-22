<template>
    <div class="home">
      <header>
        <h1>PrecisionCut Laser Engraving</h1>
        <nav>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
  
      <main>
        <section id="hero">
          <h2>Bring Your Ideas to Life with Precision Laser Engraving</h2>
          <p>Transform ordinary materials into extraordinary works of art. From personalized gifts to industrial marking, we've got you covered.</p>
          <a href="#quote" class="cta-button">Get a Free Quote</a>
        </section>
  
        <section id="services">
          <h2>Our Services</h2>
          <ul>
            <li v-for="service in services" :key="service">{{ service }}</li>
          </ul>
          <p>Custom designs and bulk orders welcome!</p>
        </section>
  
        <section id="featured-work">
          <h2>Featured Work</h2>
          <div class="gallery">
            <img v-for="image in featuredImages" :key="image.alt" :src="image.src" :alt="image.alt">
          </div>
          <a href="#portfolio">View Full Portfolio</a>
        </section>
  
        <section id="why-choose-us">
          <h2>Why Choose PrecisionCut?</h2>
          <ul>
            <li v-for="reason in choosingReasons" :key="reason">{{ reason }}</li>
          </ul>
        </section>
  
        <section id="quote">
          <h2>Ready to Start Your Project?</h2>
          <p>Get in touch for a free consultation and quote.</p>
          <form @submit.prevent="submitForm">
            <input v-model="form.name" type="text" placeholder="Name" required>
            <input v-model="form.email" type="email" placeholder="Email" required>
            <textarea v-model="form.message" placeholder="Tell us about your project"></textarea>
            <button type="submit">Request Quote</button>
          </form>
        </section>
      </main>
  
      <footer>
        <p>&copy; {{ currentYear }} PrecisionCut Laser Engraving. All rights reserved.</p>
        <nav>
          <a href="#privacy">Privacy Policy</a> |
          <a href="#terms">Terms of Service</a>
        </nav>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const services = ref([
    'Wood Engraving',
    'Metal Etching',
    'Glass Customization',
    'Acrylic Designs'
  ])
  
  const featuredImages = ref([
    { src: '/api/placeholder/300/200', alt: 'Wooden box with intricate floral design' },
    { src: '/api/placeholder/300/200', alt: 'Metal business card with company logo' },
    { src: '/api/placeholder/300/200', alt: 'Personalized glass award' }
  ])
  
  const choosingReasons = ref([
    'State-of-the-art laser technology',
    'Expert designers and technicians',
    'Quick turnaround times',
    'Satisfaction guaranteed'
  ])
  
  const form = ref({
    name: '',
    email: '',
    message: ''
  })
  
  const currentYear = computed(() => new Date().getFullYear())
  
  const submitForm = () => {
    // Handle form submission logic here
    console.log('Form submitted:', form.value)
    // Reset form after submission
    form.value = { name: '', email: '', message: '' }
  }
  </script>