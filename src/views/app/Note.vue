<script lang="ts">
import Vue from "vue";

class NoteDTO {
  public title?: string;
  public note?: string;
  public categories?: string[];
}

export default Vue.extend({
  name: "Note",
  props: {
    note: {
      type: Object || null,
      default: null
    }
  },
  data() {
    return {
      saveOrUpdate: "save",
      new_note: {
        id: new Date().getTime(),
        title: "",
        note: "",
        categories: []
      }
    };
  },
  beforeMount() {
    if (this.note) {
      this.saveOrUpdate = "update";
      this.new_note = this.note;
    }
  },
  computed: {
    SaveButtonAppear(): boolean {
      return ["note"].includes(this.$route.name as string);
    },
    titleNotEmpty(): boolean {
      return this.new_note.title !== "" || this.new_note.title !== null;
    }
  },
  methods: {
    saveNote(): void {
      if (this.saveOrUpdate === "save") {
        this.$store.commit("ADD_NEW_NOTE", this.new_note);
      } else if (this.saveOrUpdate === "update") {
        this.$store.commit("UPDATE_NOTE", this.new_note);
      }

      this.$router.push({
        path: "/"
      });
    }
  }
});
</script>

<template>
  <div>
    <ion-grid style="height: 100%;">
      <ion-row align-items-start style="height: 10%;">
        <ion-col size="12">
          <ion-input
            style="border-bottom: solid 0.5px #ccc;"
            type="text"
            placeholder="Note Title"
            :value="new_note.title"
            @input="new_note.title = $event.target.value"
          ></ion-input>
        </ion-col>
      </ion-row>

      <ion-row style="height: 90%;">
        <ion-col size="12" style="height: inherit;">
          <ion-textarea
            style="height: 100%;"
            placeholder="Enter Your Note Here..."
            :value="new_note.note"
            @input="new_note.note = $event.target.value"
          ></ion-textarea>
        </ion-col>
      </ion-row>
    </ion-grid>
    <ion-fab v-if="SaveButtonAppear" vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button @click="saveNote()">
        <ion-icon name="save"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </div>
</template>


