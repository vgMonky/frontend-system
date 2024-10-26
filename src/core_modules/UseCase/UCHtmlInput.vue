<template>
    <h2>HTML Input Types</h2>
    
    <div class="input-group">
      <label for="text">Text:</label>
      <input type="text" id="text" placeholder="Enter text">
    </div>
  
    <div class="input-group">
      <label for="password">Password:</label>
      <input type="password" id="password" placeholder="Enter password">
    </div>
  
    <div class="input-group">
      <label for="number">Number:</label>
      <input type="number" id="number" placeholder="Enter number">
    </div>
  
    <div class="input-group">
      <label for="email">Email:</label>
      <input type="email" id="email" placeholder="Enter email">
    </div>
  
    <div class="input-group">
      <label for="date">Date:</label>
      <input type="date" id="date">
    </div>
  
    <div class="input-group">
      <label for="time">Time:</label>
      <input type="time" id="time">
    </div>
  
    <div class="input-group">
      <label for="color">Color:</label>
      <input type="color" id="color">
    </div>
  
    <div class="input-group">
      <label for="range">Range:</label>
      <input type="range" id="range" min="0" max="100">
    </div>
  
    <div class="input-group">
      <label for="checkbox">Checkbox:</label>
      <input type="checkbox" id="checkbox">
    </div>
  
    <div class="input-group">
      <label>Radio:</label>
      <input type="radio" id="radio1" name="radioGroup" value="1">
      <label for="radio1">Option 1</label>
      <input type="radio" id="radio2" name="radioGroup" value="2">
      <label for="radio2">Option 2</label>
    </div>
  
    <div class="input-group">
      <label for="file">File:</label>
      <input type="file" id="file">
    </div>
  
    <div class="input-group">
      <label for="textarea">Textarea:</label>
      <textarea id="textarea" rows="4" placeholder="Enter multiple lines of text"></textarea>
    </div>
  
    <div class="input-group">
      <label for="select">Select:</label>
      <select id="select">
        <option value="">Choose an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
    </div>
  </template>
  
  <script setup>

  </script>
  
  <style scoped>
  .input-group {
    margin-bottom: 1rem;
  }
  
  label {
    display: inline-block;
    width: 100px;
    margin-right: 1rem;
  }
  

  </style>