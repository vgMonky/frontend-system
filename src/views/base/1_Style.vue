<template>
  <div class="head">
    <h1>Style and Variables</h1>
    <p>In this section you can edit the whole style in a global way. Everithing edited here will be applyed live and will automaticly afect both light and dark theme.</p>
    <br>
    <p>The system will adjust automatically the style to Mobile size and its constrains.</p>
  </div>
  <div class="contained">
    <em><p>* We recomend toggle Between Themes while editing the variables. You can use [ Alt + s ] keybind. </p></em>
    <br>
    <ToggleTheme />
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
import TextEditor from '@/feature_modules/StyleVariables/TextEditor.vue';
import ColorEditor from '@/feature_modules/StyleVariables/ColorEditor.vue';
import ShapeEditor from '@/feature_modules/StyleVariables/ShapeEditor.vue';
import Expandable from '@/components/Expandable.vue';
import ToggleTheme from '@/components/ToggleTheme.vue';

</script>

<style scoped>
.head{
  margin-bottom: 30px;
}
button-bold{
  text-align: center;
}
</style>