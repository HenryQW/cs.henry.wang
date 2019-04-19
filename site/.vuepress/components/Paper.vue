
<template>
  <div class="paperSumBlock" :id="index">
    <div>
      <h3>The Concept</h3>
      <slot name="1">
      </slot>
    </div>
    <div>
      <h3>The Implementation</h3>
      <slot name="2">
      </slot>
    </div>
    <div>
      <h3>Related Work</h3>
      <slot name="3">
      </slot>
    </div>
    <div>
      <h3>Data Characteristics</h3>
      <slot name="4">
      </slot>
    </div>
    <div>
      <h3>Visualisation Techniques</h3>
      <slot name="5">
      </slot>
    </div>
    <div>
      <h3>Application Domain</h3>
      <slot name="6">
      </slot>
    </div>
  </div>
</template>
