<template>
  <div class="frontend-system-intro">
    <p><em>*** This is live documentation to showcase, customize and use a generic UX UI design system + micro frontend components library build on top of it to mantain consistency</em></p>
    
    <h1>Frontend System Library</h1>
    
    <p>Our frontend system is designed to address two critical aspects of modern web development:</p>
    <ol>
      <li>UI/UX Design Standardization</li>
      <li>Efficient Backend Service Integration</li>
    </ol>
    <p>This approach aims to create a scalable, maintainable, and user-centric frontend architecture.</p>
    
    <h2>01. Designer UX/UI Problematics</h2>
    <p>The first pillar of our system focuses on creating a robust frontend library that is tightly coupled with a system of style variables. This integration serves to:</p>
    <ul>
      <li>Enforce and maintain professional design standards</li>
      <li>Adhere to established psychological and communicational principles crucial for successful GUI development</li>
      <li>Provide a consistent user experience across the application</li>
    </ul>
    <p>By leveraging a centralized set of style variables, we ensure that design changes can be implemented systematically and efficiently, reducing inconsistencies and improving overall user interface coherence.</p>
    <Expandable title="pro/cons">
      <h2>UI/UX Design Standardization Analysis</h2>
  
      <h3>Correctness and Usefulness</h3>
      <p>This approach is both correct and potentially very useful. Many successful design systems (like Google's Material Design or IBM's Carbon) use similar principles.</p>
      
      <h3>Advantages</h3>
      <ol>
        <li><strong>Consistency:</strong> A centralized system of style variables ensures a consistent look and feel across the entire application.</li>
        <li><strong>Efficiency:</strong> Changes can be implemented globally by updating variables, saving time and reducing errors.</li>
        <li><strong>Scalability:</strong> As the project grows, new components can easily adhere to the established design principles.</li>
        <li><strong>Maintainability:</strong> Separating design variables from component logic makes the codebase easier to maintain.</li>
        <li><strong>Collaboration:</strong> Provides a common language for designers and developers to work together more effectively.</li>
      </ol>
      
      <h3>Potential Challenges</h3>
      <ol>
        <li><strong>Initial Setup:</strong> Creating a comprehensive system of variables and components can be time-consuming.</li>
        <li><strong>Learning Curve:</strong> Team members may need time to understand and properly use the system.</li>
        <li><strong>Flexibility:</strong> Highly standardized systems might sometimes limit creativity or unique design needs.</li>
        <li><strong>Performance:</strong> If not implemented carefully, a large set of variables could impact load times.</li>
      </ol>
      
      <h3>Recommendations</h3>
      <ol>
        <li>Ensure the system is well-documented for ease of use.</li>
        <li>Allow for some level of customization to handle edge cases.</li>
        <li>Regularly review and update the system based on user feedback and evolving design trends.</li>
        <li>Consider implementing a design token system for even greater flexibility and consistency.</li>
      </ol>
    </Expandable>

    <h2>02. Backend Services and API Integration</h2>
    <p>The second pillar addresses the challenge of integrating various backend services and APIs. Our proposed solution is based on the concept of micro-frontends, which involves:</p>
    <ul>
      <li>Creating isolated, self-contained components that manage specific services and their connections</li>
      <li>Organizing these components in a structured manner, e.g.:</li>
    </ul>
    <pre>
      <code>
  /components/SendMailForm/
    ├── SendMailForm.vue
    ├── saveForm.js
    ├── sendMail.js
    └── [Other necessary files for isolated functionality]
      </code>
    </pre>
    <p>This approach offers several advantages:</p>
    <ul>
      <li>Improved modularity and maintainability</li>
      <li>Easier testing and debugging of individual services</li>
      <li>Flexibility to update or replace services without affecting the entire application</li>
    </ul>
    <Expandable title="pro/cons">
      <h2>Backend Services and API Integration Analysis</h2>
  
      <h3>Correctness and Usefulness</h3>
      <p>The micro-frontend approach for backend integration is a valid and increasingly popular strategy, especially for large-scale applications.</p>
      
      <h3>Advantages</h3>
      <ol>
        <li><strong>Modularity:</strong> Each component is self-contained, making it easier to develop, test, and maintain.</li>
        <li><strong>Flexibility:</strong> Services can be updated or replaced individually without affecting the entire system.</li>
        <li><strong>Scalability:</strong> New services can be added as separate components without major refactoring.</li>
        <li><strong>Team Autonomy:</strong> Different teams can work on different services independently.</li>
        <li><strong>Technology Diversity:</strong> Each micro-frontend can potentially use different technologies if needed.</li>
      </ol>
      
      <h3>Potential Challenges</h3>
      <ol>
        <li><strong>Complexity:</strong> Managing multiple independent components can increase overall system complexity.</li>
        <li><strong>Performance:</strong> If not implemented carefully, loading multiple separate components could impact page load times.</li>
        <li><strong>Consistency:</strong> Ensuring a consistent user experience across independently developed components can be challenging.</li>
        <li><strong>Duplication:</strong> There's a risk of duplicating code or dependencies across different micro-frontends.</li>
        <li><strong>Integration Testing:</strong> Testing the entire system with multiple micro-frontends can be more complex.</li>
      </ol>
      
      <h3>Recommendations</h3>
      <ol>
        <li>Implement a robust integration strategy to ensure smooth communication between micro-frontends.</li>
        <li>Use a shared component library to maintain consistency across micro-frontends.</li>
        <li>Carefully manage shared dependencies to avoid conflicts and reduce duplication.</li>
        <li>Implement strong contracts between micro-frontends and backend services.</li>
        <li>Consider using tools like Module Federation to help manage micro-frontend architectures.</li>
      </ol>
    </Expandable>
  </div>
</template>

<script setup>
import Expandable from '../components/Expandable.vue';
</script>

<style scoped>

</style>