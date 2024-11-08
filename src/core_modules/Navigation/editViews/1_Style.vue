<template>
  <div class="head">
    <h1>Style and Variables</h1>
    <p>In this section you can edit the whole style in a global way. Everything edited here will be applied live and will automatically affect both light and dark theme.</p>
    <br>
    <p>The system will adjust automatically the style to Mobile size and its constraints.</p>
  </div>
  <div class="contained">
    <p>Dark and Light theme.</p>
    <br>
    <em><p class="ps">* We recommend toggling between themes while editing the variables. **Set keybind for this** </p></em>
    <br>
    <ToggleTheme />
  </div>
  
  <div class="style-actions">
    <div>
      <button class="" @click="applyRandomStyle">
        <Rainbow/>
        Randome Style
      </button>
    </div>
    <div>
      <button class="quiet" @click="downloadStyle">
        <Download class="icon" />
        Download Current Style
      </button>
    </div>
    <div>
      <input
        type="file"
        ref="fileInput"
        style="display: none;"
        @change="importStyle"
        accept=".json"
      >
      <button class="quiet" @click="triggerFileInput">
        <Upload class="icon" />
        Import Style
      </button>
    </div>
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
import TextEditor from '@/core_modules/StyleVariables/TextEditor.vue';
import ColorEditor from '@/core_modules/StyleVariables/ColorEditor.vue';
import ShapeEditor from '@/core_modules/StyleVariables/ShapeEditor.vue';
import Expandable from '@/core_modules/free_components/Expandable.vue';
import ToggleTheme from '@/core_modules/free_components/ToggleTheme.vue';
import { exportAllVariables, importAllVariables } from '@/core_modules/StyleVariables/variableManager';
import { Download, Upload , Rainbow} from 'lucide-vue-next';
import { importRandomStyle } from '@/core_modules/StyleVariables/save/savedStyleManager';

const applyRandomStyle = () => {
  importRandomStyle();
};

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
.style-actions{
  display: flex;
  flex-direction: column;
  gap: 18px;
}
</style>