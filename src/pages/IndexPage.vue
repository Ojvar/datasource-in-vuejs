<template>
  <q-page class="row items-center justify-evenly">


    <q-list>
      <q-list-item v-for="item in list" :key="item.id">
        <q-section>
          <q-label >{{item.name}}</q-label>
        </q-section>
        </q-list-item>
    </q-list>


  </q-page>
</template>

<script setup lang="ts">
import { ref , Ref, onBeforeMount} from 'vue';
import { PhoneBook } from "../models/PhoneBook.model.ts"
import { PhoneBookItems } from "../datasources/test.datasource.ts"

const phoneBook = new PhoneBook();
const list : Ref<PhoneBookItems> = ref<PhoneBookItems>([]);

onBeforeMount(async () => {
  const res = await phoneBook.list();
  list.value = res;
})
</script>
