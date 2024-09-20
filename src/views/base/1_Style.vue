<template>
  <div class="head">
    <h1>Style and Variables</h1>
    <p>In this section you can edit the whole style in a global way. Everything edited here will be applied live and will automatically affect both light and dark theme.</p>
    <br>
    <p>The system will adjust automatically the style to Mobile size and its constraints.</p>
  </div>
  <div class="contained">
    <em><p>* We recommend toggling between themes while editing the variables. You can use [ Alt + s ] keybind. </p></em>
    <br>
    <ToggleTheme />
  </div>
  <div class="style-actions">
    <button @click="downloadStyle" class="button-bold">
      <Download class="icon" />
      Download Current Style
    </button>
    <input
      type="file"
      ref="fileInput"
      style="display: none;"
      @change="importStyle"
      accept=".json"
    >
    <button @click="triggerFileInput" class="button-bold">
      <Upload class="icon" />
      Import Style
    </button>
  </div>
  <br><br>
  <Expandable title="Color Editor" titleopen="Hide Color Editor">
    <ColorEditor/>
  </Expandable>
  <Expandable title="Text Editor" titleopen="Hide Text Editor">
    <TextEditor/>
  </Expandable>
  <Expandable title="Shape Editor" titleopen="Hide Shape Editor">
    <ShapeEditor/>
  </Expandable>
</template>

<script setup>
import { ref } from 'vue';
import TextEditor from '@/feature_modules/StyleVariables/TextEditor.vue';
import ColorEditor from '@/feature_modules/StyleVariables/ColorEditor.vue';
import ShapeEditor from '@/feature_modules/StyleVariables/ShapeEditor.vue';
import Expandable from '@/components/Expandable.vue';
import ToggleTheme from '@/components/ToggleTheme.vue';
import { exportAllVariables, importAllVariables } from '@/feature_modules/StyleVariables/variableManager';
import { Download, Upload } from 'lucide-vue-next';

const fileInput = ref(null);

const downloadStyle = () => {
  exportAllVariables();
};

const triggerFileInput = () => {
  fileInput.value.click();
};

const importStyle = (event) => {
  const file = event.target.files[0];
  if (file) {
    importAllVariables(file)
      .then((message) => {
        console.log(message);
        alert('Style imported successfully!');
      })
      .catch((error) => {
        console.error(error);
        alert('Error importing style. Please check the file and try again.');
      });
  }
};
</script>

<style scoped>
.head{
  margin-bottom: 30px;
}
button-bold{
  text-align: center;
}
</style>