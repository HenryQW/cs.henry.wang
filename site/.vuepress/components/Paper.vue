<template>
  <div class="paperSumBlock">
    <div v-if="$slots.basic">
      <slot name="basic"></slot>
    </div>
    <div v-if="$slots.concept">
      <h3>Concept</h3>
      <slot name="concept"></slot>
    </div>
    <div v-if="$slots.implementation">
      <h3>Implementation</h3>
      <slot name="implementation"></slot>
    </div>
    <div v-if="$slots.classification">
      <h3>Classification</h3>
      <slot name="classification"></slot>
    </div>
    <div v-if="$slots.related">
      <h3>Related Work</h3>
      <slot name="related"></slot>
    </div>
    <div v-if="$slots.data">
      <h3>Data Characteristics</h3>
      <slot name="data"></slot>
    </div>
    <div v-if="$slots.challenge">
      <h3>Challenges</h3>
      <slot name="challenge"></slot>
    </div>
    <div v-if="$slots.unsolved">
      <h3>Unsolved Problems</h3>
      <slot name="unsolved"></slot>
    </div>
    <div v-if="$slots.technique">
      <h3>Visualization Techniques</h3>
      <slot name="technique"></slot>
    </div>
    <div v-if="$slots.cited">
      <h3>Papers Cited</h3>
      <slot name="cited"></slot>
    </div>
    <div v-if="$slots.years">
      <h3>Years Spanned</h3>
      <slot name="years"></slot>
    </div>
    <div v-if="$slots.domain">
      <h3>Application Domain</h3>
      <slot name="domain"></slot>
    </div>
    <div>
      <h3>Reference</h3>
    </div>
  </div>
</template>
