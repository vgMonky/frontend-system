<template>


  <div class="landing-page">

    <div class="hero">
      <div class="glass-container"></div>
      <div class="color-container"></div>
      <div class="content-container">
        <h1>Frontend System Documentation</h1>
        <h4 class="hero-subtitle">Empowering rapid content creation with constraint-driven development</h4>
        <div class="cta-buttons">
          <button class="cta-button contained bold" @click="scrollToSection('workflow')">Get Started</button>
          <button class="cta-button contained quiet" @click="scrollToSection('features')">Explore Features</button>
        </div>
      </div>
    </div>



    <main class="content">
      <section id="philosophy">
        <h4>1. Design Philosophy: Constraint-Driven Development</h4>
        <p>Our system adheres to the principle of "Designed by Constraints." Like specialized tools crafted for specific tasks, our components are tailored to meet particular needs efficiently. While versatility is valued, each element is primarily shaped by its intended purpose within the system.</p>
      </section>

      <div class="text-storage-test">
        <h2>Text Storage Test</h2>
        <TextInput />
        <TextViewer />
      </div>

      <section id="features">
        <h4>3. Core Features</h4>
        <div class="feature-grid">
          <div class="feature-item contained">
            <h4>Component Library</h4>
            <p>Built on a generic style variable system, ensuring global consistency and alignment.</p>
          </div>
          <div class="feature-item contained">
            <h4>Edit Mode</h4>
            <p>Toggleable development environment for seamless transitions between user and developer views.</p>
          </div>
          <div class="feature-item contained">
            <h4>Navigation System</h4>
            <p>Facilitates view creation with automated route mapping.</p>
          </div>
          <div class="feature-item contained">
            <h4>AI-Assisted Content Creation</h4>
            <p>Utilizes AI to format content based on the system's library documentation.</p>
          </div>
        </div>
      </section>

      <section id="workflow">
        <h4>4. Workflow Overview</h4>
        <ol>
          <li>Style: Configure global variable style system</li>
          <li>Components: Explore the documented library</li>
          <li>Edit Mode: Toggle development environment</li>
          <li>Create: Generate content manually or with AI assistance</li>
        </ol>
      </section>

      <section id="for-developers">
        <h4>5. For Developers</h4>
        <p>This repository serves as both a live template for rapid content production and a base system ready for extension. Developers are encouraged to fork the repository, take ownership of the code, and expand upon the existing framework.</p>
      </section>

    </main>
  </div>
</template>

<script setup>
import TextInput from '../feature_modules/text_database/TextInput.vue'
import TextViewer from '../feature_modules/text_database/TextViewer.vue'

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.hero {
  position: relative;
  border: 1px dashed var(--c2);
  border-radius: var(--r0);
  text-align: center;
  padding: 4rem 2rem;
  margin-bottom: 2rem;
  overflow: hidden;
}

.glass-container, .color-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.glass-container {
  backdrop-filter: blur(20px);
  z-index: 1;
}

.color-container {
  background-color: var(--c3);
  opacity: 0.7;
  z-index: 2;
}

.content-container {
  position: relative;
  z-index: 3;
}

.hero-subtitle {
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}


.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-item {
  opacity: 0.8;
  background-color: var(--c3);
  box-shadow: var(--sh);
}

ol {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

section {
  margin-bottom: 3rem;
}
</style>