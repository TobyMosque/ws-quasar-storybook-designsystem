<template>
  <q-page class="row items-center justify-evenly">
    <div class="q-gutter-y-sm">
      <q-card>
        <q-card-section>
          <q-toggle v-model="filled" label="Filled"></q-toggle>
          <q-toggle v-model="dense" label="Dense"></q-toggle>
          <q-toggle v-model="tglStandout" label="Standout"></q-toggle>
          <template v-if="standout">
            <q-input v-model="txtStandout" label="Standout Class"></q-input>
          </template>
        </q-card-section>
      </q-card>
      <q-card>
        <q-card-section>
          <ds-input v-model="text">
            <template v-slot:append>
              <q-avatar>
                <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
              </q-avatar>
            </template>
            <template v-slot:></template>
          </ds-input>
        </q-card-section>
      </q-card>
      <q-card>
        <q-markdown :src="code" show-copy />
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useDsState } from 'quasar-ui-design-system';
import { ref, computed } from 'vue';

const { filled, dense, standout } = useDsState()
const tglStandout = computed({
  get () { return !!standout.value },
  set (val: boolean) { standout.value = val }
})
const txtStandout = computed({
  get () { return typeof standout.value === 'string' ? standout.value : '' },
  set (val: string) { standout.value = val || true }
})
const codeStandout = computed(() => typeof standout.value === 'string' ? `'${standout.value}'` : standout.value)
const code = computed(() => {
  return `
\`\`\`js
import { useDsState } from 'quasar-ui-design-system';

const { filled, dense, standout } = useDsState()
filled.value = ${filled.value};
dense.value = ${dense.value};
standout.value = ${codeStandout.value};
\`\`\`
  `
})
const text = ref('text');
</script>
